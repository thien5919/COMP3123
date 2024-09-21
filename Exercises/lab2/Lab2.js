//Name: Duc Thien Tran
//Student Id: 101333237

//Exercise 1
var gretter = (myArray, counter) => {
    var greetText ='Hello ';
    for (let name of myArray )
    {
        console.log(greetText + name);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2
function capitalize(str){
    const [first, ...rest]= str;
    return first.toUpperCase() +rest.join('').toLowerCase();
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));