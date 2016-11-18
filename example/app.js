
// TiScreenRecorder : example app. 
// @kosso : November 2016


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var label = Ti.UI.createLabel({
	text: 'ready',
	backgroundColor: '#99ffffff',
	color: '#333',
	width: Ti.UI.SIZE,
	borderRadius: 6,
	bottom: 5,
	left: 5,
	zIndex: 10
});

win.add(label);

var screenrecorder = require('com.kosso.tiscreenrecorder');

var isRecording = false;


var btn_rec = Ti.UI.createButton({
	  title: ' o ',
	  width: 30,
	  bottom: 5,
	  zIndex: 10,
	  height: 30,
	  borderRadius: 15,
	  color: 'white',
	  tintColor: 'white',
	  textAlign: 'center',
	  backgroundColor: '#990000'
});

btn_rec.addEventListener('click', function(){

	if(isRecording){
		screenrecorder.stopRecording();
		label.text = 'stopped';
	  	setTimeout(function(){
	  		label.text = 'ready';
	  	}, 3000);
	 	// TODO : Fire 'done' event from module when done...

	} else {
	 	screenrecorder.startRecording();
	 	label.text = 'recording';
		
	}
	isRecording = !isRecording;
});

// Just something to record... 

var wv = Ti.UI.createWebView({
	url : 'http://www.bbc.co.uk/news',
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	backgroundColor: '#eee',
	zIndex: 1
});

win.add(wv);
win.add(btn_rec);

win.open();
