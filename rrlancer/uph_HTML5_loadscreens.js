// Author:			Dytlief Moller
// Project:			HTML5 only
// Description:		Thank you for purchasing! Use or modify these 10 styles to your liking.

// Reused functions
function Deg2Rad(_deg) 
{ 
	return _deg * (Math.PI / 180.0); 
}

// ------------------------------------------------------------------------------------------------------------------ custom 01
function HTML5_loadscreen01(_graphics, _width, _height, _total, _current, _loadingscreen)
{
// Load bar
    var barwidth = (_width/2);
    var barheight = 10;
    var x = (_width - barwidth) / 2;
    var y = (_height/2) + 50;
    var w = (barwidth / _total) * _current;
    var border = 0;
    var border_color = "rgb(255,255,255)";
    var bar_bg = "rgb(0,51,51)";
    var progress_bg = "rgb(0,255,255)";
// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

    if (_current != 0)
    {
        _graphics.fillStyle = border_color;
        _graphics.fillRect(x-border, y-border, barwidth+(border*2), barheight+(border*2) );
        _graphics.fillStyle = bar_bg;
        _graphics.fillRect(x, y, barwidth, barheight);
        _graphics.fillStyle = progress_bg;
        _graphics.fillRect(x, y, w, barheight);
	}
	_graphics.fillStyle = "rgb(0,255,255)";
	_graphics.font = "26px Arial";
	_graphics.textAlign = "center";
	_graphics.fillText("LOADING", (_width*0.5), (_height*0.5) + 20);
}


// ------------------------------------------------------------------------------------------------------------------ custom 02
function HTML5_loadscreen02(_graphics, _width, _height, _total, _current, _loadingscreen)
{
// Load bar
    var barwidth = (_width * 0.7);
    var barheight = 35;
    var x = (_width - barwidth) / 2;
    var y = (_height/2) + 50;
    var w = (barwidth / _total) * _current;
    var border = 1;
    var border_color = "rgb(128,128,128)";
    var bar_bg = "rgb(20,20,20)";
    var progress_bg = "rgb(255,255,255)";
// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

    if (_current != 0)
    {
        _graphics.fillStyle = border_color;
        _graphics.fillRect(x-border, y-border, barwidth+(border*2), barheight+(border*2) );
        _graphics.fillStyle = bar_bg;
        _graphics.fillRect(x, y, barwidth, barheight);
        _graphics.fillStyle = progress_bg;
        _graphics.fillRect(x, y, w, barheight);
	}
	_graphics.fillStyle = "rgb(255,255,255)";
	_graphics.font = "40px Arial";
	_graphics.textAlign = "center";
	_graphics.fillText("L O A D I N G", (_width*0.5), (_height*0.5) );
}


// ------------------------------------------------------------------------------------------------------------------ custom 03
function HTML5_loadscreen03(_graphics, _width, _height, _total, _current, _loadingscreen)
{
// Load bar
    var barwidth = (_width*0.8);
    var barheight = 2;
    var x = (_width - barwidth) / 2;
    var y = (_height/2) + 50;
    var w = (barwidth / _total) * _current;
    var border = 0;
    var border_color = "rgb(0,0,0)";
    var bar_bg = "rgb(102,51,0)";
    var progress_bg = "rgb(255,153,0)";
// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

    if (_current != 0)
    {
        _graphics.fillStyle = border_color;
        _graphics.fillRect(x-border, y-border, barwidth+(border*2), barheight+(border*2) );
        _graphics.fillStyle = bar_bg;
        _graphics.fillRect(x, y, barwidth, barheight);
        _graphics.fillStyle = progress_bg;
        _graphics.fillRect(x, y, w, barheight);
	}
	_graphics.fillStyle = "rgb(255,153,0)";
	_graphics.font = "14px Courier";
	_graphics.textAlign = "center";
	_graphics.fillText("Loading...", (_width*0.5), (_height*0.5) );
}


