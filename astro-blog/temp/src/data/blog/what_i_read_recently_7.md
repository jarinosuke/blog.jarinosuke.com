---
author: "jarinosuke"
pubDatetime: 2022-10-31T09:00:00Z
title: "最近読んだもの7 - 非同期コミュニケーション、Mobile Developer Experience"
slug: "what_i_read_recently_7"
featured: false
draft: false
tags:
  - organization
description: "最近読んだもの7 - 非同期コミュニケーション、Mobile Developer Experienceについて"
---
- [Asynchronous Communication is the Great Leveler in Engineering](https://shopify.engineering/asynchronous-communication-shopify-engineering)
	- Shopify のエンジニアによるリモートワーク環境下における非同期コミュニケーションについての記事
	- コミュニケーションのタイプによって同期・非永続的と非同期・永続的で分けられてる図が面白かった
		- チャットが同期的な方に入ってるのは確かに、と思った
			- ある程度送る側が読まれることを期待していて、さらに返信がリーズナブルな期間で返ってくると思っている
	- 非同期コミュニケーションはリモートワークを効率的にするだけではなく色々なものが永続的になっていくので、適切に行えばどんどんレバレッジがかかっていく
	- 全社ではなくチーム内でリモートワークでの標準を決めるのもいいなと思った
- [Mobile Developer Experience at Slack](https://slack.engineering/mobile-developer-experience-at-slack/)
	- Developer pain をリストアップして、それぞれにかかる時間と時給から年間コスト出すのがとても良い
		- そしてこれはチームサイズが大きければ大きいほどコスト増になっていく
	- アプローチ方法で興味深かったもの　
		- feature チームのmobile engineer と partner になって一緒に開発し、何が大変なのか観察する
		- NPS など mobile engineer 向けにサーベイを行う
		- ペインポイントを解決する前に metrics を集める
	- Developer pain
		- iOS での CI のビルド時間
			- 最初 iOS は [Bluepill](https://github.com/MobileNativeFoundation/bluepill) を使ってテストの並列化を行った
			- それで一時期は20分くらいまで減ったが、再度50分近くまで増えた
			- 次のアプローチとして [Bazel](https://bazel.build) で cache layer を作る方法をとった
				- [bazel-diff](https://github.com/Tinder/bazel-diff) を使って、2 revison 間に bazel cache の差分があるかどうかの検知もできる
				- これによって平均9分、最小だと4.5分のTTM(Time to merge) まで下げることができた
		- Android での Test 関連の失敗
			- Automated なブラックボックステストを入れていたが、テストが増えるにつれてより flaky になった
				- 一度失敗すると修正するために Automation Engineer に連絡しないといけず、 TTM が増加する傾向があった
				- 詳細はこちら [Handling Flaky Tests at Scale: Auto Detection & Suppression](https://slack.engineering/handling-flaky-tests-at-scale-auto-detection-suppression/)
		- iOS での merge conflict
			- [XcodeGen](https://github.com/yonaskolb/XcodeGen) を導入して対応
				- Bazel 導入により、動的に XcodeGen 用の YAML ファイルを生成している
			- [Aviator](https://docs.aviator.co) を使って merge queue の管理と自動化を実現している