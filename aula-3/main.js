// Exercicio Criar ma classe veiculo com propriedades marca modelo e ano, criar uma classe carro que herda de veiculo e adiciona a propriedades portas
// Fazer um objeto com a class e dar console.log
//super.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.returnInfo = function () {
        return "O carro \u00E9 da marca ".concat(this.marca, " marca. \u00C9 o modelo ").concat(this.modelo, " do ano ").concat(this.ano, ".");
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, ano, portas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.portas = portas;
        return _this;
    }
    Carro.prototype.returnInfo = function () {
        return _super.prototype.returnInfo.call(this) + "O carro tem ".concat(this.portas, " portas.");
    };
    return Carro;
}(Veiculo));
var meuCarro = new Carro("Fiat", "Fiat Multipla", 1998, 4);
console.log(meuCarro);
console.log(meuCarro.returnInfo());
var pickPlayer = { name: "Rafael" }; //The Pick utility type creates a new type by selecting a subset of properties from an existing type.
var omitPlayer = { name: "Rafael", game: "Elden Ring" }; //The Omit utility type creates a new type by excluding specific properties from an existing type.
var readonlyPlayer = { name: "Rafael", age: 23, game: "Elden Ring" }; //The Readonly utility type makes all properties of a type immutable.
var partialPlayer = { name: "Rafael" }; //The Partial utility type makes all properties of a type optional.
// Exercicio 3: Criar uma classe ListHandler que tem um array de T genérico e tem os métodos add, remove e getAll
var ListHandler = /** @class */ (function () {
    function ListHandler() {
        this.lista = [];
    }
    ListHandler.prototype.add = function (item) {
        this.lista.push(item);
        console.log("".concat(item, " was added to the list."));
    };
    ListHandler.prototype.remove = function (item) {
        this.lista = this.lista.filter(function (i) { return i !== item; });
        console.log("".concat(item, " was removed from the list."));
    };
    ListHandler.prototype.getAll = function () {
        return this.lista;
        // console.log(`${item} was removed from the list.`)
    };
    return ListHandler;
}());
var ListHandlerString = new ListHandler();
var ListHandlerNumber = new ListHandler();
var ListHandlerBoolean = new ListHandler();
var ListHandlerPlayer = new ListHandler();
ListHandlerString.add("Rafael");
ListHandlerString.add("Jean-Michel");
ListHandlerString.add("Joe");
ListHandlerString.add("Mario");
ListHandlerString.add("Christian");
ListHandlerString.add("Corey");
ListHandlerString.remove("Corey");
console.log(ListHandlerString.getAll());
