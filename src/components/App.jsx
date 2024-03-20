import '../scss/App.scss'; 
import {useState} from 'react'; 
import dataCountries from '../services/data.json';
import CountriesList from './CountriesList';
import FilterByCountry from './FilterByCountry';

function App() {

  const [valueInputCountry, setValueInputCountry] = useState('');

  const handleChangeInputCountry = (value) => {
    setValueInputCountry(value);
  };

  const filteredCountriesByCountry = dataCountries.filter((country) => {
    return country.name.official.toLowerCase().includes(valueInputCountry.toLowerCase()); //como me devuelve el pais si le estoy diciendo que me devuelva el nombre no? o es devuelveme el pais que cumpla con esta condicion??
  });

  return (
    <>
      <header>
        <h1>Country Info App</h1>
        <h4>Explore information about countries, capitals and flags. Add new countries and filter through the list!</h4>
      </header>

      <main>
        <div>
          <h4>Filters</h4>
          <FilterByCountry onChangeInputCountry={handleChangeInputCountry}/>
        </div>
        <CountriesList dataCountriesListM={filteredCountriesByCountry}/>
      </main>
    </>
  );
}

export default App;
