
export function Backgrounds( {bgHome, bgUniverse, bgExploration} )
{
    function backgroundHome(){
        document.body.classList.remove("pageUniverse");
        document.body.classList.remove("pageExploration");
        document.body.classList.add("pageHome");    
    }

    function backgroundUniverse(){
        document.body.classList.add("pageUniverse");
        document.body.classList.remove("pageExploration");
        document.body.classList.remove("pageHome");
    }
    function backgroundExploration(){
        document.body.classList.remove("pageUniverse");
        document.body.classList.add("pageExploration");
        document.body.classList.remove("pageHome");
    }

    return{
        backgroundUniverse,
        backgroundExploration,
        backgroundHome,
    }

}