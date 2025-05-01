import { createContext, useContext, useState } from "react";
import { Post, Comment, User } from "../types";

interface PostsContextProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  comments: Record<number, Comment[]>;
  setComments: React.Dispatch<React.SetStateAction<Record<number, Comment[]>>>;
  selectedPost: Post | null;
  setSelectedPost: React.Dispatch<React.SetStateAction<Post | null>>;
  selectedUser: User | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Record<number, Comment[]>>({});
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <PostsContext.Provider
      value={{ posts, setPosts, comments, setComments, selectedPost, setSelectedPost, selectedUser, setSelectedUser }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePostsContext must be used within a PostsProvider");
  }
  return context;
};