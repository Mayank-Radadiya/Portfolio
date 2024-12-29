import url from "@rollup/plugin-url";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    url({
      include: ["**/*.svg"], // Ensure SVG files are included
      limit: 0, // Set limit to 0 to import the file as a URL
    }),
  ],
};
