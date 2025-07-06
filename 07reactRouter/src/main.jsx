import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Inner from "./components/Inner.jsx";
import Inner1 from "./components/Inner1.jsx";
import Inner2 from "./components/Inner2.jsx";
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element : <Home />
//       },
//       {
//         path: "About",
//         element : <About />
//       },
//       {
//         path: "Contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='home' element={<Home />}>
        <Route path='inner-home' element={<Inner />} />
        <Route path='inner-home1' element={<Inner1 />} />
        <Route path='inner-home2' element={<Inner2 />} />
      </Route>
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
