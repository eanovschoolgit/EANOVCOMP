Content.makeFrontInterface(300, 748);


// Create Compressor Gain Reduction Meter


const var leftMeter = Content.getComponent("LeftMeter");


reg timer = Engine.createTimerObject();
timer.setTimerCallback(function()
{
	leftMeter.setValue(Engine.getMasterPeakLevel(0));	

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
 