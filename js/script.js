var sliderOne = document.getElementById('sliderOne');

var slides = ['product2.jpg', 'product3.jpg', 'product4.jpg', 'product1.jpg'];
var quotes = [
    "sayuran segar dan bebas pestisida",
    "buah-buahan terbaik dengan cita rasa terbaik",
    "produk lokal terbaik dengan harga yang terbaik",
    "setiap hari beli sayur buah yang fresh di sini"
];

var sliderTwo = document.getElementById('sliderTwo');

var names = ['Sifujeson', 'Ilham Anugrah', 'Elon Musk', 'Pavel Durov'];
var profesi = ['Praktisi Krav Maga, -', 'Pelajar, 18', 'Pendisi Space-X, 52', 'Pendiri Telegram, 38'];
var profile_pic = ['profile2.png', 'profile3.png', 'profile4.png', 'profile1.png']

var idx = 0;

function sliderFunc() {
    idx = idx < slides.length ? idx + 1 : 1

    sliderOne.innerHTML = '<img src=assets/product/' + slides[idx - 1] + ' class="fade-io">'
        + '<figcaption class="fade-io">"' + quotes[idx - 1] + '"</figcaption>';

    sliderTwo.innerHTML = '<figure class="user-picture">'
        + '<img src="assets/profile/' + profile_pic[idx - 1] + '" alt="gambar placeholder user" class="fade-io">'
        + '</figure>'
        + '<div class="user-info">'
        + '<h4 class="user-name fade-io">' + names[idx - 1] + '</h4>'
        + '<p class="profesi fade-io">' + profesi[idx - 1] + '</p>'
        + '</div>'
}

setInterval(sliderFunc, 4000);


function validateForm() {
    var fullName = document.contactUs.fullName.value;
    var email = document.contactUs.email.value;
    var phone = document.contactUs.phone.value;
    var message = document.getElementById("message").value;
    var interest = document.contactUs.interest.value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (fullName == "") {
        alert("Please provide your name");
        document.contactUs.fullName.focus();
        return false;
    }

    if (email == "") {
        alert("Please provide your email");
        document.contactUs.email.focus();
        return false;
    } else {
        if (!email.match(mailformat)) {
            alert("Your email address is invalid");
            document.contactUs.email.focus();
            return false;
        }
    }

    if (phone == "") {
        alert("Please provide your phone number");
        document.contactUs.phone.focus();
        return false;
    } else {
        if (/^[0-9]+$/.test(phone) && (phone.length < 11 || phone.length > 12)) {
            alert("Your phone number is invalid");
            document.contactUs.phone.focus();
            return false;
        }
    }

    if (message == "") {
        alert("Please provide some message");
        document.contactUs.message.focus();
        return false;
    }

    message = message.trim()

    if (interest == "") {
        alert("Please select your interest");
        document.contactUs.interest.focus();
        return false;
    }

    alert("Hello" + fullName + "\nYour email is " + email
        + "\nYour number is " + phone + ".\nYou gave some message '" + message
        + "'\nLastly you have interest in " + interest + " product.")
    return true;
}

function hamburger() {
    var x = document.getElementsByClassName("ham-item");

    console.log(x)
    console.log(x[0].style.display)
    console.log(x[1].style.display)
    console.log(x[1].style.display)
    
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.display === "none" || x[i].style.display === "") {
            
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}