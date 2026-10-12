"use client";

import { useActionState } from "react";
import { requestValuation, type ValuationState } from "@/lib/actions";

const initialState: ValuationState = { error: null };

export function ValuationForm() {
  const [state, formAction, pending] = useActionState(requestValuation, initialState);

  return (
    <form action={formAction} className="mt-8 max-w-xl space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-2 w-full border-b border-line/25 bg-transparent py-3 text-ink outline-none focus:border-stone"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 w-full border-b border-line/25 bg-transparent py-3 text-ink outline-none focus:border-stone"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="mt-2 w-full border-b border-line/25 bg-transparent py-3 text-ink outline-none focus:border-stone"
        />
      </div>
      <div>
        <label htmlFor="address" className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
          Property address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          required
          className="mt-2 w-full border-b border-line/25 bg-transparent py-3 text-ink outline-none focus:border-stone"
        />
      </div>
      {state.error ? (
        <p role="alert" className="text-sm text-ink">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex border border-ink bg-ink px-6 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-bg disabled:opacity-60"
      >
        {pending ? "Opening booking" : "Book a valuation"}
      </button>
      <p className="text-sm text-muted">
        The button opens a scheduling page with your name and email. Repeat the property address there if asked.
      </p>
    </form>
  );
}
