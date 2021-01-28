class Theme {
  isDark = null;
  text = null;
  $toggle = null;
  $toggleTxt = null;

  constructor({ $target }) {
    this.isDark  = window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches

    const $Wrap = document.createElement("label");
    $Wrap.id = "Theme";

    const $toggle = document.createElement("input");
    $toggle.type = "checkbox";
    $toggle.id = "Theme-change";
    this.$toggle = $toggle;

    const $toggleTxt = document.createElement("span");
    $toggleTxt.id = "Theme-txt";
    this.$toggleTxt = $toggleTxt;

    $Wrap.appendChild($toggle);
    $Wrap.appendChild($toggleTxt);
    $target.appendChild($Wrap);

    $toggle.addEventListener("click", e => {
      this.setState(e.target.checked);
    });
    
    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
      this.setState(e.matches);
    })

    this.setState(this.isDark);
  }

  setState(isCheck) {
    this.isDark = isCheck ? true : false;
    this.text = isCheck ? "Dark Mode" : "Light Mode";
    this.render();
  }

  render() {
    this.$toggle.checked = this.isDark;
    this.$toggleTxt.innerHTML = this.text;
    if (this.isDark) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }

  }
}