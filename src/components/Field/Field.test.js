import React from 'react';
import { mount } from 'enzyme';

import Field from './index';

let component;

beforeEach(() => {
    component = mount(<Field type="text" name="test"/>)
})

afterEach(() => {
    component.unmount();
})

it('has an label and input', () => {
    expect(component.find("label").length).toEqual(1);
    expect(component.find("input").length).toEqual(1);
})

describe('the input', () => {

    beforeEach(() => {
        expect(component.find('input').simulate('change', {
            target: { value: 'lorem ipsum'}
        }));
        component.update();
    })

    it('can be filled by user', () => {
        expect(component.find('input').prop('value')).toEqual('lorem ipsum');
    })
})