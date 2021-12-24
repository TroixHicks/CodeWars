function arrayPlusArray(arr1, arr2) {
 let array3 = arr1.concat(arr2) //something went wrong
 let sum = 0
  
 for (let i = 0; i < array3.length; i++) 
            sum += array3[i]; 
   
        return sum; 
}

// 1. concat or join both arrays by using the concat method, 
// for example- arr1 = [1,2,3] arr2 = [4, 5] arr1.concat(arr2)
// 2. let arr3 = arr1.concat(arr2) let sum = 0
// 3/ for(i = 0; i < arr3.length; i ++){
//     sum += arr3[i];
// return sum

}
