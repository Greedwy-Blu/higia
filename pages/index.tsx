import type { NextPage } from 'next'
import Layout  from '../components/Container/container'
import Navbar from '../components/higiaLandingPageComponents/Navbar'
import  Higiacorpo from  '../components/higiaLandingPageComponents/higiacorpo';
import HigiaInformacao from '../components/higiaLandingPageComponents/higiainformacao';
import Footer from '../components/higiaLandingPageComponents/footer';
const Home: NextPage = () => {
  return (
    <div>
      
   <Navbar/>
  
    <Higiacorpo />
    <HigiaInformacao/>
    
    <br></br>
    
    <Footer/>
    </div>
  )
}

export default Home
