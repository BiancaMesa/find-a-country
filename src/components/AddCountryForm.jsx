import PropTypes from 'prop-types';

function AddCountryForm ({onChangeName, onChangeCapital, onChangeFlag,  onChangeContinent, addCountry}) {

  const onSubmit = () => {
    addCountry();
  }; 


  return (
    <form action="">
        <h3 className='header__addNewCountry--title'>Add a new country</h3>
        <input type="text" placeholder="Country's name" onChange={(ev) => onChangeName(ev.target.value)}/>
        <input type="text" placeholder="Capital"onChange={(ev) => onChangeCapital(ev.target.value)}/>
        <input type="text" placeholder="Flag" onChange={(ev) => onChangeFlag(ev.target.value)}/>
        <input type="text" placeholder="Continent"onChange={(ev) => onChangeContinent(ev.target.value)}/>
        <button className='header__addNewCountry--button' type="submit" onClick={onSubmit}>Add Country</button>
    </form>
  );
}

AddCountryForm.propTypes = {
  onChangeName: PropTypes.func,
  onChangeCapital: PropTypes.func,
  onChangeFlag: PropTypes.func,
  onChangeContinent: PropTypes.func, 
  addCountry: PropTypes.func
};

export default AddCountryForm;