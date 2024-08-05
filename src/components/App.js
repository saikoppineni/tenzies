import React from 'react';
import Confetti from "react-confetti"
import Data from './Data.js';
import Emoji from './emoji.js'
import '..//components/App.css';


function App()
{
  var [stateVar,stateFunction]=React.useState(Data)
  var [stateButton,buttonFunction] = React.useState(false)
  var [stateCount,countFunction]=React.useState(0);

  function divClicked(id)
  {
    stateFunction(prevalue => {
      return(
      prevalue.map(oldvalue =>{
       return(id===oldvalue.id
        ? {...oldvalue,
            selected:!oldvalue.selected}
        : oldvalue
      )})
    )})
  }

  var newArray = stateVar.map((item,key=item.id) => {
    var bgcolor = item.selected ? 'blue' : 'red'
    var newArrayStyle={
      backgroundColor: bgcolor
    }

    return(
   <div className='divId' style={newArrayStyle} onClick={()=>divClicked(item.id)}>
   {item.number}
   </div>
   )})

   function clicked()
   {
    countFunction(stateCount+1)
    stateFunction(prevArray =>{ return( 
        prevArray.map(prevObject =>{  return(
          !prevObject.selected
          ? {...prevObject,
              number:Math.floor((Math.random()*6)+1)}
          :{...prevObject}
      )}
      ))
    })
   }
   
   React.useEffect(() =>{
    const sameNumbers= stateVar.every(Number => stateVar[0].number===Number.number)
    const allTrue =stateVar.every(isTrue => isTrue.selected)
    if(allTrue && sameNumbers)
    {
      buttonFunction(previous => !previous)
    }
   },[stateVar])

  return(
    <div>
      <div id='head'><h1>Tenzies Game</h1></div>
      <div id='txt'>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls. </p>
      </div>
      {stateButton && <Confetti />}
      <div id='mainId'>
        {newArray}
      </div>
      <center>
        <button id='btn' onClick={clicked}>{!stateButton ? 'Roll' : 'Completed'}</button>
      
      <br />
      <h3>Your Luck : {stateCount}</h3>
      </center>
      {stateButton && <Emoji score={stateCount} />}
    </div>
  )
}

export default App;