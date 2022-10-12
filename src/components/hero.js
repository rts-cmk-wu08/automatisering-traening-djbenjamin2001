import {hero} from "../data.js"
import "./hero.scss"
let Hero = function(){
    console.log("hello from advheader")
    let element = document.createElement('header')
   element.classList.add('hero')
    element.innerHTML = `
 
 <img class="hero__img" src="${hero.image}" alt="">
 <div class="hero__box"> 
    <h1 class="hero__headline">${hero.headline}</h1>
    <p class="hero__text">${hero.copy}</p>
</div>
    `
   


   
   return element
   }
   
   export default Hero