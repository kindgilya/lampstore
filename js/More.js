class More{
    _element = null;

    constructor(handler) {
      this._handler = handler;
      this._init();
      }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._addListeners();
    }

    _addListeners() {
      this._element.addEventListener("click", () => {
        this._handler();
      })
    }

    _getTemplate(){
        return `<a href="#" class="more">
                <i class="fa-solid fa-arrow-right"></i>
              </a>`
    }
  
    get element() {
      return this._element;
    }
}