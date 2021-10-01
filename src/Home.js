import { useState } from 'react'

const Home = () => {
    //let name = 'mario';
    const [age, setAge] = useState(24);

    const handleClick = () => {
        setAge(age + 1);
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{age}</p>
            <button onClick={handleClick}>Click Me!</button>

        </div>
     );
}
 
export default Home;