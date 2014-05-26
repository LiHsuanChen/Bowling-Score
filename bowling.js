process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    
    //Put input all together into an array
    var array = input.split("\n");
    
    //Parse all input in array into integers
    array.forEach( function(val, index){
		array[index] = parseInt(val);
	});
    
    //Start counting
    main(array);
});

function main(array){
    
    //Score starts from 0
	var score = 0;
    //Ten frames
	var frame = 10;
    
    //Iterate through numbers of balls
	for( var i = 1; i <= array[0] ; i++ ){
		//If we are at the first 9 frames
        if ( frame > 1 ){
			//If it is a STRIKE
			if ( array[i] === 10 && (frame % 1 === 0 ) ){
				score += array[i];
				score += array[i+1];
				score += array[i+2];
				frame -= 1;

			}
            //If it is a SPARE
			else if ( array[i] + array[i+1] === 10 && (frame % 1 === 0 ) ){
				score += array[i];
				score += array[i+2];
				frame -= 0.5;

			}
            //If it's just normal
			else {
				score += array[i];
				frame -= 0.5;

			}
		}
        //If we are at the last frame
		else if ( frame === 1 ) {
            //If it is a STRIKE or SPARE (Don't matter, they all have 3 scores to count)
			if ( array[i] === 10 || array[i] + array[i+1] === 10 ){
				score += array[i];
				score += array[i+1];
				score += array[i+2];
				break;
			}
            //If it's just a normal frame
			else{
				score += array[i];
				score += array[i+1];
				break;
			}
		}
	}

	console.log(score);

}