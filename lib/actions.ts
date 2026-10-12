"use server";

import { redirect } from "next/navigation";
import { listingConsultationUrl } from "@/lib/calendly";

export type ValuationState = {
  error: string | null;
};

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function requestValuation(
  _previous: ValuationState,
  formData: FormData,
): Promise<ValuationState> {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const phone = readField(formData, "phone");
  const address = readField(formData, "address");

  if (name.length < 2) {
    return { error: "Enter your full name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter a valid email address." };
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return { error: "Enter a 10-digit phone number." };
  }
  if (address.length < 8) {
    return { error: "Enter the Peccole Ranch property address." };
  }

  const url = new URL(listingConsultationUrl("valuation-form"));
  url.searchParams.set("name", name);
  url.searchParams.set("email", email);
  redirect(url.toString());
}
