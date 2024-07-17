import "../scss/components/CountriesList.scss";
import Country from './Country';
import PropTypes from 'prop-types'; 

function CountriesList({countriesM}) {
  return (
    <div className='countriesList'>
        {
            countriesM.map((country, index) => {
               return <Country country={country} key={index}/>
            })
        }
    </div>
  );
}

CountriesList.propTypes = {
    countriesM: PropTypes.array.isRequired
};

export default CountriesList;