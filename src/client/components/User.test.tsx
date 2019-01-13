import * as React from 'react';
import { User } from './User';
import { IUserDTO } from '../../shared/IUserDTO';
import { createShallow } from '@material-ui/core/test-utils';
import { Card, Typography, CardHeader } from '@material-ui/core';
import { ShallowWrapper } from 'enzyme';

describe('<User/>', () => {
  const user: IUserDTO = {
    userId: '123',
    userName: 'Gil Amran',
    imageUrl: '/public/gil.jpg',
  };
  const shallow = createShallow();
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<User user={user} />);
  });

  it('should display the user inside a Card component', () => {
    expect(wrapper.find(Card).length).toEqual(1);
  });

  it('should display the user name on the card title', () => {
    expect(wrapper.find(CardHeader).props().title).toEqual(`User: Gil Amran`);
  });

  it('should display 2 Typography component', () => {
    expect(wrapper.find(Typography).length).toEqual(2);
  });

  it('should display user id in the first Typography', () => {
    const userIdComp = wrapper.find(Typography).at(0);
    const content = userIdComp.dive().dive();
    expect(content.text()).toEqual('Id: 123');
  });

  it('should display user image in the 2nd Typography', () => {
    const userImageComp = wrapper.find(Typography).at(1);
    const content = userImageComp.dive().dive();
    expect(content.text()).toEqual('Image Url: /public/gil.jpg');
  });
});
