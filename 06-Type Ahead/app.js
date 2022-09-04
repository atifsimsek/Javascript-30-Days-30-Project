const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const input = document.querySelector(".search");
const list = document.querySelector(".suggestions");

input.addEventListener("change",displatMatches);
input.addEventListener("keyup",displatMatches);



const cities = [];


fetch(endpoint)
.then(resume =>resume.json())
.then(data => cities.push(...data))




function findMatches ( searched , cities)
{
    return cities.filter(place =>{
        const regex = new RegExp(searched,"gi")


        return place.city.match(regex) || place.state.match(regex)


    })
}


function displatMatches(){
    const matchArray = findMatches(this.value, cities)

    const html = matchArray.map(place=>{

        const regex = new RegExp(this.value,"gi")
        console.log(regex)
        const cityName =place.city.replace(regex,`<span class="hl">${this.value}</span>`)
        const stateName =place.state.replace(regex,`<span class="hl">${this.value}</span>`)


        console.log(cityName)

        return`
            <li>
                <span class="name">${cityName}, ${stateName }</span>
                 <span class="population">${place.population}</span>
            </li>
    
        `;
    }).join('');

    console.log(html)
    list.innerHTML = html

}




