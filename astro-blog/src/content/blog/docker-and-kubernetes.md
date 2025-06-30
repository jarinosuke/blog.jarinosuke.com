---
author: jarinosuke
datetime: '2021-04-27T09:00:00.000Z'
title: '''イラストでわかる Docker と Kubernetes'' を読んだ'
slug: docker-and-kubernetes
featured: false
draft: false
tags:
  - docker
description: コンテナ技術とオーケストレーションの基本概念を図解で学んだ実践的な技術書レビュー
---

### 読んだ動機や前提

<a target="_blank"  href="https://www.amazon.co.jp/gp/product/B08PNMRXKN/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B08PNMRXKN&linkCode=as2&tag=jarinosuke-22&linkId=d602065dfe8eead0133a045f4ad964af"><img border="0" src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B08PNMRXKN&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jarinosuke-22" ></a>

<a target="_blank" href="https://www.amazon.co.jp/gp/product/B08PNMRXKN/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B08PNMRXKN&linkCode=as2&tag=jarinosuke-22&linkId=9533f89539259a55c9fb34e2278d32bc">イラストでわかるDockerとKubernetes Software Design plus</a>

予め前提として自分のステータスは以下のような感じ。

- Docker
  - 主に業務のみで使用
  - 用途としても人が書いた `docker-compose.yml` の編集や、 `docker-compose up` を行うのみ
  - VM を良い感じにしたやつ程度の認識
- Kubernetes
  - 聞いたことあるだけ
  - SRE の人達がこれを使っていたので、deploy などに必要なんだろうなという程度の認識
    - YAML で色々管理されていそう

業務でも手元でのローカル開発などで使う頻度が増えて、ひとまず浅く理解したいという課題感があった。

その中で知人が [blog](https://please-sleep.cou929.nu/docker-kubenetes-book.html) で勧めていたので読んでみた。

### 感想

主に Docker に関する理解が進んだ。逆に Kubernetes に関しては利用経験も無いのもあってか、概要のみの理解にとどまった。

Docker に関しては `第1章 コンテナ技術の概要` と `第2章 Dockerの概要` によって理解が進んだように感じる。

- 仮想マシンとコンテナの違い
  - 軽量な実行環境
  - ポータビリティ
- ワークフロー
  - Build
    - `Dockerfile` を元にした `docker build` 
  - Ship
    - レジストリへのアップロード、登録
  - Run
- コンテナのレイヤー構造
  - キャッシュも効く
  - 読み書き可能レイヤーや Copy on Write のところは面白かった

Kubernetes に関しては以下のような理解になった。

- YAML を用いて宣言的にコンテナを管理できる
- 上記を使って便利に deploy もしくは revert などもできる
- Node, Pod, Cluster などいくつかの概念がある
  - ラベリングなどができて、便利な deploy が可能
- DB など永続化が必要なものは stateful にもできる

実際に使ったことが無いので、大枠の概念は理解できたが詳細な仕組みや使い方などはまだ理解が追いついていない。
