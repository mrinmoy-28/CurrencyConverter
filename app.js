const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json";

let selects=document.querySelectorAll("select");

for (const select of selects) {
    for (const key in countryList) {
        option=document.createElement("Option");
        option.innerText=key;
        option.value=key;
        select.append(option);
        if (select.id=="sel1"&& key=="USD") {
            option.selected="selected";
        }
        else if (select.id=="sel2"&& key=="INR") {
            option.selected="selected";
        }
    }
select.addEventListener("change",(event)=>{
    updateFlag(event.target);
})
}

const updateFlag =(element)=>{
    console.log(element);
    
    let currcode =element.value;
    let countrycode=countryList[currcode];
    newsrc=`https://flagsapi.com/${countrycode}/flat/32.png`;
    element.parentElement.parentElement.querySelector("img").src=newsrc;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click",async (evt) => {
    evt.preventDefault();
    const s0currcode = selects[0].value.toLowerCase();
    const s1currcode = selects[1].value.toLowerCase();

    let amount = document.querySelector(".amt input").value;
    
    const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${s0currcode}.json`;
    let response =await fetch(url);
    let data =await response.json();
    const rate =  data[s0currcode][s1currcode];
    const txt = document.querySelector(".txt p");
    txt.innerText=`${amount} ${selects[0].value} = > ${amount*rate} ${selects[1].value}`;
});