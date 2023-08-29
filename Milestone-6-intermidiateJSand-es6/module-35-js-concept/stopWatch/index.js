

const startCount = ()=>{
    let num = 0
    setInterval(()=>{
        const para = document.getElementById('start')
        const parse = parseInt(para.innerText)
        ++num
        parse.innerText = num
      
        
        
    },1000)

}

const stopCount = ()=>{
    console.log('click');
}


const resetCount =()=>{
    console.log('click');
}

