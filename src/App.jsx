import { useState } from 'react';
import switchesImg from './assets/switches.png';
import './App.css';

function ToggleText({ show }) {
  return (
    <div className={show ? '' : 'hidden'}>
      {/* {show ? <p>Helo World! </p> : <p> </p>} */}
      {show && <p className="ToggleText">Hello World!</p>}
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div>
        <img src={switchesImg} className="switchesImg" alt="switches Img" />
      </div>
      <h2>Change the text status by clicking the button below</h2>
      <ToggleText show={show}/>

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Text
      </button>
    </>
  );
}

export default App;