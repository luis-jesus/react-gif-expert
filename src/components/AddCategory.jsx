import { useState } from "react";
//import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputchange = ({target}) => {
        setinputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        console.log(inputValue);
        //setCategories(categories => [ inputValue, ...categories ]);
        setinputValue('');
        onNewCategory( inputValue.trim())
    };

//<form onSubmit={(event) => onSubmit(event)}> poner submit con callback, solo aplica con un parametro
  return (
    <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gif"
          value={inputValue}
          onChange={onInputchange}
        />
    </form>
  );
}
