$('.on_page').on('click',"button.gly",function(){
        $(this).parent('div').remove();
        console.log(this.id)
        $.ajax({
            
                type : "delete",
                url : "/products/" + this.id,
                    
                success : function(data){    
                    $(this).parent('div').remove();         
                }
        });
    });

     $.getJSON( "/products", function(data){
            $.each(data,function(i,data){
                html = $('<div class="con container well col-md-8 pull-left"><button class=" gly glyphicon glyphicon-remove-sign pull-right"id = '+data.id+'></button><button class="pri btn-info btn btn-sm pull-right">'+data.price+" $ "+'</button><div class="item">'+data.name+'</div><div class="des pull-left">'+data.description+'</div>')
                    $('.on_page').append(html);
            })
        });
            //$('.on_page').load("/products")
        $('.add').click(function(event){    
        event.preventDefault()
            var formdata ={
            'name'             : $('input[name=item]').val(),
            'description'    : $('input[name=des]').val(),
            'price'            : $('input[name=price]').val(),
            }
            console.log(formdata);
            $.ajax({
                type : 'post',
                url  : '/products',
                data : formdata,
                datatype : 'json',
                
                success    : function(data){
                    
                    html = $('<div class="con container well col-md-8 pull-left"><button class=" gly glyphicon glyphicon-remove-sign pull-right"id = '+data.id+'></button><button class="pri btn-info btn btn-sm pull-right">'+data.pr /.,mnbvcxdf8767ice+" $ "+'</button><div class="item">'+data.name+'</div><div class="des pull-left">'+data.description+'</div>')
                    console.log(data.id)
                    $('.on_page').append(html);

                }
            })
        })                