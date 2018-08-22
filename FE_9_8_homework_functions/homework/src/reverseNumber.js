function reverseNumber(number){
  let sign=1;
  const negativeNumber=-1;
  if(number<0){
    sign=negativeNumber;
  }
  number=number+'';
  return number.replace('-','').split('').reverse().join('')*sign;
}