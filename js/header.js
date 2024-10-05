function createElement(html) {
    const div = document.createElement("div");
    div.insertAdjacentHTML("beforeend", html);
    return div.firstElementChild;
  }


class Header {
  _element = null;
  _subElements = null;

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

    _generateMiniSearch() {
      return new this._MiniSearch().element;
    }

    _generateBasket() {
      return new this._Basket().element;
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

    get element() {
      return this._element;
    }

}


class MiniSearch {

  _element = null;

  constructor() {
    this._init();
  }

  _init(){
    this._element = createElement(this._getTemplate());
  }

  _getTemplate(){
    return `<div class="mini-search">
        <button class="btn btn--search"><i class="fa-solid fa-search"></i></button>
        <div class="mini-search__form-wrapper">
          <form class="mini-search-form" action="#" method="post">
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

  constructor() {
    this._init();
  }

  _init(){
    this._element = createElement(this._getTemplate());
  }

  _getTemplate(){
    return `<div class="basket">
            <button class="btn btn--basket"><i class="fa-solid fa-cart-shopping"></i></i></button>
            <div class="basket__description">
                <span href="#" class="basket__cost">0 руб</span>
                <span href="#" class="basket__buy">0 товаров</span>
              </div>
             <!-- <div class="basket__list">
                  <span class="basket__list_title">Товары в корзине</span>
                  <button class="btn btn--order">Оформить заказ</button>
              </div> -->
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



