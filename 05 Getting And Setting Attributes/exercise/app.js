// 1. Select the anchor tag
const anchore = document.querySelector("a");
// 2. Use getAttribute(attrName) to check the attribute.
console.log(anchore.getAttribute('href'));
// 3. Select a-two & set "href" attribute
const anchorClass=document.querySelector('.a-two');
anchorClass.setAttribute('href','http://www.udemy.com');
// setAttribute(attrName, value)