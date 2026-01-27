"use client"

import { Authenticator } from "@aws-amplify/ui-react";
import Navigation from "@/app/components/Navigation";
export default function AuthenticatorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <Authenticator>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    < Navigation />
      <main>
          {children}
      </main>
    </div>
  </Authenticator>
  );
}