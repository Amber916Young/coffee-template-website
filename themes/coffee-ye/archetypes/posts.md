
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
subTitle: ""
description: ""
draft: false
featured: true
type: posts
label: "orginal"
author: {{ .Site.Params.author}}
tags: ["tag1"]
categories: ["cate1"]
cover:
    position: <left,right>
    image: "null"
    alt: "<alt text>"
    caption: "<text>"
---
