

class Basket {

    _element = null;
    _subElements = null;

    _state = {
        active: false,
        products: [],
       }
  
    constructor({product,MiniProduct}) {
      this._product = product;
      this._MiniProduct = MiniProduct;
      this._init();
    }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._addListeners();
      this._setStateProducts(this._product);
    }

    _setStateActive(){
        this._state.active = !this._state.active;
    }

    _setStateProducts(data){
        this._state.products.push(data);
        console.log(this._state.products);
    }
  
    _addListeners() {
      this._subElements.basket.addEventListener("click", () => {
        this._setStateActive();
        this._render();
      });
      this._subElements.description.addEventListener("click", () => {
        this._setStateActive();
        this._render();
      });
    }

    _generateMiniProduct(product) {
        return new this._MiniSearch(product.id, product.title, product.price, product.color).element;
      }

    _render(){
        if (this._state.active) {
            this._subElements.basketList.classList.add("basket__list--active");
            
        } else {
            this._subElements.basketList.classList.remove("basket__list--active");   
        }
        this._subElements.basketList.append(this._generateMiniProduct());
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
      return `<div class="basket">
              <button class="btn btn--basket" data-element="basket"><i class="fa-solid fa-cart-shopping"></i></i></button>
              <div class="basket__description" data-element="description">
                  <span href="#" class="basket__cost">0 руб</span>
                  <span href="#" class="basket__buy">0 товаров</span>
                </div>
               <div class="basket__list ${this._active ? "basket__list--active" : ""}" data-element="basketList">
                    <span class="basket__list_title">Товары в корзине</span>
                    <button class="btn btn--order">Оформить заказ</button>
                </div>
            </div>`
        }

        get element() {
          return this._element;
        }
  }
  
  
