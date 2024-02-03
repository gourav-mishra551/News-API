const cat=document.querySelectorAll("h2");
const API_KEY="5ae503730f4641f6a59a5c9993fa63da";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>{
fetchNews("India");
});

async function fetchNews(query){
const raw = await fetch(`${url}${query}&apiKey=${API_KEY}`);
const data= await raw.json();
console.log(data.articles.length);
bindData(data.articles);
}

function bindData(q){
 const ma=document.getElementById("cadcon");
 const tem=document.getElementById("tmx");
 ma.innerHTML="";
 q.forEach((q)=>{
    if(q.urlToImage==null) return;
    const clone= tem.content.cloneNode(true);
    filldata(clone,q);
ma.appendChild(clone);
 });
  a();
}

function a(){
const v=document.querySelectorAll(".main .card");
v.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        e.style.boxShadow = "5px 5px 15px #E1D8D8";
    });
    e.addEventListener("mouseout",()=>{
        e.style.boxShadow="none";
        });
        
        e.addEventListener("click",()=>{
          const a=e.querySelector(".likk");
            window.open(`${a.href}`, '_blank');
            });

});

}

function filldata(c,q){
    const imge=c.querySelector("#newsimg");
    const hea=c.querySelector(".heading");
    const publi= c.querySelector(".publ");
    const conn=c.querySelector(".newscon");
    const lik=c.querySelector(".likk");
    imge.src=q.urlToImage;
    hea.innerHTML=q.title;
    conn.innerHTML=q.description;
    lik.href=q.url;

    const d=new Date(q.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    });
    publi.innerHTML=`${q.source.name} . ${d}`;
   
}

cat.forEach((e)=>{
    
e.addEventListener("mouseover",()=>{
e.style.color="rgb(38, 84, 222)";
});

e.addEventListener("mouseout",()=>{
    e.style.color="black";
    });
    
});  

const bttt=document.querySelector(".Searchbuttion");
bttt.addEventListener("click",()=>{
    const input=document.querySelector(".inppp");    
       if(input.value!=''){
        fetchNews(`${input.value}`);
       }else{
        console.log("Input Field is Empty");
       }
});

const hoimge=document.querySelector(".logoimg");
hoimge.addEventListener("click",()=>{
    fetchNews("India");
});