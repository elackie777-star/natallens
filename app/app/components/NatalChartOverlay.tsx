
// NatalChartOverlay.tsx
export function NatalChartOverlay() {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none">
      <svg viewBox="0 0 1000 1000" className="w-full h-full">
        <circle cx="500" cy="500" r="400" fill="none" stroke="#D4AF37" strokeWidth="4"/>
        <circle cx="500" cy="500" r="300" fill="none" stroke="#D4AF37" strokeWidth="3"/>
        {/* Subtle zodiac wheel lines */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => (
          <line key={deg} x1="500" y1="500" x2={500 + 400*Math.cos(deg*Math.PI/180)} y2={500 + 400*Math.sin(deg*Math.PI/180)} stroke="#D4AF37" strokeWidth="2"/>
        ))}
      </svg>
    </div>
  );
}
