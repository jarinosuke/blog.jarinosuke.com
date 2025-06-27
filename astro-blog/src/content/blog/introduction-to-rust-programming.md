---
title: "'Rustプログラミング入門' を読んだ"
description: "'Rustプログラミング入門' を読んだについて"
pubDate: "2021-02-02T09:00:00.000Z"
heroImage: ""
tags: ["rust"]
---

![](/assets/blog/introduction-to-rust-programming/introduction-to-rust-programming.png)

### 読んだ動機

個人で Rust を使って何か作ってみたいというのと、普段の業務とは別の言語を触ってみて何が良いのか学んでおきたいというのが主な動機だったかなと思う。

前提として1年以上前に <a target="_blank" href="https://www.amazon.co.jp/gp/product/4873118557/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873118557&linkCode=as2&tag=jarinosuke-22&linkId=a85e2244c56b38bb36bbd8a3ee744a2a">プログラミングRust</a> は読んだことがあったけれど、モチベーションが続かず途中で読むのをやめてしまっている。

なので、今回はもう少し実践的で手を動かしながら挑戦してみたいと思っていたところに、タイトルにもある以下のほんの評判を聞き手にとってみた。



<a target="_blank" href="https://www.amazon.co.jp/gp/product/4798061700/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4798061700&linkCode=as2&tag=jarinosuke-22&linkId=e5d5cc097b1a3043442edf85e7823933">実践Rustプログラミング入門</a>

### 本の概要

この本は Rust の概要から始まり、言語仕様や周辺のツールチェーンの紹介まで書かれており、これらで1/3ほど使われていた。

その後の1/3ほどで実際のアプリケーションの開発を行う。

- 簡単な TODO 管理を行う Web アプリ
- WebAssembly を使った Web アプリ
- GUI ネイティブアプリ
- 組み込み開発

個人的にこれらの実際のアプリケーション開発はとてもありがたかった。

実際に開発で使う場合に、どんな crate を使うのが良いかなどは初心者にとってはなかなか掴み所が難しかったりするので。

残りの1/3では追加のツールチェーンの紹介や、Rust を扱う上での Tips の紹介などにあてられていた。

### 感想

いくつか実行できていないサンプルもある（手元の環境がM1 Macというのが理由かもしれない）が、一通り通して読んでみての印象。

作業は以下の repos で行っていた。

https://github.com/jarinosuke/rust-programming-introduction

別言語の経験が一定ある人向けの本だなと感じた。そのような対象者が Rust を浅く理解して色々なアプリケーションを動かして、達成感を味わえるのにとても有用だと思った。

逆にプログラミング未経験でこれから Rust でプログラミングを勉強したいという対象者にとっては、以下の点から身にならないだろうなと感じた。

- 言語仕様の説明など始め、全体的に意図的に深くは作られてはいないので、表面を理解して終わりになってしまう
- アプリケーション開発についても、色々サンプルを動かして終わりになってしまい、一つを改善や深掘りして機能追加などはできない

なので一定の経験者の人がこれをファーストステップにして全体像を掴み、より言語の深さを学んだり、より専門的な一つのアプリケーション開発に入っていくのが良いのではないかなと思った。

