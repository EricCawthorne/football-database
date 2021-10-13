function quarterbackData() {
    $.get('http://localhost:3000/quarterbacks-with-stats', (data) => {
        for (let i = 0; i < data.length; i++) {
            //player with stats container
            let qbDiv = $(`<div class="quarterback" id="${data[i].name.toLowerCase()}"></div>`)
            
            //quarterback block
            let qbInfo = $('<div class="qb-info"></div>')
            $(qbDiv).append(qbInfo)
            $(qbInfo).append(`<h1 class='name'>${data[i].name}</h1>`)
            $(qbInfo).append(`<i class='current-team'>${data[i].current_team}</i>`)
            $(qbInfo).append(`<img src ='${data[i].image}' class='image'>`)
            
            //stats container
            let statsDiv = $('<div class="stats-container"></div>')
            $(qbDiv).append(statsDiv)
            
            //passing yards block
            let yardsBlock = $('<div class="stat-block"></div>')
            $(yardsBlock).append('<h1 class="head">Passing Yards</h1>')
            $(yardsBlock).append(`<ul class='total-stat'>${data[i].passing_yards}</ul>`)
            $(statsDiv).append(yardsBlock)
            
            //passing touchdowns block
            let touchdownsBlock = $('<div class="stat-block"></div>')
            $(touchdownsBlock).append('<h1 class="head">Passing Touchdowns</h1>')
            $(touchdownsBlock).append(`<ul class='total-stat'>${data[i].passing_touchdowns}</ul>`)
            $(statsDiv).append(touchdownsBlock)
            
            //interceptions block
            let interceptionsBlock = $('<div class="stat-block"></div>')
            $(interceptionsBlock).append('<h1 class="head">Interceptions</h1>')
            $(interceptionsBlock).append(`<ul class='total-stat'>${data[i].interceptions}</ul>`)
            $(statsDiv).append(interceptionsBlock)
            
            //passer rating block
            let passerRatingBlock = $('<div class="stat-block"></div>')
            $(passerRatingBlock).append('<h1 class="head">Passer Rating</h1>')
            $(passerRatingBlock).append(`<ul class='total-stat'>${data[i].passer_rating}</ul>`)
            $(statsDiv).append(passerRatingBlock)
            
            // //years played block
            let yearsPlayedBlock = $('<div class="stat-block"></div>')
            $(yearsPlayedBlock).append('<h1 class="head">Years Played</h1>')
            $(yearsPlayedBlock).append(`<ul class='total-stat'>${data[i].years_played}</ul>`)
            $(statsDiv).append(yearsPlayedBlock)
            
            $('.results-container').append(qbDiv)
        }
    })
};

quarterbackData();


$('.search-button').on('click', () => {
    let id = $('.search-bar').val().toLowerCase()
    let element = document.getElementById(id)
    element.scrollIntoView({behavior: 'smooth', block:'center'})
});

$('.search-bar').keypress(() => {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        let id = $('.search-bar').val().toLowerCase()
        let element = document.getElementById(id)
        element.scrollIntoView({behavior: 'smooth', block:'center'})
    }
});
