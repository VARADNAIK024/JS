    // SCOPES IN JS

   // 1} const -->  inside 

    //2} let  --> inside

   // 3} var --> can be used outside scope , gives promblem while compiling , 
     //           if many coder write same code at a time 

    if(true)
    {
        const a = 3; // they will not Executed outside scope
        let b =1;// not Executed 
        var c = 2; // will Executed
    }
    //console.log(a);
    //console.log(b);
    console.log(c);

    


// { } --> is are called as scope aree used in function , if else , for (EXPECT IN OBJECT)
// SCOPE ARE OF MANY TYPES LOCAL , GOLBAL , BLOCK

function one () // PARENT variables are accessible for CHILD fun()
{
    const userrr = "varrr";

    function twoo()
    {
        const website = "youtube";
        console.log(userrr);
    }
    //console.log(website); // u can't access variable outside the scope
    twoo()

}
one()


function family()
{
    const person = "all members";
    function child()
    { 
        const cv = "can not be accesd outside the child scope";
        console.log(`can access ${person}` ); // can be use as it is PARENT variable
        //console.log(cv); can only be used inside child scope { }

    }
    //console.log(cv); canit used as it is outside child scope
    child();
        
    
}
family()