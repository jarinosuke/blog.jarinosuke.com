---
title: "最近読んだもの9 - SwiftUI Localization、StateObject、EnvironmentObject など"
date: '2022-11-14T09:00:00.000Z'
tags: ['ios']
---

- [Check localizable strings with the accented pseudolanguage in Xcode](https://nilcoalescing.com/blog/CheckLocalizableStringsWithAccentedPseudolanguage/)
	- SwiftUI での文言ローカライズについて
	- SwiftUI ではいくつかローカライズ文言用のキー定義の方法がある
		- まず `Text()` に渡す string literal は 暗黙的に `LocalizedStringKey` になっているのでローカライズされる
		- また String も [String(localized:)](https://developer.apple.com/documentation/swift/string/init(localized:table:bundle:locale:comment:)) で initialize すればそのローカライズされる
		- Xcode の scheme 設定で App Language に ` Accented PseudoLanguage` という選択肢がある
			- これを設定するとローカライズされていない文言が分かりやすくなる（ローカライズされている文言は架空の文字列になる）
- [Should we manually call @StateObject initializer](https://sarunw.com/posts/manually-initialize-stateobject/)
	- `@StateObject` を初期値ではなく、 `StateObject(wrappedValue:)` を使って初期化するのは大丈夫なのか？という記事
	- 例えば初期化時に何かパラメータが必要なものなど動的にしたいなど
	- 結論 initializer の中でなら問題ないが副作用に注意らしい
- [Animated Launch Screen in SwiftUI](https://holyswift.app/animated-launch-screen-in-swiftui/)
	- Splash screen と TOP 画面でどのように画面遷移を自動（通信完了と同時に dimiss）させるか
	- `@EnvironmentObject` を使って app top で持っている `@StateObject` を inject しているのが勉強になった
- [When does a SwiftUI Environment get retained?](https://tiagolopes.blog/2022/11/01/when-does-a-swiftui-environment-get-retained/)
	- SwiftUI の EnvironmentObject がどのようにメモリ上で持たれているかの記事
	- leak している view に `.environmentObject()` するとそれに引きずられて leak するという話
- [Running Code Only Once in SwiftUI](https://www.swiftjectivec.com/swiftui-run-code-only-once-versus-onappear-or-task)
	- 画面表示時など、一度だけ実行させたいコードがある状況は良く出てくる
	- 例えば `.onAppear` だと画面が push/pop すると再度呼ばれてしまう
	- この記事では `.onFirstAppear` という extension を作って、その内部で `FirstAppear` という `ViewModifier` を用意しそこで flag 管理することで解決していた
- [How to check for network connection and present an alert in SwiftUI](https://danijelavrzan.com/posts/2022/11/network-connection-alert-swiftui/)
	- `NWPathMonitor` を使った `ObservableObject` を作り、それを `@EnvironmentObject` として application の最上位から inject する方法
	- 子 View に関しては `@EnvironmentObject` すれば該当のオブジェクトを取得できるので便利
- [Share files between your iOS app, Widget and WatchKit extensions](https://blog.eidinger.info/share-files-between-your-ios-app-widget-and-watchkit-extensions)
	- iOS の sandboxed な環境下で App Extension 間でどのようにファイルを共有するか
	- WatchKit Extension だと session という概念を通じてやりとりするのは知らなかった
- [Improve App Launch Time 2022 Edition](https://samwize.com/2022/11/01/improve-app-launch-time-2022/)
	- 環境変数 `DYLD_PRINT_STATISTICS`  は動かなくなった
	- 代わりに Instruments の App Launch テンプレートで計測できるようになった
	- Debug ではなく Release ターゲットで計測するようにする
	- Test 用の Target テンプレートである `UI Testing Bundle` を使うと起動時間を計測するテストが予め含まれている
	- Xcode Organizer にある Launch Time metrics も有効