let greetings: string = "Hello TypeScript";
console.log(greetings);

console.log("Hello Rupali with TYPESCRIPT.....");



function addTwo(num:number){
    return num+2;
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid:boolean){
    console.log(name, email, isPaid)
}

let loginUser = (name:string, email:string, isPaid:boolean = false)=>{}


addTwo(5)

getUpper("Rupali")

signUpUser("rupali", "rupali@viit.ac.in", false)

loginUser("h", "Rupali@viit.ac.in")


function getValue(myVal:number){
    if(myVal > 5){
        return true;
    }
    return "200 Ok"
}



// function getVal(myVal:number) :String{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 Ok"
// }


const getHello = (s:string):string  => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"]
const heros1 = [1,2, 3]

heros.map(hero => {
    return `hero is ${hero}`
})


function consoleError(errmsg:string): void{
    console.log(errmsg);
}

function handleError(errmsg:string): never{
    throw new Error(errmsg);
}

const User = {
    name:"hitesh",
    email:"hitesh@lco.dev",
    isActive:true
}

//function createUser({name:string, isPaid:boolean, email:string}){}

//createUser({name:"Rupali", isPaid:false, email:"h@h.com"})

function createCourse():{name: string, price: number}{
    return {name:"reactjs", price:399}
} 

// type User = {
//     name:string;
//     email:string;
//     isActive:boolean
// }

type Mystring = string

type User = {
    readonly  _id:string
    name:string
    email:string
    isActive: boolean
    // ? is if present then mark otherwise no issue
    credcardDetails? :number
}


function createUser(user:User): User{
    return {
        _id:"123",
        name:user.name,
        email:user.email,
        isActive:true

    }
}

const newUser = createUser({
    _id:"abc",
    name:"Hitesh",
    email:"hitesh@gmail.com",
    isActive:true
})


//exports.__esModel = true;

var myUser = {
    _id:"12345",
    name:"h",
    email:"h@h.com",
    isActive:false
};

myUser.email = "Rupali@viit.ac.in";

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

const superHeros: string[] = []
const heroPower: number[] = []

const heroPowers : Array<number> = []

type User1 = {
    name:string
    isActive: boolean
}

const allUsers : User1[] = []

const MLModels: number[][] = [
    [255,255,255],
    []
]

superHeros.push("spiderman")

heroPower.push(2)


allUsers.push({name:"rutu", isActive:true});

let score: number | string | boolean = 33

score = 44
score = "55"

type User3 = {
    name:string;
    id:number
}


type Admin = {
    username:string;
    id:number
}

let hitesh : User3 | Admin = {name:"hitesh", id:334}

hitesh = {username:"hc", id:334}

function getDbId(id:number | string){
    //making some API calls
    console.log(`DB id is ${id}`);
}

getDbId(3)
getDbId("3")


function getDbId1(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    
}

const data : number[] = [1,2,3]

const data1 : string[] = ["1","2","3","4"]

const data2 : (number | string)[] = ["1", "2", 1,2]

const data3 : number[] | string[] = ["1", "2"]


const data4 : any[] = ["1", "2", true, 2,3]

let seatAllotment: "aisle" | "middle" | "window"










