import { Comment } from "../entities/comment";

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const response = await fetch(`/api/comments/post/${postId}`);
  const data = await response.json();
  return data.comments;
};

export const addComment = async (newComment: Omit<Comment, "id">): Promise<Comment> => {
  const response = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });
  return response.json();
};

export const updateComment = async (comment: Comment): Promise<Comment> => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body: comment.body }),
  });
  return response.json();
};

export const deleteComment = async (id: number): Promise<void> => {
  await fetch(`/api/comments/${id}`, { method: "DELETE" });
};

export const likeComment = async (id: number, likes: number): Promise<Comment> => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes }),
  });
  return response.json();
};