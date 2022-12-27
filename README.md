## Nextjs+Typescript+firebaseでのログインサンプルです。

１．firebaseでプロジェクトを作成<br />
２．firebaseでアプリを登録後にFirebaseに接続するための情報が表示されるのでそれをコピー。<br />
３．ローカル環境に.envファイルを作成し、２の情報を設定する。<br />


```
xxxの部分にfirebaseの設定を入力してください。

.env
FIREBASE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_DOMAIN=xxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_SENDER_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_APP_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_MEASUREMENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

あとはnpm install、npm run devで起動するはず。

### 備考
初回は/loginに飛ぶので「ユーザ登録はこちらから」を押下してユーザー登録を行う。<br />
登録後、再度/loginで登録済みのメールアドレス、パスワードでログインする。<br />
ログイン成功なら'/'に遷移し、「ログインできました！」が表示されればOK<br />
ログイン認証状態でなければ'/'には遷移しない。<br />
