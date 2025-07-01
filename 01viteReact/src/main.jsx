
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1> This is My App ! </h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'Click to visit Google...'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  <App />
  // MyApp()
  // anotherElement
  // reactElement
)
