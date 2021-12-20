#!/bin/bash
today=`date '+%Y-%m-%dT09:00:00.000Z'`
file=$1
cat - << EOS > _posts/$file.md
---
title: "$today"
date: '$today'
---
EOS