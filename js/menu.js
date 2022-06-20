const men =document.querySelector('.men')
const navegacion =document.querySelector('.navegacion')

//console.log(navegacion)
//console.log(men)


men.addEventListener('click', ()=> {
    navegacion.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(navegacion.classList.contains("spread") && e.target !=navegacion && e.target!=men){
    
        navegacion.classList.toggle("spread")
    }
})