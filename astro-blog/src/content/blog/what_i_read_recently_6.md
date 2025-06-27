---
title: "最近読んだもの6 - SwiftUI 関連"
description: "最近読んだもの6 - SwiftUI 関連について"
pubDate: "2022-10-24T09:00:00.000Z"
heroImage: ""
tags: ["ios"]
---

- [What are Sendable and @Sendable closures in Swift?](https://www.donnywals.com/what-are-sendable-and-sendable-closures-in-swift/)
    - 以前よりは `Sendable` に関する理解が高くなった
    - `actor` はデフォルトで `Sendable`
    - closure に `@Sendable` をつけると、その中で capture された値が `Sendable` でない場合は warning になる（設定が必要）
    - struct は暗黙的に `Sendable` になっている（ただしプロパティ全てが `Sendable` なら）
        - 同様に class でもそれが `final` なら `Sendable`
- [Conditional layouts in SwiftUI](https://swiftwithmajid.com/2022/08/16/conditional-layouts-in-swiftui/)
	- iOS 16 から `Layout` protocol が導入された
	- conditional に layout を変えたい場合、 `AnyLayout` を使ってより綺麗に書けるようになった
- [Structural identity in SwiftUI](https://swiftwithmajid.com/2021/12/09/structural-identity-in-swiftui/)
	- conditional body の場合、 `some View` は `_ConditionalContent<LoggedUser, AnonymousUserView>` などになる
	- 予期せぬ recreation や animation が発生することがある
		- inline modifier などで structure identity を保持するのがいい
- [Pitfall of Nested ObservableObject](https://samwize.com/2022/09/30/pitfall-of-nested-observableobject/)
	- nest された `ObservableObject` だと変更が通知されないので、マニュアルで発火させないといけない
- [onTapGesture(count:coordinateSpace:perform:)](https://developer.apple.com/documentation/swiftui/view/ontapgesture(count:coordinatespace:perform:))
	- iOS 16 から SwiftUI でも tap gesture を `SwiftUI.View` 単位につけることができるようになった
- [Mastering NavigationStack in SwiftUI. Navigator Pattern.](https://swiftwithmajid.com/2022/06/15/mastering-navigationstack-in-swiftui-navigator-pattern/)
	- `NavigationView` は deprecated になり、iOS 16 から `NavgationStack` が登場した
	- `navigationDestination(for:destination:)` で遷移先を統一的に書けるように
- [Mastering NavigationStack in SwiftUI. NavigationPath.](https://swiftwithmajid.com/2022/10/05/mastering-navigationstack-in-swiftui-navigationpath)
- [Three Ways to Refactor Massive SwiftUI Views](https://holyswift.app/three-ways-to-refactor-massive-swiftui-views/)
	- SwiftUI の View が大きくなった時の分割、リファクタリングの方法