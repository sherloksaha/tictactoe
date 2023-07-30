import React, { useEffect, useState } from 'react'
import Button from './Button'

const Board = () => {
    const [includeArr,setIncludeArr]=useState([]);
    let used=false;
    const [arrayState,setArrayState]=useState([new Array(9).fill(null)]);
    const [Counter,setCounter]=useState(0);
    const currentAra=arrayState[Counter]
    const [dec,setDec]=useState(false);
    function updates(i,currentAra){
        let c = currentAra.slice();
        let x="";
        if(Counter%2===0){
            x="X"
        }
        else {
            x="O"
        }
        c[i]=x;
        setCounter(old=>old+1)
        setArrayState(old=>[...old,[...c]])
    }
   
    function CheckWin(){
        if(currentAra[0] && currentAra[1] && currentAra[2] && currentAra[0]===currentAra[1] && currentAra[1]===currentAra[2]) return true
        if(currentAra[3] && currentAra[4] && currentAra[5] && currentAra[3]===currentAra[4] && currentAra[4]===currentAra[5]) return true
        if(currentAra[6] && currentAra[7] && currentAra[8] && currentAra[6]===currentAra[7] && currentAra[6]===currentAra[8]) return true
        if(currentAra[0] && currentAra[3] && currentAra[6] && currentAra[0]===currentAra[3] && currentAra[0]===currentAra[6]) return true
        if(currentAra[1] && currentAra[4] && currentAra[7] && currentAra[1]===currentAra[4] && currentAra[4]===currentAra[7]) return true
        if(currentAra[2] && currentAra[8] && currentAra[5] && currentAra[2]===currentAra[8] && currentAra[2]===currentAra[5]) return true
        if(currentAra[0] && currentAra[4] && currentAra[8] && currentAra[0]===currentAra[4] && currentAra[0]===currentAra[8]) return true
        if(currentAra[2] && currentAra[4] && currentAra[6] && currentAra[2]===currentAra[6] && currentAra[2]===currentAra[4]) return true
        else return false
    }
    useEffect(() => {
      CheckWin()?setDec(true):setDec(false)

    }, [Counter])
    
    function Undoo(){
        let cur=arrayState.slice();
        let indexUn = includeArr.slice();
        indexUn.pop();
        setIncludeArr(indexUn);
        cur.pop();
        setArrayState(cur);
        setCounter(old=>old-1)
        used=true;
    }
    function W(){
        if(Counter%2===0){
            return "O"
        }
        else {
            return "X"
        }
    }
  return (
    <>
        
        <div style={{
            display:'flex',
            flexDirection:'column',
            padding:'10px',
            width:'500px',
            borderRadius:'5px',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'coral',
            border:'2px solid black',
            marginLeft:'30%',
            marginTop:'10%',
            boxSizing:'border-box'
        }}>
        <p><b>{dec?"Victory":"Hello Tic-Tac-Toe"}</b></p>
        {dec?<p>winner is: {W()}</p>:''}
        <div>
        <Button disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={0}></Button>  
        <Button disable={dec}  setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={1}></Button>  
        <Button  disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={2}></Button>
        </div>
        <div>
        <Button disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={3}></Button>
        <Button disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={4}></Button>
        <Button disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={5}></Button>  
        </div>
        <div>
        <Button disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={6}></Button>  
        <Button disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={7}></Button> 
        <Button disable={dec} setIncludeArr={setIncludeArr} includeArr={includeArr} currentAra={currentAra}  updates={updates} index ={8}></Button>
        </div>
        <div style={{display:'flex',flexDirection:'row', marginTop:'30px',gap:'10px'}}>
        <button style={{borderRadius:'5px', border:'none',padding:'5px' ,cursor:'pointer'}} disabled={dec||used} onClick={Undoo}>Undo Step</button>
        <button style={{borderRadius:'5px', border:'none',padding:'5px', cursor:'pointer', backgroundColor:'red'}} onClick={()=>window.location.reload()}>Reset</button>
        </div>
       
        </div>
       
    </>
  )
}

export default Board