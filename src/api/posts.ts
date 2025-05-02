import { Post } from "../entities/post";
import { User } from "../entities/user";
import { Tag } from "../entities/tag";

export const fetchPosts = async (limit: number, skip: number): Promise<{ posts: Post[]; total: number }> => {
  console.log("Fetching posts with limit:", limit, "and skip:", skip);
  const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
  console.log("Response status:", response.status);
  if (!response.ok) {
    console.error("Response error:", await response.text());
    throw new Error("게시물 가져오기 실패");
  }
  return response.json();
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://dummyjson.com/users?limit=0&select=username,image");
  if (!response.ok) {
    throw new Error("사용자 데이터 가져오기 실패");
  }
  const data = await response.json();
  return data.users;
};

export const fetchTags = async (): Promise<Tag[]> => {
  const response = await fetch("https://dummyjson.com/posts/tags");
  return response.json();
};

export const searchPosts = async (query: string): Promise<{ posts: Post[]; total: number }> => {
  const response = await fetch(`https://dummyjson.com/posts/search?q=${query}`);
  return response.json();
};

export const fetchPostsByTag = async (tag: string): Promise<{ posts: Post[]; total: number }> => {
  const response = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
  return response.json();
};

export const addPost = async (newPost: Omit<Post, "id">): Promise<Post> => {
  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  return response.json();
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await fetch(`https://dummyjson.com/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const deletePost = async (id: number): Promise<void> => {
  await fetch(`https://dummyjson.com/posts/${id}`, { method: "DELETE" });
};