// oop ---> Stands for object orianted programming 
// it is paradiom or style for code 
// the first oop in programming was 1960 
// Some language support oop and other not 

// why we should use oop ?
/*

1- it enables you to write large and complex software programs
2- it enables you to hide some parts of code (encyript) it is called (encapsulation)
3- it enables you to make reasuable object can use it everytime (inheretance).

*/

// to make aconstructor function two syntax
function User1 (id,username,country){
      this.i = id;
      this.u = username; 
      this.c = country;
}
let userone = new User1(1,'anwar',"Egypt");
console.log(userone.i);
console.log(userone.u);
console.log(userone.c);

/////////////////////////////////////////////////////////////////////////////////////////////
class User {
    constructor(id, username, country) {
        this.i = id;
        this.u = username;
        this.c = country;
    }
  getdata(state)
    {   
        return `My id is : ${this.i} and my name is : ${this.u} and my country : ${this.c} and my state is :${state}`   
    }
}
let usertwo = new User(2, 'anwar', 'Egypt');
console.log(usertwo.i);
console.log(usertwo.u);
console.log(usertwo.c);
console.log(usertwo.getdata(true));
//////////////////////////////////////////////////////////////////////////////

// to add new properity or new methods

// in aconstructor function it should be inside it

function User1 (id,username,country,ability){
    this.i = id;
    this.u = username; 
    this.c = country;
    this.a = ability;
}
let update = new User1(1,'anwar',"Egypt",'5tasks');
console.log(update.i);
console.log(update.u);
console.log(update.c);
console.log(update.a);

/////////////////////////////////////////////////////////////////////////////
console.log('/'.repeat(60));
class Car {

    constructor(color,price,model)
    {
        this.c = color;
        this.p = price;
        this.m = model;
    }
    getinfo (){
        return `welcome`
    }
}
let car_details = new Car('black','3 milion','BMW');
console.log(Car.prototype);
console.log(car_details);
console.log(car_details.c);
console.log(car_details.p);
console.log(car_details.m);
console.log(car_details.getinfo());
console.log(car_details instanceof Car); // true

////////////////////////////////////////////////////////////////
console.log('='.repeat(60));

// update property value

class Animal{
    constructor(kind,life)
    {
        this.k = kind === 'agressive' ? `iam lion` : 'No iam domestic animal';
        this.l = life === 'forest' ? `My Life in the forest` : 'iam domestic animal and live in any green land';
    }
    Update(value)
    {
        this.l = value; 
    }
}

let animal = new Animal('agressive','forest');
console.log(animal.k);
console.log(animal.l);
animal.Update('iam life in the green land forever');
console.log(animal.l);

/////////////////////////////////////////////////////////////////////////////////////
// what is the defference between property and method 
// property always in the constructor but the method in the class 
// Built in constructor

let strone  = 'anwar';
let strtwo = new String('anwar');

console.log(strone instanceof String); // false as strone is string and String is object
console.log(strtwo instanceof String); // true 

console.log(strone.constructor === String);  // true
console.log(strtwo.constructor === String);  // true

// static props and methods  --> they belongs to class only 

class programming_Languages {
  static  counter = 0 ;
    constructor(one,two,three,four){
        this.one = one;
        this.two=two;
        this.three = three ; 
        this.four=four;
        programming_Languages.counter++;
    }
    collect(){
        return `the languages are :${this.one} - ${this.two} - ${this.three} - ${this.four}`;
    }
    static count_members ()
    {
        return `${this.counter} objects created`
    }
}
let languages = new programming_Languages('javascript','c++','python','php');
let languages1 = new programming_Languages('javascript','c++','python','php');
let languages2 = new programming_Languages('javascript','c++','python','php');
let languages3= new programming_Languages('javascript','c++','python','php');

console.log(languages.collect());
console.log(programming_Languages.count_members());

//////////////////////////////////////////////////////////////////////////////////////////////

console.log(('='.repeat(60)));

// inheretance 

class Parent {
     
