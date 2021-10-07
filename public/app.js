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



