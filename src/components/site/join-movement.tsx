"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const INTERESTS = ["I want to donate", "I want to volunteer", "I represent a partner", "Just keep me updated"];

export function JoinMovement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("opening");
    const subject = encodeURIComponent(`PFHI interest: ${interest}`);
    const body = encodeURIComponent(
      `Hello PFHI,\n\nMy name is ${name}. ${interest}.\n\nYou can reach me at ${email}.`,
    );
    window.location.href = `mailto:hello@peoplefrontlinehealth.org?subject=${subject}&body=${body}`;
  };

  return (
    <section id="join" className="bg-paper-2 py-28 md:py-40 lg:py-48">
      <div className="mx-auto max-w-container px-[5%]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          {/* Left: pitch */}
          <div>
            <p
              data-reveal
              className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-px w-8 bg-ink/25" />
              Take the first step
            </p>
            <h2 data-reveal className="display-2 text-balance text-ink">
              Join the movement.
            </h2>
            <p data-reveal className="mt-6 max-w-md text-large text-pretty text-ink-2">
              Become part of a community placing people at the frontline of healthcare. Tell us how
              you’d like to help — we’ll take it from there.
            </p>
          </div>

          {/* Right: form */}
          <form
            data-reveal
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-card border border-ink/10 bg-paper p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-small font-medium text-ink">Full name</span>
                <Input
                  id="join-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-small font-medium text-ink">Email</span>
                <Input
                  id="join-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-small font-medium text-ink">How would you like to help?</span>
              <select
                id="join-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="min-h-12 w-full rounded-form border border-ink/20 bg-transparent px-4 py-2.5 text-regular text-ink transition-all focus-visible:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15"
              >
                {INTERESTS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full sm:w-fit"
              disabled={status === "opening"}
            >
              {status === "opening" ? "Opening email…" : "Start the conversation"}
            </Button>
            <p className="text-small text-muted" aria-live="polite">
              This opens a pre-filled message in your email app. Your details are not stored on this
              website.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
