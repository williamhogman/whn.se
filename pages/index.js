import { NextSeo } from "next-seo";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchFeed } from "../logic/feed";
import Feed from "../components/Feed";

export async function getStaticProps(context) {
  return {
    props: { feed: await fetchFeed() },
  };
}

function Links({ links }) {
  const l = links.map(({ href, name }) => (
    <li key={href}>
      <a href={href}>{name}</a>
    </li>
  ));
  return (
    <nav class={styles.links}>
      <ul>{l}</ul>
    </nav>
  );
}

const LINKS = [
  { href: "tel:+46702638633", name: "+46702638633" },
  { href: "mailto:me@whn.se", name: "me@whn.se" },
  { href: "https://twitter.com/w_hgm", name: "@w_hgm" },
  { href: "https://linkedin.com/in/whnse", name: "LinkedIn" },
];

function GithubRepos({ gh }) {
  return (
    <div class={styles.github}>
      <h3 class={styles.heading}>Github</h3>
      <ul>
        {gh.map((x) => (
          <li key={x.href}>
            <a href={x.href}>{x.name}</a>
            <p>{x.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home({ feed }) {
  return (
    <>
      <NextSeo
        title="William Rudenmalm"
        description="William Rudenmalm is an engineering leader based in Stockholm Sweden. On this website with links to all the things that William is doing including Rust, Kubernetes, data science and startups."
      />
      <div class={styles.hero}></div>
      <header class={styles.header}>
        <h1>William Rudenmalm</h1>
        <p>
          William is an european technologist passionate about the next big
          thing and the people building. Among William's interests is scaling
          engineering organizations and navigating trade offs of architecture
          and velocity. William's expertise lies in distributed systems,
          scalability and machine learning. In terms of particular technologies
          William enjoys working with Kubernetes, Rust, nats, Kafka and neo4j.
        </p>
        <Links links={LINKS} />
      </header>
      <Feed className={styles.feed} feed={feed} />
    </>
  );
}
