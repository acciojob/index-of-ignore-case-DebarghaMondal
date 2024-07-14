function indexOfIgnoreCase(s1, s2) {
  // write your code here
const s1 = [''];
const s2 = '';

const index = s1.findIndex(element => {
  return element.toLowerCase() === s2.toLowerCase();
});

console.log(index); // 👉️ 1

if (index !== -1) {
  // 👉️ string is in the array
}
	


	
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
