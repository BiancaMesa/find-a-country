import '../scss/App.scss'; 
import '../scss/components/Header.scss'; 
import '../scss/components/Main.scss'; 
import '../scss/components/Filters.scss'; 
import {useState} from 'react'; 
import dataCountries from '../services/data.json';
import CountriesList from './CountriesList';
import FilterByCountry from './FilterByCountry';
import FilterByContinent from './FilterByContinent';

function App() {

  const [valueSearchCountry, setValueSearchCountry] = useState('');
  const [valueSearchContinent, setValueSearchContinent] = useState('');

  const handleChangeInputCountry = (value) => {
    setValueSearchCountry(value);
  };

  const filteredCountriesByCountry = dataCountries.filter((country) => {
    return country.name.official.toLowerCase().includes(valueSearchCountry.toLowerCase()); //como me devuelve el pais si le estoy diciendo que me devuelva el nombre no? o es devuelveme el pais que cumpla con esta condicion??
  });

  const handleChangeSearchContinent = (value) => {
    setValueSearchContinent(value);
  };

  const filteredCountriesByContinent = dataCountries.filter((country) => {
    return country.continents.includes(valueSearchContinent); 
  }); 



  return (
    <>
      <header className='header'>
        <h1>Country Info App</h1>
        <h6>Explore information about countries, capitals and flags. Add new countries and filter through the list!</h6>
      </header>

      <main className='main'>
        <div className='filters'>
          <h3>Filters</h3>
          <FilterByCountry onChangeInputCountry={handleChangeInputCountry}/>
          <FilterByContinent onChangeSelectContinent={handleChangeSearchContinent}/>
        </div>

        {valueSearchContinent==='' 
          ? <CountriesList dataCountriesListM={filteredCountriesByCountry}/>
          : <CountriesList dataCountriesListM={filteredCountriesByContinent}
        />}

      </main>
    </>
  );
}

export default App;
