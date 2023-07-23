const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

export const rootUrl = `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
