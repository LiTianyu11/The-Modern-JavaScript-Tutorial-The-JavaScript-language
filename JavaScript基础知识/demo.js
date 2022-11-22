const res = [];
var demo1 = function(arr){
    arr.push(1);
    res.push([...arr])

}   
demo1([])
console.log(res)