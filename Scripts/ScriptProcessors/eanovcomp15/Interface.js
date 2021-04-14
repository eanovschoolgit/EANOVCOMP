Content.makeFrontInterface(300, 748);


// Create Compressor Gain Reduction Meter

const var Dynamics = Synth.getEffect("Dynamics");
const var Knob1 = Content.getComponent("Knob1");
const var Reduction = Content.getComponent("Reduction");

const var Knob2 = Content.getComponent("Knob2");
const var EQ = Synth.getEffect("EQ");



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
const var Button4 = Content.getComponent("Button4");
const var Button3 = Content.getComponent("Button3");
const var Button2 = Content.getComponent("Button2");
const var Button5 = Content.getComponent("Button5");
const var Button6 = Content.getComponent("Button6");
const var Button7 = Content.getComponent("Button7");
const var Button8 = Content.getComponent("Button8");
const var Panel1 = Content.getComponent("Panel1");
const var preset = Content.getComponent("preset");
const var Panel2 = Content.getComponent("Panel2");





inline function onpresetControl(component, value)
{
	Panel2.showControl(value);
};

Content.getComponent("preset").setControlCallback(onpresetControl);



inline function onButton7Control(component, value)
{
	Button8.setValue(value);
	Button8.changed();
};

Content.getComponent("Button7").setControlCallback(onButton7Control);




inline function onButton3Control(component, value)
{
	Button5.setValue(value);
	Button5.changed();
};

Content.getComponent("Button3").setControlCallback(onButton3Control);



inline function onButton2Control(component, value)
{
	Button6.setValue(value);
	Button6.changed();
	Panel1.showControl(value);

};

Content.getComponent("Button2").setControlCallback(onButton2Control);





inline function onButton1Control(component, value)
{
	Button4.setValue(value);
	Button4.changed();

	
};

Content.getComponent("Button1").setControlCallback(onButton1Control);

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
 