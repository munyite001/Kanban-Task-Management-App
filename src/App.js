import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import Draggable from 'react-draggable';

export default function App() {
  const [board, setBoard] = useState([])

  return (
    <div>
      <Header />
    </div>
  )
  
}