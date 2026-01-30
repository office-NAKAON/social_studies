# GitHub へのプッシュ手順

リポジトリ: **office-NAKAON / social_studies**  
（https://github.com/office-NAKAON/social_studies）

## 1. Git のユーザー設定（初回のみ）

コミットに必要な名前とメールを設定します。  
※ このリポジトリだけに適用する場合は `--global` を付けずに実行してください。

```powershell
git config user.name "中尾 和博"
git config user.email "あなたのメールアドレス@example.com"
```

## 2. コミットとプッシュ

プロジェクトフォルダ（South_America_cct）を開いた状態で、ターミナルで次を順に実行します。

```powershell
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git push -u origin main
```

- `git push` のときに GitHub のログイン（ブラウザまたはトークン）を求められたら、指示に従って認証してください。
- 既に `main` 以外のブランチで作業している場合は、`git push -u origin ブランチ名` に読み替えてください。

## 3. リポジトリを Private に変更する

Git の操作では「公開/非公開」は変更できません。GitHub の画面で行います。

1. https://github.com/office-NAKAON/social_studies を開く
2. **Settings**（設定）をクリック
3. 左の一番下 **Danger Zone** をクリック
4. **Change repository visibility** の **Change visibility** をクリック
5. **Make private** を選び、指示に従って確定する

これでリポジトリが Private になります。
