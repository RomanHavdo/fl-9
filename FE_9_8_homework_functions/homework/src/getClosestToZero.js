function getClosestToZero(){
  let closestNumber=arguments[0];
  for(let i=0;i<arguments.length;i++){
        if(Math.abs(arguments[i])<Math.abs(closestNumber)){
          closestNumber=arguments[i];
        }
  }
  return closestNumber;
}