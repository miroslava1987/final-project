import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Button } from '.';

describe('Button is rendered correctly', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('all props are working correctly', () => {
        const onClick = jest.fn();

        act(() => {
            render(<Button text='someText' color='red' width='10rem' onClick={onClick} />, container);
        });

        const button = container.querySelector('button');

        expect(button.textContent).toEqual('someText');
        expect(button.getAttribute('color')).toEqual('red');
        expect(button.getAttribute('width')).toEqual('10rem');


        act(() => {
            for (let i = 0; i < 5; i++) {
                button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }
        });

        expect(onClick).toHaveBeenCalledTimes(5);
    });
});
