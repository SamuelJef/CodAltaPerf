import Header from "../Components/Header/Header"
import "./PagesCss/Home.css"
import SecCards from "../Components/SecCards/SecCards"
import SecContact from "../Components/SecContact/SecContact"

function Home() {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <SecContact/>
            <SecCards/>
        </div>
    )
}

export default Home