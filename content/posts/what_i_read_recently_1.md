---
title: "最近読んだもの1 - Actor, @MainActor, [weak self] など"
date: '2022-05-20T09:00:00.000Z'
tags: ['ios']
---

- [How @MainActor works](https://oleb.net/2022/how-mainactor-works/)
	- `@MainActor` property wrapper がどういう動きになっているのか、スクラッチで実際に作ってみている記事
	- job と executor の2つくらいで、かなりシンプルに作られていることを知れた
- [Weak Self -- Closure Rules of Thumb](https://christiantietze.de/posts/2022/05/weak-self-consistency/)
	- `[weak self]` 時の escaping closure の扱いについて
	- よく言われるやつだけど、どれにも落とし穴があるので注意という良い記事だった
- [What are Swift Concurrency’s task local values?](https://www.donnywals.com/what-are-swift-concurrencys-task-local-values/)
	- `Task.init {}` を使っているとたまにエラーになる Task local value の話
	- `@TaskLocal` property wrapper を使えば、task のスコープ内でのみ有効なプロパティが定義できる
		- それを Task を識別できる id などにすれば、非同期処理のデバッグもしやすい
- [An introduction to synchronizing access with Swift’s Actors](https://www.donnywals.com/an-introduction-to-synchronizing-access-with-swifts-actors/)
	- DateFormatter のキャッシュを例にして、スレッド跨いだアクセスでクラッシュさせながら GCD、Actor とステップに分けて分かりやすく解説している
- [Thoughts on Combine in an async/await world](https://www.donnywals.com/thoughts-on-combine-in-an-async-await-world/)
	- async/await が出た当時の記事
	- Combine との差別化や意図などが書かれている
	- 記事にも書かれている通り、Combine は値やイベントの同期や操作が目的で async/await が出ても無くならないとは思う
		- かつ Combine は SwiftUI に密に関わっているので