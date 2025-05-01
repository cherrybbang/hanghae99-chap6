export const fetchPosts = async (limit: number, skip: number) => {
  const response = await fetch(`/api/posts?limit=${limit}&skip=${skip}`);
  return response.json();
};

export const fetchUsers = async () => {
  const response = await fetch("/api/users?limit=0&select=username,image");
  return response.json();
};

export const fetchTags = async () => {
  const response = await fetch("/api/posts/tags");
  return response.json();
};

export const addPost = async (newPost: { title: string; body: string; userId: number }) => {
  const response = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  return response.json();
};

export const updatePost = async (postId: number, updatedPost: any) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  });
  return response.json();
};

export const deletePost = async (postId: number) => {
  await fetch(`/api/posts/${postId}`, { method: "DELETE" });
};