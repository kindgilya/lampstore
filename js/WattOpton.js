class WattOpion{
    _element = null;
    _subElements = null;
  
    constructor({id,text,unit},handler) {
        this._id = id;
        this._text = text;
        this._unit = unit;
        this._handler = handler;
        this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._addListeners();
    }

    _addListeners() {
      this._element.addEventListener("click", (el) => {
        this._handler(this._id);
      })
    }

    _dispathEventProduct() {
      this._element.dispatchEvent(
        new CustomEvent("watt", {
          bubbles: true,
          detail: this._id,
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
        return `<div class="card__options-item">${this._text} ${this._unit}</div>`
    }
  
    get element() {
      return this._element;
    }
}