



function isPrime(num) {
    
    if (num < 2) return false;

  //pooja inititalize i = 2/ intentionally I have initialize i=1;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        
        if (num % i === 0) return false;
    }

    
    return true;
}

// Test the function
console.log(isPrime(1)); 
console.log(isPrime(2));    
console.log(isPrime(7));
