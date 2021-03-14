for (let i = 1000; i >= 0; i--){
    if(i % 2 === 0)
    console.log(i)
}

for (let u = 0; u <= 10000; u++){
    if(u == 2500)
        alert("A quarter of the way there!")
    else if(u == 5000)
        alert("Halfway there!")
    else if(u == 10000)
        alert("The loop is done!")

}

const shows=["The Ellen Show","Sturday Night live","Lip Sync Battle","Carpool Karaoke","Jimmy Kimmel Live!"]
    for (let v =0; v <shows.length ; v++) {
     console.log ("My# " +[v+1]+" favorite show is " + shows[v])
    }
