
var Bussiness = function(){}
Bussiness.prototype.Init = function(text){
    console.log(text)
    $('.selectpicker').selectpicker("refresh")
    $('.datetimepicker1').datetimepicker({
        format: 'YYYY/MM/DD',
    });
}
Bussiness.prototype.PO = []
Bussiness.prototype.CallNet = function(){
    DotNet.invokeMethodAsync('WebApplication1','ReturnArrayAsync')
    .then(function(data){
        Bussiness.prototype.PO = data
        console.log(Bussiness.prototype.PO)
    })
}
Bussiness.prototype.Selected=function(){
    $("#PRSearchRow").show()
}

Bussiness.prototype.Selected=function(){
    $("#PRSearchRow").show()
}

Bussiness.prototype.SearchResult=function(){
    $("#PRDetailTable").show()
}

var obj = new Bussiness()
