import { TreeOfLifeOverlay } from './components/TreeOfLifeOverlay';
import { NatalChartOverlay } from './components/NatalChartOverlay';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <>
      <TreeOfLifeOverlay />
      <NatalChartOverlay />
      <div className="stars-bg" aria-hidden="true" />
      <main className="relative z-20 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="text-center space-y-20 max-w-5xl">
          <h1 className="heading-etch drop-shadow-2xl animate-glow-pulse">NatalLens</h1>
          <p className="subheading-etch">
            See tomorrow’s forces before they reach you.
          </p>
          <div className="space-y-10 text-etch">
            <p>
              A precision instrument mapping daily cosmic energies against your natal signature—filtered through Aleister Crowley’s Thoth Tarot.
            </p>
            <p>
              Record empirical reflections. Over time, reveal your personal correspondences.
            </p>
            <p className="text-base opacity-70">
              Early access for serious practitioners • 2026
            </p>
          </div>
          <WaitlistForm />
        </div>
      </main>
    </>
  );
}
