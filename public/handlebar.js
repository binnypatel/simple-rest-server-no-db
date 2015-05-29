$(document).ready(function(){
	
console.log("on")
	$(".page").on("click",".glyphicon",function(){
   		//console.log(this);

    	var del=this; 
       	 console.log(this.id1)
       		$.ajax({
            	type : "delete",
                url : "/products/" + this.id,
               
                success : function(data){ 
                	if (data.success === true){
                		console.log(data);
                		$(del).parent('div').remove();  
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
						//console.log(data[i].id);
					$(".page").append(html);
                }    
            }
        });

	$(".add").on("click",function(event){

		event.preventDefault();

		var itemname=$("input[name='item']").val();
		var desname=$("input[name='des']").val();
		var pricename=$("input[name='price']").val();
		console.log("hi");
	
		//var pr =parseInt("price");

			//console.log(typeof(price));

		 if(isNaN(pricename)){
		 	alert("Enter Number");
		 }
		$.ajax({
			url:"/products",
			type:"post",
			data:{
				item:itemname,
				des:desname,
				price:pricename,
			},

			success:function(data){
				console.log(data.item);
				var source = $("#template").html();
				var temp= Handlebars.compile(source);
				//console.log(data.id);
				$(".page").append(temp(data));
				$( ".form-control" ).trigger( "reset" );

			}
		});
	});

});
