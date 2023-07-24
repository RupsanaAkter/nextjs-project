
import Navbar from '../components/Navbar'
import Baselayout from '../components/Baselayout'

import Slider from '../components/Slider'
import Mainbar from '../components/Mainbar'




export default function Home() {
  return (
    
    <main>
    
     <Navbar></Navbar>
     <Baselayout><Slider></Slider></Baselayout>
     <Mainbar></Mainbar>
    
    </main>
  )
}
