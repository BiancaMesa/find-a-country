import PropTypes from 'prop-types';

function FilterByCountry({onChangeInputCountry}) {

    const handleInputCountry = (event) => {
        const valueInputCountry = event.target.value; //variable de estado??
        onChangeInputCountry(valueInputCountry); 
    };
 
  return (
    <div>
        <label htmlFor="country">By Country</label>
        <input type="text" placeholder="Spain..." id="country" onChange={handleInputCountry}/>
    </div>
  );
}

FilterByCountry.propTypes = {
    onChangeInputCountry: PropTypes.func
};

export default FilterByCountry;