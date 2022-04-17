/** *** VARIABLES *** **/
var id_rating;

/** *** FUNCTIONS *** **/
function get_rating(clicked_rating){
    id_rating = clicked_rating;
}

function change_state(){
    for(let i=1; i<=5; i++){
        document.getElementById("button-"+i).style.cssText="";  //Reset Button
    }
    document.getElementById(id_rating).style.cssText="background-color: var(--clr-extralight-gray);"
}

function change_card_state(){
        document.getElementById("rating").style.cssText="display: none;"
        document.getElementById("thanks").style.cssText="display: grid;"
        if(typeof id_rating == "undefined"){    //Check if id_rating is undefined to avoid substring-error
            id_rating = "button-0";
        }
        id_rating = id_rating.substring(7);
        document.getElementById("feedback").innerHTML+=id_rating + " out of 5";
}
