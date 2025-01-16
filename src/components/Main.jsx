import { useState } from "react";
import Languages from "../data/Languages";

const Main = () => {
  
  return(
    <main>
      <div className="container">
        <h1>Learn Web Development</h1>
        <div className="tabs">
          {Languages.map(item => (
            <button key={item.id}>
              {item.title}
              </button>

          ))}

        </div>
        <div className="content">
          <h2></h2>
          <p></p>
        </div>

      </div>

    </main>


  )
}

export default Main