const noNameProductBody = {
  "name": "",
  "price": "30 peças de ouro",
  "orderId": 4
}

const noPriceProductBody = {
  "name": "Teste",
  "price": "",
  "orderId": 4
}

const noOderIdProductBody = {
  "name": "Teste",
  "price": "Teste",
  "orderId": 0
}

const validProductBody = {
  "name": "Teste",
  "price": "Teste",
  "orderId": 5
}

const newProductDB = {
  id: 1,
  name: "Teste",
  price: "Teste",
  orderId: 5
}

const productsList = [
  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Lira de Orfeu",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 4,
    "name": "Armadura de Aquiles",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 5,
    "name": "Harpa de Dagda",
    "price": "15 peças de ouro",
    "orderId": 3
  }
]

export default {
  noNameProductBody,
  noPriceProductBody,
  noOderIdProductBody,
  validProductBody,
  newProductDB,
  productsList
}