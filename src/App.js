import React, { useState } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function Accordian() {
  const [expand, setExpand] = useState(0);

  const handleExpand = () => {(expand) ? setExpand(0) : setExpand(1)};

  let vari = '';

  if (expand) {vari = 'yes'} else {vari = ''};
  return(
    <div className='container'>
      <h1 className='heading'>FAQ</h1>
      <div className='faq'>
        <h2>Frequently Asked Questions</h2>
        <div className='question'>
          <h4>Are you a full-time employee?</h4>
          <p>{vari}</p>
          <button
            onClick={handleExpand}
            >Expand</button>
        </div>
        <div className='question'>
          <h4>Do you live in The Bahamas</h4>
          <p>{vari}</p>
          <button
            onClick={handleExpand}
            >Expand</button>
        </div>
        <div className='question'>
          <h4>Are you ready to move if needed?</h4>
          <p>{vari}</p>
          <button
            onClick={handleExpand}
            >Expand</button>
        </div>
      </div>
      
    </div>
  )
}

