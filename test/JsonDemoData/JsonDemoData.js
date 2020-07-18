$('#sidebar-left').load("./jsonDemoData.html", function () {
    jsonDemoDatafun();                      
    });

function jsonDemoDatafun() {
    $.ajax({
        url: "./jsonDemoData.json",
        success: function (result) {
            var vmformDemoData = new Vue({
                el: '#formDemoData',
                data: result
            });
            window.vmformDemoData = vmformDemoData;
        }
    });
}