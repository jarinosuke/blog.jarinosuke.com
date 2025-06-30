---
author: "jarinosuke"
pubDatetime: 2021-01-07T09:00:00Z
title: "Rust をインストールする"
slug: "install-rust"
featured: false
draft: false
tags:
  - rust
description: "Rust をインストールするについて"
---
## インストール

以下のページにあるコマンドを実行する

https://rustup.rs

その時に `nightly` `beta` `stable` を選択するが、M1 Mac の場合は `beta` を選択する必要があった。
しかし以下のように `stable` でも 1.49.0 がリリースされていたので、 もう `stable` を選ぶだけで良い。

```
 stable-aarch64-apple-darwin installed - rustc 1.49.0 (e1884a8e3 2020-12-29)
```

上記の切り替えは `rustup` を使って、以下のように行うことができる。

```
rustup default stable
```

## エディタ

以下のページに各種エディタの Rust サポート状況がまとめられている。

https://areweideyet.com

VS Code が無難そうなので、それを使うことにした。

## ツールチェイン

Rust のツールチェインは、上記の `rustup` がまとめてインストールしてくれる。
具体的には以下で出てくるパッケージ管理に使う `Cargo` などがそれに当たる。
他にも rustc のようなコンパイラもそれに当たると思う。

## パッケージ

プログラムに必要なパッケージは、 `Cargo` と呼ばれるパッケージ管理システムを使ってインストールする。
例えば `cargo-edit` を入れるには

```
cargo add cargo-edit
```

になる。