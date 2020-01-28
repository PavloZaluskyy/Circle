function Random(){
	return Math.floor(Math.random() * 10);
}
function VueMarker2(){
	var rand =  Random();
	switch(rand){
		case 0: hideMarker2("#s1");break;
		case 2: hideMarker2("#s2");break;
		case 3: hideMarker2("#s3");break;
		case 4: hideMarker2("#s4");break;
		case 5: hideMarker2("#s5");break;
		case 6: hideMarker2("#s6");break;
		case 7: hideMarker2("#s7");break;
		case 8: hideMarker2("#s8");break;
		case 9: hideMarker2("#s9");break;
	}
}

function hideMarker2( gridID){
	$(gridID).append('<div class="marker2"></div>');
}
function showMarker2(){
	$(".marker2").remove();
}

function animateHorizen(){
	$('.horizen').addClass('animate_horizen');
}
function showHorizen(){
	$('.horizen').removeClass('animate_horizen');
}
function animatePower(){

}

function Play(){
	var  counter = -1;
	$(".marker").click(function(){
		counter++;
		if (counter >3) {counter = 0;}
		switch(counter){
		case 0: {console.log("0"); VueMarker2(); animateHorizen(); break};
		case 1: {console.log("1"); showHorizen();  break};
		case 2: {console.log("2"); showMarker2(); break};
		case 3: {console.log("3"); animatePower(); break};
	}
	});
	
	
	/*console.log("Starts function Pla()");
	var  counter = -1;
	var iteration = true;
	console.log("In while"+ counter);
		if(iteration == true){
			console.log("In while"+ counter);
			$(".marker").click(function(){
				if (counter == -1){
					VueMarker2();
					animateHorizen();
					console.log("Set horizen");
					counter = 0;
					console.log("2:"+ counter);
					$('.marker').click(function(){
						if(counter == 0){
							showHorizen();
							counter = -1;
							showMarker2();
							iteration = false;
							console.log("last counter" + counter);
						}
					});
				}iteration = false;
				console.log("iteration " + iteration);
			});

		} //else iteration
		//iteration = false;
		console.log("iteration " + iteration);*/
	}

	/*console.log("Starts function Pla()");
	var counter = -1;
	console.log("1:"+ counter);
		$(".marker").click(function(){
			if (counter == -1){
			VueMarker2();
			animateHorizen();
			console.log("Set horizen");
			//setTimeout(console.log("adas"), 1000);
			counter = 0;
			console.log("2:"+ counter);
			$('.marker').click(function(){
			
				console.log("2/1:"+ counter);
				if(counter == 0){
				
					showHorizen();
					counter = 1;
					console.log("3:"+ counter);
					counter = -1;
					console.log('4' + counter);
					showMarker2();
					//Play();
			};	
		});
			
		};
		});*/

/*$(".marker").click(function(){
	counter = 0;
	console.log("2:"+ counter);
	 animateHorizen();
	 if (counter == 0){
	 	VueMarker2();
	 	console.log("3:"+ counter);
	 	$('.marker').click(function(){
	 		counter = 1;
	 		console.log("4:"+ counter);
	 		showHorizen();
	 	})
	 } 
	//setTimeout(showMarker2, 1000);
});*/



Play();

