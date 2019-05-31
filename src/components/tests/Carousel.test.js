import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from '../Carousel';


describe('<Carousel />', () => {
    it('should render an <Carousel> tag', () => {
        const renderedComponent = shallow(<Carousel />);
        expect(renderedComponent.find('StyledComponent').length).toBe(1);
    });
    it('should have children if movies has elements', () => {
        const movie = {
            id: 'test',
            images: [{ url: 'test_url' }]
        }
        const renderedComponent = mount(<Carousel movies={[movie]} />);
        expect(renderedComponent.find('Movie').length).toBe(1);
    });
});