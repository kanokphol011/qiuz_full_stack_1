$(function(){

    $("#loadwebapi").click(function(){
        $("#wpanel").empty();
        var city = $("#city").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" +city +"&appid=e89a1e9614a2f0d6ebacd2f9d73cd287"
    
        $.get(url, function(data){
            console.log(data);
            var row = "<h1>" + data.name + "</h1>";
            row += "<h3>" + data.weather[0].main + "</h3>";
            row += "<h3>" + data.main.temp/10 + "C</h3>";
            if(data.weather[0].main == "Clouds"){
                row += "<h4><img class = 'font' src="+"\"Clounds.png\""+" alt='' style="+"\"width:48px;height:48px;\""+"><h4>";
            }
            if(data.weather[0].main == "Clear"){
                row += "<h4><img class = 'font' src="+"\"Clear.png\""+" alt='' style="+"\"width:48px;height:48px;\""+"><h4>";
            }
            if(data.weather[0].main == "Rain"){
                row += "<h4><img class = 'font' src="+"\"rain.png\""+" alt='' style="+"\"width:48px;height:48px;\""+"><h4>";
            }
            if(data.weather[0].main == "ThunderStorm"){
                row += "<h4><img class = 'font' src="+"\"Thunder.png\""+" alt='' style="+"\"width:48px;height:48px;\""+"><h4>";
            }
            if(data.weather[0].main == "Mist"){
                row += "<h4><img class = 'font' src="+"\"mist.png\""+" alt='' style="+"\"width:48px;height:48px;\""+"><h4>";
            }

            $("#wpanel").append(row);
        });
    
    });

});
