Content.makeFrontInterface(300, 748);


// Create Compressor Gain Reduction Meter

const var Dynamics = Synth.getEffect("Dynamics");
const var Knob1 = Content.getComponent("Knob1");
const var Reduction = Content.getComponent("Reduction");



const var t = Engine.createTimerObject();
t.setTimerCallback(function()
{
	var v = Dynamics.getAttribute(Dynamics.CompressorReduction);
	
	v = Engine.getDecibelsForGainFactor(v);
	
	Reduction.setValue(v);
});

t.startTimer(30);






const var CB = Content.getComponent("CB");
const var filter = Synth.getEffect("filter");



inline function onCBControl(component, value)
{
	var filterVal = component.getItemText();
	filter.setAttribute(filter.Frequency, filterVal);

};

Content.getComponent("CB").setControlCallback(onCBControl);



// vu meter master //

const var leftMeter = Content.getComponent("leftMeter");
const var rightMeter = Content.getComponent("rightMeter");

reg timer = Engine.createTimerObject();
timer.setTimerCallback(function()
{
	leftMeter.setValue(Engine.getMasterPeakLevel(0));	
	rightMeter.setValue(Engine.getMasterPeakLevel(1));	

});


timer.startTimer(30);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 