(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG1 = function() {
	this.initialize(img.BG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BG2 = function() {
	this.initialize(img.BG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,21);


(lib.KUOTA24JAM = function() {
	this.initialize(img.KUOTA24JAM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,36);


(lib.Lockup = function() {
	this.initialize(img.Lockup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,50);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,460);


(lib.NOMORAKTIF = function() {
	this.initialize(img.NOMORAKTIF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,37);


(lib.OFFER = function() {
	this.initialize(img.OFFER);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,55);


(lib.shine = function() {
	this.initialize(img.shine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,139);


(lib.SINYALKUAT = function() {
	this.initialize(img.SINYALKUAT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,43);


(lib.smoke = function() {
	this.initialize(img.smoke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,239);


(lib.Talent = function() {
	this.initialize(img.Talent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,272);


(lib.tap = function() {
	this.initialize(img.tap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,122);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,55);


(lib.Topi = function() {
	this.initialize(img.Topi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,109);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zee_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Talent();
	this.instance.setTransform(-111,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zee_mc, new cjs.Rectangle(-111,-272,222,272), null);


(lib.voucher_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.OFFER();
	this.instance.setTransform(-119.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.voucher_mc, new cjs.Rectangle(-119.5,-55,239,55), null);


(lib.txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text();
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-100,-55,200,55), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib.smoke_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.smoke();
	this.instance.setTransform(-159.5,-239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smoke_1, new cjs.Rectangle(-159.5,-239,319,239), null);


(lib.sinyal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SINYALKUAT();
	this.instance.setTransform(-21,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sinyal, new cjs.Rectangle(-21,-43,42,43), null);


(lib.mc_topi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Topi();
	this.instance.setTransform(-160,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_topi, new cjs.Rectangle(-160,-109,320,109), null);


(lib.mc_shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine();
	this.instance.setTransform(-87.5,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_shine, new cjs.Rectangle(-87.5,-139,175,139), null);


(lib.kuota = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.KUOTA24JAM();
	this.instance.setTransform(-21.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kuota, new cjs.Rectangle(-21.5,-36,43,36), null);


(lib.ins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tap();
	this.instance.setTransform(-112,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ins, new cjs.Rectangle(-112,-122,224,122), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CTA();
	this.instance.setTransform(-94.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-94.5,-21,189,21), null);


(lib.bg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG2();
	this.instance.setTransform(-411.55,-1234.7,2.5723,2.5723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-411.5,-1234.7,823.1,1234.7), null);


(lib.bg1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(0,0,320,480), null);


(lib.aneh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Lockup();
	this.instance.setTransform(-83,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aneh, new cjs.Rectangle(-83,-50,166,50), null);


(lib.aktif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NOMORAKTIF();
	this.instance.setTransform(-22,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aktif, new cjs.Rectangle(-22,-37,44,37), null);


(lib.zee = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.zee_mc();
	this.instance.setTransform(0,-136,1,1,0,0,0,0,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.089,scaleY:1.089,y:-131},69).to({scaleX:1,scaleY:1,y:-136},74).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,-279.1,241.8,296.20000000000005);


(lib.topi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_topi();
	this.instance.setTransform(160,99.4,1,1,0,0,0,0,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({regY:-9.5,scaleY:1.0603,y:99.5},10).to({regY:-9.6,scaleY:1,y:99.4},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,320,115.6);


(lib.shine_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_shine();
	this.instance.setTransform(0,-69.5,1,1,0,0,0,0,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7251},23).to({scaleX:1},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-139,175,139);


(lib.mc_sinya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sinyal();
	this.instance.setTransform(0,-21.6,0.8524,0.8524,0,0,0,0,-21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-21.5,scaleX:1,scaleY:1,y:-21.5},47).to({regY:-21.6,scaleX:0.8524,scaleY:0.8524,y:-21.6},47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-43,42,43);


(lib.mc_kuota = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kuota();
	this.instance.setTransform(0,-18,1,1,0,0,0,0,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-17.9,scaleX:1.1722,scaleY:1.1722,y:-17.9},47).to({regY:-18,scaleX:1,scaleY:1,y:-18},47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-39.1,50.4,42.2);


(lib.mc_aktif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.aktif();
	this.instance.setTransform(0,-18.5,1,1,0,0,0,0,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-18.4,scaleX:1.0932,scaleY:1.0932,y:-18.4},47).to({regY:-18.5,scaleX:1,scaleY:1,y:-18.5},47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-38.7,48.1,40.400000000000006);


(lib.kupon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.voucher_mc();
	this.instance.setTransform(0,-27.5,1,1,0,0,0,0,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({rotation:1.4497,x:0.05,y:-27.55},13).to({rotation:0,x:0,y:-27.5},12).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.1,-58,240.39999999999998,61);


// stage content:
(lib.RMB_byU = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {scene02:34};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [14,29,99,139];
	// timeline functions:
	this.frame_14 = function() {
		this.tap.alpha = 0.05;
		
		const root = this;
		this.tap.addEventListener("click", function() {
		    root.gotoAndPlay("scene02");
		});
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.lp.alpha = 0.05;
		
		this.lp.addEventListener("click", function() {
				    window.open("https://www.byu.id/", "_blank");  // Replace with the desired URL
			});
	}
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(70).call(this.frame_99).wait(40).call(this.frame_139).wait(1));

	// Layer_17
	this.tap = new lib.stageBtn();
	this.tap.name = "tap";
	this.tap.setTransform(160.45,242.05,0.9554,2.7915,0,0,0,0.4,0.8);

	this.lp = new lib.stageBtn();
	this.lp.name = "lp";
	this.lp.setTransform(160.45,242.05,0.9554,2.7915,0,0,0,0.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tap}]},14).to({state:[]},16).to({state:[{t:this.lp}]},69).wait(41));

	// Layer_5
	this.instance = new lib.Logo();
	this.instance.setTransform(12,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// Layer_4
	this.instance_1 = new lib.ins();
	this.instance_1.setTransform(160.1,182.95,1.1875,1.1875,0,0,0,0.1,-61);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:160,y:183,alpha:1},10).to({_off:true},10).wait(106));

	// Layer_15
	this.instance_2 = new lib.kupon();
	this.instance_2.setTransform(160.5,393.5,1,1,0,0,0,0,-27.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({regX:0.1,scaleX:1.231,scaleY:1.231,x:160.6,alpha:1},10).to({regX:0,scaleX:1,scaleY:1,x:160.5},5).wait(26));

	// Layer_16
	this.instance_3 = new lib.cta();
	this.instance_3.setTransform(160.6,414.45,0.7667,0.7667,0,0,0,0.1,-10.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:160.5,y:426.5},10).wait(21));

	// Layer_14
	this.instance_4 = new lib.mc_aktif();
	this.instance_4.setTransform(192.85,186.55,0.5,0.5,0,0,0,0,-18.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({scaleX:1,scaleY:1,x:216,y:175.5,alpha:1},10).wait(31));

	// Layer_12
	this.instance_5 = new lib.mc_sinya();
	this.instance_5.setTransform(163.05,187.8,0.5698,0.5698,0,0,0,0.1,-21.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({regX:0,regY:-21.5,scaleX:1,scaleY:1,x:163,y:178.5,alpha:1},10).wait(41));

	// Layer_13
	this.instance_6 = new lib.mc_kuota();
	this.instance_6.setTransform(133.65,191.2,0.5,0.5,0,0,0,0,-18);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).to({scaleX:1,scaleY:1,x:109.5,y:185,alpha:1},10).wait(51));

	// Layer_11
	this.instance_7 = new lib.txt();
	this.instance_7.setTransform(160.05,142.4,0.5327,0.5327,0,0,0,0.1,-27.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,x:160.1,y:129.6,alpha:1},10).to({regX:0,regY:-27.5,scaleX:1,scaleY:1,x:160,y:129.5},5).wait(56));

	// Layer_10
	this.instance_8 = new lib.aneh();
	this.instance_8.setTransform(160,89.85,0.32,0.32,0,0,0,0,-25);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({scaleX:1.062,scaleY:1.062,y:76.95,alpha:1},10).to({scaleX:1,scaleY:1,y:77},5).wait(66));

	// Layer_2
	this.instance_9 = new lib.topi();
	this.instance_9.setTransform(160,337.5,1,1,0,0,0,160,54.5);
	var instance_9Filter_1 = new cjs.ColorFilter(0,0,0,1,0,0,0,0);
	this.instance_9.filters = [instance_9Filter_1];
	this.instance_9.cache(-2,-8,324,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({y:219.3},10).wait(10).to({regX:160.1,regY:54.8,scaleX:0.4863,scaleY:0.4863,x:163.35,y:219.25},5).to({alpha:0},3).to({_off:true},2).wait(76));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 9).wait(25).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 10).wait(94));

	// Layer_9
	this.instance_10 = new lib.smoke_1();
	this.instance_10.setTransform(171.5,168.25,0.5006,0.5071,0,0,0,1,-239.7);
	this.instance_10.alpha = 0;
	this.instance_10.compositeOperation = "screen";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},0).to({regX:1.1,scaleX:1.539,scaleY:1.8735,x:169.7,y:163.45,alpha:1},10).to({regY:-239.5,scaleX:1.9119,scaleY:2.3274,x:169.05,y:186.6,alpha:0},5).to({_off:true},5).wait(76));

	// Layer_8
	this.instance_11 = new lib.shine_1();
	this.instance_11.setTransform(163.5,393.45,1,0.1353,0,0,0,0,-69.5);
	this.instance_11.alpha = 0;
	this.instance_11.compositeOperation = "screen";
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).to({regY:-69.2,scaleX:1.504,scaleY:1.6845,y:377.35,alpha:1},10).wait(10).to({regX:0.2,regY:-68.9,scaleX:1.1303,scaleY:3.74,x:165.55,y:504.2,alpha:0},5).to({_off:true},5).wait(76));

	// Layer_7
	this.instance_12 = new lib.zee();
	this.instance_12.setTransform(160,207.45,0.2554,0.2554,0,0,0,0,-272.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).to({regX:1.2,regY:-271.2,scaleX:1,scaleY:1,x:161.2,y:208.8},5).wait(81));

	// Layer_6
	this.instance_13 = new lib.bg2();
	this.instance_13.setTransform(155.45,-81.25,0.943,0.943,0,0,0,0.1,-617.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({_off:false},0).to({regY:-617.3,scaleX:0.3887,scaleY:0.3887,x:160.05,y:240.05,alpha:1},15).wait(81));

	// Layer_1
	this.instance_14 = new lib.bg1();
	this.instance_14.setTransform(160,240,1,1,0,0,0,160,240);
	var instance_14Filter_2 = new cjs.ColorFilter(0,0,0,1,0,0,0,0);
	this.instance_14.filters = [instance_14Filter_2];
	this.instance_14.cache(-2,-2,324,484);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:true},25).wait(81));
	this.timeline.addTween(cjs.Tween.get(instance_14Filter_2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 9).wait(106));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgajgnDMA1HAAAMAAABOHMg1HAAAg");
	this.shape.setTransform(160,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgajAnEMAAAhOHMA1HAAAMAAABOHg");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(140));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_9, startFrame:1, endFrame:9, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:0, endFrame:0, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:10, endFrame:34, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:35, endFrame:44, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:45, endFrame:54, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:55, endFrame:59, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:60, endFrame:62, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:63, endFrame:64, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_9, startFrame:64, endFrame:140, x:-2, y:-8, w:324, h:120});
	this.filterCacheList.push({instance: this.instance_14, startFrame:1, endFrame:9, x:-2, y:-2, w:324, h:484});
	this.filterCacheList.push({instance: this.instance_14, startFrame:0, endFrame:0, x:-2, y:-2, w:324, h:484});
	this.filterCacheList.push({instance: this.instance_14, startFrame:34, endFrame:34, x:-2, y:-2, w:324, h:484});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-423.4,616.2,1185.3);
// library properties:
lib.properties = {
	id: '0801E7C88BF38149BD42527725D1AB28',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG1.jpg", id:"BG1"},
		{src:"images/BG2.png", id:"BG2"},
		{src:"images/CTA.png", id:"CTA"},
		{src:"images/KUOTA24JAM.png", id:"KUOTA24JAM"},
		{src:"images/Lockup.png", id:"Lockup"},
		{src:"images/Logo.png", id:"Logo"},
		{src:"images/NOMORAKTIF.png", id:"NOMORAKTIF"},
		{src:"images/OFFER.png", id:"OFFER"},
		{src:"images/shine.png", id:"shine"},
		{src:"images/SINYALKUAT.png", id:"SINYALKUAT"},
		{src:"images/smoke.png", id:"smoke"},
		{src:"images/Talent.png", id:"Talent"},
		{src:"images/tap.png", id:"tap"},
		{src:"images/text.png", id:"text"},
		{src:"images/Topi.png", id:"Topi"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0801E7C88BF38149BD42527725D1AB28'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;