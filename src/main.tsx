import './styles.css'
import * as app from './app'
import * as client from 'react-dom/client'
import * as react from 'react'
import * as state from './state'

client.createRoot(document.getElementById('root')!).render(
  <react.StrictMode>
    <state.StateComponent>
      <app.App />
    </state.StateComponent>
  </react.StrictMode>,
)
