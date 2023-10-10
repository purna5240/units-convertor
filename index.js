
let reqUnits=[3.281,0.264,2.204]
let unitNames=["Length (Meter/Feet)","Volume (Liters/Gallons)","Mass (Kilograms/Pounds)"]
let units=["meters","feet","liters","gallons","kilograms","pounds"]
let divNames=["unit-el1","unit-el2","unit-el3"]
const convertBtn=document.getElementById("convert-btn")
const inputEl=document.getElementById("input-el")
convertBtn.addEventListener("click",function(){
    const num=(inputEl.value)
    convertNumber(num)
})
function convertNumber(num)
{
for(let i=0;i<3;i++)
{
    let a=num*reqUnits[i].toFixed(2)
    let b=(num/reqUnits[i]).toFixed(2)
    let unitEl=document.getElementById(divNames[i])
    unitEl.innerHTML=`${unitNames[i]} <br><br>${num} ${units[2*i]} = ${a} ${units[(2*i)+1]} | ${num}  ${units[(2*i)+1]} = ${b} ${units[2*i]}`
}}
