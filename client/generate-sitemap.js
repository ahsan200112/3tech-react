const fs = require("fs");
const path = require("path");
const { SitemapStream } = require("sitemap");
const streamToPromise = require("stream-to-promise");  // <-- Add this import

// Array of your routes (updated with your 3Tech website routes)
const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/login", changefreq: "monthly", priority: 1.0 },
  { url: "/signup", changefreq: "monthly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/packages", changefreq: "monthly", priority: 0.8 },
  { url: "/blogs", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/creativedesign", changefreq: "monthly", priority: 0.7 },
  { url: "/digitaloptimization", changefreq: "monthly", priority: 0.7 },
  { url: "/ecommercesolutions", changefreq: "monthly", priority: 0.7 },
  { url: "/marketingsolutions", changefreq: "monthly", priority: 0.7 },
  { url: "/mobileapplications", changefreq: "monthly", priority: 0.7 },
  { url: "/privacypolicy", changefreq: "monthly", priority: 0.5 },
  { url: "/termsandconditions", changefreq: "monthly", priority: 0.5 },
  { url: "/thankyou", changefreq: "monthly", priority: 0.5 },
];

(async () => {
  // Initialize the sitemap stream
  const sitemap = new SitemapStream({ hostname: "https://3tech.sa" });

  // Write each link to the sitemap
  for (const link of links) {
    sitemap.write(link);
  }

  sitemap.end(); // Close the stream

  // Convert sitemap to XML and save it to public folder
  const xml = await streamToPromise(sitemap);

  fs.writeFileSync(
    path.resolve(__dirname, "public", "sitemap.xml"),
    xml.toString()
  );

  console.log("✅ Sitemap generated at public/sitemap.xml");
})();
