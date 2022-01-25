
function EmployeeObject(EmployeeIDV,FullNameV,DepartmentV,LevelV){
this.EmployeeID=EmployeeIDV;
this.mageURL=`./images/${this.name}.PNG`;
this.Salary=0;
this.FullName=FullNameV;
this.Department=DepartmentV;
this.Level=LevelV;

}
console.log("holow adssa");
EmployeeObject.prototype.render =function(){
if(this.Level=="Senior"){
let max=2000,min=1500,tax= 7.5;
let netsalary=(Math.floor(Math.random() * (max - min )) + min)*tax;	
return netsalary;
}
else if(this.Level=="Mid-Senior"){
    let max=1500,min=1000,tax= 7.5;
    let netsalary=(Math.floor(Math.random() * (max - min )) + min)*tax;
    return netsalary;    
}
else if(this.Level=="Junior"){
    let max=1000,min=500,tax= 7.5;
    let netsalary=(Math.floor(Math.random() * (max - min )) + min)* tax;
    return netsalary;    
}
}
EmployeeObject.prototype.render2 = function (){
    document.write(`<p>name: ${this.FullName} his salary: ${this.Salary} </p>`)
   }
// EmployeeObject.prototype.render1 =function(){
    
    const newEmployee = new EmployeeObject(1000,"Ghazi Samer","Administration","Senior");
    newEmployee.render();
    newEmployee.render2();
   
    
    const newEmployee1 = new EmployeeObject(1001,"Lana Ali","Finance","Senior");
    newEmployee1.render2();
    newEmployee1.render();
    
    const newEmployee2 = new EmployeeObject(1002,"Tamara Ayoub","Marketing","Senior");
    newEmployee2.render2();
    newEmployee2.render();
    
    const newEmployee3 = new EmployeeObject(1003,"Safi Walid","Administration","Mid-Senior");
    newEmployee3.render2();
    newEmployee3.render();
    
    const newEmployee4 = new EmployeeObject(1004,"Omar Zaidr","Development","Senior");
    newEmployee4.render2();
    newEmployee4.render();
    
    const newEmployee5 = new EmployeeObject(1005,"Rana Saleh","Development","Junior");
    newEmployee5.render2();
    newEmployee5.render();
    
    const newEmployee6 = new EmployeeObject(1006,"Hadi Ahmad","Finance","Mid-Senior");
    newEmployee6.render2();
    newEmployee6.render();   


// }


