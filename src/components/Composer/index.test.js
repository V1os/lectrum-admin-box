import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// instrument
import Composer from './';

configure({ adapter: new Adapter() });

const props = {
    editorState: {},
};
const state = {
    editorState: {},
};

const mutateState = {
    editorState: {},
};

const result = mount(<Composer { ...props } />);

describe('Composer component', () => {
    test(`should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });
});
