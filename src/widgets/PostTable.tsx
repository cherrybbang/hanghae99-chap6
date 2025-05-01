import { Post } from "../shared/types";
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../shared/ui";

interface PostTableProps {
  posts: Post[];
  onViewDetails: (post: Post) => void;
  onEdit: (post: Post) => void;
  onDelete: (postId: number) => void;
}

const PostTable: React.FC<PostTableProps> = ({ posts, onViewDetails, onEdit, onDelete }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>작성자</TableHead>
          <TableHead>작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.author?.username}</TableCell>
            <TableCell>
              <Button onClick={() => onViewDetails(post)}>보기</Button>
              <Button onClick={() => onEdit(post)}>수정</Button>
              <Button onClick={() => onDelete(post.id)}>삭제</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PostTable;