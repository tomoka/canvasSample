(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFCC",
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



(lib.シンボル12 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB500").s().p("AgWBYIAAgnIAtAAIAAAngAgTAeIgHh1IA1AAIgHB1g");
	this.shape.setTransform(197.7,49.7,4.268,4.268);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBB500").s().p("AhcBPQAkhdAfhNIAjALIgZBCIABABQAKgFAFABQAOgBAHALQAIAJACAZIADARQACADADAAQAIAAAKgmIAjAJQgIAdgHAOQgIAOgJAHQgJAGgNAAQgUAAgKgMQgJgKgDgbQgBgMgDgDQgBgDgEgBQgHABgKAPQgKAPgSApg");
	this.shape_1.setTransform(135.5,50,4.268,4.268);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBB500").s().p("AguA3QAAgpAzAAIAGAAIAAgJIgwAAIAAgeIAwAAIAAgPIgwAAIAAgiIBIAAQADgJAJgGQAIgHAKAAQAOAAAJAKQAJAJAAANQAAANgJAJQgJAJgOAAQgJAAgHgFIAAANIAhAAIAAAeIghAAIAAAYQAPAMAXAYIgZAYIgRgRQgEAMgLAGQgLAHgOAAQgzAAAAgqgAgKA3QAAAEADACQACACAFAAQALAAAAgNIAAgDIgJgBQgMAAAAAJgAA4hKQgEAEAAAGQAAAFAEAEQAEAEAFAAQAHAAADgEQAFgEAAgFQAAgGgFgEQgEgEgGAAQgFAAgEAEgAhgAHQAAgsAKgqIAlAEQgJAogBAqQABAsAJAoIglAFQgKgqAAgvg");
	this.shape_2.setTransform(47.6,48.4,4.268,4.268);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C4207").s().p("AglBnIAAhFIADAAIgIiIIBVAAIgICIIADAAIAABFgAgHBJIAPAAIAAgJIgPAAgAgFAPIALAAIAFhXIgVAAg");
	this.shape_3.setTransform(198.1,49.2,4.268,4.267);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C4207").s().p("AgWBYIAAgnIAtAAIAAAngAgTAeIgHh1IA1AAIgHB1g");
	this.shape_4.setTransform(198.1,49.2,4.268,4.267);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C4207").s().p("AhvBYIAGgOIBDirIAFgMIBAASIgXA7QAQABALAOQAGAJAEAMIADgMIBAAPIgEAPQgJAfgHAPQgKATgMAHQgNAIgRAAQgaAAgOgPQgMgOgFgcQgJAOgQAmIgFANgAhIBGIAIADQAOghAJgNQAOgWAQAAQALAAAGAMQADAGACAOQADAVAHAIQAGAGANAAQAJAAAEgDQAFgDAHgMIAKgZIgGgCQgFASgGAIQgHAJgKAAQgNAAgGgNQgDgHgBgPQgDgVgEgGQgDgDgHAAQgBAAgIADIgJADIgOgNIAYg9IgIgCQgcBEgdBLg");
	this.shape_5.setTransform(135.6,49.6,4.268,4.267);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C4207").s().p("AhcBPQAkhdAfhNIAjALIgZBCIABABQAKgFAFABQAOgBAHALQAIAJACAZIADARQACADADAAQAIAAAKgmIAjAJQgIAdgHAOQgIAOgJAHQgJAGgNAAQgUAAgKgMQgJgKgDgbQgBgMgDgDQgBgDgEgBQgHABgKAPQgKAPgSApg");
	this.shape_6.setTransform(135.9,49.5,4.268,4.267);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5C4207").s().p("AggBoIhBAIIgDgNQgLgqAAgyQAAgvALgrIADgMIA8AGIA/AAQAFgHAHgFQAMgKAPAAQATAAAOAOQAOANAAAUQAAATgOAOIAAABIAAAyIgiAAIAAACQATARAPAQIAJAKIgtAuIgPgQQgDAEgGAEQgOAJgTAAQgUAAgRgIgAgaAmQgFAGAAALQAAALAFAGQAIAKAXAAQAKAAAIgFQAFgEAEgHIAIgVIAXAXIACgDQgMgNgNgLIgGgFIAAgsIAiAAIAAgCIgiAAIAAgxIg5AAIAAAEIAxAAIAAAtIgxAAIAAACIAxAAIAAAmIgRgBIgEAAQgXAAgIAJgAhRAHQAAAoAHAgIAHgBQgHgkABgjQgBggAHglIgHAAQgHAfAAAmgABAg/IABAAIABAAIgCgCgAgQBJQgJgGAAgMQAAgIAFgFQAGgLAQAAIANABIALADIAAAPQAAAOgIAIQgHAGgLAAQgJAAgHgFg");
	this.shape_7.setTransform(48,47.9,4.268,4.267);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5C4207").s().p("AguA3QAAgpAzAAIAGAAIAAgJIgwAAIAAgeIAwAAIAAgPIgwAAIAAgiIBIAAQADgJAJgGQAIgHAKAAQAOAAAJAKQAJAJAAANQAAANgJAJQgJAJgOAAQgJAAgHgFIAAANIAhAAIAAAeIghAAIAAAYQAPAMAXAYIgZAYIgRgRQgEAMgLAGQgLAHgOAAQgzAAAAgqgAgKA3QAAAEADACQACACAFAAQALAAAAgNIAAgDIgJgBQgMAAAAAJgAA4hKQgEAEAAAGQAAAFAEAEQAEAEAFAAQAHAAADgEQAFgEAAgFQAAgGgFgEQgEgEgGAAQgFAAgEAEgAhgAHQAAgsAKgqIAlAEQgJAogBAqQABAsAJAoIglAFQgKgqAAgvg");
	this.shape_8.setTransform(48,47.9,4.268,4.267);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5C4207").s().p("AglBnIAAhFIADAAIgIiIIBVAAIgICIIADAAIAABFgAgHBJIAPAAIAAgJIgPAAgAgFAPIALAAIAFhXIgVAAg");
	this.shape_9.setTransform(198.1,53.4,4.268,4.267);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5C4207").s().p("AgWBYIAAgnIAtAAIAAAngAgTAeIgHh1IA1AAIgHB1g");
	this.shape_10.setTransform(198.1,53.4,4.268,4.267);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5C4207").s().p("AhvBYIAGgOIBDirIAFgMIBAASIgXA7QAQABALAOQAGAJAEAMIADgMIBAAPIgEAPQgJAfgHAPQgKATgMAHQgNAIgRAAQgaAAgOgPQgMgOgFgcQgJAOgQAmIgFANgAhIBGIAIADQAOghAJgNQAOgWAQAAQALAAAGAMQADAGACAOQADAVAHAIQAGAGANAAQAJAAAEgDQAFgDAHgMIAKgZIgGgCQgFASgGAIQgHAJgKAAQgNAAgGgNQgDgHgBgPQgDgVgEgGQgDgDgHAAQgBAAgIADIgJADIgOgNIAYg9IgIgCQgcBEgdBLg");
	this.shape_11.setTransform(135.6,53.9,4.268,4.267);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5C4207").s().p("AhcBPQAkhdAfhNIAjALIgZBCIABABQAKgEAFAAQAOgBAHAKQAIAKACAZIADARQACADADAAQAIAAAKgmIAjAJQgIAdgHAOQgIAOgJAHQgJAFgNABQgUgBgKgKQgJgLgDgbQgBgMgDgDQgBgEgEAAQgHAAgKAPQgKAQgSApg");
	this.shape_12.setTransform(135.9,53.8,4.268,4.267);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C4207").s().p("AggBoIhBAIIgDgNQgLgqAAgyQAAgvALgrIADgMIA8AGIA/AAQAFgHAHgFQAMgKAPAAQATAAAOAOQAOANAAAUQAAATgOAOIAAABIAAAyIgiAAIAAACQATARAPAQIAJAKIgtAuIgPgQQgDAEgGAEQgOAJgTAAQgUAAgRgIgAgaAmQgFAGAAALQAAALAFAGQAIAKAXAAQAKAAAIgFQAFgEAEgHIAIgVIAXAXIACgDQgMgNgNgLIgGgFIAAgsIAiAAIAAgCIgiAAIAAgxIg5AAIAAAEIAxAAIAAAtIgxAAIAAACIAxAAIAAAmIgRgBIgEAAQgXAAgIAJgAhRAHQAAAoAHAgIAHgBQgHgkABgjQgBggAHglIgHAAQgHAfAAAmgABAg/IABAAIABAAIgCgCgAgQBJQgJgGAAgMQAAgIAFgFQAGgLAQAAIANABIALADIAAAPQAAAOgIAIQgHAGgLAAQgJAAgHgFg");
	this.shape_13.setTransform(48,52.2,4.268,4.267);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5C4207").s().p("AguA3QAAgpAzAAIAGAAIAAgJIgwAAIAAgeIAwAAIAAgPIgwAAIAAgiIBIAAQADgJAJgGQAIgHAKAAQAOAAAJAKQAJAJAAANQAAANgJAJQgJAJgOAAQgJAAgHgFIAAANIAhAAIAAAeIghAAIAAAYQAPAMAXAYIgZAYIgRgRQgEAMgLAGQgLAHgOAAQgzAAAAgqgAgKA3QAAAEADACQACACAFAAQALAAAAgNIAAgDIgJgBQgMAAAAAJgAA4hKQgEAEAAAGQAAAFAEAEQAEAEAFAAQAHAAADgEQAFgEAAgFQAAgGgFgEQgEgEgGAAQgFAAgEAEgAhgAHQAAgsAKgqIAlAEQgJAogBAqQABAsAJAoIglAFQgKgqAAgvg");
	this.shape_14.setTransform(48,52.2,4.268,4.267);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216.8,101.2);


(lib.シンボル10 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg2xAq9MAAAhV6MBtjAAAMAAABV6g");
	this.shape.setTransform(339.5,275);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,0,701.3,550);


(lib.シンボル9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D1F0").s().p("Al4BHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAILxAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape.setTransform(184,39,3.839,3.842);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al4BRQgiAAgYgYQgYgYAAghQAAggAYgYQAYgYAiAAILxAAQAiAAAYAYQAYAYAAAgQAAAhgYAYQgYAYgiAAgAmkgqQgSATAAAXQAAAZASASQASASAaAAILxAAQAaAAASgSQASgSAAgZQAAgXgSgTQgSgSgaAAIrxAAQgaAAgSASg");
	this.shape_1.setTransform(184,39,3.839,3.842);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Al4BHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAILxAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_2.setTransform(184,39,3.839,3.842);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1955A5").s().p("Al4BlQgqAAgegdQgegeAAgqQAAgoAegeQAegeAqAAILxAAQAqAAAeAeQAeAeAAAoQAAAqgeAeQgeAdgqAAgAmWgcQgMANAAAPQAAARAMAMQANAMARAAILxAAQASAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgSAAIrxAAQgRAAgNAMg");
	this.shape_3.setTransform(184,39,3.839,3.842);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1955A5").s().p("Al4BHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAILxAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_4.setTransform(184,39,3.839,3.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},11).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368,78);


