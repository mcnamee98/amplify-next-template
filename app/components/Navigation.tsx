'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Navigation() {
  const { user, signOut } = useAuthenticator();
  const pathname = usePathname();

  return (
    <nav style={{
      position: 'fixed',
      top: '0', left: '0',  //Keep navigation bar anchored to top of the screen
      width: '100%',
      padding: '10px 15px',
      marginBottom: '10px',
      borderBottom: '2px solid #ddd',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            color: pathname === '/' ? '#007bff' : '#333',
            fontWeight: pathname === '/' ? 'bold' : 'normal',
            fontSize: '16px'
          }}
        >
          To Do List
        </Link>
        <Link
          href="/plot"
          style={{
            textDecoration: 'none',
            color: pathname === '/plot' ? '#007bff' : '#333',
            fontWeight: pathname === '/plot' ? 'bold' : 'normal',
            fontSize: '16px'
          }}
        >
          Data Visualization
        </Link>
        <Link
          href="/info"
          style={{
            textDecoration: 'none',
            color: pathname === '/info' ? '#007bff' : '#333',
            fontWeight: pathname === '/info' ? 'bold' : 'normal',
            fontSize: '16px'
          }}
        >
          Info
        </Link>
      </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#666', fontSize: '14px' }}>
                {user?.signInDetails?.loginId?.split('@')[0] || 'User'}
        </span>
        <button
            onClick={signOut}
            style={{
                    padding: '10px 15px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
            Sign out
        </button>
      </div>
    </nav>
  );
}