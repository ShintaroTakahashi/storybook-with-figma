# storybook と Figma の連携について調査

storybook の中で Figma を見たい

- [Doc](https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma)
- [addon の GitHub](https://github.com/pocka/storybook-addon-designs/blob/master/README.md)
- [どうやら公式じゃないやつ](https://github.com/hharnisc/storybook-addon-figma)もあるっぽい
  - 未調査

## 出来る事

1. storybook 上に Figma のデータを表示させる(**調査対象**)

- 前述の storybook-addon-designs を使えば可能
- Figma の共有リンクを使用するため、frame 単位でも表示可能
  - ただし制限あり？(後述)

2. Figma 側に story を表示させることもできる(調査対象外)

- Chromatic に story をデプロイする必要がある
- Chromatic で共同編集者権限が必要
- Figma の編集権限も必要
- Figma にプラグインを入れて Chromatic の URL で取得する
- 詳細は未調査

## 手順

- `yarn add -D storybook-addon-designs`
- `.storybook/main.js`で addon を登録する
  - `module.exports = {addons: [...any-addons, "storybook-addon-designs"],};`
- stories ファイル内でコンポーネントに対して`parameter`を渡す
  - `export const Hoge = { parameters: { design: { type:"figma", url:"表示したいfigmaのURL" } }`
- アドオンが有効になっていると Design タブが追加されてそこに figma が埋め込まれる

## その他メモ

- 恐らく Figma の閲覧権限さえあれば見れる
- 調べた限りでは url はひとつしか渡せなそうなので、複数ファイルを 1 か所に埋め込むとかは不可？
- frame は 単位で URL を取れるので frame 単位で表示可能
  - ただしネストされた 子 frame は Figma の機能的に url を生成出来ないので不可っぽい
    - https://forum.figma.com/t/link-to-nested-frames/3318
  - 子 frame を選択してＵＲＬ発行しても page に直下で置かれている親 frame が表示される
- 小さいコンポーネント単位で表示させるには figma 上でコンポーネント単位の frame を page 直下に置く必要がある
  - ページ全体デザインの frame とは別に作っておく必要がある
- storybook 上でいつ figma 側の更新日時「Edited xx minutes ago」みたいな表示もある
