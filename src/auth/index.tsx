import { Auth } from "aws-amplify";

type SignInParameters = {
	username: string;
	password: string;
};

export async function signIn({ username, password }: SignInParameters) {
	try {
		const user = await Auth.signIn(username, password);
	} catch (error) {
		console.log("error signing in", error);
	}
	console.log("user");
}

export async function signOut() {
	try {
		await Auth.signOut();
	} catch (error) {
		console.log("error signing out: ", error);
	}
}
