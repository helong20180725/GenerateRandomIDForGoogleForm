function addUid(){
  let newId = createId();
  let form = FormApp.openById("Your Google Forms ID");
  let ss = SpreadsheetApp.openById("Your Google SpreadSheet ID");
  let ws = ss.getSheetByName("Your sheet name");
 
  let data = ws.getDataRange().getValues();
  
  let rowNum = data.length;
  let oldId = ws.getRange(1, 4).getValue();
  ws.getRange(rowNum, 3).setValue(oldId);
  
  ws.getRange(1, 4).setValue(newId);
  form.setConfirmationMessage("Thank you very much for your time and kind participation. \
  The following 5-digit code is for you to verify the completion of survey\
  Please properly record it.\n-----" + newId); 
}

function createId(){
  let scriptProperties = PropertiesService.getScriptProperties();
  let keys = scriptProperties.getKeys();
  let uid = genRandNum();
  while(keys.indexOf(uid) >= 0){
    uid = genRandNum();
  }
  scriptProperties.setProperty(uid, new Date());  
  return uid;
}

function genRandNum(){
  return Math.floor(Math.random() * (90000-10000))+ 10000;
  // 10000 to 90000
}
