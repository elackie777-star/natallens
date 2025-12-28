import { TreeOfLifeOverlay } from '@/components/TreeOfLifeOverlay';
import { NatalChartOverlay } from '@/components/NatalChartOverlay';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <>
      <NatalChartOverlay />
      <TreeOfLifeOverlay />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0E1A] text-white px-6 relative z-10">
        <h1 className="text-6xl md:text-8xl font-serif text-[#D4AF37] mb-6 tracking-wider">NatalLens</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-12 leading-relaxed">
          See tomorrow’s forces before they reach you.
        </p>
        <div className="text-center max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed">
            A precision instrument mapping daily cosmic energies against your natal signature—filtered through Aleister Crowley’s Thoth Tarot.
          </p>
          <p className="text-lg leading-relaxed">
            Record empirical reflections. Over time, reveal your personal correspondences.
          </p>
        </div>
        <WaitlistForm />
        <footer className="absolute bottom-8 text-sm opacity-60">
          Early access for serious practitioners • 2026
        </footer>
      </div>
    </>
  );
}
