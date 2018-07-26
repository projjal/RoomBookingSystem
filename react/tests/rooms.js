import AdminRooms from '../src/admin/rooms/rooms';
import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';

describe('Rooms Component', function () {

    //let wrapper;
    it('renders room component', function () {
        const wrapper = shallow(<AdminRooms/>);
        assert.equal(wrapper.getElement().type, 'div');
      });
    /* beforeEach(function () {

        wrapper = shallow(<AdminRooms/>);
      });
    it('renders room component', function() {
        assert.equal(wrapper.getElement().type, 'div');
    }); */
});