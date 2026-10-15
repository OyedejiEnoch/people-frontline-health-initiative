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
    <footer className="border-t border-ink/10 bg-paper px-[5%] py-16 md:py-20">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-2 gap-10 pb-14 sm:grid-cols-4 lg:pb-20">
          <div className="col-span-2 sm:col-span-1">
            <Logo variant="full" />
            <p className="mt-5 max-w-xs text-small text-pretty text-ink-2">{footer.tagline}</p>
          </div>
          {footer.columns.map((column) => (
            <nav key={column.title} className="flex flex-col">
              <h2 className="mb-4 text-small font-semibold text-ink">{column.title}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.url}
                      className="text-small text-ink-2 transition-colors hover:text-ink"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="h-px w-full bg-ink/10" />

        <div className="flex flex-col-reverse items-start gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 text-small text-muted md:flex-row md:items-center md:gap-6">
            <p>© {new Date().getFullYear()} People Frontline Health Initiative.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="underline underline-offset-2 hover:text-ink">
                Privacy Policy
              </a>
              <a href="#" className="underline underline-offset-2 hover:text-ink">
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
                className="text-ink-2 transition-colors hover:text-ink"
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
