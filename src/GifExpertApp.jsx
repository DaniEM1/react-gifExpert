import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)) return;
        
        // categories.push(newCategory);   Ya no usar push en react, ahora usar el operador spread => ...array
        // setCategories([...categories, 'Pokemon']);
        setCategories( cat => [newCategory, ...cat]);
        
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory = {(event)=> onAddCategory(event)}
        />
 
        {/* Listado de gifs */}        
        {categories.map( category =>
            (
                <GifGrid key={category} category={category}/>
            ))
        }
        
            
    </>
  )
}
