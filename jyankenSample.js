(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.choki = function() {
	this.spriteSheet = ss["jyankenSample_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.goo = function() {
	this.spriteSheet = ss["jyankenSample_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.par = function() {
	this.spriteSheet = ss["jyankenSample_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ111 = function() {
	this.spriteSheet = ss["jyankenSample_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ11 = function() {
	this.spriteSheet = ss["jyankenSample_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ1 = function() {
	this.spriteSheet = ss["jyankenSample_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.シンボル4 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.ビットマップ1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49,48);


(lib.シンボル3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.ビットマップ11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,53);


(lib.シンボル2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.ビットマップ111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40,57);


(lib.シンボル1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("A4rQjMAAAghFMAxWAAAMAAAAhFg");
	this.shape.setTransform(158,106);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,316,212);


(lib.MC_par = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.par();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.MC_goo = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.goo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.MC_choki = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.choki();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.btn2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3300FF").ss(1,1,1).p("A5EjkMAyJAAAIAAHJIqyAAMgnXAAAg");
	this.shape.setTransform(160.5,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzrAiIAAhDMAnXAAAIAABDg");
	this.shape_1.setTransform(126,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AOTDlMgnXAAAIAAnJMAyJAAAIAAHJg");
	this.shape_2.setTransform(160.5,23);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,323,54);


(lib.btn1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AokDvIAAneIRJAAIAAHeg");
	this.shape.setTransform(55,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,48);


(lib.シンボル7 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.シンボル4();
	this.instance.setTransform(64.5,24.5,1,1,0,0,0,24.5,24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AqGDtIAAnZIUNAAIAAHZg");
	this.shape.setTransform(64.8,23.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129.5,48.5);


(lib.シンボル6 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.シンボル3();
	this.instance.setTransform(60,26.5,1,1,0,0,0,29.5,26.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ApjDtIAAnZITHAAIAAHZg");
	this.shape.setTransform(61.2,25.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122.5,53);


(lib.シンボル5 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.シンボル2();
	this.instance.setTransform(61,28.5,1,1,0,0,0,20,28.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ApDDyIAAnjISHAAIAAHjg");
	this.shape.setTransform(58,30.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116,57);


// stage content:
(lib.jyankenSample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		タイトル
		*/
		
		this.stop();
		
		/* クリックして特定のフレームに移動し、停止
		特定のシンボルインスタンス上でクリックすると、再生ヘッドがタイムラインの指定フレームに移動し、ムービーが停止します。
		メインタイムラインまたはムービークリップタイムライン上で使用できます。
		
		手順 :
		1. 以下のコード内の数値 5 を、シンボルインスタンスのクリック時に再生ヘッドが移動するフレームの番号に置き換えます。
		2. EaselJS のフレーム番号は、1 ではなく 0 から始まります。
		*/
		this.btn_start.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(1);
			console.log("次のフレームへ");
		}
	}
	this.frame_1 = function() {
		/* 
		メインループ
		*/
		this.stop();
		var count_score = 0;
		var that = this;
		var you;
		/*
		ぐー = 0;
		ちょき = 1;
		ぱー = 2;
		*/
		
		this.btn_goo.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			you = 0;
			jankenEvent(you);
		}
		
		this.btn_par.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4() {
			you = 2;
			jankenEvent(you);
		}
		
		this.btn_choki.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		function fl_MouseClickHandler_5() {
			you = 1;
			jankenEvent(you);
		}
		
		
		//this.text_score.text = 100;
		
		function jankenEvent(you) {
			kekka = Math.floor(Math.random() * 3);
			switch (kekka) {
				case 0:
					kekka_text = "ぐー";
					that.MC_goo.visible = true;
					that.MC_par.visible = false;
					that.MC_choki.visible = false;
					if (you == 0) {
						count_score++;
					} else if (you == 1) {
						count_score = count_score + 2;
					} else {
						count_score--;
					}
					that.text_score.text = count_score;
					if (count_score >= 10) {
						count_score = 0;
						that.gotoAndStop(2);
					}
					break;
				case 1:
					kekka_text = "ちょき";
					that.MC_goo.visible = false;
					that.MC_par.visible = false;
					that.MC_choki.visible = true;
					if (you == 0) {
						count_score--;
					} else if (you == 1) {
						count_score++;
					} else {
						count_score = count_score + 2;
					}
					that.text_score.text = count_score;
					if (count_score >= 10) {
						count_score = 0;
						that.text_score.text = 0;
						that.gotoAndStop(2);
					}
					break;
				case 2:
					kekka_text = "ぱー";
					that.MC_goo.visible = false;
					that.MC_par.visible = true;
					that.MC_choki.visible = false;
					if (you == 0) {
						count_score = count_score + 2;
					} else if (you == 1) {
						count_score--;
					} else {
						count_score++;
					}
					that.text_score.text = count_score;
					if (count_score >= 10) {
						count_score = 0;
						that.gotoAndStop(2);
					}
					break;
				default:
					if (count_score >= 10) {
						count_score = 0;
						that.gotoAndStop(2);
						that.text_score.text = 0;
					}
					break;
		
			}
		
			console.log("-----------------------");
			console.log(kekka);
			console.log(kekka_text);
			console.log(count_score);
			console.log(that.text_score.text);
			console.log("-----------------------");
		
		}
	}
	this.frame_2 = function() {
		/* 
		リザルト
		*/
		this.stop();
		var that = this;
		
		
		/* クリックして特定のフレームに移動し、停止
		特定のシンボルインスタンス上でクリックすると、再生ヘッドがタイムラインの指定フレームに移動し、ムービーが停止します。
		メインタイムラインまたはムービークリップタイムライン上で使用できます。
		
		手順 :
		1. 以下のコード内の数値 5 を、シンボルインスタンスのクリック時に再生ヘッドが移動するフレームの番号に置き換えます。
		2. EaselJS のフレーム番号は、1 ではなく 0 から始まります。
		*/
		
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			count_score = 0;
			that.text_score.text = 0;
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// titie
	this.text = new cjs.Text("じゃんけんゲーム", "40px 'A-OTF Maru Folk Pro R'", "#0066CC");
	this.text.lineHeight = 42;
	this.text.lineWidth = 339;
	this.text.setTransform(120,108);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(2));

	// score
	this.text_score = new cjs.Text("", "40px 'A-OTF Maru Folk Pro R'");
	this.text_score.name = "text_score";
	this.text_score.textAlign = "right";
	this.text_score.lineHeight = 42;
	this.text_score.lineWidth = 145;
	this.text_score.setTransform(430.5,30);

	this.text_1 = new cjs.Text("SCORE", "40px 'A-OTF Maru Folk Pro R'");
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 148;
	this.text_1.setTransform(124,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{y:28.8}},{t:this.text_score,p:{x:430.5,y:30,font:"40px 'A-OTF Maru Folk Pro R'",textAlign:"right",lineHeight:42}}]},1).to({state:[{t:this.text_1,p:{y:124.8}},{t:this.text_score,p:{x:358,y:126,font:"30px 'A-OTF Maru Folk Pro R'",textAlign:"center",lineHeight:32}}]},1).wait(1));

	// obj
	this.btn_goo = new lib.シンボル7();
	this.btn_goo.setTransform(135.8,336.2,1,1,0,0,0,64.8,24.2);
	new cjs.ButtonHelper(this.btn_goo, 0, 1, 1);

	this.MC_choki = new lib.MC_choki();
	this.MC_choki.setTransform(284.5,191,1,1,0,0,0,150,150);
	this.MC_choki.visible = false;

	this.MC_goo = new lib.MC_goo();
	this.MC_goo.setTransform(284.5,191,1,1,0,0,0,150,150);
	this.MC_goo.visible = false;

	this.MC_par = new lib.MC_par();
	this.MC_par.setTransform(290,184,1,1,0,0,0,150,150);
	this.MC_par.visible = false;

	this.text_2 = new cjs.Text("スタートへ戻る", "30px 'A-OTF Maru Folk Pro R'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 280;
	this.text_2.setTransform(283.9,278.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_par},{t:this.MC_goo},{t:this.MC_choki},{t:this.btn_goo}]},1).to({state:[{t:this.text_2}]},1).wait(1));

	// btn
	this.text_3 = new cjs.Text("start", "30px 'A-OTF Maru Folk Pro R'", "#FFFFFF");
	this.text_3.lineHeight = 32;
	this.text_3.lineWidth = 82;
	this.text_3.setTransform(287,274.2);

	this.btn_start = new lib.btn1();
	this.btn_start.setTransform(263,268.4);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.btn_par = new lib.シンボル6();
	this.btn_par.setTransform(273.7,336.9,1,1,0,0,0,61.2,26.5);
	new cjs.ButtonHelper(this.btn_par, 0, 1, 1);

	this.btn_choki = new lib.シンボル5();
	this.btn_choki.setTransform(411.5,334.9,1,1,0,0,0,58,28.5);
	new cjs.ButtonHelper(this.btn_choki, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3300FF").ss(1,1,1).p("ATpjxIAFAAATuDyIgFAAAztjxIOxAA");
	this.shape.setTransform(343.7,336.7);

	this.button_2 = new lib.btn2();
	this.button_2.setTransform(285.5,300.2,1,1,0,0,0,160.5,26.2);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_start},{t:this.text_3}]}).to({state:[{t:this.shape},{t:this.btn_choki},{t:this.btn_par}]},1).to({state:[{t:this.button_2}]},1).wait(1));

	// starge
	this.instance = new lib.シンボル1();
	this.instance.setTransform(282,196,1,1,0,0,0,158,106);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(395,308,343,208.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;