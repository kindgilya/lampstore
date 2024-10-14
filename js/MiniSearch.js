class MiniSearch {

    _element = null;
    _subElements = null;

    _state = {
       active: false,
      }
  
    constructor() {
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
      this._subElements.search.addEventListener("click", () => {
        this._setStateActive();
        this._render();
      });
  
      this._subElements.form.addEventListener("input", (event) => {
        // setStateValue(event.target.value)
          this._dispathEventSearch(event.target.value);
      });

    }

    _render(){
        this._state.active ? 
        this._subElements.wrapper.classList.add("mini-search__form-wrapper--active") 
        : 
        this._subElements.wrapper.classList.remove("mini-search__form-wrapper--active");
    }
  
    _dispathEventSearch(data) {
      this._element.dispatchEvent(
        new CustomEvent("search", {
          bubbles: true,
          detail: data.toLowerCase(),
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
      return `<div class="mini-search">
          <button class="btn btn--search" data-element="search"><i class="fa-solid fa-search"></i></button>
          <div class="mini-search__form-wrapper ${this._state.active ? "mini-search__form-wrapper--active" : ""}" data-element="wrapper">
            <form class="mini-search-form" action="#" method="post" data-element="form">
              <input class="mini-search-form__field" type="text" placeholder="Название продукта..." />
            </form>
          </div>
        </div>`
      }
      
      get element() {
        return this._element;
      }
  
  }