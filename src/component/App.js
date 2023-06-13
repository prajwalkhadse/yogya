import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainvideo from './Mainvideo';
import Navbar from './Navbar';
import Homepage from './Homepage';
import SignIn from './SignIn-Register/Signin';
import Register from './SignIn-Register/Register';

function App() {
  const [user, setUser] = useState(false);

  const handleLogout = () => {
    // Perform necessary logout logic here
    // For example, clear user data, update user state, etc.
    setUser(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} logout={handleLogout} />

        <Routes>
          <Route path="/" element={user ? <Mainvideo /> : <Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
