import { useState } from "react";
import Languages from "../data/Languages";
import Buttons from "./Buttons";
import Content from "./Content";

const Main = () => {

const [ selected, setSelected] = useState(null);

const showedContent = selected ? Languages.find(item => item.id === selected) : null;
  
  return(
    <main>
      <div className="container">
        <h1>Learn Web Development</h1>
        <Buttons languages={Languages} selected= {selected} onSelect= {setSelected}/>
        <Content content= {showedContent}/>

      </div>

    </main>


  )
}

export default Main