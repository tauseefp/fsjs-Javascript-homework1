// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
const sentence = "You cannot end a sentence with because because because is a conjunction";
const word = "because";
const position = sentence.indexOf(word);

console.log("Position of the word 'because':", position);
