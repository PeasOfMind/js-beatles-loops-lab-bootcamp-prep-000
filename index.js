// add solution here
function theBeatlesPlay(musicians,instruments){
  beatlesArr = [];
  for(let i=0; i<musicians.length; i++){
    beatlesArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArr;
}