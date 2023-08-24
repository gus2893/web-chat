import InputBox from "@/components/InputBox/InputBox";
import SignInBox from "@/components/SignInBox/SignInBox";

function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex border-solid border-2 border-sky-500">
				<SignInBox />
			</div>
		</main>
	);
}

export default Home;