    constructor(animal,life,kind)
    {
        this.animal = animal;
        this.life = life;
        this.kind = kind;
    }
    msg(){
        return `hello ${this.animal}`
    }
    
}
let obj  = new Parent('lion','forest','dangerous');
console.log(obj.animal);
console.log(obj.life);
console.log(obj.kind);
class ChildOne extends Parent {
    constructor(animal,life,kind,size)
    { 
        super(animal,life,kind);
        this.size=size;
    }
    msg2()
    {
        return `i life in : ${this.life}`
    }
}
let childone =new ChildOne('dog','desert','dangerous','1meter')
console.log(childone.animal);
console.log(childone.life);
console.log(childone.kind);
console.log(childone.size);
console.log('='.repeat(60));
class ChildTwo extends ChildOne{
    constructor(itsname,itsplace,itslife,itssize,color){
        super(itsname,itsplace,itslife,itssize);
        this.color =color
    }
}
let child = new ChildTwo('crocodille','sea','ontheground','70cm','lightgreen');
console.log(child.animal);
console.log(child.life);
console.log(child.kind);
console.log(child.msg());
console.log(child.msg2());
console.log(child.size);
console.log(child.color);

console.log(('='.repeat(60)));

//////////////////////////////////////////////////////////////////////////////////////

// encapsulation --> it enablus you to encyript props or methods

class Details{
          #s;
    constructor(id,name,salary,country){
        this.i = id;
        this.n = name;
        this.#s = salary; 
        this.c = country;
    }
    Mysalary()
    {
        return `My salary is : ${parseInt(this.#s)}`
    }
}
let details =new Details(10,'anwar','10000 El','Egypt');
console.log(details.i);
console.log(details.n);
console.log(details.c);
console.log(details.Mysalary());

///////////////////////////////////////////////////////////////////////////////////////////

console.log('='.repeat(60));

// prototype --> any object created its prototype be created and contains its features 
// add to prototype chains

class Countries{
    constructor(countryOne,countryTwo,countryThree)
    {
        this.one = countryOne;
        this.two = countryTwo;
        this.three = countryThree;
    }
}
let mycountries = new Countries('Egypt','Eraque','Morocoo');
console.log(mycountries.one);
console.log(mycountries.two);
console.log(mycountries.three);
Countries.prototype.collect_countries = function(){
    return`${this.one} ${this.two} ${this.three} ${this.four}`
}
Countries.prototype.four = 'Quater'
console.log(mycountries.collect_countries());
console.log(mycountries.four);
//Built in constructor

String.prototype.adddotbefore= function(val)
{
    
    return `.${this}`
}
let str = 'anwar tarek';
console.log(str.adddotbefore());

// Meta Data and discriptor

let user = {
    a:1,
    b:2,

}
Object.defineProperty(user,'c',{
    writable:true,
    enumerable:true,
    configurable:true,
    value:3
})
console.log(user);
user.c=100
console.log(user);  // the value will be 100 as writable = true else it will be 3 

for(values in user)
{
    console.log(values,user[values]);  // the value of c will enter the loop as the enumerable = true else it will not enter the loop but it not deleted from the object 
}

console.log(delete user.c);     // the value will be deleted as the configurable = true else it will not delete and i can redefine the object 
console.log(user);
console.log('='.repeat(60));

Object.defineProperty(user,'c',{
    writable:true,
    enumerable:true,
    configurable:true,
    value:200,
})
console.log(user);
console.log('='.repeat(60));

// add multivalue to object 

let counting =
{
    a:10,
    b:20,
}
Object.defineProperties(counting,{
    c:{
        writable:true,
        value:30,
    },
    d:{
        writable:false,
        value:40,
    },
    e:{
        configurable:true,
        value:50,
    },
})
console.log(counting);
console.log(Object.getOwnPropertyDescriptor(counting,'d'));
console.log(Object.getOwnPropertyDescriptors(counting));

// Date and Time --> the constructor that access it ---> new Date()
/*
to calculate the date and time we need an refeerence point
the starting point 1 Jan 1970
the Epiosh time or unix time -->the number of seconds from this date 1 Jan 1970
*/
console.log('='.repeat(60));
let date = new Date();
let mydate = new Date('Nov 17, 2001');
let difference = date - mydate;
let res = difference / 1000 / 60 / 60 / 24 / 365.25
console.log(`${res.toFixed(2)} Years`);

/*
Date.now() -->millseconds from 1 Jan 1970 to current date
getTime() -->millseconds from 1 Jan 1970 to current date
getDate() --> the day in the month
getDay() --> the day in the week
getMonth() --> get the month
getFullyear() --> the year
getHours()--> the hours
getMinutes() --> get minutes
getSeconds()--> the seconds

*/
console.log('='.repeat(60));
let Time = new Date();
console.log(Time);
console.log(Time.getTime());
console.log(Time.getDate());
console.log(Time.getFullYear());
console.log(Time.getDay());
console.log(Time.getMonth());
console.log(Time.getHours())
console.log(Time.getMinutes())
console.log(Time.getSeconds());
