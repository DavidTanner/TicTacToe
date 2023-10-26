import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import RegularGame from "./pages/RegularGame";

const root = createRoot(document.getElementById('root'));

root.render(<RegularGame />, )