個人的に次は [Writing an OS in Rust](https://os.phil-opp.com/) をやってみようかと思ったが、ざっと目次を読んでみたら少し早そうだったので [Tour of Rust](https://tourofrust.com/00_en.html) を一度やってからまた考えたい。

### 読書メモ

- Chapter 1 
    - [Writing an OS in Rust](https://os.phil-opp.com/) がおすすめされていた
    - [The Adventures of OS: Making a RISC-V Operating System using Rust](http://osblog.stephenmarz.com/index.html) も面白そう
- Chapter 2
    - install
        - [Rust をインストールする](install-rust)
    - パッケージ関連
        - rls
            - Rust Language Server 
            - Language Server Protocol の Rust 用実装
                - Swift もあった https://github.com/apple/sourcekit-lsp
        - rust-analyzer
            - rls に代わる新しい Language Server Protocol 実装
        - rustup component add でインストール
        - cargo-edit
            - toml 編集用のもの
            - これは `cargo install cargo-edit` でインストール
    - リリーストレインモデル
        - nightly, beta, stable
- Chapter 3
    - Rust には二つの重要ライブラリがある
        - コアライブラリ
            - 他のシステムやアーキテクチャに依存しない根幹
        - 標準ライブラリ
            - std
            - 便利なものが入っている Option や Result など
    - 文字列型
        - str
            - コアライブラリが提供
            - 文字列スライスと呼ばれる
                - 文字列自体を変更することはできない
                - 始まりと文字列長を持っているだけ
                - `&str` などで参照して文字列を取得する
        - String
            - 標準ライブラリが提供
        - String -> str は参照を渡すだけになる
        - str -> String はメモリの確保が必要
    - Option
        - Swift でいう Optional
    - Result
        - Swift でも Result
        - 色々 operator があって便利な印象
    - Vector
        - 配列とはちがい、要素数を初期化時にfixさせる必要がない
        - 要素の外にアクセスすると `panic!` を起こす
            - 起こしたくない時は `get()` を使うと `None` を返すようになる
    - Box
        - メモリ heap 領域を扱う
        - コンパイル時にサイズがわからない配列に有効
        - heap 領域に任意の型をおき、それへの参照ポインタをスタックに持つ
        - 普通の配列も Box で包まないとコンパイルできないの strict だな
    - const と static
        - const は常に変更不可
            - ビルド時に実際の値に置き換えられる
        - static は可能
            - どこからでも変更可能になるため、危険
            - unsafe ブロックに入れて操作しないといけない
            - lazy_static の方がおすすめ
    - 制御構文
        - if
            - if は式でもあるので、3項演算子ぽく変数に対して式をかけるの面白い
        - Loop
            - while true のような時に使う、内部で必ず break する必要あり
        - While, For については普通
        - match
            - C の switch のようなもの
                - より強力でパターンを case に記述できる
            - 最後のワイルドカード _ が default、マッチしなかった場合はここに入る 
    - Range, Iterator
        - Swift に似てる
    - 関数
        - fn
            - semi-colon 抜きだと return になる
                - 少しわかりづらい
        - impl
            - struct にはデータ構造の定義、impl にメソッドを書く
            - 引数に&selfをつけない場合、それは関連変数の定義になりクラスメソッドのようなものになる
            - 返り値に &Self をつけると、メソッドチェーンが書ける
    - マクロ
        - 2種類ある
            - 関数のように使えるマクロ
            - `#[derive]` アトリビュートのマクロ
        - 呼び出しには!がつく
    - Trait の導出
        - Swift でいう Protocol への準拠のようなものだと思う
        - Eq と PartialEq の話が面白かった
    - ゼロコスト抽象化
        - trait と dyn
            - メソッド呼び出しには動的と静的 dispatch がある
                - 静的はコンパイル時に呼び出すインスタンスの型がわかっている場合
            - Rust では基本的には静的だが、呼び出されるインスタンスがわからない場合は dyn をつけて動的にする
            - marker trait / generics
                - Swift と同じ
    - 所有権と借用、ライフタイム
        - 変数が所有権を持つ
        -  = はムーブセマンティクス
            - C++ など一般的な言語はコピーセマンティクス
                - Rust でも i32 などプリミティブなものはコピー
        - 借用
            - 値の参照を渡すこと
            - 一度に渡せる数は1つ
            - 可変な参照
                - &mut
                - 可変と不変を同時に渡すことはできない
            - 不変な参照
                - 不変だけなら何個でも渡せる
        - ライフタイムの決定
            - 参照が生きている期間と値が生きている期間をもとに決められる
    - マルチスレッド
        - `thread::spawn`
    - 共有メモリ
        - スレッド間で値を共有するための型が色々ある
            - Rc/Arc
                - 参照カウンタ
                - Arc はマルチスレッド用のもの
            - Mutex
                - ロック機構がついている
    - async await
        - 非同期プログラミングとは
            - Apache と nginx や node の比較が面白かった
                - C10X 問題
                    - 接続数が1万を超えると、プロセスの割り当てが難しくなってきてしまう
                - イベント駆動
        - Future
            - 将来のどこかの時点で処理が完了するタスク
            - Rust では Future トレイトを実装した値を返り値に渡すことで、非同期ランタイムに渡った時点で処理タイミングが制御されることになる
                - 非同期ランタイム
                    - Future の実行タイミングを制御し、必要なタイミングで処理を実行する
            - async
                - 上記のFutureトレイトを返り値に持つ関数を、通常の関数と同様に記述できる構文
                - impl Future のシュガーシンタックス
                    - impl Future を返り値にしたい時は async の方がいい
            - await
                - async で実装された関数の処理結果を受け取るひつ帳があるタイミングを記述する構文
                - await は async の中でのみ呼び出せる
            - move
                - async 外の変数の所有権をうつす
                - swift の closure での capture みたいなもの？
        - 非同期ランタイム
            - tokio
                - 初期からある非同期ライブラリ
                    - HTTP を扱う hyper や warp といったクレートも依存している
            - async-std
                - tokio の内部実装やAPIが複雑なのを解消し東洋ちうモチベーションで最近出てきた
                - HTTP サーバの tide や HTTP クライアントの surf などのクレートがベースにしている
            - async-trait
                - Rust では現状 trait 関数に async をつけることができない
                - `cargo add async-trait` を実行して以下のマクロを trait につけることで可能になる
                    - `#[async0_trait]`
    - クレートとモジュール
        - クレートはパッケージやライブラリ相当
            - Ruby でいう gem
        - モジュールはクレートより小さい単位
            - 特定の処理を行うソースコード
        - モジュールの作成
    - テスト
        - ドキュメントもテストできるのとても便利
- Chapter 4
    - 引数の扱い
        - `std::env` があるが、これだと引数を順番に `Vector<String>` で取得するだけ
            - なので引数の順番の変更などに対応できない
        - サードパーティの `clap` がある
    - テスト
        - 単体テスト書くの簡単
            - derive などでテスト指定ができる
    - エラー処理
        - 全体的に Swift の try と似ている
        - Result<T, E> に対しての ? が便利
            - Ok なら T を返して続行、Err なら Err(E) で早期リターン
        -  クレートがある
            - anyhow thiserror
        - anyhow は独自のエラー型でラップしてしまうので、個人的には thiserror がいいなと思った
    - ファイルパスの扱い
        - 今までのサンプルだと String で扱っていた
        - 本来は以下で扱うべき
            - `std::path::Path` `std::path::PathBuf`
            - OS ごとのパス表現や Rust 内での文字列表現の間を取り持ってくれる
            - マルチプラットフォームには必須
    - Rust の文字列型
        - たくさんある
        - 暗黙的な型変換を Rust は許さない
            - なので変換に失敗する可能性を常に考慮してエラー処理する必要がある
        - OsString はプラットフォームによって文字列のエンコードが違う場合などを考慮し抽象化されている
            - 例えば Windows のファイルパスは UTF-16 など
            - PathBuf はこれを使っている
- Chapter5
    - Webフレームワーク
        - actix-web が広く使われている
        - actix-rt は非同期処理用
        - テンプレートのHTMLを書くのがだるかった
    - データベース
        - rusqliteというシンプルなクエリ実行のためのSQLiteを使った
        - r2d2 はコネクションプール
            - sqlite 以外でも使う
        - diesel という SQL ライブラリがおすすめ
            - スキーマファイルから型付クラスを生成するツールも配布されている
            - テーブル定義をマクロを使っても書ける
    - Docker
        - イメージサイズを減らしていく過程が面白かった
            - rust イメージには他のツールチェーンなども入っているので1GBとかになってしまう
            - ベースは debian なので、最終的なイメージには debian にバイナリだけあればいい
- Chapter6
    - `cargo-generate`
        - テンプレートを元にプロジェクトを作成できる
    - wasm-pack
        - Rust から wasm ビルドの作成や npm との結合まで行ってくれる
    - wasm-bindgen
        - Rust と JavaScript の双方向の呼び出しを型付で生成してくれる
- Chapter7
    - GUIクレート
        - GTK
            - cross platform の GUI バインディング
            - GTK自体もともとあるので実績あり
            - ただ大きい
        - iced
            - シンプル + 型安全
            - 全て Rust で実装されている
                - wasm でも使える
        - Conrod
            - Rust ゲームエンジンの Piston が開発
        - imgui-rs
            - Cで実装されているDear ImGuiというOpenGLのGUIライブラリのバインディング
    - Iced
        - Elm Architecture
        - 非同期処理
            - Command
                - ボタン押下後に非同期で何かしたい時
            - Subscription
                - アプリケーション側から非同期でイベントを送りたい時
    - サンプルが動かなかったのでここからは読んだだけ
    - derive を付ける場合と trait を付けるのの使い分けってなんなんだろう
- Chapter8
    - Rust でのクロスコンパイル環境
        - エミュレータもある
    - Dockerを使ってQEMUのエミュレータをインストール
    - `docker run` が動かないので中止
- Chapter 9
    - ディレクトリ構成
        - `src/bin` 配下に `*.rs` があればその bin ファイルがビルドされる
            - また `dir/main.rs` を作ると dir という bin が作成される
        - `tests` 配下にディレクトリを作ると cargo test で指定できるようになる
        - `examples` 
            - cargo run --example で実行できる
    - フィーチャ
        - 少数の人のみ使う機能についてはフィーチャとして提供することで、バイナリサイズが削減できる
    - formatter
        - `rustfmt` がデフォルトであって、`cargo fmt` で実行できる
    - linter
        - `clippy` が標準 `cargo clippy` で実行
    - code coverage
        - cargo-tarpaulin という Rust で作られたツールがある
    - benchmark
        - `cargo bench` がある、今は nightly だけ
    - CI
        - Travis CI ではサポートされている
        - GitHub Actions でも盛り上がってきてる
- Chapter 10
    - シングルバイナリ
        - Ubuntu でビルドしたものが CentOS で動かないなど
        - `musl` というツールを使って静的バイナリにする
            - libc 以外にも依存している場合は以下の Docker コンテナを使う
                - `rust-musl-builder`
                - 
        - Rust でも Swift iOS 開発と似たような問題あるんだな
- 以降ザーッと流し読みして終了