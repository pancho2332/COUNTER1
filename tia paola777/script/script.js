let increment = 0;

let show = document.querySelector('.show')
let cuerpo = document.querySelector('.container')

document.addEventListener('click',(e)=>{
    console.log(e)
    if(e.target.matches('#decrease')){
        increment--
        show.innerHTML = increment
    cuerpo.style.backgroundcolor = 'rbg(240, 128, 128)'
}
       else if (e.target.matches('#increase')){
            increment ++
            show.innerHTML = increment
            cuerpo.style.backgroundcolor = 'rbg(37, 218, 46 )'
}
             else if (e.target.matches('#reset')){
                increment = 0
                show.innerHTML = increment
                cuerpo.style.backgroundcolor = 'rbg(37, 103, 218 )'
}
})