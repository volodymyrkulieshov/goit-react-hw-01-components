import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);
