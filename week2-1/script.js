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

    document.write(x + '<br>');

    

}