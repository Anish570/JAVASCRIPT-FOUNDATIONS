// Account Information
const accountId = 12345; // Account ID (constant, cannot be changed)
let accountName = "Anish"; // Account Name
var accountCity = "Kathmandu"; // Account City
let accountEmail; // Account Email (Note: When logged without assigning a value, it will output 'undefined')

// Additional Information
accountDob = "dec 2000"; // Account Date of Birth (Warning: This variable is declared without using 'let' or 'const', it becomes a global variable)

// Display Account Information
console.log("Account ID:", accountId); // Log Account ID
console.log("Account Name:", accountName); // Log Account Name
console.log("Account City:", accountCity); // Log Account City

// Display Account Information in Table
console.table({
  "Account ID": accountId,
  "Account Name": accountName,
  "Account DOB": accountDob,
  "Account City": accountCity,
  "Account Email": accountEmail,
});

/*
Note: Modifying the value of 'accountId' is not allowed because it is a constant variable.
Information: 'accountName' and 'accountCity' can be modified using 'let' or 'var' keyword.
*/

// Uncomment the following lines to modify account information
// accountId = 6789; // Error: Cannot reassign a constant variable
// accountName = "Random Name";
// accountCity = "Lalitpur";

// Display Modified Account Information
// console.log("Account Id: ", accountId);
// console.log("Account Name: ", accountName);
// console.log("Account City: ", accountCity);
