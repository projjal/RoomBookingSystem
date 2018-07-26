import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import AdminEquipments from '../src/admin/equipments/equipments';

describe('Equipments Component', function () {

    it('renders equipments component', function () {

        const wrapper = shallow(<AdminEquipments/>);
        assert.equal(wrapper.getElement().type, 'div');
      });

});