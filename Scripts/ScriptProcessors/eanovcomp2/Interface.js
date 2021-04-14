Content.makeFrontInterface(800, 450);


// Create Compressor Gain Reduction Meter
const var ParametriqEQ1 = Synth.getEffect("Parametriq EQ1");
const var Dynamics = Synth.getEffect("Dynamics");
const var Knob1 = Content.getComponent("Knob1");
const var Reduction = Content.getComponent("Reduction");
const var SimpleGain1 = Synth.getEffect("Simple Gain1");
const var master = Synth.getEffect("master");
const var Knob2 = Content.getComponent("Knob2");




inline function onButton7Control(component, value)
{
	
	Dynamics.setBypassed(value);
	SimpleGain1.setBypassed(value);
	master.setBypassed(value);
};

Content.getComponent("Button7").setControlCallback(onButton7Control);



inline function onKnob2Control(component, value)
{
	Dynamics.setAttribute(Dynamics.CompressorThreshold, value);
};

Content.getComponent("Knob2").setControlCallback(onKnob2Control);



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

const var monoMeter = Content.getComponent("monoMeter");
const var SimpleGain2 = Synth.getEffect("SimpleGain2");

reg timer = Engine.createTimerObject();
reg newValue, value;

timer.setTimerCallback(function()
{
      newValue = SimpleGain2.getCurrentLevel(0) > SimpleGain2.getCurrentLevel(1) ? SimpleGain2.getCurrentLevel(0) : SimpleGain2.getCurrentLevel(1);
      value = (newValue > value) ? newValue : value * 0.95;
      monoMeter.setValue(value);

});
timer.startTimer(30);




// control parametre analog //
const var Button1 = Content.getComponent("Button1");

const var Button3 = Content.getComponent("Button3");
const var Button2 = Content.getComponent("Button2");


const var Button7 = Content.getComponent("Button7");

const var Panel1 = Content.getComponent("Panel1");
const var preset = Content.getComponent("preset");
const var Panel2 = Content.getComponent("Panel2");

const var Button4 = Content.getComponent("Button4");







inline function onpresetControl(component, value)
{
	Panel2.showControl(value);
};

Content.getComponent("preset").setControlCallback(onpresetControl);










inline function onButton2Control(component, value)
{

	Panel1.showControl(value);
    Button4.setValue(value);
    Button4.changed();

};

Content.getComponent("Button2").setControlCallback(onButton2Control);






// open web site //


const var Button9 = Content.getComponent("Button9");


inline function onButton9Control(component, value)
{
    Engine.openWebsite("https://www.eanovschool.com");
};

Content.getComponent("Button9").setControlCallback(onButton9Control);

}







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
 