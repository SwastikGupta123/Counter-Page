import './App.css';
// import { useState } from 'react';
// import Welcome from "./Components/Welcome";
import Counter from './Components/Counter';
function App() {
  // const [text,setText] = useState("");

// const handleOnChanges = (event) => {
//   setText(event.target.value);
// }
  return (
    <>
    {/* <p>Enter your Name <input type="text" value={text} onChange={handleOnChanges}/>
    </p>
    <Welcome name= {text}/> */}
    <Counter/>
    </>
  );
}

export default App;
