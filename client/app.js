$(document).ready(function(){
   
        $(document).mousemove(function(event){
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY);
            
            
    });
    var count=0, points = [];
    $('.point').click(function(e){
        
        var ele = e.currentTarget;
        var offsetLeft = $(ele).offset().left;
        var offsetTop = $(ele).offset().top;
        points.push({left:offsetLeft,top:offsetTop-90});
        console.log('left----',offsetLeft);
        console.log('top',offsetTop);
        console.log(points);
        if(count < 2) {
             $('#checkme').text('check me');
        $('#incorrect').text('');
        $(this).css('background-color','orange');
        var str=$(this).attr('id');
                calc.setVal(parseInt(str.split('point')[1]));
                console.log(calc.getVal());
        count++;
            if(count == 2){
                $('#checkme').prop('disabled',false);
                var canvas=document.getElementById('canvas');
                var context=canvas.getContext('2d');
                context.beginPath();
                context.moveTo(points[0].left,points[0].top);
                context.lineTo(points[1].left,points[1].top);
                context.lineWidth=5;
                context.strokeStyle='red';
                context.stroke();
                
                //$('#shape').append(createLine(points[0], points[1]));
        }
        }
        
            
       
       
    });
    
    $('#play').click(function(){
        alert('remove');
        $('#play').remove();
    })
    
$('#checkme').click(function(){
    if(calc.compute()){
        $('#checkme').text('success');
       // $('#container').append('<button id="play"> play again </button>');
    }
    else{
    $('#checkme').text('WRONG');
        $('#incorrect').text('Try Again');
         $('#checkme').prop('disabled',true);
         $('.point').css('background-color','black');
        calc.del();
    count=0;
        $('.point').bind("click");
        
        
    }
    });
})

var calc=(function(){
   var arr=[];
    return {
        compute:function(){
         if(arr[0]>arr[1]){
             var sub=arr[0]-arr[1];
         }
        else{
            var sub=arr[1]-arr[0]
        }
            if(sub==8){
                return true;
            }
        },
        setVal:function(data){
            arr.push(data);
        },
        del:function(){
        arr.splice(0,2);
        },
        getVal:function(){
        return arr;
        }
    }    
})();


