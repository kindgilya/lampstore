// здесь данные фильтра, которые приходят с сервера (какой фильтр вообще отрисовывать)
// это не выбранные пользователем фильтра, это именно доступные для выбора конфиги фильтра

const filterCategories = [
  {
    key: "price",
    text: "Цена",
    unit: "руб",
    // 1 - input от/до 2 - select
    groupType: 1,
  },
  {
    key: "width",
    text: "Ширина",
    unit: "см",
    // 1 - input от/до 2 - select
    groupType: 1,
  },
  {
    key: "height",
    text: "Высота",
    unit: "см",
    groupType: 1,
  },
  {
    key: "weight",
    text: "Вес",
    unit: "кг",
    groupType: 1,
  },
  {
    key: "voltage",
    text: "Напряжение",
    unit: "В",
    options: [
      {
        value: 5,
        text: 5,
      },
      {
        value: 12,
        text: 12,
      },
      {
        value: 220,
        text: 220,
      },
    ],
    groupType: 2,
  },
  {
    key: "powerSupply",
    text: "Источник питания",
    // 1 - сеть, 2 - батарейки, 3- аккум
    type: 1,
    unit: "",
    options: [
      {
        value: 1,
        text: "сеть",
      },
      {
        value: 2,
        text: "батарейки",
      },
      {
        value: 3,
        text: "аккумулятор",
      },
    ],
    groupType: 2,
  },
  {
    key: "colorTemperature",
    text: "Температура свечения",
    unit: "в К",
    options: [
      {
        value: 1000,
        text: 1000,
      },
      {
        value: 2000,
        text: 2000,
      },
      {
        value: 3000,
        text: 3000,
      },
      {
        value: 4000,
        text: 4000,
      },
      {
        value: 5000,
        text: 5000,
      },
      {
        value: 6000,
        text: 6000,
      },
    ],
    groupType: 2,
  },
];

// здесь данные по которым генерируются продукты
const products = [
  {
    id: 1313,
    title: "Рабочая лампа на струбцине KD-312",
    price: 1148,
    priceType: "Руб.",
    description: "Рабочая лампа на струбцине KD-312 белого цвета служит для освещения рабочего места дома и в офисе.",
    properties: [
      {
        key: "price",
        text: "Цена",
        value: 1148,
        unit: "руб",
        groupType: 1,
      },
      {
        key: "width",
        text: "Ширина",
        value: 12.5,
        unit: "см",
        groupType: 1,
      },
      {
        key: "height",
        text: "Высота",
        value: 43,
        unit: "см",
        groupType: 1,
      },
      {
        key: "weight",
        text: "Вес",
        value: 2.449,
        unit: "кг",
        groupType: 1,
      },
      {
        key: "voltage",
        text: "Напряжение",
        value: 220,
        unit: "В",
        groupType: 2,
      },
      {
        key: "powerSupply",
        text: "Источник питания",
        // 1 - сеть, 2 - батарейки, 3- аккум
        value: 1,
        type: 1,
        unit: "",
        groupType: 2,
      },
      {
        key: "colorTemperature",
        text: "Температура свечения",
        value: 4000,
        unit: "в К",
        groupType: 2,
      },
    ],
    watts: [
      { id: 1, text: 14, unit: "wt" },
      { id: 2, text: 24, unit: "wt" },
      { id: 3, text: 34, unit: "wt" },
      { id: 4, text: 44, unit: "wt" },
      { id: 5, text: 54, unit: "wt" },
    ],
    colors: [
      { id: 1, text: "white", unit: "", img: "lamp_1_white.jpg" },
      { id: 2, text: "green", unit: "", img: "lamp_1_green.jpg" },
      { id: 3, text: "violet", unit: "", img: "lamp_1_violet.jpg" },
    ],
  },
  {
    id: 1300,
    title: "Настольная лампа светодиодная Эра LED-506-10W-W регулируемый",
    price: 997,
    priceType: "Руб.",
    description: "предназначена для установки на столе в рабочем кабинете, парте школьника. Оснащена широким и устойчивым основанием",
    properties: [
      {
        key: "price",
        text: "Цена",
        value: 997,
        unit: "руб",
        groupType: 1,
      },
      {
        key: "width",
        text: "Ширина",
        value: 13.5,
        unit: "см",
        groupType: 1,
      },
      {
        key: "height",
        text: "Высота",
        value: 100,
        unit: "см",
        groupType: 1,
      },
      {
        key: "weight",
        text: "Вес",
        value: 1.249,
        unit: "кг",
        groupType: 1,
      },
      {
        key: "voltage",
        text: "Напряжение",
        value: 12,
        unit: "В",
        groupType: 2,
      },
      {
        key: "powerSupply",
        text: "Источник питания",
        // 1 - сеть, 2 - батарейки, 3- аккум
        value: 2,
        type: 2,
        unit: "",
        groupType: 2,
      },
      {
        key: "colorTemperature",
        text: "Температура свечения",
        value: 5000,
        unit: "в К",
        groupType: 2,
      },
    ],
    watts: [
      { id: 1, text: 14, unit: "wt" },
      { id: 2, text: 24, unit: "wt" },
      { id: 3, text: 34, unit: "wt" },
    ],
    colors: [
      { id: 1, text: "white", unit: "", img: "lamp_2_white.jpg" },
      { id: 2, text: "black", unit: "", img: "lamp_2_black.jpg" },
    ],
  },
  {
    id: 1400,
    title: "Настольная лампа светодиодная Эра LED-506-10W-W регулируемый",
    price: 997,
    priceType: "Руб.",
    description: "предназначена для установки на столе в рабочем кабинете, парте школьника. Оснащена широким и устойчивым основанием",
    properties: [
      {
        key: "price",
        text: "Цена",
        value: 1050,
        unit: "руб",
        groupType: 1,
      },
      {
        key: "width",
        text: "Ширина",
        value: 15.5,
        unit: "см",
        groupType: 1,
      },
      {
        key: "height",
        text: "Высота",
        value: 150,
        unit: "см",
        groupType: 1,
      },
      {
        key: "weight",
        text: "Вес",
        value: 1.749,
        unit: "кг",
        groupType: 1,
      },
      {
        key: "voltage",
        text: "Напряжение",
        value: 12,
        unit: "В",
        groupType: 2,
      },
      {
        key: "powerSupply",
        text: "Источник питания",
        // 1 - сеть, 2 - батарейки, 3- аккум
        value: 2,
        type: 2,
        unit: "",
        groupType: 2,
      },
      {
        key: "colorTemperature",
        text: "Температура свечения",
        value: 1000,
        unit: "в К",
        groupType: 2,
      },
    ],
    watts: [
      { id: 1, text: 14, unit: "wt" },
      { id: 2, text: 24, unit: "wt" },
      { id: 3, text: 34, unit: "wt" },
    ],
    colors: [
      { id: 1, text: "pink", unit: "", img: "lamp_3_pink.jpg" },
      { id: 2, text: "green", unit: "", img: "lamp_3_green.jpg" },
    ],
  },
];
