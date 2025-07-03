# Projects related to DOM

## Project link
[Click Link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution Code

## Project 1

```javascript
console.log("Shubham")
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',  function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == "grey"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "white"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "blue"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == "yellow"){
      body.style.backgroundColor = e.target.id;
    }

  })
})

```

## Project 2

```
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  }
  else {
  const bmi = (weight / ((height * height) / 10000)). toFixed(2)

  if(bmi < 18.6){
    results.innerHTML = `${bmi}, You are Under Weight`
  }
  else if(bmi > 18.6 && bmi < 24.9){
    results.innerHTML = `${bmi}, Your bmi is Normal`
  }
  else{
    results.innerHTML = `${bmi}, You are Over Weight`
  }
  }
});
````

## Project 3
```
const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
},1000)
```