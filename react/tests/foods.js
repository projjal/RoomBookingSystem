import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import AdminFoods from '../src/admin/food/foods';

describe('Foods Component', function () {

    it('renders food component', function () {

        const wrapper = shallow(<AdminFoods/>);
        assert.equal(wrapper.getElement().type, 'div');
      });

});