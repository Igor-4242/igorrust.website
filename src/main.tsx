import * as react from 'react'
import * as client from 'react-dom/client'
import './styles.css'
import * as app from './app.tsx'

client.createRoot(document.getElementById('root')!).render(
  <react.StrictMode>
    <app.App />
  </react.StrictMode>,
  // <app.App />,
)
