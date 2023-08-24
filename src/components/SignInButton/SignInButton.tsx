import { User } from "@/API";

type SignInButtonProps = {
	user: User;
};

const SignInButton = ({ user }: SignInButtonProps) => {
	return <button>Sign in as {user.name}</button>;
};

export default SignInButton;
