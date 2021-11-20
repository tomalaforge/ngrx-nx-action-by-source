import { User } from '@demo/user/user-state';

export interface Product {
  id: string;
  name: string;
  userId: string;
}

export interface ProductView {
  id: string;
  name: string;
  user?: User;
}
