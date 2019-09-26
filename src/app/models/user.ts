export interface User {
  id?: number;
  name: string;
  email: string;
  posts?: number;
}

export const defaultUser = (): User => ({
    id: 0,
    name: ' ',
    email: ' ',
    posts: 0,
})
