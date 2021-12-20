---
title: "Flutter の学習をしている"
date: '2021-07-16T09:00:00.000Z'
---

# Flutter の学習をしている

最初は SwiftUI に関する情報や設計などを見聞きしたりするつもりだったはずだったけれど、
試しに [Flutter](https://flutter.dev) の [State managemennt](https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro) も読んで参考にしてみようと調べ始めたのがきっかけな気がする。

そうしていると色々興味が湧いてきて最近熱心にドキュメントを読んだり、サンプルを clone してきて読んだりしている。
[サンプル](https://github.com/flutter/samples)が豊富なことや、コミュニティが強いこともとても学習に助かっている。

特に YouTube の [flutterdev](https://www.youtube.com/c/flutterdev) はコンテンツの量と質が良くて、良い塩梅でフランクで見やすい時間の尺の動画が多い。
また、これはサンプル程度の小規模のアプリだからの可能性があるが、開発体験がとても良かった。
具体的には [VSCode](https://code.visualstudio.com) と [Flutter](https://flutter.dev) のプラグイン含めた相性が良くて、特にブロッカー無しにスッと取り組めるようになった。
合わせて通常の iOS アプリ開発とは違って、 hot reload が小気味よく動くのも良い。

# 以下は読んだ記事やコンテンツに関するメモ

## 1.はじめに読んだ

[Flutter for iOS developers](https://flutter.dev/docs/get-started/flutter-for/ios-devs)

現行で iOS アプリエンジニアなので、これを読むと大枠が掴めると勘繰って読んだ。
その読みは大体あっていた位の印象。
少し違っていたのは、全体的に UIKit ベースの iOS アプリ開発との比較対象で書かれているので、
SwiftUI のようなモダンな宣言的 UI との比較ではなかった。
結果としてもこれから読むのはファーストステップとしてとても良いと思う。

[Build and release an iOS app](https://flutter.dev/docs/deployment/ios)

ざっと読んだだけだが、 Flutter 特有の便利ビルド設定や配布などは無くて愚直に `Runner` を編集するしか無いのかと思った。

## 2.環境構築

- `brew install flutter`
- `flutter doctor` で足りないものを直す
- VSCode で各種プラグインをインストール

これくらいで開発を始められた

## 3.はじめに手を動かした

[Write your first Flutter app, part 1](https://flutter.dev/docs/get-started/codelab)
[Write Your First Flutter App, part 2](https://codelabs.developers.google.com/codelabs/first-flutter-app-pt2#0)

これらを通して、大まかな単一画面の Widget を用いた画面表示、Stateful/Stateless の違い、などを雑に把握できたと思う。
ここまでくるともう少し細かいことに目がいくようになってきた

## 4.Layout, Interaction

[Building layouts](https://flutter.dev/docs/development/ui/layout/tutorial)
[Adding interactivity to your Flutter app](https://flutter.dev/docs/development/ui/interactive)

レイアウトのコンポーネントの種類や設定の仕方が見えた。
また `Everthing's a widget` と謳っている通り、なんでも Widget として設定するんだなと感じた。(これは state management のところでも感じることになる)

インタラクションの [managing state チュートリアル](https://flutter.dev/docs/development/ui/interactive#managing-state)を通して、 ephemeral な state 的な操作はみれた。
それと同時により画面が広い範囲で扱われるべき app state 的なものはどうなるのかに興味が湧いた。

## 5.State management

いくつか読んだので、コメントは各記事に対してインラインで書く

- [State management](https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro)
  - Ephemeral state / app state という区別が分かりやすくて腹落ちした
  - `ChangeNotifier` `Provider` `Consumer` などいくつかのコンポーネントが出てきて混乱
- [provider_counter](https://github.com/flutter/samples/tree/master/provider_counter) 
  - 簡単めなサンプルがあるのでこれをみて理解を深めた
  - `ChangeNotifier` 自体は flutter の提供
  - `Provider` は別パッケージ、 `InheritedWidget` の wrapper
    - [Provider vs. InheritedWidget](https://stackoverflow.com/questions/57157823/provider-vs-inheritedwidget)
  - `Provider` はオブジェクト作成後、変更の怒らないもので使う
    - DI ぽい
  - `Consumer` は `builder` の部分だけを再描画する
    - `context.watch()` や `context.select()` はその `build()` 全体を再描画
- [provider_shopper](https://github.com/flutter/samples/tree/master/provider_shopper) 
  - こちらはもう少し複雑な通知パターンを説明している

ここくらいまで来て、Widget 間でずいぶん動的に依存のやりとりをしているなと思う。
またその動的にやりとりをしている部分で良く出てくる `context` とは何なのか謎になってくる。
前者に関してはその通りみたいで、最近は `Riverpod` と呼ばれる yet another provider があるよう。
ここら辺の実際の課題感は以下の [hisaichi5518-san](https://twitter.com/hisaichi5518) のブログにまとまっていた。

[providerについての考えと今ならどうするか](https://hisaichi5518.hatenablog.jp/entry/2021/05/29/130000)

後者に関してはちゃんとは理解できていないが、以下の動画が参考になった。

[BuildContext?! | Decoding Flutter](https://www.youtube.com/watch?v=rIaaH87z1-g)

`BuildContext` は `Widget` から生成される `Element` の拡張
`Element` は `Widget` が 1:1 で生成されるもので、実際の画面描画に用いられる
`Element` や `Widget` は ancestor descendant の関係を持っているので、それをたどって取得できているのかな
`Widget` や `Element` に関する概要はこちらの動画も良かった

[How Flutter renders Widgets](https://www.youtube.com/watch?v=996ZgFRENMs)

# 継続する予定

調べること自体が楽しいので、もう少しサンプルやドキュメントなどをみていきたい。
