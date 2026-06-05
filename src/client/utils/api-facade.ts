import type { IUserDTO } from '@shared/IUserDTO';

export function loadUsersAPI() {
  return fetch('/api/users').then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load users: ${response.status}`);
    }
    return response.json() as Promise<IUserDTO[]>;
  });
}
