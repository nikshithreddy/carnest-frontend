import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <StrictMode>
          <App />
        </StrictMode>
      </Router>
  </ThemeProvider>
)
