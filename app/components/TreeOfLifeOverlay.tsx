export function TreeOfLifeOverlay() {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
      <svg viewBox="0 0 1000 1000" className="w-full h-full">
        <circle cx="500" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="8"/>
        <circle cx="300" cy="300" r="50" fill="none" stroke="#D4AF37" strokeWidth="6"/>
        <circle cx="700" cy="300" r="50" fill="none" stroke="#D4AF37" strokeWidth="6"/>
        <circle cx="200" cy="500" r="40" fill="none" stroke="#D4AF37" strokeWidth="5"/>
        <circle cx="800" cy="500" r="40" fill="none" stroke="#D4AF37" strokeWidth="5"/>
        <circle cx="500" cy="700" r="50" fill="none" stroke="#D4AF37" strokeWidth="6"/>
        <line x1="500" y1="160" x2="300" y2="250" stroke="#D4AF37" strokeWidth="4"/>
        <line x1="500" y1="160" x2="700" y2="250" stroke="#D4AF37" strokeWidth="4"/>
        <line x1="300" y1="350" x2="200" y2="460" stroke="#D4AF37" strokeWidth="4"/>
        <line x1="700" y1="350" x2="800" y2="460" stroke="#D4AF37" strokeWidth="4"/>
        <line x1="200" y1="540" x2="500" y2="650" stroke="#D4AF37" strokeWidth="4"/>
        <line x1="800" y1="540" x2="500" y2="650" stroke="#D4AF37" strokeWidth="4"/>
      </svg>
    </div>
  );
}
