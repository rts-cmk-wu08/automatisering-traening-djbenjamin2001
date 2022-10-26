
import hero from "./components/hero.js"
import section from "./components/section.js"
import ContactForm from "./components/Contactform.js"
 let element = document.querySelector('.wrapper')


 let main = document.createElement("main")
 element.append(main)
 main.append(hero())
 main.append(section())




 
 main.append(ContactForm())