/*let img = document.getElementById("test_canvas");
img.addEventListener("change",function(evt){
    let file = evt.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(file[0]);

    reader.onload = function(){
        let dataUrl = reader.result;
        document.getElementById("ac").innerHTML = "<img src='" + dataUrl + "'>";
        //document.getElementById("bg").value = dataUrl;
        test_process(dataUrl);
    }
},false);
*/
//window.onload = function(){
var img_data1;
var img_data2;
var img_data3 = new Array(65100);
var img_data4 = new Array(65100);
var cnt = 0;



var mamHandwritten1=new TMamHandwritten("drawCanvasId","clearButtonId","submitButtonId");
draw();

function onFileSelected(input) {

    var file = input.files[0];

    var reader = new FileReader();

    reader.onload = onFileLoaded;

    reader.readAsDataURL(file);

}

function onFileLoaded(e) {

    var src_data = e.target.result;

    var img = new Image();

    img.onload = onImageSetted;
    img.src = src_data;

}

function onImageSetted(e) {

    var img_data = createImageData(e.target);

    document.getElementById('test_canvas').width = img_data.width;
    document.getElementById('test_canvas').height = img_data.height;

    cnt = 0;
    for (var y = 0;y < img_data.height;y++) {
        for (var x = 0;x < img_data.width;x++) {

            var index = (x + y * img_data.width) * 4;

            var r = img_data.data[index];
            img_data3[cnt] = r;
            cnt++;
        }
    }

    document.getElementById('test_canvas').getContext('2d').putImageData(img_data, 0, 0);

    document.getElementById('test_canvas').img_data = img_data;


}

function createImageData(img) {

    var cv = document.createElement('canvas');

    cv.width = img.naturalWidth;
    cv.height = img.naturalHeight;

    var ct = cv.getContext('2d');

    ct.drawImage(img, 0, 0);

    var data = ct.getImageData(0, 0, cv.width, cv.height);

    return data;

}
var cunt = 0;
function processImageData() {

    img_data1 = this.img_data;
    cnt = 0;
    for (var y = 0;y < img_data1.height;y++) {
        for (var x = 0;x < img_data1.width;x++) {

            var index = (x + y * img_data1.width) * 4;

            var r = img_data1.data[index];
            img_data3[cnt] = r;
            cnt++;
        }
    }
    document.getElementById('test_canvas').getContext('2d').putImageData(img_data1, 0, 0);

}

function onFileSelected2(input) {

    var file = input.files[0];

    var reader = new FileReader();

    reader.onload = onFileLoaded2;

    reader.readAsDataURL(file);

}

function onFileLoaded2(e) {

    var src_data = e.target.result;

    var img = new Image();

    img.onload = onImageSetted2;
    img.src = src_data;

}

function onImageSetted2(e) {

    var img_data2 = createImageData2(e.target);

    document.getElementById('test_file').width = img_data2.width;
    document.getElementById('test_file').height = img_data2.height;

    cnt = 0;
    for (var y = 0;y < img_data2.height;y++) {
        for (var x = 0;x < img_data2.width;x++) {

            var index = (x + y * img_data2.width) * 4;

            var r = img_data2.data[index];
            img_data4[cnt] = r;
            cnt++;
        }
    }

    document.getElementById('test_file').getContext('2d').putImageData(img_data2, 0, 0);

    document.getElementById('test_file').img_data2 = img_data2;


}

function createImageData2(img) {

    var cv = document.createElement('canvas');

    cv.width = img.naturalWidth;
    cv.height = img.naturalHeight;

    var ct = cv.getContext('2d');

    ct.drawImage(img, 0, 0);

    var data = ct.getImageData(0, 0, cv.width, cv.height);

    return data;

}

