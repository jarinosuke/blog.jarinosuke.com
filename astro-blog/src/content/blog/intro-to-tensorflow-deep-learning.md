---
author: jarinosuke
datetime: '2020-03-25T09:00:00.000Z'
title: ‘Intro to TensorFlow for Deep Learning | Udacity’ を受講した
slug: intro-to-tensorflow-deep-learning
featured: false
draft: false
tags:
  - machine learning
  - online course
description: TensorFlow入門から実践まで学んだUdacityの無料機械学習コース受講レポート
---

![](/assets/blog/intro-to-tensorflow-deep-learning/intro-to-tensorflow.png)

## [Intro to TensorFlow for Deep Learning](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)

Udacity の Free Course で [Intro to TensorFlow for Deep Learning](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187) を受講した

空き時間などで少しずつ進めて、だいたい1ヶ月ちょっとで一通り終えられたと思う

この記事は受講した上での感想と、忘れないために受講後にわかったこと/わからないことを挙げている
その後に簡単に自分の目線でのコースの説明も付けておいた

## 感想

コースの全体的な構成としては、数分の説明用のビデオ(Youtube)を見た後に [Colab](https://colab.research.google.com/notebooks/intro.ipynb) と呼ばれる Google が提供している Python のオンラインの実行環境で課題を行うという流れだった

以前受講した [Coursera の Machine Learning](https://www.coursera.org/learn/machine-learning) というコースは Octave という Matlab ぽい数値解析言語を使っていたのに対して、この Colab + Python(numpy) という環境が気軽に実行できるかつ分かりやすくてとても良かった

課題の内容自体は、基本的には前回のビデオの内容から分かるもので自力で頑張るというより、そこからパラメータを変更したりして学習内容の結果を比較したりなどが多い印象
なのでどこかでスタックしてやる気を無くすみたいなことは無かった。反面、身に付いているかどうかは少し疑問が残るので以下に身に付いたこと、全然わからないことなどメモとして残す

### 身に付いたこと

- TensorFlow を用いた学習のパイプラインと実際のコーディング
    - ただし見ないで書けるわけではない
- CNN
    - Convolution/Pooling layer についても大枠理解
    - また CNN が画像系で力を発揮することも理解した
    - この [blog](https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53) もわかりやすかった
- Transfer Leraning とはなにか
    - 大体これでいい結果出るのでは…？
- Overfitting の避け方
    - これは単純に面白かった
    - 意図的にニューロンを消したり(Dropout)、テストデータを擬似的に増やしたり(Image augmentation)など

### 全然わからないこと

- NNのモデルのレイヤーやパラメータをどうやって決めるのか
    - 各レイヤーのニューロンの数、レイヤーの数など
    - 何かセオリーがあるのか
- 問題にアプライするNNへの勘どころ
    - CNN/Transfer Learning
        - Transfer Learning だとしてどれを使うのか
            - ImageNet, Inception V3 など（それぞれのアーキテクチャについてはもちろん知らない）
                - Inception の論文
                    - https://arxiv.org/pdf/1409.4842.pdf
                - Inception V3 の論文
                    - https://arxiv.org/pdf/1512.00567.pdf
- Python 3/Numpy がまだまだ怪しい
    - 特に tensor のサイズ違いでのエラーなど多い

## コース内容

### Introduction to Machine Learning

Fahrenheit = celsius * 1.8 + 32 の温度の変換式を、簡単な NN モデルを使って学習し求める

### Your First Model: Fashion MNIST

Fashion MNIST と呼ばれるテストデータを使って分類器をつくる
ReLU や Softmax などの activation function に関する説明もここであった
ReLU の説明は [Kaggle のこの Notebook](https://www.kaggle.com/dansbecker/rectified-linear-units-relu-in-deep-learning) が分かりやすい

### Introduction to CNNs

CNN とは何かの説明
CNN で扱う Convolution layer/Max Pooling layerについても説明あった
最後に CNN を使って再度 Fashion MNIST 分類器を作った

### Going Further with CNNs

CNN を行う上でのデータ正規化(Resizing)や、カラー画像の扱い方についての説明や、overfitting を防ぐ手法(early stopping/image augmentation, dropout)について説明があった

### Transfer Learning

MobileNet を使って dogs/cats 分類器を作った

### Saving and Loading Models

学習したモデルを file export どうやって別の環境で load するかなどの話

### Time Series Forecasting

時系列予測に関してのはなし
最初の方は machine learning というよりは平均などいくつかのmetricsでも十分一定の予測を行っていた
その後からRNNなどを使っていたが少し内容が難しかったので飛ばした

### Introduction to TensorFlow Lite

TensorFlow Lite と[次のコース](https://www.udacity.com/course/intro-to-tensorflow-lite--ud190)への説明


## この後

直近はこのコースの最後でも触れられていた Udacity の [Intro to TensorFlow Lite](https://www.udacity.com/course/intro-to-tensorflow-lite--ud190) を受講してみようと思う

長期的にはもう少し実践的な内容を期待しているので、並行して kaggle などにも少しずつ取り組んでいきたい
