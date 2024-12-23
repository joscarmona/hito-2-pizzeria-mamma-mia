import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="layout">
      {/* SOLO SE MOSTRARÁN LOS COMPONENTES NAVBAR, HOME Y FOOTER */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
