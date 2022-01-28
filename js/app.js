
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
if(this.Level==="Senior"){    
    let tax=7.5;
    this.Salary=getRandomNumber(1500,2000)*tax;	

}
if(this.Level==="Mid-Senior"){
   let tax=7.5    
    this.Salary=getRandomNumber(1000,1500)*tax;	

}
if(this.Level==="Junior"){
    let tax=7.5    
    this.Salary=getRandomNumber(1000,500)*tax;	

}


}
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min) + min);    
}
EmployeeObject.prototype.render2 = function (){
    document.write(`<p>name: ${this.FullName} his salary: ${this.Salary} </p>`)
   }
// EmployeeObject.prototype.render1 =function(){
    
    
    const newEmployee = new EmployeeObject(1000,"Ghazi Samer","Administration","Senior");
    newEmployee.render();
    newEmployee.render2();
   
    
   
    
    const newEmployee1 = new EmployeeObject(1001,"Lana Ali","Finance","Senior");
    newEmployee1.render();
    newEmployee1.render2();
    
    
    const newEmployee2 = new EmployeeObject(1002,"Tamara Ayoub","Marketing","Senior");
    newEmployee2.render();
    newEmployee2.render2();
    
    
    const newEmployee3 = new EmployeeObject(1003,"Safi Walid","Administration","Mid-Senior");
    newEmployee3.render();
    newEmployee3.render2();
    
    
    const newEmployee4 = new EmployeeObject(1004,"Omar Zaidr","Development","Senior");
    newEmployee4.render();
    newEmployee4.render2();
    
    
    const newEmployee5 = new EmployeeObject(1005,"Rana Saleh","Development","Junior");
    newEmployee5.render();
    newEmployee5.render2();
    
    
    const newEmployee6 = new EmployeeObject(1006,"Hadi Ahmad","Finance","Mid-Senior");
    newEmployee6.render();
    newEmployee6.render2();
       


// }


