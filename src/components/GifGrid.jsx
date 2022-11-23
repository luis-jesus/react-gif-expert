
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GitItem } from "./GitItem";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );

    
    return ( 
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h1>Cargando...</h1>)
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GitItem
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>

        </>
    )
}
