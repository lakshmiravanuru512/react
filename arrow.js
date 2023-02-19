const obj={
    firstName:"Lakshmi",
    printname:()=>{
        console.log(this.firstName);
    },
    printname2:function(){
        console.log(this.firstName)
    }
}
obj.printname();
obj.printname2();