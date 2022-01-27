'use strict';


let drinkForm = document.getElementById('drinkForm');
let employee = document.getElementById('employee');
let users = [];
checkLocalAndPush();

// get the employee object
function EmployeeObject(DepartmentNameV,NumOfEmployeesV,salariesAllEmployeeV){
    this.DepartmentName=DepartmentNameV;
    this.NumOfEmployees=NumOfEmployeesV;
    this.AverageSalary=0;
    this.salariesAllEmployee=salariesAllEmployeeV;
  this.totalAvarage=0;
    }
    //function for cluclate the totle salary
    function totalSalary  () {
        this.totalAvarage +=this.salariesAllEmployee ;
    }
    function AverageSalary  () {
        this.AverageSalary =this.salariesAllEmployee/this.NumOfEmployees ;
    }

    // function for the event for button submint
    function handelSubmit(event) {
        event.preventDefault();
        let DepartmentName = event.target.name.value ;
        let NumOfEmployees = event.target.Number.value;
        let Salary = event.target.salary.value;
        let userObj = {DepartmentName,NumOfEmployees,Salary}
        users.push(userObj);
        let jsonArray = toJSON();
        saveToLocalS(jsonArray);  
        const newEmployee = new EmployeeObject(DepartmentName,NumOfEmployees,Salary);
        totalSalary();
        AverageSalary();
        render(readFromLocalS());
        
    }
    // function for change the array to json array
    function toJSON (){
        let jsonArray = JSON.stringify(users);
        return jsonArray;
    }
    //function for save the array that change it from  function toJSON in local storage
    function saveToLocalS(jsonArray){
            localStorage.setItem('allUsers',jsonArray) 
    }
    //function for read the data from the local strorage
    function readFromLocalS(){
        let jsonArr = localStorage.getItem('allUsers');
        let arr = JSON.parse(jsonArr);
        if(arr !== null){
            return arr;
        }else{
            return [];
        }
    }
    //function to  reder employee object in the HTML file
    function render(arr){
    
           
        employee.innerHTML = '';
        
        var student;
        for (var j = 0; j < arr.length; j++) {
          let  Employee = {
                name: arr.DepartmentName+ j,
                Number: arr.NumOfEmployees+ j,
                slary: arr.salariesAllEmployee+ j,
                totalsalary: arr.totalAvarage+ j,
                averageSalary: arr.averageSalary+j
            };
            var table = document.getElementById("myTable");
            var row = table.insertRow(j);
            var cell1 = row.insertCell(5);
            var cell2 = row.insertCell(5);
            var cell3 = row.insertCell(5);
            var cell4 = row.insertCell(5);
            var cell5 = row.insertCell(5);
            cell1.innerHTML = Employee.name,
            cell2.innerHTML = Employee.Number,
            cell3.innerHTML = Employee.slary;
            cell4.innerHTML = Employee.totalsalary;
            cell5.innerHTML = Employee.averageSalary;
        }            
    }
    //function for check the local stroage is emty and send the arry 
    function checkLocalAndPush(){
        if(users.length == 0 ){
            let arr = readFromLocalS();
            if(arr.length !=0){
                users = arr;
            }
        }
    }
    render(readFromLocalS());





    drinkForm.addEventListener('submit',handelSubmit);



