import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'Spider-Man' ]);
    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //console.log(categories);
    }
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                onNewCategory={ onAddCategory}
              //setCategories={setCategories} 
            />
            
            {
              categories.map( category => (
                <GifGrid 
                  key={ category }
                  category={ category }
                />
                )
              )
            }
        </>
    )
}