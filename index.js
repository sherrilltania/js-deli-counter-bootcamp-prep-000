var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}


function nowServing(katzDeliLine){
  var i = 0;
  while(i < katzDeliLine.length){
    i++;
  } if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  } else return `Currently serving ${katzDeliLine.shift()}.`;
}

var line = [];
function currentLine(katzDeliLine){
  var i = 0;
  while (i< katzDeli.length){
    line.push(` `+[i+1]+`.`+katzDeli[i])
    i++;
  }
if (katzDeli.length === 0) {
 return "The line is currently empty.";
} else return(`The line is currently:` + line);
}

/*function currentLine(katzDeli){
  for(var i = 0; i < katzDeli.length; i++){
    line.push(` `+[i+1]+`.`+katzDeli[i])
  }
    return(`The line is currently:` + line);
}
*/
