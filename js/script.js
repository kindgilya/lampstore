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
    header.update(event.detail);
  });

root.addEventListener("deleteProduct", (event) => {
    header.close(event.detail);
  });

root.addEventListener("open-popup", (event) => {
  imgpopup.open(event.detail);
  });

root.addEventListener("open-active", (event) => {
  about.open(event.detail);
  });

const header = new Header({
    MiniSearch, 
    Basket,
    MiniProduct,
  });

const cardList = new CardList({
    filterCategories,
    products,
},   Card,
WattOpion,
ColorOption,
Favorite,
More);

const imgpopup = new ImagePopup();

const about = new AboutPopup({
  products,
}, Item);

  root.insertAdjacentElement("afterbegin", header.element);
  root.insertAdjacentElement("beforeend", cardList.element);
  root.insertAdjacentElement("beforeend", imgpopup.element);
  root.insertAdjacentElement("beforeend", about.element);

