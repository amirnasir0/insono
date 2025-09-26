// app/blog/[slug]/page.tsx
import { graphQLClient, GET_POST_BY_SLUG } from "@/lib/graphql";
import Image from "next/image";
import { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ slug: string }>; // 👈 must be async
}

// GraphQL response type
interface PostResponse {
  post: {
    title: string;
    content: string;
    date: string;
    author?: { node: { name: string } };
    featuredImage?: { node: { sourceUrl: string } };
    categories?: { nodes: { name: string }[] };
    excerpt?: string;
  } | null;
}

// Fetch blog by slug
async function getPost(slug: string): Promise<PostResponse["post"] | null> {
  try {
    const data = await graphQLClient.request<PostResponse>(GET_POST_BY_SLUG, {
      id: slug,
    });
    return data.post;
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
}

// ✅ Dynamic SEO metadata
export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  const { slug } = await props.params; // 👈 FIX: await params

  if (!slug) {
    return {
      title: "Blog | Insono Hearing",
      description:
        "Explore hearing care tips and insights from Insono Hearing.",
    };
  }

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post not found | Insono Hearing",
      description: "This blog post could not be found.",
    };
  }

  const title = post.title;
  const description =
    post.excerpt ||
    `Read ${post.title} by ${post.author?.node?.name ?? "Insono Hearing"}`;
  const image =
    post.featuredImage?.node?.sourceUrl ||
    "https://mediumslateblue-seahorse-306408.hostingersite.com/default-og.jpg";
  const url = `https://insonohearing.com/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Insono Hearing",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yourtwitterhandle",
    },
  };
}

// ✅ Page component
export default async function BlogPage(props: BlogPageProps) {
  const { slug } = await props.params; // 👈 FIX: await params
  const post = await getPost(slug);

  if (!post) return <p className="text-center py-10">Post not found</p>;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 pt-24">
      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative w-full h-80 mb-6">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover rounded-md"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {post.author?.node?.name} • {new Date(post.date).toLocaleDateString()}
      </p>
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
