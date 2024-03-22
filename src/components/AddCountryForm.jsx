import PropTypes from 'prop-types';

function AddCountryForm (
  {onChangeName, 
   onChangeCapital, 
   onChangeFlag, 
   onChangeContinent,
   onSubmit
  }) {

  return (
    <form action="">
        <h3>Add a new country</h3>
        <input type="text" placeholder="Nombre del país" onChange={(ev) => onChangeName(ev.target.value)}/>
        <input type="text" placeholder="Capital"onChange={(ev) => onChangeCapital(ev.target.value)}/>
        <input type="text" placeholder="Bandera" onChange={(ev) => onChangeFlag(ev.target.value)}/>
        <input type="text" placeholder="Continente"onChange={(ev) => onChangeContinent(ev.target.value)}/>
        <input type="submit" onClick={onSubmit}/>
    </form>
  );
}

AddCountryForm.propTypes = {
  onChangeName: PropTypes.func,
  onChangeCapital: PropTypes.func,
  onChangeFlag: PropTypes.func,
  onChangeContinent: PropTypes.func, 
  onSubmit: PropTypes.func
};

export default AddCountryForm;