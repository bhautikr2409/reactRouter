import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./componants/Home/Home"
import Layout from "./Layout"
import About from "./componants/About/About"
import Contact from "./componants/Contact/Contact"
import User from "./componants/User/User"
import Github, { githubInfoLoader } from "./componants/Github/Github"

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path : "/",
  //     element : <Layout/>,
  //     children:[
  //       {
  //         path:"/",
  //         element:<Home/>
  //       },
  //       {
  //         path:"/about",
  //         element:<About/>
  //       },
  //       {
  //         path:"/contact",
  //         element:<Contact/>
  //       }
  //     ]

  //   }
  // ])



  const router = createBrowserRouter(
    createRoutesFromElements(
    
        <Route path="/" element={<Layout/>}> 
          <Route  path="" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/user/:id" element={<User/>}/>
          <Route
            loader={githubInfoLoader}
          path="github" element={<Github/>}/>
        </Route>
      
    )
  )

  




  return (
    <>  
      <RouterProvider router={router}/>
      {/* <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}> 
          <Route  path="" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/contact" element={<Contact/>}/>
        </Route>
    </Routes>
  </BrowserRouter> */}
   <Header/> 
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
