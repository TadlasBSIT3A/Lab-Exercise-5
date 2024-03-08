function caesarEncrypt(str, shift) {
  return str
      .split('')
      .map(char => {

          if (char.match(/[A-Z]/)) {
              return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
          }
          
          else if (char.match(/[a-z]/)) {
              return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
          }
          
          else {
              return char;
          }
      })
      .join('');
}


function caesarDecrypt(str, shift) {
  return caesarEncrypt(str, 26 - shift); 
}

let userInput = prompt("Enter a string to be encrypted:");

let shiftAmount = 3;

let encryptedString = caesarEncrypt(userInput, shiftAmount);
console.log("Encrypted string:", encryptedString);

let decryptedString = caesarDecrypt(encryptedString, shiftAmount);
console.log("Decrypted string:", decryptedString);
