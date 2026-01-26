'use client';

import { useAuthenticator } from '@aws-amplify/ui-react';

export default function InfoPage() {
  const { user } = useAuthenticator();

  return (
    <div style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About This App</h1>
      <p>This is a simple todo application built with AWS Amplify.</p>
      <p><strong>User:</strong> {user?.signInDetails?.loginId}</p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Create todos</li>
        <li>Delete todos by clicking them</li>
        <li>Simple Line Plots </li>
        <li>Secure authentication with AWS Cognito</li>
      </ul>
      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderRadius: '4px'
      }}>
          🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </div>
  );
}