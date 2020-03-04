const jsonObj = {"total_results":16, "organizations":[
    {"name":"Alliance of Hope for Suicide Loss Suicide", "img": "https://cdn.greatnonprofits.org/images/logos/lotusnight.jpg", "geo":"", "des":"","category":"mental health"},
    {"name":"The Cradle", "img": "https://cdn.greatnonprofits.org/images/logos/Cradlelogoblue7705withCG9tagline.jpg", "geo":"", "des":"","category":"education"},
    {"name":"Fabretto Children's Foundation", "img": "https://cdn.greatnonprofits.org/images/logos/2013FabrettoLogoAPPROVED-01250px.png", "geo":"", "des":"","category":"human services"},
    {"name":"Rainbows for All Children", "img": "https://cdn.greatnonprofits.org/images/logos/Rainbows4all_logo_COLOR2.jpg", "geo":"", "des":"","category":"human services"},
    {"name":"Benevolent", "img": "https://cdn.greatnonprofits.org/images/logos/BenevolentFulllogo1.jpg", "geo":"", "des":"","category":"human services"},
    {"name":"Impact Behavioral Health Partners", "img":"https://cdn.greatnonprofits.org/images/logos/Impact-Primary-Color-EMAIL1.jpg", "geo":"", "des":"","category":"mental health"},
    {"name":"The Rotary Foundation of Rotary International", "img": "./images/1.jpg", "geo":"", "des":"","category":"international"},
    {"name":"Kidney Cancer Association", "img": "https://cdn.greatnonprofits.org/images/logos/itunespodcast300x300.jpg", "geo":"", "des":"","category":"health"},
    {"name":"Field Ready Inc", "img":"https://cdn.greatnonprofits.org/images/logos/FIELDREADYLogoAIfile.jpg", "geo":"", "des":"","category":"public/societal benefit"},
    {"name":"YWCA Evanston North Shore", "img": "./images/2.jpg", "geo":"", "des":"","category":"advocacy"},
    {"name":"Infant Welfare Society of Evanston, Inc", "img": "./images/3.jpg", "geo":"", "des":"","category":"human services"},
    {"name":"Living Earth Television NFP", "img": "https://cdn.greatnonprofits.org/images/logos/LETVcalliglogo.JPG", "geo":"", "des":"","category":"arts"},
    {"name":"Allowance of Good", "img": "./images/4.jpg", "geo":"", "des":"","category":"international"},
    {"name":"Learning Bridge Early Education Center", "img":"./images/5.jpg", "geo":"", "des":"","category":"education"},
    {"name":"Evanston Environmental Association", "img": "https://cdn.greatnonprofits.org/images/logos/ecology-center-rendering-w-.jpg", "geo":"", "des":"","category":"environment/animals"},
    {"name":"Girls Play Sports, Inc", "img": "https://cdn.greatnonprofits.org/images/logos/clubGPS_3c_border0.jpg", "geo":"", "des":"", "category":"education"},
    {"name":"Youth Job Center Inc", "img":"./images/6.jpg", "geo":"", "des":"", "category":"other"}
]};
  
let charities = jsonObj["organizations"];
let collection = []

for(var i = 0; i < 4; i++){
    let idx = Math.floor(Math.random() * charities.length)
    while (collection.indexOf(idx) !== -1){
        idx = Math.floor(Math.random() * charities.length)
    }
    collection.push(idx)
    let charity = charities[idx]

    const template = `
    <li class="group" onclick="window.location.href='profile.html'">
      <div class="charity">
        <div class="logo">
        <img src=${charity.img} alt=${charity.name}>
        </div>
        <div class="name">${charity.name}</div>
        <div class="tags">
        <div class="tag">${charity.category}</div>
        </div>
      </div>
    </li>`;
    document.querySelector('.charity-cards').innerHTML += template;
}