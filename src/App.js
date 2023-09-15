import React, { useState } from 'react';
import Accordian from './qanda';
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

export default function QandA() {
  const [qsandas, setQsandAs] = useState([
      {question: 'Are you a full-time employee?', 
      answer: 'Yes I am, I work at a shipping company', 
      id: 1},
      {question: 'Do you live in The Bahamas?', 
      answer: 'Yes I have lived here all my live and love it here.', 
      id: 2},
      {question: 'Are you prepared to move if needed?', 
      answer: 'Yes I am. While I enjoy The Bahamas, I am also ready to experience more of what life has to offer.', 
      id: 3},
  ])

      return(
          <div className="faq">
              <Accordian qsandas = {qsandas} />
          </div>
      )
}

// export default function Accordian() {
//   const [expand, setExpand] = useState(0);

//   const handleExpand = () => {(expand) ? setExpand(0) : setExpand(1)};

//   let vari = '';

//   if (expand) {vari = 'yes'} else {vari = ''};
//   return(
//     <div className='container'>
//       <h1 className='heading'>FAQ</h1>
//       <div className='faq'>
//         <h2>Frequently Asked Questions</h2>
//         <div className='question'>
//           <h4>Are you a full-time employee?</h4>
//           <p>{vari}</p>
//           <button
//             onClick={handleExpand}
//             >Expand</button>
//         </div>
//         <div className='question'>
//           <h4>Do you live in The Bahamas</h4>
//           <p>{vari}</p>
//           <button
//             onClick={handleExpand}
//             >Expand</button>
//         </div>
//         <div className='question'>
//           <h4>Are you ready to move if needed?</h4>
//           <p>{vari}</p>
//           <button
//             onClick={handleExpand}
//             >Expand</button>
//         </div>
//       </div>
      
//     </div>
//   )
// }

