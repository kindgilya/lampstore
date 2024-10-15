class MiniProduct {
  _element = null;
  _subElements = null;

  constructor({id, colors, title, price}) {
      this._id = id;
      this._colors = colors;
      this._title = title;
      this._price = price;
      this._init();
    }

  _init(){
    this._element = createElement(this._getTemplate());
    this._subElements = this._getSubElements();
    this._addListeners();
  }

  _addListeners() {
    this._subElements.close.addEventListener("click", () => {
      this._dispathEventProduct(this._id);
    });
  }

  _dispathEventProduct(id) {
    this._element.dispatchEvent(
      new CustomEvent("deleteProduct", {
        bubbles: true,
        detail: id,
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
      return `<div class="mini-product mini-product__basket">
                    <img class="mini-product__img" src="images/${this._colors[0].img}" alt="">
                      <div class="mini-product__info">
                        <spam class="mini-product__text">${this._title}</spam>
                        <spam class="mini-product__price">${this._price}</spam>
                      </div>
                      <button class="btn btn--close" data-element="close">X</button>
                    </div>`
  }

  get element() {
    return this._element;
  }
  }