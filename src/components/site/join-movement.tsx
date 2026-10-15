"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const INTERESTS = ["I want to donate", "I want to volunteer", "I represent a partner", "Just keep me updated"];

export function JoinMovement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder — wire to a real provider / CRM later.
    console.log({ name, email, interest });
  };

  return (
    <section id="join" className="bg-paper-2 py-24 md:py-32 lg:py-40">
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
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-small font-medium text-ink">Email</span>
                <Input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-small font-medium text-ink">How would you like to help?</span>
              <select
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
            <Button type="submit" size="lg" className="mt-2 w-full sm:w-fit">
              Count me in
            </Button>
            <p className="text-tiny text-muted">
              We’ll only use your details to follow up. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
