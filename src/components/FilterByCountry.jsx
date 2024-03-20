import PropTypes from 'prop-types';

function FilterByCountry({onChangeInputCountry}) {

    const handleInputCountry = (event) => {
        const valueInputCountry = event.target.value; //variable auxiliar
        onChangeInputCountry(valueInputCountry); 
    };
 
  return (
    <div className='filters__country'>
        <label htmlFor="country">By Country</label>
        <input className='filters__country--input' type="text" id="country" placeholder="Spain..." onChange={handleInputCountry}/>
    </div>
  );
}

FilterByCountry.propTypes = {
    onChangeInputCountry: PropTypes.func
};

export default FilterByCountry;