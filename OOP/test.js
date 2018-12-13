const a = 10;


function changeConst(a) {
    a = 20;
    console.log('function a:', a)
}


console.log('global a:', a);
changeConst(a);
console.log('global a second time:', a);