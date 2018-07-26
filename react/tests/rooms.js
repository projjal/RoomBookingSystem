import AdminRooms from '../src/admin/rooms/rooms';
import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';

describe('Rooms Component', function () {

    let wrapper;
    beforeEach(function () {
        wrapper = shallow(<AdminRooms/>);
      });
    it('renders room component', function() {
        assert.equal(wrapper.getElement().type, 'div');
    });
});