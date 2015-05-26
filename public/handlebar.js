$(document).ready(function(){
console.log("on")
	$(".page").on("click",".glyphicon",function(){
   		//console.log(this);

    	$(this).parent('div').remove();  
       	 console.log(this.id1)
       		$.ajax({
            	type : "delete",
                url : "/products/" + this.id,
               
                success : function(data){ 
                	if (data.success === true){
                		console.log(data);
                		$(this).parent('div').remove();  
					} 
				}
       		});
    });

		$.ajax({
              url:"/products/",
              type:"get",
            success:function(data){
                for(i=0;i<data.length;i++){
                	var source = $("#template").html();
					var temp = Handlebars.compile(source);
					html=temp({item:data[i].item, price:data[i].price, des:data[i].des, id:data[i].id})
						console.log(data[i].id);
					$(".page").append(html);
                }    
            }
        });

	$(".add").on("click",function(event){
		event.preventDefault();
		var item=$("input[name='item']").val();
		var des=$("input[name='des']").val();
		var price=$("input[name='price']").val();
		console.log("hi");

		$.ajax({
			url:"/products",
			type:"post",
			data:{
				item,
				des,
				price,
			},
	


			success:function(data){
				var source = $("#template").html();
				var temp= Handlebars.compile(source);
				console.log(data.id);
				$(".page").append(temp(data));
				$(".abc").trigger('reset');

			}
		});
	});
});