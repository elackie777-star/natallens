'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdsmOpq4ZxXzHVkbx6W-tJhNJoWslhvcoVAHMT9iHlC0StvXA/viewform';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Append the email to the Google Form entry field
      // The entry ID for the email field is usually in the form URL or source — replace if needed
      const entryId = 'entry.123456789'; // placeholder — we'll refine if needed
      const fullUrl = `${GOOGLE_FORM_URL}?${entryId}=${encodeURIComponent(email)}`;
      window.location.href = fullUrl;

      // For UX, show success message (user will be redirected to Google Form)
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
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
            Thank you — your place in the work is reserved.
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
