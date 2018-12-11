function cekHadiahRanking(nama, rank){


    
    var janji = new Promise(function(resolve, reject){
        if(rank <= 10){
            resolve('Budi')
        }
        reject('Budi')
    });

    return janji;
}

console.log('Mulai program');
cekHadiahRanking('Budi', 4)
    .then(function(result){
        console.log(result, 'dapat hadiah tas baru')
    })
    .then(function(){
        console.log('Close program')
    })
    .catch(function(err){
        console.error(err, 'tidak dapat apa-apa');
    });