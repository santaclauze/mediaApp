/**
 * Testing our link component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from '../Carousel';


describe('<Carousel />', () => {
    it('should render an <Carousel> tag', () => {
        const renderedComponent = shallow(<Carousel />);
        console.log(renderedComponent.debug())
        expect(renderedComponent.find('StyledComponent').length).toBe(1);
    });
    it('should have children if movies has elements', () => {
        const movie = {
            id: 'test',
            images: [{ url: 'test_url' }]
        }
        const renderedComponent = mount(<Carousel movies={[movie]} />);
        console.log(renderedComponent.debug())
        expect(renderedComponent.find('Movie').length).toBe(2);
    });
});