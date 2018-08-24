// console.log("this is js code.");

$(function() {


    $(".change-devoured").on("click" , function(){
        var keyPoint = $(this).attr("data-devoured");
        console.log(typeof(keyPoint));

        var isTrueSet = (keyPoint == 'true');
        if(isTrueSet){

            console.log("in click event");
            var id = $(this).attr("data-id");
            $(this).attr("data-devoured", "false");
            var data_devoured = $(this).attr("data-devoured");
            console.log(id);
            console.log(data_devoured);
            // debugger;
            var newDevoured = {
                devoured:data_devoured
            };
    
            $.ajax("/api/burgers/" + id, {
                type:"PUT",
                data:newDevoured
    
            }).then(function(result){
                console.log("change devoured to "+ true);
                location.reload();
    
            })


        }else{

            console.log("in click event");
            var id = $(this).attr("data-id");
            $(this).attr("data-devoured", "true");
            var data_devoured = $(this).attr("data-devoured");
            console.log(id);
            console.log(data_devoured);
            // debugger;
            var newDevoured = {
                devoured:data_devoured
            };
    
            $.ajax("/api/burgers/" + id, {
                type:"PUT",
                data:newDevoured
    
            }).then(function(result){
                console.log("change devoured to "+ true);
                location.reload();
    
            })


        }

    });

    $("#submit").on("click" , function(){
        var newburgerName = $("#text").val();
        if(newburgerName == ""){
            
            alert("Please Input something!!");


        }else{
        console.log("just submit")
        $(".row").attr("hidden" , false);
      
        var newburgerName = $("#text").val();
        
        var newArr = {
            newburgerName
        };
        
        console.log("new text: " ,newArr);
        // debugger;
        $.ajax("/api/burgers", {
            type:"POST",
            data:newArr
        }).then(function(result){
            console.log("new burger just added.");
            // location.reload();
        })


        }

    });
});

