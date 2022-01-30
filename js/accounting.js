'use strict';


// let drinkForm = document.getElementById('drinkForm');
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
    // function handelSubmit(event) {
    //     event.preventDefault();
    //     let DepartmentName = event.target.name.value ;
    //     let NumOfEmployees = event.target.Number.value;
    //     let Salary = event.target.salary.value;
    //     let userObj = {name:DepartmentName,number:NumOfEmployees,salary:Salary}
    //     users.push(userObj);
    //     let jsonArray = toJSON();
    //     saveToLocalS(jsonArray);  
    //     const newEmployee = new EmployeeObject(DepartmentName,NumOfEmployees,Salary);
    //     totalSalary();
    //     AverageSalary();
    //     render(readFromLocalS());
        
    // }
    // function for change the array to json array
    // function toJSON (){
    //     let jsonArray = JSON.stringify(users);
    //     return jsonArray;
    // }
    //function for save the array that change it from  function toJSON in local storage
    // function saveToLocalS(jsonArray){
    //         localStorage.setItem('allUsers',jsonArray) 
    // }
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
    
           
        
        let div=document.createElement('div');
        div.innerHTML = '';
        employee.appendChild(div);
        // let table=document.createElement('table');
        // div.appendChild(table);
        // let tr=document.createElement('tr');
        // table.appendChild(tr);
        // let td=document.createElement('td');
        // tr.appendChild(td);
        // td.textContent="depertement name"
        // let td=document.createElement('td');
        // tr.appendChild(td);
        // td.textContent="number of employee for each depertement"
        // let td=document.createElement('td');
        // tr.appendChild(td);
        // td.textContent="avarge salary"
        // let td=document.createElement('td');
        // tr.appendChild(td);
        // td.textContent="total salary"
        for(let i=0; i<arr.length;i++){
        let p=document.createElement('p');
        
        let a=0
        let AdministrationNmuber=0,MarketingNmuber=0,DevelopmentNmuber=0,FinanceNmuber=0
        while(a<=i){
            a++
           if( arr[a].Department==="Administration"){AdministrationNmuber++}
else if(arr[a].Department==="Marketing"){MarketingNmuber++}
        else if(arr[a].Department==="Development"){DevelopmentNmuber++}
        else if(arr[a].Department==="Finance"){FinanceNmuber++}
    let can="AdministrationNmuber:"+AdministrationNmuber+"MarketingNmuber:"+ MarketingNmuber+"DevelopmentNmuber:"+ DevelopmentNmuber +"FinanceNmuber:"+FinanceNmuber;
    // let tr=document.createElement('tr');
    // table.appendChild(tr);
    // let td=document.createElement('td');
    //     tr.appendChild(td);
    //     td.textContent=arr[i].name;
    //     let td=document.createElement('td');
    //     tr.appendChild(td);
    //     td.textContent=can
    //     let td=document.createElement('td');
    //     tr.appendChild(td);
    //     td.textContent=this.AverageSalary;
    //     let td=document.createElement('td');
    //     tr.appendChild(td);
    // let th=document.createElement('th');
    // tr.appendChild(th);
    // th.textContent=this.totalAvarage;

div.appendChild(p);    
        p.textContent="name:   " +arr[i].name+ "    departement:   "+ can+"   -Level:"+ arr[i].level;
    }

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
    const newEmployee = new EmployeeObject(DepartmentName,NumOfEmployees,Salary);
        totalSalary();
        AverageSalary();
        



    // drinkForm.addEventListener('submit',handelSubmit);



