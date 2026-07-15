'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { navLinks } from '@/constants/site';
import { services } from '@/constants/services';
import { products } from '@/constants/products';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LogoImg from '@/app/assets/Logo.png';

function MegaMenu({ kind }: { kind: 'services' | 'products' }) {
  const items =
    kind === 'services'
      ? services.slice(0, 8).map((s) => ({
          title: s.title,
          desc: s.description.slice(0, 60) + '…',
          href: `/services#${s.slug}`,
          Icon: s.icon,
        }))
      : products.slice(0, 8).map((p) => ({
          title: p.name,
          desc: p.tagline,
          href: `/products#${p.slug}`,
          Icon: p.icon,
        }));

  return (
    <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-hover:block">
      <div className="w-[640px] rounded-2xl border border-border/60 bg-card/90 p-4 shadow-2xl backdrop-blur-2xl">
        <div className="grid grid-cols-2 gap-1">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="group/item flex items-start gap-3 rounded-xl p-3 transition hover:bg-primary/10"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <it.Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {it.title}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {it.desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <Link
          href={kind === 'services' ? '/services' : '/products'}
          className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
        >
          View all {kind}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="overflow-hidden rounded-l-xl rounded-r-xl"> {/* Wrapper div for side rounding */}
            <Image
              src={LogoImg}
              alt="SpherTech Logo"
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-xl font-bold tracking-tight">
              Spher<span className="text-gradient">Tech</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Software Solutions
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className={cn(
                  'relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground',
                  pathname === link.href && 'text-foreground'
                )}
              >
                {link.label}
                {link.mega && <ChevronDown className="h-3.5 w-3.5" />}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              {link.mega && <MegaMenu kind={link.mega} />}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden font-button font-semibold sm:inline-flex"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-16 z-40 border-b border-border/60 bg-background/95 backdrop-blur-xl lg:block"
          >
            <div className="mx-auto max-w-3xl px-4 py-6">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  autoFocus
                  placeholder="Search services, products, technologies…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button onClick={() => setSearchOpen(false)}>
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col border-l border-border bg-card p-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="overflow-hidden rounded-l-lg rounded-r-lg"> {/* Wrapper div for side rounding */}
                    <Image
                      src={LogoImg}
                      alt="SpherTech Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span className="font-heading text-lg font-bold">
                    Spher<span className="text-gradient">Tech</span>
                  </span>
                </Link>
                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                English
              </div>
              <Button asChild className="mt-3 font-button font-semibold">
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}