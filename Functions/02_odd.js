function odd(start, end) {
    const oddarr=[];
    for(let i=start; i<end; i++){
        
        if(i%2==1){
            oddarr.push(i)
        }

    }
    return oddarr;
    
    
}
console.log(odd(1,10))