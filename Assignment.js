const employee = new Object({

Name : "Ravi",
Id : 123,
Dept : "IT",
Designation : "Software Engineer",
getEmpInfo : function() {
	return this.Name + " " + this.Dept;
	},
});

console.log(employee.Id);
console.log(employee.getEmpInfo());

