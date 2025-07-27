'use client';
import React, { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('hello');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>{text}</h1>
      <button
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setText(text === 'hello' ? 'welcome' : 'hello')}
      >
        Change Text
      </button>
    </div>
  );
}