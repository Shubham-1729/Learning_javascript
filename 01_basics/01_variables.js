const accountId = 5342
let accountEmail = "Shubham@google.com"
var accountPassword = "12345"
accountCity = "Dhanbad"
let accountState

// accountId = 3256 // not allowed
accountEmail = "shubh@google.com"
accountPassword = " 32145"
accountCity = "ranchi"

console.log(accountId)

// Prefer not to use var because of issue in block scope and functional scope 

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);

