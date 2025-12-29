'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const FORM_ENDPOINT = 'https://formspree.io/f/mykynojr';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="mt-20 max-w-lg w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          required
          className="flex-1 px-8 py-5 bg-[#1a1f2e] border border-[#D4AF37]/40 rounded-lg focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-500 text-lg"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-12 py-5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] text-xl tracking-wider uppercase font-medium hover:bg-[#D4AF37] hover:text-[#0A0E1A] transition-all duration-700 shadow-lg disabled:opacity-70"
        >
          {status === 'loading' ? 'Invoking...' : 'Join the Waitlist'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-10 text-center text-[#BFAF7A] text-xl">
          Thank you — your place in the work is reserved.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-10 text-center text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
