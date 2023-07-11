
import './App.css'
import Calculator from './Components/Calculator/Calculator'
import Footer from './Components/Footer/Footer'
import Fundamental from './Components/Fundamentals/Fundamental'
import Hero from './Components/Hero/Hero'
import HorizontalScroll from './Components/HorizontalScroll/HorizontalScroll'
import Navbar from './Components/NavBar/Navbar'
import News from './Components/News/News'
import Technical from './Components/Technicals/Technical'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalScroll />
      <Fundamental />
      <Technical />
      <Calculator />
      <News />
      <Footer />
    </>
  )
}

export default App
