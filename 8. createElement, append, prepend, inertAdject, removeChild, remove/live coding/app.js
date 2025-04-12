// ------------------------------------
// createElement()
const h1=document.createElement('h1');
const body=document.body;
console.log(h1);
h1.textContent='hello world';
h1.classList.add('greetings');
body.appendChild(h1);

// appendChild()
// append()
// prepend()
// insertBefore()

const ul=document.querySelector("ul");
const li=document.createElement('li');
li.innerText="im li tag";
ul.appendChild(li)
const firstLi=document.querySelector('li');
ul.insertBefore(li,firstLi);
/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */
const firstP=document.querySelector('p');
const i=document.createElement('i');
i.innerText="i'm italics";
i.style.color='skyblue';
firstP.insertAdjacentElement("beforebegin",i);
firstP.insertAdjacentElement("afterbegin",i);
firstP.insertAdjacentElement("beforeend",i);
firstP.insertAdjacentElement("afterend",i);


// removeChild()
// remove()
// ------------------------------------
