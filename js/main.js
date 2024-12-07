let meniLinkovi = [
    {
        putanja : 'index.html',
        naziv : 'Home',
    },
    {
        putanja : 'index.html#about-us',
        naziv : 'About us',
    },
    {
        putanja : 'index.html#services',
        naziv : 'Services',
    },
    {
        putanja : 'index.html#rooms',
        naziv : 'Rooms',
    },
    {
        putanja : 'index.html#blog',
        naziv : 'Blog',
    },
    {
        putanja : 'contact.html',
        naziv : 'Contact',
    },
    {
        putanja : 'autor.html',
        naziv : 'Author',
    }
]

let drustveneLinkovi = [
    {
        putanja : 'https://www.instagram.com/',
        ikonica : 'fa-instagram'
    },
    {
        putanja : 'https://www.facebook.com/',
        ikonica : 'fa-facebook'
    },
    {
        putanja : 'https://www.twitter.com/',
        ikonica : 'fa-twitter'
    },
    {
        putanja : 'https://www.linkedin.com/',
        ikonica : 'fa-linkedin'
    },
    {
        putanja : 'https://www.youtube.com/',
        ikonica : 'fa-youtube-play'
    }
]

let uslugeSadrzaj = [
    {
        ikonica: 'flaticon-036-parking',
        naslov: 'Travel Plan',
        tekst: 'Personalized itineraries tailored to your interests, ensuring a seamless and unforgettable journey, from booking flights to exploring destinations.'
    },
    {
        ikonica: 'flaticon-033-dinner',
        naslov: 'Catering Service',
        tekst: 'Delicious, customized menus crafted for any occasion, providing top-notch service and gourmet meals to impress your guests.'
    },
    {
        ikonica: 'flaticon-026-bed',
        naslov: 'Babysitting',
        tekst: 'Professional, caring babysitters ensure your child’s safety and happiness, offering parents peace of mind during their time away.'
    },
    {
        ikonica: 'flaticon-024-towel',
        naslov: 'Laundry',
        tekst: 'Convenient, fast, and meticulous laundry services keep your clothes fresh, clean, and perfectly pressed during your stay.'
    },
    {
        ikonica: 'flaticon-044-clock-1',
        naslov: 'Hire Driver',
        tekst: 'Reliable, professional drivers ensure smooth, safe, and comfortable transportation, letting you focus on enjoying your journey.'
    },
    {
        ikonica: 'flaticon-012-cocktail',
        naslov: 'Bar & Drink',
        tekst: 'An extensive selection of premium cocktails, fine wines, and spirits served in a chic, vibrant atmosphere to elevate your evenings.'
    }
]

let blogoviSadrzaj = [
    {
        naslov : 'Tremblant In Canada',
        tip : 'Travel Trip',
        datum : '15th May, 2019',
        bgSlika : 'tremblant',
        sirina : 4
    },
    {
        naslov : 'Choosing A Static Caravan',
        tip : 'Camping',
        datum : '15th April, 2019',
        bgSlika : 'caravan',
        sirina : 4
    },
    {
        naslov : 'Copper Canyon',
        tip : 'Event',
        datum : '21th April, 2019',
        bgSlika : 'copper',
        sirina : 4
    },
    {
        naslov : 'Trip To Iqaluit In Nunavut A Canadian Arctic City',
        tip : 'Event',
        datum : '08th April, 2019',
        bgSlika : 'wide',
        sirina : 8
    },
    {
        naslov : 'A Time Travel Postcard',
        tip : 'Event',
        datum : '22th April, 2019',
        bgSlika : 'travel',
        sirina : 4
    },
    {
        naslov : 'Traveling To Barcelona',
        tip : 'Travel Trip',
        datum : '25th April, 2019',
        bgSlika : 'trivago',
        sirina : 4
    },
    {
        naslov : 'Virginia Travel For Kids',
        tip : 'Event',
        datum : '8th May, 2019',
        bgSlika : 'kids',
        sirina : 4
    },
    {
        naslov : 'Bryce Canyon A Stunning',
        tip : 'Travel Trip',
        datum : '29th April, 2019',
        bgSlika : 'bryce',
        sirina : 4
    },
    {
        naslov : 'Motorhome Or Trailer',
        tip : 'Camping',
        datum : '30th April, 2019',
        bgSlika : 'trailer',
        sirina : 4
    },
    {
        naslov : 'Lost In Lagos Portugal',
        tip : 'Camping',
        datum : '13th May, 2019',
        bgSlika : 'lagos',
        sirina : 4
    },
    {
        naslov : 'Aurora Getaways',
        tip : 'Event',
        datum : '6th May, 2019',
        bgSlika : 'sea',
        sirina : 4
    }
]

