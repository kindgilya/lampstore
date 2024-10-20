class ImagePopup{
    _element = null;
    _subElements = null;

    _state ={
      active: false,
      currentImage:"",
    }
  
    constructor() {
        this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._addListeners();
    }

    _setStateCurrentImage(image){
      this._state.currentImage = image;
    }

    _setStateActive(){
      this._state.active = !this._state.active;
    }

    _addListeners() {
      this._subElements.close.addEventListener("click", () => {
        this.close();
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

    _render(){
      if (this._state.active) {
        this._element.classList.add("popup--active");
        
    } else {
        this._element.classList.remove("popup--active");   
    }
    this._subElements.img.src = `images/${this._state.currentImage}`;
    }
  
    _getTemplate(){
        return `<div class="popup popup--img ${this._active ? "popup--active" : ""}">
                <button class="btn btn--close" data-element="close">
                    <i class="fa-regular fa-rectangle-xmark"></i>
                </button>
                    <img class="popup__img" src="images/${this._state.currentImage}" alt="" data-element="img">
                </div>`
    }

    open(image){
      this._setStateCurrentImage(image);
      this._setStateActive();
      this._render();
    }

    close(){
      this._setStateCurrentImage("");
      this._setStateActive();
      this._render();
    }
  
    get element() {
      return this._element;
    }
}