
var x = document.getElementById("myAudio"); 

function playAudio(result) { //fungsi play audio
    x.play(); 
} 
function pauseAudio() { //fungsi pause audio
    x.pause();
} 


var i = 0; // Start point
	var images = [];
	var time = 600;
	// Image List
	images[0] = '2.jpg';
	images[1] = '5.jpg';
	images[2] = '6.jpg';
	images[3] = '7.jpg';
	images[4] = '8.jpg';
	images[5] = '9.jpg';
	images[6] = '10.jpg';
	images[7] = '14.jpg';
	images[8] = '15.jpg';
	images[9] = '16.jpg';
	images[10] = '18.jpg';
	images[11] = '25.jpg';
	images[12] = '28.jpg';
	images[13] = '38.jpg';
	images[14] = '41.jpg';
	images[15] = '43.jpg';
	images[16] = '46.jpg';
	images[17] = '50.jpg';
	images[18] = '51.jpg';
	images[19] = '54.jpg';
	images[20] = '55.jpg';
	images[21] = '52.jpg';
	images[22] = '56.jpg';
	images[23] = '57.jpg';
	images[24] = '58.jpg';
	images[25] = '59.jpg';
	images[26] = '61.jpg';
	images[27] = '63.jpg';
	images[28] = '64.jpg';
	
	// Change Image
	function changeImg(){
		document.slide.src = images[i];
		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}
		setTimeout("changeImg()", time);
	}
    window.onload = changeImg;

    