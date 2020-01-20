module.exports = {
  title: "Virgo",
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/6138116/6232012/css/fonts.css"
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
            id: "story", // Unique ID of current classification
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
