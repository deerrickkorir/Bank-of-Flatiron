import React from "react";
import { createRoot } from 'react-dom/client';
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from './components/App';

// Create root and render your root component
createRoot(document.getElementById('root')).render(<App />);
