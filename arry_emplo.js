//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
name1=employee.map(emp=>emp[1]).forEach(element => {
    console.log(element);
});
console.log(name1);
//print total numbers of employee


//print developer employee details
developer1=employee.filter(emp=>emp[2]=='developer').forEach(emp=>console.log(emp[1]))

//print employee whose salary > 30000


// print details of employee Laisha

//sort employee based on their salary in descending order





