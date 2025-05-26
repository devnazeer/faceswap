import BlogPostsClient from "./BlogPostClient";

async function fetchPosts(lang) {
  const wpApiUrl = `https://swapinfo.xyz${
    lang === "en" ? "" : `/${lang}`
  }/wp-json/wp/v2/posts?_embed`;

  try {
    const response = await fetch(wpApiUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent": "FaceSwap/1.0",
      },
      next: { revalidate: 3600 },
    });

    const contentType = response.headers.get("content-type");

    if (contentType === "text/html") {
      return null;
    }

    if (!contentType || !contentType.includes("application/json")) {
      if (lang !== "en") {
        return fetchPosts("en");
      }
      throw new Error("API did not return JSON");
    }

    if (!response.ok) {
      if (lang !== "en") {
        return fetchPosts("en");
      }
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const data = await response.json();

    return data.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title.rendered,
      description: post.excerpt?.rendered || "",
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      date: post.date,
    }));
  } catch (error) {
    console.error("Fetch error:", error);
    if (lang !== "en") {
      return fetchPosts("en");
    }
    throw error;
  }
}

export default async function BlogPosts({ locale }) {
  const posts = await fetchPosts(locale);

  return <BlogPostsClient posts={posts} locale={locale} />;
}
