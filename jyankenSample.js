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


(lib.btn1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AokDvIAAneIRJAAIAAHeg");
	this.shape.setTransform(55,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,48);


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
		
		this.btn_goo.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			this.MC_goo.visible = true;
			this.MC_par.visible = false;
			this.MC_choki.visible = false;
			jankenEvent();
		}
		
		this.btn_par.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4() {
			this.MC_par.visible = true;
			this.MC_goo.visible = false;
			this.MC_choki.visible = false;
			jankenEvent();
		}
		
		//this.btn_choki.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		function fl_MouseClickHandler_5() {
			this.MC_choki.visible = true;
			this.MC_goo.visible = false;
			this.MC_par.visible = false;
			jankenEvent();
		}
		
		
		//this.text_score.text = 100;
		
		function jankenEvent() {
			kekka = Math.floor(Math.random() * 3);
			switch (kekka) {
				case 0:
					kekka_text = "ぐー";
					count_score = count_score + 2;
					break;
				case 1:
					kekka_text = "ちょき";
					count_score = count_score + 1;
					break;
				case 2:
					kekka_text = "ぱー";
					count_score = count_score + 3;
				that.text_score.text = count_score;
					break;
				default:
					break;
		
			}
		
			console.log(kekka);
			console.log(kekka_text);
			console.log(count_score);
		
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// titie
	this.text = new cjs.Text("じゃんけんゲーム", "40px 'A-OTF Maru Folk Pro R'", "#0066CC");
	this.text.lineHeight = 42;
	this.text.lineWidth = 339;
	this.text.setTransform(120,108);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text_score}]},1).wait(1));

	// obj
	this.instance = new lib.シンボル4();
	this.instance.setTransform(135.5,336.4,1,1,0,0,0,24.5,24);

	this.instance_1 = new lib.シンボル3();
	this.instance_1.setTransform(272.5,336.9,1,1,0,0,0,29.5,26.5);

	this.instance_2 = new lib.シンボル2();
	this.instance_2.setTransform(414.5,334.9,1,1,0,0,0,20,28.5);

	this.MC_choki = new lib.MC_choki();
	this.MC_choki.setTransform(284.5,191,1,1,0,0,0,150,150);
	this.MC_choki.visible = false;

	this.MC_goo = new lib.MC_goo();
	this.MC_goo.setTransform(284.5,191,1,1,0,0,0,150,150);
	this.MC_goo.visible = false;

	this.MC_par = new lib.MC_par();
	this.MC_par.setTransform(290,184,1,1,0,0,0,150,150);
	this.MC_par.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_par},{t:this.MC_goo},{t:this.MC_choki},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// btn
	this.text_2 = new cjs.Text("start", "30px 'A-OTF Maru Folk Pro R'", "#FFFFFF");
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 82;
	this.text_2.setTransform(287,274.2);

	this.btn_start = new lib.btn1();
	this.btn_start.setTransform(263,268.4);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.btn_par = new lib.btn1();
	this.btn_par.setTransform(272.5,336.4,1,1,0,0,0,55,24);
	new cjs.ButtonHelper(this.btn_par, 0, 1, 1);

	this.btn_goo = new lib.btn1();
	this.btn_goo.setTransform(135.5,336.4,1,1,0,0,0,55,24);
	new cjs.ButtonHelper(this.btn_goo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_start,p:{x:263,y:268.4}},{t:this.text_2}]}).to({state:[{t:this.btn_goo},{t:this.btn_par},{t:this.btn_start,p:{x:359.5,y:312.4}}]},1).wait(1));

	// starge
	this.instance_3 = new lib.シンボル1();
	this.instance_3.setTransform(282,196,1,1,0,0,0,158,106);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(395,308,343,208.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;