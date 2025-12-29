import { TreeOfLifeOverlay } from './components/TreeOfLifeOverlay';
import { NatalChartOverlay } from './components/NatalChartOverlay';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <>
      <TreeOfLifeOverlay />
      <NatalChartOverlay />
      <div className="stars-bg" aria-hidden="true" />
      <main className="relative z-20 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="container-alchemy text-center space-y-20">
          <h1 className="heading-etch">NatalLens</h1>
          <p className="subheading-etch">
            See tomorrow’s forces before they reach you.
          </p>
          <div className="space-y-10 text-etch max-w-4xl mx-auto">
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
