import { useState, useEffect } from 'react';
import './App.css';
import { DigimonCard } from './components/DigimonCard';

function App() {
const [data,setData]= useState([])
const [input,setInput] = useState("")
const [search,setSearch] = useState("")
const [error,setError] = useState()

console.log(data)

 useEffect(() => { 
	const fetchApi = async () => {
		try {
		const res =await fetch (`https://digi-api.com/api/v1/digimon?pageSize=10`)
		const digimons =await res.json();
		setData(digimons.content)
		} catch (error) {
			console.log(error)
		setError(error) 
		}
	}
	fetchApi();
},[]);
 

const handlesubmit = (e) => {
	  e.preventDefault();
	  setData([...data, input]);
}

const deleteDigimon = (index) => {
    const DigimonFiltered = digimon.filter((_, index) => index !== index);
	setData(DigimonFiltered);
  };

	return (
	<>
	<form onSubmit={(e)=>handlesubmit(e)}>
		<input type="text" 
		placeholder='Name'
		value={input} 
		onChange={(e)=>setInput(e.target.value)}
		
		/>
		<input type="text" 
		placeholder='imagen URl'
		/>
		 <button onClick={(e) => handlesubmit(e)}>Ingresar tarea</button>
	    
	</form>
	{data.map((d)=>(
		<DigimonCard key ={d.id}
		nombre= {d.name}
		imagen= {d.image}
		/>
		))}
		<button onClick={deleteDigimon}>Eliminar</button>
		{ error &&<p>"ocurrio un error:{error.message}"</p>}
	</>
	)
}

export default App;
