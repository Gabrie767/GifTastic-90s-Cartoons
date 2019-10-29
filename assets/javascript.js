$(document).ready(function() 

{ var topics=["Daria", "Dexter's Laboratory", "Powerpuff Girls", "Bevis and Butthead", "The Ren and Stimpy Show", "South Park", "Hey Arnold!", "Johnny Bravo", "The Angry Bevers", "Rugrats"];
    console.log(topics);
    renderButtons();

     
     function renderButtons() {
        $("#buttons-list").empty();

        for (var i = 0; i < topics.length; i++) {
                var  x = $("<button>");
                x.addClass("cartoon");
                x.attr("data-name", topics[i]);
                x.text(topics[i]);
                $("#buttons-list").append(x);
                console.log(topics[i]);
        }
    }

  
    $("#add-cartoon").on("click", function(event){
        event.preventDefault();
        var cartoon = $("#cartoon-input").val().trim();
       
        topics.push(cartoon);

        renderButtons();
        $(".cartoon").on("click", another90sCartoon);
    });

$(".cartoon").on("click", another90sCartoon);

function another90sCartoon() {
    $("#cartoon-group").empty();
    var cartoon = $(this).attr("data-name");
    console.log(cartoon);
    var APIkey = "dwpFk8wj4VqxE6LHTTsRcHtld4kHL1mC";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=" + APIkey + "&limit=10";
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
		var results = response.data;
		
        for (var i = 0; i <results.length; i++){
        var imageURL = results[i].images.fixed_height.url;
        var cartoonImage = $("<img>");

        cartoonImage.attr("src", imageURL);
        cartoonImage.attr("alt", "cartoon image");

        $("#cartoon-group").append(cartoonImage);
		}
		

		

	});
   
}
});