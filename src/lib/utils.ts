import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Register PFHI's custom font-size tokens (from the Relume preset) so
// tailwind-merge treats `text-medium`, `text-h3`, etc. as font sizes and does
// NOT let them collide with text COLOR utilities like `text-white`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "tiny",
            "small",
            "regular",
            "medium",
            "large",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
