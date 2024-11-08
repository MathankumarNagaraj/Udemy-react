
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Popular from "./components/Popular"
import Reccomend from "./components/Reccomend"
import Sale from "./components/Sale"
import Topic from "./components/Topic"



function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Reccomend></Reccomend>
            <Topic></Topic>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}
export default App
