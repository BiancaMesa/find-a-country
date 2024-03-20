import PropTypes from 'prop-types'; 

function FilterByContinent({onChangeSelectContinent}) {

    const handleSelectContinent = (event) => {
        const valueSelectContinent = event.target.value; //verify this is correct
        onChangeSelectContinent(valueSelectContinent); 
    };

    //me estaba dando error esto porque el value lo estaba poniendo todo en minusculas y con guiones, porqué?

  return (
    <div> 
        <label htmlFor="continent">By Continent</label>
        <select name="continent" id="continent" onChange={handleSelectContinent}>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
        </select>
    </div>
  );
}

FilterByContinent.propTypes = {
    onChangeSelectContinent: PropTypes.func
};

export default FilterByContinent;