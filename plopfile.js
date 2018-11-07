"use strict";
const slugify = require("slugify");
const format = require("date-fns/format");
const _ = require("lodash");
const chalk = require("chalk");

// prettier-ignore
const DATE_FORMAT = ["yyyy","-","mm","-","dd","'T'","-","HH",":","MM",":","ss"];

module.exports = function(plop) {
  plop.setHelper("isoDateShort", function(date) {
    return format(date, "yyyy-MM-dd");
  });
  plop.setHelper("isoDate", function(date) {
    return date.toISOString();
  });
  plop.setHelper("arrayStringify", function(array) {
    return `[${array
      .filter(Boolean)
      .map(a => '"' + a + '"')
      .join(",")}]`;
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
        },
        transformer(answer) {
          if (!answer) return "";
          if (_.isArray(answer)) return answer;
          return answer.split(",").join(" - ");
        }
      }
    ],
    actions: [
      answers => {
        const dateFormated = format(answers.date, "yyyy-MM-dd");
        console.log(
          chalk.blue(
            `Creating new blog in ${chalk.bold.underline.blue(dateFormated)}`
          )
        );
        console.log(
          chalk.blue(`  -> title:   ${chalk.bold.blue(answers.title)}`)
        );
        console.log(
          chalk.blue(`  -> slug:    ${chalk.bold.blue(answers.slug)}`)
        );
        console.log(
          chalk.blue(`  -> isDraft: ${chalk.bold.blue(answers.draft)}`)
        );
        console.log(
          chalk.blue(`  -> tags:    ${chalk.bold.blue(answers.tags)}`)
        );
        console.log(
          chalk.blue(`  -> date:    ${chalk.bold.blue(answers.date)}`)
        );
      },
      {
        type: "add",
        path: "src/pages/{{isoDateShort date}}-{{ slug }}/index.md",
        templateFile: ".plop/templates/blog-article.md.tpl"
      }
    ]
  });
};
