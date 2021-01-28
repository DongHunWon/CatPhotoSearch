const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandom }) {
    const $inputWrap = document.createElement("div");
    $inputWrap.className = "inputWrap";

    const $searchInput = document.createElement("input");
    $searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";

    $inputWrap.appendChild($searchInput);
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

    console.log("SearchInput created.", this);
  }
  render() {}
}
