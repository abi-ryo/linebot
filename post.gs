//ポストで送られてくるので、送られてきたJSONをパース
function doPost(e) {
  var json = JSON.parse(e.postData.contents);

  //返信するためのトークン取得
  reply_token= json.events[0].replyToken;
  if (typeof reply_token === 'undefined') {
    return;
  }

  //送られたメッセージ内容を取得
  user_message = json.events[0].message.text; 

  //ボタン処理
  var events = json["events"];
  for (var i = 0; i < events.length; i++) {
    if (events[i].type == "message") {
      button_reply(events[i]);
    } else if (events[i].type == "postback") {
      button_back(events[i]);
    }
  }

  //メッセージ内にキーを含むか検索
   var keywords = "OK くさいも!"   
   if(user_message.indexOf(keywords) > -1){
     create_message(user_message);
     //タイヤ情報のメッセージを返信
     reply(reply_messages,reply_token);     
   }
   
   //メッセージを2回に分ける　配列にする

  //httpのステータスコードを返す
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}
