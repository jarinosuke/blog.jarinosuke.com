---
author: jarinosuke
datetime: '2020-03-05T09:00:00.000Z'
title: ‘A Philosophy of Software Design’ を読んだ
slug: a-philosophy-of-software-design
featured: false
draft: false
tags:
  - reading
  - software design
description: 実用的なソフトウェア設計原則と複雑性管理に関する技術書籍レビュー
---

## A Philosophy of Software Design

Kindle だと 1000 円ちょっとで買えた。
Comment に関する Chapter は飛ばしたが、ざっと全部読んだ。
英語も平易な感じなので苦労せず読めた。


<a target="_blank" href="https://www.amazon.co.jp/gp/product/1732102201/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=1732102201&linkCode=as2&tag=jarinosuke-22&linkId=7d3bdbdf6ae038b851379fc89c8a395d">A Philosophy of Software Design</a>


内容を簡単に説明すると

- Complexity とは何か
- Complexity を最小化する大きな2つのアプローチ
    - その2つについての具体的な複数手法(Design Principles)についての説明
    - Complexity 増加の原因となりうる red flag

と、全体を通して Complextity と戦う話になっていた。

この本は code review や architecture design を複数人で行うときなどに revisit すると良いと思った。

テキストエディタの設計などもあり、かなり具体的な例も豊富だった。

ちなみに最近ななめ読みした Clean Architecture 本とも Complexitiy はじめ繋がるところが結構あった。


<a target="_blank" href="https://www.amazon.co.jp/gp/product/4048930656/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4048930656&linkCode=as2&tag=jarinosuke-22&linkId=e0275adb45c998a6c6740630d081eea9">Clean Architecture 達人に学ぶソフトウェアの構造と設計</a>

## Complexity とは

この本には Complexity の定義として以下のように書かれている。

> Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system.

合わせて、測定するための目安として以下のような数式も用いられていた。

![](/assets/blog/a-philosophy-of-software-design/formula.png)

> The overall complexity of a system (C) is determined by the complexity of each part p (cp) weighted by the fraction of time developers spend working on that part (tp).

システム全体の Complexity = システム内の各パーツの Complexity * そのパーツに開発者が費やす時間

というもの

## Complexity 最小化への大きな2つのアプローチ

以下の2つが挙げられている


> The first approach is to eliminate complexity by making code simpler and more obvious.

> The second approach to complexity is to encapsulate it, so that programmers can work on a system without being exposed to all of its complexity at once. 

-  コードの単純化、より明確にすること
- Complexity をカプセル化してプログラマがそれに触れることなく開発できるようにすること

僕の認識だと、前者はシグマ内の (cp) を、後者は (tp) を減らすものだと思った

## Complexity の兆候

Complexity の定義は上記のとおりだが、具体的にどういったことが起きると Complexity が高いか、についても以下の主に3つの視点から書かれている

- <b>Change amplification</b>
- <b>Cognitive load</b>
- <b>Unknown unknowns</b>

1つの修正を行うために様々な箇所を修正しないといけなかったり、1つの修正を行うために色々と前提として知ることが多すぎる状態だったり、そもそも何が分からないか分からない状態といった具合。文字だけみても最後のが最悪な状態なのが分かる

## Design Principles & Red Flags

この本では、上記で話した Complexity に対してのアクションとしての Design Principles を十数個挙げてその中で具体例を用いて解説している。

またその中で Red Flags も合わせて十数個解説してくれていて、どのような Design/Architecture が Complexity を招きうるか、を示してくれていてとても分かりやすい。

いくつか挙げることもできるが、タイトルだけ聞くと「そうですね」で終わったしまう可能性あるので、実際に具体例交えて本を読むのが良いと思う。
