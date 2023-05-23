---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
subTitle: ""
description: ""
draft: false
type: stores
price: ""
author: {{ .Site.Params.author}}
categories: ["cate1"]
images: ["null"]
cover:
    position: <left,right>
    image: "null"
    alt: "<alt text>"
    caption: "<text>"
---
