function CalculatorSum(){
	let number1=parseInt(document.querySelector("#input_1").value)
	let number2=parseInt(document.querySelector("#input_2").value)
	let ans= number1+number2 
	console.log(ans)

	let result=document.querySelector("#Result") 
	result.innerHTML=ans



}



function substrack(){
	let number1=parseInt(document.querySelector("#input_1").value)
	let number2=parseInt(document.querySelector("#input_2").value)
	let ans= number1-number2 
	console.log(ans)

	let result=document.querySelector("#Result")
	result.innerHTML=ans


}


function mult(){
	let number1=parseInt(document.querySelector("#input_1").value)
	let number2=parseInt(document.querySelector("#input_2").value)
	let ans= number1*number2 
	console.log(ans)

	let result=document.querySelector("#Result")
	result.innerHTML=ans

}

function division(){
	let number1=parseInt(document.querySelector("#input_1").value)
	let number2=parseInt(document.querySelector("#input_2").value)
	let ans= number1/number2 
	console.log(ans)

	let result=document.querySelector("#Result")
	result.innerHTML=ans
}




// function CalculatorSum(){
// 	let number1=parseInt(document.querySelector("#input_1").value)
// 	let number2=parseInt(document.querySelector("#input_2").value)
// 	let ans=parseInt(document.querySelector("#Result").value)

// 	if (number1=='') {
// 		("NUMBER1 IS EMPTY")
// 		return false;
// 	}
// 	else if (number2=='') {
// 		("NUMBER2 IS EMPTY")
// 		return false;
// 	}
	
// 	else{

// 	let result=document.querySelector("#Result") 
// 	result.innerHTML=ans;
// 	let ans= number1+number2 
// 	console.log(ans)

	
		 
// 	}
// }