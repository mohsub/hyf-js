var a =  ['Zeeshan Haider', 'Anas', 'Sajid Mazir', 'Anuradha', 'Gary', 'Marco De Cara', 'Ehsan','Haretha','Krishna',
 'Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'];
 var i;

 for ( i in a ){
     console.log(a[i])
 }

 var Pair1 = a[ Math.floor(Math.random() * a.length)]

 var Pair2 = a[ Math.floor(Math.random() * a.length)]

 console.log( Pair1 + Pair2);

 if (Pair1 !== Pair2){

 document.write(" the random pair is :" + Pair1 + " " + " and " + " " + Pair2);
 }

 else {
     while (Pair1==Pair2) {
        Pair1 = a[ Math.floor(Math.random() * a.length)]
        Pair2 = a[ Math.floor(Math.random() * a.length)] 

     }
     console.log( Pair1 + Pair2 );
     document.write(" the random pair is :" + Pair1 + " " + " and " + " " + Pair2); 
 }