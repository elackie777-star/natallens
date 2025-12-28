'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Temporary: replace with your Google Form link after creating one at forms.google.com
    const formUrl = 'https://forms.gle/REPLACE_WITH_YOUR_LINK';
    window.location.href = `${formUrl}?entry.123456789=${encodeURIComponent(email)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16 max-w-md w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          required
          className="flex-1 px-6 py-4 bg-[#1a1f2e] border border-[#D4AF37]/30 rounded-lg focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-10 py-4 bg-[#D4AF37] text-[#0A0E1A] font-medium rounded-lg hover:bg-[#c19a2e] transition disabled:opacity-70"
        >
          {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </div>
    </form>
  );
}
