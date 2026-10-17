import { agent, brokerage, directionsUrl, nap } from "@/lib/site";

export function AgentTrustBlock() {
  return (
    <aside
      className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
      aria-labelledby="local-agent-heading"
    >
      <h2 id="local-agent-heading" className="text-xl font-semibold text-gray-900 dark:text-white">
        Your local Peccole Ranch REALTOR®
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        {agent.name} with {brokerage.name} focuses on Peccole Ranch and west Las Vegas. License{" "}
        {agent.license}. Office: {nap.street}, {nap.city}, {nap.state} {nap.zip}.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`tel:${nap.phone.replace(/\D/g, "")}`}
          className="inline-flex rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Call {nap.phone}
        </a>
        <a
          href="/contact"
          className="inline-flex rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Contact
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Directions
        </a>
      </div>
    </aside>
  );
}
