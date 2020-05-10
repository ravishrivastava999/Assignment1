var item = new Object( {
    Product1 : "Mobile",
    Product2 : "Laptop",
    Product3 : "Fridge"
    
});

var func = (obj,key) => {
 var value = obj[key];

 if(value==undefined) {
       return "null";
   } 

   else return value;
} 


console.log(func(item,"Product1"));
console.log(func(item,"Product5"));
