function alternatingSums(a) {
    var team1= 0;
    var team2 = 0;

    a.forEach((element, index) =>{
        if(index % 2 ==0){
            team1+=element;
        }
        else{
            team2+=element;
        }
    });
    return [team1, team2];
}

console.log(alternatingSums([60, 40, 55, 75, 64]));
