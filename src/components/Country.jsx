import "../scss/components/Country.scss";
import PropTypes from 'prop-types'; 

function Country({dataCountriesListD}) {
  return (
    <div className='country'>
      {/* <img src={dataCountriesListD.flag} alt={dataCountriesListD.name.common} /> */}
      <p>{dataCountriesListD.flag}</p>
      <h4>{dataCountriesListD.name.official}</h4>
      <h5>{dataCountriesListD.capital}</h5>
      <h5>{dataCountriesListD.continents}</h5>
    </div>
  );
}

Country.propTypes = {
  dataCountriesListD: PropTypes.object.isRequired
};

export default Country;