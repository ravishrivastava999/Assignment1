//Shallow copy

var value = {
 id : 1,
 name : "r"
} ;

var valueCopy = value; 

console.log(valueCopy);


valueCopy.name = "xyz"

console.log(valueCopy); 
console.log(value); 



//Deep copy

var item = {
    name: "Cupboard",
    Id : 0,
  };
  
  var newItem = { ...item};
  
 newItem.SecondName = "MyProduct";

 console.log(newItem);
 console.log(item);

 