import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import "./style/global.css"
import { NewsDetail } from "./pages/NewsDetail"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/news/:id" element={<NewsDetail/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
