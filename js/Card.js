class Card {
    _element = null;
    _subElements = null;

    _state = {
      // favorite
        wattActive:false,
        colorActive:false,
        currentWatt:14,
        currentColor:"",
    }

    /* 
    
    this._ComponentChoice = ComponentChoice;
    this._ComponentChoiceItem = ComponentChoiceItem;
    
    */
    
      constructor({id, title, price, priceType, description, properties, watts, colors},ColorOption,WattOpion,Favorite,More,Button) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._priceType = priceType;
        this._description = description;
        this._properties = properties;
        this._watts = watts;
        this._ColorOption = ColorOption;
        this._WattOpion = WattOpion;
        this._Favorite = Favorite;
        this._More = More;
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

      _setStateWattActive(){
        this._state.wattActive = !this._state.wattActive;
      }

      _setStateCurrentWatt(id){
        const currentWatt = this._watts.find((el) => el.id === id);
        this._state.currentWatt = currentWatt.text;
      }

      _setStateCurrentWattHandler(id){
        this._setStateCurrentWatt(id);
        this._render();
      }

      _setStateColorActive(){
        this._state.colorActive = !this._state.colorActive;
      }

      _setStateCurrentColor(currentImage){
        this._state.currentColor = currentImage.img;
      }

      _setStateCurrentColorHandler(id){
        const currentImage = this._colors.find((el) => el.id === id);
        this._setStateCurrentColor(currentImage);
        this._render();
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

        this._subElements.wattBtn.addEventListener("click", () => {
          this._setStateWattActive();
          this._render();
        });

        this._subElements.colorBtn.addEventListener("click", () => {
          this._setStateColorActive();
          this._render();
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
        if (this._state.wattActive) {
          this._subElements.watt.classList.add("card__options-items--active");
          
        } else {
          this._subElements.watt.classList.remove("card__options-items--active");   
        }

        if (this._state.colorActive) {
          this._subElements.color.classList.add("card__options-items--active");
          
        } else {
          this._subElements.color.classList.remove("card__options-items--active");   
        }
        this._subElements.watt.innerHTML = "";
        this._subElements.watt.append(...this._generateOptionsWatt());
        this._subElements.color.innerHTML = "";
        this._subElements.color.append(...this._generateOptionsColor());
        this._subElements.favorite.innerHTML = "";
        this._subElements.favorite.append(this._generateFavorite());
        this._subElements.more.innerHTML = "";
        this._subElements.more.append(this._generateMore());
        if (this._state.currentColor != "") {
          this._subElements.img.src = `images/${this._state.currentColor}`;
        }
        this._subElements.img.style.boxShadow = `0 0 ${this._state.currentWatt}px #bf8061`;

      }

      _generateOptionsWatt() {
        return this._watts.map((obj) => {
          return new this._WattOpion(obj,this._setStateCurrentWattHandler.bind(this)).element;
      });
      }

      _generateOptionsColor(){
        return this._colors.map((obj) => {
          return new this._ColorOption(obj,this._setStateCurrentColorHandler.bind(this)).element;
      });
      }

      _generateFavorite(){
        return new this._Favorite().element;
      }

      _generateMore(){
        return new this._More(this._setStateMoreHandler.bind(this)).element;
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
            <div class="card__options">
                <div class="card__options-content">
                  <button class="btn watt--btn card__options-btn" data-element="wattBtn">Watt</button>
                  <div class="card__options-items ${this._state.watt ? "card__options-items--active" : ""}" data-element="watt"></div>
                </div>
                <div class="card__options-content">
                  <button class="btn color--btn card__options-btn" data-element="colorBtn">Color</button>
                  <div class="card__options-items ${this._state.color ? "card__options-items--active" : ""}" data-element="color"></div>
              </div>
            <button class="btn buy--btn" data-element="buy">buy</button>
          </div>`
      }
  
      get element() {
        return this._element;
      }
  
  }
