var myStyles = ['#357AB4','#268BD2','#B81774','#5A5B9B','#A14039','#357DD6']
var width = 10;
d3.selectAll('.item')
.data(myStyles).style({
	'color':'white',
	'background' : function(d){
		console.log("hello");
		return d;
	},
	'width' : function(width){
		return width; 
	}
})