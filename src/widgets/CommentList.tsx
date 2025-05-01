import { Comment } from "../shared/types";
import { Button } from "../shared/ui";

interface CommentListProps {
  comments: Comment[];
  onEdit: (comment: Comment) => void;
  onDelete: (commentId: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onEdit, onDelete }) => {
  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <div key={comment.id} className="flex justify-between items-center border-b pb-2">
          <div>
            <strong>{comment.user.username}:</strong> {comment.body}
          </div>
          <div className="flex gap-2">
            <Button onClick={() => onEdit(comment)}>수정</Button>
            <Button onClick={() => onDelete(comment.id)}>삭제</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;