let Service = function(){
    
    let element = document.createElement('section')
   element.classList.add('services')
   
   fetch(" http://localhost:4000/services")
   .then(response => response.json())
    .then(services => { services.forEach(service =>{
       element.innerHTML = `
       <img src="${services.illustration}" alt="">
       ` 
       
       element.append(Service(service)) 
        })  
   
       })

   
   return element
   }
   
   export default Service