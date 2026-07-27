import { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/Auth/AuthProvider";
import Loading from "../../components/ui/Loading/Loading";
import UpdateForm from "./UpdateForm";

function Update() {
  const { user, setUser, signinUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <Loading />;
  }

  return (
    <UpdateForm
      key={user.uid}
      user={user}
      setUser={setUser}
      signinUser={signinUser}
      updateUser={updateUser}
      navigate={navigate}
    />
  );
}

export default Update;
