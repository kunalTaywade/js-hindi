const accountId = 14325
let accountEmail = "kunalabc@gmail.com"
var accountPassword = 121212
accountCity = "Indore"
let accountState;

// accountId = 2 //not allowed

console.log(accountId);

accountEmail = "abc@gmail.com"
accountPassword = 24234523
accountCity = "Jaipur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
