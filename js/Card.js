class Card {
    _element = null;
    _subElements = null;

    _state = {
      watt:{
        active:false,
        power: 14,
      },
      color:{
        active:false,
        img: 0,
      },
    }
  
      constructor({id, title, price, priceType, description, properties, watts, colors,option},Option) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._priceType = priceType;
        this._description = description;
        this._properties = properties;
        this._watts = watts;
        this._option = option;
        this._colors = colors;
        this._Option = Option;
        this._init();
      }

      _init(){
        this._element = createElement(this._getTemplate());
        this._subElements = this._getSubElements();
        this._addListeners();
      }

      _setStateWattActive(){
        this._state.watt.active = !this._state.watt.active;
      }

      _setStateWattPower(){
        this._state.watt.active = !this._state.watt.active;
      }

      _setStateColorActive(){
        this._state.color.active = !this._state.color.active;
      }

      _addListeners() {
        this._subElements.buy.addEventListener("click", () => {
          this._dispathEventBuy();
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

      _dispathEventBuy() {
        this._element.dispatchEvent(
          new CustomEvent("buy", {
            bubbles: true,
            detail: {
              id:this._id,
              title:this._title,
              price:this._price,
              colors:this._colors,
            },
          })
        );
      }

      _render(){
        if (this._state.watt.active) {
          this._subElements.watt.classList.add("card__options-items--active");
          
        } else {
          this._subElements.watt.classList.remove("card__options-items--active");   
        }

        if (this._state.color.active) {
          this._subElements.color.classList.add("card__options-items--active");
          
        } else {
          this._subElements.color.classList.remove("card__options-items--active");   
        }
        this._subElements.watt.innerHTML = "";
        this._subElements.watt.append(...this._generateOptionsWatt());
        this._subElements.color.innerHTML = "";
        this._subElements.color.append(...this._generateOptionsColor());
      }

      _generateOptionsWatt() {
        return this._watts.map((obj) => {
          return new this._Option(obj).element;
      });
      }
      _generateOptionsColor(){
        return this._colors.map((obj) => {
          return new this._Option(obj).element;
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
  
      _getTemplate(){
          return `<div class="card">
            <div class="card__more">
              <a href="#" class="more">
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div class="card__favorite">
              <a href="#" class="favorite">
                <i class="fa-regular fa-star"></i>
              </a>
            </div>
            <img class="card__img" src="images/${this._colors[this._state.color.img].img}" alt="" style="box-shadow: 0 0 ${this._state.watt.power}px #bf8061;" />
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