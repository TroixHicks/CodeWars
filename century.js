function century(year) {

let aCentury = 100;
let time = year/aCentury;
if(year<= aCentury) {
  return 1;
} else if(time > Math.round(time)){
  return Math.round(time) + 1;
}else if(year > aCentury) {
  return Math.round(time);
}  
 
}
