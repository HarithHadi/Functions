function fibonnaci(n) {
    // let n=1
    let a=0
    console.log(`${a},`)
    
    for (let index = n; index<100; index++) {
            let b = a + n
            if(a>0){
              n=a
              }
              else{
                console.log(`${n},`)
                }
            a=b;
            
            console.log(`${a},`)
            // console.log(`${n},`)
            
             
        }
    
}

console.log(fibonnaci(1))