import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Wcu from './components/Wcu'
import Pricing from './components/Pricing'
import BodyBuiler from './components/BodyBuiler'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Wcu/>
      <Pricing/>
      <BodyBuiler/>
      <FeedbackForm/>
    </>
  )
}

export default App
