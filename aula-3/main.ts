
// Exercicio Criar ma classe veiculo com propriedades marca modelo e ano, criar uma classe carro que herda de veiculo e adiciona a propriedades portas
// Fazer um objeto com a class e dar console.log
//super.


class Veiculo {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    returnInfo(): string {
        return `O carro é da marca ${this.marca} marca. É o modelo ${this.modelo} do ano ${this.ano}.`
    }
}

class Carro extends Veiculo {
    portas: number

    constructor(marca: string, modelo: string, ano: number, portas: number) {
        super(marca, modelo, ano)
        this.portas = portas;
    }

    returnInfo(): string {
        return super.returnInfo() + `O carro tem ${this.portas} portas.`
    }
}

const meuCarro = new Carro("Fiat", "Fiat Multipla", 1998, 4)

console.log(meuCarro)

console.log(meuCarro.returnInfo())

// Exercicio 2: Criar um type Player que tenha os atributos name, age e game
// cirar 4 diferentes tipos de inicializações e um objecto jogador do tipo player:
// Com partial<T> , Com Readonly<T>, Com Pick<T>, Com Omit<T>  

// (utility Types)

type Player = {
    name: string
    age: number
    game: string
}
const pickPlayer: Pick<Player, "name"> = { name: "Rafael" }; //The Pick utility type creates a new type by selecting a subset of properties from an existing type.
const omitPlayer: Omit<Player, "age"> = { name: "Rafael", game: "Elden Ring" }; //The Omit utility type creates a new type by excluding specific properties from an existing type.
const readonlyPlayer: Readonly<Player> = { name: "Rafael", age: 23, game: "Elden Ring" }; //The Readonly utility type makes all properties of a type immutable.
const partialPlayer: Partial<Player> = { name: "Rafael" }; //The Partial utility type makes all properties of a type optional.


// Exercicio 3: Criar uma classe ListHandler que tem um array de T genérico e tem os métodos add, remove e getAll
class ListHandler<T> {

    lista: T[] = [];

    add(item: T): void {
        this.lista.push(item);
        console.log(`${item} was added to the list.`);
    }
    remove(item: T): void {
        this.lista = this.lista.filter(i => i !== item);
        console.log(`${item} was removed from the list.`);
    }
    getAll(): T[] {
        return this.lista;
        // console.log(`${item} was removed from the list.`)
    }
}

const ListHandlerString = new ListHandler<string>()
const ListHandlerNumber = new ListHandler<number>()
const ListHandlerBoolean = new ListHandler<boolean>()
const ListHandlerPlayer = new ListHandler<Player>()

ListHandlerString.add("Rafael")
ListHandlerString.add("Jean-Michel")
ListHandlerString.add("Joe")
ListHandlerString.add("Mario")
ListHandlerString.add("Christian")
ListHandlerString.add("Corey")
ListHandlerString.remove("Corey")
console.log(ListHandlerString.getAll())

// Exercicio 4: Criar uma classe que cria produtos com id, nome, e preço. Usar um construtor na classe e adicionar um metodo readProduct

