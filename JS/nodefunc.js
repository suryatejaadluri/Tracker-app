var fs=require('fs');
var os=require("os");
console.log(os.arch());
// function addList()
// {
    // fs.writeFileSync()
// 
// }
//     var datas=fs.readFile('notes-data.json');

// var listdata=JSON.parse(datas);
// console.log(listdata["data"]);

var filename="C:\Users\Suryateja\Desktop\Tracker app\JS\notes-data.json";
var xhr=new XMLHttpRequest();


xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   
   var z=JSON.parse(this.responseText);
 console.log(z.data);
 
 
  }
};
xhr.open('GET',filename);
xhr.send();

function Donelist()
{ alert("surya");
//    var data=fs.readFileSync('notes-data.json');
//    alert(data.list);
var filename="C:\Users\Suryateja\Desktop\Tracker app\JS\notes-data.json";
var request=new XMLHttpRequest();


request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   
   var z=JSON.parse(this.responseText);
 alert(z.data);
 
 
  }
};
request.open('GET',filename);
request.send();
}



