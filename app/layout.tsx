import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import {Amplify} from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Navigation from "./components/Navigation";
import "./app.css";

import AuthenticatorWrapper from "./AuthenticatorWrapper";
import "@aws-amplify/ui-react/styles.css";

const inter = Inter({ subsets: ["latin"] });
Amplify.configure(outputs);

export const metadata: Metadata = {
  title: "PN working version",
  description: "WAVEFRONT DEMO Work in Progress",
  icons: {
    icon: '/favicon.ico.png', // Path to your icon file in the /public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'auto' }}>
        <AuthenticatorWrapper>
          {children}
        </AuthenticatorWrapper>
      </body>
    </html>
  );
}
