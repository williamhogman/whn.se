import { asset } from "$fresh/runtime.ts";
import Feed from "../components/Feed.jsx";
const DESCRIPTION = `William is an european technologist passionate about the next big
thing and the people building. Among William's interests is scaling
engineering organizations and navigating trade offs of architecture
and velocity. William's expertise lies in distributed systems,
scalability and machine learning. In terms of particular technologies,
William enjoys working with Kubernetes, Rust, nats, Kafka and neo4j.`;
const NAME = "William Rudenmalm";

export async function getStaticProps(context) {
  return {
    props: { feed: await fetchFeed() },
    revalidate: 1800,
  };
}

function Links({ links }) {
  const l = links.map(({ href, name }) => (
    <li key={href}>
      <a href={href}>{name}</a>
    </li>
  ));
  return (
    <nav class="links">
      <ul>{l}</ul>
    </nav>
  );
}

const LINKS = [
  { href: "tel:+46702638633", name: "+46702638633" },
  { href: "mailto:me@whn.se", name: "me@whn.se" },
  { href: "https://twitter.com/w_hgm", name: "@w_hgm" },
  { href: "https://linkedin.com/in/whnse", name: "LinkedIn" },
  { href: "https://blog.whn.se/", name: "Blog" },
];

function Metas() {
  return (
    <Fragment>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@w_hgm" />
      <meta name="twitter:creator" content="@w_hgm" />
      <meta property="og:url" content="https://www.whn.se/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="whn.se" />
      <title>William Rudenmalm - whn.se - William Rudenmalm's webpage</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={META_DESCRIPTION} />
    </Fragment>
  );
}

const META_DESCRIPTION =
  "William Rudenmalm is an engineering leader based in Stockholm Sweden. On this website with links to all the things that William is doing including Rust, Kubernetes, data science and startups.";
export default function Home({ feed }) {
  return (
    <Fragment>
      <link rel="stylesheet" href={asset("/globals.css")} type="text/css" />
      <link rel="stylesheet" href={asset("/home.css")} type="text/css" />
      <Metas />
      <div class="page">
        <header class="header">
          <h1>{NAME}</h1>
          <p>{DESCRIPTION}</p>
          <Links links={LINKS} />
        </header>
        {feed != null ? <Feed feed={feed} /> : null}
      </div>
    </Fragment>
  );
}