(lib.シンボル7 = function() {
	this.initialize();

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#259000").s().p("AAwBCQhCAKhIADIgBgjIATgBQAVg2ARhJIAmAIQgKA2gWA+IA9gHIgTgpIAkgPQAYAyASAsIglAOg");
	this.shape.setTransform(374.8,102.1,3.155,3.155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#259000").s().p("AhVATIAAglICqAAIAAAlg");
	this.shape_1.setTransform(322,101,3.155,3.155);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#259000").s().p("Ag5A5QAXgDAMgIQANgHAFgRQAFgOgBgZIgoAAQgJATgRAUIgfgTQAcgiAHgyIAmACIgEAbIBJAAIgNgaIATgJIAPAeIgKAFIAVAAIgPgcIAUgKIAQAfIgRAHIAAAjIgoAAQAAAxgWAaQgTAZgtAIg");
	this.shape_2.setTransform(273.6,96.7,3.155,3.155);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD3C00").s().p("AhkBWIBJi5IAmAMIgaBJIAAAAQAKgFAGAAQAPAAAJALQAIAJADAcQAAALACAIQADAEADAAQAJAAALgqIAlAKQgHAdgJASQgJARgKAGQgJAFgOAAQgVABgMgMQgKgMgDgdQgBgMgDgEQgCgFgDAAQgIAAgMARQgJAOgUAvg");
	this.shape_3.setTransform(307,32.2,3.155,3.155);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD3C00").s().p("AgRA8IARgGIALgFQAHgFACgCIAFgJIACgOIAAglIg6AAIAAglIA6AAIAAgoIApAAIAAAoIAeAAIAAAlIgeAAIAAASQAAAhgGARQgHASgQAKQgPALgbAHgAhgAAQgBgxALgsIAsAEQgLAtAAAsQAAAvALAtIgsAEQgLgsABg0g");
	this.shape_4.setTransform(246,35.8,3.155,3.155);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD3C00").s().p("AhkBXQAghTAphnIAmALIgbBJIAAABQALgFAFAAQARAAAHALQAIAJADAcQACAPACADQACAFADAAQAJAAAKgqIAmAKQgIAegIARQgIAPgKAHQgKAHgOAAQgWgBgLgMQgKgLgDgdQgCgNgCgEQgCgDgDAAQgJAAgKAQQgLAQgUAtg");
	this.shape_5.setTransform(176.6,29.5,3.155,3.155);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD3C00").s().p("AgtABIgcALIgMgdIAfgMIgLgjIAjgKIAKAgIANgFIgHgXIAhgJIAHAXIAPgBQAUAAANAMQAMANAAAUQAAAXgOANQgOAOgaAAIgTgCIAEggIAPABQAIAAAFgEQAEgDAAgIQAAgGgDgEQgEgEgHAAIAFATIghAHIgGgRIgMAFIAWBSIgiAIIgWhPg");
	this.shape_6.setTransform(112.2,48.2,3.155,3.155);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DD3C00").s().p("Ag3BYQgQgHgHgUQgHgUAAgkQAAg2ADgsIAtABQgEA6AAAnQAAAVADALQADALAGADQAGAFALAAQARgBAOgOQAPgNAOgfIAmANQgRAugZAUQgYAUggAAQgdAAgOgIgAgBhKIAXgMIAWAoIgaAMgAAkhSIAagNIAWAoIgaANg");
	this.shape_7.setTransform(50.3,30.7,3.155,3.155);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBXQg9AIhAACIgTABIgDhLIAZgBQAVg4ANg4IAEgSIBNAOIgPBAIAvgUIAIARQAYAyATAsIAIATIhLAdgAgCAPIADgBIgBgGg");
	this.shape_8.setTransform(375.1,103.1,3.155,3.155);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAwBCQhCAKhIADIgBgjIATgBQAVg2ARhJIAmAIQgKA2gWA+IA9gHIgTgpIAkgPQAYAyASAsIglAOg");
	this.shape_9.setTransform(374.1,102.6,3.155,3.155);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhoAnIAAhNIDRAAIAABNg");
	this.shape_10.setTransform(321.4,101.5,3.155,3.155);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhVATIAAglICqAAIAAAlg");
	this.shape_11.setTransform(321.4,101.5,3.155,3.155);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhSArIAHgBIgygfIANgQQAZggAGgtIACgSIBOAEIgDAaIAQAAIgHgPIA4gbIAEAKIAagNIAjBDIgTAJIAEAJIgJAAIAAAhIgpAAQgDArgWAbQgZAfg1AJIgQADgAgyAmIgBAAQAOgDAFgEQAIgFADgIQADgIABgHIgJAAQgJASgPARg");
	this.shape_12.setTransform(272.6,96.5,3.155,3.155);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5A5QAXgDAMgIQANgHAFgRQAFgOgBgZIgoAAQgJATgRAUIgfgTQAcgiAHgyIAmACIgEAbIBJAAIgNgaIATgJIAPAeIgKAFIAVAAIgPgcIAUgKIAQAfIgRAHIAAAjIgoAAQAAAxgWAaQgTAZgtAIg");
	this.shape_13.setTransform(273,97.2,3.155,3.155);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiABjIAIgVIBJi6IAIgSIBQAXIgYA/QARAFAKANIAEAIIAAgCIBRAUIgGAVQgHAhgLASQgLAXgOAIQgQAKgUAAQgeAAgRgTQgLgLgGgWQgHAMgNAfIgIATgAg7ArIAKgRQAMgRALgGIgNgKgAgBACQAHAEAGAKQgCgIgCgGQgCgBgEAAg");
	this.shape_14.setTransform(306.1,32.9,3.155,3.155);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhkBWIBJi5IAmAMIgaBJIAAAAQAKgFAGAAQAPAAAJALQAIAJADAcQAAALACAIQADAEADAAQAJAAALgqIAlAKQgHAdgJASQgJARgKAGQgJAFgOAAQgVABgMgMQgKgMgDgdQgBgMgDgEQgCgFgDAAQgIAAgMARQgJAOgUAvg");
	this.shape_15.setTransform(306.4,32.7,3.155,3.155);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVBuIhRAJIgFgTQgMgwAAg0QAAg1AMgwIAFgTIBXAKIgIAfIAbAAIAAgpIBWAAIAAApIAeAAIAABPIgeAAQAAAjgIAVQgJAZgVAOQgTANggAIIgSAFgAgdAnIAXgIIAIgEIABgDIABgIIAAgQIgjAAQAAAWACARg");
	this.shape_16.setTransform(245.4,36.9,3.155,3.155);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRA8IARgGIALgFQAHgFACgCIAFgJIACgOIAAglIg6AAIAAglIA6AAIAAgoIApAAIAAAoIAeAAIAAAlIgeAAIAAASQAAAhgGARQgHASgQAKQgPALgbAHgAhgAAQgBgxALgsIAsAEQgLAtAAAsQAAAvALAtIgsAEQgLgsABg0g");
	this.shape_17.setTransform(245.4,36.3,3.155,3.155);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiABjIAIgVQAuh2AchDIAHgUIBRAYIgZA/QAQAEAKAOIAFAIIABgCIBQAUIgGAVQgHAfgLAUQgLAWgPAKQgOAJgVAAQggAAgPgTQgMgMgFgVIgUArIgIAUgAg7ArIAKgRQAKgRANgGIgMgKgAgBACQAIAEAFAKQgCgIgDgGQgBgBgFAAg");
	this.shape_18.setTransform(175.6,30.1,3.155,3.155);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhkBXQAghTAphnIAmALIgbBJIAAABQALgFAFAAQARAAAHALQAIAJADAcQACAPACADQACAFADAAQAJAAAKgqIAmAKQgIAegIARQgIAPgKAHQgKAHgOAAQgWgBgLgMQgKgLgDgdQgCgNgCgEQgCgDgDAAQgJAAgKAQQgLAQgUAtg");
	this.shape_19.setTransform(176,30,3.155,3.155);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4AfIgbAKIgchHIAggMIgMglIBOgWIADAIIAvgNIAIAbQAcAAATASQAUAUAAAdQAAAggWAVQgWATgjAAIAIAdIhOASg");
	this.shape_20.setTransform(110.6,48.7,3.155,3.155);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtABIgcALIgMgdIAfgMIgLgjIAjgKIAKAgIANgFIgHgXIAhgJIAHAXIAPgBQAUAAANAMQAMANAAAUQAAAXgOANQgOAOgaAAIgTgCIAEggIAPABQAIAAAFgEQAEgDAAgIQAAgGgDgEQgEgEgHAAIAFATIghAHIgGgRIgMAFIAWBSIgiAIIgWhPg");
	this.shape_21.setTransform(111.5,48.7,3.155,3.155);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhFBwQgYgNgJgbQgIgWAAgpQgBg3AEguIABgUIBZACIgBAWIAugYIAFAIIAkgSIAqBRIgyAYIAzASIgIAUQgTAzgeAYQgfAagoAAQghAAgUgKgAg9A5QAFALAIAFIAFACIgCgBQgNgJgFgTIgCgNQABAOADAKgAgVAJQAAAUACAGIAAACIADAAQAKAAAHgIQAMgLALgaIABgDIgUAKIgZgzg");
	this.shape_22.setTransform(50.7,30.1,3.155,3.155);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3BYQgQgHgHgUQgHgUAAgkQAAg2ADgsIAtABQgEA6AAAnQAAAVADALQADALAGADQAGAFALAAQARgBAOgOQAPgNAOgfIAmANQgRAugZAUQgYAUggAAQgdAAgOgIgAgBhKIAXgMIAWAoIgaAMgAAkhSIAagNIAWAoIgaANg");
	this.shape_23.setTransform(49.7,31.2,3.155,3.155);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#73400B").s().p("AAYBgQg7AJg7ABIgeABIgCheIAcgBQATg4ALgxIAHgbIBhASIgNA2IAmgQIAMAaQASAmAZA5IALAcIhdAlg");
	this.shape_24.setTransform(375.6,103.3,3.155,3.155);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#73400B").s().p("AAwBCQhCAKhIADIgBgjIATgBQAVg2ARhJIAmAIQgKA2gWA+IA9gHIgTgpIAkgPQAYAyASAsIglAOg");
	this.shape_25.setTransform(374.1,102.6,3.155,3.155);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#73400B").s().p("AhyAxIAAhhIDlAAIAABhg");
	this.shape_26.setTransform(321.4,101.5,3.155,3.155);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#73400B").s().p("AhVATIAAglICqAAIAAAlg");
	this.shape_27.setTransform(321.4,101.5,3.155,3.155);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#73400B").s().p("AhdArIgugdIAUgYQAYgfAFgpIAEgcIBfAGIgBAJIA5gdIAGAKIAZgNIAsBVIgTAJIAHANIgPAAIAAAiIgqAAQgGApgUAZQgdAig3AKIgZAEg");
	this.shape_28.setTransform(272.4,96.2,3.155,3.155);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#73400B").s().p("Ag5A5QAXgDAMgIQANgHAFgRQAFgOgBgZIgoAAQgJATgRAUIgfgTQAcgiAHgyIAmACIgEAbIBJAAIgNgaIATgJIAPAeIgKAFIAVAAIgPgcIAUgKIAQAfIgRAHIAAAjIgoAAQAAAxgWAaQgTAZgtAIg");
	this.shape_29.setTransform(273,97.2,3.155,3.155);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#73400B").s().p("AiOBpIANgfQAqhvAfhLIALgcIBmAdIgZBAQANAHAIALIABADIBZAXIgJAfQgJAhgJAUQgMAYgSAMQgSALgYAAQgjAAgTgXIgKgNIgVAxg");
	this.shape_30.setTransform(305.9,33,3.155,3.155);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#73400B").s().p("AhkBWIBJi5IAmAMIgaBJIAAAAQAKgFAGAAQAPAAAJALQAIAJADAcQAAALACAIQADAEADAAQAJAAALgqIAlAKQgHAdgJASQgJARgKAGQgJAFgOAAQgVABgMgMQgKgMgDgdQgBgMgDgEQgCgFgDAAQgIAAgMARQgJAOgUAvg");
	this.shape_31.setTransform(306.4,32.7,3.155,3.155);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#73400B").s().p("AgdB5IhSAJIgGgcQgNgwAAg2QAAg4ANgwIAGgcIBqALIAAgLIBqAAIAAApIAeAAIAABmIgeAAQgCAegHASQgKAcgYAQQgUAOgjAJIgbAHgAgTAXIAOgFIAAgDIAAgEIgPAAgAgIhbIADAAIAAgPg");
	this.shape_32.setTransform(245.4,37.2,3.155,3.155);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#73400B").s().p("AgRA8IARgGIALgFQAHgFACgCIAFgJIACgOIAAglIg6AAIAAglIA6AAIAAgoIApAAIAAAoIAeAAIAAAlIgeAAIAAASQAAAhgGARQgHASgQAKQgPALgbAHgAhgAAQgBgxALgsIAsAEQgLAtAAAsQAAAvALAtIgsAEQgLgsABg0g");
	this.shape_33.setTransform(245.4,36.3,3.155,3.155);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#73400B").s().p("AiOBqIAMghQAehLArhuIALgcIBnAeIgaBAQANAFAJANIABABIBZAZIgIAdQgJAhgKAVQgNAZgRAKQgTAMgWAAQgkAAgUgWQgEgFgGgJIgUAxg");
	this.shape_34.setTransform(175.5,30.3,3.155,3.155);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#73400B").s().p("AhkBXQAghTAphnIAmALIgbBJIAAABQALgFAFAAQARAAAHALQAIAJADAcQACAPACADQACAFADAAQAJAAAKgqIAmAKQgIAegIARQgIAPgKAHQgKAHgOAAQgWgBgLgMQgKgLgDgdQgCgNgCgEQgCgDgDAAQgJAAgKAQQgLAQgUAtg");
	this.shape_35.setTransform(176,30,3.155,3.155);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#73400B").s().p("Ag+AuIgaAJIgjhbIAggNIgMglIBjgdIADAIIAvgMIAJAdQAbADAUASQAWAYAAAhQAAAmgZAXQgVASgdADIAHAbIhjAXg");
	this.shape_36.setTransform(110.1,48.7,3.155,3.155);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#73400B").s().p("AgtABIgcALIgMgdIAfgMIgLgjIAjgKIAKAgIANgFIgHgXIAhgJIAHAXIAPgBQAUAAANAMQAMANAAAUQAAAXgOANQgOAOgaAAIgTgCIAEggIAPABQAIAAAFgEQAEgDAAgIQAAgGgDgEQgEgEgHAAIAFATIghAHIgGgRIgMAFIAWBSIgiAIIgWhPg");
	this.shape_37.setTransform(111.5,48.7,3.155,3.155);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#73400B").s().p("AhMB7QgbgOgLgfQgKgbAAgoQABgsADg5IADggIBuADIAAAPIAmgVIAFAIIAkgSIA1BmIglARIAlAOIgMAdQgVA3gfAZQghAdgtAAQgkAAgXgNgAgMAaIAGgDIAGgJIAAAAIgMgWg");
	this.shape_38.setTransform(51.2,29.5,3.155,3.155);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#73400B").s().p("Ag3BYQgQgHgHgUQgHgUAAgkQAAg2ADgsIAtABQgEA6AAAnQAAAVADALQADALAGADQAGAFALAAQARgBAOgOQAPgNAOgfIAmANQgRAugZAUQgYAUggAAQgdAAgOgIgAgBhKIAXgMIAWAoIgaAMgAAkhSIAagNIAWAoIgaANg");
	this.shape_39.setTransform(49.7,31.2,3.155,3.155);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#73400B").s().p("AAYBgQg7AIg7ADIgeABIgChgIAcAAQATg4ALgxIAHgcIBhASIgNA3IAmgQIAMAaQASAmAZA5IALAcIhdAkg");
	this.shape_40.setTransform(375.6,109.6,3.155,3.155);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#73400B").s().p("AAwBCQhCAKhIADIgBgjIATgBQAVg2ARhJIAmAIQgKA2gWA+IA9gHIgTgpIAkgPQAYAyASAsIglAOg");
	this.shape_41.setTransform(374.1,108.9,3.155,3.155);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#73400B").s().p("AhyAxIAAhhIDlAAIAABhg");
	this.shape_42.setTransform(321.4,107.8,3.155,3.155);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#73400B").s().p("AhVATIAAglICqAAIAAAlg");
	this.shape_43.setTransform(321.4,107.8,3.155,3.155);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#73400B").s().p("AhdAsIgugeIAUgYQAYgfAFgpIAEgcIBfAGIgBAJIA5gdIAGAKIAZgNIAsBVIgTAJIAHANIgPAAIAAAhIgqAAQgGAqgUAZQgdAjg3AJIgZAEg");
	this.shape_44.setTransform(272.4,102.5,3.155,3.155);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#73400B").s().p("Ag5A5QAXgEAMgHQANgHAFgQQAFgQgBgYIgoAAQgJAUgRAUIgfgUQAcgiAHgyIAmACIgEAbIBJAAIgNgaIATgKIAPAfIgKAFIAVAAIgPgcIAUgKIAQAeIgRAIIAAAjIgoAAQAAAxgWAaQgTAZgtAIg");
	this.shape_45.setTransform(273,103.5,3.155,3.155);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#73400B").s().p("AiOBpIANgfQAuh4AbhCIALgcIBmAeIgZA/QANAIAIAKIABACIBZAZIgJAeQgJAigJATQgMAZgSAKQgRAMgZAAQgkAAgSgXQgGgFgEgIIgVAxg");
	this.shape_46.setTransform(305.9,40,3.155,3.155);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#73400B").s().p("AhkBWIBJi5IAmAMIgaBJIAAAAQALgFAFAAQAQAAAIALQAIAIADAdQAAALACAHQACAFAEAAQAJAAALgqIAlAKQgHAdgJASQgJAQgKAGQgJAGgOAAQgVABgMgMQgKgMgDgeQgBgMgDgDQgCgFgDAAQgIAAgMARQgKAQgTAtg");
	this.shape_47.setTransform(306.4,39.8,3.155,3.155);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#73400B").s().p("AgdB5IhSAJIgGgcQgNgwAAg2QAAg4ANgwIAGgdIBqAMIAAgLIBqAAIAAAqIAeAAIAABkIgeAAQgCAegHATQgKAcgYARQgVAOgiAIIgbAIgAgTAXIAKgDIAEgCIAAgDIAAgFIgPAAgAgIhaIADAAIAAgQg");
	this.shape_48.setTransform(245.4,44.2,3.155,3.155);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#73400B").s().p("AgRA8IARgFIALgGIAJgHQACgDADgHQACgIAAgEIAAgmIg6AAIAAgkIA6AAIAAgpIApAAIAAApIAeAAIAAAkIgeAAIAAATQAAAggGARQgHASgQALQgQALgaAHgAhgABQgBgyALgsIAsAFQgLAsAAAtQAAAvALAsIgsAFQgLgtABgzg");
	this.shape_49.setTransform(245.4,43.2,3.155,3.155);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#73400B").s().p("AiOBpIAMgfIBJi6IALgcIBnAeIgaA/QANAHAJALIABADIBZAYIgIAeQgJAggKAWQgNAYgRALQgTALgWAAQglAAgTgXQgFgFgFgIIgUAxg");
	this.shape_50.setTransform(175.5,37.2,3.155,3.155);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#73400B").s().p("AhkBWIBJi5IAmALIgbBJQAMgEAEAAQARAAAHALQAIAJADAbQACAPACAEQACAFADAAQAIAAALgrIAmALQgIAegIARQgIAPgKAHQgKAGgOAAQgWAAgLgMQgKgMgDgcQgCgNgCgEQgCgEgDAAQgJAAgKAQQgLARgUAtg");
	this.shape_51.setTransform(176,37.1,3.155,3.155);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#73400B").s().p("Ag+AuIgaAJIgjhbIAggNIgMglIBjgcIADAIIAvgOIAJAeQAcADATATQAWAWAAAiQAAAlgZAXQgUATgeADIAHAbIhjAXg");
	this.shape_52.setTransform(110.1,55.7,3.155,3.155);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#73400B").s().p("AgtABIgcALIgMgdIAfgMIgLgjIAjgKIAKAgIANgFIgHgXIAhgJIAHAXIAPgBQAUAAANAMQAMAMAAAVQAAAXgOANQgOANgaAAQgLAAgIgCIAEgfIAPABQAIAAAFgFQAEgCAAgIQAAgGgDgEQgEgEgHAAIAFATIghAHIgGgSIgMAFQAOA1AIAeIgiAIg");
	this.shape_53.setTransform(111.5,55.8,3.155,3.155);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#73400B").s().p("AhMB8QgbgOgLggQgKgbAAgoQABgsADg5IADggIBuADIAAAOIAmgUIAFAJIAkgSIAPAcIAWAqIAQAfIglARIAlAOIgMAdQgWA3geAZQgiAcgsAAQglAAgWgLgAgMAaQADgBADgCIAGgKIAAABIgMgWg");
	this.shape_54.setTransform(51.2,36.5,3.155,3.155);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#73400B").s().p("Ag3BYQgQgIgHgUQgHgTAAgkQAAg3ADgsIAtABQgEA6AAAoQAAAVADALQADALAGADQAGAFALAAQAQgBAPgOQAPgOAOgeIAmANQgRAtgZAVQgZAUgfAAQgbAAgQgIgAgBhKIAXgMIAWAnIgaANgAAkhTIAagMIAWAoIgaANg");
	this.shape_55.setTransform(49.7,38.3,3.155,3.155);

	this.addChild(this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.8,-14.3,404.1,162.5);


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

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB0071").s().p("AhABeIAHglQAgAHAWAAQASAAANgIQAMgIgBgMQAAgTgaAAQgNAAgMAEQgNAEgPAKIgmgQQAPgdAIgbIgoAAIAAgmIAxAAIADgZIAqACIgDAXIBjAAIAAAmIhrAAIgGAXIAAAAQASgEAQAAQAhAAARAPQARANAAAcQAAAdgYARQgYARgmAAQgeAAgfgHg");
	this.shape.setTransform(275.4,107.1,6.446,6.447);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB0071").s().p("AhuBdQAVg6AMg5IgeAAIAAgmIAmAAIAIgsIAmACIgFAqIAcAAQAGAAAIACIALACIAGAHQADAEABAEIACAPIABASIAAAYQAAAugLAUQgLAUgTAAQgLAAgPgDQgPgCgLgEIAJgmQAXAHAKAAQAKAAAAg1QgBgWgCgFQgBgEgLAAIgSAAQgMA3gaBIgAAjg/IApgLQAUA5APA6IgpAKQgPg9gUg1g");
	this.shape_1.setTransform(126.5,106.5,6.446,6.447);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(54.7,38.6,282.7,135.7);


(lib.num = function() {
	this.initialize();

	// レイヤー 1
	this.text_addScore = new cjs.Text("0", "40px 'A-OTF Maru Folk Pro R'", "#FF9900");
	this.text_addScore.name = "text_addScore";
	this.text_addScore.textAlign = "center";
	this.text_addScore.lineHeight = 42;
	this.text_addScore.lineWidth = 81;
	this.text_addScore.setTransform(40.5,0);

	this.addChild(this.text_addScore);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,44);


(lib.MC_result = function() {
	this.initialize();

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD3C00").s().p("AhJBWIAAirIApAAIAAA4QA2AOA0ARIgMAlQgzgSgrgMIAABNg");
	this.shape.setTransform(160.6,16.1,2.548,2.547);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD3C00").s().p("AhgA0IAQgKQAFgDAEgHQAFgGACgKIACgVIABhPIAnAAIAAAsQAAAogEAYQgGAZgKAMQgLANgVALgAgGBSIAAimIAnAAIAAB8QAMgFAHgNQAGgOACgZIAlAFQgEAygXAWQgYAWguAAg");
	this.shape_1.setTransform(105.1,16.3,2.548,2.547);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD3C00").s().p("Ag6A7QAXgCANgEQANgDAJgHQAHgHADgLQACgLAAgPIAAgIIgmAAIAAAhIgnAAIAAghIgeAAIAAgjIAeAAIAAgjIAnAAIAAAjIAmAAIAAgjIATAAIASgJIAQAeIgMAGIAAAIIAfAAIAAAjIgfAAIAAAIQAAAugYAWQgYAWg3AFgAA8hTIAUgKIAQAfIgUAJg");
	this.shape_2.setTransform(53.7,14.6,2.548,2.547);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD3C00").s().p("AgyAzQAYgCAPgFQANgFAJgJQAKgJAEgNQADgLAAgVIAAg9IArAAIAAA8QgBA0gcAcQgcAbg4AEgAhGAIIAAhdIAqAAIAABdg");
	this.shape_3.setTransform(0.3,16.6,2.548,2.547);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.8,-9.4,197.5,48);


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

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#177ACB").s().p("AgRA+IARgGQAHgDAFgDQAGgDADgEIAEgKIACgNIAAgmIg6AAIAAgmIA6AAIAAgqIAqAAIAAAqIAfAAIAAAmIgfAAIAAATQABAhgIARQgGATgPALQgQAKgcAIgAhjABQAAgxALgvIAsAEQgKArgBAxQABAzAKAqIgsAFQgLgwAAgyg");
	this.shape.setTransform(277.4,103.1,6.588,6.588);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#177ACB").s().p("AhBBZQgPgMgBgWQAAgVAPgNQAPgMAaAAQAJAAANACIAAgLIhQAAIAAgjIBQAAIAAgJIhZAAIAAglIBZAAIAAgTIAoAAIAAATIA4AAIAAAlIg4AAIAAAJIAvAAIAAAjIgvAAIAAAcQAYAOAbAbIgaAcQgRgRgMgJQgEAPgPAIQgOAHgZAAQgZAAgPgMgAgmA3QgBAJAOAAQANAAAEgDQAFgDAAgKQgJgDgHAAQgTAAAAAKg");
	this.shape_1.setTransform(120.3,103.1,6.588,6.588);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(58.7,36.1,285,134.1);


(lib.janken = function() {
	this.initialize();

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB500").s().p("AhaBOQAhhVAhhSIAiAKIgYBCIAAAAQAKgEAEAAQAPAAAHAKQAHAHACAaQACAMACAFQABADADAAQAIABAKgmIAiAJQgHAagIAQQgIAPgIAFQgIAGgOgBQgTABgKgLQgJgMgDgZQgBgMgCgCQgCgEgDAAQgHAAgKAPQgLAQgQAng");
	this.shape.setTransform(422.8,40,4.799,4.799);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBB500").s().p("AgPA2IAPgFIAKgFQAGgEACgDIAEgIIACgMIAAghIgzAAIAAghIAzAAIAAglIAlAAIAAAlIAbAAIAAAhIgbAAIAAAQQAAAcgGARQgGAQgOAKQgNAJgYAHgAhXAAQAAgrAKgoIAnADQgKAmABAqQgBAtAKAlIgnAFQgKgpAAgug");
	this.shape_1.setTransform(337.3,40.5,4.799,4.799);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBB500").s().p("AhaBOIBCinIAiAKIgYBCIAAAAQALgEAEAAQAOAAAHAKQAIAIACAZQAAAMADAFQABADAEAAQAIABAJgmIAiAJQgHAagIAQQgHAPgJAFQgIAGgNgBQgUABgKgLQgJgLgDgaIgDgOQgCgEgDAAQgHAAgKAPQgLARgQAmg");
	this.shape_2.setTransform(241.7,40,4.799,4.799);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBB500").s().p("AgpABIgZAKIgLgaIAcgLIgKgfIAggJIAJAcIAMgEIgHgVIAdgIIAHAVIANgBQATAAALALQAMALAAATQgBAUgNAMQgNAMgXAAIgRgCIAEgdIANACQAHAAAFgFQAEgBAAgIQAAgFgDgEQgEgDgGAAIAEAQIgdAHIgGgQIgJAFIASBKIgeAHg");
	this.shape_3.setTransform(154.2,49,4.799,4.799);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBB500").s().p("AgyBQQgOgIgGgSQgHgQABghQAAguACgqIAoABQgDAsAAArQABARACALQACAKAGADQAGAEAJAAQAOAAAOgNQANgMAMgbIAkAKQgRAqgVATQgXASgcAAQgZAAgOgHgAgChCIAWgMIATAkIgXALgAAghKIAYgMIAUAlIgYAMg");
	this.shape_4.setTransform(66.6,40.5,4.799,4.799);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C4207").s().p("AhmBTIADgJQAlhfAdhIIADgIIA2AQIgXA6QAUAAAJAOQAKAMACAaIAAAAQADgGADgNIACgIIA1ANIgCAJQgGAZgKATQgJASgLAGQgKAHgQAAQgYAAgNgNQgLgOgDgdIgBgHIgHAIQgJAPgQAmIgEAJgAhMBHIAQAGQAOggAKgQQAMgTAOAAQAJAAACAJQACAEADAOQADAWAIAJQAHAHAPAAQAKAAAGgEQAGgDAHgNQAFgKAGgUIgPgEQgFATgGAIQgFAIgIAAQgKAAgEgKQgDgHgBgNQgCgWgGgGQgEgFgJAAQgCAAgIADIgGADIgKgJIACgHIAWg3IgRgFQgbBEgfBQg");
	this.shape_5.setTransform(422.6,40.1,4.799,4.799);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AF8100").s().p("AhaBOQAhhVAhhSIAiAKIgYBCIAAAAQAKgEAEAAQAPAAAHAKQAHAHACAaQACAMACAFQABADADAAQAIABAKgmIAiAJQgHAagIAQQgIAPgIAFQgIAGgOgBQgTABgKgLQgJgMgDgZQgBgMgCgCQgCgEgDAAQgHAAgKAPQgLAQgQAng");
	this.shape_6.setTransform(422.8,40,4.799,4.799);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5C4207").s().p("AgcAvIAagIQADgCAFgDQAEgCAAgBIACgGIACgJIAAgXIgzAAIAAgLIAAASQAAArAJAkIACAMIg6AGIgCgJQgLgrAAgtQAAgsALgrIACgIIA6AGIgHAdIAvAAIAAglIA5AAIAAAlIAbAAIAAA1IgbAAIAAAHQAAAegHASQgHAUgQAKQgNAKgcAIIgJACgAhNAAQAAAlAIAmIASgCQgGgggBgpQABgoAGggIgSgCQgIAnAAAjgAgRgbIAzAAIAAAsQgBAKgBAEQgDAIgDAEQgFAFgFAEQgGADgIADIgEACIADAOQATgGAJgGQAMgIAEgNQAGgNAAgcIAAgbIAbAAIAAgNIgbAAIAAglIgRAAIAAAlIgzAAg");
	this.shape_7.setTransform(337.3,40.8,4.799,4.799);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AF8100").s().p("AgPA2IAPgFIAKgFQAGgEACgDIAEgIIACgMIAAghIgzAAIAAghIAzAAIAAglIAlAAIAAAlIAbAAIAAAhIgbAAIAAAQQAAAcgGARQgGAQgOAKQgNAJgYAHgAhXAAQAAgrAKgoIAnADQgKAmABAqQgBAtAKAlIgnAFQgKgpAAgug");
	this.shape_8.setTransform(337.3,40.5,4.799,4.799);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5C4207").s().p("AhmBTIADgJIBCinIAEgIIA0AQIgXA6IABAAQASAAAMAOQAIALADAbIAAAAIAIgbIA2ANIgDAJQgHAcgIAQQgLASgJAGQgLAHgQAAQgYAAgNgNQgKgOgEgdIgBgHIgHAIQgJAOgRAnIgDAJgAhMBHIAQAGQANggALgQQANgTAMAAQAKAAACAJQADAGABAMQAEAWAHAJQAIAHAPAAQAKAAAFgEQAGgDAIgNQAGgMAFgSIgOgEQgGATgGAIQgGAIgHAAQgJAAgFgKQgDgFgBgPQgCgXgGgFQgEgFgJAAQgCAAgJADIgGADIgJgJIACgHIAWg3IgRgFIg6CUg");
	this.shape_9.setTransform(241.5,40.1,4.799,4.799);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AF8100").s().p("AhaBOIBCinIAiAKIgYBCIAAAAQALgEAEAAQAOAAAHAKQAIAIACAZQAAAMADAFQABADAEAAQAIABAJgmIAiAJQgHAagIAQQgHAPgJAFQgIAGgNgBQgUABgKgLQgJgLgDgaIgDgOQgCgEgDAAQgHAAgKAPQgLARgQAmg");
	this.shape_10.setTransform(241.7,40,4.799,4.799);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5C4207").s().p("AguAOIgZAKIgRgtIAYgKIAEgBIgKggIAzgOIACAGIAqgLIAHAWIAGAAQAXAAAOAOQAOAOAAAXQAAAYgQAPQgRAPgaAAIgPgBIAIAdIgyAMgAgeAAIASA8IAMgDIgSg/IgDgJIAdgMIAGASIALgDIgGgUIAOABQALABAFAFQAGAHABAJQgBAKgGAHQgJAHgKAAIgFgBIgBAJIAGABQATAAAKgKQAKgJAAgPQAAgOgJgJQgIgIgOAAIgVACIgFgUIgMADIAFAVIgcALIgJgeIgNAEIAKAeIgVAIIgHACIAFAKIAagLg");
	this.shape_11.setTransform(153.5,49,4.799,4.799);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AF8100").s().p("AgpABIgZAKIgLgaIAcgLIgKgfIAggJIAJAcIAMgEIgHgVIAdgIIAHAVIANgBQATAAALALQAMALAAATQgBAUgNAMQgNAMgXAAIgRgCIAEgdIANACQAHAAAFgFQAEgBAAgIQAAgFgDgEQgEgDgGAAIAEAQIgdAHIgGgQIgJAFIASBKIgeAHg");
	this.shape_12.setTransform(154.2,49,4.799,4.799);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C4207").s().p("Ag4BaQgRgJgIgWQgHgRAAgkQAAguADgrIAAgJIA8ABIAAAKQgDAtAAAqQAAATACAHQACAHACABQAEABAFAAQAMABAJgKQAMgLAMgaIAEgJIA1ATIgDAJQgSAsgYATQgYAWghgBQgbABgQgJgAhEAGQAAAdAGASQAFAOAKAFQANAGAVAAQAZAAAUgQQARgOAOggIgRgHQgLAZgMAMQgSAPgSAAQgMABgIgGQgJgFgDgOQgDgLAAgUQAAgsADgiIgUAAQgDAgAAAugAgQhEIAngWIAEAIIAggQIAdA3IgqAUIgEgIIggAPgAAJg8IAJASIAGgDIgJgSgAAshEIAKATIAHgDIgLgTg");
	this.shape_13.setTransform(67.3,39.8,4.799,4.799);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AF8100").s().p("AgyBQQgOgIgGgSQgHgQABghQAAguACgqIAoABQgDAsAAArQABARACALQACAKAGADQAGAEAJAAQAOAAAOgNQANgMAMgbIAkAKQgRAqgVATQgXASgcAAQgZAAgOgHgAgChCIAWgMIATAkIgXALgAAghKIAYgMIAUAlIgYAMg");
	this.shape_14.setTransform(66.6,40.5,4.799,4.799);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5C4207").s().p("AhtBWIAGgOQAqhtAXg6IAFgMIA/ASIgWA5QARADAJANQAHAIACALIAEgLIA/APIgEAOQgIAegIAPQgKATgMAIQgMAHgRAAQgaAAgNgPQgLgMgGgcQgJAQgPAiIgFANgAhGBEIAHADQAOggAJgNQAOgVAQAAQAKAAAGAMQADAGABANQAEAWAGAGQAGAGANAAQAIAAAFgDQAFgCAGgMIAKgZIgFgBQgGASgGAHQgHAJgJAAQgNAAgGgNQgCgFgCgQQgCgVgFgGQgDgCgGAAQgBAAgHACIgJADIgPgMIAXg8IgHgCQgXA6ggBRg");
	this.shape_15.setTransform(422.6,44.9,4.799,4.799);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5C4207").s().p("AhaBOQAhhVAhhSIAiAKIgYBCIAAAAQAKgEAEAAQAPAAAHAKQAHAHACAaQACAMACAFQABADADAAQAIABAKgnIAiAKQgHAbgIAPQgIAPgIAFQgIAGgOAAQgTAAgKgLQgJgMgDgZQgBgMgCgCQgCgEgDAAQgHAAgKAPQgLAQgQAng");
	this.shape_16.setTransform(422.8,44.8,4.799,4.799);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5C4207").s().p("AgaBAIAHAeIhFAIIgDgNQgLgtAAgsQAAgsALgtIADgMIBFAHIgHAdIAjAAIAAglIBDAAIAAAlIAbAAIAAA/IgbAAIAAACQAAAfgHASQgHAVgSAMQgQALgcAHIgMADgAhIAAQAAAiAHAjIAJgBQgHggABgkQgBgjAHghIgJgBQgHAjAAAigAgMggIAzAAIAAAxQAAAIgDAHQgDAJgDAEQgEAGgIAEQgGAEgIADIgBAAIACAFQANgEAJgGQAJgGAFgMQAFgOAAgZIAAggIAbAAIAAgDIgbAAIAAglIgHAAIAAAlIgzAAgAghAAQABAYACASIAhgMIADgDIACgEIABgIIAAgRIgqAAg");
	this.shape_17.setTransform(337.3,45.9,4.799,4.799);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5C4207").s().p("AgPA2IAPgFIAKgGQAGgCACgEIAEgIIACgMIAAghIgzAAIAAghIAzAAIAAglIAlAAIAAAlIAbAAIAAAhIgbAAIAAAQQAAAcgGARQgGAQgOAJQgNAKgYAHgAhXAAQAAgrAKgoIAnADQgKAmABAqQgBAtAKAlIgnAFQgKgpAAgug");
	this.shape_18.setTransform(337.3,45.3,4.799,4.799);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5C4207").s().p("AhtBWIAGgOQAchKAmhdIAFgMIA+ASIgWA5QASADAJANQAFAHAEAMIADgLIA/APIgEAOQgHAbgJASQgJASgNAJQgMAHgRAAQgaAAgNgPQgMgNgEgbQgIAMgRAmIgFANgAhGBEIAHADQANgeAKgPQAOgVAQAAQAKAAAGAMQACAEADAPQADAVAHAHQAFAGANAAQAIAAAFgDQAFgCAGgMQAFgJAFgQIgFgBQgFASgGAHQgHAJgKAAQgNAAgFgNQgDgHgCgOQgCgVgFgGQgBgCgIAAQgBAAgHACIgJADIgPgMIAXg8IgHgCQgXA6ggBRg");
	this.shape_19.setTransform(241.4,44.9,4.799,4.799);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5C4207").s().p("AhaBOIBCinIAiAKIgYBCIAAAAQALgEAEAAQAOAAAHAKQAIAIACAZQAAAMADAFQABADAEAAQAIABAJgnIAiAKQgHAbgIAPQgHAPgJAFQgIAGgNAAQgUAAgKgLQgJgLgDgaIgDgOQgCgEgDAAQgHAAgKAPQgLARgQAmg");
	this.shape_20.setTransform(241.7,44.8,4.799,4.799);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5C4207").s().p("AgwAVIgYAJIgWg2IAdgLIgLggIA9gSIACAHIAqgLIAHAXQAbgBAQAQQAQAQAAAZQAAAagSARQgSAQgdAAIgHgBIAHAcIg8AOgAgmgvIAeBlIADAAIgUhIIgBAAIgJgegAA2gcQAHAIAAALQAAAMgJAIQgDAEgHADQAJgDAGgEQAIgIAAgNQAAgMgHgHQgHgHgMAAIgDAAQAKAAAIAIgAAHg0IAFATIABAAIAFASIACAAIgIgXIABAAIgEgPg");
	this.shape_21.setTransform(153.1,53.8,4.799,4.799);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5C4207").s().p("AgpABIgZAKIgLgaIAcgLIgKgfIAggJIAJAcIAMgEIgHgVIAdgIIAHAVIANgBQATAAALALQAMALAAATQgBAUgNAMQgNAMgXAAIgRgCIAEgdIANACQAHAAAFgFQAEgBAAgIQAAgFgDgEQgEgDgGAAIAEAQIgdAHIgGgQIgJAFIASBKIgeAHg");
	this.shape_22.setTransform(154.2,53.8,4.799,4.799);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5C4207").s().p("Ag7BfQgSgJgJgYQgIgVAAgiQABguACgsIABgOIBGACIgBAYIAtgYIAFAIIAfgQIAhA/IgyAZIgEgIIggAPIgdg5QgBAgAAAoQAAARABAHIACAFIAHABQAKAAAIgIQAKgJAMgaIAFgOIALAFIAzARIgEAOQgRAtgZAVQgbAWgiAAQgcAAgSgJgAhAAHQAAAfAGAOQAEAMAJAFQALAFAVAAQAXAAASgPQAPgNANgaIgIgDQgLAWgMAMQgRAQgVAAQgOAAgKgGQgKgHgDgPQgDgMgBgUQABgoACghIgKAAQgDAgAAApg");
	this.shape_23.setTransform(67.6,44.2,4.799,4.799);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5C4207").s().p("AgyBQQgOgHgGgTQgHgQABghQAAgvACgpIAoABQgDAsAAArQABARACALQACAKAGADQAGAEAJAAQAOAAAOgNQANgMAMgbIAkAKQgRAqgVATQgXASgcAAQgZAAgOgHgAgChCIAWgMIATAkIgXAMgAAghKIAYgMIAUAlIgYAMg");
	this.shape_24.setTransform(66.6,45.3,4.799,4.799);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(22,-9.2,453.5,106.6);


(lib.drow = function() {
	this.initialize();

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#609C00").s().p("Ag/BOQgYgOAAgZQAAgPAIgNQAIgMAWgVIAhAWQgQAPgEAGQgGAIAAAGQAAAHAMAGQAKAFAWAAQAPAAAXgEQATgCAVgGIAIAoQgOAEgdAFQgdADgOAAQgpAAgYgPgAhCg1IAAgnICMAAIAAAng");
	this.shape.setTransform(474.6,107.1,6.566,6.566);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#609C00").s().p("AhOA/QgTgcAAgmQAAguANgmIArAEQgFATgDAVQgDAXAAARQAAAJABAKQACAKADAGIAGAKQADAEACAAQAEAAAJgLQAIgLAIgWIAkAOQgMAigSAVQgUAUgSAAQgWAAgSgcgAA1BBQAAhKgchFIApgMQAgBEAABXg");
	this.shape_1.setTransform(324.3,108.6,6.566,6.566);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#609C00").s().p("AAUBDQARgDAKgLQALgJAAgMQAAgLgGgHQgQAmgcAUQgZAVgfAAQgXAAgOgNQgOgNAAgXQAAgZAPgSQANgQAcgKIAAgUIgtAAIAAgjIAtAAIAAgYIAoAAIAAAYIBbAAIAAAjIhbAAIAAAMIARgBQApAAAXATQAWAQAAAfQAAAcgTATQgRATggAHgAg5AnQAAAIAEAEQAEAFAGAAIAAgoQgOALAAAMgAgDADIAAAdQAKgOAIgQIgBAAIgRABg");
	this.shape_2.setTransform(169.1,104,6.566,6.566);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(103.2,34.9,429.8,138.2);


(lib.btn_tutorial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAhQAAgKALgIQALgHAQAAQAPAAAIAFQAIAGAAALIAAAEQAJgGAAgKQAAgIgIgEQgGgFgNAAQgNAAgNADQgOADgPAHIgJgSIA6ghIgxAAIAAgYIBjAAIAAAYIgpAVIAKgBQATAAAMAKQALAHAAAQQABAWgRAMQgPAMgdAAQguAAAAgdgAgUAhQAAAHAUAAIAAgHQAAgDgBgBQgBgCgIAAQgKAAAAAGg");
	this.shape.setTransform(128.9,-4.6,3.582,3.582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANArQAKgCAHgGQAHgHAAgIQAAgIgEgDQgKAYgSAOQgPAMgUAAQgPABgJgJQgJgIAAgPQAAgQAKgLQAIgKASgGIAAgOIgdAAIAAgWIAdAAIAAgPIAZAAIAAAPIA6AAIAAAWIg6AAIAAAIIALAAQAbAAANAMQAPAJAAAUQAAASgLAMQgNANgUAEgAgkAZQAAAFADADQACADAEAAIAAgZQgJAGAAAIgAgCACIAAATQAFgIAHgMIgBAAg");
	this.shape_1.setTransform(83.2,-5.4,3.582,3.582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAlQAYAAANgEQANgFAFgKQAGgKAAgQQAAgXgQAAQgNAAgLANQgKAOAAARIgbAAIAAhLIAcAAIAAAWQAQgTATABQAUAAAMANQAMAOAAAXQAAAkgWARQgWASgtgBg");
	this.shape_2.setTransform(38.8,-4.9,3.582,3.582);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQAQgIAkgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgZAEgdAAQg1AAAAgng");
	this.shape_3.setTransform(-5.6,-5.7,3.582,3.582);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAOIAAgbIBVAAIAAAbg");
	this.shape_4.setTransform(-43.4,-5.3,3.582,3.582);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAjQAJgDAEgFQgJgEgIgGIAMgRIAKAGIAAgWQgMAGgHAKQgHANAAAQIgVAAIAAhGIAWAAIAAAUQAKgNAPgFIAAgOIAVAAIAAAMQAjAEAAAgQAAAQgJAJQgKAKgTABQgDAJgGAFQgFAFgLADgAARAIQAMgDAAgKQAAgKgMgDg");
	this.shape_5.setTransform(-82.2,-1.1,3.582,3.582);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA8IAEgYQATAFAPAAQAMAAAHgFQAIgFAAgIQAAgMgRAAQgIAAgIACQgGACgLAHIgYgKQAKgUAEgPIgZAAIAAgYIAeAAIADgRIAbACIgCAPIA/AAIAAAYIhEAAIgFAPIAAAAQAMgDAKAAQAVAAALAKQAMAIgBARQAAASgPAMQgQALgYAAQgTAAgTgFg");
	this.shape_6.setTransform(-127.1,-6.2,3.582,3.582);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494949").s().p("Ag2AhIABgGIgSgjIAjgTIgWAAIAAgsIB2AAIAAApIgPAHQAIAEAEAEQAPANAAASQAAAbgUAPQgSAOghAAQg3AAAAgngAgbAXQgHAFAAAFQAAATAjAAIAMgBIACgSIAAgDQAAgGgEgCQgDgCgIgCIAEACQAIAEAAAJQAAAFgCAFIgCAHIgIAAQgcAAAAgRQAAgKAJgDQgEAAgEADgAANgHQAMACAHAEQALAGAAANQAAAQgNAJIgLAHQANgCAIgGQAMgJAAgRQAAgKgIgGQgIgHgQAAgAgmgvIAvAAIAAAQIg2AfIACABQANgDAJgCQAJgCAMgBIAAgPIAogVIAAgIIhOAAg");
	this.shape_7.setTransform(128.2,-4.6,3.582,3.582);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494949").s().p("AguAhQAAgKALgIQALgHAQAAQAPAAAIAFQAIAGAAALIAAAEQAJgGAAgKQAAgIgIgEQgGgFgNAAQgNAAgNADQgOADgPAHIgJgSIA6ghIgxAAIAAgYIBjAAIAAAYIgpAVIAKgBQATAAAMAKQALAHAAAQQABAWgRAMQgPAMgdAAQguAAAAgdgAgUAhQAAAHAUAAIAAgHQAAgDgBgBQgBgCgIAAQgKAAAAAGg");
	this.shape_8.setTransform(128.9,-4.6,3.582,3.582);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#494949").s().p("AAHA4QgQAMgVAAQgTAAgLgLQgNgKAAgUQAAgSAMgOQAGgHALgIIgWAAIAAgqIAdAAIAAgPIArAAIAAAPIA8AAIAAAqIgMAAIACACQASAPAAAWQAAAWgPAPQgNAPgYAFIgJACgAApABQAGAIAAAKQAAANgKAIQgFAGgGACIABAGQAMgEAGgHQAJgKAAgOQAAgOgKgIQgNgJgWAAIgVABIAAgdIA7AAIAAgCIg7AAIAAgPIgFAAIAAAPIgdAAIAAACIAdAAIAAAfIgGADQgQAFgHAHQgHAJAAAMQAAAKAGAGQAFAGAMgBQAKABAIgEIAAgzIAkgCIgFAMQgIAPgHAIIgOARQAHgDADgEIABAAIAAgCIACAAQAMgLAJgUIAGgMgAgbAtQgJAAgFgHQgFgFAAgJQAAgMANgLIAQgJIAAA1g");
	this.shape_9.setTransform(83.2,-5.1,3.582,3.582);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#494949").s().p("AANArQAKgCAHgGQAHgHAAgIQAAgIgEgDQgKAYgSAOQgPAMgUAAQgPABgJgJQgJgIAAgPQAAgQAKgLQAIgKASgGIAAgOIgdAAIAAgWIAdAAIAAgPIAZAAIAAAPIA6AAIAAAWIg6AAIAAAIIALAAQAbAAANAMQAPAJAAAUQAAASgLAMQgNANgUAEgAgkAZQAAAFADADQACADAEAAIAAgZQgJAGAAAIgAgCACIAAATQAFgIAHgMIgBAAg");
	this.shape_10.setTransform(83.2,-5.4,3.582,3.582);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494949").s().p("AgtBIIgDgtIALAAQAZAAAJgEQAJgDAEgGQAEgIAAgOQAAgOgGABQgIAAgHAJQgJALAAAOIAAAKIgvAAIAAhfIAwAAIAAALQAMgIANABQAYAAAPAQQAPASAAAaQAAApgaAUQgYAUgxgBgAAYgkQAKAIAAAUQAAATgHAMQgJAOgQAFQgKAEgSABIAAAFQAjgBARgNQASgOAAggQAAgSgJgMQgKgLgPABQgOgBgNAPIgEAEIgOAAIAAgWIgIAAIAAA3IAIAAQACgPAJgMQAOgRASAAQAJgBAHAGg");
	this.shape_11.setTransform(38.8,-4.9,3.582,3.582);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#494949").s().p("AglAlQAYAAANgEQANgFAFgKQAGgKAAgQQAAgXgQAAQgNAAgLANQgKAOAAARIgbAAIAAhLIAcAAIAAAWQAQgTATABQAUAAAMANQAMAOAAAXQAAAkgWARQgWASgtgBg");
	this.shape_12.setTransform(38.8,-4.9,3.582,3.582);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#494949").s().p("AhAAZQAAgXAVgOIgIgrIgCgKIAxgIIACAKIADAbQAYgIAVgFIAKgCIAJAtIgKACQgmAHgRAJQgHAFgEAEIgDADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQACACAKAAQAXAAAagEIALgCIAFAuIgJABQgbAFgdAAQhAAAAAgxgAgegxIAJAtIgFAEQgSALAAAOQAAAMAGAGQAKALAcAAQATAAAYgDIgBgGQgVADgVAAQgPAAgIgFQgLgGAAgOQAAgOAagMQARgKAggIIgBgGQgWAFgTAIIgLAFIgIgpg");
	this.shape_13.setTransform(-5.4,-5.9,3.582,3.582);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494949").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQAQgIAkgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgZAEgdAAQg1AAAAgng");
	this.shape_14.setTransform(-5.6,-5.7,3.582,3.582);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#494949").s().p("Ag0AYIAAgvIBpAAIAAAvgAggAEIBBAAIAAgHIhBAAg");
	this.shape_15.setTransform(-43.4,-5.3,3.582,3.582);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#494949").s().p("AgqAOIAAgbIBVAAIAAAbg");
	this.shape_16.setTransform(-43.4,-5.3,3.582,3.582);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#494949").s().p("AggAmIgdAAIAAhaIAqAAIAAAIIAFgCIAAgRIApAAIAAAMQAjAIAAAlQAAAUgMAMQgLALgSACQgDAIgGAFQgKAHgJADIgIACgAAEAWIABAAIgGALQgDADgEACIABADIAHgFQADgEACgGIACgGIAAg1IANAEQATAFAAASQAAASgTAFIgNADIAHAAQAPgCAHgGQAGgGAAgMQAAgMgGgHQgGgGgOgBIgJgBIAAgLIgDAAgAgMAOIAPAHIgOgJgAgpASIACAAQABgNAGgJIAGgIIgNAAIAAgUIgCAAgAgBgeQgIACgHAHIAIgFIALgHg");
	this.shape_17.setTransform(-82.2,-0.8,3.582,3.582);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#494949").s().p("AgWAjQAJgDAEgFQgJgEgIgGIAMgRIAKAGIAAgWQgMAGgHAKQgHANAAAQIgVAAIAAhGIAWAAIAAAUQAKgNAPgFIAAgOIAVAAIAAAMQAjAEAAAgQAAAQgJAJQgKAKgTABQgDAJgGAFQgFAFgLADgAARAIQAMgDAAgKQAAgKgMgDg");
	this.shape_18.setTransform(-82.2,-1.1,3.582,3.582);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#494949").s().p("AgrBHIgKgCIAIgrIgTgIIAGgJIAJgWIgVAAIAAgsIAgAAIACgRIAsADIgBAOIBAAAIAAAsIgdAAIAHAFQAPALAAAWQAAAXgVAOQgRANgcAAQgUAAgVgEgAgdA1QAMACAPAAQAWAAAMgJQALgIAAgNQAAgMgIgJQgOgJgeAFIgFABIgIgGIAIgcIBBAAIAAgEIhBAAIACgPIgHgBIgCAQIgdAAIAAAEIAdAAIgFANQgEAOgGAOIAKADQAKgFAFgCQAKgDAJAAQARAAAGAJQAEAFAAAIQAAANgNAJQgQAKgigHgAgEAXIgOAHQAVADAJgFQADgDAAgCIgBgBIgGgBQgHAAgFACg");
	this.shape_19.setTransform(-127.1,-6.3,3.582,3.582);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#494949").s().p("AgoA8IAEgYQATAFAPAAQAMAAAHgFQAIgFAAgIQAAgMgRAAQgIAAgIACQgGACgLAHIgYgKQAKgUAEgPIgZAAIAAgYIAeAAIADgRIAbACIgCAPIA/AAIAAAYIhEAAIgFAPIAAAAQAMgDAKAAQAVAAALAKQAMAIgBARQAAASgPAMQgQALgYAAQgTAAgTgFg");
	this.shape_20.setTransform(-127.1,-6.2,3.582,3.582);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#494949").s().p("Ag2AhIABgGIgSgjIAjgTIgWAAIAAgsIB2AAIAAApIgPAHQAIAEAEAEQAPANAAASQAAAbgUAPQgSAOghAAQg3AAAAgngAgbAXQgHAFAAAFQAAATAjAAIAMgBIACgSIAAgDQAAgGgEgCQgDgCgIgCIAEACQAIAEAAAJQAAAFgCAFIgCAHIgIAAQgcAAAAgRQAAgKAJgDQgEAAgEADgAANgHQAMACAHAEQALAGAAANQAAAQgNAJIgLAHQANgCAIgGQAMgJAAgRQAAgKgIgGQgIgHgQAAgAgmgvIAvAAIAAAQIg2AfIACABQANgDAJgCQAJgCAMgBIAAgPIAogVIAAgIIhOAAg");
	this.shape_21.setTransform(128.2,-1,3.582,3.582);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#494949").s().p("AguAhQAAgKALgIQALgHAQAAQAPAAAIAFQAIAGAAALIAAAEQAJgGAAgKQAAgIgIgEQgGgFgNAAQgNAAgNADQgOADgPAHIgJgSIA6ghIgxAAIAAgYIBjAAIAAAYIgpAVIAKgBQATAAAMAKQALAHAAAQQABAWgRAMQgPAMgdAAQguAAAAgdgAgUAhQAAAHAUAAIAAgHQAAgDgBgBQgBgCgIAAQgKAAAAAGg");
	this.shape_22.setTransform(128.9,-1,3.582,3.582);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#494949").s().p("AAHA4QgQANgVAAQgTAAgLgMQgNgKAAgUQAAgSAMgOQAGgHALgHIgWAAIAAgrIAdAAIAAgPIArAAIAAAPIA8AAIAAArIgMAAIACABQASAPAAAWQAAAWgPAPQgNAQgYAEIgJACgAApABQAGAIAAAKQAAANgKAIQgFAGgGACIABAGQAMgEAGgHQAJgJAAgPQAAgOgKgIQgNgJgWAAIgVACIAAgeIA7AAIAAgCIg7AAIAAgPIgFAAIAAAPIgdAAIAAACIAdAAIAAAfIgGACQgQAGgHAHQgHAKAAALQAAAKAGAGQAFAGAMgBQAKABAIgEIAAgzIAkgCIgFAMQgIAPgHAIIgOARQAHgDADgEIABgBIAAgBIACAAQAMgLAJgUIAGgMgAgbAtQgJAAgFgHQgFgFAAgJQAAgMANgLIAQgJIAAA1g");
	this.shape_23.setTransform(83.2,-1.5,3.582,3.582);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#494949").s().p("AANArQAKgCAHgGQAHgHAAgIQAAgHgEgEQgKAYgSANQgPANgUAAQgPABgJgJQgJgIAAgPQAAgQAKgLQAIgKASgGIAAgOIgdAAIAAgWIAdAAIAAgPIAZAAIAAAPIA6AAIAAAWIg6AAIAAAIIALAAQAbAAANAMQAPAJAAAUQAAASgLAMQgNAOgUADgAgkAZQAAAEADAEQACACAEABIAAgaQgJAIAAAHgAgCACIAAATQAFgIAHgMIgBAAg");
	this.shape_24.setTransform(83.2,-1.8,3.582,3.582);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#494949").s().p("AgtBJIgDguIALAAQAZAAAJgEQAJgDAEgHQAEgHAAgOQAAgOgGABQgIAAgHAJQgJALAAAOIAAAKIgvAAIAAhfIAwAAIAAALQAMgIANABQAYgBAPASQAPAQAAAbQAAApgaAUQgYAUgxAAgAAYgkQAKAIAAAUQAAATgHAMQgJAOgQAFQgKAEgSABIAAAFQAjgBARgNQASgOAAggQAAgSgJgNQgKgKgPABQgOgBgNAQIgEADIgOAAIAAgVIgIAAIAAA2IAIAAQACgPAJgMQAOgRASAAQAJgBAHAGg");
	this.shape_25.setTransform(38.8,-1.3,3.582,3.582);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#494949").s().p("AglAlQAYAAANgFQANgEAFgJQAGgLAAgQQAAgXgQAAQgNAAgLANQgKAOAAARIgbAAIAAhLIAcAAIAAAWQAQgTATABQAUAAAMANQAMAOAAAXQAAAkgWASQgWAQgtAAg");
	this.shape_26.setTransform(38.8,-1.3,3.582,3.582);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#494949").s().p("AhAAZQAAgXAVgOIgIgrIgCgKIAxgIIACAKIADAbQAYgIAVgFIAKgCIAJAtIgKACQgmAHgRAJQgHAFgEAEIgDADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQACACAKAAQAXAAAagEIALgCIAFAuIgJABQgbAFgdAAQhAAAAAgxgAgegxIAJAtIgFAEQgSALAAAOQAAAMAGAGQAKALAcAAQATAAAYgDIgBgGQgVADgVAAQgPAAgIgFQgLgGAAgOQAAgOAagMQARgKAggIIgBgGQgWAFgTAIIgLAFIgIgpg");
	this.shape_27.setTransform(-5.4,-2.3,3.582,3.582);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#494949").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQAQgIAkgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgZAEgdAAQg1AAAAgng");
	this.shape_28.setTransform(-5.6,-2.1,3.582,3.582);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#494949").s().p("Ag0AYIAAgvIBpAAIAAAvgAggAEIBBAAIAAgHIhBAAg");
	this.shape_29.setTransform(-43.4,-1.7,3.582,3.582);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#494949").s().p("AgqAOIAAgbIBVAAIAAAbg");
	this.shape_30.setTransform(-43.4,-1.7,3.582,3.582);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#494949").s().p("AggAnIgdAAIAAhbIAqAAIAAAIIAFgCIAAgSIApAAIAAANQAjAIAAAlQAAAUgMAMQgLALgSACQgDAIgGAFQgKAHgJADIgIACgAAEAWIABAAIgGALQgDADgEADIABACIAHgFQADgDACgHIACgGIAAg1IANAEQATAFAAASQAAASgTAEIgNAEIAHAAQAPgBAHgHQAGgGAAgMQAAgNgGgGQgGgGgOgBIgJgBIAAgLIgDAAgAgMAOIAPAHIgOgJgAgpASIACAAQABgNAGgJIAGgIIgNAAIAAgTIgCAAg");
	this.shape_31.setTransform(-82.2,2.8,3.582,3.582);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#494949").s().p("AgWAjQAJgCAEgGQgJgDgIgIIAMgQIAKAGIAAgWQgMAFgHALQgHANAAAQIgVAAIAAhGIAWAAIAAAUQAKgNAPgFIAAgOIAVAAIAAAMQAjADAAAhQAAAQgJAJQgKAKgTABQgDAJgGAEQgFAGgLADgAARAIQAMgDAAgKQAAgKgMgDg");
	this.shape_32.setTransform(-82.2,2.5,3.582,3.582);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#494949").s().p("AgrBHIgKgCIAIgrIgTgIIAGgKIAJgVIgVAAIAAgsIAgAAIACgRIAsADIgBAOIBAAAIAAAsIgdAAIAHAFQAPAKAAAXQAAAXgVAOQgRANgcAAQgUAAgVgEgAgdA1QAMACAPAAQAWAAAMgJQALgIAAgNQAAgNgIgHQgOgKgeAFIgFABIgIgGIAIgcIBBAAIAAgEIhBAAIACgQIgHAAIgCAQIgdAAIAAAEIAdAAIgFANQgEAOgGAOIAKADQAKgFAFgCQAKgDAJAAQARAAAGAJQAEAGAAAHQAAANgNAJQgQAKgigHgAgEAXIgOAHQAVADAJgFQADgDAAgCIgBgBIgGgBQgHAAgFACg");
	this.shape_33.setTransform(-127.1,-2.7,3.582,3.582);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#494949").s().p("AgoA8IAEgYQATAFAPAAQAMAAAHgFQAIgFAAgIQAAgMgRAAQgIAAgIACQgGACgLAHIgYgKQAKgUAEgPIgZAAIAAgYIAeAAIADgRIAbACIgCAPIA/AAIAAAYIhEAAIgFAPIAAAAQAMgDAKAAQAVAAALAKQAMAIgBARQAAASgPAMQgQALgYAAQgTAAgTgFg");
	this.shape_34.setTransform(-127.1,-2.6,3.582,3.582);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34,p:{y:-2.6}},{t:this.shape_33,p:{y:-2.7}},{t:this.shape_32,p:{y:2.5}},{t:this.shape_31,p:{y:2.8}},{t:this.shape_30,p:{y:-1.7}},{t:this.shape_29,p:{y:-1.7}},{t:this.shape_28,p:{y:-2.1}},{t:this.shape_27,p:{y:-2.3}},{t:this.shape_26,p:{y:-1.3}},{t:this.shape_25,p:{y:-1.3}},{t:this.shape_24,p:{y:-1.8}},{t:this.shape_23,p:{y:-1.5}},{t:this.shape_22,p:{y:-1}},{t:this.shape_21,p:{y:-1}},{t:this.shape_20,p:{y:-6.2}},{t:this.shape_19,p:{y:-6.3}},{t:this.shape_18,p:{y:-1.1}},{t:this.shape_17,p:{y:-0.8}},{t:this.shape_16,p:{y:-5.3}},{t:this.shape_15,p:{y:-5.3}},{t:this.shape_14,p:{y:-5.7}},{t:this.shape_13,p:{y:-5.9}},{t:this.shape_12,p:{y:-4.9}},{t:this.shape_11,p:{y:-4.9}},{t:this.shape_10,p:{y:-5.4}},{t:this.shape_9,p:{y:-5.1}},{t:this.shape_8,p:{y:-4.6}},{t:this.shape_7,p:{y:-4.6}},{t:this.shape_6,p:{y:-6.2}},{t:this.shape_5,p:{y:-1.1}},{t:this.shape_4,p:{y:-5.3}},{t:this.shape_3,p:{y:-5.7}},{t:this.shape_2,p:{y:-4.9}},{t:this.shape_1,p:{y:-5.4}},{t:this.shape,p:{y:-4.6}}]}).to({state:[{t:this.shape_34,p:{y:4.1}},{t:this.shape_33,p:{y:4}},{t:this.shape_32,p:{y:9.2}},{t:this.shape_31,p:{y:9.6}},{t:this.shape_30,p:{y:5}},{t:this.shape_29,p:{y:5}},{t:this.shape_28,p:{y:4.7}},{t:this.shape_27,p:{y:4.5}},{t:this.shape_26,p:{y:5.5}},{t:this.shape_25,p:{y:5.5}},{t:this.shape_24,p:{y:4.9}},{t:this.shape_23,p:{y:5.3}},{t:this.shape_22,p:{y:5.7}},{t:this.shape_21,p:{y:5.7}},{t:this.shape_20,p:{y:0.5}},{t:this.shape_19,p:{y:0.4}},{t:this.shape_18,p:{y:5.6}},{t:this.shape_17,p:{y:6}},{t:this.shape_16,p:{y:1.4}},{t:this.shape_15,p:{y:1.4}},{t:this.shape_14,p:{y:1.1}},{t:this.shape_13,p:{y:0.9}},{t:this.shape_12,p:{y:1.9}},{t:this.shape_11,p:{y:1.9}},{t:this.shape_10,p:{y:1.3}},{t:this.shape_9,p:{y:1.7}},{t:this.shape_8,p:{y:2.1}},{t:this.shape_7,p:{y:2.1}},{t:this.shape_6,p:{y:0.5}},{t:this.shape_5,p:{y:5.6}},{t:this.shape_4,p:{y:1.4}},{t:this.shape_3,p:{y:1.1}},{t:this.shape_2,p:{y:1.9}},{t:this.shape_1,p:{y:1.3}},{t:this.shape,p:{y:2.1}}]},1).wait(3));

	// レイヤー 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8BEBB3").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_35.setTransform(-0.1,2.9,3.839,3.838);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AkgBRQghAAgYgYQgYgYAAghQAAggAYgYQAYgYAhAAIJBAAQAiAAAXAYQAYAYAAAgQAAAhgYAYQgYAYghAAgAlLgqQgSASAAAYQAAAZASASQASASAZAAIJBAAQAZAAASgSQASgSAAgZQAAgYgSgSQgSgSgZAAIpBAAQgZAAgSASg");
	this.shape_36.setTransform(-0.1,2.9,3.839,3.838);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_37.setTransform(-0.1,2.9,3.839,3.838);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#145728").s().p("AkgBlQgqAAgdgeQgegeAAgpQAAgpAegdQAdgeAqAAIJBAAQAqAAAeAeQAdAdAAApQAAApgdAeQgeAegqAAgAk9gcQgMAMAAAQQAAARAMAMQAMAMARAAIJBAAQARAAAMgMQAMgMAAgRQAAgQgMgMQgMgMgRAAIpBAAQgRAAgMAMg");
	this.shape_38.setTransform(-0.1,2.9,3.839,3.838);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#145728").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_39.setTransform(-0.1,2.9,3.839,3.838);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0E3119").s().p("AkgBlQgqAAgdgeQgegeAAgpQAAgpAegdQAdgeAqAAIJBAAQAqAAAeAeQAdAdAAApQAAApgdAeQgeAegqAAgAk9gcQgMAMAAAQQAAARAMAMQAMAMARAAIJBAAQARAAAMgMQAMgMAAgRQAAgQgMgMQgMgMgRAAIpBAAQgRAAgMAMg");
	this.shape_40.setTransform(-0.1,2.9,3.839,3.838);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0E3119").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_41.setTransform(-0.1,2.9,3.839,3.838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(3));

	// レイヤー 2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#30A95D").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_42.setTransform(0,-3.5,3.841,3.883);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AkfBRQgiAAgYgYQgYgYAAghQAAggAYgYQAYgYAiAAII/AAQAjAAAXAYQAYAYAAAgQAAAhgYAYQgYAYgiAAgAlLgqQgSASAAAYQAAAZASASQASASAaAAII/AAQAaAAASgSQASgSAAgZQAAgYgSgSQgSgSgaAAIo/AAQgaAAgSASg");
	this.shape_43.setTransform(0,-3.5,3.841,3.883);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_44.setTransform(0,-3.5,3.841,3.883);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#145728").s().p("AkfBlQgqAAgegeQgegeAAgpQAAgpAegdQAegeAqAAII/AAQArAAAeAeQAdAdAAApQAAApgdAeQgeAegrAAgAk8gcQgNAMAAAQQAAAQANANQALAMASAAII/AAQARAAANgMQAMgMAAgRQAAgQgMgMQgMgMgSAAIo/AAQgSAAgLAMg");
	this.shape_45.setTransform(0,-3.5,3.841,3.883);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#145728").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_46.setTransform(0,-3.5,3.841,3.883);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0E3119").s().p("AkfBlQgqAAgegeQgegeAAgpQAAgpAegdQAegeAqAAII/AAQArAAAeAeQAdAdAAApQAAApgdAeQgeAegrAAgAk8gcQgNAMAAAQQAAARANAMQALAMASAAII/AAQASAAAMgMQAMgMAAgRQAAgQgMgMQgMgMgSAAIo/AAQgSAAgLAMg");
	this.shape_47.setTransform(0,3.6,3.841,3.883);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0E3119").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_48.setTransform(0,3.6,3.841,3.883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.7,-43,307,86);


(lib.btn_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA2IAAgYIAcAAIAAAYgAgMASIgFhHIAiAAIgEBHg");
	this.shape.setTransform(94.1,-6.6,3.583,3.582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQAQgIAkgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgZAEgdAAQg1AAAAgng");
	this.shape_1.setTransform(56.9,-6.6,3.583,3.582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAhQAJgCAEgEQAFgFAAgFQAAgEgCgFQgJASgNAMQgMAKgQgBQgMAAgHgGQgHgHAAgMQAAgNAHgJQAHgHAPgGIAAgKIgXAAIAAgTIAXAAIAAgKIAVAAIAAAKIAtAAIAAATIgtAAIAAAGIAGgBQAWAAAMAKQALAIAAARQAAAOgKAJQgJAKgQAEgAgbAUQAAAHAGAAIAAgRQgGAFAAAFgAAAACIAAALIAGgMIgGABg");
	this.shape_2.setTransform(13.8,-2.1,3.583,3.582);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/A8QAOgrAIgpIgSAAIAAgYIAXAAIADgRIAbACIgCAPIAwAAIAAAYIg1AAQgIArgPAvgAAAA4QgNgJgBgNQAAgKAOgMIATAIIgGAIIgCADQABAEAFADQAFABALAAQANAAAPgCIADAXQgRAEgOAAQgXgBgKgHgAgBgPQAfgEAeAAIAAAWQgeAAgeADg");
	this.shape_3.setTransform(-31.1,-7.3,3.583,3.582);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAqQARgBAMgCQAFgCACgFIAAgBIABAAIgBgBQgGADgIAAQgPAAgJgIQgIgIgBgOQABgLAIgIQALgJAPAAQAEAAAFACIAAAAIAAgGIhBAAIAAgXIBBAAIAAgNIAaAAIAAANIAoAAIAAAXIgoAAIAAAbQAGAHAAAMQgBAYgOALQgOAMggACgAgOgBQgEABAAADQAAAFAEACQACACAFAAQAFAAACgCQACgDAAgEQAAgDgCgBQgDgDgEAAQgEAAgDADg");
	this.shape_4.setTransform(-77.7,-7.2,3.583,3.582);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#494949").s().p("AgYBAIAAgsIACAAIgFhTIA3AAIgFBTIABAAIAAAsgAgDAsIAIAAIAAgEIgIAAgAgCAIIAGAAIADgzIgNAAg");
	this.shape_5.setTransform(94.1,-6.6,3.583,3.582);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494949").s().p("AgNA2IAAgYIAcAAIAAAYgAgMASIgFhHIAiAAIgEBHg");
	this.shape_6.setTransform(94.1,-6.6,3.583,3.582);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494949").s().p("AhAAZQAAgXAVgOIgIgrIgCgKIAxgIIACAKIADAbQAYgIAVgFIAKgCIAJAtIgKACQglAGgSAKQgHAFgEAEIgDADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQACACAKAAQAXAAAagEIALgCIAFAuIgJABQgbAFgdAAQhAAAAAgxgAgegxIAJAtIgFAEQgSALAAAOQAAAMAGAGQAKALAcAAQATAAAYgDIgBgGQgVADgVAAQgPAAgIgFQgLgGAAgOQAAgOAagMQARgKAggIIgBgGQgXAFgSAIIgLAFIgIgpg");
	this.shape_7.setTransform(57.1,-6.8,3.583,3.582);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494949").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQAQgIAkgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgZAEgdAAQg1AAAAgng");
	this.shape_8.setTransform(56.9,-6.6,3.583,3.582);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#494949").s().p("AAFAwQgMAIgRAAQgQAAgKgJQgKgKAAgQQAAgPAJgLIAIgJIgLAAIAAgnIAXAAIAAgKIAnAAIAAAKIAvAAIAAAnIgFAAQALANAAARQAAARgMANQgNANgSAEIgJACgAAiACQAEAFAAAJQAAAJgIAIQgEAEgDABIAAACQAIgDADgFQAHgGAAgKQAAgNgIgFIgDgCgAgjAFQgFAGAAAKQAAAJAEACQAEAFAIAAIAHgBIgEAAQgHAAgEgEQgFgEAAgJQAAgKAJgIIAIgGQgLAFgEAFgAgLAjIABgBIAAgoIAJgBIAHgBIALAAIgLgBIgQABIAAgjIgBAAg");
	this.shape_9.setTransform(13.8,-1.7,3.583,3.582);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#494949").s().p("AAKAhQAJgCAEgEQAFgFAAgFQAAgEgCgFQgJASgNAMQgMAKgQgBQgMAAgHgGQgHgHAAgMQAAgNAHgJQAHgHAPgGIAAgKIgXAAIAAgTIAXAAIAAgKIAVAAIAAAKIAtAAIAAATIgtAAIAAAGIAGgBQAWAAAMAKQALAIAAARQAAAOgKAJQgJAKgQAEgAgbAUQAAAHAGAAIAAgRQgGAFAAAFgAAAACIAAALIAGgMIgGABg");
	this.shape_10.setTransform(13.8,-2.1,3.583,3.582);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494949").s().p("AhLBDIAEgLQAMgpAIgeIgRAAIAAgsIAZAAIACgRIAtAEIgCANIAxAAIAAAfIAUgBIAAAqIgoAAIAHADIgKALIgCABIAIABQAOAAAMgDIALgBIAFAsIgJABQgRADgQAAQgaAAgNgKQgKgGgFgJIgJAdgAgwgjIAVAAIgDAMQgIAngLAkIAHABQAMgjAIgtIACgIIAzAAIAAgEIgyAAIADgPIgIAAIgCAPIgWAAgAgDAiQAAAIAHAEQAJAHAVAAIAUgBIAAgEQgbADgNgFQgMgFAAgKIACgHIgDgBQgEAHAAAEgAAJgHIAAAEIAqgDIAAgDQgXAAgTACg");
	this.shape_11.setTransform(-31.5,-7.1,3.583,3.582);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#494949").s().p("Ag/A8QAOgrAIgpIgSAAIAAgYIAXAAIADgRIAbACIgCAPIAwAAIAAAYIg1AAQgIArgPAvgAAAA4QgNgJgBgNQAAgKAOgMIATAIIgGAIIgCADQABAEAFADQAFABALAAQANAAAPgCIADAXQgRAEgOAAQgXgBgKgHgAgBgPQAfgEAeAAIAAAWQgeAAgeADg");
	this.shape_12.setTransform(-31.1,-7.3,3.583,3.582);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#494949").s().p("AgtAhIAFAAIgBgBQgNgLAAgSQABgNAHgKIgdAAIAAgqIBCAAIAAgOIAuAAIAAAOIAnAAIAAAqIgnAAIAAAPQAEAIAAANQAAAdgRAOQgSAOgiADIgJABgAAOAaIAAAGIgCAFQgGAIgIADIgTADIABAEQAXgEAIgHQALgJAAgTQAAgJgFgHIgBAAIAAgoIAoAAIAAgCIgoAAIAAgOIgGAAIAAAOIhBAAIAAACIBBAAIAAAXIgJAEIgBAAQACABADADQAHAGAAAGQAAAJgHAFIgFADIAFgCgAgcgJQgFAFAAAHQAAAJAFAFQAGAGALAAIAJgCQgLADgIgHQgGgGgBgIQABgGAGgGQAGgFAJAAIADAAIgGgBQgMAAgHAGg");
	this.shape_13.setTransform(-77.7,-7,3.583,3.582);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494949").s().p("AghAqQARgBAMgCQAFgCACgFIAAgBIABAAIgBgBQgGADgIAAQgPAAgJgIQgIgIgBgOQABgLAIgIQALgJAPAAQAEAAAFACIAAAAIAAgGIhBAAIAAgXIBBAAIAAgNIAaAAIAAANIAoAAIAAAXIgoAAIAAAbQAGAHAAAMQgBAYgOALQgOAMggACgAgOgBQgEABAAADQAAAFAEACQACACAFAAQAFAAACgCQACgDAAgEQAAgDgCgBQgDgDgEAAQgEAAgDADg");
	this.shape_14.setTransform(-77.7,-7.2,3.583,3.582);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#494949").s().p("AgYBAIAAgsIACAAIgFhTIA3AAIgFBTIABAAIAAAsgAgDAsIAIAAIAAgEIgIAAgAgCAIIAGAAIADgzIgNAAg");
	this.shape_15.setTransform(94.1,-3.1,3.583,3.582);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#494949").s().p("AgNA2IAAgYIAcAAIAAAYgAgMASIgFhHIAiAAIgEBHg");
	this.shape_16.setTransform(94.1,-3.1,3.583,3.582);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#494949").s().p("AhAAZQAAgXAVgOIgIgrIgCgKIAxgIIACAKIADAbQAYgIAVgFIAKgCIAJAtIgKACQglAGgSAKQgHAFgEAEIgDADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQACACAKAAQAXAAAagEIALgCIAFAuIgJABQgbAFgdAAQhAAAAAgxgAgegxIAJAtIgFAEQgSALAAAOQAAAMAGAGQAKALAcAAQATAAAYgDIgBgGQgVADgVAAQgPAAgIgFQgLgGAAgOQAAgOAagMQARgKAggIIgBgGQgXAFgSAIIgLAFIgIgpg");
	this.shape_17.setTransform(57.1,-3.2,3.583,3.582);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#494949").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQAQgIAkgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgZAEgdAAQg1AAAAgng");
	this.shape_18.setTransform(56.9,-3.1,3.583,3.582);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#494949").s().p("AAFAwQgMAIgRAAQgQAAgKgJQgKgKAAgQQAAgQAJgLIAIgIIgLAAIAAgnIAXAAIAAgKIAnAAIAAAKIAvAAIAAAnIgFAAQALANAAARQAAARgMANQgNANgSAEIgJABgAAiACQAEAFAAAJQAAAJgIAIQgEAEgDABIAAACQAIgDADgEQAHgHAAgKQAAgNgIgEIgDgDgAgjAFQgFAHAAAJQAAAIAEAEQAEAEAIgBIAHAAIgEAAQgHAAgEgEQgFgFAAgIQAAgKAJgIIAIgGQgLAFgEAFgAgLAjIABgBIAAgpIAJAAIAHgBIALAAIgLgBIgQABIAAgjIgBAAg");
	this.shape_19.setTransform(13.8,1.9,3.583,3.582);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#494949").s().p("AAKAhQAJgCAEgEQAFgFAAgFQAAgEgCgFQgJATgNAKQgMALgQgBQgMAAgHgGQgHgHAAgMQAAgMAHgKQAHgHAPgGIAAgKIgXAAIAAgTIAXAAIAAgKIAVAAIAAAKIAtAAIAAATIgtAAIAAAGIAGgBQAWAAAMAKQALAIAAARQAAAOgKAJQgJALgQADgAgbAUQAAAHAGAAIAAgRQgGAFAAAFgAAAABIAAAMIAGgMIgGAAg");
	this.shape_20.setTransform(13.8,1.5,3.583,3.582);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#494949").s().p("AhLBDIAEgKQAMgqAIgeIgRAAIAAgsIAZAAIACgRIAtAEIgCANIAxAAIAAAfIAUgBIAAAqIgoAAIAHADIgKALIgCABIAIABQAOAAAMgDIALgBIAFAsIgJABQgRADgQAAQgaAAgNgKQgKgGgFgJIgJAdgAgwgjIAVAAIgDAMQgIAngLAkIAHABQAMgjAIgtIACgIIAzAAIAAgEIgyAAIADgPIgIgBIgCAQIgWAAgAgDAiQAAAHAHAFQAJAHAVAAIAUgBIAAgEQgcADgMgFQgMgFAAgKIACgHIgDgBQgEAGAAAFgAAJgHIAAAEIAqgDIAAgDQgXAAgTACg");
	this.shape_21.setTransform(-31.5,-3.5,3.583,3.582);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#494949").s().p("Ag/A8QAOgrAIgpIgSAAIAAgZIAXAAIADgQIAbADIgCANIAwAAIAAAZIg1AAQgIAqgPAwgAAAA4QgNgJgBgMQAAgMAOgLIATAIIgGAIIgCADQABAFAFACQAFABALAAQANAAAPgCIADAXQgRAEgOAAQgXgBgKgHgAgBgPQAfgDAegBIAAAWQgeAAgeADg");
	this.shape_22.setTransform(-31.1,-3.7,3.583,3.582);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#494949").s().p("AgtAhIAFAAIgBgBQgNgLAAgSQABgNAHgKIgdAAIAAgqIBCAAIAAgOIAuAAIAAAOIAnAAIAAAqIgnAAIAAAPQAEAIAAANQAAAdgRAOQgSAOgiADIgJABgAAOAaIAAAGIgCAFQgGAIgIADIgTADIABAEQAXgEAIgHQALgJAAgTQAAgJgFgHIgBAAIAAgoIAoAAIAAgCIgoAAIAAgOIgGAAIAAAOIhBAAIAAACIBBAAIAAAXIgJAEIgBAAQACABADADQAHAGAAAGQAAAJgHAFIgFADIAFgCgAgcgJQgFAFAAAHQAAAJAFAFQAGAGALAAQAHAAAEgCQgLAEgKgIQgGgGgBgIQABgGAGgGQAGgFAJAAIADAAIgGgBQgMAAgHAGg");
	this.shape_23.setTransform(-77.7,-3.4,3.583,3.582);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#494949").s().p("AghAqQARgBAMgCQAFgCACgFIAAgBIABAAIgBgBQgGADgIAAQgPAAgJgIQgIgIgBgOQABgLAIgIQALgJAPAAQAEAAAFACIAAAAIAAgGIhBAAIAAgXIBBAAIAAgNIAaAAIAAANIAoAAIAAAXIgoAAIAAAbQAGAHAAAMQgBAYgOALQgOAMggACgAgOgBQgEABAAADQAAAFAEACQACACAFAAQAFAAACgCQACgDAAgEQAAgDgCgBQgDgDgEAAQgEAAgDADg");
	this.shape_24.setTransform(-77.7,-3.6,3.583,3.582);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24,p:{y:-3.6}},{t:this.shape_23,p:{y:-3.4}},{t:this.shape_22,p:{y:-3.7}},{t:this.shape_21,p:{y:-3.5}},{t:this.shape_20,p:{y:1.5}},{t:this.shape_19,p:{y:1.9}},{t:this.shape_18,p:{y:-3.1}},{t:this.shape_17,p:{y:-3.2}},{t:this.shape_16,p:{y:-3.1}},{t:this.shape_15,p:{y:-3.1}},{t:this.shape_14,p:{y:-7.2}},{t:this.shape_13,p:{y:-7}},{t:this.shape_12,p:{y:-7.3}},{t:this.shape_11,p:{y:-7.1}},{t:this.shape_10,p:{y:-2.1}},{t:this.shape_9,p:{y:-1.7}},{t:this.shape_8,p:{y:-6.6}},{t:this.shape_7,p:{y:-6.8}},{t:this.shape_6,p:{y:-6.6}},{t:this.shape_5,p:{y:-6.6}},{t:this.shape_4,p:{y:-7.2}},{t:this.shape_3,p:{y:-7.3}},{t:this.shape_2,p:{y:-2.1}},{t:this.shape_1,p:{y:-6.6}},{t:this.shape,p:{y:-6.6}}]}).to({state:[{t:this.shape_24,p:{y:3.2}},{t:this.shape_23,p:{y:3.3}},{t:this.shape_22,p:{y:3.1}},{t:this.shape_21,p:{y:3.2}},{t:this.shape_20,p:{y:8.3}},{t:this.shape_19,p:{y:8.6}},{t:this.shape_18,p:{y:3.7}},{t:this.shape_17,p:{y:3.5}},{t:this.shape_16,p:{y:3.7}},{t:this.shape_15,p:{y:3.7}},{t:this.shape_14,p:{y:-0.4}},{t:this.shape_13,p:{y:-0.2}},{t:this.shape_12,p:{y:-0.5}},{t:this.shape_11,p:{y:-0.3}},{t:this.shape_10,p:{y:4.7}},{t:this.shape_9,p:{y:5}},{t:this.shape_8,p:{y:0.1}},{t:this.shape_7,p:{y:-0.1}},{t:this.shape_6,p:{y:0.1}},{t:this.shape_5,p:{y:0.1}},{t:this.shape_4,p:{y:-0.4}},{t:this.shape_3,p:{y:-0.5}},{t:this.shape_2,p:{y:4.7}},{t:this.shape_1,p:{y:0.1}},{t:this.shape,p:{y:0.1}}]},1).wait(3));

	// レイヤー 2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93DFFC").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_25.setTransform(-0.1,2.8,3.839,3.84);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkgBRQghAAgYgYQgYgYAAghQAAggAYgYQAYgYAhAAIJBAAQAhAAAYAYQAYAYAAAgQAAAhgYAYQgXAYgiAAgAlLgqQgSATAAAXQAAAZASASQASASAZAAIJBAAQAZAAASgSQASgSAAgZQAAgXgSgTQgSgSgZAAIpBAAQgZAAgSASg");
	this.shape_26.setTransform(-0.1,2.8,3.839,3.84);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_27.setTransform(-0.1,2.8,3.839,3.84);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1955A5").s().p("AkgBlQgqAAgdgdQgegeAAgqQAAgoAegeQAdgeAqAAIJBAAQAqAAAeAeQAdAeAAAoQAAAqgdAeQgeAdgqAAgAk9gcQgMANAAAPQAAARAMAMQAMAMARAAIJBAAQARAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgRAAIpBAAQgRAAgMAMg");
	this.shape_28.setTransform(-0.1,2.8,3.839,3.84);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#143B63").s().p("AkgBlQgqAAgdgdQgegeAAgqQAAgoAegeQAdgeAqAAIJBAAQAqAAAeAeQAdAeAAAoQAAAqgdAeQgeAdgqAAgAk9gcQgMANAAAPQAAARAMAMQAMAMARAAIJBAAQARAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgRAAIpBAAQgRAAgMAMg");
	this.shape_29.setTransform(-0.1,2.8,3.839,3.84);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1955A5").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_30.setTransform(-0.1,2.8,3.839,3.84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).wait(3));

	// レイヤー 2
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2D9BDD").s().p("AkfBHQgeAAgVgVQgVgWAAgcQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAUAAAdQAAAcgVAWQgVAVgeAAg");
	this.shape_31.setTransform(0,-3.9,3.841,3.857);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkfBRQgiAAgYgYQgYgYAAghQAAggAYgYQAYgYAiAAII/AAQAiAAAYAYQAYAYAAAgQAAAhgYAYQgYAYgiAAgAlLgqQgSASAAAYQAAAZASASQASASAaAAII/AAQAaAAASgSQASgSAAgZQAAgYgSgSQgSgSgaAAIo/AAQgaAAgSASg");
	this.shape_32.setTransform(0,-3.9,3.841,3.857);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AkfBHQgeAAgVgVQgVgWAAgcQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAUAAAdQAAAcgVAWQgVAVgeAAg");
	this.shape_33.setTransform(0,-3.9,3.841,3.857);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1955A5").s().p("AkfBlQgqAAgegeQgegeAAgpQAAgpAegdQAegeAqAAII/AAQArAAAeAeQAdAdAAApQAAApgdAeQgeAegrAAgAk8gcQgNAMAAAQQAAAQANANQALAMASAAII/AAQARAAANgMQAMgMAAgRQAAgQgMgMQgNgMgRAAIo/AAQgSAAgLAMg");
	this.shape_34.setTransform(0,-3.9,3.841,3.857);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#143B63").s().p("AkfBlQgqAAgegeQgegeAAgpQAAgpAegeQAegdAqAAII/AAQArAAAeAdQAdAeAAApQAAApgdAeQgeAegrAAgAk8gcQgNAMAAAQQAAAQANAMQALANASAAII/AAQARAAANgNQAMgLAAgRQAAgQgMgMQgMgMgSAAIo/AAQgSAAgLAMg");
	this.shape_35.setTransform(0,3.9,3.841,3.857);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1955A5").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAUAAAdQAAAdgVAVQgVAVgeAAg");
	this.shape_36.setTransform(0,0,3.841,3.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-43,300,86);


(lib.btn_helpStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AgMgHIglAuIghgfIAZgdIARgVQAHgHAGgCQAGgDAJAAQAIAAAFADQAHADAGAGIBFA+IgeAjgAgHgNIA8A4IATgWIg/g5QgHgGgCgCQgFgBgHAAQgIAAgEABQgFADgFAFQgIAIgJAMIgUAXIAVATIAYgdIAJgKQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQADAAADACg");
	this.shape.setTransform(164.9,31,2.536,2.583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHgMQgDgCgDAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAIgJALIgYAdIgVgTIAUgXQAJgNAIgHQAFgGAFgCQAEgCAIABQAHgBAFACQACACAHAGIA/A4IgTAXg");
	this.shape_1.setTransform(164.9,30.6,2.536,2.583);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494949").s().p("Ag9AYQAAgUAUgQIgJgzIAtgHIAFAlQAVgIAZgGIAIgCIAIAqIgIACQgmAGgQAKQgJAEgEAFIgCADQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQAEACAJABQAYgBAYgEIAJgCIAFAqIgHACQgbAEgcAAQg9AAAAgvgAgpg5IAJAwQgVAOAAATQAAAnA1AAQAbAAAagFIgDgZQgZAEgZABQgMgBgFgDQgHgEABgHQAAgIATgLQATgKAmgHIgGgaQgiAIgSAJIgHgng");
	this.shape_2.setTransform(133.1,28.9,2.536,2.583);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1AYQAAgTAWgOIgKgwIAegFIAHAnQASgIAhgIIAGAZQgmAIgSAJQgUALAAAJQAAAHAGAEQAFADAMAAQAaAAAZgEIACAZQgZAEgcAAQg1AAAAgmg");
	this.shape_3.setTransform(133,29,2.536,2.583);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#494949").s().p("AAFAtQgMAJgQAAQgPAAgKgJQgJgJAAgPQgBgPAJgKQAFgHAGgEIgNAAIAAgjIAWAAIAAgLIAkAAIAAALIAtAAIAAAjIgHAAQANAMAAASQAAARgLANQgMAMgRADIgIACgAAcAPQAAAGgFAEQgEAEgJADIAGAUQAQgDAJgKQAJgKAAgOQAAgPgLgJQgLgJgWAAIgGAAIAAgFIAtAAIAAgTIgtAAIAAgKIgVAAIAAAKIgWAAIAAATIAWAAIAAAJQgOAGgHAIQgHAJAAAMQAAAMAHAGQAHAHAMAAQAPAAALgKQAPgLAHgSQADADAAAFgAgbATQAAgGAGgEIAAARQgGAAAAgHgAAAAAIAGAAIgGAMg");
	this.shape_4.setTransform(102,32.5,2.536,2.583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAhQAJgDAEgEQAFgEAAgGQAAgFgCgDQgIASgOALQgMAKgPAAQgMAAgHgHQgHgGAAgMQAAgMAHgKQAHgIAOgFIAAgJIgWAAIAAgUIAWAAIAAgKIAVAAIAAAKIAtAAIAAAUIgtAAIAAAFIAHAAQAVAAALAJQALAIAAAQQAAAOgJAJQgJALgQADgAgaATQAAAIAFgBIAAgRQgFAEAAAGgAAAABIAAAMIAHgNg");
	this.shape_5.setTransform(102,32.3,2.536,2.583);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494949").s().p("AhHBBIACgJQALghAJgnIgQAAIAAgoIAYAAIAAgBIACgQIApAEIgCANIAwAAIAAAdIAUAAIAAAmIgIAAIglABIAMAEIgOAOIAMABQAMAAAOgDIAIgCIAFAoIgHACQgRACgPAAQgaAAgMgJQgLgHgDgMIgKAggAg5gYIASAAQgHAmgPAsIAbAHQAOguAIgrIA0AAIAAgYIgvAAIABgOIgagCIgCAQIgXAAgAgNAhQAAANANAIQALAJAWgBQAOAAAQgDIgCgYQgPAEgNAAQgLAAgFgCQgFgDgBgDIACgFIAHgGIgUgIQgNAKAAALgAgMAMIAFgFIAAgBIgBgKgAAAgPIAAAUQAegCAeAAIAAgWQgfAAgdAEg");
	this.shape_6.setTransform(69.7,28.7,2.536,2.583);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+A7QAPgtAHgmIgRAAIAAgYIAWAAIADgQIAaACIgCAOIAvAAIAAAYIg0AAQgIAsgOAtgAgBA2QgNgHAAgNQAAgMAOgKIATAIIgHAHIgBAEQAAADAFADQAFACALAAQANAAAPgDIADAYQgRADgOAAQgWAAgLgJgAgBgPQAdgDAfAAIAAAVQgeAAgdADg");
	this.shape_7.setTransform(69.9,28.6,2.536,2.583);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494949").s().p("AgqAiIAGgBIgDgDQgMgKAAgRQAAgOAKgKIgfAAIAAgmIBBAAIAAgOIApAAIAAAOIAnAAIAAAmIgnAAIAAARQAGAIAAAMQAAAbgRAOQgRANghADIgIABgAADAeIAAABQgCAEgFADQgLACgRABIAEAYQAegCAPgMQAOgLAAgYQAAgMgFgGIAAgbIAnAAIAAgWIgnAAIAAgNIgaAAIAAANIg/AAIAAAWIA/AAIAAAGIAAAAQgEgCgFAAQgOAAgLAIQgJAJAAALQAAANAJAIQAJAIAPAAQAHAAAGgDgAgOAJQgDgCAAgEQAAgDADgBQACgDAFAAQAGAAABADQACABAAADQAAAEgCACQgCADgFAAQgEAAgDgDgAgJADIACABIADgBIgDgBIgCABg");
	this.shape_8.setTransform(36.6,28.7,2.536,2.583);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghApQARgBAMgCQAFgCABgFIABAAIAAgBQgGACgHAAQgQABgIgJQgJgHAAgOQAAgLAJgJQAKgHAPAAQAFAAAEACIAAgBIAAgGIg/AAIAAgWIA/AAIAAgNIAaAAIAAANIAmAAIAAAWIgmAAIAAAbQAFAGAAAMQAAAYgOALQgPAMgeACgAgOgBQgDABAAADQAAAEADADQADACAEAAQAFAAACgCQABgDAAgEQAAgDgBgBQgBgDgGABQgFgBgCADg");
	this.shape_9.setTransform(36.6,28.7,2.536,2.583);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#494949").s().p("AgLACIgDACIgiAtIgtgqIAJgKQAJgKALgPIASgVQAIgJAIgCQAHgEALAAQAKAAAGAEQAHADAIAHIBMBEIgqAvgAgIgPIA8A4IATgWIg+g5QgHgFgCgCQgEgCgIAAQgIAAgFACQgEABgFAGIgRAUIgUAXIAUAUIAYgdQAGgJADgCQADgDACAAQACAAADADg");
	this.shape_10.setTransform(164.9,33.6,2.536,2.583);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494949").s().p("AgHgMQgEgCgCAAQgCAAgCACQgEADgFAIIgYAeIgVgUIAUgXIARgUQAGgGAEgBQAEgCAIAAQAIAAAEACQACABAHAGIA/A4IgTAXg");
	this.shape_11.setTransform(164.9,32.7,2.536,2.583);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#494949").s().p("Ag5A8QgNgNAAgWQAAgXAUgQQgFgVgDgSIgDgRIA9gJIAFAjIAmgKIAQgEIAMA6IgQABQgjAIgTAKIgDADIACAAQAVAAAZgEIASgDIAGA5IgPADQgZAFgeAAQgoAAgRgUgAgqg3IAKAvQgWAOAAATQAAAmA2ABQAbgBAZgEIgDgZQgYAFgZgBQgMAAgGgDQgGgDAAgIQAAgJAUgLQAPgIApgJIgGgZQgeAGgVAKIgIgmg");
	this.shape_12.setTransform(133.3,30.9,2.536,2.583);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#494949").s().p("Ag1AYQAAgTAWgOIgKgwIAegEIAHAmQAWgKAdgGIAGAZQgpAJgPAIQgUALAAAIQAAAIAGADQAGAEALAAQAaAAAZgEIACAZQgZAEgcAAQg1AAAAgmg");
	this.shape_13.setTransform(133,31.2,2.536,2.583);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494949").s().p("AABA5QgMAFgMAAQgSAAgMgLQgNgNAAgRQAAgRAJgLIgDAAIAAg0IAXAAIAAgKIA0AAIAAAKIAuAAIAAAyQAGAKAAAOQAAAUgOAOQgMAOgVAEIgPADgAAcAPQAAAGgFAEQgFAEgIACIAGAUQAQgCAJgKQAJgKAAgOQAAgPgLgKQgLgJgVAAIgHAAIAAgEIAtAAIAAgTIgtAAIAAgLIgVAAIAAALIgWAAIAAATIAWAAIAAAJQgNAFgIAJQgHAIAAANQAAAMAHAGQAHAHAMAAQAPgBAMgJQANgKAJgUQACAEAAAFgAgaATQAAgHAFgEIAAARQgFAAAAgGgAAAAAIAHAAQgEAHgDAFg");
	this.shape_14.setTransform(102,34.7,2.536,2.583);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#494949").s().p("AAKAgQAIgBAFgFQAFgEAAgGQAAgFgCgDQgJATgNAKQgMAKgPAAQgMAAgHgHQgHgGAAgMQAAgNAHgJQAIgIANgFIAAgJIgWAAIAAgTIAWAAIAAgLIAVAAIAAALIAtAAIAAATIgtAAIAAAFIAHgBQAVAAALAKQALAIAAAQQAAAOgJAKQgJAKgQADgAgaAUQAAAGAFAAIAAgRQgFAEAAAHgAAAABIAAAMQADgFAEgHIgHAAg");
	this.shape_15.setTransform(102,34.4,2.536,2.583);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#494949").s().p("AhRBGIAFgRQALghAHgcIgOAAIAAg5IAZAAIAAgCIACgPIA5AFIgCAMIAvAAIAAAeIAUAAIAAA1IgBAAIAGA2IgPADQgQADgSAAQgbAAgOgLIgIgGIgHAWgAg4gZIASAAQgIAogOArIAaAGQAOgrAJguIA0AAIAAgYIgwAAIACgOIgagCIgDAQIgWAAgAgMAhQAAAMAMAJQALAIAWAAQAPAAAQgDIgDgYQgPADgNAAQgJAAgGgCQgGgDAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIAHgHIgVgIQgMALAAALgAAsATIgDACIARgCIAEgBgAAAgQIAAAVQAfgDAeAAIAAgVQgcAAghADg");
	this.shape_16.setTransform(69.5,30.9,2.536,2.583);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#494949").s().p("Ag+A7QAOgrAIgoIgRAAIAAgYIAWAAIADgQIAaACIgCAOIAvAAIAAAYIg0AAQgIAugOArgAgBA3QgNgJAAgMQAAgLAOgLIATAIIgHAHQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAADAFADQAGACAKAAQANAAAPgDIADAYQgRADgOAAQgWAAgLgIgAgBgPQAhgDAbAAIAAAVQgeAAgdADg");
	this.shape_17.setTransform(69.9,30.7,2.536,2.583);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#494949").s().p("Ag0AdQgIgMAAgOQABgJADgHIgYAAIAAg3IBBAAIAAgNIA6AAIAAANIAmAAIAAA3IgmAAIAAAGQAEAJAAAOQAAAfgTAQQgRAOgmAEIgPABgAADAeIgBAAQgBAFgFACIgdAEIAFAYQAggDANgMQAOgLAAgXQAAgMgFgHIAAgaIAmAAIAAgWIgmAAIAAgOIgaAAIAAAOIg/AAIAAAWIA/AAIAAAGIAAAAIgJgCQgQAAgJAIQgJAJAAALQAAANAJAIQAKAIAOAAQAHAAAGgDgAgOAJQgDgDAAgDQAAgDADgCQADgCAEAAQAFAAACACQABACAAADQAAADgBADQgCADgFAAQgEAAgDgDg");
	this.shape_18.setTransform(36.6,30.9,2.536,2.583);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#494949").s().p("AghAqIAdgEQAFgDABgEIABgBIAAAAQgGADgHAAQgOAAgKgIQgJgIAAgOQAAgLAJgIQAJgIAQAAIAJABIAAAAIAAgGIg/AAIAAgWIA/AAIAAgNIAaAAIAAANIAmAAIAAAWIgmAAIAAAbQAFAGAAAMQAAAYgOALQgNALggADgAgOgBQgDABAAADQAAAEADADQADACAEAAQAFAAACgCQABgDAAgEQAAgDgBgBQgCgDgFAAQgEAAgDADg");
	this.shape_19.setTransform(36.6,30.8,2.536,2.583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// レイヤー 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93DFFC").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_20.setTransform(99.3,29.8,2.535,2.583);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkfBRQgiAAgYgYQgYgYAAghQAAggAYgYQAYgYAiAAII/AAQAjAAAXAYQAYAYAAAgQAAAhgYAYQgXAYgjAAgAlLgqQgSASAAAYQAAAZASASQASASAaAAII/AAQAaAAASgSQASgSAAgZQAAgYgSgSQgSgSgaAAIo/AAQgaAAgSASg");
	this.shape_21.setTransform(99.4,30.4,2.536,2.583);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_22.setTransform(99.4,30.5,2.536,2.583);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1955A5").s().p("AkfBlQgqAAgegeQgegeAAgpQAAgpAegdQAegeAqAAII/AAQArAAAeAeQAdAdAAApQAAApgdAeQgeAegrAAgAk9gcQgMAMAAAQQAAARAMAMQANAMARAAII/AAQARAAANgMQAMgMAAgRQAAgQgMgMQgMgMgSAAIo/AAQgRAAgNAMg");
	this.shape_23.setTransform(99.3,29.8,2.535,2.583);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#143B63").s().p("AkfBlQgqAAgegeQgegeAAgpQAAgpAegdQAegeAqAAII/AAQArAAAeAeQAdAdAAApQAAApgdAeQgeAegrAAgAk9gcQgMAMAAAQQAAARAMAMQANAMARAAII/AAQARAAANgMQAMgMAAgRQAAgQgMgMQgMgMgSAAIo/AAQgRAAgNAMg");
	this.shape_24.setTransform(99.3,29.8,2.535,2.583);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1955A5").s().p("AkfBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAII/AAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_25.setTransform(99.3,29.8,2.535,2.583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).wait(3));

	// レイヤー 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#494949").s().p("AgMgHIglAuIghgfIAZgdIARgVQAHgHAGgCQAGgDAJAAQAIAAAFADQAHADAGAGQAJAHAQAPIAsAoIgeAjgAgHgNIA8A4IATgWIg/g5QgHgGgCgBQgFgCgHAAQgIAAgEACQgFABgFAGQgGAGgKAOIgVAXIAVAUIAYgeIAJgKQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQADAAADACg");
	this.shape_26.setTransform(163.4,26.5,2.538,2.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHgMQgDgCgDAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAIgJALIgYAdIgVgTIAVgYQAKgOAGgFQAFgGAFgCQAEgCAIABQAHgBAFACQACABAHAHIA/A4IgTAXg");
	this.shape_27.setTransform(163.4,26.1,2.538,2.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#494949").s().p("Ag9AYQAAgUAUgQIgKgzIAtgHIAGAlQAVgIAYgGIAIgCIAJAqIgIACQgmAGgQAKQgJAEgEAFIgCADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQAEACAJAAQAYAAAZgEIAJgCIAEAqIgIABQgaAFgcAAQg9AAAAgvgAgpg5IAJAxQgVANAAATQAAAnA1AAQAcAAAZgFIgDgZQgZAEgZABQgMgBgFgDQgGgEAAgHQAAgJAUgLQARgIAmgJIgFgZQgiAIgSAIIgHgmg");
	this.shape_28.setTransform(131.6,24.5,2.538,2.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag0AYQAAgTAVgOIgJgwIAcgFIAIAnQASgJAigHIAFAZQgmAIgSAJQgUAKABAKQAAAHAFAEQAFADANAAQAZAAAYgEIAEAZQgaAFgbgBQg1AAAAgmg");
	this.shape_29.setTransform(131.5,24.6,2.538,2.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#494949").s().p("AAGAtQgNAJgRAAQgOAAgKgJQgKgJAAgPQABgPAIgKQAFgHAHgEIgPAAIAAgjIAXAAIAAgLIAkAAIAAALIAuAAIAAAjIgIAAQAOAMAAASQAAARgMANQgMAMgSADIgHACgAAbAPQAAAGgEAEQgEAEgJADIAGAUQAQgDAJgKQAKgLAAgNQAAgPgMgJQgLgJgVAAIgHAAIAAgFIAsAAIAAgTIgsAAIAAgKIgVAAIAAAKIgXAAIAAATIAXAAIAAAJQgOAGgHAIQgIAJAAAMQAAAMAIAGQAHAHALAAQAPAAAMgKQAOgLAJgSQABADAAAFgAgaATQAAgGAFgEIAAARQgFAAAAgHgAAAAAIAHAAIgHAMg");
	this.shape_30.setTransform(100.5,28,2.538,2.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAKAhQAJgDAEgEQAEgFAAgFQAAgFgBgDQgJASgOALQgMAKgPAAQgLAAgHgHQgIgGAAgMQAAgMAIgKQAHgIAOgFIAAgJIgXAAIAAgUIAXAAIAAgKIAVAAIAAAKIAsAAIAAAUIgsAAIAAAFIAHAAQAVAAALAJQAMAIAAAQQAAANgKALQgJAJgQADgAgaATQAAAIAFgBIAAgRQgFAFAAAFgAAAABIAAAMIAHgNg");
	this.shape_31.setTransform(100.5,27.8,2.538,2.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#494949").s().p("AhIBBIADgJQALghAJgnIgQAAIAAgoIAYAAIAAgBIACgQIApAEIgCANIAwAAIAAAdIAUAAIAAAmIgIAAIglABIAMAEIgNAOIALAAQAMAAAOgCIAJgCIAFAoIgIABQgQADgQAAQgZABgMgKQgMgIgDgLIgKAggAg5gYIASAAQgIAmgOAsIAaAHQAOgsAJgtIA0AAIAAgYIgvAAIACgOIgbgCIgDAQIgWAAgAgNAhQAAAOANAHQALAJAWAAQAOgBARgDIgDgXQgPADgNAAQgLAAgFgCQgFgCAAgFIACgDIAGgHIgUgIQgNAKAAALgAgMAMIAFgFIAAgLgAAAgPIAAAUQAegCAeAAIAAgWQgfAAgdAEg");
	this.shape_32.setTransform(68.1,24.2,2.538,2.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag+A7QAOgtAIgmIgSAAIAAgYIAXAAIACgQIAbACIgCAOIAvAAIAAAYIg0AAQgIAugOArgAAAA2QgNgHgBgNQAAgMAOgKIATAIIgGAHIgCAEQAAAEAGACQAEACALAAQANAAAPgDIADAYQgRADgOAAQgWAAgKgJgAgBgPQAdgDAgAAIAAAVQgfAAgdADg");
	this.shape_33.setTransform(68.3,24.2,2.538,2.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#494949").s().p("AgqAiIAGgBIgDgDQgMgKAAgRQAAgOAKgKIgfAAIAAgmIBBAAIAAgOIApAAIAAAOIAnAAIAAAmIgnAAIAAARQAGAIAAAMQAAAbgRAOQgRANghADIgIABgAADAfQgCAFgFACQgKACgSABIAEAYQAfgCAOgMQAOgLAAgYQAAgMgFgGIAAgbIAnAAIAAgWIgnAAIAAgNIgaAAIAAANIg/AAIAAAWIA/AAIAAAGIAAAAQgEgCgFAAQgOAAgLAIQgJAJAAALQAAANAJAIQAJAIAPAAQAHAAAGgDgAgOAJQgDgCAAgEQAAgDADgBQACgDAGAAQAFAAABADQACABAAADQAAAEgCACQgCADgEAAQgFAAgDgDgAgJADIADABIACgBIgCgBIgDABg");
	this.shape_34.setTransform(34.8,24.3,2.538,2.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AghApQATgBAKgCQAEgCADgFIAAgBQgGACgIAAQgPABgIgJQgJgHAAgOQAAgLAJgIQAKgIAPAAQAEAAAFACIAAgBIAAgGIg/AAIAAgWIA/AAIAAgNIAaAAIAAANIAnAAIAAAWIgnAAIAAAbQAFAHAAALQAAAYgOALQgOAMgfACgAgOgBQgDABAAADQAAAFADACQADACAFAAQAEAAACgCQABgCAAgFQAAgDgBgBQgBgCgFgBQgGABgCACg");
	this.shape_35.setTransform(34.9,24.2,2.538,2.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#494949").s().p("AgMACIgBABIgkAuIgtgqIAegjQANgRAFgFQAHgIAJgCQAHgDALgBQAKABAFADQAIADAJAHIBKBEIgoAvgAgHgPIA7A4IAUgWIg/g5QgHgFgDgCQgEgCgHAAQgJAAgDACQgEABgGAGIgQAUIgVAXIAVAUIAXgdQAGgIADgDQADgCACAAQACAAAEACg");
	this.shape_36.setTransform(163.5,29.1,2.538,2.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#494949").s().p("AgHgMQgEgCgCAAQgCAAgCACQgEADgFAJIgYAcIgVgTIAVgYIAQgTQAGgGAEgCQAEgBAIAAQAIAAAEABQACACAHAGIA/A4IgTAXg");
	this.shape_37.setTransform(163.4,28.2,2.538,2.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#494949").s().p("Ag5A8QgNgNAAgWQAAgXAUgQIgIgnIgDgRIA9gJIAFAjIAmgKIAQgEIAMA6IgQABQgjAIgTAJIgDAEIACAAQAVAAAagEIARgDIAGA5IgPADQgZAFgeAAQgoAAgRgUgAgqg3IAKAvQgWAOAAATQAAAmA2AAQAbAAAZgEIgDgZQgYAFgZgBQgMAAgGgDQgGgDAAgIQAAgJAUgLQAPgHApgKIgGgZQgeAHgVAJIgIgmg");
	this.shape_38.setTransform(131.8,26.4,2.538,2.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#494949").s().p("Ag0AYQAAgTAVgOIgJgwIAcgEIAIAmQAWgKAegGIAFAZQgoAJgQAIQgUAKABAJQAAAJAFACQAGAEAMAAQAZAAAYgEIAEAZQgaAEgbAAQg1AAAAgmg");
	this.shape_39.setTransform(131.5,26.7,2.538,2.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#494949").s().p("AABA4QgMAGgMAAQgSAAgMgLQgNgNAAgSQAAgQAJgLIgDAAIAAg0IAXAAIAAgKIA0AAIAAAKIAuAAIAAAzQAGAJAAAOQAAAUgOAOQgMAOgVAEIgPAEgAAcAPQAAAFgFAFQgFAFgIABIAGAUQAQgCAJgKQAKgLAAgNQAAgPgMgKQgLgJgVAAIgHAAIAAgEIAtAAIAAgTIgtAAIAAgLIgVAAIAAALIgWAAIAAATIAWAAIAAAJQgNAFgIAJQgHAHAAANQAAAMAHAHQAHAGAMABQAPgBAMgJQANgKAJgUQACAEAAAFgAgaATQAAgHAFgEIAAARQgFAAAAgGgAAAAAIAHAAQgEAHgDAFg");
	this.shape_40.setTransform(100.5,30.2,2.538,2.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#494949").s().p("AAKAgQAHgBAGgFQAEgEAAgGQAAgFgBgDQgJATgOAKQgMAKgPAAQgMAAgGgHQgIgGAAgMQAAgNAIgJQAHgIAOgFIAAgJIgXAAIAAgTIAXAAIAAgLIAVAAIAAALIAsAAIAAATIgsAAIAAAFIAHgBQAVAAALAKQAMAIAAAQQAAANgKALQgJAKgQADgAgaAUQAAAGAFAAIAAgRQgFAFAAAGgAAAABIAAAMQACgFAFgHIgHAAg");
	this.shape_41.setTransform(100.5,29.9,2.538,2.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#494949").s().p("AhSBGIAGgRQAKghAIgcIgOAAIAAg5IAZAAIACgRIA6AFIgDAMIAwAAIAAAeIATAAIAAA1IgBAAIAGA2IgOADQgRADgSAAQgbAAgOgLIgIgGIgHAWgAg4gZIASAAQgJAogOArIAbAGQAOgpAJgwIA0AAIAAgYIgwAAIADgOIgbgCIgDAQIgWAAgAgMAhQAAAMAMAJQALAIAWAAQAPAAAQgDIgDgYQgOADgOAAQgJAAgGgCQgFgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAGgHIgVgIQgMALAAALgAAsATIgCACIARgCIADgBgAAAgQIAAAVQAfgDAeAAIAAgVQgbAAgiADg");
	this.shape_42.setTransform(67.9,26.5,2.538,2.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#494949").s().p("Ag+A7QAOgrAIgoIgSAAIAAgYIAXAAIACgQIAbACIgCAOIAvAAIAAAYIg0AAQgJAwgNApgAAAA3QgNgJgBgMQAAgLAOgLIATAIIgGAHQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAEAGACQAFACAKAAQANAAAPgDIADAYQgRADgOAAQgWAAgKgIgAgBgPQAhgDAcAAIAAAVQgfAAgdADg");
	this.shape_43.setTransform(68.3,26.2,2.538,2.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#494949").s().p("AgzAdQgJgMABgOQAAgJADgHIgYAAIAAg3IBBAAIAAgNIA6AAIAAANIAmAAIAAA3IgmAAIAAAGQAEAJAAAOQAAAfgTAQQgRAOgmAEIgPABgAADAeQgCAFgFACQgFACgYACIAFAYQAggDANgMQAOgLAAgXQAAgMgFgHIAAgaIAnAAIAAgWIgnAAIAAgOIgaAAIAAAOIg/AAIAAAWIA/AAIAAAGIAAAAIgJgCQgPAAgKAIQgJAJAAALQAAANAJAIQAJAIAOAAQAIAAAGgDgAgOAJQgDgDAAgDQAAgDADgCQADgCAFAAQAEAAACACQABACAAADQAAADgBADQgCADgEAAQgFAAgDgDg");
	this.shape_44.setTransform(34.9,26.5,2.538,2.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#494949").s().p("AghAqQAYgDAFgBQAFgDACgEIAAgBQgGADgIAAQgOAAgJgIQgJgIAAgOQAAgLAJgIQAKgIAPAAIAJABIAAAAIAAgGIg/AAIAAgWIA/AAIAAgNIAaAAIAAANIAnAAIAAAWIgnAAIAAAbQAFAGAAAMQAAAYgOALQgNALggADgAgOgBQgDABAAADQAAAEADADQADACAFAAQAEAAACgCQABgDAAgEQAAgDgBgBQgCgDgEAAQgFAAgDADg");
	this.shape_45.setTransform(34.9,26.3,2.538,2.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D9BDD").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_46.setTransform(98.9,25.9,2.538,2.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkgBRQghAAgYgYQgYgYAAghQAAggAYgYQAYgYAhAAIJBAAQAiAAAXAYQAYAYAAAgQAAAhgYAYQgXAYgiAAgAlLgqQgSASAAAYQAAAZASASQASASAZAAIJBAAQAZAAASgSQASgSAAgZQAAgYgSgSQgSgSgZAAIpBAAQgZAAgSASg");
	this.shape_47.setTransform(99.2,25.9,2.538,2.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_48.setTransform(99.2,25.9,2.538,2.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1955A5").s().p("AkgBlQgqAAgdgdQgegeAAgqQAAgoAegeQAdgeAqAAIJBAAQAqAAAeAeQAdAeAAAoQAAAqgdAeQgeAdgqAAgAk9gcQgMANAAAPQAAARAMAMQAMAMARAAIJBAAQARAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgRAAIpBAAQgRAAgMAMg");
	this.shape_49.setTransform(99.2,25.9,2.538,2.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#143B63").s().p("AkgBlQgqAAgdgdQgegeAAgqQAAgoAegeQAdgeAqAAIJBAAQAqAAAeAeQAdAeAAAoQAAAqgdAeQgeAdgqAAgAk9gcQgMANAAAPQAAARAMAMQAMAMARAAIJBAAQARAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgRAAIpBAAQgRAAgMAMg");
	this.shape_50.setTransform(99.2,31,2.538,2.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1955A5").s().p("AkgBHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIJBAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_51.setTransform(99.2,28.4,2.538,2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.4,56.9);


(lib.シンボル7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.シンボル4();
	this.instance.setTransform(-0.2,-5.3,1,1,0,0,0,24.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1.2,y:-2.3},0).wait(1));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D9BDD").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape.setTransform(0.5,-3.9,3.939,3.941);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABRQghAAgYgYQgYgYAAghQAAggAYgYQAYgYAhAAIABAAQAiAAAXAYQAYAYAAAgQAAAhgYAYQgXAYgiAAgAgrgqQgSASAAAYQAAAZASASQASASAZAAIABAAQAZAAASgSQASgSAAgZQAAgYgSgSQgSgSgZAAIgBAAQgZAAgSASg");
	this.shape_1.setTransform(0.5,-3.9,3.939,3.941);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_2.setTransform(0.5,-3.9,3.939,3.941);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1955A5").s().p("AgBGPQimABh2h1Qh2h2AAilQAAikB2h0QB2h2CmAAIAFAAQCmAAB2B2QB0B0AACkQAAClh0B2Qh2B1imgBgAh2hzQgxAxAABCQAABDAxAxQAwAvBFAAIAFAAQBFAAAwgvQAvgvAAhFQAAhCgvgxQgwgvhFAAIgFAAQhFAAgwAvg");
	this.shape_3.setTransform(0.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1955A5").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_4.setTransform(0.5,0,3.939,3.941);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#85D1F0").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_5.setTransform(0.4,0,3.932,3.931);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1955A5").s().p("AAABlQgpAAgegeQgegdAAgqQAAgpAegdQAegeApAAIABAAQAqAAAeAeQAdAdAAApQAAAqgdAdQgeAegqAAgAgdgcQgMAMAAAQQAAARAMAMQANAMAQAAIABAAQARAAAMgMQAMgMAAgRQAAgQgMgMQgMgMgRAAIgBAAQgQAAgNAMg");
	this.shape_6.setTransform(0.4,0,3.932,3.931);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:3.939,scaleY:3.941,x:0.5}},{t:this.shape_3},{t:this.shape_2,p:{scaleX:3.939,scaleY:3.941,x:0.5,y:-3.9}},{t:this.shape_1,p:{scaleX:3.939,scaleY:3.941,x:0.5,y:-3.9}},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{scaleX:3.932,scaleY:3.931,x:0.4}},{t:this.shape_6},{t:this.shape_2,p:{scaleX:3.932,scaleY:3.931,x:0.4,y:0}},{t:this.shape_1,p:{scaleX:3.932,scaleY:3.931,x:0.4,y:0}},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,81,80);


(lib.シンボル11 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.シンボル10();
	this.instance.setTransform(344.3,279.2,0.986,1,0,0,0,339.4,275);
	this.instance.alpha = 0.789;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg1Bgq9MBqDAAAMAAABV7MhqDAAAg");
	this.shape.setTransform(339.5,275);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1,691.3,555.2);


(lib.シンボル5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		var that = this;
		
		this.stop();
		
		gameOnFlag = 1;
		console.log("gameOnFlag-------->" + gameOnFlag);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// M+c
	this.instance = new lib.シンボル12();
	this.instance.setTransform(192.7,-35.1,1,1,0,0,0,108.4,50.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:-35,alpha:0.923},0).wait(1).to({scaleX:1.63,scaleY:1.63,alpha:0.846},0).wait(1).to({scaleX:1.95,scaleY:1.95,alpha:0.769},0).wait(1).to({scaleX:1.85,scaleY:1.85,alpha:0.692},0).wait(1).to({scaleX:1.76,scaleY:1.76,alpha:0.615},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:192.6,alpha:0.538},0).wait(1).to({scaleX:1.57,scaleY:1.57,alpha:0.462},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:192.7,alpha:0.385},0).wait(1).to({scaleX:1.38,scaleY:1.38,alpha:0.308},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:-35.1,alpha:0.231},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:192.6,y:-35,alpha:0.154},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.077},0).wait(1).to({scaleX:1,scaleY:1,x:192.7,y:-35.1,alpha:0},0).wait(1));

	// レイヤー 1
	this.instance_1 = new lib.janken();
	this.instance_1.setTransform(191.7,-37.2,1,1,0,0,0,243,41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:248.7,regY:44.1,scaleX:1.03,scaleY:1.03,x:197.6,y:-34.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:197.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:197.9,y:-34.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:198.1,y:-34.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:198.3,y:-34.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:198.4},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:198.6,y:-34.4},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:198.8},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:198.9,y:-34.3},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:199.1,y:-34.2},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:199.3,y:-34.1},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:199.4,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:199.5,alpha:0.6},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:199.6,y:-34,alpha:0.4},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:199.7,alpha:0.2},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:199.8,y:-33.9,alpha:0},0).to({_off:true},1).wait(14));

	// レイヤー 3
	this.instance_2 = new lib.シンボル11();
	this.instance_2.setTransform(186.4,-30.1,1,0.321,0,0,0,339.4,274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:344.4,regY:276.9,x:191.4,y:-29.4},0).wait(26).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.2,-118.6,691.3,178.2);


(lib.MC_win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		//gameOnFlag = 1;
		console.log("gameOnFlag-------->" + gameOnFlag);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// レイヤー 1
	this.instance = new lib.win();
	this.instance.setTransform(0,2,1,1,0,0,0,205,102);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:196,regY:106.5,scaleX:1.04,scaleY:1.04,x:-9.3,y:6.7,alpha:0.207},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-9.6,y:6.9,alpha:0.413},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-9.9,y:7,alpha:0.62},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-10.2,y:7.2,alpha:0.826},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-10.6,y:7.3,alpha:0.851},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-10.9,y:7.5,alpha:0.876},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-11.2,y:7.7,alpha:0.901},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-11.5,y:7.8,alpha:0.925},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-11.8,y:8,alpha:0.95},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-12.1,y:8.2,alpha:0.975},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-12.5,y:8.3,alpha:1},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:-12.8,y:8.5,alpha:0.917},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-13.1,y:8.7,alpha:0.833},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:-13.4,y:8.8,alpha:0.75},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-13.7,y:8.9,alpha:0.667},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:-14,y:9.1,alpha:0.583},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:-14.4,y:9.3,alpha:0.5},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:-14.7,y:9.4,alpha:0.417},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:-15,y:9.6,alpha:0.333},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:-15.4,y:9.8,alpha:0.25},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:-15.7,y:9.9,alpha:0.167},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-16,y:10.1,alpha:0.083},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:-16.3,y:10.3,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.3,-61.4,282.7,135.7);


