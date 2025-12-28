import { TreeOfLifeOverlay } from './components/TreeOfLifeOverlay';
import { NatalChartOverlay } from './components/NatalChartOverlay';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <>
      <NatalChartOverlay />
      <TreeOfLifeOverlay />
      <main className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <div className="container-max text-center space-y-16">
            <h1 className="heading-gold text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              NatalLens
            </h1>
            <p className="text-2xl md:text-4xl lg:text-5xl leading-relaxed opacity-90">
              See tomorrow’s forces before they reach you.
            </p>
            <div className="space-y-10 text-body max-w-4xl mx-auto">
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
        </div>
      </main>
    </>
  );
}
