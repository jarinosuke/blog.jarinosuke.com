---
title: "Tour of Rust を読んだ"
date: '2021-02-08T09:00:00.000Z'
tags: ["Rust"]
---

### 感想

この前に[Rustプログラミング入門 を読んだ](../introduction-to-rust-programming)。

そこで Rust の全体像や実際の開発方法については浅くはありながらもキャッチアップできたと思うので、

次はもう少し言語に深く触れてみたいという課題感があり、[Tour of Rust](https://tourofrust.com) をやってみた。

5日くらいかけて一日30分~1時間で全9章を終えることができた。

途中からは日本語訳がないので苦手な人は注意が必要かも。

終わってみての感想としては以前よりは言語に対しての理解が深まった気がする。

特に heap / stack 周りの `Box` を使ったメモリ管理や、Ownership management (dereference) あたり。

とはいえ、これで自分で何かものを作れるかというとまだ自信がないので次は実践的なアプリケーション開発をしてみようと思う。

この [Hecto: Build your own text editor in Rust](https://www.philippflenker.com/hecto/) が良さそうと思っている。

(追記) [Build your own text editor in Rust を読んだ](../build-your-own-text-editor-in-rust) で上記のメモを残した。

### 読書メモ

以下は読書時メモ

- Chapter 1 The Basics
    - 変数の型が違う場合の `as` キーワードある
    - 配列の初期化は `[T; N]`
        - T は型、Nは固定長の長さ
    - 関数の返り値がない場合、空のタプル `()` が返り値となる
- Chapter 2 Basic Control Flow
    - `loop` から値を取り出す、便利
        ```rust
        let v = loop {
          x += 1;
          if x == 13 {
            break "13 を発見";
          }
        };
        ```
    - ブロックの最後に `;` が無い式は、それが戻り値として使用される
    - if 文を三項演算子のように使うこともできる
- Chapter 3 Basic Data Structure Types
    - `struct` はフィールドの集合
        - フィールドとはデータ構造とキーワードを紐付ける値
        - その値はプリミティブな型かデータ構造
        - コンパイラにメモリ上で隣り合うデータの配置を伝える設計図のようなもの
    - メモリ
        - Rust には3種類のメモリ空間がある
        - データメモリ
            - 固定長もしくはライフサイクル中に常に存在するデータを格納
            - プログラム内の文字列キャラクタは読み取り専用なのでここ
            - メモリ上の一は固定かつ知られているので、高速に使用可能
        - スタックメモリ
            - 関数ないで宣言された変数を格納
            - 関数から呼び出されている間はメモリ上の位置は変更されないため速くアクセス可能
        - ヒープメモリ
            - プログラムの実行時に作られるデータ
            - データをヒープメモリに入れることを allocation、削除することを deallocation という
    - タプルを使った構造体も作ることができる
        ```rust
        struct Location(i32, i32);
        ```
    - フィールドを持たない構造体も宣言できる
        - あまり使われない
- Chapter 4 Generics Types
    - Generics
        - struct や enum につけることができる
        - `::<T>` を使う
            - `::<>` を turbofish というらしい、魚に見えるから？
    - Rust には null がない
        - 変数に値がない可能性を意味するため、プログラミングが難しくなる
        - `None` によって代替する
        - `Option` を使うのが一般的
            - Swift ぽい、Swift には `nil` があるけど
    - `main()` で `Result` を返すこともできる
    - Result
        - 強力な `?` 演算子がある
        - 以下の2つは等価
            ```rust
            do_something_that_might_fail()?
                        - ```rust
            match do_something_that_might_fail() {
                Ok(v) => v,
                Err(e) => return Err(e),
            }
            ```
    - unwrap
        - Option / Result にある
            - 値がある場合はその値を、無い場合は `panic!` する
            - 可能な限り `match` を使う
    - Vec
        - 可変サイズのリスト
        - `vec!` マクロを使うと簡単に作れる
        - `Vec` は構造体、内部的にはヒープ上の固定リストへの参照を持っている
        - デフォルトの容量よりも多くの項目が追加された場合、ヒープにより大きな固定長を生成して再割り当てする
- Chapter 5 Ownership & Borrowing Data
    - Rust にはがGarbage Collectionがない
    - C++ではResource Acquisition Is Initializationとも呼ばれる
    - メモリ開放は階層的に行われる
        - 構造体自体がまず消され、その後に子要素が消える
    - 関数の引数に所有者が渡されると、所有権は関数の仮引数にmoveする
    - move後は元の関数内の変数は使用できない
    - 参照を使ってリソースへのアクセスをborrowすることもできる
        - `&` を使う
        - 参照も変数同様消える
    - 変更可能な参照もborrowすることができる
        - `&mut` を使う
        - データ競合を防止す流ため、可変な参照は1つしか持てない
        - `&mut` の参照は `*` 演算子を使って dereference できる
            - 値のコピーも可能
    - 参照は所有者よりも長くは存在してはいけない
        - 存在しないデータへの参照を防ぐ
        - C言語ではダングリングポインタと呼ばれる
    - 参照の一部を参照することも可能
    - 明示的なライフタイム
        - コンパイラは全ての変数のライフタイムを管理している　
        - `'` を関数の引数や戻り値に指定してライフタイムの共有を指定する
- Chapter 6 Text
    - utf-8
        - 可変サイズ 1~4byte
            - 簡単なindexing、例えばstring[3]がO(1)でできなくなってしまった
            - シーケンスを繰り返して見るのでO(N)になる
    - Unicode での文字列の作業が困難なので、Rust では char 型の文字のベクトルにして取得する方法が提供されている
        - char は常に4バイトの長さ
        - Swift のテキスト操作の面倒さもこの辺りからきてるんだろうか？
-  Chapter 7 Object Oriented Programming
    - Rust には inheritance は無い
    - method の最初のパラメータは必ず self への参照になる
        ```rust
        fn get_sound(&self) -> &str
        ```
    - デフォルトだと object のフィールドやメソッドはモジュール内でのみ公開になる
        - モジュール外にも出す場合、 `pub` キーワードをつける
    - polymorphism は trait を使って実現する
        - これは Swift の protocol oriented programming と同じ
        - trait は実装済みの method を持つこともできる
    - trait は他の trait を inherit できる
    - dynamic vs static dispatch
        - static dispatch
            - インスタンスの型がわかってる場合は直接その関数を呼ぶことができる
        - dynamic dispatch
            - インスタンスの型がわからない場合、何が正しい関数なのかを知る必要がある　
        - `&dyn MyTrait` を使うことで引数などで dynamic dispatch が使えるようになる
            - trait object と呼ばれる
                - function へのポインタを持つインスタンスへのポインタ
                - C++では vtable と呼ばれる
    - Generics
        - generics を使うことでコンパイル時に静的に型が付き、static dispatch が可能になる
        - 下のように書ける
            ```rust
            fn my_function<T>(foo: T)
            where
                T:Foo
            {
                ...
            }
            ```

            ```rust
            fn my_function(foo: impl Foo) {
                ...
            }
            ```
        - これも同じ
             ```rust
             struct MyStruct<T>
             where
                 T: MyTrait
             {
                 foo: T
                 ...
             }
             ```
             
             ```rust
             impl<T> MyStruct<T> {
                 ...
             }
             ```
    - Box
        - 格納するデータを stack から heap に移動するための構造体
        - smart pointer と呼ばれるもの
- Chapter 8 Smart Pointers
    - reference は raw pointer に変換できる
        ```rust
        *const T
        ```
    - 型 T への raw pointer、型 T は変わらない
        ```rust
        *mut T
        ```
    - 型 T への raw pointer、Tは変わりうる
    - raw pointer は `unsafe` を使って、実際のデータにアクセスできる
    - Rust の reference は C のポインタに使い方なども似ている
        - ただコンパイル時の制約やどのようにそれが扱われるかなどが見られる
    - Rust の raw pointer も C のポインタに似ている
        - 数字で表現されていて、ポインタの計算などにも使うことができる
    - reference 経由でデータにアクセスしたり変更したりすることを dereferencing と呼ぶ
    - `*` オペレータで reference を dereference する
    - `Copy` trait が実装されている primitive な `i32` 型は、dereference した時にコピーされる
    - `.` オペレータは reference のメソッドやフィールドにアクセスするのに使われる
        - `.` オペレータは連続した reference を自動的に解決する
            ```rust
            let f = Foo { value: 42 };
            let ref_ref_ref_f = &&&f;
            println!("{}", ref_ref_ref_f.value);
            ```
            - `()***ref_ref_ref_f).value` とする必要はない
                - コンパイラが展開してくれる
    - Smart Pointer
        - `*`や `.` でアクセスされた時に(dereference時)に、内部ロジックを加えることとで smart に振る舞わせることができる
        - `Deref` `DerefMut` `Drop` trait を使って実装する
        - `unsafe` は普通の Rust のコードと同じだが、その内部は Rust が安全かどうかは保証できない範囲になっている
            - 例えば i32 の型への reference を、 f32 で dereference するときは unsafe ブロックを付けて展開する
        - 以下2つはどちらも `unsafe` な dereference を raw pointer に行っている
            - `Vec<T>` も smart pointer
                - `vec[3]` は raw pointer を dereference している
            - `String` も同様、コンテンツは常に `utf-8`
                - dereference の際も `&str` にする
        - `Box<dyn std::error::Error>` で汎用的なエラーを返せる
            - error を heap にのせることで型を知ることなく扱うことができる
        - `Rc` も smart pointer
            - stack から heap にデータを移動する
            - `Rc` は immutable reference
            - `Rc` を `clone` することができる、`Rc` が全て drop すると heap に積まれたデータが deallocate される
        - `RefCell` でラップすると mutable/immutable reference を borrow することができる
            - ただし mutable reference は1つ、immutable は複数存在可能。mutable と immutable は同時には存在できない
        - `Mutex` はマルチスレッドの時に用いるコンテナ
            - borrow 時に `lock` をかけることで他のスレッドからはアクセスできなくなる
        - `Arc` は `Rc` のスレッドセーフ用
        - 組み合わせ
            - `Rc<Vec<Foo>>`
                - smart pointer で、同じ `Vec<Foo>` への immutable な reference を borrow したい時に使う
            - `Rc<RefCell<Foo>>`
                - smart pointer で、かつ Foo に対しての mutable/imutable どちらの reference を生成できる
                - 共通参照したい時に便利
            - `Arc<Mutex<Foo>>`
                - スレッド間での mutable/imutable reference を borrow する
- Chapter 9 Project Organization and Structure
    - `foo` というモジュールを作るとき
        - `foo.rs` というファイルを作る
        - `foo` というディレクトリを作って、その中のファイルを `mod.rs` とする
    - inline module
        - unit test で使う
        - そのスコープ内でのみ sub-module が有効になる
    - `pub` キーワード
        - デフォルトだとモジュール内のクラスなどはアクセスできない
        - `pub` を使う
    - `Vec` や `Box` はなぜ `use` を使わずに使えるのか
        - `prelude` モジュール
        - Rust standard library で `std::eprelude::*` に export されているものは自動的に有効になる
        - 自分のライブラリの prelude を作成することも可能

