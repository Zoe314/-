window.onload = function(){
// 表
var myCanvas = document.getElementById('myCanvas');
// console.log(typeof myCanvas)
myCanvas.width = 800;
myCanvas.height = 800;
var cxt = myCanvas.getContext('2d');



function toDraw(){
  
      // 清空画布
      cxt.clearRect(0,0,500,500);

      // 获取现在时间
      var now = new Date();
      // 获取当前时分秒
      var sec = now.getSeconds();
      var min = now.getMinutes();
      var hour = now.getHours();
    
      // 小时必须获取浮点类型（小时+）
      hour = hour+min/60;
      hour = hour>12?hour-12:hour;
      cxt.lineWidth=10;
      cxt.strokeStyle = 'yellowGreen';
      cxt.beginPath();
      cxt.arc(250,250,200,0,360,false);
      cxt.closePath();
      cxt.stroke();
      // 小时刻度
      for(var i=0;i<12;i++){
        cxt.save();
        cxt.lineWidth = 7;
        cxt.strokeStyle = '#000';
        cxt.translate(250,250);
        cxt.rotate(i*30*Math.PI/180);
        cxt.beginPath();
        i%3==0?cxt.moveTo(0,-165):cxt.moveTo(0,-175);
        cxt.lineTo(0,-190);
        cxt.closePath();
        cxt.stroke();
        cxt.restore();
      }
      // 分钟刻度
      for(var i=0;i<60;i++){
        cxt.save();
        cxt.lineWidth = 5;
        cxt.strokeStyle = '#000';
        cxt.translate(250,250);
        cxt.rotate(i*6*Math.PI/180);
        cxt.beginPath();
        cxt.moveTo(0,-180);
        cxt.lineTo(0,-190);
        cxt.closePath();
        cxt.stroke();
        cxt.restore();
      }
      // 时针
      cxt.save();
      cxt.lineWidth = 7;
      cxt.strokStyle = '#000';
      cxt.translate(250,250);
      cxt.rotate(hour*30*Math.PI/180);
      cxt.beginPath();
      cxt.moveTo(0,-100);
      cxt.lineTo(0,10);
      cxt.closePath();
      cxt.stroke();
      // 头上的小圆
      cxt.beginPath();
      cxt.arc(0,-90,5,0,360,false);
      cxt.closePath();
      cxt.fillStyle = 'yellow';
      cxt.fill();
      cxt.stroke();
      cxt.restore();
      // 分针
      cxt.save();
      cxt.lineWidth=5;
      cxt.strokeStyle='#yellowGreen';
      cxt.translate(250,250);
      cxt.rotate(min*6*Math.PI/180);
      cxt.beginPath();
      cxt.moveTo(0,-140);
      cxt.lineTo(0,15);
      cxt.closePath();
      cxt.stroke();
      // 头上的小圆
      cxt.beginPath();
      cxt.arc(0,-120,5,0,360,false);
      cxt.closePath();
      cxt.fillStyle = 'yellow';
      cxt.fill();
      cxt.stroke();
      cxt.restore();
      

      // 秒针
      cxt.save();
      cxt.lineWidth=3;
      cxt.strokeStyle='red';
      cxt.translate(250,250);
      cxt.rotate(sec*6*Math.PI/180);
      cxt.beginPath();
      cxt.moveTo(0,-165);
      cxt.lineTo(0,25);
      cxt.closePath();
      cxt.stroke();
      cxt.beginPath();
      cxt.arc(0,0,5,0,360,false);
      cxt.closePath();
      cxt.fillStyle= 'pink';
      cxt.fill();
      cxt.stroke();
      // 顶部的小圆
      cxt.beginPath();
      cxt.arc(0,-150,5,0,360,false);
      cxt.closePath();
      cxt.fillStyle = 'red';
      cxt.fill();
      cxt.stroke();
      
      cxt.restore();

}
// 设置定时器
setInterval(toDraw,1000); 

// 自动打字
//打字效果
//要输出的内容
var str1 ='今天所做之事勿候明天，自己所做之事勿候他人。\t ——歌德';
var s = 0;

//定义函数
function typist2(){
    $('.contt_right p').html(str1.substring(0,s));

    //判断
    if(s++>str1.length){
        s = 0;
        // 计时器
        setTimeout(typist2,10000);
    }else{
        setTimeout(typist2,500);
    }
}
typist2();

// 自我介绍的选项卡
$('#resume li').each(function(index){
    $('#resume #appraisal').show();
    $(this).click(function(){
        $('#resume .tab-pane').slideUp(2000);
        $('#resume .tab-pane').eq(index).slideDown(2000);
        // console.log('.tab-pane');
    })
})














}