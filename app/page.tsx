import { TreeOfLifeOverlay } from './components/TreeOfLifeOverlay';
import { NatalChartOverlay } from './components/NatalChartOverlay';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <>
      <NatalChartOverlay />
      <TreeOfLifeOverlay />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12">
        <div className="container-max text-center space-y-12">
          <h1 className="heading-gold text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            NatalLens
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed opacity-90">
            See tomorrow’s forces before they reach you.
          </p>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-80">
            <p>
              A precision instrument mapping daily cosmic energies against your natal signature—filtered through Aleister Crowley’s Thoth Tarot.
            </p>
            <p>
              Record empirical reflections. Over time, reveal your personal correspondences.
            </p>
          </div>
          <WaitlistForm />
        </div>
        <footer className="mt-auto pt-20 pb-8 text-sm opacity-60">
          Early access for serious practitioners • 2026
        </footer>
      </main>
    </>
  );
}
