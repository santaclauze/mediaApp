import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header';


describe('<Header />', () => {
    it('should render an <Header> tag', () => {
        const renderedComponent = shallow(<Header />);
        console.log(renderedComponent.debug())
        expect(renderedComponent.find('Navbar').length).toBe(1);
        expect(renderedComponent.find('Button').length).toBe(1);
    });
    it('should update state when hover on button', () => {
        const renderedComponent = mount(<Header />);
        expect(renderedComponent.state('mouseOver')).toBe(false);
        renderedComponent.find('Button').simulate('mouseover');
        expect(renderedComponent.state('mouseOver')).toBe(true);
    });
    it('should update state when hover out of button', () => {
        const renderedComponent = mount(<Header />);
        renderedComponent.find('Button').simulate('mouseover');
        expect(renderedComponent.state('mouseOver')).toBe(true);
        renderedComponent.find('Button').simulate('mouseout');
        expect(renderedComponent.state('mouseOver')).toBe(false);
    });
    it('should handleCLick when clicking on button', () => {
        const onClick = jest.fn();
        const handleRefresh = jest.fn();
        const renderedComponent = mount(<Header onRefreshClick={onClick}  />);
        renderedComponent.find('Button').simulate('click');
        expect(onClick).toHaveBeenCalledWith();
    });
});