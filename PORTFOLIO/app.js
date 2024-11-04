var typed=new Typed(".typing",{
    strings:["Web Developer","Software Developer"],
    typeSpeed:50,
    BackSpeed:60,
    loop:true
})

const lists=document.querySelector(".list");
const list=lists.querySelectorAll("li");
const totlist=list.length;
const section=document.querySelectorAll(".section");
const totsection=section.length;

for(var i=0;i<totlist;i++){
    const a=list[i].querySelector("a");
    a.addEventListener("click",function(){
        for(var i=0;i<totlist;i++){
       
            section[i].classList.remove("backsection");
        }
        for(var j=0;j<totlist;j++){
            if( list[j].querySelector("a").classList.contains("active")){
                list[j].querySelector("a").classList.add("backsection");
            }
            list[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}
function showSection(element){
    const target=element.getAttribute("href").split("#")[1];
    for(var i=0;i<totsection;i++){
       
        section[i].classList.remove("animate");
    }
    document.querySelector("#" + target).classList.add("animate");
}
const togglebar=document.querySelector(".togglebar");
const sidebar=document.querySelector(".sidebar");
togglebar.addEventListener("click",()=>{
    sidebartoggler();


})
function sidebartoggler(){
    sidebar.classList.toggle("open");
    togglebar.classList.toggle("open");
    for(var i=0;i<totsection;i++){
        
        section[i].classList.toggle("openn");
    }
}