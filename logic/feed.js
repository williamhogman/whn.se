import { fetchGHData } from "./github";
import { fetchTwitterData } from "./tweets";

export async function fetchFeed() {
  const [ghData, twitterData] = await Promise.all([
    fetchGHData(),
    fetchTwitterData(),
  ]);
  return ghData.concat(twitterData).sort((a, b) => b.date - a.date);
}
