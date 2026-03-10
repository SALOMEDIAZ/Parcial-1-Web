export const DigimonCard = ({imagen,nombre}) => {

    return (<>
<h1>{nombre}</h1>
<h2>{imagen}</h2>
<image src={imagen}/>
</>)
}