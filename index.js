


function calculationForFirstInput(e){
   const inputOfFirst = document.getElementById(e);
   const valueOfInputFirstString = inputOfFirst.value;
   const FirstValue = parseFloat(valueOfInputFirstString)
   if(isNaN(FirstValue)){
    return 0
   }else{
    return(FirstValue)
   }




   
}

function calculationForSecondInput(e){
    const inputOfSecond = document.getElementById(e)
    const valueOfInputSecondString = inputOfSecond.value;
    const SecondValue = parseFloat(valueOfInputSecondString);
    if(isNaN(SecondValue)){
        return 0
       }else{
        return(SecondValue)
       }
}

function setAreaHistory(areaType,area){
    const AreaHistory = document.getElementById("Area-Calculation-history");
    const P = document.createElement('p');
    P.classList.add('text-center', 'gap-5',"mt-5")
    const count = AreaHistory.childElementCount
    P.innerHTML = `${count+1} ${areaType} ${area}cm<sup>2</sup> <button class="btn btn-primary">Convert</button>`;

    AreaHistory.appendChild(P);

}

function SetValue(e,areaValue){
    const SetArea = document.getElementById(e);
    SetArea.innerText= areaValue
    console.log(areaValue)

}

document.getElementById("btn-calculation-first").addEventListener("click",function(){
    const inputOfBase = calculationForFirstInput("input-base");
    const inputOfHeight = calculationForSecondInput("input-height");
    const TotalCalculation = 0.5 * inputOfBase * inputOfHeight

    SetValue("Area-Triangle",TotalCalculation)
    setAreaHistory("Triangle: ",TotalCalculation)



})


document.getElementById("btn-calculation-Second").addEventListener("click",function(){
              
     
    const inputOfWidth = calculationForFirstInput("input-Width");
    const inputOfLength = calculationForSecondInput ("input-Length")
    const TotalCalculationSecond =  inputOfLength* inputOfWidth
    SetValue("Area-rectangle",TotalCalculationSecond)
    
    setAreaHistory("rectangle: ",TotalCalculationSecond)
})



document.getElementById("btn-calculation-third").addEventListener("click",function(){
              
     
    const inputOfBase = calculationForFirstInput("input-Base");
    const inputOfHeight = calculationForSecondInput ("input-Height")
    const TotalCalculationThird= inputOfBase * inputOfHeight
    SetValue("Area-parallelogram",TotalCalculationThird)
   
    setAreaHistory("parallelogram: ",TotalCalculationThird)
})


document.getElementById("btn-reset").addEventListener("click", function() {
    location.reload();
});
