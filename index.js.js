
function findaverage(array){
let average = 0;
for (let i = 0; i<array.length; i++){
    let currentnum = array[i]
    average += currentnum;
}
average = average / array.length
return average;
}
 console.log(findaverage([15,20,35,30]))