class AboutPopup {
    _element = null;
    _subElements = null;

    _state ={
      active: false,
      properties:[],
    }
  
    constructor(Item) {
        this._Item = Item;
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

    _setStateProperties(properties){
      this._state.properties = properties; 
    }

    _addListeners() {
      this._subElements.close.addEventListener("click", () => {
      this.close();
      })

      this._element.addEventListener("click", (event) => {
        if (!event.target.closest(".popup__wrapper")) {
          this.close();
        }
        });
        
      // document.addEventListener("keydown", (el) => {
        //   if(el.keyCode === 27){
        //     this.close();
        //   }
        // });
      }

    _generateItems(){
      return this._state.properties.map((obj) => new this._Item(obj).element)
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
        this._subElements.items.innerHTML = "";
        this._subElements.items.append(...this._generateItems());
    }
  
    _getTemplate(){
        return `<div class="popup">
      <div class="popup__wrapper popup--about ${this._active ? "popup--active" : ""}">
      <button class="btn btn--close" data-element="close">
        <i class="fa-regular fa-rectangle-xmark"></i>
      </button>
      <span class="popup__title">Характеристики</span>
      <div class="popup__items" data-element="items"></div>
      </div>
    </div>`
    }

    open(properties){
      this._setStateProperties(properties);
      this._setStateActive();
      this._render();
    }

    close(){
      this._setStateActive();
      this._render();
      this._setStateProperties([]);
    }
  
    get element() {
      return this._element;
    }
}