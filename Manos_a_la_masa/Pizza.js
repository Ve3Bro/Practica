var pizza = {
    corteza:['clasica', 'rellena', 'chicago','sin'],
    proteina:['pollo','jamon','tocino','res','salchica','pepperoni','sin'],
    queso:['mozzarella', 'cheddar','parmesano','gouda','provolone','sin'],
    salsas:['tomate','bbq','pesto','alfredo', 'sin'],
}
function PizzaOven(corteza,proteina,queso,salsas) {
    var pizza = {};
    pizza.corteza = corteza;
    pizza.proteina = proteina;
    pizza.queso = queso;
    pizza.salsas = salsas;
    return pizza
}
var chicagopizza = PizzaOven('chicago','sin','mozzarella','tomate')
var tradicional = PizzaOven('clasica','pepperoni','mozzarella','tomate')
var soloqueso = PizzaOven('clasica','sin','mozzarella','sin')
var pepperonisalchicha = PizzaOven('sin','pepperoni' + ' salchicha','sin','sin')

console.log(chicagopizza)
console.log(tradicional)
console.log(soloqueso)
console.log(pepperonisalchicha)