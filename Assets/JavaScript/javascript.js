$(document).ready(function(){
    var score = 0;
    var name = document.getElementById("inputName");
    $("#topHome").click(function(){
        window.location.reload();
        });
    $("#btn1").click(function(){
        if(name.value == ""){
            alert("Please Enter Name First");
        }else
        {
            $(".questions1").css({
                visibility:"visible"
            });
            $("#name").css({
                visibility:"visible"
            });
            $("#topScore").css({
                visibility:"visible"
            });
            
        }
        
        scorePrint();
    });

    $(".nq1").click(function(){
            setInterval(fn1,1000);

            var answer = $("input[name='q1']:checked").val();
            if(answer == undefined){
                alert("Please Select Any Answer");
            }
            else if(answer == "Beijing"){
                score = score + 10;
                $("input[name='q1']:checked").parent().css({
                    "background-color":"Green"
                });
            }
            else
            {
                $("input[name='q1']:checked").parent().css({
                    "background-color":"red"
                });
            }

            scorePrint();
            
            function fn1(){
                $(".questions2").css({
                    visibility:"visible"
                    });
            }            
    });

    $(".nq2").click(function(){
        setInterval(fn2,1000);

            var answer = $("input[name='q2']:checked").val();
            if(answer == undefined){
                alert("Please Select Any Answer");
            }
            else if(answer == "Rome"){
                score = score + 10;
                $("input[name='q2']:checked").parent().css({
                    "background-color":"Green"
                });
            }
            else
            {
                $("input[name='q2']:checked").parent().css({
                    "background-color":"red"
                });
            }

            scorePrint();
            
            function fn2(){
                $(".questions3").css({
                    visibility:"visible"
                    });
            }          
    });

    $(".nq3").click(function(){
        setInterval(fn3,1000);

            var answer = $("input[name='q3']:checked").val();
            if(answer == undefined){
                alert("Please Select Any Answer");
            }
            else if(answer == "Brussels"){
                score = score + 10;
                $("input[name='q3']:checked").parent().css({
                    "background-color":"Green"
                });
            }
            else
            {
                $("input[name='q3']:checked").parent().css({
                    "background-color":"red"
                });
            }

            scorePrint();
            
            function fn3(){
                $(".questions4").css({
                    visibility:"visible"
                    });
            }          
    });

    
    $(".nq4").click(function(){
        setInterval(fn4,1000);

            var answer = $("input[name='q4']:checked").val();
            if(answer == undefined){
                alert("Please Select Any Answer");
            }
            else if(answer == "Washington"){
                score = score + 10;
                $("input[name='q4']:checked").parent().css({
                    "background-color":"Green"
                });
            }
            else
            {
                $("input[name='q4']:checked").parent().css({
                    "background-color":"red"
                });
            }

            scorePrint();
            
            function fn4(){
                $(".questions5").css({
                    visibility:"visible"
                    });
            }          
    });

    $(".nq5").click(function(){
        setInterval(fn5,1000);
        var answer = $("input[name='q5']:checked").val();
        if(answer == undefined){
            alert("Please Select Any Answer");
        }
        else if(answer == "Delhi"){
            score = score + 10;
            $("input[name='q5']:checked").parent().css({
                "background-color":"Green"
            });

        }
        else
        {   
            $("input[name='q4']:checked").parent().css({
                "background-color":"red"
            });
        }
        function fn5(){
            $("#endBox").css({
                visibility:"visible"
                });
            $("#name").css({
                visibility:"hidden"
            });
            $("#topScore").css({
                visibility:"hidden"
            });
            $("#fsn").html(name.value + "<br>");
            $("#fs").html("Your Final Score :" + score);
        }
    });
    function scorePrint(){
        $("#name").html(name.value);
        $("#topScore").html("<h3> Your Score : " + score + "</h1>");
    }
});