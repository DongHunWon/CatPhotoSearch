class SearchResult {
  $searchResult = null;
  $loading = null;
  $emptyData = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("article");
    this.$searchResult.className = "SearchResult";

    this.$loading = document.createElement("div");
    this.$loading.className = "loading"
    this.$loading.innerHTML = "loading..."
    this.$loading.style.display = "none"

    this.$emptyData = document.createElement("div");
    this.$emptyData.className = "empty"
    this.$emptyData.innerHTML = "검색 결과가 없습니다."
    this.$emptyData.style.display = "none"

    $target.appendChild(this.$searchResult);
    $target.appendChild(this.$emptyData);
    $target.appendChild(this.$loading)

    this.data = initialData;
    this.onClick = onClick;

    const dataLoad = JSON.parse(sessionStorage.getItem("result"));
    if (dataLoad) {
      this.data = dataLoad;
      this.render();
    };
  }

  setState(nextData) {
    this.data = nextData;
    sessionStorage.setItem("result", JSON.stringify(this.data));
    this.render();
  }

  render() {
    if (this.data.length === 0) {
      this.$loading.style.display = "none";
      this.$emptyData.style.display = "block";
      this.$searchResult.innerHTML = null;
    }
    else {
      this.$loading.style.display = "none"
      this.$emptyData.style.display = "none";
      this.$searchResult.innerHTML = this.data
        .map(
          cat => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} title="${cat.name}" />
            </div>
          `
        )
        .join("");
      

      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });

      // 스크롤 바닥일 때 데이터 로딩
      // window.addEventListener("scroll", () => {
      //   if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {

      //   }
      // });
    }
  }
}
