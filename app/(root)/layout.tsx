import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
	title: "Yoom",
	description: "Video Calling App",
	icons: {
		icon: "/icons/logo.svg",
	},
}

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<StreamVideoProvider>{children}</StreamVideoProvider>
		</main>
	);
};
export default RootLayout;
