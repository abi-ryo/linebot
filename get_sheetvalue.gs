function getSheetValue() {
  const sheet = SpreadsheetApp.getActiveSheet(); 

  function get_tireinfo(num){
    var price = sheet.getRange(num, 3).getValue()
    var tire_url = sheet.getRange(num, 4).getValue();
    var compare = sheet.getRange(num, 7).getValue();
    tire_info = price + "円やな" + "\n" + "前回との価格比は"　+ compare + "%" +"\n\n" + tire_url;
    Logger.log(price)
      
    //価格比
    var last_price = sheet.getRange(num, 6).getValue();
    var raito = (price /　last_price) * 100 - 100
    sheet.getRange('F'+ num)
    .setFormula(price)
    sheet.getRange('G'+ num)
    .setFormula(raito)
  }

//test
  var choicetire_kye = "VE"
  
  if(choicetire_kye == "VE"){
    num = 2
    get_tireinfo(num);    
  }else if(choicetire_kye == "TR"){
    num = 3
    get_tireinfo(num);
  }

  return tire_info;
}

