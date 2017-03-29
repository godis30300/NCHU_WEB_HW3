function createTable() {
    var name = document.form0.username.value;
    var birth = document.form0.birth.value;
    var sex = document.form0.sex.value;
    var hobby = "";
    for (var i = 0; i <= 2; i++) {
        if (document.form0.hobby[i].checked) hobby += document.form0.hobby[i].value + ",";
    }
    var note = document.form0.note.value;

    var obj = document.getElementById('text_field');
    //div
    var divs = document.createElement('div');
        divs.setAttribute = ("align", "center");
    //table 製作
    var tbl = document.createElement('table');
        tbl.style.border = "medium inset #00FF00";
        tbl.rules = "all";
    //SELECT
    var se = document.createElement("SELECT");
    se.setAttribute("id", "mySelect");
    var op = new Option("red","red",true,false);
    se.appendChild(op);
    op = new Option("green","green",false,false);
    se.appendChild(op);
    op = new Option("yellow","yellow",false,false);
    se.appendChild(op);
    op = new Option("blue","blue",false,false);
    se.appendChild(op);
    op = new Option("black","black",false,false);
    se.appendChild(op);
    //botton
    var btn1 = document.createElement("BUTTON");
    btn1.appendChild(document.createTextNode("改變顏色"));
    btn1.id = document.getElementsByTagName("table").length;
    //btn1.setAttribute("onclick","setColor("+document.getElementsByTagName("table").length+");");
    btn1.addEventListener("click",function(){setColor(this.id);});
    //name
    var tr = document.createElement('tr');
    tr.appendChild( document.createElement('td') );
    tr.appendChild( document.createElement('td') );
    tr.cells[0].appendChild( document.createTextNode('Name') );
    tr.cells[1].appendChild( document.createTextNode(name) );
    tbl.appendChild(tr);
    //birth
    var tr1 = document.createElement('tr');
    tr1.appendChild( document.createElement('td') );
    tr1.appendChild( document.createElement('td') );
    tr1.cells[0].appendChild( document.createTextNode('Birth') );
    tr1.cells[1].appendChild( document.createTextNode(birth) );
    tbl.appendChild(tr1);
    //sex
    var tr2 = document.createElement('tr');
    tr2.appendChild( document.createElement('td') );
    tr2.appendChild( document.createElement('td') );
    tr2.cells[0].appendChild( document.createTextNode('Sex') );
    tr2.cells[1].appendChild( document.createTextNode(sex) );
    tbl.appendChild(tr2);
    //hobby
    var tr3 = document.createElement('tr');
    tr3.appendChild( document.createElement('td') );
    tr3.appendChild( document.createElement('td') );
    tr3.cells[0].appendChild( document.createTextNode('Hobby') );
    tr3.cells[1].appendChild( document.createTextNode(hobby) );
    tbl.appendChild(tr3);
    //note
    var tr4 = document.createElement('tr');
    tr4.appendChild( document.createElement('td') );
    tr4.appendChild( document.createElement('td') );
    tr4.cells[0].appendChild( document.createTextNode('Note') );
    tr4.cells[1].appendChild( document.createTextNode(note) );
    tbl.appendChild(tr4);

    divs.appendChild(tbl);
    divs.appendChild(se);
    divs.appendChild(btn1);
    obj.appendChild(divs);
}

function deleteDivs(){
    var f = document.getElementById("text_field");
    var childs = f.childNodes;
    for(var i = childs.length - 1; i >= 0; i--) {
    f.removeChild(childs[i]);
  }
}

function setColor(n1) {
    var i = document.getElementsByTagName("table")[n1];
    var s = document.getElementsByTagName("table")[n1].nextSibling;
    i.style.border  = "medium inset "+s.options[s.selectedIndex].value;
 }
