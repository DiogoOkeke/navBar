let navBar = document.querySelector('.nav-bar');
let firstBar = document.querySelector('.first-bar');
let secondBar = document.querySelector('.mid-bar');
let lastBar = document.querySelector('.last-bar');
let navContent = document.querySelector('.nav-content');



let clicked = false;

navBar.onclick = () => {
 if(!clicked){
  firstBar.classList.add('true');
  secondBar.classList.add('true');
  lastBar.classList.add('true');
  navBar.classList.add('true');
  navContent.classList.add('true');
  clicked = true;
 }
 else{
  firstBar.classList.remove('true');
  secondBar.classList.remove('true');
  lastBar.classList.remove('true');
  navBar.classList.remove('true');
  navContent.classList.remove('true');
  clicked = false;
 }
}
