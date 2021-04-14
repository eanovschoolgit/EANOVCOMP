Content.makeFrontInterface(800, 500);

const var BlurryBackground = Content.getComponent("BlurryBackground");
BlurryBackground.setPaintRoutine(function(g)
{ 
    g.beginLayer(true);
    g.gaussianBlur(10.0);  /// Play With This 0 To 100
    g.endLayer();
});


const var Eq = Synth.getEffect("Eq");
const var Knob1 = Content.getComponent("Knob1");
const var Knob2 = Content.getComponent("Knob2");
const var Knob3 = Content.getComponent("Knob3");
const var Knob4 = Content.getComponent("Knob4");





inline function onKnob1Control(component, value)
{
	Eq.setAttribute(Eq.Freq, value);
};

Content.getComponent("Knob1").setControlCallback(onKnob1Control);


inline function onKnob2Control(component, value)
{
    Eq.setAttribute(6, value);
};

Content.getComponent("Knob2").setControlCallback(onKnob2Control);



inline function onKnob3Control(component, value)
{
	Eq.setAttribute(11, value);
};

Content.getComponent("Knob3").setControlCallback(onKnob3Control);



inline function onKnob4Control(component, value)
{
	Eq.setAttribute(16, value);
};

Content.getComponent("Knob4").setControlCallback(onKnob4Control);
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
 