/*function processImageData2() {

    img_data2 = this.img_data2;
    cnt = 0;
    for (var y = 0;y < img_data2.height;y++) {
        for (var x = 0;x < img_data2.width;x++) {

            var index = (x + y * img_data2.width) * 4;

            var r = img_data2.data[index];
            img_data4[cnt] = r;
            cnt++;
        }
    }

    document.getElementById('test_file').getContext('2d').putImageData(img_data2, 0, 0);

}*/

/*var button = document.getElementById("last");
button.addEventListener('click', function(){
    cnt = 0;
    var result = 0;
    for(i = 0; i < img_data3.length; i++) {
        if(img_data3[i] == img_data4[i]){
                result++;    
        }
    }
    console.log(img_data3[10000]);
    console.log(img_data4[10000]);
    var  last = result / img_data3.length;
    document.getElementById("result").innerHTML = "一致率：" + last.toFixed(5);
});
*/

/*function onFileSelected3() {
    cnt = 0;
    var result = 0;
    for(i = 0; i < img_data3.length; i++) {
        if(img_data3[cnt] == img_data4[cnt]){
                result++;    
        }
    }
    
    var  last = result / img_data3.length;
    console.log(last);
    document.getElementById("result").innerHTML = last;
}*/

function draw() {
    const board = document.getElementById("SimpleCanvas");
    const ctx = board.getContext("2d");
    const chara = new Image();
    chara.src = "/Users/NEC-PCuser/Desktop/Javas/pawer.png";  // 画像のURLを指定
    chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
    var imageData = ctx.getImageData(0, 0, chara.width, chara.height);
    console.log(imageData.data[0]);
  };
};

     //相対URLの場合
    //img.src = 'http://www.ipentec.com/demo/canvas/resource/img03.png';

function hantei() {
    var canvas = document.getElementById("drawCanvasId");
    if(!canvas || !canvas.getContext){
        return false;
    }
    var context = canvas.getContext("2d");
    var imgData = context.getImageData(0, 0, canvas.width,canvas.height);
    console.log(imgData.data[0]);
    for(var x = 0; x < imgData.data.length; x+=4){
        img_data3[x] = imgData.data[x];
    }
    console.log(img_data3[0]);
}

var why = 0;

