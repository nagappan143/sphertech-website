import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { FloatingButtons } from '@/components/floating-buttons';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative text-center">
          <p className="font-heading text-[8rem] font-extrabold leading-none text-gradient sm:text-[12rem]">
            404
          </p>
          <h1 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Button asChild className="mt-6 font-button font-semibold">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
