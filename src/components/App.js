import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [ans,setAns] =useState("");

    const getAnswer = () =>{
        const map = new Map();
        for(let i = 0; i <name1.length; i++){
            if(map.has(name1[i])){
                map.set(name1[i],map.get(name1[i])+1);
            }else map.set(name1[i],1);
        }
        let count=0;
        for(let i = 0; i <name2.length; i++){
            if(map.has(name2[i]) && map.get(name2[i])>0){
                count++;
                map.set(name2[i],map.get(name2[i])-1);
            }
        }
        let result = flames[(name1.length+name2.length-(count*2))%6];
        setAns(result);
    }
    render() {

        return(
            <div id="main">
               <input type="text" value={name1} onChange={(e)=>setName1(e.target.value)}/>
                <input type="text" value={name2} onChange={(e)=>setName2(e.target.value)}/>
                <button onClick={getAnswer}>Calculate Relationship Future</button>
                <button onClick={()=>setAns("")}>Clear</button>
                {ans && <div>{ans}</div>}
            </div>
        )
    }
}


export default App;
