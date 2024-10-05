const root = document.querySelector(".root");


const header = new Header({
    MiniSearch, 
    Basket,
  });

root.insertAdjacentElement("afterbegin", header.element);