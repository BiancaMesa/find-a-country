import "../scss/components/CountriesList.scss";
import Country from './Country';
import PropTypes from 'prop-types'; 

function CountriesList({dataCountriesListM}) {
  return (
    <div className='countriesList'>
        {
            dataCountriesListM.map((country, index) => {
               return <Country dataCountriesListD={country} key={index}/>
            })
        }
    </div>
  );
}

CountriesList.propTypes = {
    dataCountriesListM: PropTypes.array.isRequired
};

export default CountriesList;