import { Navigate } from "react-router-dom";

const Protected = ({ user, children }: {user: any; children: any}) => {
 if (!user) {
 return <Navigate to="/" replace />;
 }
 return children;
};
export default Protected;