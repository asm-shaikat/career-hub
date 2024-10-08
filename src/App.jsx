import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import './App.css'
import Header from './components/Header/Header';
function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
