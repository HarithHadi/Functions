function even(start,end) {
    const evenarr = [];
    for(let i=start ; i<end; i++){
        if(i%2==0){
            evenarr.push(i);
        }
    }
    return(evenarr);
    
}
console.log(even(1,10));