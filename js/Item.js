class Item {
    _element = null;

    constructor({text, value, unit}) {
        this._text = text;
        this._value = value;
        this._unit = unit;
        this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
    }

    _getTemplate(){
        return `<div class="item">
        <i class="fa-solid fa-arrow-right"></i>
        <div class="item__description">
          <span class="item__title">${this._text}</span>
          <span class="item__text">${this._value}${this._unit}</span>
        </div>
      </div>`
    }

    get element() {
      return this._element;
    }
}