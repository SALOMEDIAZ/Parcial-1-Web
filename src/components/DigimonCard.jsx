export const DigimonCard = ({ imagen, nombre }) => {
  return (
    <>
      <h1>{nombre}</h1>
      <img src={imagen} alt={nombre} />
    </>
  );
};
