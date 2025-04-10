// href
const a = document.querySelector('a');
console.log(a.href);
a.href = "https:www.youtube.com";
console.log(a.href);
// value
const input = document.querySelector("input");
console.log(input.value);
// input.value = "Zain";
console.log(input.type);
// input.value = "Zain";
input.type = "email";
input.placeholder = "please enter strong password";
// type
console.log(input.type);
// getAttribute(attrName)

console.log(input.getAttribute('type'));
console.log(input.getAttribute('placeholder'));


// setAttribute(attrName, value)

console.log(input.setAttribute('required',));
