'use client';

import dynamic from 'next/dynamic';

const ChatMessages = dynamic(() => import('./chatMessages'), {
    ssr: true,
    loading: () => <p>Loading messages...</p>,
 });

export default function Wrapper() {
  return <ChatMessages />;
}
