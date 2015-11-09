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


(lib.win = function() {
	this.initialize();

	// レイヤー 1
	this.text = new cjs.Text("勝ち", "200px 'A-OTF Maru Folk Pro R'", "#0000FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 202;
	this.text.lineWidth = 406;
	this.text.setTransform(203,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,410,204);


(lib.MC_titile = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("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");
	this.shape.setTransform(153.9,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,307.8,36.6);


(lib.MC_score = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AF1CcQgFgFAAgIIAAgUQgBg/gIgUQgMgcgiAAIhRAAIAACFQAAAHgGAFQgFAFgGAAQgHAAgFgFQgFgFAAgHIAAkMQAAgQAIgHQAIgJARAAIBRAAQAQAAAOADQAMADAKAGQAJAEAIAHQAGAGAFAIQAHAMADAPIACAQQAAAPgFAPQgKAXgKAIQgLAKgPAEQgJACgQACQAaADAQAIQAPAIAIAPQAHAOADAWQACASAAAgIAAATQAAAIgGAGQgFAFgHAAQgIAAgGgGgADriHQgDAEAAAEIAAB8IBQAAQASAAAOgJQAWgOABgvQAAgXgGgOQgFgNgJgHQgIgFgLgCIhVgBQgFAAgDADgAgUCeQgPgDgNgGQgMgHgKgJQgKgJgIgLQgHgLgGgNQgFgNgEgPQgFgTgCgqQAAgUAHgpQAEgPAGgNQAFgNAIgLQAIgLAKgIQAKgJAMgHQANgGAOgDQAPgEAPAAQASAAAPAEQAPADAMAHQAMAGALAJQAJAJAIAMQAIALAFANQAGANADAPQAHAoAAATQgCAsgFATQgEAPgGANQgGANgHALQgIALgKAIQgKAJgMAGQgNAGgOADQgPAEgRAAQgPAAgPgEgAgLiNQgKACgJAFQgJAFgHAHQgHAHgFAKQgNAcgEASQgFAaAAAhQAAAhAFAaQAIAhAIANQAFAKAHAHQAHAHAJAFQAJAGALACQALADAKAAQAMAAALgDQAKgCAJgFQAJgFAHgHQAHgHAGgKQAHgMAJghQAFgbAAgiQAAgggFgaQgDgSgNgcQgFgKgHgHQgHgHgJgFQgJgGgLgCQgKgDgNAAQgKAAgLADgAkwCfQgOgDgMgFQgNgGgKgIQgKgIgJgKQgIgLgGgMQgHgNgEgPQgEgPgDgRIgCgkQAAgVADgTQADgSAGgQQAFgQAIgMQAIgNAKgJQAJgKALgHQAKgHANgEQAPgGAhgDQAUAAAdAJQATAIAOAOQAMAMAHAOQAGAMAAAJQAAAHgFAFQgGAFgHAAQgJAAgFgHQgCgDgDgLQgNg5g8AAQgPAAgNAEQgNAEgKAIQgJAHgIAKQgGAKgFAMQgJAUgEAcQgCAUAAAWQABAoAFAVQAEASAHAOQAHAQAKALQAJALAXAJQAOAEAQAAQA6AAAOg9QADgMADgFQAFgHAJAAQAHAAAGAFQAGAFAAAIQgFAZgQAUQgTATgQAIQgLAGgOACQgPAEgQAAQgQAAgOgDgApSCeQgQgEgNgIQgLgGgJgKQgHgJgGgMQgIgRAAgNQAAgHAGgGQAFgFAHAAQASAAACAYQAEAYALANQAIAKANAGQAQAHAUAAQAVAAAPgHQANgGAIgKQALgNADgaQAAgPgFgKQgEgKgKgHQgJgIgQgHIhJgaQgSgIgMgJQgNgKgHgOQgIgQAAgUQAAgUAHgPQAHgPANgLQANgLASgGQASgGAVAAQBTAAARBKQAAAHgGAGQgFAEgGAAQgLAAgEgHQgCgFgCgLIgDgOQgEgJgGgIQgIgJgLgFQgOgGgUAAQgPAAgNAFQgMAEgJAJQgIAIgEALQgEAKAAAMQAAANAEAJQAEAJAKAHQAIAHAQAGIBKAdQAUAHAMAJQAOALAHAOQAIAQAAAUIgCAWIgGASQgIARgPALQgNALgUAGQgSAFgXAAQgVAAgRgEgAH6CcQgRAAgJgIQgIgIAAgPIAAj4QAAgQAIgHQAIgJASAAICRAAQAJAAAAAJQAAAIgJAAIiGAAQgLAAAAALIAAB2ICIAAQAJAAAAAIQAAAHgJAAIiIAAIAAB6QAAALALAAICLAAQAJAAAAAIQAAAJgJAAg");
	this.shape.setTransform(66.6,16.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133.2,32.5);


(lib.MC_result = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJ6CdQgGgFAAgHIAAkbIhZAAQgJAAAAgIQAAgJAIAAIDWAAQAIAAAAAJQAAAIgIAAIhaAAIAAEbQAAAHgFAFQgFAFgHAAQgGAAgFgFgABaCeQgVgGgPgLQgJgHgHgIQgHgJgFgLQgFgMgDgNQgDgPAAgSIAAi/QAAgIAFgFQAFgFAHAAQAGAAAFAFQAFAFAAAIIAAC/QAAAYAFASQAFASAKANQAJAMAPAGQAPAGAUAAQASAAAPgFQARgFAMgKQAOgMAHgRIAGgVIACgYIAAjIQAAgMAKAAQAMAAAAAMIAADIQAAAPgDANQgCANgFALQgEALgHAIQgHAJgIAGQgQANgVAGQgTAGgXAAQgTAAgQgEgAi5CeQgQgEgMgIQgMgGgIgKQgIgJgFgMQgJgRAAgNQAAgHAGgGQAGgFAHAAQARAAACAYQAEAYALANQAJAKANAGQAPAHAVAAQAUAAAPgHQANgGAJgKQAKgNADgaQAAgPgEgKQgFgKgKgHQgJgIgPgHIhJgaQgTgIgLgJQgOgKgHgOQgHgQAAgUQAAgUAHgPQAHgPANgLQANgLASgGQASgGAVAAQBSAAASBKQAAAHgGAGQgFAEgHAAQgKAAgEgHQgDgFgBgLIgEgOQgDgJgGgIQgIgJgMgFQgOgGgTAAQgQAAgNAFQgMAEgIAJQgIAIgEALQgFAKAAAMQAAANAFAJQAEAJAJAHQAIAHAQAGIBLAdQATAHAMAJQAPALAHAOQAHAQAAAUIgCAWIgGASQgHARgPALQgOALgTAGQgTAFgWAAQgVAAgSgEgApICcQgFgFAAgIIAAgUQgBg/gJgUQgMgcghAAIhSAAIAACFQAAAHgFAFQgFAFgHAAQgGAAgFgFQgFgFAAgHIAAkMQAAgQAHgHQAJgJARAAIBRAAQAQAAANADQANADAKAGQAJAEAHAHQAGAGAFAIQAIAMADAPIABAQQAAAPgFAPQgKAXgJAIQgMAKgPAEQgIACgQACQAaADAPAIQAQAIAIAPQAHAOACAWQACASAAAgIAAATQAAAIgFAGQgGAFgHAAQgIAAgFgGgArTiHQgDAEAAAEIAAB8IBRAAQARAAAOgJQAWgOACgvQAAgXgGgOQgFgNgKgHQgHgFgLgCIhWgBQgEAAgEADgAFZCcQgRAAgIgIQgIgIAAgPIAAkMQAAgIAFgFQAFgFAGAAQAIAAAEAFQAGAFAAAIIAAEPQAAALAKAAICNAAQAJAAAAAIQAAAJgJAAgAnECcQgRAAgIgIQgIgIAAgPIAAj4QAAgQAIgHQAIgJARAAICSAAQAJAAAAAJQAAAIgJAAIiHAAQgKAAAAALIAAB2ICIAAQAIAAAAAIQAAAHgIAAIiIAAIAAB6QAAALAKAAICMAAQAJAAAAAIQAAAJgJAAg");
	this.shape.setTransform(76.1,16.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152.2,32.5);


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


(lib.lost = function() {
	this.initialize();

	// レイヤー 1
	this.text = new cjs.Text("負け", "200px 'A-OTF Maru Folk Pro R'", "#0000FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 202;
	this.text.lineWidth = 409;
	this.text.setTransform(204.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,413,204);


(lib.drow = function() {
	this.initialize();

	// レイヤー 1
	this.text = new cjs.Text("あいこ", "200px 'A-OTF Maru Folk Pro R'", "#0000FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 202;
	this.text.lineWidth = 663;
	this.text.setTransform(331.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,667,204);


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


(lib.MC_win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// レイヤー 1
	this.instance = new lib.win();
	this.instance.setTransform(0,2,1,1,0,0,0,205,102);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.04,scaleY:1.04,y:2.1,alpha:0.207},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:2,alpha:0.413},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.62},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:2.1,alpha:0.826},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:2,alpha:0.851},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.876},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:0.1,y:2.1,alpha:0.901},0).wait(1).to({scaleX:1.29,scaleY:1.29,alpha:0.925},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:2,alpha:0.95},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:2.1,alpha:0.975},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:1},0).wait(1).to({scaleX:1.43,scaleY:1.43,y:2,alpha:0.917},0).wait(1).to({scaleX:1.46,scaleY:1.46,y:2.1,alpha:0.833},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0.75},0).wait(1).to({scaleX:1.53,scaleY:1.53,y:2,alpha:0.667},0).wait(1).to({scaleX:1.57,scaleY:1.57,alpha:0.583},0).wait(1).to({scaleX:1.61,scaleY:1.61,y:2.1,alpha:0.5},0).wait(1).to({scaleX:1.64,scaleY:1.64,y:2,alpha:0.417},0).wait(1).to({scaleX:1.68,scaleY:1.68,alpha:0.333},0).wait(1).to({scaleX:1.71,scaleY:1.71,y:2.1,alpha:0.25},0).wait(1).to({scaleX:1.75,scaleY:1.75,y:2,alpha:0.167},0).wait(1).to({scaleX:1.78,scaleY:1.78,alpha:0.083},0).wait(1).to({scaleX:1.82,scaleY:1.82,y:2.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-100,410,204);


(lib.MC_lost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// レイヤー 1
	this.instance = new lib.lost();
	this.instance.setTransform(-0.5,0,1,1,0,0,0,206.5,102);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:4.5,alpha:0.207},0).wait(1).to({y:8.9,alpha:0.413},0).wait(1).to({y:13.4,alpha:0.62},0).wait(1).to({y:17.8,alpha:0.826},0).wait(1).to({y:22.2,alpha:0.851},0).wait(1).to({y:26.7,alpha:0.876},0).wait(1).to({y:31.1,alpha:0.901},0).wait(1).to({y:35.5,alpha:0.925},0).wait(1).to({y:40,alpha:0.95},0).wait(1).to({y:44.4,alpha:0.975},0).wait(1).to({y:48.8,alpha:1},0).wait(1).to({y:53.3,alpha:0.917},0).wait(1).to({y:57.7,alpha:0.833},0).wait(1).to({y:62.1,alpha:0.75},0).wait(1).to({y:66.6,alpha:0.667},0).wait(1).to({y:71,alpha:0.583},0).wait(1).to({y:75.4,alpha:0.5},0).wait(1).to({y:79.9,alpha:0.417},0).wait(1).to({y:84.3,alpha:0.333},0).wait(1).to({y:88.7,alpha:0.25},0).wait(1).to({y:93.2,alpha:0.167},0).wait(1).to({y:97.6,alpha:0.083},0).wait(1).to({y:102,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-102,413,204);


(lib.MC_drow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// レイヤー 1
	this.instance = new lib.drow();
	this.instance.setTransform(-0.6,-1,1,1,0,0,0,333.4,102);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:333.5,x:-0.5,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334,-103,667,204);


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
		
		this.MC_lost.visible = false;
		this.MC_win.visible = false;
		this.MC_drow.visible = false;
		
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
						that.MC_lost.visible = false;
						that.MC_win.visible = false;
						that.MC_drow.visible = true;
						that.MC_drow.play();
					} else if (you == 1) {
						count_score--;
						that.MC_win.visible = false;
						that.MC_drow.visible = false;
						that.MC_lost.visible = true;
						that.MC_lost.play();
					} else {
						count_score = count_score + 2;
						that.MC_lost.visible = false;
						that.MC_drow.visible = false;
						that.MC_win.visible = true;
						that.MC_win.play();
					}
		
					that.text_score.text = count_score;
					if (count_score > 10) {
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
						count_score = count_score + 2;
						that.MC_lost.visible = false;
						that.MC_drow.visible = false;
						that.MC_win.visible = true;
						that.MC_win.play();
					} else if (you == 1) {
						count_score++;
						that.MC_lost.visible = false;
						that.MC_win.visible = false;
						that.MC_drow.visible = true;
						that.MC_drow.play();
					} else {
						count_score--;
						that.MC_win.visible = false;
						that.MC_drow.visible = false;
						that.MC_lost.visible = true;
						that.MC_lost.play();
					}
					that.text_score.text = count_score;
					if (count_score > 10) {
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
						count_score--;
						that.MC_win.visible = false;
						that.MC_drow.visible = false;
						that.MC_lost.visible = true;
						that.MC_lost.play();
					} else if (you == 1) {
						count_score = count_score + 2;
						that.MC_lost.visible = false;
						that.MC_drow.visible = false;
						that.MC_win.visible = true;
						that.MC_win.play();
					} else {
						count_score++;
						that.MC_lost.visible = false;
						that.MC_win.visible = false;
						that.MC_drow.visible = true;
						that.MC_drow.play();
					}
					that.text_score.text = count_score;
					if (count_score > 10) {
						count_score = 0;
						that.gotoAndStop(2);
					}
					break;
				default:
					if (count_score > 10) {
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
	this.instance = new lib.MC_titile();
	this.instance.setTransform(284.9,129.3,1,1,0,0,0,153.9,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// score
	this.instance_1 = new lib.MC_score();
	this.instance_1.setTransform(194.8,53.4,1,1,0,0,0,66.5,16.2);

	this.text_score = new cjs.Text("", "40px 'A-OTF Maru Folk Pro R'");
	this.text_score.name = "text_score";
	this.text_score.textAlign = "right";
	this.text_score.lineHeight = 42;
	this.text_score.lineWidth = 145;
	this.text_score.setTransform(430.5,30);

	this.instance_2 = new lib.MC_result();
	this.instance_2.setTransform(286.7,146.4,1,1,0,0,0,76,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_score},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// anime
	this.MC_drow = new lib.MC_drow();
	this.MC_drow.setTransform(612.4,298,1,1,0,0,0,333.4,102);

	this.MC_lost = new lib.MC_lost();
	this.MC_lost.setTransform(488.5,297,1,1,0,0,0,206.5,102);

	this.MC_win = new lib.MC_win();
	this.MC_win.setTransform(278.4,195,1,1,0,0,0,-1.6,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_win},{t:this.MC_lost},{t:this.MC_drow}]},1).to({state:[]},1).wait(1));

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

	this.text = new cjs.Text("スタートへ戻る", "30px 'A-OTF Maru Folk Pro R'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 280;
	this.text.setTransform(283.9,238.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_par},{t:this.MC_goo},{t:this.MC_choki},{t:this.btn_goo}]},1).to({state:[{t:this.text}]},1).wait(1));

	// btn
	this.text_1 = new cjs.Text("start", "30px 'A-OTF Maru Folk Pro R'", "#FFFFFF");
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 82;
	this.text_1.setTransform(240,240.8);

	this.btn_start = new lib.btn1();
	this.btn_start.setTransform(228,235.4);
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
	this.button_2.setTransform(285.5,260.2,1,1,0,0,0,160.5,26.2);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_start},{t:this.text_1}]}).to({state:[{t:this.shape},{t:this.btn_choki},{t:this.btn_par}]},1).to({state:[{t:this.button_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(406,311,307.8,172.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;