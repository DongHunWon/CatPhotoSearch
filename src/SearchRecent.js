class SearchRecent {
  $searchRecent = null;
  data = [];
  onClick = null;

  constructor({ $target, onClick }) {
    this.$searchRecent = document.createElement("div");
    this.$searchRecent.className = "SearchRecent";

    $target.appendChild(this.$searchRecent);

    this.onClick = onClick;

    const dataLoad = JSON.parse(sessionStorage.getItem("recent"));
    if (dataLoad) {
      this.data = dataLoad;
      this.render();
    }
  };

  addKeyword(keyword) {
    // 중복검사
    let newData = this.data.filter((item) => {
      return item !== keyword;
    });

    if (newData.length < 5) {
      newData.push(keyword);
    }
    else {
      newData.shift();
      newData.push(keyword);
    }

    this.data = newData;
    sessionStorage.setItem("recent", JSON.stringify(this.data));
  } 

  setState(nextData) {
    this.addKeyword(nextData);
    this.render();
  }

  render() {
    this.$searchRecent.innerHTML = this.data
      .map(
        recent => `
          <div class="recent">${recent}</div>
        `
      )
      .join("");

    this.$searchRecent.querySelectorAll(".recent").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        document.querySelector(".empty").style.display = "none";
        document.querySelector(".loading").style.display = "block";
        this.onClick(this.data[index]);
      });
    })
  };
}