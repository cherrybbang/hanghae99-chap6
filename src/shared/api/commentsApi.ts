export const fetchComments = async (postId: number) => {
  const response = await fetch(`/api/comments/post/${postId}`);
  return response.json();
};

export const addComment = async (newComment: { body: string; postId: number; userId: number }) => {
  const response = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });
  return response.json();
};

export const updateComment = async (commentId: number, updatedComment: { body: string }) => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedComment),
  });
  return response.json();
};

export const deleteComment = async (commentId: number) => {
  await fetch(`/api/comments/${commentId}`, { method: "DELETE" });
};