import { InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo, FacebookLogo } from "relume-icons";
import { Logo } from "@/components/site/logo";
import { footer } from "@/lib/content";

const socials = [
  { label: "Instagram", icon: InstagramLogo, url: "#" },
  { label: "X", icon: XLogo, url: "#" },
  { label: "LinkedIn", icon: LinkedinLogo, url: "#" },
  { label: "YouTube", icon: YoutubeLogo, url: "#" },
  { label: "Facebook", icon: FacebookLogo, url: "#" },
];

export function Footer() {
  return (
    <footer className="bg-ink px-[5%] pb-8 pt-16 text-paper md:pt-24">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-2 gap-10 pb-14 sm:grid-cols-4 lg:pb-20">
          <div className="col-span-2 sm:col-span-1">
            <Logo variant="full" tone="paper" />
            <p className="mt-5 max-w-xs text-small text-pretty text-paper/65">{footer.tagline}</p>
            <a
              href={`mailto:${footer.email}`}
              className="mt-6 inline-flex min-h-11 items-center text-small font-medium text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/70"
            >
              {footer.email}
            </a>
          </div>
          {footer.columns.map((column) => (
            <nav key={column.title} className="flex flex-col">
              <h2 className="mb-4 text-small font-semibold text-paper">{column.title}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.url}
                      className="inline-flex min-h-11 items-center text-small text-paper/60 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/70"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-y border-paper/15 py-10 md:py-14">
          <p className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.035em] text-paper">
            Care, closer to everyone.
          </p>
        </div>

        <div className="flex flex-col-reverse items-start gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 text-small text-paper/50 md:flex-row md:items-center md:gap-6">
            <p>© {new Date().getFullYear()} People Frontline Health Initiative.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="underline underline-offset-2 hover:text-paper">
                Privacy Policy
              </a>
              <a href="#" className="underline underline-offset-2 hover:text-paper">
                Terms
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ label, icon: Icon, url }) => (
              <a
                key={label}
                href={url}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full border border-paper/15 text-paper/60 transition-[color,border-color,transform] duration-200 hover:border-paper/35 hover:text-paper active:scale-[0.97]"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
