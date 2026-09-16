/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        // /eidas-timestamp described a tool that does not exist: three steps
        // about uploading a file, hashing it against a qualified Time Stamp
        // Authority and downloading a .tsr, plus WebApplication markup listing
        // those as features. There was no file input on the page and all three
        // buttons opened the contact form. It drew 11 views in twelve months,
        // so nothing was traded away by removing it.
        //
        // /glossary/etimestamp answers the same query honestly. This redirect
        // lives here rather than in netlify.toml, where the one other redirect
        // on this site lives, because a redirect in the framework config can be
        // tested locally before it reaches production.
        source: "/eidas-timestamp",
        destination: "/glossary/etimestamp",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
