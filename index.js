// add solution here
function theBeatlesPlay(musicians,instruments){
  let beatlesArr = [];
  for(let i=0; i<musicians.length; i++){
    beatlesArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArr;
}

function johnLennonFacts(factArr){
  let i = 0;
  let newArr = [];
  while(i<factArr.length){
    newArr.push(factArr[i]+"!!")
    i++;
  }
  return newArr;
}