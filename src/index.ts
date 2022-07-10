// Basic types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hi!'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple, Order must be respected
let person: [number, string, boolean] = [1, 'John', true]
// Tuple Array
let employees: [number, string][]
employees = [
    [1, 'John'],
    [2, 'Jane'],
    [3, 'Chloé']
]

// Union
let pid: string | number = 22
pid = '22'

// Enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type assertion
let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number

// Functions
function addition(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message)
}

// Interfaces, not working with primitives
// ? = Optionnal
interface CarInterface {
    readonly id: number,
    brand: string,
    color?: string
}

const car: CarInterface = {
    id: 1,
    brand: 'Kia'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const substract: MathFunc = (x: number, y:number): number => x - y

// Typescript OOP (Other course)
// Classes
class Person {
    // Data modifier / Encapsulation
    // Attributes are public by default
    private id: number
    protected name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(): string {
        return `${this.name} is now registered`
    }
}

const john = new Person(1, 'John')
const mike = new Person(2, 'Mike')

console.log(john.register());