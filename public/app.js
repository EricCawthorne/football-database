document.getElementById('all stats').addEventListener('click', () => {
    let id = $('#search').val()
    $.get(`http://localhost:3000/quarterbacks-with-stats/${id}`, (data) => {
        if (id.length === 0) {
            console.log(data)
        } else {
            console.log(data[0])
        }
    })
});

function quarterbackData() {
    $.get('http://localhost:3000/quarterbacks-with-stats', (data) => {
        for (let i = 0; i < data.length; i++) {
            //player with stats container
            let qbDiv = $('<div class="quarterback"></div>')

            //quarterback block
            let qbInfo = $('<div class="qb-info"></div>')
            $(qbDiv).append(qbInfo)
            $(qbInfo).append(`<h1 class='name'>${data[i].name}</h1>`)
            $(qbInfo).append(`<i class='current-team'>${data[i].current_team}</i>`)

            //stats container
            let statsDiv = $('<div class="stats-container"></div>')
            $(qbDiv).append(statsDiv)

            //passing yards block
            let yardsBlock = $('<div class="stat-block"></div>')
            $(yardsBlock).append('<h2 class="yards-head">Passing Yards</h2>')
            $(yardsBlock).append(`<ul class='passing-yards'>${data[i].passing_yards}</ul>`)
            $(statsDiv).append(yardsBlock)

            //passing touchdowns block
            let touchdownsBlock = $('<div class="stat-block"></div>')
            $(touchdownsBlock).append('<h2 class="touchdowns-head">Passing Touchdowns</h2>')
            $(touchdownsBlock).append(`<ul class='passing-touchdowns'>${data[i].passing_touchdowns}</ul>`)
            $(statsDiv).append(touchdownsBlock)

            //interceptions block
            let interceptionsBlock = $('<div class="stat-block"></div>')
            $(interceptionsBlock).append('<h2 class="interceptions-head">Interceptions</h2>')
            $(interceptionsBlock).append(`<ul class='interceptions'>${data[i].interceptions}</ul>`)
            $(statsDiv).append(interceptionsBlock)

            //passer rating block
            let passerRatingBlock = $('<div class="stat-block"></div>')
            $(passerRatingBlock).append('<h2 class="passer-rating-head">Passer Rating</h2>')
            $(passerRatingBlock).append(`<ul class='passer-rating'>${data[i].passer_rating}</ul>`)
            $(statsDiv).append(passerRatingBlock)

            // //years played block
            let yearsPlayedBlock = $('<div class="stat-block"></div>')
            $(yearsPlayedBlock).append('<h2 class="years-played-head">Years Played</h2>')
            $(yearsPlayedBlock).append(`<ul class='years-played'>${data[i].years_played}</ul>`)
            $(statsDiv).append(yearsPlayedBlock)

            $('.results-container').append(qbDiv)
        }
        console.log(data)
    })
};

quarterbackData();


