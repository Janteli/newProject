import HomePageOne from "./components/HomePageOne"
import HomePageThree from "./components/HomePageThree"
import HomePageTwo from "./components/HomePageTwo"
import NavBar from "./components/NavBar"


function App() {

  return (
    <>
    <NavBar/>
    <div className="px-10 pt-20">
      <HomePageOne/>
    </div>
    <div className="px-14">
    <HomePageTwo/>
    <HomePageThree/>
    </div>
    </>
  )
}

export default App
