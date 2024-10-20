class Option{
    _element = null;
    _subElements = null;

    _state = {
        active: false,
    }
  
    constructor(props,OptionItem,handler) {
        this._props = props;
        this._handler = handler;
        this._OptionItem = OptionItem;
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
      this._element.addEventListener("click", (el) => {
        this._setStateActive();
        this._render();
      })
    }

    _setStateCurrentOptionHandler(id){
        this._handler(id); 
    }

    _generateOptionItem() {
        return this._props.map((obj) => {
          return new this._OptionItem(obj,this._setStateCurrentOptionHandler.bind(this)).element;
      });
      }

    _render(){
        if (this._state.active) {
            this._subElements.watt.classList.add("card__options-items--active");
            
          } else {
            this._subElements.watt.classList.remove("card__options-items--active");   
          }
        this._subElements.watt.innerHTML = "";
        this._subElements.watt.append(...this._generateOptionItem());
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
        return `<div class="card__options-content">
                  <button class="btn watt--btn card__options-btn" data-element="wattBtn">Watt</button>
                  <div class="card__options-items card__options-items--active ${this._state.active ? "card__options-items--active" : ""}" data-element="watt"></div>
                </div>`
    }
  
    get element() {
      return this._element;
    }
}