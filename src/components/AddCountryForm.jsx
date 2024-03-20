

function AddCountryForm({onChangeName, onChangeCapital, onChangeFlag, onChangeContinent}) {

  return (
    <form action="">
        <h3>Add a new country</h3>
        <input type="text" placeholder="Nombre del país" onChange={(ev) => onChangeName}/>
        <input type="text" placeholder="Capital"onChange={(ev) => onChangeCapital}/>
        <input type="text" placeholder="Bandera" onChange={(ev) => onChangeFlag}/>
        <input type="text" placeholder="Continente"onChange={(ev) => onChangeContinent}/>
        <input type="submit" />
    </form>
  );
}

export default AddCountryForm;