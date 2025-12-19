// class User{
//     email:string
//     name:string
//     city:string

//     constructor(email:string, name:string, city:string){
//         this.email = email;
//         this.name = name;
//         this.city = city
//     }    
// }

// const hitesh = new User("h@h.com", "Rupali", "Pune")

// console.log(hitesh.city)

// hitesh.city = "jaipur"

// console.log(hitesh.city)






class User{
    readonly city:string = "Jaipur"
    protected _courseCount = 1

    constructor(
        public email:string,
        public name:string,
        //private userId: string
    ){
    } 
    

    private deleteToken(){
        console.log("Token deleted....")
    }

    get getAppleEmail(): string{
        return `Apple ${this.email}`
    }


    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){ 
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const hitesh = new User("h@h.com", "Rupali")


class SubUser extends User{
    isFamily:boolean = true

    changeCourseCOunt(){
        this._courseCount  = 4
    }
}





