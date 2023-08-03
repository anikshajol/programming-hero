function getMinutes(hour){
    const minute = 60*hour;
    return minute;
}

const minute = getMinutes(100)
// console.log(minute);

function getSecond(minute) {
    const second = 60*minute;
    return second;
}

// console.log(getSecond(20))


// leap year

function findLeapYear(years) {
    let leapYear = [];
    for(let i =0; i<years.length;i++){

        const element = years[i]

        if(element%4 ===0 && element%100!==0 ||element%400===0 ){
          leapYear.push(element)
      
        }

    }

    return leapYear
  
}

const years=[2023,2024,2025,2028,2030]

const leapYears=findLeapYear(years)

console.log(leapYears);


function isOdd(age) {
    if(age%2==0){
        return 'My age is even'
    }
    return 'My age is odd'
}

const age = 30;

console.log(isOdd(age));