(lib.MC_titile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// レイヤー 1
	this.instance = new lib.シンボル7();
	this.instance.setTransform(0.2,-366.9,1,1,0,0,0,209.8,47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:213.8,regY:66.9,scaleX:0.99,scaleY:0.99,x:4.2,y:-341.1},0).wait(1).to({scaleX:0.97,scaleY:0.98,y:-334.6},0).wait(1).to({scaleX:0.95,scaleY:0.97,y:-328},0).wait(1).to({scaleX:0.93,scaleY:0.95,y:-321.4},0).wait(1).to({scaleX:0.91,scaleY:0.94,y:-314.9},0).wait(1).to({scaleX:0.9,scaleY:0.93,y:-308.3},0).wait(1).to({scaleX:0.88,scaleY:0.92,y:-301.7},0).wait(1).to({scaleX:0.85,scaleY:0.91,x:4.5,y:-273.2},0).wait(1).to({scaleX:0.83,scaleY:0.9,x:4.9,y:-244.7},0).wait(1).to({scaleX:0.81,scaleY:0.89,x:5.2,y:-216.1},0).wait(1).to({scaleX:0.79,scaleY:0.87,x:5.5,y:-187.6},0).wait(1).to({scaleX:0.77,scaleY:0.86,x:5.8,y:-159.1},0).wait(1).to({scaleX:0.76,scaleY:0.85,x:6.3,y:-130.6},0).wait(1).to({scaleX:0.87,scaleY:0.84,x:6.1,y:-140.6},0).wait(1).to({scaleX:0.96,scaleY:0.83,x:5.9,y:-150.6},0).wait(1).to({scaleX:1.04,scaleY:0.82,x:5.6,y:-160.6},0).wait(1).to({scaleX:1.09,scaleY:0.81,x:5.2,y:-170.6},0).wait(1).to({scaleX:1.13,scaleY:0.79,x:4.7,y:-180.6},0).wait(1).to({scaleX:1.15,scaleY:0.78,x:4.8,y:-180.9},0).wait(1).to({scaleX:1.17,scaleY:0.77,y:-181.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,x:4.9,y:-181.3},0).wait(1).to({scaleX:1.18,scaleY:0.75,y:-181.6},0).wait(1).to({scaleX:1.18,scaleY:0.83,y:-180},0).wait(1).to({scaleX:1.17,scaleY:0.9,y:-178.6},0).wait(1).to({scaleX:1.16,scaleY:0.98,x:4.8,y:-177.1},0).wait(1).to({scaleX:1.14,scaleY:1.05,y:-175.7},0).wait(1).to({scaleX:1.12,scaleY:1.13,x:4.7,y:-174.2},0).wait(1).to({scaleX:1.09,scaleY:1.21,x:4.5,y:-172.7},0).wait(1).to({scaleX:1.06,scaleY:1.2,x:4.4,y:-172.9},0).wait(1).to({scaleX:1.03,scaleY:1.19,x:4.3,y:-173.1},0).wait(1).to({scaleX:1,scaleY:1.18,x:4.2,y:-173.2},0).wait(1).to({scaleX:0.97,scaleY:1.17,x:4.1,y:-173.4},0).wait(1).to({scaleX:0.94,scaleY:1.16,x:4,y:-173.6},0).wait(1).to({scaleX:0.92,scaleY:1.15,x:3.9,y:-173.7},0).wait(1).to({scaleX:0.89,scaleY:1.14,x:3.8,y:-174},0).wait(1).to({scaleX:0.87,scaleY:1.14,x:3.7,y:-174.1},0).wait(1).to({scaleX:0.86,scaleY:1.13,y:-174.3},0).wait(1).to({scaleX:0.86,scaleY:1.12,y:-174.5},0).wait(1).to({scaleX:0.87,scaleY:1.11,y:-174.6},0).wait(1).to({scaleX:0.9,scaleY:1.1,x:3.8,y:-174.8},0).wait(1).to({scaleX:0.94,scaleY:1.09,x:4,y:-175},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:4.2,y:-175.2},0).wait(1).to({scaleX:1.11,scaleY:1.07,x:4.6,y:-175.3},0).wait(1).to({scaleX:1.2,scaleY:1.06,x:5,y:-175.5},0).wait(1).to({scaleX:1.18,scaleY:1.05,x:4.9,y:-175.7},0).wait(1).to({scaleX:1.16,scaleY:1.05,y:-175.8},0).wait(1).to({scaleX:1.14,scaleY:1.04,x:4.7,y:-176},0).wait(1).to({scaleX:1.12,scaleY:1.03,y:-176.2},0).wait(1).to({scaleX:1.08,scaleY:1.02,x:4.5,y:-176.4},0).wait(1).to({scaleX:1.04,scaleY:1.01,x:4.4,y:-176.5},0).wait(1).to({scaleX:1,scaleY:1,x:4.2,y:-176.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.9,-429,404.1,162.5);


(lib.MC_num = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// レイヤー 1
	this.MC_addScore_tween = new lib.num();
	this.MC_addScore_tween.setTransform(-0.5,-1,1,1,0,0,0,42.5,22);
	this.MC_addScore_tween.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.MC_addScore_tween).wait(1).to({scaleX:1.39,scaleY:1.39,x:-0.4,alpha:0.957},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:-0.5,alpha:0.913},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-0.4,alpha:0.87},0).wait(1).to({scaleX:2.55,scaleY:2.55,alpha:0.826},0).wait(1).to({scaleX:2.93,scaleY:2.93,x:-0.5,y:-0.9,alpha:0.783},0).wait(1).to({scaleX:3.32,scaleY:3.32,x:-0.4,alpha:0.739},0).wait(1).to({scaleX:3.71,scaleY:3.71,alpha:0.696},0).wait(1).to({scaleX:4.09,scaleY:4.09,x:-0.5,y:-1,alpha:0.652},0).wait(1).to({scaleX:4.48,scaleY:4.48,x:-0.4,alpha:0.609},0).wait(1).to({scaleX:4.87,scaleY:4.87,alpha:0.565},0).wait(1).to({scaleX:5.25,scaleY:5.25,x:-0.5,alpha:0.522},0).wait(1).to({scaleX:5.64,scaleY:5.64,x:-0.4,y:-0.9,alpha:0.478},0).wait(1).to({scaleX:6.03,scaleY:6.03,x:-0.5,alpha:0.435},0).wait(1).to({scaleX:6.41,scaleY:6.41,alpha:0.391},0).wait(1).to({scaleX:6.8,scaleY:6.8,x:-0.4,alpha:0.348},0).wait(1).to({scaleX:7.19,scaleY:7.19,x:-0.5,y:-1,alpha:0.304},0).wait(1).to({scaleX:7.57,scaleY:7.57,alpha:0.261},0).wait(1).to({scaleX:7.96,scaleY:7.96,x:-0.4,alpha:0.217},0).wait(1).to({scaleX:8.35,scaleY:8.35,x:-0.5,alpha:0.174},0).wait(1).to({scaleX:8.73,scaleY:8.73,y:-0.9,alpha:0.13},0).wait(1).to({scaleX:9.12,scaleY:9.12,x:-0.4,alpha:0.087},0).wait(1).to({scaleX:9.51,scaleY:9.51,x:-0.5,alpha:0.043},0).wait(1).to({scaleX:9.89,scaleY:9.89,x:-0.4,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-23,85,44);


(lib.MC_lost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		//gameOnFlag = 1;
		console.log("gameOnFlag-------->" + gameOnFlag);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// レイヤー 1
	this.instance = new lib.lost();
	this.instance.setTransform(-0.5,0,1,1,0,0,0,206.5,102);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:201.2,regY:103.1,x:-5.8,y:5.6,alpha:0.207},0).wait(1).to({y:10,alpha:0.413},0).wait(1).to({y:14.5,alpha:0.62},0).wait(1).to({y:18.9,alpha:0.826},0).wait(1).to({y:23.3,alpha:0.851},0).wait(1).to({y:27.8,alpha:0.876},0).wait(1).to({y:32.2,alpha:0.901},0).wait(1).to({y:36.6,alpha:0.925},0).wait(1).to({y:41.1,alpha:0.95},0).wait(1).to({y:45.5,alpha:0.975},0).wait(1).to({y:49.9,alpha:1},0).wait(1).to({y:54.4,alpha:0.917},0).wait(1).to({y:58.8,alpha:0.833},0).wait(1).to({y:63.2,alpha:0.75},0).wait(1).to({y:67.7,alpha:0.667},0).wait(1).to({y:72.1,alpha:0.583},0).wait(1).to({y:76.5,alpha:0.5},0).wait(1).to({y:81,alpha:0.417},0).wait(1).to({y:85.4,alpha:0.333},0).wait(1).to({y:89.8,alpha:0.25},0).wait(1).to({y:94.3,alpha:0.167},0).wait(1).to({y:98.7,alpha:0.083},0).wait(1).to({y:103.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.3,-65.9,285,134.1);


(lib.MC_drow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		//gameOnFlag = 1;
		console.log("gameOnFlag-------->" + gameOnFlag);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// レイヤー 1
	this.instance = new lib.drow();
	this.instance.setTransform(-0.6,-1,1,1,0,0,0,333.4,102);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:318,regY:104,x:-16,y:1,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.8,-68.1,429.8,138.2);


(lib.btn_reStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// M+c
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA2IAAgYIAcAAIAAAYgAgMASIgEhHIAiAAIgFBHg");
	this.shape.setTransform(122.9,-7.6,3.636,3.636);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQARgIAjgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgaAEgcAAQg1AAAAgng");
	this.shape_1.setTransform(85.2,-7.6,3.636,3.636);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsAOIAAgbIBZAAIAAAbg");
	this.shape_2.setTransform(44.9,-7.2,3.636,3.636);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/A8QAOgrAJgpIgSAAIAAgYIAWAAIADgRIAbACIgDAPIAxAAIAAAYIg1AAQgJAugOAsgAgBA4QgMgJAAgNQAAgKANgMIAUAIIgHAIIgBADQAAAEAEADQAFABALAAQAOAAAPgCIADAXQgRAEgPAAQgWgBgLgHgAgBgPQAegEAfAAIAAAWQgeAAgeADg");
	this.shape_3.setTransform(4.3,-8.2,3.636,3.636);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAqQATgBAJgCQAGgCACgFIAAgCQgGADgHAAQgQAAgIgIQgKgIAAgOQAAgLAKgIQAKgJAPAAIAJACIAAAAIAAgGIhAAAIAAgXIBAAAIAAgNIAbAAIAAANIAmAAIAAAXIgmAAIAAAbQAEAHABAMQAAAYgPALQgOAMgfACgAgPgBQgCABAAADQAAAFACACQADACAFAAQAFAAACgCQABgCAAgFQAAgDgBgBQgCgDgFAAQgFAAgDADg");
	this.shape_4.setTransform(-42.9,-8.1,3.636,3.636);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAlQAYAAANgEQAMgFAGgKQAGgLAAgPQAAgYgRAAQgMAAgKAOQgLAOAAARIgbAAIAAhLIAcAAIAAAVQAQgSATAAQAVAAALAOQAMANAAAYQAAAkgWARQgWARguAAg");
	this.shape_5.setTransform(-88.3,-6.7,3.636,3.636);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494949").s().p("AgXBAIAAgsIABAAIgFhTIA3AAIgFBTIABAAIAAAsgAgEAsIAIAAIAAgEIgIAAgAgDAIIAGAAIAEgzIgNAAg");
	this.shape_6.setTransform(122.9,-7.6,3.636,3.636);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494949").s().p("AgOA2IAAgYIAcAAIAAAYgAgMASIgEhHIAiAAIgFBHg");
	this.shape_7.setTransform(122.9,-7.6,3.636,3.636);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494949").s().p("AhAAZQAAgXAVgOIgKg1IAxgIIAFAlQAWgIAXgFIAKgCIAJAtIgKACQgmAHgRAJQgHAFgEAEIgDADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQACACAKAAQAXAAAagEIALgCIAFAuIgJABQgbAFgdAAQhAAAAAgxgAgegxIAJAtIgFAEQgSALAAAOQAAAMAGAGQAKALAcAAQATAAAYgDIgBgGQgVADgVAAQgPAAgIgFQgLgGAAgOQAAgOAagMQARgKAggIIgBgGQgYAFgRAIIgLAFIgJgpg");
	this.shape_8.setTransform(85.3,-7.7,3.636,3.636);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#494949").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQARgIAjgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgaAEgcAAQg1AAAAgng");
	this.shape_9.setTransform(85.2,-7.6,3.636,3.636);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#494949").s().p("Ag2AYIAAgvIBtAAIAAAvgAgiAEIBFAAIAAgHIhFAAg");
	this.shape_10.setTransform(44.9,-7.2,3.636,3.636);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494949").s().p("AgsAOIAAgbIBZAAIAAAbg");
	this.shape_11.setTransform(44.9,-7.2,3.636,3.636);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#494949").s().p("AhLBDIADgLQAMgjAIgkIgPAAIAAgsIAXAAIAEgRIAtAEIgCANIAwAAIAAAfIAKgBIAKAAIAAAqIgnAAIAHADIgMALIgCABIAIABQAPAAAMgDIAKgBIAGAsIgJABQgRADgRAAQgaAAgMgKQgLgGgEgJIgJAdgAgvgjIATAAIgBAMQgKApgKAiIAHABQAMgpAJgnIABgIIAzAAIAAgEIgyAAIACgPIgHAAIgDAPIgUAAgAgCAiQgBAIAHAEQAKAHATAAIAUgBIAAgEQgcADgLgFQgLgFAAgKIABgHIgDgBQgDAHAAAEgAAIgHIABAEIAqgDIAAgDQgXAAgUACg");
	this.shape_12.setTransform(4,-8,3.636,3.636);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#494949").s().p("Ag/A8QAOgrAJgpIgSAAIAAgYIAWAAIADgRIAbACIgDAPIAxAAIAAAYIg1AAQgJAugOAsgAgBA4QgMgJAAgNQAAgKANgMIAUAIIgHAIIgBADQAAAEAEADQAFABALAAQAOAAAPgCIADAXQgRAEgPAAQgWgBgLgHgAgBgPQAegEAfAAIAAAWQgeAAgeADg");
	this.shape_13.setTransform(4.3,-8.2,3.636,3.636);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494949").s().p("AgtAhIAEAAIAAgBQgMgLAAgSQgBgNAJgKIgdAAIAAgqIBCAAIAAgOIAsAAIAAAOIAnAAIAAAqIgnAAIAAAPQAFAIABANQAAAdgSAOQgRAOgjADIgJABgAANAaIAAAGIgCAFQgEAIgIADQgMACgJABIACAEQAWgEAJgHQALgJgBgTQAAgJgEgHIAAAAIAAgoIAmAAIAAgCIgmAAIAAgOIgIAAIAAAOIg/AAIAAACIA/AAIAAAXIgJAEIAAgBIgDAAIADAAQACACADADQAHAGgBAGQABAJgHAFIgFADIAFgCgAgcgJQgFAFgBAHQABAJAFAFQAGAGAMAAIAIgCQgLADgIgHQgGgGAAgIQAAgGAGgGQAFgFAJAAIAEAAIgGgBQgMAAgHAGg");
	this.shape_14.setTransform(-42.9,-7.9,3.636,3.636);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#494949").s().p("AghAqQATgBAJgCQAGgCACgFIAAgCQgGADgHAAQgQAAgIgIQgKgIAAgOQAAgLAKgIQAKgJAPAAIAJACIAAAAIAAgGIhAAAIAAgXIBAAAIAAgNIAbAAIAAANIAmAAIAAAXIgmAAIAAAbQAEAHABAMQAAAYgPALQgOAMgfACgAgPgBQgCABAAADQAAAFACACQADACAFAAQAFAAACgCQABgCAAgFQAAgDgBgBQgCgDgFAAQgFAAgDADg");
	this.shape_15.setTransform(-42.9,-8.1,3.636,3.636);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#494949").s().p("AgtBIIgDgtIALAAQAYAAALgEQAIgDADgGQAFgIAAgOQAAgOgHAAQgHAAgIAKQgIALAAAOIAAAKIgvAAIAAheIAwAAIAAAKQANgIAMAAQAZABAOAQQAPARAAAbQAAAqgaAUQgYASgyAAgAAYgkQAKAJAAATQAAASgHAOQgIANgRAFQgJAEgUABIABAGQAjgCARgOQASgOAAgfQAAgUgKgKQgIgLgQAAQgOAAgOAPIgDADIgOAAIAAgVIgIAAIAAA3IAIAAQACgPAKgMQANgSARAAQAKABAHAFg");
	this.shape_16.setTransform(-88.3,-6.7,3.636,3.636);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#494949").s().p("AglAlQAYAAANgEQAMgFAGgKQAGgLAAgPQAAgYgRAAQgMAAgKAOQgLAOAAARIgbAAIAAhLIAcAAIAAAVQAQgSATAAQAVAAALAOQAMANAAAYQAAAkgWARQgWARguAAg");
	this.shape_17.setTransform(-88.3,-6.7,3.636,3.636);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#494949").s().p("AgXBAIAAgsIABAAIgFhTIA3AAIgFBTIABAAIAAAsgAgEAsIAIAAIAAgEIgIAAgAgDAIIAGAAIAEgzIgNAAg");
	this.shape_18.setTransform(122.9,-3.9,3.636,3.636);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#494949").s().p("AgOA2IAAgYIAcAAIAAAYgAgMASIgEhHIAiAAIgFBHg");
	this.shape_19.setTransform(122.9,-3.9,3.636,3.636);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#494949").s().p("AhAAZQAAgXAVgOIgKg1IAxgIIAFAlQAWgIAXgFIAKgCIAJAtIgKACQgmAHgRAJQgHAFgEAEIgDADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQACACAKAAQAXAAAagEIALgCIAFAuIgJABQgbAFgdAAQhAAAAAgxgAgegxIAJAtIgFAEQgSALAAAOQAAAMAGAGQAKALAcAAQATAAAYgDIgBgGQgVADgVAAQgPAAgIgFQgLgGAAgOQAAgOAagMQARgKAggIIgBgGQgYAFgRAIIgLAFIgJgpg");
	this.shape_20.setTransform(85.3,-4.1,3.636,3.636);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#494949").s().p("Ag1AYQAAgUAWgNQgGgWgEgbIAdgEIAIAnQARgIAjgJIAGAaQgnAJgSAIQgUALAAAJQAAAIAGADQAFAEAMAAQAaAAAZgFIADAaQgaAEgcAAQg1AAAAgng");
	this.shape_21.setTransform(85.2,-3.9,3.636,3.636);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#494949").s().p("Ag2AYIAAgvIBtAAIAAAvgAgiAEIBFAAIAAgHIhFAAg");
	this.shape_22.setTransform(44.9,-3.6,3.636,3.636);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#494949").s().p("AgsAOIAAgbIBZAAIAAAbg");
	this.shape_23.setTransform(44.9,-3.6,3.636,3.636);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#494949").s().p("AhLBDIADgKQAMgkAIgkIgPAAIAAgsIAXAAIAEgRIAtAEIgCANIAwAAIAAAfIAKgBIAKAAIAAAqIgnAAIAHADIgMALIgCABIAIABQAPAAAMgDIAKgBIAGAsIgJABQgRADgRAAQgaAAgMgKQgLgGgEgJIgJAdgAgvgjIATAAIgBAMQgKApgKAiIAHABQAMgpAJgnIABgIIAzAAIAAgEIgyAAIACgPIgHgBIgDAQIgUAAgAgCAiQgBAHAHAFQAKAHATAAIAUgBIAAgEQgcADgLgFQgLgFAAgKIABgHIgDgBQgDAGAAAFgAAIgHIABAEIAqgDIAAgDQgXAAgUACg");
	this.shape_24.setTransform(4,-4.4,3.636,3.636);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#494949").s().p("Ag/A8QAOgrAJgpIgSAAIAAgZIAWAAIADgQIAbADIgDANIAxAAIAAAZIg1AAQgJAugOAsgAgBA4QgMgJAAgMQAAgMANgLIAUAIIgHAIIgBADQAAAFAEACQAFABALAAQAOAAAPgCIADAXQgRAEgPAAQgWgBgLgHgAgBgPQAegDAfgBIAAAWQgeAAgeADg");
	this.shape_25.setTransform(4.3,-4.6,3.636,3.636);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#494949").s().p("AgtAhIAEAAIAAgBQgMgLAAgSQgBgNAJgKIgdAAIAAgqIBCAAIAAgOIAsAAIAAAOIAnAAIAAAqIgnAAIAAAPQAFAIABANQAAAdgSAOQgRAOgjADIgJABgAANAaIAAAGIgCAFQgEAIgIADQgMACgJABIACAEQAWgEAJgHQALgJgBgTQAAgJgEgHIAAAAIAAgoIAmAAIAAgCIgmAAIAAgOIgIAAIAAAOIg/AAIAAACIA/AAIAAAXIgJAEIAAgBQACACADADQAHAGgBAGQABAJgHAFIgFADIAFgCgAgcgJQgFAFgBAHQABAJAFAFQAGAGAMAAIAIgCQgLADgIgHQgGgGAAgIQAAgGAGgGQAFgFAJAAIAEAAIADAAIgDAAIgGgBQgMAAgHAGg");
	this.shape_26.setTransform(-42.9,-4.3,3.636,3.636);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#494949").s().p("AghAqQATgBAJgCQAGgCACgFIAAgCQgGADgHAAQgQAAgIgIQgKgIAAgOQAAgLAKgIQAKgJAPAAIAJACIAAAAIAAgGIhAAAIAAgXIBAAAIAAgNIAbAAIAAANIAmAAIAAAXIgmAAIAAAbQAEAHABAMQAAAYgPALQgOAMgfACgAgPgBQgCABAAADQAAAFACACQADACAFAAQAFAAACgCQABgCAAgFQAAgDgBgBQgCgDgFAAQgFAAgDADg");
	this.shape_27.setTransform(-42.9,-4.5,3.636,3.636);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#494949").s().p("AgtBIIgDgtIALAAQAYAAALgEQAIgDADgGQAFgIAAgOQAAgNgHAAQgHgBgIAKQgIALAAAOIAAAKIgvAAIAAhfIAwAAIAAALQANgIAMAAQAZAAAOARQAPARAAAbQAAAqgaATQgYAUgygBgAAYgkQAKAJAAATQAAATgHANQgIANgRAFQgJAEgUABIABAFQAjgBARgOQASgNAAggQAAgUgKgKQgIgKgQAAQgOAAgOAOIgDAEIgOAAIAAgWIgIAAIAAA3IAIAAQACgPAKgMQANgSARAAQAKAAAHAGg");
	this.shape_28.setTransform(-88.3,-3.1,3.636,3.636);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#494949").s().p("AglAlQAYAAANgEQAMgFAGgKQAGgLAAgPQAAgYgRAAQgMAAgKAOQgLAOAAARIgbAAIAAhLIAcAAIAAAVQAQgSATAAQAVAAALAOQAMANAAAYQAAAkgWARQgWARguAAg");
	this.shape_29.setTransform(-88.3,-3.1,3.636,3.636);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#494949").s().p("AgtAhIAEAAIAAgBQgMgLAAgSQgBgNAJgKIgdAAIAAgqIBCAAIAAgOIAsAAIAAAOIAnAAIAAAqIgnAAIAAAPQAFAIABANQAAAdgSAOQgRAOgjADIgJABgAANAaIAAAGIgCAFQgEAIgIADQgMACgJABIACAEQAWgEAJgHQALgJgBgTQAAgJgEgHIAAAAIAAgoIAmAAIAAgCIgmAAIAAgOIgIAAIAAAOIg/AAIAAACIA/AAIAAAXIgJAEIAAgBQACACADADQAHAGgBAGQABAJgHAFIgFADIAFgCgAgcgJQgFAFgBAHQABAJAFAFQAGAGAMAAIAIgCQgLADgIgHQgGgGAAgIQAAgGAGgGQAFgFAJAAIAEAAIgGgBQgMAAgHAGg");
	this.shape_30.setTransform(-42.9,-3.4,3.636,3.636);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#494949").s().p("AgtAhIAEAAIAAgBQgMgLAAgSQgBgNAJgKIgdAAIAAgqIBCAAIAAgOIAsAAIAAAOIAnAAIAAAqIgnAAIAAAPQAFAIABANQAAAdgSAOQgRAOgjADIgJABgAANAaIAAAGIgCAFQgEAIgIADQgMACgJABIACAEQAWgEAJgHQALgJgBgTQAAgJgEgHIAAAAIAAgoIAmAAIAAgCIgmAAIAAgOIgIAAIAAAOIg/AAIAAACIA/AAIAAAXIgJAEIAAgBQACACADADQAHAGgBAGQABAJgHAFIgFADIAFgCgAgcgJQgFAFgBAHQABAJAFAFQAGAGAMAAIAIgCQgLADgIgHQgGgGAAgIQAAgGAGgGQAFgFAJAAIAEAAIgGgBQgMAAgHAGg");
	this.shape_31.setTransform(-42.9,0.2,3.636,3.636);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{y:-3.1}},{t:this.shape_28,p:{y:-3.1}},{t:this.shape_27,p:{y:-4.5}},{t:this.shape_26},{t:this.shape_25,p:{y:-4.6}},{t:this.shape_24,p:{y:-4.4}},{t:this.shape_23,p:{y:-3.6}},{t:this.shape_22,p:{y:-3.6}},{t:this.shape_21,p:{y:-3.9}},{t:this.shape_20,p:{y:-4.1}},{t:this.shape_19,p:{y:-3.9}},{t:this.shape_18,p:{y:-3.9}},{t:this.shape_17,p:{y:-6.7}},{t:this.shape_16,p:{y:-6.7}},{t:this.shape_15,p:{y:-8.1}},{t:this.shape_14},{t:this.shape_13,p:{y:-8.2}},{t:this.shape_12,p:{y:-8}},{t:this.shape_11,p:{y:-7.2}},{t:this.shape_10,p:{y:-7.2}},{t:this.shape_9,p:{y:-7.6}},{t:this.shape_8,p:{y:-7.7}},{t:this.shape_7,p:{y:-7.6}},{t:this.shape_6,p:{y:-7.6}},{t:this.shape_5,p:{y:-6.7}},{t:this.shape_4,p:{y:-8.1}},{t:this.shape_3,p:{y:-8.2}},{t:this.shape_2,p:{y:-7.2}},{t:this.shape_1,p:{y:-7.6}},{t:this.shape,p:{y:-7.6}}]}).to({state:[{t:this.shape_29,p:{y:1.4}},{t:this.shape_28,p:{y:1.4}},{t:this.shape_27,p:{y:0}},{t:this.shape_31},{t:this.shape_25,p:{y:-0.1}},{t:this.shape_24,p:{y:0.1}},{t:this.shape_23,p:{y:0.9}},{t:this.shape_22,p:{y:0.9}},{t:this.shape_21,p:{y:0.6}},{t:this.shape_20,p:{y:0.4}},{t:this.shape_19,p:{y:0.6}},{t:this.shape_18,p:{y:0.6}},{t:this.shape_17,p:{y:-2.2}},{t:this.shape_16,p:{y:-2.2}},{t:this.shape_15,p:{y:-3.6}},{t:this.shape_30},{t:this.shape_13,p:{y:-3.7}},{t:this.shape_12,p:{y:-3.5}},{t:this.shape_11,p:{y:-2.7}},{t:this.shape_10,p:{y:-2.7}},{t:this.shape_9,p:{y:-3.1}},{t:this.shape_8,p:{y:-3.2}},{t:this.shape_7,p:{y:-3.1}},{t:this.shape_6,p:{y:-3.1}},{t:this.shape_5,p:{y:-2.2}},{t:this.shape_4,p:{y:-3.6}},{t:this.shape_3,p:{y:-3.7}},{t:this.shape_2,p:{y:-2.7}},{t:this.shape_1,p:{y:-3.1}},{t:this.shape,p:{y:-3.1}}]},1).wait(3));

	// レイヤー 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2D9BDD").s().p("Al4BHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAILxAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_32.setTransform(0,-3.8,3.839,3.833);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Al4BRQgiAAgYgYQgYgYAAghQAAggAYgYQAYgYAiAAILxAAQAiAAAYAYQAYAYAAAgQAAAhgYAYQgYAYgiAAgAmkgqQgSASAAAYQAAAZASASQASASAaAAILxAAQAaAAASgSQASgSAAgZQAAgYgSgSQgSgSgaAAIrxAAQgaAAgSASg");
	this.shape_33.setTransform(0,-3.8,3.839,3.833);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Al4BHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAILxAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_34.setTransform(0,-3.8,3.839,3.833);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1955A5").s().p("Al4BlQgqAAgegeQgegdAAgqQAAgpAegdQAegeAqAAILxAAQAqAAAeAeQAeAdAAApQAAAqgeAdQgeAegqAAgAmWgcQgMAMAAAQQAAARAMAMQANAMARAAILxAAQARAAANgMQAMgMAAgRQAAgQgMgMQgNgMgRAAIrxAAQgRAAgNAMg");
	this.shape_35.setTransform(0,0,3.839,3.833);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1955A5").s().p("Al4BHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAILxAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_36.setTransform(0,0,3.839,3.833);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#85D1F0").s().p("Al4BHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAeAAILxAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAg");
	this.shape_37.setTransform(0,0,3.839,3.842);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Al4BRQgiAAgYgYQgYgYAAghQAAggAYgYQAYgYAiAAILxAAQAiAAAYAYQAYAYAAAgQAAAhgYAYQgYAYgiAAgAmkgqQgSATAAAXQAAAZASASQASASAaAAILxAAQAaAAASgSQASgSAAgZQAAgXgSgTQgSgSgaAAIrxAAQgaAAgSASg");
	this.shape_38.setTransform(0,0,3.839,3.842);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1955A5").s().p("Al4BlQgqAAgegdQgegeAAgqQAAgoAegeQAegeAqAAILxAAQAqAAAeAeQAeAeAAAoQAAAqgeAeQgeAdgqAAgAmWgcQgMANAAAPQAAARAMAMQANAMARAAILxAAQASAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgSAAIrxAAQgRAAgNAMg");
	this.shape_39.setTransform(0,0,3.839,3.842);

	this.instance = new lib.シンボル9();
	this.instance.setTransform(0,0,1,1,0,0,0,184,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36,p:{scaleY:3.833}},{t:this.shape_35},{t:this.shape_34,p:{scaleY:3.833,y:-3.8}},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_36,p:{scaleY:3.842}},{t:this.shape_39},{t:this.shape_34,p:{scaleY:3.842,y:0}},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-39,368,78);


