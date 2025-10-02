import './styles.css'
import './circles_styles.css'
import * as app from './app'
import * as client from 'react-dom/client'
import * as react from 'react'

client.createRoot(document.getElementById('root')!).render(
  // <react.StrictMode>
  // {/* <state.StateComponent> */}
  <app.App />
  // {/* </state.StateComponent> */}
  // {/* </react.StrictMode>, */}
)
