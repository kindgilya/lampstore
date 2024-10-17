class Card {
    _element = null;
    _subElements = null;
  
      constructor({id, title, price, priceType, description, properties, watts, colors},Option) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._priceType = priceType;
        this._description = description;
        this._properties = properties;
        this._watts = watts;
        this._colors = colors;
        this._Option = Option;
        this._init();
      }

  
      _init(){
        this._element = createElement(this._getTemplate());
        this._subElements = this._getSubElements();
        this._addListeners();
      }

      _addListeners() {
        this._subElements.buy.addEventListener("click", () => {
          this._dispathEventBuy();
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
            <img class="card__img" src="images/${this._colors[0].img}" alt="" />
            <div class="card__desc">
              <h3 class="card__title">${this._title}</h3>
              <span class="card__price">${this._price} ${this._priceType}</span>
            </div>
            <div class="card__options">
            <div class="card__options">
                <div class="card__options-content">
                  <button class="btn watt--btn card__options-btn" data-element="wattBtn">Watt</button>
                  <div class="card__options-items" data-element="watt"></div>
                </div>
                <div class="card__options-content">
                  <button class="btn color--btn card__options-btn" data-element="colorBtn">Color</button>
                  <div class="card__options-items" data-element="color"></div>
              </div>
            </div>
            <button class="btn buy--btn" data-element="buy">buy</button>
          </div>`
      }
  
      get element() {
        return this._element;
      }
  
  }