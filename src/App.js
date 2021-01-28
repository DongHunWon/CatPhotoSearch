console.log("app is running!");

class App {
  $target = null;
  data = [];
 
  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data, keyword));
      }
    });

    this.searchRandom = new SearchRandom({
      onRandom: () => {
        api.random().then(({ data }) => this.setState(data));
      },
    });

    this.searchRecent = new SearchRecent({
      $target,
      onClick: keyword => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data, keyword));
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        api.fetchCatInfo(image.id)
          .then(({ data }) => {
            image.temperament = data.temperament;
            image.origin = data.origin;
            this.imageInfo.setState({
              visible: true,
              image,
            });
          });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData, searchKeyword = "") {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
    if (searchKeyword) this.searchRecent.setState(searchKeyword);
  }
}
