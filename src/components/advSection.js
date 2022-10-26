
import advArticle from "./advArticle.js"

import "./advsection.scss"


let advSection = function(){
 let element = document.createElement('div')

element.classList.add('advantages')

fetch("http://localhost:4000/advantages")
.then(response => response.json())
.then(advantages => {
    advantages.forEach(advantage =>{
        console.log(advantage.icon)
        element.append(advArticle(advantage))
        
        
        })  
})

   


return element
}

export default advSection