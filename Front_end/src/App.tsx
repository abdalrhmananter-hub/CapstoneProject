import { RouterProvider } from 'react-router-dom';
import { Router } from "../src/Router/Router"
import './App.css';

function App() {

  return (
    <>
      <RouterProvider router={Router}/>
      {/*
          RouterProvider is the component that makes routing available to the entire app
          It receives the Router configuration object and handles all routing logic
      */}
    </>
  )
}

export default App
