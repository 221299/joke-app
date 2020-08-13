import React,{useState,useEffect} from 'react';
import './App.css';


function App() {
  const [joke,setJoke] = useState("Loading...")
  const [fname,setFN]=useState("john")
  const [sname,setSN]=useState("doe")
  const newjoke =(first,second)=>{
    fetch(`https://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).
    then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      setJoke(res2.value.joke)
    })
  }
  const getMode =()=>{

    const initialmode = localStorage.getItem("Mode")
    if(initialmode == null){
      if(window.matchMedia("(prefers-color-scheme:dark)").matches){
        return true
      }else{
        return false
      }
    }else{
      return JSON.parse(localStorage.getItem("Mode")) 
    }
    
  }
  const [dark,setMode]=useState(getMode())
  useEffect(()=>{
    localStorage.setItem("Mode",JSON.stringify(dark))
    newjoke(fname,sname)
  },[dark])
  return (
    <div className={dark ? "App dark-mode":"App"}>
      <div className="nav">
      <label className="switch">
  <input 
        type="checkbox" 
        checked={dark}
        onChange={()=>setMode(!dark)} />
  <span class="slider round"></span>
   </label>
    </div>
    <div className="content">
   <h1>{dark?"Dark Mode is on":"Light Mode is on"}</h1>
      <h1>JOKE APP</h1>
      First Name:<input type="text" value={fname} onChange={(e)=>setFN(e.target.value)}/><br></br>
      <br></br>Last Name:<input type="text" value={sname} onChange={(e)=>setSN(e.target.value)}/>
      <h1>This is Your Jokes</h1>
      <h4>{joke}</h4>
      <button onClick={()=>newjoke(fname,sname)}>Get Another Joke</button>
      </div>
    </div>
  );
}

export default App;
