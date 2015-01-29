"use strict"

var Schelling =
{
	Size: 10,
	Red: 50,
	Blue: 50,
	Blank: 50,
	Similar: 50,
	Delay: 60
}

Schelling.isSatisfied = function(x,y)
{
	
}

Schelling.adjustCells = function(currentVal)
{
	if(currentVal < Schelling.Size)
	{
		//add cells
	}
	else
	{
		//remove cells
	}
}

Schelling.Populate = function()
{
	for(var i in Schelling.Size)
	{
		$('#board').append('<tr></tr>');
		
		for(var j in Schelling.Size)
		{
			if(Math.floor((Math.random()*2)) == 1)
			{
				$('<td class="red"></td>').appendTo('<tr>');
			}
			else
			{
				$('<td class="blue"></td>').appendTo('<tr>');
			}
		}
	}
}

function start()
{
	$('#size').change(function()
	{
		var currentVal = Schelling.Size;
		Schelling.Size = this.value;
		$('#sizeLabel').html(Schelling.Size + ' X ' + Schelling.Size);

		Schelling.adjustCells(currentVal);
	});
	
	$('#ratio').change(function()
	{
		Schelling.Red = this.value;
		Schelling.Blue=100-this.value;
		$('#redLabel').html(Schelling.Red);
		$('#blueLabel').html(Schelling.Blue);
	});
	
	$('#blank').change(function()
	{
		Schelling.Blank = this.value;
		$('#blankLabel').html(Schelling.Blank);
	});
	
	$('#similar').change(function()
	{
		Schelling.Similar = this.value;
		$('#similarLabel').html(Schelling.Similar);
	});
	
	$('#delay').change(function()
	{
		Schelling.Delay = this.value;
		$('#delayLabel').html(Schelling.Delay);
	});
	
	Schelling.Populate();
}

$(document).ready(start);