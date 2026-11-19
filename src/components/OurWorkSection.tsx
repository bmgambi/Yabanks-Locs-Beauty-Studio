import { useState } from 'react';
import barrelRollImg from '../assets/samples/barrel-roll-updo.svg';
import classicFauxImg from '../assets/samples/classic-faux-locs.svg';
import honeyTippedImg from '../assets/samples/honey-tipped-locs.svg';
import instantLocsImg from '../assets/samples/instant-locs-ends.svg';
import retouchPartingImg from '../assets/samples/retouch-square-parting.svg';
import sisterMicroImg from '../assets/samples/sister-micro-locs.svg';
import { Section } from './LayoutPrimitives';

interface WorkSample {
  id: string;
  src: string;
  alt: string;
}

const WORK_SAMPLES: WorkSample[] = [
  {
    id: 'retouch-parting',
    src: retouchPartingImg,
    alt: 'Freshly retouched medium locs with neat square parting',
  },
  {
    id: 'barrel-updo',
    src: barrelRollImg,
    alt: 'Sculpted barrel roll updo styled on mature locs',
  },
  {
    id: 'instant-locs',
    src: instantLocsImg,
    alt: 'Fresh artificial instant locs installed with tapered ends',
  },
  {
    id: 'classic-faux',
    src: classicFauxImg,
    alt: 'Long classic temporary faux locs in natural black',
  },
  {
    id: 'sister-micro',
    src: sisterMicroImg,
    alt: 'Finely parted micro locs and sister locs with centre part',
  },
  {
    id: 'honey-colour',
    src: honeyTippedImg,
    alt: 'Medium locs with warm honey-gold coloured tips',
  },
];

function WorkSampleCard({ sample }: { sample: WorkSample }) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="m-0 flex flex-col gap-2">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-[6px] border border-line bg-paper dark:border-dark-line dark:bg-[#1E1E1E]">
        {hasError ? (
          <div
            role="img"
            aria-label={sample.alt}
            className="flex h-full w-full items-center justify-center p-4 text-center font-body text-[13px] text-muted dark:text-dark-muted"
          >
            {sample.alt}
          </div>
        ) : (
          <img
            src={sample.src}
            alt={sample.alt}
            width={400}
            height={500}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full rounded-[6px] object-cover"
          />
        )}
      </div>
      <figcaption className="font-body text-[13px] leading-snug text-muted dark:text-dark-muted">
        Sample image
      </figcaption>
    </figure>
  );
}

export function OurWorkSection() {
  return (
    <Section
      id="our-work"
      surface="white"
      ariaLabel="Our work"
      className="border-t border-line dark:border-dark-line"
    >
      <div className="max-w-[68ch]">
        <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-text dark:text-dark-text sm:text-[36px]">
          Our work
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {WORK_SAMPLES.map((sample) => (
          <WorkSampleCard key={sample.id} sample={sample} />
        ))}
      </div>
    </Section>
  );
}
