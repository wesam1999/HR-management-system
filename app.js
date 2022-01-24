
function EmployeeObject(EmployeeIDV,mageURLV,SalaryV,FullNameV,DepartmentV,LevelV){
this.EmployeeID=EmployeeIDV;
this.mageURL=mageURLV;
this.Salary=SalaryV;
this.FullName=FullNameV;
this.Department=DepartmentV;
this.Level=LevelV;

}
EmployeeObject.prototype.render =function(){
if(this.Level==="Senior"){
let max=2000,min=1500,tax= 7.5;
let netsalary=(Math.floor(Math.random() * (max - min + 1)) + min)*tax;	
}
else if(this.Level==="Mid-Senior"){
    let max=1500,min=1000,tax= 7.5;
    let netsalary=(Math.floor(Math.random() * (max - min + 1)) + min)*tax;
    }
else if(this.Level==="Junior"){
    let max=1000,min=500,tax= 7.5;
    let netsalary=(Math.floor(Math.random() * (max - min + 1)) + min)*tax;
    }
}
EmployeeObject.prototype.render1 =function(){
document.write( `${this.EmployeeID}    ${this.FullName}  ${this.Salary}   ${this.Level}      `);


}


