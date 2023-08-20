import { Link } from "react-router-dom";

function Home() {
    return (
        <main className='home-main'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <h2>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h2>
            <Link to="/vans" >Find your van</Link>
        </main>
    )
}

export default Home