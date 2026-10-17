import Link from "next/link";
import { PlaceJsonLd } from "@/components/PlaceJsonLd";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { EditorialImage } from "@/components/EditorialImage";
import { FaqList } from "@/components/FaqList";
import { communityFaqs } from "@/lib/faqs";
import { marketSources } from "@/lib/market";
import { ccsdLocatorUrl } from "@/lib/site";
import { entityIds } from "@/lib/entity";
import { pageMeta } from "@/lib/seo";

const title = "Peccole Ranch Community Guide | Las Vegas";
const description =
  "Peccole Ranch is a west Las Vegas master plan beside Summerlin, mainly ZIP 89117, with paseos, a clubhouse, and mixed gates.";
const answer =
  "Peccole Ranch is a master-planned community in west Las Vegas, beside Summerlin, primarily ZIP 89117. The Peccole family launched it in 1989 on former ranch land. The association lists paseos, a clubhouse, tennis, and disc golf. Gates apply only inside some sub-associations.";

export async function generateMetadata() {
  return pageMeta({ title, description, path: "/peccole-ranch" });
}

export default function PeccoleRanchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <WebPageJsonLd
        name={title}
        description={answer}
        path="/peccole-ranch"
        aboutId={entityIds.place}
      />
      <PlaceJsonLd />
      <BreadcrumbJsonLd
        path="/peccole-ranch"
        items={[
          { name: "Home", path: "/" },
          { name: "Peccole Ranch" },
        ]}
      />
      <FaqJsonLd faqs={communityFaqs} path="/peccole-ranch" />

      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        Community
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
        Peccole Ranch community guide
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted" id="answer" data-aeo-answer>
        {answer}
      </p>

      <EditorialImage
        src="/images/peccole-ranch/paseos-and-clubhouse.webp"
        alt="Clubhouse, empty tennis court, and amphitheater lawn at sunset, illustrating Peccole Ranch paseos"
        ratio="16/9"
        priority
      />

      <section aria-labelledby="place-heading">
        <h2 id="place-heading" className="font-display text-4xl font-medium">
          Where the master plan sits
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Sources agree on west Las Vegas, beside Summerlin, and ZIP 89117 as the main code.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          A guide updated September 19, 2026 also names ZIP 89145 for part of the community.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          That guide boxes the plan with Sahara, Charleston, Durango, and Buffalo.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Another community page uses Charleston, Fort Apache, Sahara, and Hualapai. Those boxes do not match.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Use the parcel, not a blog map, when the lot’s edge matters.
        </p>
        <p className="mt-4 text-sm text-muted">
          Sources:{" "}
          <a href={marketSources.nregPeccole} className="underline underline-offset-4">
            guide updated September 19, 2026
          </a>
          {" · "}
          <a href={marketSources.sandy} className="underline underline-offset-4">
            community page
          </a>
          {" · "}
          <a href={marketSources.zipData} className="underline underline-offset-4">
            ZIP page dated October 2026
          </a>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="amenities-heading">
        <h2 id="amenities-heading" className="font-display text-4xl font-medium">
          Amenities the association names
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          The amenities page lists a clubhouse, playground, tennis courts, amphitheater, and volleyball.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          It also lists bocce, a disc golf course, and outdoor exercise equipment along the channels.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Tennis is posted from 6:00 a.m. to 11:00 p.m. for registered residents. Pickleball is not allowed on those courts.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Clubhouse rental is listed for homeowners on weekends, at $250 plus a $300 deposit.
        </p>
        <p className="mt-4 text-sm text-muted">
          Pages reviewed October 12, 2026:{" "}
          <a href={marketSources.associationAmenities} className="underline underline-offset-4">
            amenities map
          </a>
          {" · "}
          <a href={marketSources.associationTennis} className="underline underline-offset-4">
            tennis courts
          </a>
          {" · "}
          <a href={marketSources.associationClubhouse} className="underline underline-offset-4">
            clubhouse rental
          </a>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="commute-heading">
        <h2 id="commute-heading" className="font-display text-4xl font-medium">
          Commute times from a September 2026 guide
        </h2>
        <ul className="mt-6 max-w-3xl space-y-3 text-muted">
          <li>Las Vegas Strip, 7 to 9 a.m., via Flamingo or Sahara: about 15 to 20 minutes.</li>
          <li>Harry Reid International Airport via I-215: about 18 to 22 minutes.</li>
          <li>Downtown Summerlin: about 8 to 12 minutes west.</li>
        </ul>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          Source:{" "}
          <a href={marketSources.nregPeccole} className="underline underline-offset-4">
            Peccole Ranch guide, updated September 19, 2026
          </a>
          . A named roster of major employers inside the community was not found. Drive the route at
          the hour you would actually leave.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="schools-heading">
        <h2 id="schools-heading" className="font-display text-4xl font-medium">
          School names, by source
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Clark County School District assigns each address. Names below are citations, not a zone map.
        </p>
        <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-muted">
          <li>Ober Elementary, also written D’Vorre and Hall Ober Elementary</li>
          <li>William and Mary Scherkenbach Elementary</li>
          <li>Walter Johnson Junior High</li>
          <li>Lawrence and Heidi Canarelli Middle School</li>
          <li>Palo Verde High School</li>
          <li>Bonanza High School</li>
        </ul>
        <p className="mt-4 max-w-3xl text-muted">
          Private and charter names cited within a short drive include The Meadows School, Bishop Gorman High School, Mountain View Christian School, and Doral Academy Pebble Campus.
        </p>
        <p className="mt-6">
          <a
            href={ccsdLocatorUrl}
            className="text-[0.72rem] uppercase tracking-[0.18em] underline underline-offset-4"
          >
            Open the Clark County School District locator
          </a>
        </p>
      </section>

      <FaqList faqs={communityFaqs} heading="Community questions" id="community-faq-heading" />
    </div>
  );
}
