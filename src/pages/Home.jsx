import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Headers from "../components/Headers"
import SpecialityMenu from "../components/SpecialityMenu"
import TopDoctors from "../components/TopDoctors"

 
const Home = () => {
  return (
    <div>
      <Headers />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home