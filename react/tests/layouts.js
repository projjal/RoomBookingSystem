import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import AdminLayout from '../src/admin/layouts/layouts';

describe('Layouts Component', function () {

    it('renders layout component', function () {

        const wrapper = shallow(<AdminLayout/>);
        assert.equal(wrapper.getElement().type, 'div');
      });

});