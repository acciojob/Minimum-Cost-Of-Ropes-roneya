
function calculateMinCost() {

  var inputData = document.querySelector("#rope-lengths").value;
  var inputArr = inputData.split(",");

  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = Number(inputArr[i]);
  }
  var cost = 0;

  while (inputArr.length > 1) {
    var newRope = inputArr[0] + inputArr[1];
    cost += newRope;

    inputArr.splice(0, 2);
    inputArr.push(newRope);
  
  }
	

const resultDiv = document.getElementById("#result");


resultDiv.innerHTML = cost;
  
}

