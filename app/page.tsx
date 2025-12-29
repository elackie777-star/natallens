import { TreeOfLifeOverlay } from './components/TreeOfLifeOverlay';
import { NatalChartOverlay } from './components/NatalChartOverlay';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <>
      <TreeOfLifeOverlay />
      <NatalChartOverlay />
      <div className="stars-bg" aria-hidden="true" />
      <main className="relative z-20 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="text-center space-y-24 max-w-6xl animate-fade-in">
          <h1 className="heading-etch text-7xl md:text-9xl lg:text-[10rem] leading-tight">
            NatalLens
          </h1>
          <p className="subheading-etch text-4xl md:text-6xl lg:text-7xl">
            See tomorrow’s forces before they reach you.
          </p>
          <div className="space-y-12 text-etch text-xl md:text-2xl lg:text-3xl">
            <p>
              A precision instrument mapping daily cosmic energies against your unique natal signature — drawing from ancient esoteric traditions of astrology, tarot, and numerology.
            </p>
            <p>
              Record empirical reflections. Over time, reveal your personal correspondences and recurring patterns in life.
            </p>
            <p className="text-lg md:text-xl opacity-70">
              Early access for serious practitioners • 2026
            </p>
          </div>
          <WaitlistForm />
        </div>
      </main>
    </>
  );
}
