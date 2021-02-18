# 忘れちゃいけないこと
## next.config.js の設定
```
module.exports = {
  assetPrefix: '/repository-name',
};
```
## ビルド通るかの確認
インストールして、ビルドして、アプリ実行（動作確認できる）、エクスポートで静的HTMLとしてアプリを生成して、ローカルサーバで確認できる。

```
$ npm install
$ npm run build
$ npm run start
$ npm run export
$ npx serve out
```