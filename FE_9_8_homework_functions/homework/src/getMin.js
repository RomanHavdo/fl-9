function getMin(){
let min=arguments[0];
  for(let i=0;i<arguments.length-1;i++){
    if(arguments[i]<arguments[i+1]){
      min=arguments[i];
    }else{
      min=arguments[i+1];
    }
  }
  return min;
}