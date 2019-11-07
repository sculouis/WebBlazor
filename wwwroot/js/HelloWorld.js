
var Bussiness = function(){}
Bussiness.prototype.Init = function(text){
    console.log(text)
    $('.selectpicker').selectpicker("refresh")
    $('.datetimepicker1').datetimepicker({
        format: 'YYYY/MM/DD',
    });
}
Bussiness.prototype.PO = []

//呼叫Web的function
Bussiness.prototype.CallNet = function(){
    DotNet.invokeMethodAsync('WebBlazor','ReturnArrayAsync')
    .then(function(data){
        Bussiness.prototype.PO = data
        console.log(Bussiness.prototype.PO)
    })
}
Bussiness.prototype.Selected=function(){
    $("#PRSearchRow").show()
}

Bussiness.prototype.SearchResult=function(){
    $("#PRDetailTable").show()
}

var obj = new Bussiness()
