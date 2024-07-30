const accountId = 14419
let accountEmail = "gopa24@gmail.com"
var accountPassword ="75750"

/* if we declear a variable without assign this is called as indefined varibles*/
let accountStatus;

// a variable can describe like this
accountCity = "hydrabad" 


// accountId = 2 not allowed "note: we cant change const "

accountEmail="ctct@google"
accountPassword="242404"
accountCity="nagpur"

console.log(accountId)

//' note=while using console.table write all the varibles in the square bracket "[]"'

console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus]);

/*
Prefer not to use var 
beacause of issue in block scope & function scope 
*/