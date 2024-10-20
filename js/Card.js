class Card {
    _element = null;
    _subElements = null;

    _state = {
      // favorite
        currentWatt:14,
        currentColor:"",
    }

    /* 
    
    this._ComponentChoice = ComponentChoice;
    this._ComponentChoiceItem = ComponentChoiceItem;
    
    */
    
      constructor({id, title, price, priceType, description, properties, watts, colors}, Favorite,Button,Option,OptionItem) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._priceType = priceType;
        this._description = description;
        this._properties = properties;
        this._watts = watts;
        this._Favorite = Favorite;
        this._Option = Option;
        this._OptionItem = OptionItem;
        this._Button = Button;
        this._colors = colors;
        this._init();
      }

      _init(){
        this._element = createElement(this._getTemplate());
        this._subElements = this._getSubElements();
        this._setStateCurrentColor(this._colors[0]);
        this._addListeners();
        this._render();
      }

      _setStateCurrentWattHandler(id){
        const currentWatt = this._watts.find((el) => el.id === id);
        this._setStateCurrentWatt(currentWatt);
        this._render();
      }

      _setStateCurrentWatt(currentWatt){
        this._state.currentWatt = currentWatt.text;
      }

      _setStateCurrentColorHandler(id){
        const currentImage = this._colors.find((el) => el.id === id);
        this._setStateCurrentColor(currentImage);
        this._render();
      }

      _setStateCurrentColor(currentImage){
        this._state.currentColor = currentImage.img;
      }

      _setStateMoreHandler(){
        this._element.dispatchEvent(this._getCustomEvent("open-active", {
          id:this._id,
          title:this._title,
          price:this._price,
          colors:this._colors,
        }));
      }

      _addListeners() {
        this._subElements.buy.addEventListener("click", () => {
          this._element.dispatchEvent(this._getCustomEvent("buy", this._properties));
        });

        this._subElements.img.addEventListener("click", () => {
          this._element.dispatchEvent(this._getCustomEvent("open-popup", this._state.currentColor));
        });
      }

      // pattern function fabric
      _getCustomEvent(name, data) {
        return new CustomEvent(name, {
            bubbles: true,
            detail: data,
          })
      }

      _render(){
        this._subElements.favorite.innerHTML = "";
        this._subElements.favorite.append(this._generateFavorite());
        this._subElements.more.innerHTML = "";
        this._subElements.more.append(this._generateMore());
        if (this._state.currentColor != "") {
          this._subElements.img.src = `images/${this._state.currentColor}`;
        }
        this._subElements.img.style.boxShadow = `0 0 ${this._state.currentWatt}px #bf8061`;
        this._subElements.option.innerHTML = "";
        this._subElements.option.append(this._generateOptionWatt());
        this._subElements.option.append(this._generateOptionColor());

      }

      _generateOptionWatt() {
         return new this._Option(this._watts,this._OptionItem,this._setStateCurrentWattHandler.bind(this)).element;
      }

      _generateOptionColor() {
        return new this._Option(this._colors,this._OptionItem,this._setStateCurrentColorHandler.bind(this)).element;
     }

      _generateFavorite(){
        return new this._Favorite().element;
      }

      _generateMore(){
        return new this._Button({use:"more", disabled:false, text:"", icon:"fa-solid fa-arrow-right"},this._setStateMoreHandler.bind(this)).element;
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
          return `<div class="card">
            <div class="card__more" data-element="more"></div>
            <div class="card__favorite" data-element="favorite"></div>
            <img class="card__img" src="images/${this._colors[0].img}" alt="" style="box-shadow: 0 0 14px #bf8061;" data-element="img"/>
            <div class="card__desc">
              <h3 class="card__title">${this._title}</h3>
              <span class="card__price">${this._price} ${this._priceType}</span>
            </div>
            <div class="card__options" data-element="option"></div>
            <button class="btn buy--btn" data-element="buy">buy</button>
          </div>`
      }
  
      get element() {
        return this._element;
      }
  
  }
