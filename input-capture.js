var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})



var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('xnput')
xnput.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(xnput);

xnput.addEventListener('change', function() {
    h1.innerText = xnput.value
})