export function TreeOfLifeOverlay() {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
      <svg viewBox="0 0 1000 1000" className="w-full h-full">
        {/* Simplified, subtle Tree of Life glyph */}
        <circle cx="500" cy="100" r="40" fill="none" stroke="#D4AF37" strokeWidth="3"/>
        <circle cx="300" cy="300" r="35" fill="none" stroke="#D4AF37" strokeWidth="2"/>
        <circle cx="700" cy="300" r="35" fill="none" stroke="#D4AF37" strokeWidth="2"/>
        <circle cx="200" cy="500" r="30" fill="none" stroke="#D4AF37" strokeWidth="2"/>
        <circle cx="800" cy="500" r="30" fill="none" stroke="#D4AF37" strokeWidth="2"/>
        <circle cx="500" cy="700" r="40" fill="none" stroke="#D4AF37" strokeWidth="3"/>
        <line x1="500" y1="140" x2="300" y2="265" stroke="#D4AF37" strokeWidth="2"/>
        <line x1="500" y1="140" x2="700" y2="265" stroke="#D4AF37" strokeWidth="2"/>
        <line x1="300" y1="335" x2="200" y2="470" stroke="#D4AF37" strokeWidth="2"/>
        <line x1="700" y1="335" x2="800" y2="470" stroke="#D4AF37" strokeWidth="2"/>
        <line x1="200" y1="530" x2="500" y2="660" stroke="#D4AF37" strokeWidth="2"/>
        <line x1="800" y1="530" x2="500" y2="660" stroke="#D4AF37" strokeWidth="2"/>
      </svg>
    </div>
  );
}
