// TreeOfLifeOverlay.tsx
export function TreeOfLifeOverlay() {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none">
      <svg viewBox="0 0 1000 1000" className="w-full h-full">
        {/* Simplified golden Tree glyph */}
        <circle cx="500" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="8"/>
        <circle cx="300" cy="300" r="50" fill="none" stroke="#D4AF37" strokeWidth="6"/>
        <circle cx="700" cy="300" r="50" fill="none" stroke="#D4AF37" strokeWidth="6"/>
        {/* Add more paths for full Tree later */}
        <line x1="500" y1="160" x2="300" y2="250" stroke="#D4AF37" strokeWidth="4"/>
        <line x1="500" y1="160" x2="700" y2="250" stroke="#D4AF37" strokeWidth="4"/>
      </svg>
    </div>
  );
}
