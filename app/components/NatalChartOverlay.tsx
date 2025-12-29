export function NatalChartOverlay() {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
   <svg className="w-full h-full filter drop-shadow(0 0 8px #D4AF37)" viewBox="0 0 1000 1000">
        {/* Subtle natal wheel - reduced size and opacity */}
        <circle cx="500" cy="500" r="350" fill="none" stroke="#D4AF37" strokeWidth="2"/>
        <circle cx="500" cy="500" r="250" fill="none" stroke="#D4AF37" strokeWidth="1.5"/>
        <circle cx="500" cy="500" r="150" fill="none" stroke="#D4AF37" strokeWidth="1"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => (
          <line key={deg} x1="500" y1="500" x2={500 + 350 * Math.cos(deg * Math.PI / 180)} y2={500 + 350 * Math.sin(deg * Math.PI / 180)} stroke="#D4AF37" strokeWidth="1" />
        ))}
      </svg>
    </div>
  );
}
