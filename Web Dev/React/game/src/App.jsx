import { useRef, useState } from 'react'
import './App.scss'
import cross from './assets/crossB.png'
import circle from './assets/circleB.png'

let data = ["","","","","","","","",""];

function App() {

  let [count, setcount] = useState(0);
  const [lock, setlock] = useState(false);
  let [cpucount, setcpucount] = useState(0);
  let [usercount, setusercount] = useState(0);
  let [tiecount, settiecount] = useState(0);

  let item1 = useRef(null);
  let item2 = useRef(null);
  let item3 = useRef(null);
  let item4 = useRef(null);
  let item5 = useRef(null);
  let item6 = useRef(null);
  let item7 = useRef(null);
  let item8 = useRef(null);
  let item9 = useRef(null);

  let item_array = [item1, item2,item3, item4, item5, item6, item7, item8, item9]

  const toggle = (e , num) => {
    if(data[num] != ""){
      return 0;
    }
    if(lock)
      return 0;
    if(count%2 === 0){
      e.target.innerHTML = `<img src="${cross}">`
      data[num] = 'x'
      setcount(++count)
    }
    else{
      e.target.innerHTML = `<img src="${circle}">`
      data[num] = 'o'
      setcount(++count)
    }
    checkwin()
  }

  const checkwin= () =>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=""){
      won(data[2])
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=""){
      won(data[5])
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=""){
      won(data[8])
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=""){
      won(data[6])
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=""){
      won(data[7])
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=""){
      won(data[8])
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=""){
      won(data[8])
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=""){
      won(data[6])
    }
  }

  const won= (winner) => { 
    setlock(true);
    if(winner =='x' ){
      setusercount(++usercount)
    }
    else{
      setcpucount(++cpucount)
    }
  }

  const reset= () => {
    setlock(false);
    data = ["","","","","","","","",""];
    item_array.map((e)=>{
      e.current.innerHTML=""
    })
  }
  return (
    <>
      <div className='main-container'>
        <div className='mob-view'>
          <div className='header'>
            <div className="logo">
              <div><img src="\src\assets\cross.png" alt="" /></div>
              <div><img src="\src\assets\circle.png" alt="" /></div>
            </div>
            <div className="pick">
              <div className='turn'>TURN</div>
            </div>
            <div className="refresh">
              <div>
                <button id='refr' onClick={()=>{reset()}}><img src="\src\assets\refresh.png" alt="" /></button>
              </div>
            </div>
          </div>
          <div className='game-area'>
            <div className="item" ref={item1} onClick={(e)=>toggle(e,0)}></div>
            <div className="item" ref={item2} onClick={(e)=>toggle(e,1)}></div>
            <div className="item" ref={item3} onClick={(e)=>toggle(e,2)}></div>
            <div className="item" ref={item4} onClick={(e)=>toggle(e,3)}></div>
            <div className="item" ref={item5} onClick={(e)=>toggle(e,4)}></div>
            <div className="item" ref={item6} onClick={(e)=>toggle(e,5)}></div>
            <div className="item" ref={item7} onClick={(e)=>toggle(e,6)}></div>
            <div className="item" ref={item8} onClick={(e)=>toggle(e,7)}></div>
            <div className="item" ref={item9} onClick={(e)=>toggle(e,8)}></div>
          </div>
          <div className="footer">
            <div className="you foot">(YOU)<br />{usercount}</div>
            <div className="tie foot">TIES<br />{tiecount}</div>
            <div className="cpu foot">(CPU)<br />{cpucount}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App