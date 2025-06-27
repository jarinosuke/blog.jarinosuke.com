---
title: "'Build your own text editor in Rust' を読んだ"
description: "'Build your own text editor in Rust' を読んだについて"
pubDate: "2021-04-07T09:00:00.000Z"
heroImage: ""
tags: ["rust"]
---

## 感想

[Hecto: Build your own text editor in Rust](https://www.philippflenker.com/hecto/) を手を動かしながら読んだのでそのメモ。

通して読んでみて総論とても良かった。

今まではチュートリアルや言語概要が主だったが、当初の思惑でもあった実践的な開発をこれを通して感じることができた。

具体的にはエディタというアプリケーションを（ほぼ）スクラッチで作っていく過程で、

学習者に OSS を使って自分のコードを置き換えてもらって便利さを味わってもらったり、

場当たり的な条件式や繰り返しのコードをリファクタリングしていくなど、

実際に即した開発を体感できているように感じた。

ひとまず Rust 学習についてはこれでひと段落させて、少し時間をあけて LeetCode などで Rust を使って行こうかと思っている。

## 読書メモ

以下は読書時メモ

- [kilo](https://viewsourcecode.org/snaptoken/kilo/index.html) という OSS のエディタの Rust 版実装
- [Chapter 1: Setup](https://www.philippflenker.com/hecto-chapter-1/)
    - 特に真新しいことはない
        - `cargo init hecto` しただけ
- [Chapter2: Reading User Input](https://www.philippflenker.com/hecto-chapter-2/)
    - これで標準入力を受け取れる
        ```rust
        use std::io::Read;
        for b in io::stdin().bytes() {}
        ```
    - デフォルトの Rust のバイナリは canonical mode と呼ばれ、標準入力を Enter を押した後に受ける
        - また、終了するときは Ctrl + C などを入れる必要がある
    - エディタで必要なのは raw mode
        - それを実現するための crate がある
            - `termion`
    - Rust では character の場合は single quote
    - `termion` 導入
        - `into_raw_mode` を使って標準出力 `stdout` を取得している
            - なぜ `stdout` が 入力である `stdin` に影響する？
                - Terminal は自身のステートを reader ではなく writer によって管理されているから
                - writer は screen への描画やカーソルの移動に使われている
            - `into_raw_mode` で取得した `stdout` はどこにもアサインされていないのに動くのはなぜ？
                - Rust の所有権 Ownership システムによるもの
                - `_stdout` が存在する限り raw mode が続く
                - `_` をつけることで未使用変数でもコンパイラによる警告がなくなる
    - Observing key presses
        - variable shadowing
            - Rust では同じ変数名を2度定義できる
        - `println!`
            - macro
            - placeholder
                - `{}`
                    - print 可能な string representation を持つオブジェクト向け
                - `{:?}`
                    - 上記以外
            - carriage return
                - `\r`
                - インデントなしで次の行に行ける
                - `println!` が `\n` を入れる前に
        - ASCII code
            - 0-31 と 127 は control character
            - 32-126 がプリント可能
        - page up や page down は3~4byteが出力される
            - escape sequence と呼ばれる
                - 必ず27から始まる
            - backspace が 127
            - enter は 13、 carriage return
            - ctrl + A-Z が 1-26 に割り当てられている
    - Error Handling
        - Rust には try catch はない
        - `panic!` と return value で Result を使う
        - `unwrap` は Ok なら中の value、Err なら `panic!` の sugar syntax
- [Chapter 3: Raw input and output](https://www.philippflenker.com/hecto-chapter-3/)
    - termion を使って stdin に keys を生やせる
        - それを使って `Key::Char` `Key::Ctrl('q")` などで match で分岐する
    - `impl` のなかで `&self` パラメータがない場合はそれは static method になる
    - Rust で read-only property を作るには
        - `pub` を付けずに変数定義して、読み取り用の `pub fn` を作って参照を返すようにするしかない
    - `saturating_add` は結果の値がその型の最大値もしくは最小値を超える場合、その最大最小で返す
    - カーソルを表示・非表示するのに escape sequence を使う
    - `cursor_position` を editor に入れてるのが面白い
        - terminal ではないのは、それが screen ではなく document 内の場所だから
- [Chapter 4: A text viewer](https://www.philippflenker.com/hecto-chapter-4/)
    - `#[derive(Default)]` をつけると、その struct のイニシャライザに `default()` がついてパラメータ初期化を勝手にやってくれる
        - Rust が default を推測できないパラメータを持つ場合、上記の derive は使えない
    - `env::args()` の 0 番目はプログラムの名前、引数の最初は 1
    - マルチバイト文字などを含め、マウスで選択できる1文字のことをGraphemeという
        - https://en.wikipedia.org/wiki/Grapheme
    - grapheme 単位で文字を扱うために `unicode-segmentation` をインストール
    - 時間関連の扱いに、 `std::time::Duration` や `std::time:Instant` がある
- [Chapter 5: A text editor](https://www.philippflenker.com/hecto-chapter-5/)
    - iterator
        - `take` は 0 から at まで
        - `skip` は at から終わりまで
    - `collect` が便利
        - iterator から collection に変換してくれる
    - `Result` 型には `is_ok()` が使える
        - 同様に `Option` には `is_none()` `is_some()` がある
    - `&self.file_name` などへのプロパティの参照は `&` をつける
        - これをしないと所有権がうつらない
    - bool flag を pub にしないで、 is_flag の pub fn として後悔するのは一般的なのかな？
        - read only で pub にできないからかな
    - `clippy::restriction` で lint ぽいことができる
        - exclude するケースも `[allow(clippy::{rule})]` で書く
    - `get_mut` で安全に配列にアクセスすることもできるが、予め index check を行い確実にアクセスすることができるなら冗長になるので直接 `array[index]` でアクセスする
- [Chapter 6: Search](https://www.philippflenker.com/hecto-chapter-6/)
    - `enumerate()` で index と value を取得できるのは Swift と同じだな
    - `Fn` の他にも `FnMut` がある
    - `rfind` は見つけた文字列の後ろから数えた index を返す
    - `PartialEq` は比較できるようにするための trait
- [Chapter 7: Syntax Highlighting](https://www.philippflenker.com/hecto-chapter-7/)
    - 最初は row 内で直接 digit にのみ色を付けて、そのあとリファクタリングする流れ良い
    -