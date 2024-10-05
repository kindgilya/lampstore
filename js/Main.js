
class Main {
    _element = null;
    _subElements = null;

    _state = {
        search:"",
    }
  
      constructor({filterCategories, products,  Card}) {
          this._filterCategories = filterCategories;
          this._products = products;
          this._Card = Card;
          this._init();
      }
  
      _init(){
        this._element = createElement(this._getTemplate());
        this._subElements = this._getSubElements();
        this._render();
      }

      _setStateActiveHandler(data){
        this._setStateSearch(data);
        this._render();
      }

      _setStateSearch(data){
        if (data === "delete") {
            this._state.search = "";
        }
        else{
            this._state.search += data;
        }
      }

      _generateFilteredCards(data){
       const filteredProducts = this._products.filter((obj) => {
            return obj.title.toLowerCase().includes(this._state.search.toLowerCase());
        });
        return filteredProducts.map((obj) => {
            return new this._Card(obj).element;
        });
      }
  
       _generateCards() {
        return this._products.map((obj) => {
            return new this._Card(obj).element;
        });
        }
    
      _getSubElements() {
        return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, elem) => {
          return {
            ...acc,
            [elem.getAttribute("data-element")]: elem,
          };
        }, {});
      }
  
      _render() {
        this._subElements.cards.innerHTML = "";
        if (this._state.search === "") {
            this._subElements.cards.append(...this._generateCards()); 
        }
        else{
            this._subElements.cards.append(...this._generateFilteredCards());  
        }
      }
  
      _getTemplate(){
          return ` <main class="main">
        <form class="filters" method="post" action="#" data-element="filters"></form>
        <div class="cards" data-element="cards"></div>
        </main>`
      }

      search(data){
        this._setStateActiveHandler(data);
      }
  
      get element() {
        return this._element;
      }
  
  }