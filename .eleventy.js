const { DateTime } = require("luxon");
const { JSDOM } = require("jsdom");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/main.js");
    
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addCollection("pages", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/sections/*.md").sort((a, b) => a.data.order - b.data.order);
    });

    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

    const { DateTime } = require("luxon");

    eleventyConfig.addFilter("date", (dateInput, format = "yyyy-MM-dd") => {
        if (!dateInput) return "Invalid date";

        if (dateInput instanceof Date) {
            return DateTime.fromJSDate(dateInput).toFormat(format);
        }

        if (typeof dateInput === "string") {
            let dt = DateTime.fromFormat(dateInput, "yyyy-MM-dd");
            return dt.isValid ? dt.toFormat(format) : "Invalid date";
        }

        return "Invalid date";
    });


    eleventyConfig.addTransform("lazyloadImages", function (content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            const dom = new JSDOM(content);
            const images = dom.window.document.querySelectorAll("img");

            images.forEach((img) => {
                if (!img.hasAttribute("loading")) {
                    img.setAttribute("loading", "lazy");
                }
            });

            return dom.serialize();
        }
        return content;
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        templateFormats: ["md", "njk"]
    };
};
