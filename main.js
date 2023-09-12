import Megjelenit from "./Megjelenit.js";
import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";
$(function(){
    const SZULOELEM =$(".tarolo");
    const lista = new Megjelenit(TODOLIST2, SZULOELEM);
    
    $(window).on("kesz", function(event){
        console.log(event.detail);
    })
})