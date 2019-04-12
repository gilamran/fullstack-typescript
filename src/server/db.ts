import { IUserDTO } from '../shared/IUserDTO';

export const users: IUserDTO[] = [
  {
    imageUrl: '/statics/gil.jpg',
    userId: '1',
    userName: 'Gil Amran',
  },
  {
    imageUrl: '/statics/noa.jpg',
    userId: '2',
    userName: 'Noa Tevel',
  },
  {
    imageUrl: '/statics/john.jpg',
    userId: '3',
    userName: 'John Doe',
  },
];

export function getUserById(userId: string): IUserDTO {
  return users.find(u => u.userId === userId);
}
