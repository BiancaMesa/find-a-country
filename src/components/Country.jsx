import "../scss/components/Country.scss";
import PropTypes from 'prop-types'; 

function Country({countriesD}) {
  return (
    <div className='country'>
      <span>{countriesD.flag}</span>
      <h4>{countriesD.name.official}</h4>
      <p>{countriesD.capital[0]}</p> 
      <p>{countriesD.continents[0]}</p>
    </div>
  );
}

Country.propTypes = {
  countriesD: PropTypes.object.isRequired
};

export default Country;