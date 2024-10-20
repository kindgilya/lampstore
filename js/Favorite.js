class Favorite{
    _element = null;

    _state ={
      active: false,
    }
  
    constructor() {
      this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._addListeners();
      this._render();
    }

    _setStateActive(){
      this._state.active = !this._state.active;
    }

    _addListeners() {
      this._element.addEventListener("click", (event) => {
        event.preventDefault();
        this._setStateActive();
        this._render();
      })
    }

    _render(){
    if (this._state.active) {
      this._element.classList.add("favorite--active");
        
    } else {
      this._element.classList.remove("favorite--active");   
    }
    }
  
    _getTemplate(){
        return `<a href="#" class="favorite ${this._state.active ? "favorite--active" : ""}">
                <i class="fa-regular fa-star"></i>
              </a>`
    }
  
    get element() {
      return this._element;
    }
}