(lib.btn_par = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.シンボル3();
	this.instance.setTransform(0.4,-5.6,1,1,0,0,0,29.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-0.6},0).wait(1));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D9BDD").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape.setTransform(0.5,-3.9,3.939,3.941);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABRQghAAgYgYQgYgYAAghQAAggAYgYQAYgYAhAAIABAAQAiAAAXAYQAYAYAAAgQAAAhgYAYQgXAYgiAAgAgrgqQgSASAAAYQAAAZASASQASASAZAAIABAAQAZAAASgSQASgSAAgZQAAgYgSgSQgSgSgZAAIgBAAQgZAAgSASg");
	this.shape_1.setTransform(0.5,-3.9,3.939,3.941);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_2.setTransform(0.5,-3.9,3.939,3.941);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1955A5").s().p("AAABlQgpAAgegdQgegeAAgqQAAgoAegeQAegeApAAIABAAQAqAAAeAeQAdAeAAAoQAAAqgdAeQgeAdgqAAgAgdgcQgMANAAAPQAAARAMAMQAMAMARAAIABAAQARAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgRAAIgBAAQgRAAgMAMg");
	this.shape_3.setTransform(0.5,0,3.939,3.941);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1955A5").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_4.setTransform(0.5,0,3.939,3.941);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#85D1F0").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_5.setTransform(0.4,0,3.932,3.931);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1955A5").s().p("AAABlQgpAAgegeQgegdAAgqQAAgpAegdQAegeApAAIABAAQAqAAAeAeQAdAdAAApQAAAqgdAdQgeAegqAAgAgdgcQgMAMAAAQQAAARAMAMQANAMAQAAIABAAQARAAAMgMQAMgMAAgRQAAgQgMgMQgMgMgRAAIgBAAQgQAAgNAMg");
	this.shape_6.setTransform(0.4,0,3.932,3.931);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:3.939,scaleY:3.941,x:0.5}},{t:this.shape_3},{t:this.shape_2,p:{scaleX:3.939,scaleY:3.941,x:0.5,y:-3.9}},{t:this.shape_1,p:{scaleX:3.939,scaleY:3.941,x:0.5,y:-3.9}},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{scaleX:3.932,scaleY:3.931,x:0.4}},{t:this.shape_6},{t:this.shape_2,p:{scaleX:3.932,scaleY:3.931,x:0.4,y:0}},{t:this.shape_1,p:{scaleX:3.932,scaleY:3.931,x:0.4,y:0}},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,81,80);


