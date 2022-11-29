import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory  onNewCategory={ () => {} }/>);

        const input = screen.getByRole( 'textbox' );
        fireEvent.input( input, { target: {value: 'Spider-man'} });

        expect( input.value ).toBe('Spider-man');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Spider-man';
        const onNewCategory = jest.fn();
        render( <AddCategory  onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} });
        fireEvent.submit( form );
        //screen.debug();

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenLastCalledWith( inputValue );

    });

    test('no debe de llamar el onNewCategory si el input está vació', () => {

        const onNewCategory = jest.fn();
        render( <AddCategory  onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
});