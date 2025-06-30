---
author: "jarinosuke"
pubDatetime: 2020-12-21T09:00:00Z
title: "Resolve storyboard/xib files upgrade diffs at once"
slug: "resolve-ib-files-upgrade-at-once"
featured: false
draft: false
tags:
  - ios
  - dev
description: "Resolve storyboard/xib files upgrade diffs at onceについて"
---
### Storyboard/Xib diffs

If you're an iOS Developer, you might have experience storyboard / xib diffs appeared when you just opened it.

Those interface builder files have some version specification ih those files named `toolsVersion`. It can be modified if Xcode version and it's changed since last time you opened.

And it's noisy because everytime when you opened interface builder files, it'll be modified even if you don't want to modify it.

So, it's better to open and save them on Xcode updates.

Here's how.

### How to open and upgerade Storyboard/Xib files with command line tool

You can use ibtool with xcrun for it. 

Please don't forget that you need to choose `xcode-select` you want to use for update.

```sh
xcrun ibtool --upgrade File.storyboard --write File.storyboard 
```

Further more, it's better to run above script for all interface builder files.

and also run it automatically, such as on CI.

below is sample script.


```sh
find ./your_project_directory -name "*.storyboard" -or -name "*.xib"  |xargs -IFILE xcrun ibtool --upgrade FILE --write FILE
```