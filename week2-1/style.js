
let myDays=
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function myFunction(){

    let d = new Date();

    let n = d.getDay();

    let m = document.getElementById('inPut').value;

    let z = m - 7;

thisDay = myDays[n];


meetDay = myDays[n+z];

    

    

    meetDay = myDays[n+z];    

    document.getElementById('demo').innerHTML = 'today is :' + thisDay + '<br>' +

    'how many days to meet :' + m + '<br>' +
    
    'the meeting day :' + meetDay;

    console.log('today is :',thisDay)

    console.log('how many days to meet :',m);

    console.log('the meeting day :',meetDay);
}

// homework 2


    Name = ['Zeeshan', 'Anas', 'Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna',
     'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'],

     address = ['Copenhagen','Allerød','Alling','Ballerup','Birkerød','Dragør','Allerød','Alling','Farum',
     'Allerød','Alling','Glostrup','Hillerød','Allerød','Alling'],

     telephone = [12464512,23458789,09763256,5263451,76614568,54764287,09461656,16653498,
    31436587,43455156,65763432,76873845,45654135,89654386,79843217],

    postCode = [2700,2660,2456,2134,2356,2888,2435,2100,2456,2211,2121,2876,2319,2841,2900],

    grade =[ 90,91,88,83,78,80,70,85,80,90,95,88,84,91,90],



 console.log(Name[1]);
 


 