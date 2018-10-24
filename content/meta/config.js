const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - Tomislav Babic", // <title>
  shortSiteTitle: "PersonalBlog Tomislav Babic", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "greg lobinski",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "tomislav babic",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - Tomislav Babic",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "tomislavb@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/tomakazoo" },
    { name: "twitter", url: "https://twitter.com/toma9869" },
    { name: "facebook", url: "http://facebook.com/tomislav.babic" }
  ]
};
