class Item{
    _element = null;

    constructor({title, value,unit}) {
        this._title = title;
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
            <span class="item__title">${this._title}</span>
            <span class="item__text">${this._value}${this._unit}</span>
          </div>
        </div>`
    }

    get element() {
      return this._element;
    }
}