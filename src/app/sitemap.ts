import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { graphQLClient, GET_POSTS } from "@/lib/graphql";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://insonohearing.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes: MetadataRoute.Sitemap = [
        // Core pages
        { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
        { url: `${BASE_URL}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/appointment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/testimonial`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/awards`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

        // High-value commercial pages
        { url: `${BASE_URL}/hearing-aid-price`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/our-clinic`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/product`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },

        // Hearing aid brand pages
        { url: `${BASE_URL}/hearing-aids/signia`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/hearing-aids/phonak`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/hearing-aids/widex`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/hearing-aids/oticon`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },

        // Hearing aid type pages
        { url: `${BASE_URL}/hearing-aids/ric`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hearing-aids/bte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hearing-aids/ite`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hearing-aids/itc`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hearing-aids/cic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hearing-aids/iic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hearing-aids/invisible`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/hearing-aids/bluetooth`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hearing-aids/rechargeable`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

        // Clinic location pages
        { url: `${BASE_URL}/our-clinic/andheri-mumbai`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ];

    // Fetch dynamic products from Prisma
    try {
        const products = await prisma.product.findMany({
            select: { slug: true, updatedAt: true },
        });

        products.forEach((product: { slug: string; updatedAt: Date }) => {
            routes.push({
                url: `${BASE_URL}/product/${product.slug}`,
                lastModified: product.updatedAt,
                changeFrequency: "weekly",
                priority: 0.8,
            });
        });
    } catch (error) {
        console.error("Failed to fetch products for sitemap", error);
    }

    // Fetch blogs from WordPress GraphQL
    try {
        const data: any = await graphQLClient.request(GET_POSTS);
        const posts = data?.posts?.nodes || [];

        posts.forEach((post: any) => {
            routes.push({
                url: `${BASE_URL}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: "monthly",
                priority: 0.7,
            });
        });
    } catch (error) {
        console.error("Failed to fetch blogs for sitemap", error);
    }

    return routes;
}
