const choices=["rock","paper","scissors"];

function computerPlay()
{
  return choices[Math.floor(Math.random)*choices.length];
}


function playRound(PlayerSection,computerSection)
{
    if(PlayerSection===computerSection)
    {
        return "It`s a tie!";
    }
    else if(PlayerSection==="rock"&&computerSection==="scissors"||
    (PlayerSection==="paper"&&computerSection==="rock")||
    (PlayerSection==="scissors"&&computerSection==="paper")
){
    return "you win";
}
else{
    return "you lose";
}
}


document.getElementById("rock").addEventListener("click",function()
{
    const PlayerSection="rock";
    const computerSection=computerPlay();
    const result=playRound(PlayerSection,computerSection);
    document.getElementById("result").textContent=result;
});


document.getElementById("paper").addEventListener("click",function()
{
    const PlayerSection="paper";
    const computerSection=computerPlay();
    const result=playRound(PlayerSection,computerSection);
    document.getElementById("result").textContent=result;
});


document.getElementById("scissors").addEventListener("click",function()
{
    const PlayerSection="paper";
    const computerSection=computerPlay();
    const result=playRound(PlayerSection,computerSection);
    document.getElementById("result").textContent=result;
});