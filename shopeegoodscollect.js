let data =[];
let allpages = document.querySelector(
    "#main > div > div.dYFPlI > div > div > div.ZgwlcK > div > div.shopee-sort-bar > div.shopee-mini-page-controller > div > span.shopee-mini-page-controller__total"
).textContent;
let pages = 1;
while(pages<=allpages)
{
    document.body.style.zoom='0.25';
    

    await new Promise((r) => setTimeout(r, 3000));
window.scroll({
    top: document.body.scrollHeight,
    behavior: "smooth",
});
await new Promise((r) => setTimeout(r, 3000));
    let Item =document.querySelectorAll(
        "#main > div > div.dYFPlI > div > div > div.ZgwlcK > div.shopee-search-item-result > div.row.shopee-search-item-result__items>div"
    )

    Item.forEach((element)=>{
        let box ={}
        let title = element.querySelector(
        "a > div > div > div.KMyn8J > div.dpiR4u > div.FDn--\\+ "
    ).textContent;
     
    let link = element.querySelector(
        "a"
    ).href;
    let price = element.querySelector(
        "a > div > div > div.KMyn8J > div.hpDKMN > div"
    ).textContent;

    let priceName = element.querySelector(
        "a > div > div > div.KMyn8J > div.hpDKMN > div"
    ).className;
    if(priceName=="vioxXd ZZuLsr d5DWld")
    {
        price = "特價" + element.querySelector(
            "a > div > div > div.KMyn8J > div.hpDKMN > div.vioxXd.rVLWG6"
        ).textContent;
       
    }

    let img = element.querySelector(
        "a > div > div > div > div> img"
    ).src;
    box["title"] = title;
    box["img"] = img;
    box["price"] = price; 
    box["link"] = link;


    data.push(box);
    });
    document.getElementsByClassName("shopee-icon-button--right")[0].click();
    pages++;
    
    
}
console.log(data);
document.body.style.zoom='1';