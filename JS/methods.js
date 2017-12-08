function toggleNav(){
navSize = document.getElementById("mySidenav").style.width;
if (navSize == '250px') {
return close();
}
return open();
}
function close() {
document.getElementById("navmenu").style.marginLeft="0px";
document.getElementById("bodywrap").style.marginLeft="0px";
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft= "0";

}
function open() {
document.getElementById("navmenu").style.marginLeft="250px";
document.getElementById("bodywrap").style.marginLeft="250px";
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px"; 

}
var count=0;
function addlist()
{
  
count++;
var fielddata=document.getElementById("listtb").value;    
var data='<li id="lirow'+count+'"><input type="checkbox" class="filled-in" id="filled-in-box'+count+'"><label for="filled-in-box'+count+'">'+fielddata+'</label><i id="delbut'+count+'" onclick="deleteli('+count+')" class="fa fa-times-circle cross" aria-hidden="true"></i></li>';
document.getElementById("listdata").innerHTML+=data;
}
function deleteli(no)
{
    
    document.getElementById("filled-in-box"+no).outerHTML="";
    document.getElementById("delbut"+no).outerHTML="";
    count--;
}

//table script
function edit_row(no)
{
document.getElementById("edit_button"+no).style.display="none";
document.getElementById("save_button"+no).style.display="block";
var x=document.getElementById("coldata").value;

for(i=1;i<=x;i++)
    {
         var da=document.getElementById("row"+no+"cold"+i+"")
         var f=da.innerHTML;
        da.innerHTML="<input type='text' id='rowd"+no+"cold"+i+"' value='"+f+"'>";
    }
}

function save_row(no)
{
  var x=document.getElementById("coldata").value;
 
for(i=1;i<=x;i++)
    {
var g=document.getElementById("rowd"+no+"cold"+i+"").value;
document.getElementById("rowd"+no+"cold"+i+"").outerHTML=g;
    }

document.getElementById("edit_button"+no).style.display="inline";
document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var x=document.getElementById("coldata").value;
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var html='';
   var html2=''; 
    
    alert("t2:"+table_len+"");
    if(table_len==0)
        {
            for(i=1;i<=x;i++)
        {
            var data=document.getElementById("col"+i).value;
            html2+='<th id="row'+table_len+'cold'+i+'">'+data+'</th>';
       
    }
            var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'>"+html2+"<td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> </td></tr>";
document.getElementById("save_button"+table_len).style.display="none";
        }
    else{
        for(i=1;i<=x;i++)
        {
            var data=document.getElementById("col"+i).value;
            html+='<td id="row'+table_len+'cold'+i+'">'+data+'</td>';
    }
       
var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'>"+html+"<td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
document.getElementById("save_button"+table_len).style.display="none";
   
    }
 for(i=1;i<=x;i++)
     {
         document.getElementById('col'+i+'').value="";
     }
}


function addcol()
{ 
 var x=document.getElementById("coldata").value;
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
    alert(table_len);
 var html="<tr id='row"+table_len+"'>";
    for(i=1;i<=x;i++)
        {
    html+='<td><input type="text" id="col'+i+'"></td>';
         
}
    html+='<td><input type="button" class="add" onclick="add_row();" value="Add Row"></td></tr>';
   
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 table.insertRow(table_len).outerHTML=html;
 document.getElementById("coldata").style.display="none";
 document.getElementById("addcl").style.display="none";

}

