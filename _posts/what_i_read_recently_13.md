---
title: "最近読んだもの13 - Swift Concurrencyなど"
date: '2023-01-23T09:00:00.000Z'
---


- [How Does Swift Concurrency Prevents Thread Explosions?](https://swiftsenpai.com/swift/swift-concurrency-prevent-thread-explosion/)
    - [最近読んだもの8 - Swift Concurrency、 Swifty CLI など](what_i_read_recently_8)でも挙げた Swift Concurrency における thread explosion についての詳細
    - Thread Explosion とは CPU core 数に対して16倍以上のスレッドが走っている状態
    - GCD 自体は Thread explosion を抑制する機能はないので簡単に引き起こすことができる
    - Swift Concurrency で [Task.init(priority:operation:)](https://developer.apple.com/documentation/swift/task/init(priority:operation:)-5ltye) で同様のことをする
        - priority は `.userInitiated` `.utility` `.background` の3種類で優先度順
    - `.userInitiated` だと CPU コア数分の thread を作成している、それぞれ `“com.apple.root.user-initiated-qos.cooperative“` という queue に対して上限 thread 数を設けている
    - `.utility` `.background` は `.userInitiated` の Task が実行されている場合は1つまでしか thread が実行されないなど色々なテストがされていた
- [Five ways to break Swift Concurrency](http://blog.hobbyistsoftware.com/2022/11/five-ways-to-break-swift-concurrency/)
    - `@MainActor` が backgroud thread など他の thread から呼ばれる可能性があるコードのまとめ
    - selector や notification 経由など
- SwiftUI だと DateFormatter がなくても Text のみで日付のフォーマットを変えられるという [tweet](https://twitter.com/moorvladimir/status/1604764214497005568)
- Swift 5.8 から closure 内で weakify した self を unwrap したら、その後は暗黙的に扱えるようになったという [tweet](https://twitter.com/yaapete/status/1605494021920415745)
- [Task Groups in Swift explained with code examples](https://www.avanderlee.com/concurrency/task-groups-in-swift/)
    - Task Group のユースケースごとの紹介
    - DispatchGroup のモダンな形くらいの認識しかなかったのでありがたい
- 
