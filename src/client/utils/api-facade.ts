import { IUserDTO } from '../../shared/IUserDTO';

export function loadUserData(userId: string):Promise<IUserDTO> {
  return new Promise<IUserDTO>((resolve, reject) => {
    resolve({
      userId: "123",
      userName: 'Gil Amran',
      imageUrl: 'http://localhost/test.jpg'
    });
  });
}