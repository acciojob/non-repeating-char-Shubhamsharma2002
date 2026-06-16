function firstNonRepeatedChar(str) {
 // Write your code here
 const charCount = {};

 // First pass: Count the frequency of each character
 for (let i = 0; i < str.length; i++) {
   const char = str[i];
   charCount[char] = (charCount[char] || 0) + 1;
 }

 // Second pass: Find the first character with a frequency of 1
 for (let i = 0; i < str.length; i++) {
   const char = str[i];
   if (charCount[char] === 1) {
     return char;
   }
 }

 // Return null if no unique character is found or if the string is empty
 return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));