(lib.btn_choki = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.シンボル2();
	this.instance.setTransform(-1,-5,1,1,0,0,0,20,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1},0).wait(1));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D9BDD").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape.setTransform(0,-4.4,3.893,3.894);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABRQghAAgYgYQgYgYAAghQAAggAYgYQAYgYAhAAIABAAQAiAAAXAYQAYAYAAAgQAAAhgYAYQgXAYgiAAgAgrgqQgSASAAAYQAAAZASASQASASAZAAIABAAQAZAAASgSQASgSAAgZQAAgYgSgSQgSgSgZAAIgBAAQgZAAgSASg");
	this.shape_1.setTransform(0,-4.4,3.893,3.894);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_2.setTransform(0,-4.4,3.893,3.894);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1955A5").s().p("AAABlQgpAAgegdQgegeAAgqQAAgoAegeQAegeApAAIABAAQAqAAAeAeQAdAeAAAoQAAAqgdAeQgeAdgqAAgAgdgcQgMANAAAPQAAARAMAMQAMAMARAAIABAAQARAAAMgMQAMgMAAgRQAAgPgMgNQgMgMgRAAIgBAAQgRAAgMAMg");
	this.shape_3.setTransform(0,-0.5,3.893,3.894);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1955A5").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_4.setTransform(0,-0.5,3.893,3.894);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#85D1F0").s().p("AAABHQgdAAgVgVQgVgVAAgdQAAgcAVgVQAVgVAdAAIABAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAg");
	this.shape_5.setTransform(0.4,0,3.932,3.931);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1955A5").s().p("AAABlQgpAAgegeQgegdAAgqQAAgpAegdQAegeApAAIABAAQAqAAAeAeQAdAdAAApQAAAqgdAdQgeAegqAAgAgdgcQgMAMAAAQQAAARAMAMQANAMAQAAIABAAQARAAAMgMQAMgMAAgRQAAgQgMgMQgMgMgRAAIgBAAQgQAAgNAMg");
	this.shape_6.setTransform(0.4,0,3.932,3.931);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:3.893,scaleY:3.894,x:0,y:-0.5}},{t:this.shape_3},{t:this.shape_2,p:{scaleX:3.893,scaleY:3.894,x:0,y:-4.4}},{t:this.shape_1,p:{scaleX:3.893,scaleY:3.894,x:0,y:-4.4}},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{scaleX:3.932,scaleY:3.931,x:0.4,y:0}},{t:this.shape_6},{t:this.shape_2,p:{scaleX:3.932,scaleY:3.931,x:0.4,y:0}},{t:this.shape_1,p:{scaleX:3.932,scaleY:3.931,x:0.4,y:0}},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,79.1);


