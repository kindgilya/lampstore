class Card {
    _element = null;
    _subElements = null;
  
      constructor({id, title, price, priceType, description, properties, watts, colors}) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._priceType = priceType;
        this._description = description;
        this._properties = properties;
        this._watts = watts;
        this._colors = colors;
        this._init();
      }
  
      _init(){
        this._element = createElement(this._getTemplate());
        this._subElements = this._getSubElements();
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
              <button class="btn watt--btn card__options-btn" data-element="watt">Watt</button>
              <button class="btn color--btn card__options-btn" data-element="Color">Color</button>
            </div>
            <button class="btn buy--btn">buy</button>
          </div>`
      }
  
      get element() {
        return this._element;
      }
  
  }