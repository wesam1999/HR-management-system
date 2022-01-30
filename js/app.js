'use strict';
let drinkForm = document.getElementById('drinkForm');
let employee = document.getElementById('employee');

let users = [];

function EmployeeObject(mageURLV,FullNameV,DepartmentV,LevelV){
    this.EmployeeID=0;
    this.ImageURL=mageURLV;
    this.Salary=0;
    this.FullName=FullNameV;
    this.Department=DepartmentV;
    this.Level=LevelV;
    
    }
    
    console.log( Math.floor(Math.random() * (9999 - 1000 )) + 1000);
    EmployeeObject.prototype.employeeId =function(){

     this.EmployeeID=Math.floor(Math.random() * (9999 - 1000 )) + 1000;

    }

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


      function render2(arr){
        let div=document.createElement('div');
        div.innerHTML = '';
    for(let i=0; i<arr.length;i++){
        let img = document.createElement('img');
        
        employee.appendChild(div);
        div.appendChild(img);
        // img.setAttribute('src',this.Imageurl);
        
    
        let p = document.createElement('p');
    div.appendChild(p);
        p.textContent=`name: ${arr[i].name}  departement ${arr[i].Department} -Level: ${arr[i].level}`;
    } 
    }

      

    


    function handelSubmit(event) {
        event.preventDefault();
        let fullname = event.target.name.value ;
        let d1 = event.target.d1.value;
        
        let LevelEmplo = event.target.Level.value;
        
        // let Imageurl = event.target.Image.value;
        const newEmployee = new EmployeeObject(Imageurl,fullname,d1,LevelEmplo);
        newEmployee.employeeId();
        newEmployee.render();
        let userObj = {name:fullname,Department:d1,level:LevelEmplo}
        users.push(userObj);
        let jsonArray = toJSON();
        saveToLocalS(jsonArray);
        render2(readFromLocalS());
        //    console.log(ingredientsArr);
        
        //    console.log(`${name}  ${ingredients}  ${isCold}  ${isHot}`);
        
        
    }
    function toJSON (){
        let jsonArray = JSON.stringify(users);
        // console.log(jsonArray);
        return jsonArray;
    }
    function saveToLocalS(jsonArray){
        // setItem('key',value(the convertd array))
    
            localStorage.setItem('allUsers',jsonArray)
        
            // [0:{name: 'latte', age: '10'}    1: {name: 'ahmad', age: '23'}]
         
    }
    function readFromLocalS(){
        let jsonArr = localStorage.getItem('allUsers');
        let arr = JSON.parse(jsonArr);
        if(arr !== null){
            return arr;
        }else{
            return [];
        }
    }
        
        // const newEmployee = new EmployeeObject(1000,"Ghazi Samer","Administration","Senior");
        // newEmployee.render();
        // newEmployee.render2();
       
        
        // const newEmployee1 = new EmployeeObject(1001,"Lana Ali","Finance","Senior");
        // newEmployee1.render2();
        // newEmployee1.render();
        
        // const newEmployee2 = new EmployeeObject(1002,"Tamara Ayoub","Marketing","Senior");
        // newEmployee2.render2();
        // newEmployee2.render();
        
        // const newEmployee3 = new EmployeeObject(1003,"Safi Walid","Administration","Mid-Senior");
        // newEmployee3.render2();
        // newEmployee3.render();
        
        // const newEmployee4 = new EmployeeObject(1004,"Omar Zaidr","Development","Senior");
        // newEmployee4.render2();
        // newEmployee4.render();
        
        // const newEmployee5 = new EmployeeObject(1005,"Rana Saleh","Development","Junior");
        // newEmployee5.render2();
        // newEmployee5.render();
        
        // const newEmployee6 = new EmployeeObject(1006,"Hadi Ahmad","Finance","Mid-Senior");
        // newEmployee6.render2();
        // newEmployee6.render();   
       
        render2(readFromLocalS());
       
    
    
        drinkForm.addEventListener('submit',handelSubmit);