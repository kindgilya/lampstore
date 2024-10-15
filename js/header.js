
class Header {
  _element = null;
  _subElements = null;

  _state = {
    product: [],
  }

    constructor({MiniSearch, products,Basket,MiniProduct}) {
        this._MiniSearch = MiniSearch;
        this._Basket = Basket;
        this._products = products;
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

    _setStateProduct(product){
      const existingProduct = this._state.product.find(el => el.id === product.id);

      if (existingProduct) {
          existingProduct.price += product.price;
      } else {
          this._state.product.push({ ...product, count: 1});
      }
    }

    _removeProduct(id) {
      this._state.product = this._state.product.filter(product => product.id !== id);
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
      this._subElements.wrapper.append(this._generateBasket(this._state.product));
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

    update(id){
      this._setStateProduct(this._products.find((product) => product.id === id));
      this._render();
    }

    close(id){
      this._removeProduct(id);
      this._render();
    }

}



