const TWITTER_DEV_TOKEN = process.env.TWITTER_DEV_TOKEN;

const TWITTER_URL = new URL("https://api.twitter.com/2/tweets/search/recent");

function formatTweet(x, includes) {
  const author = includes.users.find((y) => x.author_id == y.id);
  return {
    description: x.text,
    date: new Date(x.created_at).getTime(),
    author,
    type: "tweet",
    title: `${author?.name} (@${author?.username}) tweeted`,
  };
}

export async function fetchTwitterData() {
  const url = new URL(TWITTER_URL);
  url.searchParams.append("query", "from:w_hgm -is:retweet");
  url.searchParams.append("tweet.fields", "author_id,created_at");
  url.searchParams.append("expansions", "author_id");
  url.searchParams.append("user.fields", "name,username");
  const res = await fetch(url, {
    headers: {
      "User-Agent": "whn.se",
      authorization: `Bearer ${TWITTER_DEV_TOKEN}`,
    },
  });

  if (res.status == 200) {
    const json = await res.json();
    console.log(json);
    return json.data.map((x) => formatTweet(x, json.includes));
  } else {
    throw new Error("Unsuccessful request");
  }
}
