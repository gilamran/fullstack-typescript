import { IUserDTO } from '../shared/IUserDTO';

export const users: IUserDTO[] = [
  {
    imageUrl: '/public/gil.jpg',
    userId: '1',
    userName: 'Gil Amran',
  },
  {
    imageUrl: '/public/noa.jpg',
    userId: '2',
    userName: 'Noa Tevel',
  },
  {
    imageUrl: '/public/john.jpg',
    userId: '3',
    userName: 'John Doe',
  },
];

export function getUserById(userId: string): IUserDTO {
  return users.find(u => u.userId === userId);
}
