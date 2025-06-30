---
author: jarinosuke
datetime: '2022-06-13T09:00:00.000Z'
title: 最近読んだもの4 - モバイルアプリのリファクタリング
slug: what_i_read_recently_4
featured: false
draft: false
tags:
  - engineering
  - ios
description: 最近読んだもの4 - モバイルアプリのリファクタリングについて
---

[前回](what_i_read_recently_3) の続き

- [Scaling Slack’s Mobile Codebases: Modernization](https://slack.engineering/scaling-slacks-mobile-codebases-modernization/)
	- 当初は Modularization と Modernization は分けてフェーズとして考えていた
		- Modularization を取り組むうちに、二つを分けて考えて進めるのはコードの書き換えなど重複する作業が多いことに気づいた
	- 2021年2月から初めて1年かかった
	- Modularization は Stabilization を進めていたcoreメンバーだけでは無理で、各 product team からのヘルプが必要だった
	- Modularization
		- PJ 以前からいくつかの module はあったが、機能などは全て app target に入っていた
	- iOS
		- module に分ける際に、module がどのようなストラクチャで何が入るかなど細かく定義した
		- 3 types
			- Features
				- アプリ内の機能
				- 1画面や画面の1部、画面の集合など
				- Feature architecture に従う
				- 各 Feature module は I/F module と実装 module を持つ　
					- I/F module は protocol と data class
					- 実装 module は上記の protocol に準拠した実装と内部で使うヘルパーなど
					- これによって feature 同士の結合が少なくなり、内部実装を変えても依存を壊さないことが可能になった
			- Services
				- API call, データ永続化など何かしら専用の機能を持つコードの集合
				- UI コードを含まない
				- Service も同様に I/F と実装で module を分ける
				- Service の実装 module は他の Service や Feature module とリンクできないルールがある
			- Libraries
				- I/Fと実装をわざわざ分ける必要のない、データ構造や簡単なクラスや関数の集合
					- システムのAPIの extension など
				- dependency graph の一番下にあるイメージ
		- Bazel 
			- とてもいい影響を与えた
				- 導入以前はmoduleを作るたびにprojectのコンフリクがあり辛かった
			- target, module それらの依存関係を定義することがdけいた
				- Basel build graph から XcodeGen 経由で Xcode でビルドもできるし、Bazel からビルドもできる
			- Bazel 以前は dynamic library として module を link していたので起動時間が伸びたが、導入したことで static link にできた
			- module 化したことで、Bazel の remote shared cache がとても良かった
		-  Code generation
			- 新モジュール作成時のファイルテンプレートを使った script による自動作成
			- CoreData のモデルの更新も script でやって boilerplate 削減
			- feature flag の作成削除も自動化
	- Android
		- iOS に似ているが詳細がいくつか違う
		- スキップ
	- その他感想など
		- Slack の Principal Engineer でも XCode って書くんだなって思った
- [Scaling Slack’s Mobile Codebases: Modernization](https://slack.engineering/scaling-slacks-mobile-codebases-modernization/)
	- Modernization
		- モダン化はこのPJが終わったからといって終わるわけではない
		- 将来の新しい技術やデザインパターンなどにも適合できるような余地が必要
			- このPJではさまざまな理由で SwiftUI は不採用としたが、将来的には取り入れるような状態にした
	- iOS
		- architecture
			- 独自のVIPERを採用
				- Feature, View, Interact, Presenter
				- データフローを強制できる
				- 開発者を楽にさせるために generics やテンプレートを使っている
				- 詳細は別でまたblogにしたい
		- stricter linting
		- 	新しいmodule下では、以前より使っていた SwiftLint より強力な linting を入れた
		- `static let shared` などの global singleton
			- global object でも、依存関係を明示的にしてmockingを簡単にするためにI/F からの注入を促した
		- Notifications/NotificaitonCenter
			- Combine の publishers/subscribers の使用を促した
		- `UIViewController.topPresented` `.topMostPresentedViewControllerInStack`的なやつ
		- `UIKit` の使用
			- 内製の `SlackKit` というUIコンポーネントを使うようにした
		- Combine 
			- 既に限定的な場所で inhouse の Reactive Programming ぽい RxSwift みたいなものは使っていた
				- なのでそこから Combine へのマイグレーションは割と自然にできた
			- PJ当初はbackportがなかったかつSlackはiOS12もサポートしていたので、CombineX を使っていた
		- SlackKit
			- 内製のUIコンポーネント
	- PJの結果
		- PJ通して1.5年で2022年1月に終了
		- iOS
			- コードベース中 68% Modernized 81% Modularized
			- 280モジュールが作られた
			- CIの安定性が77%->90%
			- CI実行時間が64%に
		- developer survey も良好
	- Next steps
		- module 間の依存関係
			- module 数の増加は意図した結果だったが、すぐに元々のルールが十分ではないことに気づいた
			- 当初のルールは Features もしくは Services は他の Features / Services の I/F モジュールとだけ依存できる、というものだけ
			- なので Library は他のそれと依存できるし、Features / Services とも依存できてしまった
			- これが低レベルもしくは上の階層でおこり、すぐに module 間の循環参照が起きてしまった
			- これを解決するために Layer を導入し、あるモジュールが属するレイヤーがあってそのモジュールはそれより下のレイヤーにのみ依存できるようなルールを作って修正中
		- dependency injection
			- module 化したことで整理されて依存するコードが module から作成できるようになって mocking も可能になった
			- ただ app target は多数のコードが注入され、簡単に循環参照やメモリリークするようになってしまった
			- injection の方法をいろいろ調査して、標準の initializer injection を使うことに決めた
				- dev friendly, compile 時に決定されるなどの理由
			- Features / Services の実装 module だけが app target に link されている
				- そしてそれらの依存関係はそれらの module が作成される時に一緒に組み込まれないといけない
				- つまりこれだと app target が大きいままで、扱いづらくなってしまう
				- [Needle](https://github.com/uber/needle) という DI framework の導入を考えている
					- これで module 間の依存を明確化でき、app target の全ての実装 module を link しなくてもビルドできるようになる
