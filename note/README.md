+++
title = "CloudFormation OutputsとImportValue"
date = "2021-05-02"
tags = ["CloudFormation", "Outputs", "ImportValue"]
draft = true
+++

CDKで作るCloudFormationのスタック間でどうやってデータを共有するか問題はとても悩ましいが、基本的に他のシステムとの関連がないならば一番手軽な[Outputs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html)、[ImportValue](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html)を使うと楽ではある。

この方法の特徴はあるアウトプット AをCloudFormationスタック Aが作って、それを`cdk destroy`しようとしたときに、もし別のCloudFormationスタック Bがアウトプット AをImportValueを使ってインポートしていた場合に、エラーが出てCloudFormationスタック Aをdestroyできないという点にある。

つまり「あ、これ消しちゃまずいんだ」と気がつくのが良いところだ。こ方法を使ってスタック間で関連性を持たせることを[クロススタック参照](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html)と呼ぶらしい。

でも逆にスタック Bがいる限りスタック Aを削除できないという恐ろしさがあって、あとで後悔することになるかもしれないと思いつつも個人的には多用している。多用する理由は自分の場合全てをCDKを使ってデプロイするつもりだからなのと、この方法が手軽だと思うことと、もう1つは遊びでやっているわけだからむしろどういうところで後悔するのか経験しておきたいからだ。

ちなみにエクスポート／インポートする際のパラメタ名はcdk.jsonで指定するようにしていて、これはこれで混乱の元となることがあるのだが、パラメタ名はその目的に応じた名前にしておきたく、そのパラメタ名はそれをデプロイするCDKプロジェクトとは独立しているべきだろうと考えて、そういった面倒なことをしている。

ともかくそんなやり方を最近多用しているので、自分が参照するために例をアップしておいた。

[Githubのリポジトリ](https://github.com/suzukiken/cdkimportexport-context)


