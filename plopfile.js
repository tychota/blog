"use strict";
const slugify = require("slugify");
const format = require("date-fns/format");
const _ = require("lodash");

// prettier-ignore
const DATE_FORMAT = ["yyyy","-","mm","-","dd","'T'","-","HH",":","MM",":","ss"];

module.exports = function(plop) {
  plop.setHelper("isoDate", function(date) {
    return format(date, "yyyy-MM-dd");
  });
  plop.setPrompt("datetime", require("inquirer-datepicker-prompt"));
  plop.setGenerator("blog-article", {
    description: "Add a blog article",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "What title?",
        validate(answer) {
          if (!answer) return false;
          return true;
        }
      },
      {
        type: "input",
        name: "slug",
        message: "What slug?",
        validate(answer) {
          if (!answer) return false;
          return true;
        },
        default(answers) {
          return slugify(answers.title.toLowerCase());
        }
      },
      {
        type: "datetime",
        name: "date",
        message: "What date?",
        format: DATE_FORMAT,
        validate(answer) {
          if (!answer) return false;
          return true;
        },
        default(answers) {
          return Date.now();
        }
      },
      {
        type: "confirm",
        name: "draft",
        message: "Is it draft?",
        validate(answer) {
          if (!answer) return false;
          return true;
        },
        default(answers) {
          return true;
        }
      },
      {
        type: "input",
        name: "tags",
        message: 'Enter tags separated by ","',
        default(answers) {
          return true;
        },
        validate(answer) {
          if (!answer) return false;
          return true;
        },
        filter(answer) {
          if (!answer) return null;
          return answer.split(",");
        }
        // transformer(answer) {
        //   if (!answer) return "";
        //   if (_.isArray(answer)) return answer;
        //   return answer.split(",").join(" - ");
        // }
      }
    ],
    actions: [
      answers => {
        const dateFormated = format(answers.date, "yyyy-MM-dd");
        console.log(`Creating new blog in ${dateFormated}`);
        console.log(
          answers.title,
          answers.slug,
          answers.date,
          answers.tags,
          answers.draft
        );
      },
      {
        type: "add",
        path: "src/pages/{{isoDate date}}-{{slug}}/index.md",
        templateFile: ".plop/templates/blog-article.md.tpl"
      }
    ]
  });
};
