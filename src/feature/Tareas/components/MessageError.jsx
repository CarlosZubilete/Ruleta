import { Alert } from "reactstrap";

const MessageError = ({ children }) => {
  return (
    <Alert color="danger" className="py-1 px-2 mt-1 mb-0">
      {children}
    </Alert>
  );
};

export default MessageError;
