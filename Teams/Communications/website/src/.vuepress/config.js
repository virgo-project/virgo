module.exports = {
  title: "Better coordination to solve the world's greatest challenges - Virgo",
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/fonts.css"
      }
    ],
    [
      "link",
      { rel: "shortcut icon", type: "image/png", href: "/logo-white.png" }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-51029217-9"
      }
    ],
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "Stories", // Unique ID of current classification
            dirname: "_stories", // Target directory
            path: "/stories/", // Path of the blog
            layout: "Stories",
            itemLayout: "Story",
            itemPermalink: "/stories/:slug"
          }
        ]
      }
    ]
  ]
};
