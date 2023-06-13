import { useState } from 'react';
// import '../style/App.css'
import Mainvideo from './Mainvideo';
import Navbar from './Navbar';
import Homepage from './Homepage';


function App() {
  const [user, setUser] = useState(false);
  const [myvideos, setMyvideos] = useState(true);
  // const [sign, setSigni] = useState(true);

  return (
    <div className="App">
     
      <Navbar user={user} />
      {myvideos ? <Mainvideo /> : <Homepage />}


      {/* <SignIn sign={sign}/>
      { sign ? <SignIn/>:<Register/>} */}
      

      
      
    </div>
  );
}

export default App;
