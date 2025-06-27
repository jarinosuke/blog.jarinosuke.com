---
title: "最近読んだもの8 - Swift Concurrency、 Swifty CLI など"
description: "最近読んだもの8 - Swift Concurrency、 Swifty CLI などについて"
pubDate: "2022-11-07T09:00:00.000Z"
heroImage: ""
tags: ["ios"]
---

- [Presenting Sheets: Item, or a Boolean Binding?](https://www.swiftjectivec.com/SwiftUI-sheet-present-item-vs-toggle/)
	- List 内のコンテンツを sheet などで表示する場合、[sheet(isPresented:onDismiss:content:)](https://developer.apple.com/documentation/SwiftUI/View/sheet(isPresented:onDismiss:content:)) よりも [sheet(item:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/sheet(item:ondismiss:content:)) の方が管理する State が減るので良いという話
- [Create a Card with an Image Outside its Bounds in SwiftUI](https://holyswift.app/create-a-card-with-an-image-outside-its-bounds-in-swiftui/)
	- ある `View` の中の `View` を一部はみ出させて表示したい場合 SwiftUI でどうやるのかの話
	- UIKit であれば bounds ベースでレイアウトを組んで実現できた
	- SwiftUI だと以下の2つの方法が主に挙げられていた
		- `ZStack` でラップする
			- この content 内で padding をうまいこと指定する
		- [overlay(alignment:content:)](https://developer.apple.com/documentation/swiftui/view/overlay(alignment:content:)) modifier を使う
			- overlay modifier の content 内ではみ出させる View を扱う
- [Swift Concurrency – Things They Don’t Tell You](https://wojciechkulik.pl/ios/swift-concurrency-things-they-dont-tell-you)
	- `async` `await` などを使った Concurrency を扱うときによくハマる問題がまとめられていた
		- `async` `await` すればいいだけと言われてるけどそんなに単純じゃないよ
	- 自分がハマったり勘違いしていた点も入っていたのでかなり有用
		- 例えば `async` な function を `await` した後の thread は、する前の処理 thread と同じにはならない可能性がある。など
			- 解決策としては `async` な function が main thread で走ることを保証したい場合は常に `@MainActor` で annotate する
			- それが難しい場合、 function 内部で main thread で走ってほしい処理を `await MainActor.run {}` する
	 - `actor` の `Actor Reentrancy` などもとても参考になった
	 - `Task {}` についても勉強になった
		 - `Task {}` で引数になる closure は `user-initiated` な concurrent queue に dispatch される
		 - Swift Concurrency は CPU core 数を超えないように queue 毎の thread 数を制限しているので、それを超えてしまうと `Task` が suspend する
- [Creating a Swifty Command-Line Tool With ArgumentParser](https://betterprogramming.pub/creating-a-swifty-command-line-tool-with-argumentparser-a6240b512b0b)
	- [swift-argument-parser](https://github.com/apple/swift-argument-parser) を使って簡単に CLI ツールを Swift で作る方法
	- argument や flag などに property wrapper が使われていたりとモダンに手軽に書けそうだなと思った