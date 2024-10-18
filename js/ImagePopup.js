class ImagePopup{
    _element = null;
    _subElements = null;
  
    constructor(image) {
        this._image = image
        this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._addListeners();
    }

    _addListeners() {
      this._subElements.close.addEventListener("click", () => {
        
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
        return ` <div class="popup popup--img">
                <button class="btn btn--close" data-element="close">
                    <i class="fa-regular fa-rectangle-xmark"></i>
                </button>
                    <img class="popup__img" src="images/lamp_1_white.jpg" alt="">
                </div>`
    }
  
    get element() {
      return this._element;
    }
}