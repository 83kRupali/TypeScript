// const aisle = 0;
// const middle = 1;
// const window = 2;


// if(seat == aisle){

// }


/// automatically series of the number calculated
enum seatChoice {
    aisle  =10,
    middle,
    window,
    fourth
}

const hcSeat = seatChoice.aisle
console.log(hcSeat)

const hcSeat1 = seatChoice.middle
console.log(hcSeat1)

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?:string,
    //startTrail: () => string
    startTrail(): string,
    getCoupon(couponname:string, value:number):number
}

interface User{
    githubToken : string
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const hitesh : User = {
    dbId:22, 
    email:"h@h.com", 
    userId:2211,
    githubToken:"github",
    startTrail:() =>{
        return "tail started"
    },

    getCoupon:(name:"hitesh10", off:10) => {
        return 10
    }   
}


hitesh.email = "h@h.com"

// hitesh.dbId = 33







export{}