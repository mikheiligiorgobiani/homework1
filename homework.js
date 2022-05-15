// Task 1

let girl = "ana";
let boy = "levan";
let ageGirl = 28;
let ageBoy = 21;

let ageAna = girl + " " + boy + "ze" + " " + (ageGirl - ageBoy) + " " + "wlit ufrosia";
console.log(ageAna);

// Task 2

let studentsArry = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
console.log(studentsArry[4])

 // Task 3

 let students = {
     firsName :'mishka',
     lastName :'giorgobiani',
     age :21,
     subjects :["mus","swim","sport","run","hist"],
     roommate :{
         fullName :"giorgi fruidze",
         age :22,
     }
 }
 let fullname = students.firsName + " " + students.lastName;
 students.fullname = fullname;
 console.log(students)

 for(i = 0; i < students.subjects.length; i++);
 console.log(students.subjects)
 
 let result = (students.fullname + " " + "aris" + students.age + "wlis da misi roommate aris" + " " + students.roommate.fullName);
 console.log(result)

 // Task 4

 var fruit= ["Banana", "Orange", "Apple", "Mango",2,12]

let i = 0;
while (i< fruit.length && typeof fruit[i] == "string"){
    console.log(fruit[i])
    i++;
}

// Task 5

let numArrey= [12,23,43,11,9,2,121,90]
for(let i = 0; i< numArrey.length; i++){
    if(numArrey[i]> 31 && numArrey[i] %2 == 0){
        console.log('Element is greater than provided value and is EVEN')
    }
    else if (numArrey[i]<31 && numArrey[i] %2 !=0){
        console.log('Element is less than provided value and is ODD')
    }
}