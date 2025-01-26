<img src="./docs/ogp.png" />

<p align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/npm-v22.x.x-blue">
    <img alt="Static Badge" src="https://img.shields.io/badge/Framework-NestJS-red">
    <img alt="Static Badge" src="https://img.shields.io/badge/License-MIT-green">

</p>

## 概要

- このサービスはエンジニアが使うことを前提とした、フロントエンドがないヘッドレスな SNS です。
- ユーザーが直接 API を叩くことで利用することができます。

## 機能

- ユーザー登録/編集 API
- メッセージ投稿 API

## メディアの投稿

画像や動画などのメディアファイルはURL形式で指定可能です。
投稿するにはデータURLを指定するかご自身でセルフホスティングしてください。

## 通知

ユーザー編集からwebhookを指定できます。

### 通知の種類

- いいね
- リツイート
- リプライ
- 足あと
