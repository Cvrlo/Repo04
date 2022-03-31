function main(numOne, numTwo) {
    
    var  firsNum = 6;
    var  secondNum = 25;
    var  thirdNum = 5.2;

    firsNum *= 9;
    secondNum /= 5;
    thirdNum *= 10;

    return {
        firsNum,
        secondNum,
        thirdNum

        };

    }
   
    console.log(main());
    module.export = main;