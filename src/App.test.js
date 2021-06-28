import React from 'react'
import {configure,shallow,mount,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({adapter:new Adapter()})

const setup=()=>{

    let wrapper = shallow(<App/>);

    return {wrapper};
};

describe('<Info />',()=>{
    const {wrapper}=setup()

    it('renders the name of the application',()=>{
        expect(wrapper.find('h1').text()).toContain("Breaking Stats")
    })
});
