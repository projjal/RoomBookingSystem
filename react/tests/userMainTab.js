    import React from 'react';
    import {shallow} from 'enzyme';
    import {assert} from 'chai';
    import UserMainTab from '../src/users/mainTab';

    describe('User Main Tab Component', function () {

        it('renders user status component', function () {

            const wrapper = shallow(<UserMainTab/>);
            assert.equal(wrapper.getElement().type, 'div');
        });

    });