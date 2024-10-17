class Option{
    _element = null;
    _subElements = null;
  
    constructor({text}) {
        this._text = text;
        this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
    }

    _addListeners() {
   
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