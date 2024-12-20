
class CardList {
    _element = null;
    _subElements = null;

    _state = {
        search:"",

    }

    constructor({filterCategories, products, Card, Favorite,Button,Option,OptionItem}) {
          this._filterCategories = filterCategories;
          this._products = products;
          this._Card = Card;
          this._Favorite = Favorite;
          this._Option = Option;
          this._OptionItem = OptionItem;
          this._Button = Button;
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
        this._state.search = data;
      }


      _generateFilteredCards(data){
       return this._products
       .filter((obj) => {
            return obj.title.toLowerCase().includes(this._state.search.toLowerCase());
        }).map((obj) => {
          // подкрашивать titles (obj передать this._state.search)
            return new this._Card({...obj},this._Favorite,this._Button,this._Option,this._OptionItem).element;
        });
      }

      // лампа <i class="card__title-marker">супер</i> лампа
  
       _generateCards() {
        return this._products.map((obj) => {
            return new this._Card({...obj},this._Favorite,this._Button,this._Option,this._OptionItem).element;
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
          return `<section class="card-list">
          <div class="card-list__wrapper" data-element="cards"></div>
          </section>`
      }

      update(data){
        this._setStateActiveHandler(data);
      }
  
      get element() {
        return this._element;
      }
  
  }