function TMamHandwritten(drawCanvasId,clearButtonId,submitButtonId){
    'use strict';
    this.drawCanvasId=drawCanvasId;
    this.clearButtonId=clearButtonId;
    this.submitButtonId=submitButtonId;
    this.isMouseDown=false;
    //マウス、タップの座標
    this.position=[];
    this.position.x=0;
    this.position.y=0;
    this.position.px=0;
    this.position.py=0;
    //横比率,縦比率
    this.rate=[]; this.rate.x=0; this.rate.y=0;
    this.can=null;
    this.ctx=null;
    this.clearButton=null;
    this.submitButton=null;
    window.addEventListener("DOMContentLoaded",function(){
      this.can=document.getElementById(this.drawCanvasId);
      //イベントの設定
      this.can.addEventListener("touchstart",this.onDown.bind(this),{passive: false});
      this.can.addEventListener("touchmove",this.onMove.bind(this),{passive: false});
      this.can.addEventListener("touchend",this.onUp.bind(this));
      this.can.addEventListener("mousedown",this.onMouseDown.bind(this));
      this.can.addEventListener("mousemove",this.onMouseMove.bind(this));
      this.can.addEventListener("mouseup",this.onMouseUp.bind(this));
      window.addEventListener("mousemove",this.stopShake.bind(this));
      this.ctx=this.can.getContext("2d");
      //クリアボタンの設定
      
      if(document.getElementById(this.clearButtonId)){
        this.clearButton=document.getElementById(this.clearButtonId);
        this.clearButton.addEventListener("click",function(){
          this.ctx.fillStyle="rgb(255,255,255)";
          this.ctx.fillRect(
            0,0,
            this.can.getBoundingClientRect().width*this.rate.x,
            this.can.getBoundingClientRect().height*this.rate.y
          );
        }.bind(this));
      }
      if(document.getElementById(this.submitButtonId)){
        this.submitButton=document.getElementById(this.submitButtonId);
        this.submitButton.addEventListener("click",function(){
            hantei();
            this.ctx.fillStyle="rgb(255,255,255)";
            this.ctx.fillRect(
                0,0,
                this.can.getBoundingClientRect().width*this.rate.x,
                this.can.getBoundingClientRect().height*this.rate.y
                );
        }.bind(this));
      }
      //スタイルシートの登録（MSのIE11、iOS等でドラッグ時に画面が揺れないように）
      let style=document.createElement("style");
      document.head.appendChild(style);
      style.sheet.insertRule('canvas#'+this.drawCanvasId+'{-ms-touch-action:none;touch-action:none;}',0);
      let s=window.getComputedStyle(this.can);
      //canvas.widthとcanvas.style.widthの比率を取得する
      this.rate.x=parseInt(this.can.width)/parseInt(s.width);
      //canvas.heightとcanvas.style.heightの比率を取得する
      this.rate.y=parseInt(this.can.height)/parseInt(s.height);
    }.bind(this));
  
    //TouchStart時
    this.onDown=function(event){
      this.isMouseDown=true;
      this.position.px=event.touches[0].pageX-event.target.getBoundingClientRect().left-this.getScrollPosition().x;
      this.position.py=event.touches[0].pageY-event.target.getBoundingClientRect().top -this.getScrollPosition().y;
      this.position.x=this.position.px;
      this.position.y=this.position.py;
      this.drawLine();
      event.preventDefault();
      event.stopPropagation();
    }
    //TouchMove時
    this.onMove=function(event){
      if(this.isMouseDown){
        this.position.x=event.touches[0].pageX-event.target.getBoundingClientRect().left-this.getScrollPosition().x;
        this.position.y=event.touches[0].pageY-event.target.getBoundingClientRect().top -this.getScrollPosition().y;
        this.drawLine();
        this.position.px=this.position.x;
        this.position.py=this.position.y;
        event.stopPropagation();
      };
    }
    //TouchEnd時
    this.onUp=function(event){
      this.isMouseDown=false;
      event.stopPropagation();
    }
    //MouseDown時
    this.onMouseDown=function(event){
      this.position.px=event.clientX-event.target.getBoundingClientRect().left;
      this.position.py=event.clientY-event.target.getBoundingClientRect().top ;
      this.position.x=this.position.px;
      this.position.y=this.position.py;
      this.drawLine();
      this.isMouseDown=true;
      event.stopPropagation();
    }
    //MouseMove時
    this.onMouseMove=function(event){
      if(this.isMouseDown){
        this.position.x=event.clientX-event.target.getBoundingClientRect().left;
        this.position.y=event.clientY-event.target.getBoundingClientRect().top ;
        this.drawLine();
        this.position.px=this.position.x;
        this.position.py=this.position.y;
        event.stopPropagation();
      }
    }
    //MouseUp時
    this.onMouseUp=function(event){
      this.isMouseDown=false;
      event.stopPropagation();
    }
    this.stopShake=function(event){
      this.isMouseDown=false;
      event.stopPropagation();
    }
    this.drawLine=function(){
      this.ctx.strokeStyle="#000000";//線の色
      this.ctx.lineWidth=5;//線の太さ
      this.ctx.lineJoin="round";
      this.ctx.lineCap="round";
      this.ctx.beginPath();
      this.ctx.moveTo(this.position.px*this.rate.x,this.position.py*this.rate.y);
      this.ctx.lineTo(this.position.x*this.rate.x,this.position.y*this.rate.y);
      this.ctx.stroke();
    }
    //スクロール位置を取得する
    this.getScrollPosition=function(){
      return {
        "x":document.documentElement.scrollLeft || document.body.scrollLeft,
        "y":document.documentElement.scrollTop  || document.body.scrollTop
      };
    }
}
//}