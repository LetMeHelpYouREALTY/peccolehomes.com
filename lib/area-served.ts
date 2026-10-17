/** Shared schema.org Place for Peccole Ranch service area. */
export const peccoleRanchAreaServed = {
  "@type": "Place",
  name: "Peccole Ranch",
  containedInPlace: {
    "@type": "City",
    name: "Las Vegas",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
} as const;
