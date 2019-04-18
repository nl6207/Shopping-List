var list = [];
var prices =[];
var items = list.length;
var ttlPrice = 0;
console.log(list);
$(".submit").click(function(){
    var image = $(".url").val();
    var name = $(".product").val();
    var price = $(".price").val();
    if(name === "" || price === ""){
        $(".missing").show();
    } else{
        $(".list").append("<div class='flex list2 pic'>"+"<img src=" + image +">"+"<p>"+ name +"</p>"+"<p>$"+price+"</p>"+"</div>");
        $("input").val("");
        $(".missing").hide();
    }
    parseInt(price);
    parseInt(ttlPrice);
    list.push(name);
    items = list.length;
    $(".num").html(items);
    prices.push(price);
    ttlPrice =0; 
    prices.forEach(function(element){
    ttlPrice =ttlPrice+ parseInt(element);
        console.log(ttlPrice);
    });
    $(".ttlprc").text(ttlPrice);
});
$(".buy").click(function(){
    items = list.length;
    list.push(name);
    $(".confirm").show();
    $(".yes").show();
    $(".no").show();
    $(".num").html(items);
    $(".num").show();
    $(".yes").click(function(){
        if (items === 0){
            alert("Thank you for purchasing nothing.");
            $(".hide").hide();
            $(".but").hide();
            $(".input").hide();
            $(".reset").hide();
            $(".reset2").show();
        }else{
            if(ttlPrice > 50){
                alert("You have purchased "+items+" items for $"+ttlPrice+". You must have a lot of money! Thank you for purchasing "+ items[0] +" and come again! ^-^");
            }else if (ttlPrice < 10){
                alert("You have purchased "+items+" items for $"+ttlPrice+".You are really broke. But thank you for purchasing "+ items[0] +" and come again! ^-^");
            }else{
                alert("You have purchased "+items+" items for $"+ttlPrice+". Thank you for purchasing "+ list[0] +" and come again! ^-^");
                $(".hide").hide();
                $(".but").hide();
                $(".input").hide();
                $(".reset").hide();
                $(".reset2").show();}
        }
    });
    $(".no").click(function(){
        $('.hide').hide();
    });
});
$(".reset").click(function(){
    list = [];
    prices = [];
    ttlPrice = 0;
    $(".ttlprc").text(ttlPrice);
    items= list.length;
    $(".list2").remove();
    $(".num").html(items);
});
$(".reset2").click(function(){
     list = [];
    prices = [];
    items= list.length;
    $(".list2").remove();
    $(".num").html(items);
    $(".input").show();
    $('.reset').show();
    $('.buy').show();
    $(".hide").hide();
});