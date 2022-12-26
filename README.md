## Nextjs+Typescript+firebaseでのログインサンプルです。

１．firebaseでプロジェクトを作成<br />
２．firebaseでアプリを登録後にFirebaseに接続するための情報が表示されるのでそれをコピー。<br />
３．ローカル環境に.envファイルを作成し、２の情報を設定する。<br />

あとはnpm install、npm run devで起動するはず。

### 備考
初回はhttp://localhost:3000/loginに飛ぶので「ユーザ登録はこちらから」を押下してユーザー登録を行う。
登録後、再度http://localhost:3000/loginで登録済みのメールアドレス、パスワードでログインする。
ログイン成功ならhttp://localhost:3000/に遷移し、「ログインできました！」が表示されればOK
ログイン認証状態でなければhttp://localhost:3000/には遷移しない。
