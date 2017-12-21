var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

var insertData = function(db,callback){
    
    var collection = db.collection('site');

    var data = [{"name":"newbee","url":"ww.test.com"},{"name":"lee","url":"lee.com"}];

    collection.insert(data,function(err,result){
        if(err){
            console.log('Error:'+err);
            return;
        }
        callback(result);

    });
}

var selectData = function(db,callback){
    
    var collection = db.collection('site');

    var whereStr ={"name":"newbee"};
    
    collection.find(whereStr).toArray(function(err,result){
        if(err)
        {
            console.log("Error:"+err);
            return;
        }
        callback(result);
    });
}

var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"name":"newbee"};
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
var delData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('site');
  //删除数据
  var whereStr = {"name":"newbee"};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbase = db.db("testdb");
    console.log("database connected");
    /*
    dbase.createCollection("runoob",function(err,res){
        if(err) throw err;
        console.log("collection create");
        db.close()
    });
    insertData(dbase,function(result){
        console.log(result);
        db.close();
    });
    selectData(dbase,function(result){
        console.log(result);
        db.close();
    });
    updateData(dbase,function(result){
        console.log(result);
        db.close();
    });*/
    delData(dbase,function(result){
        console.log(result);
        db.close();
    });
});
