async function getPersonData() {
    let peopleData = []
    colors = ["#3366cc", "#e36141", "#40ab46", "#ffad33", "purple", "orange", "brown", "black"]
    const request = async () => {
        let path = "data"
        if (window.location.pathname === '/songs') {
            path = "songs-data"
        } else if (window.location.pathname === '/3-little-pigs') {
            path = "3-little-pigs-data"
        }
        peopleData = await fetch(`http://localhost:8080/${path}`)
            .then(response => response = response.json())
            .then(json => json.map((p, i) => {
                p.color = colors[i]
                return p
            }));
    }
    await request()

    const buttons = document.querySelector(".buttons")
    peopleData = peopleData.map((p, i) => {
        buttons.innerHTML += `<button class="mdc-button mdc-button--raised"><span class="mdc-button__label">${p.name}</span></button>`
        p.color = colors[i]
        return p
    })
    return new Promise(r => r(peopleData))
}

let peopleData
getPersonData().then(p => {
    peopleData = p
})