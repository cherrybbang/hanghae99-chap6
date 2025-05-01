import { User } from "../shared/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../shared/ui";

interface UserModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose }) => {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>사용자 정보</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img src={user.image} alt={user.username} className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="text-xl font-semibold text-center">{user.username}</h3>
          <p>
            <strong>이름:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>이메일:</strong> {user.email}
          </p>
          <p>
            <strong>전화번호:</strong> {user.phone}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;