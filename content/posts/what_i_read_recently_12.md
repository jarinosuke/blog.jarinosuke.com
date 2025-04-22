---
title: "最近読んだもの12 - ジャイロを使ったホログラム効果、Foundation OSS 化など"
date: '2022-12-19T09:00:00.000Z'
---

- [Mimicking a Holographic Effect for Mercard](https://engineering.mercari.com/en/blog/entry/20221208-mimicking-a-holographic-effect-for-mercard/)
	- アプリ上のメルカードで使われているジャイロスコープを使ったホログラム効果の解説記事
	- ジャイロからリアルタイムで端末の傾きがとれるのでそれを用いてホログラムを更新する
		- その際に色の表現は HSB Model が適していた [init(hue:saturation:brightness:alpha:)](https://developer.apple.com/documentation/uikit/uicolor/1621931-init)
	- 余計な電力消費などが出ないように注意した
		- data collection を 60fps に制限した
		- Low Power Mode の時はホログラムを disable にした
		- payment tab が active かつ visible なときのみ効果を適用
	- QA も色々な端末で行った
- [Using complex gestures in a SwiftUI ScrollView](https://danielsaidi.com/blog/2022/11/16/using-complex-gestures-in-a-scroll-view)
	- SwiftUI で [ScrollView](https://developer.apple.com/documentation/swiftui/scrollview) 上で複雑な gesture を扱う方法
- [Swift Enum With Labeled Associated Values](https://blog.eidinger.info/swift-enum-with-labeled-associated-values)
	- Enum の assoc values はラベルが付けられるという記事
- [iOS In-App Subscription Tutorial with StoreKit 2 and Swift](https://www.revenuecat.com/blog/engineering/ios-in-app-subscription-tutorial-with-storekit-2-and-swift/)
	- StoreKit 2 を使った IAP 実装チュートリアル
	- 5年くらい前に実装した時と比較してセットアップ周りがだいぶ変わったなという印象
		- StoreKit configuration file は良さそう
		- AppStore Connect も REST API ができたようなので、reneweal や restore の処理なども起動時に行わなくてよくなったのかな？
- [The Future of Foundation](https://www.swift.org/blog/future-of-foundation)
	- Foundation framework が Swift で書き直され OSS 化される
	- 今までは Swift は OSS だったが、そこで使われる Foundation は以前からある C で実装されたものをラップして扱っていた