import "./App.css";
import Autosuggest from "react-autosuggest";
import { useState } from "react";
import SelectedPlanet from "./components/selectedPlanet";

function App() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const inputProps = {
    placeholder: "Type a planet",
    value,
    onChange: (event, { newValue }) => {
      setValue(newValue);
    },
  };

  const getSuggestions = async (value) => {
    const exceptIds = selectedPlanets.map(selectedPlanet => {
      return `exceptIds[]=${selectedPlanet.id}`
    });
    const response = await fetch(
      `http://localhost:5000/planets/search?term=${value}&${exceptIds.join('&')}`
    );
    return response.json();
  };

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const getSuggestionValue = (suggestion) => suggestion.name;

  const onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value).then((results) => {
      setSuggestions(results);
    });
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion: planet }) => {
    setSelectedPlanets(selectedPlanets.concat([planet]));
    setValue('');
  };

  return (
    <div className="container">
      <h1>PortraitSpa challenge</h1>
      <Autosuggest
        inputProps={inputProps}
        suggestions={suggestions}
        renderSuggestion={renderSuggestion}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={onSuggestionSelected}
      ></Autosuggest>
      <div className="selected-planets">
        {selectedPlanets.map((selectedPlanet) => (
          <SelectedPlanet
            key={selectedPlanet.id}
            onDelete={() => {
              setSelectedPlanets(selectedPlanets.filter(planet => planet.id !== selectedPlanet.id))
            }}
            planet={selectedPlanet}
          ></SelectedPlanet>
        ))}
      </div>
    </div>
  );
}

export default App;
