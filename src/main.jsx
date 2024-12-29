import {createRoot} from 'react-dom/client'
import Todo from './todo.jsx'
import App from './App.jsx'
import "../src/index.css"
import img1 from "../src/img/image1.avif"

const root=createRoot(document.getElementById('root'))

root.render(
  <div style={{
    backgroundImage:`url(${img1})`,
    backgroundSize:"cover",
    height:"100vh"
  }}>
    <App/>
    <Todo/>
  </div>
)
