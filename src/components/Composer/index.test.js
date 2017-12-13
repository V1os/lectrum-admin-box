import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// instrument
import Composer from './';

configure({ adapter: new Adapter() });

const options = {
    firstName: 'Vitaliy',
};
const props = {
    createPost: jest.fn(),
    avatar:     'https://lab.lectrum.io/react/api/image/hk0p2r2vfp/vosadchiy.jpg',
};
const message = 'Hello Lectrum!';
const state = {
    comment:     '',
    styleButton: 'buttonReadOnly',
    selected:    false,
    borderColor: '#fff',
};

const mutateState = {
    comment:     message,
    styleButton: 'buttonReadOnly',
    selected:    false,
    borderColor: '#fff',
};

const result = mount(<Composer { ...props } />, {
    context: options,
});

describe('Composer component', () => {
    test(`should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test(`should have 1 'form' element`, () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test(`should have 1 'input' element`, () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test(`should have 1 'textarea' element`, () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test(`should have valid initial state`, () => {
        expect(result.state()).toEqual(state);
    });

    test(`textarea value should be empty initialy`, () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test(`shoul response to state change property`, () => {
        result.setState(() => ({
            comment: message,
        }));
        expect(result.state()).toEqual(mutateState);
        expect(result.find('textarea').text()).toBe(message);

        result.setState(() => ({
            comment: '',
        }));

        expect(result.state()).toEqual(state);
        expect(result.find('textarea').text()).toBe('');
    });

    test(`component state and textarea value should reflect accoording changes if any text input provided`, () => {
        result.find('textarea').simulate('change', {
            target: {
                value: message,
            },
        });
        expect(result.find('textarea').text()).toBe(message);
        expect(result.state().comment).toEqual(mutateState.comment);
    });

    test(`component state and textarea value should reflect according changes if the form is submitted`, () => {
        result.find('form').simulate('submit');
        expect(result.state().comment).toEqual(state.comment);
    });

    test(`createPost method passed as a prop should be invoked once after the form is submitted`, () => {
        expect(result.props().createPost.mock.calls).toHaveLength(1);
    });
});
