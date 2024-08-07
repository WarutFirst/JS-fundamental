/* Example 1 */

/* let Username = "6lvckshorty"; */

//CharAt = insert number show order alphabet
/* console.log(Username.charAt(10)); */

//indexOf = insert alphabet show order number
/* console.log(Username.indexOf("y")); */

//lastIndexOf = insert alphabet show order number
/* console.log(Username.lastIndexOf("y")); */

/* console.log(Username.length); */

//Delete spacebar before and after in variable
/* Username = Username.trim();
console.log(Username); */

/* Username = Username.toLowerCase(); */
/* Username = Username.toUpperCase(); */

/* Username = Username.repeat(4); */

/* If have space after Username show Warning */
/* let result = Username.startsWith(" ");

if (result) {
  console.log("Your username can't begin with ' ' ");
} else {
  console.log(Username);
}
 */

/* If have space before Username show Warning */
/* let result = Username.endsWith(" ");
if (result) {
  console.log("Your username can't end with ' ' ");
} else {
  console.log(Username);
} */

/* If have space Username show Warning */
/* let result = Username.includes(" ");
if (result) {
  console.log("Your username can't includes with ' ' ");
} else {
  console.log(Username);
}
 */

/* End Example 1 */

/* Example 2 */

let phonenumber = "12-45-6789";

/* phonenumber = phonenumber.replaceAll("-", "");
console.log(phonenumber);
 */

/* phonenumber = phonenumber.padStart(20, "x"); */
phonenumber = phonenumber.padEnd(20, "x");

console.log(phonenumber);
