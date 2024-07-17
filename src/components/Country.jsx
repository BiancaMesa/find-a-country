import "../scss/components/Country.scss";
import PropTypes from 'prop-types'; 

function Country({country}) {
  return (
    <div className='country'>
      <span>{country.flag}</span>
      <h4 className='country__name'>{country.name.official}</h4>
      <div className="country__line"></div>
      <p>{country.capital[0]}</p> 
      <p>{country.continents[0]}</p>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired
};

export default Country;