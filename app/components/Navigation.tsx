'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Navigation() {
  const { user, signOut } = useAuthenticator();
  const pathname = usePathname();

  return (
    <nav style={{
      width: '100%',
      padding: '15px 20px',
      marginBottom: '30px',
      borderBottom: '2px solid #ddd',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
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
          Todos
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
                    padding: '8px 16px',
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