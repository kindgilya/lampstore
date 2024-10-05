function createElement(html) {
    const div = document.createElement("div");
    div.insertAdjacentHTML("beforeend", html);
    return div.firstElementChild;
  }


class Header {
  _element = null;
  _subElements = null;

  _state = {
    activePanel: {
      search:false,
      busket:false,
    }
  }

    constructor({MiniSearch, Basket}) {
        this._MiniSearch = MiniSearch;
        this._Basket = Basket;
        this._init();
    }

    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._render();
    }

    _setActivePanel(panel){
      if (panel === "search") {
        this._state.activePanel.search = !this._state.activePanel.search;
        this._state.activePanel.busket = false;
      }
      if (panel === "busket") {
        this._state.activePanel.busket = !this._state.activePanel.busket;
        this._state.activePanel.search = false;
      }
      else{
        return;
      }
    }

    _generateMiniSearch() {
      return new this._MiniSearch({active:this._state.activePanel.search}, this._setStateActiveHandler.bind(this)).element;
    }
    
    _generateBasket() {
      return new this._Basket({active:this._state.activePanel.busket}, this._setStateActiveHandler.bind(this)).element;
    }

    _setStateActiveHandler(panel){
      this._setActivePanel(panel);
      this._render();
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
      this._subElements.wrapper.innerHTML = "";
      this._subElements.wrapper.append(this._generateMiniSearch());
      this._subElements.wrapper.append(this._generateBasket());
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
    
    close(){
      if (this._state.activePanel.search) {
        this._setStateActiveHandler("search");
      }
      if (this._state.activePanel.busket) {
        this._setStateActiveHandler("busket");
      }
    }

    get element() {
      return this._element;
    }

}


class MiniSearch {

  _element = null;
  _subElements = null;

  constructor({active},setStateActiveHandler) {
    this._active = active;
    this._setStateActiveHandler = setStateActiveHandler;
    this._init();
  }

  _init(){
    this._element = createElement(this._getTemplate());
    this._subElements = this._getSubElements();
    this._addListeners();
  }

  _addListeners() {
    this._subElements.search.addEventListener("click", () => {
      this._setStateActiveHandler("search");
    });
    this._subElements.form.addEventListener("input", (event) => {
      if (event.data != null) {
        this._dispathEventSearch(event.data);
      }
      else{
        this._dispathEventSearch("delete");
      }
    });
  }

  _dispathEventSearch(data) {
    this._element.dispatchEvent(
      new CustomEvent("search", {
        bubbles: true,
        detail: data.toLowerCase(),
      })
    );
  }

  _getSubElements() {
    return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, elem) => {
      return {
        ...acc,
        [elem.getAttribute("data-element")]: elem,
      };
    }, {});
  }

  _getTemplate(){
    return `<div class="mini-search">
        <button class="btn btn--search" data-element="search"><i class="fa-solid fa-search"></i></button>
        <div class="mini-search__form-wrapper ${this._active ? "mini-search__form-wrapper--active" : ""}">
          <form class="mini-search-form" action="#" method="post" data-element="form">
            <input class="mini-search-form__field" type="text" placeholder="Название продукта..." />
          </form>
        </div>
      </div>`
    }

    get element() {
      return this._element;
    }

}

class Basket {

  _element = null;
  _subElements = null;

  constructor({active},setStateActiveHandler) {
    this._active = active;
    this._setStateActiveHandler = setStateActiveHandler;
    this._init();
  }

  _init(){
    this._element = createElement(this._getTemplate());
    this._subElements = this._getSubElements();
    this._addListeners();
  }

  _addListeners() {
    this._subElements.basket.addEventListener("click", () => {
      this._setStateActiveHandler("busket");
    });
    this._subElements.description.addEventListener("click", () => {
      this._setStateActiveHandler("busket");
    });
  }

  _getSubElements() {
    return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, elem) => {
      return {
        ...acc,
        [elem.getAttribute("data-element")]: elem,
      };
    }, {});
  }

  _getTemplate(){
    return `<div class="basket">
            <button class="btn btn--basket" data-element="basket"><i class="fa-solid fa-cart-shopping"></i></i></button>
            <div class="basket__description" data-element="description">
                <span href="#" class="basket__cost">0 руб</span>
                <span href="#" class="basket__buy">0 товаров</span>
              </div>
             <div class="basket__list ${this._active ? "basket__list--active" : ""}">
                  <span class="basket__list_title">Товары в корзине</span>
                  <button class="btn btn--order">Оформить заказ</button>
              </div>
          </div>`
      }

      get element() {
        return this._element;
      }
}


class BasketProducts {
  constructor(parameters) {
    
  }
  _getTemplate(){
    return `<div class="mini-product mini-product__basket">
                    <img class="mini-product__img" src="/images/lamp_1_white.jpg" alt="">
                    <div class="mini-product__info">
                      <spam class="mini-product__text">Рабочая лампа на струбцине KD-312</spam>
                      <spam class="mini-product__price">1148</spam>
                    </div>
                    <button class="btn btn--close">X</button>
                  </div>`
}
}



