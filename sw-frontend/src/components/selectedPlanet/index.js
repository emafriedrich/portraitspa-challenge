const SelectedPlanet = ({ planet, onDelete }) => {
  return <div className="selected-planet">
    <div className="selected-planet-details">
      <h3>{planet.name}</h3>
      <p>Gravity: {planet.gravity}</p>
      <p>Population: {planet.population}</p>
      <p>Climate: {planet.climate}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  </div>
};

export default SelectedPlanet;