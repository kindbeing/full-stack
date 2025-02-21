import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState("")

    function fetchData() {
        console.log("Fetching data")
        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch((err) => console.error(err))
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={fetchData}>
                    Data is as follows: {data ? data : "No data"}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite a nd React logos to learn more
            </p>
        </>
    )
}

export default App
