---
author: jarinosuke
datetime: '2020-08-19T09:00:00.000Z'
title: 'An Elegant Puzzle: 2 Organizations のメモ'
slug: an-elegant-puzzle_org
featured: false
draft: false
tags: []
description: 'An Elegant Puzzle: 2 Organizations のメモについて'
---

## 背景

前にも一度読んでいて、簡単な[blogを書いた](an-elegant-puzzle)けれど、もう少し詳細に日本語で自分用に見返せるメモが欲しいなと、改めて読んでいて思ったので大きな章ごとにまとめておく

## 2. Organizations

> I believe that excellent organizations grow from consistently applying a straightforward process.

複雑なパズルもシンプルなアプローチで解けることは意識したい

> When I have a problem that I want to solve quickly and cheaply, I start thinking about process design. A problem I want to solve permanently and we have time to go slow? That’s a good time to evolve your culture. However, if process is too weak a force, and culture too slow, then organizational design lives between those two.

プロセス設計 -> 組織設計 -> 文化設計の順で影響とコストが変わってくる

### 2.1 Sizing teams

> Managers should support six to eight engineers

マネージャーは6~8人のエンジニアをサポートするべき

> Tech Lead Managers (TLMs). Managers supporting fewer than four engineers tend to function as TLMs, taking on a share of design and implementation work. For some folks this role can uniquely leverage their strengths, but it’s a role with limited career opportunities. To progress as a manager, they’ll want more time to focus on developing their management skills. Alternatively, to progress toward staff engineering roles, they’ll find it difficult to spend enough time on the technical details.

組織によって呼び名はコロコロ変わりそうだが、イメージはしやすいと思う
技術/マネジメントで悩んでる IC にはファーストステップとしては良いと思う
が、書かれている通りどっち付かずにならないように早めに意思決定した方が良いのかも知れない

> Coaches. Managers supporting more than eight or nine engineers typically act as coaches and safety nets for problems. They are too busy to actively invest in their team or their team’s area of responsibility. 

マネジメント人数が多くなってくると、メンバーへの投資や積極的関与は難しくなり、問題が起こった時の最後の砦としているコーチのような受動的な存在になる

> Small teams (fewer than four members) are not teams
> An important property of teams is that they abstract the complexities of the individuals that compose them. Teams with fewer than four individuals are a sufficiently leaky abstraction that they function indistinguishably from individuals.

4人より少ないチームはチームではない
個々の複雑性を抽象化して何らかの形で外部に対しては減らせていないとチームとして機能しているとはいえない

> Keep innovation and maintenance together. A frequent practice is to spin up a new team to innovate while existing teams are bogged down in maintenance. I’ve historically done this myself, but I’ve moved toward innovating within existing teams.5 This requires very deliberate decision-making and some bravery, but in exchange you’ll get higher morale and a culture of learning, and will avoid creating a two-tiered class system of innovators and maintainers.

イノベーションとメンテナンスを同時にやる
よくあるのが新規開発チームを新しく作って、メンテは既存のチームでやる分け方
チーム内で同時に行うことで、意思決定などは大変だがカルチャーの醸成など長期的目線だと良い
更に階層化の防止にもつながる

### 2.2 Staying on the path to high-performing teams

#### 2.2.1 Four states of a team

![](/assets/blog/an-elegant-puzzle_org/four-state-of-a-team.png)

左から

- backlog含め積まれるタスクのほうが消化より多い状態。エンジニアは懸命に働いているけれど、求められる進捗が出せていない
- 優先度の高いタスクはしっかり消化できている状態。しかし技術負債返済はできず、新しいPJが始まってしまう
- 技術負債返済を始めることができる状態。少しずつ返済することで、より返済に時間をかけられる良い循環ができてくる
- 技術負債が継続可能なレベルで少ない状態、大多数のタスクがしっかりユーザのニーズに届いている

![](/assets/blog/an-elegant-puzzle_org/four-state-progress.png)

#### 2.2.2 System fixes and tactical support

> The hard part is maintaining faith in your plan—both your faith and the broader organization’s faith. At some point, you may want to launder accountability through a reorg, or maybe skip out to a new job, but if you do that you’re also skipping the part where you get to learn. Stay the path.

