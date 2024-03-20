import "../scss/components/Country.scss";
import PropTypes from 'prop-types'; 

function Country({countriesD}) {
  return (
    <div className='country'>
      <span>{countriesD.flag}</span>
      <h4 className='country__name'>{countriesD.name.official}</h4>
      <div className="country__line"></div>
      <p>{countriesD.capital[0]}</p> 
      <p>{countriesD.continents[0]}</p>
    </div>
  );
}

Country.propTypes = {
  countriesD: PropTypes.object.isRequired
};

export default Country;