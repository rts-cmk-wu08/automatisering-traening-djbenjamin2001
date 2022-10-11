let advHeader = function(advantages){
    let element = document.createElement('header')
   console.log(advantages)
   element.classList.add('adv-header')
    element.innerHTML = `
    <img class="adv-header__logo" src="${advantages.image}" alt="">
   <h1 class="adv-header__headline">${advantages.headline}</h1>
   <p class="adv-header__text">${advantages.text}</p>
    
    `
   


   
   return element
   }
   
   export default advHeader