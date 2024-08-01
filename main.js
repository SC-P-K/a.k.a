window.addEventListener('keydown', (e)=>{
    //console.log('keydown event', e.key)
    
    if(e.key == '1'|| e.key == '2'||e.key =='3'){
    const div = document.getElementById(e.key)
    div.classList.add('pressed')
    }
})




window.addEventListener('keyup', (e)=>{
    if(e.key == '1'|| e.key == '2'||e.key =='3'){
    const div = document.getElementById(e.key)
    div.classList.remove('pressed')
    }
})

// console 이 있다면 모두 코드가 보임.