import { getGifs } from "../../src/helper/getGifs";

describe('Pruebas en getGif()', () => {
    test('Debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('Spider-man');
        //console.log(gifs);

        expect( gifs.length ).toBeGreaterThanOrEqual( 0 );
        expect( gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    });
});