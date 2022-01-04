const collect_ratings = () => {

    const ratings = {
        'count': 0,
        'sum': 0,
        'average': 0
    }

    let rating = 0

    const elements = document.querySelectorAll('.rating')
    
    ratings.count = 0,
    ratings.sum = 0,
    ratings.average = 0

    elements.forEach(element => {
        ratings.count += parseInt(element.value)
        rating = parseInt(element.id.replace('star', ''))
        ratings.sum += (rating * parseInt(element.value))
    })
    if(ratings.count !== 0) {
        ratings.average = (ratings.sum / ratings.count)
    }
    document.querySelector('#average').value = ratings.average.toFixed(2)
    return ratings
}

document.addEventListener('change', (event) => {
    collect_ratings()
})

