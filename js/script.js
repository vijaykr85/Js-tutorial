// let digit1 = 10;
// const x = 5;

// digit1 = 20;

// let z = digit1 + x;

// console.log(z);


       //variable for javaScript
// let x;                       
// x = 10;

// console.log(x); 

// let x;
// x = 10;

// let y = 3;

// let z ;
// z = x + y;

// console.log(x);



            // powers in javaScript
// let x;
// x = 5;

// let y = 3;

// let z;

// z =x**4;

// console.log(z);

            //string concatinate

            
            // let x = 5;  //number

            // let z = (x + 5  ) /5;

            // console.log(z);


// let a = 'hello';
// let b = 'world';

// console.log(a+" "+b);


// let x = "vijay";

// console.log(x);

// let age = 18;

// if (age >=18){
//     alert("you can vote!");
// }

// let age = 13;

// let hasVoterCard = 'yes';

// if(age>=14 && hasVoterCard == 'yes'){
//     alert("You can vote!");
// } else {
//     alert("you cannot vote!");  
// }


            //logIN or logOut 

// let isLoggedin = 0;

// if(isLoggedin == 0){
//     document.write('login');
// } else {
//     document.write('logout');
// }

// let option = isloggedin == 1 ? "Logout" : "Login";

// let user;

// user = "vijay kumar";

// alert(user  );

// if input = 1, "yes", "y" output = "continue...."
// if input = 0, "n" , "no" output = "End....."

// let input;

// input = "yes"; 

// if (input===1){
//     document.write("continue.....");
// } else if(input ==="yes"){
//     document.write("continue.....");
// } else if(input==="y"){
//     document.write("continue.....");
// } else if(input ===0){
//     document.write("End.....");
// }else if(input==="n"){
//     document.write("End.....");
// }else if(input==="no"){
//     document.write("End.....");
// } else{
//     document.write("wrong input");
// }

//=== comparison

// switch(input){
//     case 1:     //if (input===1)
//         document.write("continue.....");
//         break;
//     case "yes": // if(input ==="yes")
//         document.write("continue.....");
//         break;
//     case "y ": // if(input==="y")
//         document.write("continue.....");
//         break;
//     case 0:
//         document.write("End.....");
//         break;
//     case "n" :
//         document.write("End.....");
//         break;
//     case "no" :
//         document.write("End.....");
//         break;
//     default :
//         document.write("wrong input");
// }

            //loops
    // let count = 1;

    // while(count <= 10){
    //     document.write(" vijay Babu ");
    //     count++;
    // }

    // let count = 1;
    // sum = 1;

    // while( count<=100 ){
    //     if( count % 2 == 0){
    //         sum = sum + count;
    //     }
    //     count++;

    // }
    // document.write(sum); 

    // for(let count = 1; count <=10; count++){
    //     document.write(count);
    //     document.write('<br>');

    //     for(let count2 = 1; count2 < 3; count2++){
    //         document.write("vijay");
    //         document.write('<br>');
    //     }
    // }


        /*
         1. alert() - shows a message.
         
         2. prompt() - shows a message, input text. it returns the text on ok or, if cancel
         button or Esc is clicked, null.

         3. confirm() - shows a message, confirm with "ok" or "cancel". it returns true for ok
         and false for Cancel/Esc.

         */

         // Note: All these pause script execution and don't allow the visitor to interact with the
         // rest of the page until the  window has been dismissed.

    // let age = prompt("Enter your age");
    
    // if(age!= null){
    //     document.write(`your age is ${age} `);

    // }else{
    //     document.write("Age field was Blank");
    // }


                // confirm 

    // let response = confirm("are you sure ,you want to delete?");

    // if (response){
    //     document.write("Deleted"); 
    // }else{
    //     document.write("not Deleted");
    // }

    // 1. String()
    // 2. Number()
    // 3. Boolean()


    // let type = "hello";
    // console.log(typeof type); //old

    // let NewType = Boolean(type);
    // console.log(NewType);
    // console.log(typeof NewType); //new

                        // Template literal:
    
    // let str = "vijay kumar";

    // let pen = `Hii ${str}`;

    // console.log(pen);


    // let str = "vijay";

    // if("vijay" == str){
    //     console.log("equal");
    // }else{
    //     console.log("not equal");
    // }

    // let str2 = "kumar";

    // console.log( str +" "+ str2 );

                // trim() // function use for remove extra spaces.
    
    // let str = " This is javaScript tutorial. it is a good tutorial. ";

    // let trimstr = str.trim();

    // console.log(str);
    // console.log(trimstr);

//     let book = ["maths","physics","Bio","computer application"];

//     book.push("Hindi");
//     console.log(book.length);
//     console.log(book);
    
                     // function



// function MulTble(){
//        for(i=1;i<=10;i++){
//               document.write(`50* ${i} = ${50*i} `);
//               document.write("<br>");
//        }
//        document.write("<br>");
// }


// MulTble();

// document.write("hello vijay hows the table");
// document.write("<br><br>");
// MulTble(); 


// function MulTble(num){
//        for(i=1;i<=10;i++){
//               document.write(`${num} *${i} = ${num*i}`);
//               document.write("<br>");
//        }
// }
// MulTble(2);
// document.write("<br><br>");
// MulTble(17);
// document.write("<br><br>");
// MulTble(25);


// function add(num1, num2){
//        document.write(num1 % num2);

// }

// add(44,16);

                     // Returning value in javaScript
// function add(a, b){
//        return a+b; // return value 
// }

// let c = add(5,6);
// document.write(c);

                            // Global vaeriable:

// let car = "audi";

// function add(){
//        let result = 33; // local variable
//        console.log(result);
// }

// function sub(){
//        let result = 50;
//        console.log(result);
// }

// add();
// sub();
// console.log(car);
// document.write(car);


// setTimeout(let = function(){
//        console.log("hello world!");
// },3000);


// ( function (){
//        console.log("Hello world");
//        alert("Hello world");

// })(); 














