$('#sidebar-left').load("./jsonDemoData.html", function () {
    jsonDemoDatafun();                      
    });

function jsonDemoDatafun() {
    $.ajax({
        url: "./data/staticIOT.json",
        success: function (result) {
            var vmIOTsidebarLeft = new Vue({
                el: '#numberOfAlarms',
                data: result
            });
            window.vmIOTsidebarLeft = vmIOTsidebarLeft;
        }
    });
}