import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JS MASTERY",
    description: "JS Mastery resources",
    //SEO
    other: {
        "theme-color": "#0d1117",
        "color-scheme": "dark-only",
        "og:url": "memapur.com",
        "og:image": "/psr-logo.png",
        'og:type': 'website',
        "twitter:image": "/psr-logo.png",
        "twitter:card": "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-black-100 font-poppins">
                {children}
            </body>
        </html>
    );
}