難しいのは自分の計画 + 自分自身 + 自分の組織に対しての信頼を常にメンテすること
責任を組織変更や、もしくは転職などで誰かにパスしてしまいたいことも出てくるかも知れないけれど、それは学びの機会をスキップしてしまっている

とどまること

### 2.3 A case against top-down global optimization

#### 2.3.1 Team first

> Fundamentally, I believe that sustained productivity comes from high-performing teams, and that disassembling a high-performing team leads to a significant loss of productivity, even if the members are fully retained. In this worldview, high-performing teams are sacred, and I’m quite hesitant to disassemble them.

メンバーが十分で他に足りないチームがあるとしても、高パフォーマンスのチームを解体するのは生産性の損失につながる
高パフォーマンスなチームは神聖なもの

> you have to account for re-gelling costs after periods of change, not that you should never change them.

変更する場合、チームの再組成のコストも検討しないといけない

#### 2.3.3 Slack

> I find that teams put spare capacity to great use by improving areas within their aegis, in both incremental and novel ways. As a bonus, they tend to do these improvements with minimal coordination costs, such that the local productivity doesn’t introduce drag on the surrounding system.

チーム内に一定余白を残しておくことで、局所最適ではありつつも余計な関連部署との調整無しでクイックに改善活動できるのが良い

> “slackful” teams function as an organizational debugger: you don’t have to consider them when debugging the overall organizational throughput.

slackful なチームはチーム内のコンディションは良いので制約は少ない状態になり、組織全体のスループットを計測・改善する上でのデバッガになりうる

#### 2.3.4 Shif scope; rotate

> Shifting scope works better than moving people because it avoids re-gelling costs, and it preserves system behavior. Preserving behavior keeps your existing mental model intact, and if it doesn’t work out, you can always revert a workload change with less disruption than would be caused by a staffing change.

人の移動よりチームのスコープを変えるほうが組成コストなどかからず良い
また問題があった場合でも、移動がないのでrevertしやすい

### 2.4 Productivity in the age of hipergrowth

#### 2.4.1 More engineers, more problems

人の増加 -> デプロイ数の増加 -> 障害の増加 -> on-call エンジニアが必要 -> on-call できる人の育成 -> シニアエンジニアの減少
人の増加 -> 専門チームなどのチーム分割が進む -> on-call エンジニアが各チームで必要 -> on-call できる人の育成, マネジメントレイヤーの育成とチーム分割 -> シニアエンジニアの減少

のようなどこでも聞くフローがわかりやすく書かれている

例えば以下の例もわかりやすかった

- 新しく入社したエンジニアが一人前になるのにシニアエンジニアのメンタリングが週10時間必要で、
  - また新しく入社したエンジニアはシニアエンジニアの1/3の生産性とする。
  - 2名入社したので、シニアエンジニア1名で対応する
- そうすると3人いるのにも関わらず、シニアエンジニアの生産性を1としたときに1.16(= 2 x 0.33 + 1 x 0.5)の生産性しか出なくなる

#### 2.4.3 Ways to manage entropy

> you only get value from projects when they finish: to make progress, above all else, you must ensure that some of your projects finish.

とにかく進捗を出して価値を出すしか無い

![](/assets/blog/an-elegant-puzzle_org/ppl-pipeline.png)

候補者がシニアエンジニアになって新しいエンジニアのトレーニングをしたり面接したりするパイプライン
各 -> で時間が取られるので、しっかり回るようにするには事業含め周りの理解がいる

> The second most effective time thief that I’ve found is ad hoc interruptions: getting pinged on HipChat or Slack, taps on the shoulder, alerts from your on-call system, high-volume email lists,

それな
対策としてはチーミングとも似てくるがインタラプトの影響範囲を最小化するのと、なるべく自動化する
最小化でいうと答える窓口をローテーションするなどして一人に集中させない、コンポーネントの owner の見える化など
自動化でいうと人にチケットを切らせずにbotに話しかけるようにするなど

> Finally, the one thing that I’ve found at companies with very few interruptions and have observed almost nowhere else: really great, consistently available documentation. It’s probably even harder to bootstrap documentation into a non-documenting company than it is to bootstrap unit tests into a non-testing company, but the best solution to frequent interruptions I’ve seen is a culture of documentation, documentation reading, and a documentation search that actually works.

documentation 文化を醸成させるのが一番
ただしこれは単体テストを書く文化を途中から作るより難しい
わかる
