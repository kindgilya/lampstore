class OptionItem{
    _element = null;
    _subElements = null;
  
    constructor({id,text},handler) {
        this._id = id;
        this._text = text;
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

    _getSubElements() {
      return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, elem) => {
        return {
          ...acc,
          [elem.getAttribute("data-element")]: elem,
        };
      }, {});
    }
  
    _getTemplate(){
        return `<div class="card__options-item">${this._text}</div>`
    }
  
    get element() {
      return this._element;
    }
}