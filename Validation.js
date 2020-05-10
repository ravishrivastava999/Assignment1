var deposit = a => {
    if
        (isNaN(a)==true){
            return "not a number";
        }
        else {
            return a;
        }
        
}
console.log(deposit("Ravi"));
console.log(deposit(100));