// stage content:



(lib.jyankenSample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		タイトル
		*/
		
		this.stop();
		var that = this;
		this.btn_start.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2);
		function fl_ClickToGoToAndStopAtFrame_2(e) {
			console.log("次のフレームへ");
			that.btn_start.removeEventListener("click", fl_ClickToGoToAndStopAtFrame_2);
			clearInterval(MC_itemMoveTimer);
			that.gotoAndStop(1);
		}
		
		function MC_itemMove() {
			that.MC_gooStart.y++;
			that.MC_parStart.y++;
			that.MC_chokiStart.y++;
			if (that.MC_gooStart.y > 500) {
				that.MC_gooStart.y = -200;
				that.MC_gooStart.x = Math.random() * 550;
			}
			if (that.MC_parStart.y > 500) {
				that.MC_parStart.y = -200;
				that.MC_parStart.x = Math.random() * 550;
			}
			if (that.MC_chokiStart.y > 500) {
				that.MC_chokiStart.y = -200;
				that.MC_chokiStart.x = Math.random() * 550;
			}
			console.log("MC_itemMove");
		}
		
		MC_itemMoveTimer = setInterval(MC_itemMove, 10);
		/* マウスクリックイベント
		特定のシンボルインスタンス上でクリックすると、独自のカスタムコードを追加できる関数が実行されます。
		
		手順 :
		1. 以下の「// カスタムコードを開始」と記述された行の後ろに新しい行を挿入して、カスタムコードを追加します。
		シンボルインスタンスをクリックすると、コードが実行されます。
		*/
		
		/* マウスクリックイベント
		特定のシンボルインスタンス上でクリックすると、独自のカスタムコードを追加できる関数が実行されます。
		
		手順 :
		1. 以下の「// カスタムコードを開始」と記述された行の後ろに新しい行を挿入して、カスタムコードを追加します。
		シンボルインスタンスをクリックすると、コードが実行されます。
		*/
		
		this.btn_tutorial.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14()
		{
			that.btn_tutorial.removeEventListener("click", fl_MouseClickHandler_14);
			clearInterval(MC_itemMoveTimer);
			that.gotoAndStop(3);
			console.log("次のフレームへ");
		}
	}
	this.frame_1 = function() {
		/* 
		メインループ
		*/
		this.stop();
		var that = this;
		
		var count_score = 0;
		var you;
		
		winCount = 0;
		lostCount = 0;
		attackCount = 0;
		
		var slote = 0;
		
		this.MC_goo_you.visible = false;
		this.MC_par_you.visible = false;
		this.MC_choki_you.visible = false;
		this.MC_lost.visible = false;
		this.MC_win.visible = false;
		this.MC_drow.visible = false;
		
		this.MC_startIMG.visible = true;
		
		that.MC_addScore.MC_addScore_tween.text_addScore.text = "";
		that.text_score.text = "0勝目　(0回戦目)";
		gameOnFlag = 0;
		
		/*
		ぐー = 0;
		ちょき = 1;
		ぱー = 2;
		*/
		
		function sloteEvent() {
			//ランダムで出すよりも順番に出した方がスムーズで良さそう。
			//slote = Math.floor(Math.random() * 3);
			slote++;
			if (slote == 3) {
				slote = 0;
			}
			that.MC_goo.visible = false;
			that.MC_par.visible = false;
			that.MC_choki.visible = false;
			
			switch (slote) {
				case 0:
					that.MC_goo.visible = true;
					break;
				case 1:
					that.MC_choki.visible = true;
					break;
				case 2:
					that.MC_par.visible = true;
					break;
				default:
					break;
			}
			console.log("sloteEvent");
		}
		//スロットな感じを表現
		sloteEventTimer = setInterval(sloteEvent, 100);
		
		function jankenEvent(you) {
			// じぶんの手
			that.MC_par_you.visible = false;
			that.MC_choki_you.visible = false;
			that.MC_goo_you.visible = false;
		
			// comの手
			that.MC_par.visible = false;
			that.MC_choki.visible = false;
			that.MC_goo.visible = false;
		
			switch (you) {
				case 0:
					that.MC_goo_you.visible = true;
					break;
				case 1:
					that.MC_choki_you.visible = true;
					break;
				case 2:
					that.MC_par_you.visible = true;
					break;
				default:
					break;
			}
		
			kekka = Math.floor(Math.random() * 3);
			clearInterval(sloteEventTimer);
			that.MC_startIMG.visible = false;
		
			switch (kekka) {
				case 0:
					that.MC_goo.visible = true;
					console.log("count_score--0-->　" + count_score);
		
					if (you == 0) {
						count_score++;
						that.MC_drow.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "+1";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_drow.gotoAndPlay(1);
						attackCount++;
					} else if (you == 1) {
						count_score--;
						that.MC_lost.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "-1";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_lost.gotoAndPlay(1);
						attackCount++;
						lostCount++;
					} else {
						count_score = count_score + 2;
						that.MC_win.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "+2";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_win.gotoAndPlay(1);
						winCount++;
						attackCount++;
					}
		
					that.text_score.text = winCount + "勝目　(" + attackCount + "回戦目)";
					console.log("count_score---->　" + count_score);
					console.log("that.text_score.text---->　" + that.text_score.text);
					if (winCount >= 10) {
						console.log("that.text_score.text--enddddd-->　" + that.text_score.text);
						console.log("--------case0---------------");
						//後で消す場合
						that.btn_goo.removeAllEventListeners("click");
						that.btn_par.removeAllEventListeners("click");
						that.btn_choki.removeAllEventListeners("click");
						that.gotoAndStop(2);
					}
					break;
				case 1:
					that.MC_choki.visible = true;
					console.log("count_score--1-->　" + count_score);
		
					if (you == 0) {
						count_score = count_score + 2;
						that.MC_win.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "+2";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_win.gotoAndPlay(1);
						winCount++;
						attackCount++;
					} else if (you == 1) {
						count_score++;
						that.MC_drow.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "+1";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_drow.gotoAndPlay(1);
						attackCount++;
					} else {
						count_score--;
						that.MC_lost.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "-1";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_lost.gotoAndPlay(1);
						lostCount++;
						attackCount++;
					}
					that.text_score.text = winCount + "勝目　(" + attackCount + "回戦目)";
					console.log("count_score---->　" + count_score);
					console.log("that.text_score.text---->　" + that.text_score.text);
					if (winCount >= 10) {
						console.log("that.text_score.text--enddddd-->　" + that.text_score.text);
						console.log("-----------case1------------");
						//後で消す場合
						that.btn_goo.removeAllEventListeners("click");
						that.btn_par.removeAllEventListeners("click");
						that.btn_choki.removeAllEventListeners("click");
						that.gotoAndStop(2);
					}
					break;
				case 2:
					that.MC_par.visible = true;
					console.log("count_score--2-->　" + count_score);
					if (you == 0) {
						count_score--;
						that.MC_lost.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "-1";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_lost.gotoAndPlay(1);
						lostCount++;
						attackCount++;
					} else if (you == 1) {
						count_score = count_score + 2;
						that.MC_win.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "+2";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_win.gotoAndPlay(1);
						winCount++;
						attackCount++;
					} else {
						count_score++;
						that.MC_drow.visible = true;
						that.MC_addScore.MC_addScore_tween.text_addScore.text = "+1";
						that.MC_addScore.gotoAndPlay(1);
						that.MC_drow.gotoAndPlay(1);
						attackCount++;
					}
					that.text_score.text = winCount + "勝目　(" + attackCount + "回戦目)";
					console.log("count_score---->　" + count_score);
					console.log("that.text_score.text---->　" + that.text_score.text);
					if (winCount >= 10) {
						console.log("that.text_score.text--enddddd-->　" + that.text_score.text);
						console.log("------case2-----------------");
						//後で消す場合
						that.btn_goo.removeAllEventListeners("click");
						that.btn_par.removeAllEventListeners("click");
						that.btn_choki.removeAllEventListeners("click");
						that.gotoAndStop(2);
					}
					break;
				default:
					console.log("count_score--3-->　" + count_score);
					console.log("count_score---->　" + count_score);
					console.log("that.text_score.text---->　" + that.text_score.text);
					if (winCount >= 10) {
						console.log("that.text_score.text--enddddd-->　" + that.text_score.text);
						console.log("--------default---------------");
						//後で消す場合
						that.btn_goo.removeAllEventListeners("click");
						that.btn_par.removeAllEventListeners("click");
						that.btn_choki.removeAllEventListeners("click");
						that.gotoAndStop(2);
					}
					break;
			}
		}
		
		this.btn_goo.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		function fl_MouseClickHandler_10() {
			console.log("gameOnFlag-------->" + gameOnFlag);
				you = 0;
				jankenEvent(you);
		}
		
		
		this.btn_choki.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		function fl_MouseClickHandler_11() {
			console.log("gameOnFlag-------->" + gameOnFlag);
				you = 1;
				jankenEvent(you);
		}
		
		
		this.btn_par.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		function fl_MouseClickHandler_12() {
			console.log("gameOnFlag-------->" + gameOnFlag);
				you = 2;
				jankenEvent(you);
		}
		console.log("gameOnFlag-------->" + gameOnFlag);
	}
	this.frame_2 = function() {
		/* 
		リザルト
		*/
		this.stop();
		var that = this;
		
		console.log(attackCount);
		console.log(winCount);
		console.log(winCount / attackCount *100);
		
		this.text_score.text = "" + Math.floor(winCount / attackCount *100) + "" + "%" + "(" + attackCount + "回中" + winCount + "勝利)";
		
		this.btn_reStart.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4);
		
		function fl_ClickToGoToAndStopAtFrame_4(e) {
			//初期化
			count_score = 0;
			that.text_score.text = 0;
			//イベントリスナー削除
			that.btn_reStart.removeEventListener("click", fl_ClickToGoToAndStopAtFrame_4);
			that.gotoAndStop(0);
		}
	}
	this.frame_3 = function() {
		this.stop();
		var that = this;
		
		this.btn_helpStart.addEventListener("click", fl_MouseClickHandler_16.bind(this));
		
		function fl_MouseClickHandler_16()
		{
			that.btn_helpStart.removeEventListener("click", fl_MouseClickHandler_16);
			that.gotoAndStop(0);
			console.log("スタート画面へ");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// titie
	this.instance = new lib.MC_titile();
	this.instance.setTransform(280,112,1,1,0,0,0,-1,-194);

	this.instance_1 = new lib.MC_result();
	this.instance_1.setTransform(280.7,69.4,1,1,0,0,0,76,16.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD3C00").s().p("AhdAzIAPgKIAKgKQAEgGABgJIAEhhIAmAAIAAApQgBAogEAYQgFAXgKANQgKAMgWAKgAgFBQIAAihIAlAAIAAB4QAMgGAGgMQAGgNADgYIAkAEQgFAwgWAWQgXAVgtABg");
	this.shape.setTransform(405.4,70.5,2.466,2.466);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD3C00").s().p("AhKAyQAQgJAIgJQAIgIACgQQADgMAAgdIAlAAQAAAjgEAUQgEAUgMANQgLAMgVAMgAAGgIQAbgSAIgTIh7AAIAAgiIClAAIAAAiQgGARgOASQgPARgRALg");
	this.shape_1.setTransform(362.6,71.3,2.466,2.466);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD3C00").s().p("AgwAyQAXgDAOgEQAMgFALgJQAIgJAEgNQAEgKAAgVIAAg6IAoAAIAAA5QABAzgcAbQgbAbg3ADgAhDAIIAAhaIAnAAIAABag");
	this.shape_2.setTransform(318,70.8,2.466,2.466);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD3C00").s().p("AhHBTIAAimIAnAAIAAA2QA2AOAyARIgLAjQgvgQgugMIAABKg");
	this.shape_3.setTransform(276.8,70.3,2.466,2.466);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD3C00").s().p("AhGATIAAgkICNAAIAAAkg");
	this.shape_4.setTransform(232.9,70.3,2.466,2.466);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD3C00").s().p("AhDA7IAAgdIBGAAIADg6Ig5AAIAAgeIBeAAIgEBYIAdAAIAAAdg");
	this.shape_5.setTransform(193.9,74.2,2.466,2.466);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD3C00").s().p("Ag7A2QAYgFAJgHQAJgIADgPIhJAAIAAghIBLAAIAAgXIg1ACIAAgiQAtgBAegDQAdgEAXgJIALAiQgYAIgXAEIAAAaIA+AAIAAAhIhAAAQgEAfgSAPQgPAQgkAFg");
	this.shape_6.setTransform(151.2,70.1,2.466,2.466);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// score
	this.text_score = new cjs.Text("", "40px 'A-OTF Maru Folk Pro R'");
	this.text_score.name = "text_score";
	this.text_score.textAlign = "center";
	this.text_score.lineHeight = 42;
	this.text_score.lineWidth = 375;
	this.text_score.setTransform(328.5,16,0.953,1);
	this.text_score._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_score).wait(1).to({_off:false},0).wait(1).to({scaleX:1.04,x:269.9,y:203,lineWidth:436},0).to({_off:true},1).wait(1));

	// add_score
	this.MC_addScore = new lib.MC_num();
	this.MC_addScore.setTransform(268.5,178,1,1,0,0,0,-0.5,-1);
	this.MC_addScore._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MC_addScore).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// anime
	this.MC_startIMG = new lib.シンボル5();
	this.MC_startIMG.setTransform(274.5,220.9,0.819,0.734,0,0,0,189.5,12.3);

	this.MC_drow = new lib.MC_drow();
	this.MC_drow.setTransform(612.4,298,1,1,0,0,0,333.4,102);

	this.MC_lost = new lib.MC_lost();
	this.MC_lost.setTransform(488.5,297,1,1,0,0,0,206.5,102);

	this.MC_win = new lib.MC_win();
	this.MC_win.setTransform(278.4,195,1,1,0,0,0,-1.6,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_win},{t:this.MC_lost},{t:this.MC_drow},{t:this.MC_startIMG}]},1).to({state:[]},1).wait(2));

	// obj
	this.MC_choki = new lib.MC_choki();
	this.MC_choki.setTransform(154.5,186,0.693,0.693,0,0,0,150,150);

	this.MC_goo = new lib.MC_goo();
	this.MC_goo.setTransform(154.5,184,0.693,0.693,0,0,0,150,150);

	this.MC_choki_you = new lib.MC_choki();
	this.MC_choki_you.setTransform(381,184,0.693,0.693,0,0,0,150,150);

	this.MC_goo_you = new lib.MC_goo();
	this.MC_goo_you.setTransform(381,184,0.693,0.693,0,0,0,150,150);

	this.MC_par_you = new lib.MC_par();
	this.MC_par_you.setTransform(381,184,0.693,0.693,0,0,0,150,150);

	this.MC_par = new lib.MC_par();
	this.MC_par.setTransform(154.5,186,0.693,0.693,0,0,0,150,150);

	this.text = new cjs.Text("ページ下の３っつのボタンを押すと自分が出す手を\n選択できます。COMと対戦します。\nじゃんけんする度に得点が加算減算されます。\n　かち：２点\n　まけ：−１点\n　あいこ：１点\n１１点以上取ると終了です。リザルト結果は対戦\n回数からじゃんけんの勝率を返します。", "18px 'A-OTF Maru Folk Pro R'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 446;
	this.text.setTransform(59,131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_par},{t:this.MC_par_you},{t:this.MC_goo_you},{t:this.MC_choki_you},{t:this.MC_goo},{t:this.MC_choki}]},1).to({state:[]},1).to({state:[{t:this.text}]},1).wait(1));

	// btn
	this.btn_tutorial = new lib.btn_tutorial();
	this.btn_tutorial.setTransform(288.8,341.1,0.66,0.66);
	new cjs.ButtonHelper(this.btn_tutorial, 0, 1, 2, false, new lib.btn_tutorial(), 3);

	this.btn_start = new lib.btn_start();
	this.btn_start.setTransform(288.8,267.1,0.66,0.66);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 2, false, new lib.btn_start(), 3);

	this.btn_choki = new lib.btn_choki();
	this.btn_choki.setTransform(454.5,331.7,1.5,1.5);
	new cjs.ButtonHelper(this.btn_choki, 0, 1, 1);

	this.btn_par = new lib.btn_par();
	this.btn_par.setTransform(278.6,331,1.482,1.482);
	new cjs.ButtonHelper(this.btn_par, 0, 1, 1);

	this.btn_goo = new lib.シンボル7_1();
	this.btn_goo.setTransform(55.3,331,1.482,1.482,0,0,0,-32.4,0);
	new cjs.ButtonHelper(this.btn_goo, 0, 1, 1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3300FF").ss(1,1,1).p("AgBAAIADAA");
	this.shape_7.setTransform(469.7,260.4);

	this.btn_reStart = new lib.btn_reStart();
	this.btn_reStart.setTransform(391.9,334.8,0.66,0.66,0,0,0,160.5,26.2);
	new cjs.ButtonHelper(this.btn_reStart, 0, 1, 2, false, new lib.btn_reStart(), 3);

	this.btn_helpStart = new lib.btn_helpStart();
	this.btn_helpStart.setTransform(280.3,354.4,1,1,0,0,0,99.2,28.4);
	new cjs.ButtonHelper(this.btn_helpStart, 0, 1, 2, false, new lib.btn_helpStart(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_start},{t:this.btn_tutorial}]}).to({state:[{t:this.shape_7},{t:this.btn_goo},{t:this.btn_par},{t:this.btn_choki}]},1).to({state:[{t:this.btn_reStart}]},1).to({state:[{t:this.btn_helpStart}]},1).wait(1));

	// starge
	this.MC_parStart = new lib.MC_par();
	this.MC_parStart.setTransform(59,348,1,1,0,0,0,150,150);

	this.MC_gooStart = new lib.MC_goo();
	this.MC_gooStart.setTransform(461,224,1,1,0,0,0,150,150);

	this.MC_chokiStart = new lib.MC_choki();
	this.MC_chokiStart.setTransform(166,86,1,1,0,0,0,150,150);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+AqQAOgIAGgHQAGgHADgNQACgMAAgWIAfAAQAAAbgDASQgEASgJAKQgJALgTAKgAAGgGQAWgQAHgQIhoAAIAAgcICLAAIAAAcQgFAQgMAOQgNAOgOAKg");
	this.shape_8.setTransform(124,37.4,2.283,2.283);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9A+IAAgdIBbAAIAAhCIhbAAIAAgcIB7AAIAAB7g");
	this.shape_9.setTransform(90.4,36.7,2.283,2.283);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFAbQgbAaghAOIgOgaQA7gdAdgwIhKAAIAAgeIBuAAIAAAeQgLAWgSATIAsAoIgVAWg");
	this.shape_10.setTransform(57.4,37,2.283,2.283);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494949").s().p("AhNAlIAKgFQANgHAEgGQAEgEADgLQADgMgBgUIAAgBIgmAAIAAgxICfAAIgBAqQgFARgNAQQgOAPgQALIgHAEIgRgTIgCALQgEAUgJANQgKAMgWAKIgHAFgAgYAIQgDAPgHAKQgGAGgIAFIAHAIQAKgGAHgIQAJgJACgOQAEgPABgSIgNAAQAAAQgDAKgAg7gyIBtAAIgGAOQgFAQgTAOIAHAHIASgQQALgOAEgMIAAgQIh3AAgAAJgXIAHgGIgHAAg");
	this.shape_11.setTransform(124.2,37.8,2.283,2.284);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#494949").s().p("Ag+AqQAOgIAGgHQAGgHADgNQACgMAAgWIAfAAQAAAbgDASQgEASgJAKQgJALgTAKgAAGgGQAWgQAHgQIhoAAIAAgcICLAAIAAAcQgFAQgMAOQgNAOgOAKg");
	this.shape_12.setTransform(124.2,37.5,2.283,2.284);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#494949").s().p("AhHBIIAAgxIBbAAIAAguIhbAAIAAgwICPAAIAACPgAgzA0IBnAAIAAhnIhnAAIAAAIIBbAAIAABWIhbAAg");
	this.shape_13.setTransform(90.5,36.7,2.283,2.284);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494949").s().p("Ag9A+IAAgdIBbAAIAAhCIhbAAIAAgcIB7AAIAAB7g");
	this.shape_14.setTransform(90.5,36.7,2.283,2.284);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#494949").s().p("AAFAmQgZAXgfANIgIAEIgZgrIAKgFQAwgXAagjIhBAAIAAgyICCAAIAAAqIgBACQgIASgQASIAtApIgkAkgAgtgxIBSAAIgJAPQgcAwg4AdIAFAJQAbgNAYgVIAFgGIArAnIAIgHIgkghIgIgGIAHgGQARgUAJgUIAAgRIhaAAg");
	this.shape_15.setTransform(57.5,37.5,2.283,2.284);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#494949").s().p("AAFAbQgbAaghAOIgOgaQA7gdAdgwIhKAAIAAgeIBuAAIAAAeQgLAWgSATIAsAoIgVAWg");
	this.shape_16.setTransform(57.5,37.1,2.283,2.284);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#494949").s().p("AhNAlIAKgFQANgHAEgGQAEgEADgLQADgMgBgUIAAgBIgmAAIAAgxICfAAIgBApQgFASgNAQQgOAPgQALIgHAEIgRgTIgCALQgEAUgJAMQgKANgWALIgHAEgAgYAIQgDAPgHAKQgGAFgIAFIAHAJQAKgGAHgHQAJgKACgOQAEgOABgUIgNAAQAAARgDAKgAg7gxIBtAAIgGANQgFAPgTAPIAHAHIASgQQALgOAEgMIAAgQIh3AAgAAJgXIAHgGIgHAAg");
	this.shape_17.setTransform(124.2,40,2.283,2.284);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#494949").s().p("Ag+AqQAOgIAGgHQAGgHADgNQACgMAAgWIAfAAQAAAbgDASQgEASgJAKQgJALgTAKgAAGgGQAWgQAHgQIhoAAIAAgcICLAAIAAAcQgFAQgMAOQgNAOgOAKg");
	this.shape_18.setTransform(124.2,39.8,2.283,2.284);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#494949").s().p("AhHBIIAAgxIBbAAIAAgtIhbAAIAAgxICPAAIAACPgAgzA0IBnAAIAAhnIhnAAIAAAIIBbAAIAABWIhbAAg");
	this.shape_19.setTransform(90.5,39,2.283,2.284);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#494949").s().p("Ag9A+IAAgdIBbAAIAAhCIhbAAIAAgcIB7AAIAAB7g");
	this.shape_20.setTransform(90.5,39,2.283,2.284);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#494949").s().p("AAFAmQgZAXgfANIgIAEIgZgrIAKgFQAwgXAagjIhBAAIAAgyICCAAIAAAqIgBACQgIASgQASIAtApIgkAkgAgtgwIBSAAIgJAOQgcAwg4AdIAFAJQAbgMAYgWIAFgGIArAnIAIgIIgkggIgIgGIAHgGQARgVAJgTIAAgRIhaAAg");
	this.shape_21.setTransform(57.5,39.8,2.283,2.284);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#494949").s().p("AAFAbQgbAaghAOIgOgaQA7gdAdgwIhKAAIAAgeIBuAAIAAAeQgLAWgSAUIAsAnIgVAWg");
	this.shape_22.setTransform(57.5,39.4,2.283,2.284);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F73B00").s().p("AgjAOIAAhAIAQAAIAABBQAAAMAFAGQAEAFAKAAQALAAAFgFQAFgGAAgMIAAhBIAPAAIAABAQAAAlgkAAQgjAAAAglg");
	this.shape_23.setTransform(403.1,103.3,2.674,2.674);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F73B00").s().p("AggAmQgMgOAAgYQAAgXAMgOQANgOATAAQAUAAAMAOQANAOAAAXQAAAYgNAOQgMAOgUAAQgUAAgMgOgAgVgcQgHAKAAASQAAAUAHAJQAJAKAMAAQAOAAAHgKQAIgJAAgUQAAgSgIgKQgHgKgOAAQgMAAgJAKg");
	this.shape_24.setTransform(377.5,103.1,2.674,2.674);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F73B00").s().p("AgHAyIAAgpIgig6IASAAIAXAvIAAAAIAZgvIARAAIgiA6IAAApg");
	this.shape_25.setTransform(353.8,103.1,2.674,2.674);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AAeAyIAAhJIgYAtIgMAAIgXgtIgBAAIAABJIgOAAIAAhjIAOAAIAeA6IAAAAIAeg6IAPAAIAABjg");
	this.shape_26.setTransform(182.9,103.9,2.674,2.674);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AggAmQgMgOAAgYQAAgXAMgOQANgOATAAQAUAAAMAOQANAOAAAXQAAAZgNANQgMAOgUAAQgTAAgNgOgAgUgcQgIAKAAASQAAAUAIAJQAHAKANAAQAOAAAHgKQAIgKAAgTQAAgRgIgLQgHgKgOAAQgNAAgHAKg");
	this.shape_27.setTransform(154.5,103.9,2.674,2.674);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgVAmQgNgOAAgYQAAgXANgOQAMgOAUAAQANAAAKADIAAAOIgLgDIgLgBQgNAAgJAKQgIALgBARQABASAIALQAKAKAMAAQAJAAAOgDIAAANQgMADgMAAQgTAAgNgOg");
	this.shape_28.setTransform(130.6,103.9,2.674,2.674);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EgjrAC6QhNgBg3g2Qg2g2AAhNQAAhLA2g3QA3g2BNAAMBHXAAAQBOAAA2A2QA2A3AABLQAABNg2A2Qg2A2hOABg");
	this.shape_29.setTransform(275.6,38.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FBB500").s().p("EgjrADoQhgAAhDhFQhFhEAAhfQAAhfBFhDQBDhFBgAAMBHXAAAQBgAABFBFQBDBDAABfQAABfhDBEQhFBFhgAAgEgltgCCQg2A3gBBLQABBNA2A2QA3A3BNAAMBHXAAAQBOAAA1g3QA3g2AAhNQAAhLg3g3Qg1g2hOAAMhHXAAAQhNAAg3A2g");
	this.shape_30.setTransform(275.5,38.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOBKIAAgfIg8AAIAAgXIA8AAIAAgFIgYABIgBgIQgOAGgOAEIgHgUIAYgIIgVgQIAMgPIgMAAIAAgWIA5AAIAAgKIAdAAIAAAKIA5AAIAAAWIgNAAIANAOQgJAJgMAIIAYAIIgJAUIgWgJIACAGIgTADIgCgFIgKAAIAAAHIA8AAIAAAXIg8AAIAAAfgAgngMIADAJIAPgBIgPgLgAALgFIAGAAIgCgEgAAlgGIADgGIgKgKQAKgHAMgMIghAAIATAIIgUAVIAPgEgAgGgVIADACIARgWIgFAAQgIAKgHAKgAgogfIAKgJIAHAGIAGgHIgjAAg");
	this.shape_31.setTransform(308.2,149.8,2.959,2.959);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVA5QAAAJgCAEQgDACgFAAIgSAAIgCgVQgDAMgEAKIgTgTQAFgNABgOQACgNAAgcIAAg4IAxAAIAABTQAFgEAFgHIgHAAIAAgWIASAAIADgGIgVAAIAAgXIAGAAIgIgOIAWgIIAHARIADgUIAaABIgEAYIAEAAIAIgWIAYAFIgGARIAKAAIAAAXIgQAAIAAAGIASAAIAAAWIgJAAQAFAIAFAFIgFAeIgGgGIgCASQgBAHgDADQgDAEgDABIgLAAIgVAAIAAgRQgPAQgRAEgAgUA2QAUgGAHgKIgJAAIAAgGIgNANIgFgMgAAcAxIAHABQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgKIgGAAIgGALgAgyAvIAGABIACgBIABgFIAAgRIgHAAgAAxAQIgIgOIgZAAIgIAOIAHAAIAAgLIAaAAIgBALIAJAAgAgvAEIAGAAIAAgOIgGAAgAAbgUIAGAAIgBgGIgDAAgAgvgfIAGAAIAAgPIgGAAg");
	this.shape_32.setTransform(241.6,150.1,2.959,2.959);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#494949").s().p("AgXBUIAAgfIg9AAIAAgrIAEAAIgGgTIAPgFIgPgKIAFgHIAAAAIAAgqIA6AAIAAgKIAwAAIAAAKIA6AAIAAAqIADAEIgNANIAOAGIgHASIAFAAIAAArIg8AAIAAAfgAhAAhIA9AAIAAAfIAIAAIAAgfIA8AAIAAgDIg8AAIAAgaIgIAAIAAAaIg9AAgAgvAAIgOACIABAEIAPgGIgBgBgAAtAAIACAAIANAFIACgDIgNgDIgDAAgAgfgZIAcAXIASgVIgBAAIADgCIAEgEIgCgBIgWAZIgIgIIgKgHIASgTIgCgBIgQATIgHgFIgBgBgAAtgVIACACIALgJIgCgCgAg4gcIAKAJIACgCIgCgCIgJgHgAgcgzIBaAAIAAgCIg5AAIAAgKIgIAAIAAAKIg6AAIAAACIAdAAIACgCg");
	this.shape_33.setTransform(308.2,149.8,2.959,2.959);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#494949").s().p("AgOBKIAAgfIg8AAIAAgXIA8AAIAAgFIgYABIgBgIQgOAGgOAEIgHgUIAYgIIgVgQIAMgPIgMAAIAAgWIA5AAIAAgKIAdAAIAAAKIA5AAIAAAWIgNAAIANAOQgJAJgMAIIAYAIIgJAUIgWgJIACAGIgTADIgCgFIgKAAIAAAHIA8AAIAAAXIg8AAIAAAfgAgngMIADAJIAPgBIgPgLgAALgFIAGAAIgCgEgAAlgGIADgGIgKgKQAKgHAMgMIghAAIATAIIgUAVIAPgEgAgGgVIADACIARgWIgFAAQgIAKgHAKgAgogfIAKgJIAHAGIAGgHIgjAAg");
	this.shape_34.setTransform(308.2,149.8,2.959,2.959);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#494949").s().p("AhYA1IACgFQAFgNACgMQAAgJABgfIAAhCIBFAAIAAADIANgFIAAgCIAvABIgBACIAjAHIgFAPIAFAAIAAAdIACAAIAAAnIACADIgIA0IgGgEQgCAJgEAFQgFAGgHABQgCABgKAAIgegBIAAgFQgLAGgKADIgHABIgEgHQgGADgIAAIgTAAIgBgBIgEAKgAAPApQgHAJgOAHIACADQAKgEAKgLIAEgEIAIgPgAAiA7IALAAIAIAAIABgBIABgFIACgRIAAgNIgcAAIACgLIgFAAIAAACIgBAJIgSAAIABACIAqAAIAAAKQAAALgBACQgBAJgMAAIgCAAgAgrAMIAMAAIAAAbIgBAJQgDAFgFABIAAAFIAJAAIABh6IgdAAIAAAuQABAcgCAOQgBAKgEANIADAEIACgHIAEghIAEAAIAAgBIgEAAIAAgiIAZAAIAAAiIgMAAgAgBAFIgMANIAAAAIADAHIACgDIAHgIIAHgOIAAgFgAAwgJIACADIACAAIAAAEIANAWIACACIABgHIgQgYIAPAAIAAgEIgPAAIgFgaIASAAIAAgDIgOAAIAIgUIgFgBIgIAVIgXAAIAFgYIgGAAIgHAtIgCgEIgEAMIgQAAIAAAEIAQAAIgCADIACAAIACgDgAgHgnIAPAAIgIgXIgEACIAGASIgJAAgAAOgNIAIgaIATAAIABAJIABAEIAEANgAg4gYIAAgjIAZAAIAAAjg");
	this.shape_35.setTransform(241.4,151,2.959,2.959);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#494949").s().p("AgVA5QAAAJgCAEQgDACgFAAIgSAAIgCgVQgDAMgEAKIgTgTQAFgNABgOQACgNAAgcIAAg4IAxAAIAABTQAFgEAFgHIgHAAIAAgWIASAAIADgGIgVAAIAAgXIAGAAIgIgOIAWgIIAHARIADgUIAaABIgEAYIAEAAIAIgWIAYAFIgGARIAKAAIAAAXIgQAAIAAAGIASAAIAAAWIgJAAQAFAIAFAFIgFAeIgGgGIgCASQgBAHgDADQgDAEgDABIgLAAIgVAAIAAgRQgPAQgRAEgAgUA2QAUgGAHgKIgJAAIAAgGIgNANIgFgMgAAcAxIAHABQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgKIgGAAIgGALgAgyAvIAGABIACgBIABgFIAAgRIgHAAgAAxAQIgIgOIgZAAIgIAOIAHAAIAAgLIAaAAIgBALIAJAAgAgvAEIAGAAIAAgOIgGAAgAAbgUIAGAAIgBgGIgDAAgAgvgfIAGAAIAAgPIgGAAg");
	this.shape_36.setTransform(241.6,150.1,2.959,2.959);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#494949").s().p("AgXBUIAAgfIg9AAIAAgrIAEAAIgGgTIAPgFIgPgKIAFgHIAAAAIAAgqIA6AAIAAgKIAwAAIAAAKIA6AAIAAAqIADAEIgNANIAOAGIgHASIAFAAIAAArIg8AAIAAAfgAhAAhIA9AAIAAAfIAIAAIAAgfIA8AAIAAgDIg8AAIAAgaIgIAAIAAAaIg9AAgAgvAAIgOACIABAEIAPgGIgBgBgAAtAAIACAAIANAFIACgDIgNgDIgDAAgAgfgZIAcAXIASgVIgBAAIADgCIAEgEIgCgBIgWAZIgIgIIgKgHIASgTIgCgBIgQATIgHgFIgBgBgAAtgVIACACIALgJIgCgCgAg4gcIAKAJIACgCIgCgCIgJgHgAgcgzIBaAAIAAgCIg5AAIAAgKIgIAAIAAAKIg6AAIAAACIAdAAIACgCg");
	this.shape_37.setTransform(308.2,152.8,2.959,2.959);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#494949").s().p("AgOBKIAAgfIg8AAIAAgXIA8AAIAAgFIgYABIgBgIQgOAGgOAEIgHgUIAYgIIgVgQIAMgPIgMAAIAAgWIA5AAIAAgKIAdAAIAAAKIA5AAIAAAWIgNAAIANAOQgJAJgMAIIAYAIIgJAUIgWgJIACAGIgTADIgCgFIgKAAIAAAHIA8AAIAAAXIg8AAIAAAfgAgngMIADAJIAPgBIgPgLgAALgFIAGAAIgCgEgAAlgGIADgGIgKgKQAKgHAMgMIghAAIATAIIgUAVIAPgEgAgGgVIADACIARgWIgFAAQgIAKgHAKgAgogfIAKgJIAHAGIAGgHIgjAAg");
	this.shape_38.setTransform(308.2,152.8,2.959,2.959);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#494949").s().p("AhYA1IACgFQAFgNACgMQAAgJABgfIAAhCIBFAAIAAADIANgFIAAgCIAvABIgBACIAjAHIgFAPIAFAAIAAAdIACAAIAAAnIACADIgIA0IgGgEQgCAJgEAFQgFAGgHABQgCABgKAAIgegBIAAgFQgLAGgKADIgHABIgEgHQgGADgIAAIgTAAIgBgBIgEAKgAAPApQgHAJgOAHIACADQAKgEAKgLIAEgEIAIgPgAAiA7IALAAIAIAAIABgBIABgFIACgRIAAgNIgcAAIACgLIgFAAIAAACIgBAJIgSAAIABACIAqAAIAAAKQAAALgBACQgBAJgMAAIgCAAgAgrAMIAMAAIAAAbIgBAJQgDAFgFABIAAAFIAJAAIABgJIAAhxIgdAAIAAAuQABAcgCAOQgBAKgEANIADAEIACgHIAEghIAEAAIAAgBIgEAAIAAgiIAZAAIAAAiIgMAAgAgBAFIgMANIAAAAIADAHIACgDIAHgIIAHgOIAAgFgAAwgJIACADIACAAIAAAEIANAWIACACIABgHIgQgYIAPAAIAAgEIgPAAIgFgaIASAAIAAgDIgOAAIAIgUIgFgBIgIAVIgXAAIAFgYIgGAAIgHAtIgCgEIgEAMIgQAAIAAAEIAQAAIgCADIACAAIACgDgAgHgnIAPAAIgIgXIgEACIAGASIgJAAgAAOgNIAIgaIATAAIABAJIABAEIAEANgAg4gYIAAgjIAZAAIAAAjg");
	this.shape_39.setTransform(241.4,154,2.959,2.959);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#494949").s().p("AgVA5QAAAJgCAEQgDACgFAAIgSAAIgCgVQgDAMgEAKIgTgTQAFgNABgOQACgNAAgcIAAg4IAxAAIAABTQAFgEAFgHIgHAAIAAgWIASAAIADgGIgVAAIAAgXIAGAAIgIgOIAWgIIAHARIADgUIAaABIgEAYIAEAAIAIgWIAYAFIgGARIAKAAIAAAXIgQAAIAAAGIASAAIAAAWIgJAAQAFAIAFAFIgFAeIgGgGIgCASQgBAHgDADQgDAEgDABIgLAAIgVAAIAAgRQgPAQgRAEgAgUA2QAUgGAHgKIgJAAIAAgGIgNANIgFgMgAAcAxIAHABQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgKIgGAAIgGALgAgyAvIAGABIACgBIABgFIAAgRIgHAAgAAxAQIgIgOIgZAAIgIAOIAHAAIAAgLIAaAAIgBALIAJAAgAgvAEIAGAAIAAgOIgGAAgAAbgUIAGAAIgBgGIgDAAgAgvgfIAGAAIAAgPIgGAAg");
	this.shape_40.setTransform(241.6,153.1,2.959,2.959);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ApDBRQgiAAgYgYQgYgYAAghQAAggAYgYQAYgYAiAAISHAAQAiAAAYAYQAYAYAAAgQAAAhgYAYQgYAYgiAAgApvgqQgSASAAAYQAAAZASASQASASAaAAISHAAQAZAAATgSQASgSAAgZQAAgYgSgSQgTgSgZAAIyHAAQgaAAgSASg");
	this.shape_41.setTransform(274.8,225,3.648,3.648);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ApDBHQgeAAgVgVQgVgVAAgdQAAgcAVgVQAWgVAdAAISHAAQAdAAAWAVQAVAVAAAcQAAAdgVAVQgWAVgdAAg");
	this.shape_42.setTransform(274.8,225,3.648,3.648);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBB500").s().p("ApDBlQgqAAgegeQgegdAAgqQAAgpAegdQAegeAqAAISHAAQAqAAAeAeQAeAdAAApQAAAqgeAdQgeAegqAAgApggcQgNAMAAAQQAAAQANANQAMAMARAAISHAAQARAAAMgMQANgMAAgRQAAgQgNgMQgMgMgRAAIyHAAQgRAAgMAMg");
	this.shape_43.setTransform(275.1,225.2,3.648,3.648);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EghFAPbQh8ABhWhYIgVgXQgyg8gMhNIgEAAIAAgjIAAgHIAAg6IAAgjIAApnIAAhkIAAiYIAAgwIAAmFIAAgHIAAgIIABAAQAIhqBOhPQBYhXB6AAMBCJAAAQB8AABYBXQBOBPAIBqIABAAIAAAPIAAGFIAAAwIAACYIAABkIAAJgIAAAHIAAAjIAAA6IAAAHIAAAjIgEAAQgOBWg9BCIgIAIQhYBYh8gBg");
	this.shape_44.setTransform(274.8,212.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBB500").s().p("EghFAQkQiZAAhshsQhahbgQh6IgDAAIAAgdIAAgMIAAAAIAAhaIAAgKIAAAAIAAgTIAApNIAAhkIAAiCIAAhGIAAmGIAAgIIAAgGIABAAQAIiJBkhjQBshuCZAAMBCJAAAQCbAABsBuQBkBjAICJIABAAIAAGUIAABGIAACCIAABkIAAJNIAAATIAAAAIAAAKIgBBaIABAAIgBAMIAAAdIgCAAQgPB6hbBbQhsBsibAAgEglxgLCIAAAGIAAGGIAAAwIAACYIAABkIAAJmIAAAjIAAA7IAAAGIAAAjIAEAAQANBNAyA9IAVAWQBVBYB8AAMBCKAAAQB7AABYhYIAIgIQA9hCAOhWIAEAAIAAgjIAAgGIAAg7IAAgjIAAgGIABpgIAAhkIAAiYIAAgwIAAmGIAAgOIgBAAQgJhrhOhPQhYhXh7AAMhCKAAAQh6AAhXBXQhPBPgIBrIgBAAIAAAIg");
	this.shape_45.setTransform(275.1,212.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MC_chokiStart},{t:this.MC_gooStart},{t:this.MC_parStart}]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(184,77,702,621.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;