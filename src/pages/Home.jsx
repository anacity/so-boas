import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import { NewsGrid } from "../components/NewsGrid/NewsGrid";
import { Sidebar } from "../components/Sidebar/Sidebar";

export function Home() {
  return (
    <div className="app">
      <Header/>
      <div className="main-content">
        <Sidebar/>
        <NewsGrid/>
      </div>
      <Footer/>
    </div>
  )
}