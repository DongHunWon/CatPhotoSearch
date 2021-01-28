const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandom }) {
    const $inputWrap = document.createElement("div");
    $inputWrap.className = "inputWrap";

    const $searchInput = document.createElement("input");
    $searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";

    const $randomBtn = document.createElement("button");
    $randomBtn.id = "random-btn"
    $randomBtn.innerHTML = "랜덤";

    $inputWrap.appendChild($searchInput);
    $inputWrap.appendChild($randomBtn);
    $target.appendChild($inputWrap);
    $searchInput.focus();
    
    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        document.querySelector(".loading").style.display = "block";
        document.querySelector(".empty").style.display = "none";
        onSearch(e.target.value);
      }
    });
    $searchInput.addEventListener("click", e => {
      $searchInput.value = ''
    });

    $randomBtn.addEventListener("click", e => {
      $searchInput.value = ''
      document.querySelector(".loading").style.display = "block";
      document.querySelector(".empty").style.display = "none";
      onRandom();
    })

    console.log("SearchInput created.", this);
  }
  render() {}
}
