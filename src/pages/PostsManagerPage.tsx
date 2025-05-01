import PostTable from "../widgets/PostTable";
import CommentList from "../widgets/CommentList";
import UserModal from "../widgets/UserModal";
import { usePostsContext } from "../shared/context/PostsContext";
import { fetchComments as fetchCommentsApi } from "../shared/api/commentsApi";
import { deletePost as deletePostApi } from "../shared/api/postsApi";
import { deleteComment as deleteCommentApi } from "../shared/api/commentsApi";

const PostsManager = () => {
  const {
    posts,
    comments,
    selectedPost,
    setSelectedPost,
    selectedUser,
    setSelectedUser,
    setComments,
    setPosts,
    selectedComment,
    setSelectedComment,
  } = usePostsContext();

  const fetchComments = async (postId) => {
    try {
      const data = await fetchCommentsApi(postId);
      setComments((prev) => ({ ...prev, [postId]: data.comments }));
    } catch (error) {
      console.error("댓글 가져오기 오류:", error);
    }
  };

  const handleViewDetails = (post) => {
    setSelectedPost(post);
    if (!comments[post.id]) {
      fetchComments(post.id);
    }
  };

  const handleEditPost = (post) => {
    setSelectedPost(post);
    // 게시물 수정 다이얼로그 열기 로직 추가
  };

  const handleDeletePost = async (postId) => {
    try {
      await deletePostApi(postId); // API 호출
      setPosts((prev) => prev.filter((post) => post.id !== postId)); // 상태 업데이트
    } catch (error) {
      console.error("게시물 삭제 오류:", error);
    }
  };

  const handleEditComment = (comment) => {
    setSelectedComment(comment);
    // 댓글 수정 다이얼로그 열기 로직 추가
  };


  const handleDeleteComment = async (commentId) => {
    try {
      await deleteCommentApi(commentId); // API 호출
      setComments((prev) => ({
        ...prev,
        [selectedPost.id]: prev[selectedPost.id].filter((comment) => comment.id !== commentId),
      })); // 상태 업데이트
    } catch (error) {
      console.error("댓글 삭제 오류:", error);
    }
  };

  return (
    <div>
      <PostTable
        posts={posts}
        onViewDetails={handleViewDetails}
        onEdit={handleEditPost}
        onDelete={handleDeletePost}
      />
      <CommentList
        comments={comments[selectedPost?.id] || []}
        onEdit={handleEditComment}
        onDelete={handleDeleteComment}
      />
      <UserModal user={selectedUser} isOpen={!!selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};

export default PostsManager;