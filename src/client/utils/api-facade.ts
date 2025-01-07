import axios from 'axios';
import type { IUserDTO } from '@shared/IUserDTO';

export function loadUsersAPI() {
  return axios.get(`/api/users`).then(res => res.data as IUserDTO[]);
}
