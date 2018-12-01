function create_template_message() {
  var kusa = "あしくさいぞ"
  var nanba = "このボルト固くてゆるまんねんけど"
  
  if(user_message.indexOf(kusa) > -1){
    //あしくさいぞ
    reply_messages = "うっさいんじゃぶちころすぞ"
  } else if(user_message.indexOf(nanba) > -1){
    //なんば
    reply_messages = "@なんば　じぶんでやれやぁ!" 
    Logger.log(reply_messages)
  }
  
  return template_messages;
}
