import { useState } from "react";

export const AddCategory = ( {onNewCategory} ) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) =>{
        setInputValue( target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length <= 1 ) return;

        // setCategories( [...categories, inputValue]); Esto no sirve, hay que usar el callback
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar GIfs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
  )
}
