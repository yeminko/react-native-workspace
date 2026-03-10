import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function logiHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Please check your credentials or try again later.",
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />;
  }
  return <AuthContent isLogin onAuthenticate={logiHandler} />;
}

export default LoginScreen;
