// this function

// this function is used to reffer to the current context

const obj ={
    name : "Dnyana",
    age : 20,
 
    welcome : function (){
        console.log(`Welcome ${this.name} `)
    }
}

obj.welcome()
obj.name = "Dnyana Patil"
obj.welcome()


//this function in oject

function chai(){
    let user ="Dnyana"
    console.log(this);  //we can access things from this function in object but 
    
}

