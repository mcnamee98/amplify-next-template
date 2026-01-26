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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    < Navigation />
      <main style={{ flex: 1 , overflowY: 'auto', paddingBottom: '10px'}}>
          {children}
      </main>
    </div>
  </Authenticator>
  );
}