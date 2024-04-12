//App.jsx is connected to main.jsx (in src NOT components) and renders the main component.  main.jsx is connected to index.html, which is our entry point.  This is how we render our components to the DOM.

import Main from './components/main.jsx'

function App() {
  return (
    <>
    <Main/>
    </>
  )
}

export default App
