import React from 'react';
import Search from './';
import dom from 'react-test-renderer';

const renderTree = dom.create(<Search mode = { 'dark' } />).toJSON();

describe('Search component', () => {
    test('Search component should correspond', () => {
        expect(renderTree).toMatchSnapshot();
    });
});
