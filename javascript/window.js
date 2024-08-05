let div = document.getElementById('para');
div.style.border = '2px solid green';
console.log(div);

let btn = document.createElement('button');
btn.innerText = 'Value button';

div.append(btn);
// console.log(btn);

// append 

// let div = document.getElementById('div.demo');
// div.style.border = '2px solid green';
// console.log(div);

// let btn = document.createElement('button');
// btn.innerText = 'Value button';

// div.append(btn);
// console.log(btn);

// prepend
// div.prepend(btn);

// before
// div.before(btn)

// after
// div.after(btn)

// appendChild
// div.appendChild(btn) // it also add the element as a child content at the last
// console.log(div.innerHTML);

// remove // it is use to remove the tag
// btn.remove();
// div.remove();

// get attribute
// console.log(div.getAttribute('class')); // it is use to get the attribute value by its attribute name of the tag

// // set attribute
// div.setAttribute('name', 'div');


// // div.class list
// div.classList.add('sample'); // it use to add class as many as you can
// console.log(document.body.innerHTML)

// let new1 = document.getElementsByClassName('sample');
// console.log(new1[0]);
