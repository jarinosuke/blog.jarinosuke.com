---
author: jarinosuke
datetime: '2026-04-04'
title: "ゲーミングPCを組んだ 2026"
slug: "built-a-gaming-pc-2026"
featured: true
draft: false
tags:
  - gaming
description: "ゲーミングPCを組んだ 2026年版"
---

5年前に[2021年にゲーミングPCを組んだ](/blog/built-a-gaming-pc)。

まだこのPC自体は現役ではあったが、最近の重量級のゲーム(例えばExpedition 33など)だと不満が出ることが多くなってきた。

それに合わせて2025年末から急に始まった、未だ終わりの見えないメモリとSSDの高騰。

意を決して（それでも遅かったが）2026年に入ってから急いでパーツの確保をして組んだ。

## 部品

前提としてまた5年程度使いたいと思って新しく組んでいる。

ただ、今回選んだ5070tiで5年だと若干怪しい気もしているので、

いざという時により強いGPUにも置き換え可能なようにある程度他のパーツは余裕のあるものにした。

![](/assets/blog/built-a-gaming-pc-2026/pc_parts_2026.jpeg)

### PC Case

[Fractal Design North XL](https://amzn.asia/d/0cDegR5t)

5090など将来大きめのカードも刺さるようにケースを大きくしておいた。

本当に大きいので注意、ただエアフロー的な観点だといい気もしている。

### Motherboard

[MSI MPG X870E CARBON WIFI X870E](https://amzn.asia/d/04V7uFW8)

それなりに良い、不便のなさそうなもので MSI でなるべく揃えたくて選んだ。

WiFi7対応なルータを最近導入して、それに対応してる点がまず良かった。

今回選んだグラボは PCIe 4.0 なので恩恵はないけど、マザボは PCIe 5.0 対応なので将来的にはいい。

メモリスロットも DDR5 対応なのも大きそう、ただ後述するメモリ価格高騰の煽りも同時に受けた。

### CPU

[AMD CPU Ryzen 7 9800X3D](https://amzn.asia/d/0dL2Af7W)

CPU は定評のある 9800X3D にした。

### CPU Cooler

[ACFRE00180A/LFⅢPRO360-BK](https://amzn.asia/d/0h7jY7wC)

CPU Cooler は結構悩んだ。あまりピカピカしたものに今回はしたくなかったのと、

前回の組み立てで水冷で苦労した記憶があるので、今回は空冷にしようか悩んだ。

今回選んだ ARCTIC Liquid Freezer III Pro 360 は水冷。

冷却性能で評判がある（ただその分うるさいのと、ラジエータが分厚い）のと、配線がなんと一本で済むという手軽さで選んだ。

### Memory

[Acer Predator Vesta Ⅱ DDR5 6000MHz](https://amzn.asia/d/02nIUFbb)

メモリは今回なるべく良いものを選べた（ただその分値段も高かった）。

当初はコスト面から16GBの2枚差しにしようかと考えていたけど、それでもそれなりにコストかかるのと、

後から32GBの2枚差しにする場合に元のコストが勿体無いのであらかじめ64GBにした。

6000MHzの2枚差し使ってるので、しっかりデュアルチャンネルの転送効率を得たかった。

### GPU

[MSI GeForce RTX 5070 Ti 16G VENTUS 3X OC](https://amzn.asia/d/0bBKR0az)

現状はWQHDのディスプレイを使ってるので、ゲームで言うとここまでの性能も要らなかったけど買って正解。

最近のゲームでもDLSS4の恩恵もあってとても快適に遊べている、ゆくゆくは4Kモニタに新調して性能を見たい。

### SSD

[Samsung 9100 PRO 2TB PCIe Gen 5.0](https://amzn.asia/d/0i6pfft0)

SSDは上記のものを買った、今ドスパラで見ると当時の倍くらいの値段になっていた。

https://www.dospara.co.jp/SBR1144/IC523801.html

[WD_BLACK 2TB SN7100 Gen 4](https://amzn.asia/d/04RpENjm)

合わせて上記のWDのものも値上げ前（といっても十分高かった）も買えたので、2枚差しで贅沢に使っている。

### PSU

[MSI MAG A1250GL PCIE5](https://amzn.asia/d/0dyAe55A)

電源も将来の5090などを見越して大きいものにしている。

## 振り返り

まず5年前に組んだ時と比べて、自分の慣れも多少あると思うけどかなり簡単に組み上げられた。

そして今回は最近話題のAI関連の開発もしたかったので、WSL2を使ってちゃんと開発環境を整えた。

この辺りはまた別で書くとして、WSL2 での開発は VSCode + Remote + Dev Containers とか使うとかなり快適。

ゲーム用途ももちろんとても良い、最新でもないのであれだけど AC Shadows を少し触ってるけど本当に綺麗 + ヌルヌルで目の保養になっている。