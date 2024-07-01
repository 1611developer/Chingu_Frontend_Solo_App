import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import CreateEntry from './components/CreateEntry';
import EditEntry from './components/EditEntry';
import ListEntry from './components/ListEntry';

function App() {
  return (
    <>
    <div className="top-content">  
      <div className="slogan">
        <h1>DailyDash</h1>
          <h2>
            Keep track of your daily feelings.
          </h2>  
          <h3>
            Find key insights. Become the best version of you!
          </h3>
          <hr></hr>
      </div>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
           <Link to="/">Latest</Link>
          </li>
          |
          <li>
            <Link to="entry/create"> Create</Link>
          </li>
         |
          <li>
            <Link to="entry/create"> Create</Link>
          </li>
         |
          <li>
            <Link to="entry/create"> Create</Link>
          </li>
         |
          <li>
            <Link to="entry/create"> Create</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListEntry />} />
        <Route path="entry/create" element={<CreateEntry />} />
        <Route path="entry/:id/edit" element={<EditEntry />} />
      </Routes>
    </BrowserRouter>
   </div>
    </>
  )
}

export default App
