function getAverage(marks){
  let value = 0
  for(let i = 0; i < marks.length; i++){
    value += marks[i]
    console.log(value)
    
  
    
  }
   return Math.floor(value/marks.length)
  
 
  //TODO : calculate the downward rounded average of the marks array
}
