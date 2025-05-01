export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags?: string[];
  reactions?: {
    likes: number;
    dislikes: number;
  };
  author?: User;
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: {
    address: string;
    city: string;
    state: string;
  };
  company?: {
    name: string;
    title: string;
  };
  image: string;
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
  likes: number;
}