let gosti = ['Choose...',1,2,3,4,5,6];
let sobe = ['Choose...',1,2,3,4];

let kontaktUsluge = ['Reservations','Events','Complaints'];


//nav i drustvene
function meniLinkHTML(linkovi){
    let putanja = window.location.pathname;
    let imeStranice = putanja.substring(putanja.lastIndexOf('/')+1);

    let sadrzaj = "";
    for(let link of linkovi){
        let aktivno = imeStranice == link.putanja ? "class='active'" : ''
        sadrzaj += `<li ${aktivno}><a href="${link.putanja}">${link.naziv}</a></li>`;
    }
    return sadrzaj;
    
}
function drustveneLinkHTML(linkovi){
    let sadrzaj = "";
    for(let link of linkovi){
        sadrzaj += `<a href="${link.putanja}"><i class="fa ${link.ikonica}"></i></a>`
    }
    return sadrzaj;
}

function ubaciLinkSadrzaj(selektor, sadrzaj, elementTip){
    let sviMeni = document.querySelectorAll(selektor);

    sviMeni.forEach(meni => {
    let noviElement = document.createElement(elementTip);
    noviElement.innerHTML = sadrzaj;
    meni.appendChild(noviElement);
});
}

ubaciLinkSadrzaj(".mainmenu", meniLinkHTML(meniLinkovi), "ul");
ubaciLinkSadrzaj("[class$='-social']", drustveneLinkHTML(drustveneLinkovi), "div");

//forma index.html
if(window.location.pathname == '/Sona/index.html' || window.location.pathname == '/Sona/'){
    napraviOptions(gosti,'#guest');
    napraviOptions(sobe,'#room');
}


