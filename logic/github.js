export async function fetchGHData() {
  const ghFull = await fetch(
    "https://api.github.com/users/williamhogman/repos?per_page=10&sort=updated"
  ).then((x) => x.json());
  const gh = ghFull
    .map((x) => ({
      title: `Updated Github repository ${x.full_name}`,
      description: x.description,
      href: x.html_url,
      date: new Date(x.updated_at).getTime(),
      type: "github",
    }))
    .filter((x) => x.name !== "blog" && x.name !== "whn.se")
    .slice(0, 10);

  return gh;
}
