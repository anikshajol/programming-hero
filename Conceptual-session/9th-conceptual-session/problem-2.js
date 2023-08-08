function isJavascriptFile(file) {
  if(typeof file !== 'string'){
    return 'please provide a valid file name'
  }
  else{
    // if( file.toLowerCase().endsWith('.js')){
    //     return true;
    //    }
    //    else{
    //     return false
    //    }

    const arr = file.split('.')
    const lastElement = arr.pop()

    return lastElement.toLowerCase()=== 'js'?true : false

  }
}

console.log(isJavascriptFile('index.js'));