function proveriIndex(){
    let trVreme = new Date();
    let trDatum = trVreme.toLocaleDateString('en-CA');
    let ispravno = true;
    let datDolaska = document.querySelector('#date-in');
    let datOdlaska = document.querySelector('#date-out');
    if(datDolaska.value < trDatum){
        document.querySelector("#date-in + p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#date-in + p").className = 'hide';
    if(datOdlaska.value < datDolaska.value){
        document.querySelector("#date-out + p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#date-out + p").className = 'hide';
    
    if(document.querySelector("#guest").value == gosti[0]){
        document.querySelector("#guest-p-missing").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#guest-p-missing").className = 'hide';

    if(document.querySelector("#room").value == sobe[0]){
        document.querySelector("#room-p-missing").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#room-p-missing").className = 'hide';

    if(document.querySelector("#guest").value < document.querySelector("#room").value){
        document.querySelector("#room-p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#room-p").className = 'hide';

    ispravno ? document.querySelector("#form-success").className = 'text-success' : document.querySelector("#form-success").className = 'hide'
}

//usluge
function uslugeHTML(usluga){
    return sadrzaj =  `<div class="col-lg-4 col-sm-6">
                        <div class="service-item">
                        <i class="${usluga.ikonica}"></i>
                        <h4>${usluga.naslov}</h4>
                        <p>${usluga.tekst}</p>
                        </div>
                    </div>`   
}

if(window.location.pathname == '/Sona/index.html' || window.location.pathname == '/Sona/'){
    let novaUsluga = document.createElement("div");
    novaUsluga.className= "row";
    for(let usluga of uslugeSadrzaj){
        novaUsluga.innerHTML += uslugeHTML(usluga);
    }
    document.querySelector("#services .container").appendChild(novaUsluga);
}
//blog
function blogoviHTML(blog){
    return sadrzaj =  `<div class="col-lg-${blog.sirina}">
                        <div class="blog-item set-bg" style="background-image: url('img/blog/blog-${blog.bgSlika}.jpg');">
                            <div class="bi-text">
                                <span class="b-tag">${blog.tip}</span>
                                <h4><a href="#">${blog.naslov}</a></h4>
                                <div class="b-time"><i class="icon_clock_alt"></i> ${blog.datum}</div>
                            </div>
                        </div>
                    </div>`
}

function napraviOptions(nizOptiona, selektor){
    let sadrzaj = '';
    nizOptiona.forEach(option => {
        sadrzaj += `<option value='${option}'>${option}</option>`
    });
    document.querySelector(selektor).innerHTML = sadrzaj;
}

if(window.location.pathname == '/Sona/index.html' || window.location.pathname == '/Sona/'){
    let tipovi = ['All'];
    blogoviSadrzaj.forEach(blog => {
    if (!tipovi.includes(blog.tip)) {
        tipovi.push(blog.tip);
    }
    });
    napraviOptions(tipovi, "#blogType");
}


function napraviBlogove(){
    drzac = document.querySelector("#blog .container")
    drzac.removeChild(drzac.lastChild);
    let noviElement = document.createElement('div');
    noviElement.className = 'row';
    for(let blog of blogoviSadrzaj){
        let selectVrednost = document.querySelector("#blogType").value
        if(selectVrednost == 'All' || blog.tip == selectVrednost){
            noviElement.innerHTML += blogoviHTML(blog);}
    }
    drzac.appendChild(noviElement);
}
if(window.location.pathname == '/Sona/index.html' || window.location.pathname == '/Sona/'){
    addEventListener("load", napraviBlogove);
    document.getElementById("blogType").onchange = napraviBlogove;
}

//contact.html forma
if(window.location.pathname == '/Sona/contact.html'){
    let noviElement = document.createElement("div");
    let sadrzaj = '';
    kontaktUsluge.forEach(usluga => {
        sadrzaj += `<input type='radio' name='services' id='${usluga}' value='${usluga}'>
                    <label for='${usluga}'>${usluga}</label><br/>`
    });
    noviElement.innerHTML = sadrzaj;
    document.querySelector('#contact-services').appendChild(noviElement);

}
const imeRegex = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}$/
const prezimeRegex = /^([A-ZŠĐČĆŽ][a-zšđčćž]+)([ ][A-ZŠĐČĆŽ][a-zšđčćž]+)*$/
const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const brojRegex = /^\+381\d{8,9}$/
function proveriContact(){
    let ispravno = true;
    if(!imeRegex.test(contactForm.firstName.value)){
        document.querySelector("#firstName + p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#firstName + p").className = 'hide';
    if(!prezimeRegex.test(contactForm.lastName.value)){
        document.querySelector("#lastName + p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#lastName + p").className = 'hide';
    if(!emailRegex.test(contactForm.email.value)){
        document.querySelector("#email + p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#email + p").className = 'hide';
    if(!brojRegex.test(contactForm.number.value)){
        document.querySelector("#number + p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#number + p").className = 'hide';
    if(contactForm.services.value == ''){
        document.querySelector(".col-lg-12 p").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector(".col-lg-12 p").className = 'hide';
    if(contactForm.message.value == ''){
        document.querySelector("#message-error").innerHTML = 'Enter a message';
        document.querySelector("#message-error").className = 'text-danger';
        ispravno = false;
    }
    else document.querySelector("#message-error").className = 'hide';
    
    if(ispravno){
        document.querySelector("#message-error").innerHTML = 'Submitted successfully';
        document.querySelector("#message-error").className = 'text-success';
    }
        
}

//email footer
function footerEmail(){
    if(emailRegex.test(document.getElementById('footer-email').value)){
        document.getElementById('footer-email-info').innerHTML = 'Sent!';
        document.getElementById('footer-email-info').className = 'text-success';
    }
    else{
        document.getElementById('footer-email-info').innerHTML = 'Invalid email';
        document.getElementById('footer-email-info').className = 'text-danger';
    }
}


$(document).ready(function () {
    //modal pojavljivanje 
    $('.about-btn').click(function () {
        $('.modal-overlay').fadeIn();
        $('.modal').slideDown();
    });

    $('.close-btn, .modal-overlay').on('click', function () {
        $('.modal').slideUp(function () {
            $('.modal-overlay').fadeOut();
        });
    });

    // pojavljivanje dugmeta
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // vracanje na vrh dugmeta
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 0);
        return false;
    });

    // mrdanje btt dugmeta
    $('#back-to-top').hover(
        function() {
            $(this).stop(true,true);
            $(this).animate({ bottom: '+=12' }, 200);
            $(this).css('background-color', '#8a5e31');
        },
        function() {
            $(this).stop(true,true);
            $(this).animate({ bottom: '-=12' }, 200);
            $(this).css('background-color', '#dfa974');
        }
    );
});
