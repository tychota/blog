---
path: "/handle-errors-in-functional-way"
date: "2019-03-01T17:35:56.448Z"
draft: true
title: "Handle errors in functional way"
tags: ["functional", "typescript", "error", "monad", "either"]
excerpt: ""
---

# Disclaimer

Before starting this article, I must state two things:

- first, I don't have any background in functional programming. I mean both my parent are math teacher in high scool and my brother is doing math research but as for me, I really lack theorical knowledge about the theory behind functional programming. I wouldn't be even to define what a `group` is so don't let me speak about `category` theory: it will be surely incorrect,
- all above are suggestion, ie. one way to look at the problem and completly hypothetic. Weither it will happen in reality or not is not defined and I'm completly aware that it come with a cost (formation)

# Problem

At my startup, we strongly follow "Lean" principle in order to solve a problem.

Every problem starts with two things:

- an indicator showing what is the potential of improvement. If the problem does not have a big impact, it will be better to focus on something else,
- some real word example (also named "pieces" in reference of real pieces of a car), that are defectuous or not. The goal is to study th
