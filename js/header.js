
class Header {
  _element = null;
  _subElements = null;

    constructor({MiniSearch, Basket,MiniProduct}) {
        this._MiniSearch = MiniSearch;
        this._Basket = Basket;
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
    
    _generateBasket(product) {
      return new this._Basket({product,MiniProduct}).element;
    }


    _getSubElements() {
      return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, elem) => {
        return {
          ...acc,
          [elem.getAttribute("data-element")]: elem,
        };
      }, {});
    }

    _render(product) {
      this._subElements.wrapper.innerHTML = "";
      this._subElements.wrapper.append(this._generateMiniSearch());
      this._subElements.wrapper.append(this._generateBasket(product ? product : {}));
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

    get element() {
      return this._element;
    }

    update(product){
      this._render(product);
    }

}



