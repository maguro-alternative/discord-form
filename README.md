# discord-form

# 使い方
こんな感じのGoogle Formを作成します。
<img width="857" alt="image" src="https://github.com/user-attachments/assets/683ad68f-1df3-4a60-8cb6-a43469d3e99c">

スクリプトエディタでGASを作成します。

![image](https://github.com/user-attachments/assets/173c8724-8092-4d83-b031-15f111e5253a)

main.gsの内容を貼り付けます。

以下のようにトリガーの設定をします。

<img width="711" alt="image" src="https://github.com/user-attachments/assets/92abe0e9-e28a-449c-bdb9-a0f3c6b2538d">

Discordのテキストチャンネルの設定画面へ。

![image](https://github.com/user-attachments/assets/e1000d3d-2f09-476f-8523-ab293f2aa32f)

新しいウェブフックを作成でWebhookを作成します。

![image](https://github.com/user-attachments/assets/6e837f66-6ae4-4f20-9a14-65398fa19536)

作成したWebhookのURLをコピーします。

![image](https://github.com/user-attachments/assets/981918cb-f70c-479b-8544-a23783224cf6)

DiscordWebhookURLにDiscordWebhookのURLを貼り付けます。

```js
const DiscordWebhookURL = "https://discord.com/api/webhooks/xxxxxxxxxxxx";
```
