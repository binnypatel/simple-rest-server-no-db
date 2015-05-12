$(document).ready(function(){
  console.log("hi")    
 $(".page").on("click","span",function(){
   console.log("hello");
    $(this).parent('div').remove();
        console.log(this.id)
        $.ajax({
            
                type : "delete",
                url : "/products/" + this.id,
                    
                success : function(data){    
                    //$(this).parent('div').remove();         
                }
        });
    });
        $.ajax({
              url:"/products/",
              type:"get",
              success:function(mydata){
                 for(i=0;i<mydata.length;i++){
                 $(".page").append('<div class="con container well col-md-8 pull-left"><span id="'+mydata[i].id+'" class="delete glyphicon glyphicon-remove pull-right"></span><button class="btn btn-primary btn-sm pull-right">'+mydata[i].price+'</button><h3 class="item">'+mydata[i].item+'</h3><h4 class="des pull-left">'+mydata[i].des+'</h4></div>')
                }    
              }
        });

    $(".btn").on('click',function(event){
          //console.log(this);
         event.preventDefault();
          var item =$("input[name='item']").val();
          var des =$("input[name='des']").val();
          var price =$("input[name='price']").val();
          $.ajax({
            url:"/products",
            type:"Post",
            data:{
              item,
              des,
              price,
            },
            dataType:'json',

            success:function(data){
             // console.log(data);
              $(".page").append('<div class="con container well col-md-8 pull-left"><span class="glyphicon glyphicon-remove-sign pull-right"id='+data.id+'></span><button class="btn btn-primary btn-sm pull-right">'+data.price+'</button><h3 class="item">'+data.item+'</h3><h4 class="des pull-left">'+data.des+'</h4></div>')
                
            }
            });
          });
        });
