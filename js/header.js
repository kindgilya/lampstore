class Header {
  _element = null;
  _subElements = null;
  _firstRender = false;

  constructor({MiniSearch,Basket,MiniProduct}) {
        this._MiniSearch = MiniSearch;
        this._Basket = new Basket(MiniProduct);
        this._MiniProduct = MiniProduct;
        this._init();
    }

    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._render();
    }

    _generateMiniSearch() {
      return new this._MiniSearch().element;
    }
    
    _generateBasket() {
      return this._Basket.element;
    }

    _getSubElements() {
      return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, elem) => {
        return {
          ...acc,
          [elem.getAttribute("data-element")]: elem,
        };
      }, {});
    }

    _render() {
      if (!this._firstRender) {
      this._firstRender = true;
      }
      this._subElements.wrapper.innerHTML = "";
      this._subElements.wrapper.append(this._generateMiniSearch());
      if (this._firstRender) {
        this._subElements.wrapper.append(this._generateBasket());
      }
    }

    _getTemplate(){
        return `<header class="header">
        <nav class="nav">
          <a href="#" class="logo">
            <img src="images/logo.png" alt="" class="logo__img" />
          </a>
          <ul class="menu">
            <li class="menu__item">
              <a href="#" class="menu__link">Главная</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link menu__link--active">Каталог</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Контакты</a>
            </li>
          </ul>
          <div class="header__wrapper" data-element="wrapper"></div>
          </nav>
      </header>`
    }

    update(obj){
      this._Basket.add(obj);
    }

    close(id){
      this._Basket.remove(id);
    }

    get element() {
      return this._element;
    }
}



