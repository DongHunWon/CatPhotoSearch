class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    console.log('data', nextData)
    this.data = nextData;
    this.render();
  }

  modalClose() {
    document.addEventListener("mouseup", (event) => {
      if (event.target.className === "ImageInfo" || event.target.className === "close") {
        this.$imageInfo.style.animation = "fadeout 1s";
        setTimeout(() => {
          this.$imageInfo.style.display = "none";
          this.$imageInfo.style.animation = "fadein 1s";
        }, 500);
      }
    });

    document.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        this.$imageInfo.style.animation = "fadeout 1s";
        setTimeout(() => {
          this.$imageInfo.style.display = "none";
          this.$imageInfo.style.animation = "fadein 1s";
        }, 500);
      }
    });
  }

  

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;
      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";

      this.modalClose();

    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
