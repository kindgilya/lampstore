const root = document.querySelector(".root");

function createElement(html) {
  const div = document.createElement("div");
  div.insertAdjacentHTML("beforeend", html);
  return div.firstElementChild;
}

// поместить этот кусок в search || basket
// document.addEventListener("keydown", (el) => {
//     if(el.keyCode === 27){
//         // header.close();
//     }
// });

// input -> icon -> i ??? -> closest(.search)

root.addEventListener("search", (event) => {
    cardList.update(event.detail);
  });

root.addEventListener("buy", (event) => {
  basket.add(event.detail);
  });

root.addEventListener("deleteProduct", (event) => {
    basket.remove(event.detail);
  });

root.addEventListener("open-popup", (event) => {
  imgpopup.open(event.detail);
  });

root.addEventListener("open-about", (event) => {
  about.open(event.detail);
  });

const basket = new Basket(MiniProduct);

const header = new Header({
    MiniSearch, 
    basket
  });

const filter = new Filter({
  filterCategories
});

const cardList = new CardList({
    filterCategories,
    products,
    Card,
    Favorite,
    Button,
    Option,
    OptionItem
});

const imgpopup = new ImagePopup();

const about = new AboutPopup(Item);

  root.insertAdjacentElement("afterbegin", header.element);
  root.insertAdjacentElement("beforeend", filter.element);
  root.insertAdjacentElement("beforeend", cardList.element);
  root.insertAdjacentElement("beforeend", imgpopup.element);
  root.insertAdjacentElement("beforeend", about.element);
