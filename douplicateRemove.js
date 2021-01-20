// Remove douplicate value of the array numbers:
var name = [3, 6, 5, 5, 6, 5, 8, 9, 2, 4, 3];
var uniqueName = [];

for(var i = 0; i<name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);
