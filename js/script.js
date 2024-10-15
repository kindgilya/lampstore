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



const header = new Header({
    MiniSearch, 
    Basket,
    products,
    MiniProduct,
  });

const cardList = new CardList({
    filterCategories,
    products,
    Card
})

  root.insertAdjacentElement("afterbegin", header.element);
  root.insertAdjacentElement("beforeend", cardList.element);

