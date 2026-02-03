import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <h2>Login Page</h2>

      <label>Email</label><br />
      <input type="text" /><br /><br />

      <label>Password</label><br />
      <input type="password" /><br /><br />

      <button>Login</button>
    </div>
  );
}

export default App;

