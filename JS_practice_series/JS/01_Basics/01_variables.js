/**variables
 * let
 * const
 * var
 * Unkonwn
 */

//write into camel case
//const can't change
const accountId = 23;
let acccountEmail = "acb@getMaxListeners.com";
var accountPwd = "12345";
accountCity = "KTM";
let accountState;

//accountId = 2;               can't change the const throw the error
//console.log(accountId);

acccountEmail = "xyz@gmail.com"
accountPwd = "3425465";
accountCity = "pkhrw";              //this unknow types of declating variable is not good

//to do console or print the multiple value we use table;
console.table([accountId, acccountEmail, accountPwd, accountCity, accountState]);

/*
output;-
PS C:\Users\janak\OneDrive\Desktop\JS\JS_practice_series\jS> node 01_variables.js
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 23              │
│ 1       │ 'xyz@gmail.com' │
│ 2       │ '3425465'       │
│ 3       │ 'pkhrw'         │
│ 4       │ undefined       │
└─────────┴─────────────────┘
*/


