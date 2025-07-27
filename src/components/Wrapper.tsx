'use client';

import { useEffect, useState } from 'react';
import NavItems from './NavItems';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <main className="font-sans min-h-screen bg-background text-foreground relative max-w-2xl mx-auto md:mt-10 space-y-16 py-10 sm:py-16 px-2 sm:px-6">
      {/* Navigation */}
      <NavItems />

      {/* Email Fixed on the right side of the screen */}
      <div className="w-10 fixed bottom-0 left-auto right-10 z-10 hidden lg:block">
        <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-foreground">
          <a
            className="my-5 mx-auto p-2.5 text-xs leading-5 tracking-widest hover:-translate-y-1 focus:-translate-y-1 text-muted-foreground hover:text-accent-gradient text-accent-gradient"
            style={{ writingMode: 'vertical-rl' }}
            href={`mailto:raghvendrrsingh@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            raghvendrrsingh@gmail.com
          </a>
        </div>
      </div>

      {children}
    </main>
  );
}
