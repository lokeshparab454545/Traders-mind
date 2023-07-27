
import './App.css'
import Calculator from './Components/Calculator/Calculator'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import InstaTechnicals from './Components/InstaTechnicals/InstaTechnicals'
import Navbar from './Components/NavBar/Navbar'
import News from './Components/News/News'
import Technical from './Components/Technicals/Technical'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <InstaTechnicals />
      <Technical />
      <Calculator />
      <News />
      <Footer />
    </>
  )
}

export default App
