class AboutPopup{
    _element = null;
    _subElements = null;

    _state ={
      active: false,
    }
  
    constructor(products, Item) {
        this._products = products;
        this._Item = Item;
        this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._addListeners();
    }

    _setStateActive(){
      this._state.active = !this._state.active;
    }

    _addListeners() {
      this._subElements.close.addEventListener("click", () => {
        this._dispathEventClose();
      })
    }

    _dispathEventClose() {
      this._element.dispatchEvent(
        new CustomEvent("close-about", {
          bubbles: true,
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

    _render(){
    if (this._state.active) {
        this._element.classList.add("popup--active");
        
    } else {
        this._element.classList.remove("popup--active");   
    }
    }
  
    _getTemplate(){
        return ` <div class="popup popup--about popup--active">
      <button class="btn btn--close">
        <i class="fa-regular fa-rectangle-xmark"></i>
      </button>
      <span class="popup__title">Характеристики</span>
      <div class="popup__items">
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Ценаfsdatwegwegregwerger</span>
            <span class="item__text">997руб</span>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Цена</span>
            <span class="item__text">997feyershrtруб</span>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Цена</span>
            <span class="item__text">997руб</span>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Цена</span>
            <span class="item__text">997руб</span>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Цена</span>
            <span class="item__text">997руб</span>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Цена</span>
            <span class="item__text">997руб</span>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Цена</span>
            <span class="item__text">997руб</span>
          </div>
        </div>
        <div class="item">
          <i class="fa-solid fa-arrow-right"></i>
          <div class="item__description">
            <span class="item__title">Цена</span>
            <span class="item__text">997руб</span>
          </div>
        </div>
      </div>
    </div>`
    }

    open(){
    }

    close(){
    }
  
    get element() {
      return this._element;
    }
}