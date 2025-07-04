---
author: jarinosuke
datetime: '2022-06-06T09:00:00.000Z'
title: 最近読んだもの3 - モバイルアプリのコード共通化、リファクタリング
slug: what_i_read_recently_3
featured: false
draft: false
tags:
  - ios
description: 最近読んだもの3 - モバイルアプリのコード共通化、リファクタリングについて
---

- [Client Consistency at Slack: Beyond Libslack](https://slack.engineering/client-consistency-at-slack-beyond-libslack/)
	- Slack アプリでのC++によるコード共通化をやめたという記事
	- multi-platform の恩恵が減った(iOS/Androidのみ)、C++が"できる"モバイルエンジニアがあまりいないこと、PF毎の結合・ビルド・テストのオーバーヘッドなどがstopした背景
		- ライブラリのリリースも各PFでsync upしないといけないとかもあるあるだなと思った
	- やめただけでなく、そこからの何を学んで何を始めたかまで書かれていて良かった
	- 2014年に書かれた Dropbox の C++ によるコード共通化と、2019に書かれたそれをやめた記事も合わせて読むと理解が深まる
		- [How Dropbox Uses C++ for Cross-Platform iOS and Android Development](https://oleb.net/blog/2014/05/how-dropbox-uses-cplusplus-cross-platform-development/)
		- [The (not so) hidden cost of sharing code between iOS and Android](https://dropbox.tech/mobile/the-not-so-hidden-cost-of-sharing-code-between-ios-and-android)
- [Stabilize, Modularize, Modernize: Scaling Slack’s Mobile Codebases](https://slack.engineering/stabilize-modularize-modernize-scaling-slacks-mobile-codebases/)
	- Slack アプリのリファクタリングPJの長編ブログ第一弾
	- 書かれていることは大体良くある話でどれも納得できた
		- rapid growth が訪れると、今までは一度に返せていたデータも server/client どちらも捌けなくなってくる
		- 合わせて組織的に人数も増えるので、数人では成り立っていたレイヤーもあるようでない一貫性のあまり無い architecture も too complex になり限界を迎える
		- growth に伴って機能追加もどんどん増えるので、complexity が様々な角度で上がる
		- Rewrite/Refactor の議論
			- Rewrite はリスクが高すぎるという良くある指摘
				- 並列で走る既存の機能追加の追従、時間とコストの度合いなど
			- Slack は既存の refactor を選択した
	- 以下は驚いた点
		- Android は2015年に一度 rearchitect しただけ、iOSに関しては2013年のリリース以来ずっとそのまま
		- 過去にコード共通化も試したが残念なところが多くて失敗
			- [Client Consistency at Slack: Beyond Libslack](https://slack.engineering/client-consistency-at-slack-beyond-libslack/)
	- 2020年夏にPJが開始
		- ゴールは明確で、技術負債の返済と今後5年の開発に適応できる程度のモダンな architecture
		- IC ドリブンな PJ というのが面白かった
			- executive stakeholders に対して、長期的にどのようなリターンがあるかを将来的にあるかを継続して propose していたらしい
			- その proposal の主な観点は3つで
				- どうやって今ある問題を解決するか
					- ビルド時間、テスト失敗率、マイグレーション率、モバイル開発者からのフィードバックなどのデータから
				- どうやって進捗を計測するか
					- ゴールまでの進捗をダッシュボード化
						- ビルド時間の減少、main app target のコード行数など
				- PJの各フェーズにおいて、失敗した場合にどのようなバックアッププラン(failure mode)があるか
					- 期待しない結果になった場合に、とりうる選択をあげる
						- これがリスクを和らげるための良いデモ材料にもなった
		- PJにおける最終的な3つのテーマにしてそれぞれフェーズに分けて進めた
			- Stabilization
				- 一番ヤバい技術負債やアンチパターンを取り除いて、pendになっていた一番重要なマイグレーションを終わらせる
			- Modularization
				- モノリスになってるappをコンポーネント化、それによって相互依存性やビルド時間の減少、並列での開発を可能にさせる
			- Modernization
				- より forward-looking な技術やデザインパターンを採用する
			- この進め方を読んでとても良いなと思ったのと同時に、進め方を分けると大きくhorizontal/vertical あるなと思った。これは horizontal
				- 対して vertical はある機能に対して、一気にこのフェーズを進めてそれを横展開してアプリ全体に広げるというパターン
					- 以前経験した大規模なリファクタなどはこれに当たるなと思った
					- これのメリットもあって、1つの機能で限定的にはじめるので影響も軽微、かつ全て行うのでこれが成功すれば横展開の確度も高い
					- デメリットとしては失敗した時のコストが高い
		- Stabilization フェーズ
			- 6ヶ月続いた
			- developer による worst な codebase に対する「止血」作業
			- iOS は既存のObjC の Swift 移行、ネットワークとデータアクセス library の移行
