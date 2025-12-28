'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdsmOpq4ZxXzHVkbx6W-tJhNJoWslhvcoVAHMT9iHlC0StvXA/viewform?usp=header';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Open the Google Form in a new tab with email pre-filled if possible
    const fullUrl = `${FORM_URL}&email.address=${encodeURIComponent(email)}`;
    window.open(fullUrl, '_blank');

    setStatus('success');
    setEmail('');
  };

  return (
    <div className="mt-16 max-w-md w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
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

        {status === 'success' && (
          <p className="text-center text-green-400">
            Thank you — your place in the work is reserved. The form has opened in a new tab.
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