// ------------------------------------------------------------------------------------------------------------------ custom 04
function HTML5_loadscreen04(_graphics, _width, _height, _total, _current, _loadingscreen) 
{
	var segments = 360/_total;
	var total = segments*_current;
	var rad = _width;
	if( _width>_height ) rad=_height;

// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

	_graphics.beginPath();
	_graphics.lineWidth = 60;
	_graphics.strokeStyle = "rgb(255,0,0)";
	_graphics.arc( _width/2, _height/2, (rad/5), Deg2Rad(360), Deg2Rad(0), false);
	_graphics.stroke();
	
	_graphics.beginPath();
	_graphics.lineWidth = 40;
	_graphics.strokeStyle = "rgb(255,255,255)";
	_graphics.arc( _width/2, _height/2, (rad/5), Deg2Rad(180), Deg2Rad(total), false);
	_graphics.stroke();
}


// ------------------------------------------------------------------------------------------------------------------ custom 05
function HTML5_loadscreen05(_graphics, _width, _height, _total, _current, _loadingscreen) 
{
	var segments = 180/_total;
	var total = segments*_current;
	var rad = _width;
	if( _width>_height ) rad=_height;

	// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

	_graphics.beginPath();
	_graphics.lineWidth = (_width/4);
	_graphics.strokeStyle = "rgb(0,64,0)";
	_graphics.arc( _width/2, _height/2, (rad/3), Deg2Rad(180), Deg2Rad(total), false);
	_graphics.stroke();

	_graphics.fillStyle = "rgb(0,128,0)";
	_graphics.font = "32px Tahoma";
	_graphics.textAlign = "center";
	_graphics.fillText("Fetching things...", (_width*0.5), (_height*0.5) );
	
}


// ------------------------------------------------------------------------------------------------------------------ custom 06
function HTML5_loadscreen06(_graphics, _width, _height, _total, _current, _loadingscreen) 
{
	var segments = 360/_total;
	var total = segments*_current;
	var rad = _width;
	if( _width>_height ) rad=_height;

	// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }
	
	_graphics.beginPath();
	_graphics.lineWidth = 10;
	_graphics.strokeStyle = "rgb(0,128,0)";
	_graphics.arc( _width/2, _height/2, (rad/2), Deg2Rad(0), Deg2Rad(total), false);
	_graphics.stroke();
	
	_graphics.beginPath();
	_graphics.lineWidth = 15;
	_graphics.strokeStyle = "rgb(0,110,0)";
	_graphics.arc( _width/2, _height/2, (rad/3), Deg2Rad(90), Deg2Rad(total), true);
	_graphics.stroke();
	
	_graphics.beginPath();
	_graphics.lineWidth = 10;
	_graphics.strokeStyle = "rgb(0,140,0)";
	_graphics.arc( _width/2, _height/2, (rad/4), Deg2Rad(180), Deg2Rad(total), false);
	_graphics.stroke();
	
	_graphics.beginPath();
	_graphics.lineWidth = 20;
	_graphics.strokeStyle = "rgb(0,106,0)";
	_graphics.arc( _width/2, _height/2, (rad/5), Deg2Rad(270), Deg2Rad(total), true);
	_graphics.stroke();

	_graphics.fillStyle = "rgb(0,255,0)";
	_graphics.font = "32px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("Loading Assets...", (_width*0.5), (_height*0.5) );
}


// ------------------------------------------------------------------------------------------------------------------ custom 07
function HTML5_loadscreen07(_graphics, _width, _height, _total, _current, _loadingscreen) 
{
	var segments = 180/_total;
	var total = segments*_current;
	var rad = _width;
	if( _width>_height ) rad=_height;

	// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }
	
	_graphics.beginPath();
	_graphics.lineWidth = 250;
	_graphics.strokeStyle = "rgba(128,128,255,30)";
	_graphics.arc( (_width/2), (_height/2), (rad/2), Deg2Rad(0), Deg2Rad(total), false);
	_graphics.stroke();
	
	_graphics.beginPath();
	_graphics.lineWidth = 200;
	_graphics.strokeStyle = "rgba(0,50,255,40)";
	_graphics.arc( (_width/2), (_height/2), (rad/2), Deg2Rad(0), Deg2Rad(total), false);
	_graphics.stroke();
	
	_graphics.beginPath();
	_graphics.lineWidth = 150;
	_graphics.strokeStyle = "rgba(0,140,255,35)";
	_graphics.arc( (_width/2), (_height/2), (rad/2), Deg2Rad(0), Deg2Rad(total), false);
	_graphics.stroke();

	_graphics.fillStyle = "rgba(0,128,255,60)";
	_graphics.font = "128px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("SMILE", (_width*0.5), (_height*0.5) );
}

