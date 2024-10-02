const DiscordWebhookURL = "";
function onFormSubmit(e) {
  const responses = e.response.getItemResponses(); // フォームの回答を取得
  const message = responses[0].getResponse();
  sendDiscordWebhook(message);
}

function sendDiscordWebhook(notice) {
  const payload = {
    content: notice,
  };
  UrlFetchApp.fetch(DiscordWebhookURL, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  });
}
