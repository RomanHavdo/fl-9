function isPrime(number){
  const firstPrimeNumber=2;
  if(number<firstPrimeNumber){
    return false;
  }
  
  let sqrtNumber = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrtNumber; i++){
        if (number % i === 0){
            return false;
        }
    }
  return true;
}