
// function calculateTriangleArea() {
//     const base = document.getElementById('triangle-base')
//     const height = document.getElementById('triangle-height')

//     const baseValue = parseFloat(base.value)
//     const heightValue = parseFloat(height.value)

//     base.value = ''
//     height.value = ''


//     const result = 0.5 * baseValue * heightValue;

//     const area = document.getElementById('triangle-area')

//     area.innerText = result

//     return result

// }

// triangleArea

function calculateTriangleArea(){
   const base= getInputValue('triangle-base')
   const height= getInputValue('triangle-height')

    const result = 0.5*base*height

    setInputValue('triangle-area', result)
    addToCalculationEntry('Triangle Area', result)

}


// rectangle area


function calculateRectangleArea(){
    const width = getInputValue("rectangle-width")
    const length = getInputValue('rectangle-length')

    const result = width*length

    setInputValue('rectangle-area', result)
    addToCalculationEntry('Rectangle Area', result)
}




// parallelogram 

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')

    const result = base* height

    setInputValue('parallelogram-area', result)
    addToCalculationEntry('Parallelogram', result)
}



//  Ellipse 

function calculateEllipseArea(){
    const ellipseMajorRadius = getInputValue('ellipse-major-radius')
    const ellipseMinoRadius = getInputValue('ellipse-minor-radius')

    const result = (Math.PI*ellipseMajorRadius*ellipseMinoRadius).toFixed(2)

    setInputValue('ellipse-area', result)


    addToCalculationEntry('Ellipse Area', result)
}



function addToCalculationEntry (areaType, reslut){
    const CalculationArea = document.getElementById('calculation-entry')

    const count = CalculationArea.childElementCount

 
    const p = document.createElement('p')

    p.classList.add('mt-6')

    p.innerHTML = `

    ${count+1}. ${areaType} = ${reslut} cm<sup>2</sup> <button class="btn btn-sm btn-primary">Convert</button>
    
    `

    CalculationArea.appendChild(p)
    
}