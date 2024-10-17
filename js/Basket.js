// _setStateProduct(product){
//   const existingProduct = this._state.product.find(el => el.id === product.id);

//   if (existingProduct) {
//       existingProduct.price += product.price;
//   } else {
//       this._state.product.push({ ...product, count: 1});
//   }
// }

class Basket {

    _element = null;
    _subElements = null;

    _state = {
        active: false,
        products: [],
       }
  
    constructor(MiniProduct) {
      this._MiniProduct = MiniProduct;
      this._init();
    }
  
    _init(){
      this._element = createElement(this._getTemplate());
      this._subElements = this._getSubElements();
      this._addListeners();
      this._render();
    }

    _setStateActive(){
        this._state.active = !this._state.active;
    }

    _setStateProducts(newState) {
      this._state.products = newState
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

    _generateMiniProduct() {
      return this._state.products.map((obj) => {
        return new this._MiniProduct(obj).element;
    });
      }

    _calculatePrice(){
      return this._state.products.reduce((acc,el) => {
        return acc + el.price;
      },0);
    }

    _render(){
        if (this._state.active) {
            this._subElements.basketList.classList.add("basket__list--active");
            
        } else {
            this._subElements.basketList.classList.remove("basket__list--active");   
        }

        this._subElements.basketItems.innerHTML = "";
        this._subElements.basketItems.append(...this._generateMiniProduct(this._state.products));

        this._subElements.basketCost.textContent = `${this._calculatePrice()} руб`;
        this._subElements.basketBuy.textContent = `${this._state.products.length} товаров`;
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
                  <span href="#" class="basket__cost" data-element="basketCost">0 руб</span>
                  <span href="#" class="basket__buy" data-element="basketBuy">0 товаров</span>
                </div>
               <div class="basket__list ${this._active ? "basket__list--active" : ""}" data-element="basketList">
                    <span class="basket__list_title">Товары в корзине</span>
                    <div class="basket__items" data-element="basketItems"></div>
                    <button class="btn btn--order">Оформить заказ</button>
                </div>
            </div>`
        }

        get element() {
          return this._element;
        }

        add(obj){
          this._setStateProducts([...this._state.products, obj]);
          this._render();
        }
    
        remove(id){
          this._setStateProducts(this._state.products.filter(el => el.id !== id));
          this._render();
        }
    
  }
  