// ------------------------------------------------------------------------------------------------------------------ custom 08
function HTML5_loadscreen08(_graphics, _width, _height, _total, _current, _loadingscreen) 
{
	var segments = 180/_total;
	var total = segments*_current;
	var rad = _width;
	if( _width>_height ) rad=_height;

	// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }
	
	_graphics.beginPath();
	_graphics.lineWidth = 50;
	_graphics.strokeStyle = "rgb(0,0,255)";
	_graphics.arc( (_width/2)-350, (_height/2), (rad/10), Deg2Rad(total - 90), Deg2Rad(total), false);
	_graphics.stroke();
	
	_graphics.beginPath();
	_graphics.lineWidth = 40;
	_graphics.strokeStyle = "rgb(0,0,0)";
	_graphics.arc( (_width/2)-350, (_height/2), (rad/10), Deg2Rad(0), Deg2Rad(360), false);
	_graphics.stroke();

	_graphics.fillStyle = "rgb(0,0,255)";
	_graphics.font = "64px Arial";
	_graphics.textAlign = "center";
	_graphics.fillText("WAIT A MOMENT", (_width*0.5)+ 20, (_height*0.5) + 20);
}

// ------------------------------------------------------------------------------------------------------------------ custom 09
function HTML5_loadscreen09(_graphics, _width, _height, _total, _current, _loadingscreen) 
{
	// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);
	
	if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

	_graphics.fillStyle = "rgb(255,0,255)";
	_graphics.font = "64px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("STARTING", (_width*0.5), (_height*0.5));
	_graphics.fillStyle = "rgb(128,0,128)";
	_graphics.fillText("♥", (_current + 40)*_current, (_height*0.5)+50);

}
// ------------------------------------------------------------------------------------------------------------------ custom 10
function HTML5_loadscreen10(_graphics, _width, _height, _total, _current, _loadingscreen) 
{
	// Background
    var window_bgd = "rgb(0,0,0)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0
// U.r.l. logo (blank "" just skips it from showing)
    var mylogo = new Image();
    mylogo.src = "";
    var imgheight = 200;
    var imgwidth = 300;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }
    
    if  (mylogo.src!="") 
	{
        _graphics.drawImage(mylogo, fromside, fromtop, imgwidth, imgheight);
    }

	_graphics.fillStyle = "rgb(255,0,255)";
	_graphics.font = "128px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("♥", (_current + 5)*_current, (_height*0.5)-50);
	
	_graphics.fillStyle = "rgb(255,0,200)";
	_graphics.font = "112px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("♥", (_current + 10)*_current, (_height*0.5)-30);
	
	_graphics.fillStyle = "rgb(255,0,155)";
	_graphics.font = "80px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("♥", (_current + 20)*_current, (_height*0.5));
	
	_graphics.fillStyle = "rgb(255,0,100)";
	_graphics.font = "64px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("♥", (_current + 30)*_current, (_height*0.5)+20);
	
	_graphics.fillStyle = "rgb(255,0,55)";
	_graphics.font = "40px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("♥", (_current + 40)*_current, (_height*0.5)+50);
	
	_graphics.fillStyle = "rgb(255,0,0)";
	_graphics.font = "32px Impact";
	_graphics.textAlign = "center";
	_graphics.fillText("♥", (_current + 50)*_current, (_height*0.5)+100);
}