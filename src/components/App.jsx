import '../scss/App.scss'; 
import '../scss/components/Header.scss'; 
import '../scss/components/Main.scss'; 
import '../scss/components/Filters.scss'; 
import '../scss/components/Footer.scss'; 
import {useState} from 'react'; 
import dataCountries from '../services/data.json';
import CountriesList from './CountriesList';
import FilterByCountry from './FilterByCountry';
import FilterByContinent from './FilterByContinent';
//import AddCountryForm from './AddCountryForm';

function App() {
  //VARIABLES DE ESTADO
  const [valueSearchCountry, setValueSearchCountry] = useState('');
  const [valueSearchContinent, setValueSearchContinent] = useState('');
  //const [countries, setCountries] = useStates(dataCountries); //queremos que se inicialice la página con los datos de dataCountries

  //ADD NEW COUNTRY
  // const handleName = (value) => {
  //   setSearchCountry(value); 
  // }

  //FILTRAR POR PAIS
  const handleChangeInputCountry = (value) => {
    setValueSearchCountry(value);
  };

  const filteredCountriesByCountry = dataCountries.filter((country) => {
    return country.name.official.toLowerCase().includes(valueSearchCountry.toLowerCase()); //como me devuelve el pais si le estoy diciendo que me devuelva el nombre no? o es devuelveme el pais que cumpla con esta condicion??
  });


  //FILTRAR POR CONTINENTE
  const handleChangeSearchContinent = (value) => {
    setValueSearchContinent(value);
  };

  const filteredCountriesByContinent = filteredCountriesByCountry.filter((country) => {
    return country.continents[0] === valueSearchContinent; 
  }); 

  //FILTRAR POR AMBOS
   //Encadenamos filtros si hubiesemos puesto los dos filtros en el mismo componente 
  // const filteredCountries = dataCountries
  //   .filter((country) => {
  //     return country.name.official.toLowerCase().includes(valueSearchCountry.toLowerCase()); 
  //   })
  //   .filter((country) => {
  //     return filteredCountries !== "All"
            // ? country.continents[0] === valueSearchContinent
            // : true; 
  //   }); 




  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Find a Country</h1>
        <h6 className='header__subtitle'>Explore information about countries, capitals and flags. Add new countries and filter through the list!</h6>
        {/* <AddCountryForm onChange={handleName}/> */}
      </header>

      <main className='main'>
        <div className='filters'>
          <h3 className='filters__title'>Filters</h3>
          <FilterByCountry onChangeInputCountry={handleChangeInputCountry}/>
          <FilterByContinent onChangeSelectContinent={handleChangeSearchContinent}/>
        </div>

        {valueSearchContinent==='' 
          ? <CountriesList countriesM={filteredCountriesByCountry}/>
          : <CountriesList countriesM={filteredCountriesByContinent}
        />}

      </main>

      <footer className='footer'>
      </footer>
    </>
  );
}

export default App;
