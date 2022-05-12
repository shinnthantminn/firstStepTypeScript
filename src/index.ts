//basic type

import { number, string } from 'joi'

const one: string = 'Hello, World'
const two: number = 1
const three: boolean = true
let four: any = 'Shin'
four = 1 // any datatype can assgin any datatype

//prefix
let age: number
age = 12

//non primative datatype

const arr: number[] = [1, 2, 3, 4] // this can only contain number datatype
const anyArr: any[] = ['shin', 1, true, null, undefined] // this array can contain any datatype

//Tuple that can contain array with exactly datatype

const person: [string, number, boolean] = ['Shin Thant Min', 19, true]
//Tuple array
const tpArray: [string, number][] = [
  ['shinn thant', 1],
  ['shinn thant', 1],
  ['sh inn thant', 1],
] // array in array with tuple

//union

let pid: number | string
pid = 22

//enum

enum Direction {
  up, // 0
  down, // 1
  left, // 2
  right, // 3
}

// default အရ enum က number အစဉ်လိုက်ရေတွက်တာပါ Default အရ ၀ ကစတာပါ ပြန်ပြောင်းလိုက်လို့ရပါတယ် up ကို ၁ လို့ပြောင်းလိုက်ရင် ၁ ၂ ၃ ၄ ဖြစ်သွားမှာပါ String နဲ့ လည်းလုပ်လို့ရပါသေးတယ်

enum Direction2 {
  up = 'up', // 0
  down = 'down', // 1
  left = 'left', // 2
  right = 'right', // 3
}

//object

const user: {
  name: string
  age: number
} = {
  name: 'Shinn Thant Minn',
  age: 19,
}

//object with extract type other call interface

type User1 = {
  name: string
  age: number
}

const user1: User1 = {
  name: 'Shinn Thant',
  age: 19,
}

//type asseration
let cid: any = 1
let customerId = <number>cid
let userId = cid as number // another way

// customerId = true variable တွေကို variable ပြန်ပေးတဲ့ အခါပြောင်းခြင်တဲ့ type ကို ပြောင်းလိုက်တာပါ

//function

function AddNum(x: number, y: number): number /*return value type*/ {
  x + y
  return 1
}

//void meaning no return any data
function print(message: String): void {
  console.log(message)
}

print('Hello ,World')

//void ကို function တွေမှာ return type အနေနဲ့သုံးပါတယ် ဘာမှန် return ပြန်မပေးရင် void ကို သုံးတာပါ

// interface custom type creation

interface personInterface {
  readonly name: string // သူ့က ဖက်လို့ပဲ ရပါတယ် ပြန်ပြင်လို့ရမှာမဟုတ်တော့ပါဘူး
  age: number
  id?: number // ထည့်လည်းရတယ် မထည့်လည်းရတယ်ဆိုတဲ့ optional သုံးခြင်ရင် ? နဲ့ သုံးပေးရပါတယ်
}

const person1: personInterface = {
  name: 'Shinn Thant Minn',
  age: 19,
}

person1.age = 2
//person1.name = "hela" //ပြန်ပြင်လို့မရပါဘူး error တတ်ပါတယ်

// type နဲ့ interface က တူသလိုရှိပါတယ် မတူတာလေးတွေလည်းရှိပါသေးတယ် type မှာက union တွေ primative တွေ အတွက် ကြေညှာလို့ရပါတယ် interface မှာက ကြေညှာလို့ မရပါဘူး no Primative တွေအတွက်ပဲ ကြေညှာလို့ရပါတယ်

type p1 = [] | string
const pokemonn: p1 = 'Pikachu'

//interface for function expression

interface fun {
  (x: number, y: number): number
}

const add: fun = function (x: number, y: number): number {
  return x + y
}

const sub: fun = (x: number, y: number): number => {
  return x + y
}

//class

class personTemp {
  constructor(id: number, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }
  public id: number // public ကတော့ အကုန်လုပ်လို့ရပါတယ်
  private name: string // သူလည်း readonly လိုပါပဲ ပြန်ပြင်လို့မရပါဘူ သူက class ထည်းမှာပဲ ရယူလို့ရမှာပါ ပြန်ထုတ်လို့လည်းမရပါဘူး console.log(shin.name) ဆို error ပြမှာပါ
  protected age: number // သူလည်း private လိုပါပဲ မတူတာရှိပါတယ်

  register(): string {
    return `${this.name} is complete register`
  }
}

const shin = new personTemp(1, 'Shinn Thant Minn', 19)
// shin.name = 'Shinn Shinn'
console.log(shin.register())

//class interface usage

interface studenInterface {
  name: string
  age: number
  sing(): string
}

class student implements studenInterface {
  // class မှာ interface သုံးခြင်ရင် implements ကို သုံးရပါတယ်
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sing() {
    return `${this.name} is sign in our school` // interface မှာ ကြေညှာထားတဲ့ အတွက် ထက်ကြေညှာပေးစရာမလိုတော့ပါဘူး
  }
}

const Terry = new student('terry', 19)

class teacher extends student {
  role: string
  constructor(name: string, age: number, role: string) {
    super(name, age)
    this.role = role
    name = 'hla'
  }
}

const aye = new teacher('Daw Aye Aye', 40, 'english')

console.log(aye.sing())

//Generics သူကတော့ type ကို အရှင်ထားတဲ့ ပုံစံပါပဲ reusable type dynamic type သူ့ကို function တွေမှာသုံးကြတာပါ
function arrTemp<T>(items: T[]): T[] {
  return new Array().concat(items)
}

const Number = arrTemp<number>([1, 2, 3])
Number.push(1)
