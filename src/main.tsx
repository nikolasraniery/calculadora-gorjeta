import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content  } from './components/Content/Content'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <div className='main'>
      <Content />
    </div>
  </React.StrictMode>
)
