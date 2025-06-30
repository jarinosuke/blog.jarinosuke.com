---
author: "jarinosuke"
pubDatetime: 2022-11-30T09:00:00Z
title: "最近読んだもの11 - アプリの肥大化軽量化、秘匿情報管理など"
slug: "what_i_read_recently_11"
featured: false
draft: false
tags:
  - ios
description: "最近読んだもの11 - アプリの肥大化軽量化、秘匿情報管理などについて"
---
- [Secret Management on iOS](https://nshipster.com/secrets)
	- iOS アプリで情報を秘匿した場合に取りうる方法とその pros/cons まとめ
		- 結構昔の記事だけどまた news letter で流れてきたので改めて読んだ
	- コード内に直接埋め込む、 `.xcconfig` など外部ファイルに入れる、 `GYB` を使ってコード生成する、などが挙げられている
- [When .animation animates more (or less) than it’s supposed to](https://oleb.net/2022/animation-modifier-position/)
	- [.animation()](https://developer.apple.com/documentation/swiftui/view/animation(_:value:)) modifier が nest されている場合に、コントロールが難しいという記事
	- 並列で並ぶ分には期待通りになるが nest されていると難しいらしい
	- 宣言的に書くアニメーションは確かにまた違った難易度
- [Introduction to SwiftUI Modularisation with SPM](https://holyswift.app/introduction-to-swiftui-modularisation-with-spm/)
	- SPM のパッケージ単位でモジュール分割する方法
- [Combining opaque return types with primary associated types](https://www.swiftbysundell.com/articles/opaque-return-types-primary-associated-types/)
	- Swift 5.7 で導入された primary associated type の説明
		- `AnyPublisher` を `some Publisher` に書き換えた時に生じる問題を例に挙げていてわかりやすかった
	- `some` をつけながらも指定されている assoc type を指定することができるようになった
- [Pin a view to the bottom of safe area in SwiftUI](https://nilcoalescing.com/blog/PinAViewToTheBottomOfSafeArea/)
	- テキスト入力フィールドなどで、safe area の bottom に張り付いているような view をどのように作ればいいか
	- [safeAreaInset(edge:alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/view/safeareainset(edge:alignment:spacing:content:)-6gwby) modifier を使うと、使われた view に対して紐づいてくれる
- [How Xcode 14 unintentionally increases app size](https://www.emergetools.com/blog/posts/how-xcode14-unintentionally-increases-app-size)
	- Xcode 14 から Bitcode の設定がデフォルトでOFFになった
	- Bitcodeが元々ONだったプロジェクトの場合は問題なさそう？だが、OFFのプロジェクトの場合は strip の設定が正しくされていないとアプリサイズが増えてしまう問題がある
- [How I made my app 73% lighter](https://sowenjub.me/writes/how-i-made-my-app-73-percent-ligther/)
	- 大きい画像を pdf で xcasset に追加していると、Xcode はそれを @1x として @2x @3x 向けの png を生成するのでアプリサイズが大きくなってしまう