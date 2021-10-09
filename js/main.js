//declaration
let count=0;
let lines= [];
let strLine="";

function addCount() 
{
    addCounterLine(count++);
    displayLines(lines);
}

function addCounterLine(counter){
    let lineStr = {line : "Line #" + counter};
    lines.push(lineStr);
}

function deleteCount(){
    lines=[];
    displayLines(lines);
    count=0;
}

function displayLines(lines){
    console.log(lines.length);
    let all ="";
    for(let i=0; i<lines.length ; i++){
       all+=`<p>`+ lines[i].line +`</p>`
    }
    document.getElementById("add").innerHTML=all;
    var height =document.getElementById("add").offsetHeight;
    document.getElementById("content").setAttribute("style","height: calc(100vh - "+height+"px - 120px)");
}