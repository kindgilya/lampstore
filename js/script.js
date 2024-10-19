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

root.addEventListener("close-popup", () => {
    imgpopup.close();
    });

const header = new Header({
    MiniSearch, 
    Basket,
    MiniProduct,
  });

const cardList = new CardList({
    filterCategories,
    products,
    Card,
    WattOpion,
    ColorOption,
    Favorite
})

const imgpopup = new ImagePopup();

  root.insertAdjacentElement("afterbegin", header.element);
  root.insertAdjacentElement("beforeend", cardList.element);
  root.insertAdjacentElement("beforeend", imgpopup.element);

