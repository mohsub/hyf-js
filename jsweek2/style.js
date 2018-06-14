
let myDays=
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function myFunction(){

    let d = new Date();

    let n = d.getDay();

    let m = document.getElementById('inPut').value;

    let z = m - 7;

thisDay = myDays[n];


meetDay = myDays[n+z];
  
    document.getElementById('demo').innerHTML = 'today is :' + thisDay + '<br>' +

    'how many days to meet :' + m + '<br>' +
    
    'the meeting day :' + meetDay;

    console.log('today is :',thisDay)

    console.log('how many days to meet :',m);

    console.log('the meeting day :',meetDay);
}


// 02

for (let i = 1 ; i <= 1000 ; i++){

    let x = '';

    x += i + '<br>';

    if ( i % 3 == 0){

        x = 'Fizz';

    }

    else if ( i % 5 == 0){

        x = 'Buzz';
    }

    else if ( i % 15 == 0){

       x = 'FizzBuzz';
    }

 
    
    console.log(x);

    document.getElementById("multi").innerHTML = x + '<br>';

    

}

//03

let s = '*';

for(let j = 0; j < 10; j++){
    let y = '';

    y += s.repeat(j) + ' <br> ';

    console.log(y);

    document.getElementById('demo').innerHTML = y + '<br>' ;

    
}



 



