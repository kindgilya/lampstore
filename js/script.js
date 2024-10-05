const root = document.querySelector(".root");

document.addEventListener("keydown", (el) => {
    if(el.keyCode === 27){
        header.close();
    }
});

root.addEventListener("search", (event) => {
    main.search(event.detail);
  });

// document.addEventListener("click", (el) => {
//     if (!header.element.contains(el.target)) {
//         header.close();
//     } 
// })

const header = new Header({
    MiniSearch, 
    Basket,
  });

const main = new Main({
    filterCategories,
    products,
    Card
})

  root.insertAdjacentElement("afterbegin", header.element);
  root.insertAdjacentElement("afterend", main.element);