import { useState, useEffect } from "react";
import "./App.css";
import { DigimonCard } from "./components/DigimonCard";

function App() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [imageInput, setImageInput] = useState("");
    const [error, setError] = useState();


useEffect(() => {
    const fetchApi = async () => {
    try {
        const res = await fetch(
        `https://digi-api.com/api/v1/digimon?pageSize=10`,
        );
        const digimons = await res.json();
        setData(digimons.content);
    } catch (error) {
        console.log(error);
        setError(error);
    }
    };
    fetchApi();
}, []);

const handlesubmit = (e) => {
    e.preventDefault();
    const newDigimon = { name: input, image: imageInput };
    setData([...data, newDigimon]);
    setInput("");
    setImageInput("");
};

const deleteDigimon = (index) => {
    const DigimonFiltered = data.filter((_, i) => i !== index);
    setData(DigimonFiltered);
};

return (
    <>
    <form onSubmit={(e) => handlesubmit(e)}>
        <input
        type="text"
        placeholder="Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <input
        type="text"
        placeholder="imagen URl"
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
        />
        <button type="submit">Ingresar Digimon</button>
    </form>
    {data.map((d, index) => (
        <div key={d.id || index}>
        <DigimonCard nombre={d.name} imagen={d.image} />
        <button onClick={() => deleteDigimon(index)}>Eliminar</button>
        </div>
    ))}
    {error && <p>"ocurrio un error:{error.message}"</p>}
    </>
);
}

export default App;
