import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriends';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Data</h2>
        <Link className="link" to="login">Login</Link>
        <Link className="link" to="friends">Friends List</Link>
        <Link className="link" to="friends/add">Add Friends</Link>
        <Link className="link" to="logout">Logout</Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/friends" element={
          <PrivateRoute>
            <FriendsList />
          </PrivateRoute>
        }/>
        <Route path="/friends/add" element={
          <PrivateRoute>
            <AddFriend />
           </PrivateRoute>
        }/>
        <Route path="/logout" element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
