function slice(textLenght) {
  const str = document.querySelector(".card__content__text");
  let text = str.textContent.trim();
  let newText = "";
  if (text.length > textLenght) {
    newText = text.slice(0, textLenght) + "...";
    str.innerHTML = newText;
  }
}
slice(47);

// Класс Product. Содержит минимальную информацию о товаре:
// - свойство id: любое число (идентификатор товара);
// - свойство price: любое число (цена товара);
// - метод setPrice(price): устанавливает новую цену и возвращает товар;
// - метод withDiscount(percent): возвращает новый экземпляр товара с дополнительным свойством discountedPrice, в котором рассчитана стоимость товара с учетом указанной скидки.

// Класс Shop. Содержит товары и функции управления:
// - свойство products: массив объектов класса Product;
// - метод addProducts(products): принимает массив products и добавляет продукты в магазин;
// - метод getProduct(id): возвращает продукт по указанному идентификатору.

class Product {
  constructor() {
    this.id = Date.now();
    this.price = 0;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  withDiscount(percent) {
    this.discountedPrice = (this.price * (100 - percent)) / 100;
    return this;
  }
}

class Shop extends Product {
  constructor() {
    super();
  }

  addProducts(products) {
    this.products = [...products];
  }

  getProduct(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        // console.log("this: ", this);
        return this;
      }
    }
  }
}

var products = [
  {
    id: 3,
    name: "Cake",
    price: 333,
    description: "The tastiest cake in the world.",
  },
  {
    id: 5,
    name: "Petroleum",
    price: 2977,
    description: "Black gold.",
  },
  {
    id: 8,
    name: "Moscow metro logo",
    price: 117000000,
    description: "Remove circle from logo",
  },
];

var shop = new Shop();
shop.addProducts(products);

console.log(
  shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6
);
