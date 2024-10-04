function createElement(html) {
    const div = document.createElement("div");
    div.insertAdjacentHTML("beforeend", html);
    return div.firstElementChild;
  }


class Header {
    constructor(parameters) {
        
    }

    _getTemplate(){
        return `<header class="header">
        <nav class="nav">
          <a href="#" class="logo">
            <img src="images/logo.png" alt="" class="logo__img" />
          </a>

          <ul class="menu">
            <li class="menu__item">
              <a href="#" class="menu__link">Главная</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link menu__link--active">Каталог</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Контакты</a>
            </li>
          </ul>

          <!-- mini-search__form-wrapper -> dn mini-search__form-wrapper--active -> db-->

          <!-- <div class="mini-search">
                <button class="btn btn--search header__control-btn"><i class="fa-solid fa-search"></i></button>
                <div class="mini-search__form-wrapper mini-search__form-wrapper--active">
                  <form class="mini-search-form" action="#" method="post">
                    <input class="mini-search-form__field" type="text" placeholder="Название продукта..." />
                  </form>
                </div>
              </div>

              <div class="basket">
                <div class="basket__control">
                   кнопка иконка тотал  
                </div>
                basket__list dn +  h 300px oy-auto
                <div class="basket__list ">
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                  <div class="mini-product"></div>
                </div>
              </div> -->
              <div class="header__wrapper">
              <div class="mini-search">
            <button class="btn btn--search"><i class="fa-solid fa-search"></i></button>
            <!-- <div class="mini-search__form-wrapper mini-search__form-wrapper--active">
              <form class="mini-search-form" action="#" method="post">
                <input class="mini-search-form__field" type="text" placeholder="Название продукта..." />
              </form>
            </div> -->
          </div>
          <div class="basket">
            <button class="btn btn--basket"><i class="fa-solid fa-cart-shopping"></i></i></button>
            <div class="basket__description">
                <span href="#" class="basket__cost">0 руб</span>
                <span href="#" class="basket__buy">0 товаров</span>
              </div>
             <div class="basket__list ">
                  <div class="mini-product"></div>
                  <button class="btn btn--order"></button>
              </div>
          </div>
              </div>
          

          <!-- <div class="btns-wrapper">
            <button class="btn btn--search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div class="basket">
              <button class="btn basket-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <div class="basket__links">
                <a href="#" class="basket__cost">0 руб</a>
                <a href="#" class="basket__buy">0 товаров</a>
              </div>
            </div>
          </div> -->
        </nav>
      </header>`
    }


}