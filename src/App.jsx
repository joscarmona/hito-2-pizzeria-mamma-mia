import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <div className="layout">
      {/* SOLO SE MOSTRARÁN LOS COMPONENTES NAVBAR, HOME Y FOOTER */}
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  )
}

export default App
