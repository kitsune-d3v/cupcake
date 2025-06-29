const container = document.getElementById("cupcake-list");

const popUpDiv = document.createElement('div');
popUpDiv.classList.add("pop-up-div");

const cupcakeCombos =[{
    image: "resources/images/cupcake_combos/Erdbeerflüstern.png",
    name: "Erdbeerflüstern",
    price: "17,5€",
    background: "linear-gradient(180deg, #F9B1CE 0%, #93687A 100%)",
    buttonId: "Erdbeerflüstern",
    zusaten: ["Erdbeeren", "Chia-Samen", "Reismehl"],
    design: ["Saftiger Teig mit leuchtend roten Beeren"],
    geschmack: ["Fruchtig", "Leicht und gesund"]
}, {

    image: "resources/images/cupcake_combos/Kelch_der_Ruhe.png",
    name: "Kelch der Ruhe",
    price: "15€",
    background: "linear-gradient(180deg, #D2E6EC 0%, #7CBAA9 100%)",
    buttonId: "Kelch-der-Ruhe",
    zusaten: ["Lavendel", "Zitronenschale", "Mandelmehl"],
    design: ["Zart violetter Duft mit feiner Zitronennote"],
    geschmack: ["Beruhigend", "Blumig", "Elegant"]

}, {
    image: "resources/images/cupcake_combos/Süßer_Wind.png",
    name: "Süßer Wind",
    price: "17€",
    background: "linear-gradient(180deg, #F09A41 0%, #8A5925 100%)",
    buttonId: "Süßer-Wind",
    zusaten: ["Apfel", "Zimt", "Kardamom"],
    design: ["Herbstliche Farben mit feinen Apfelstückchen"],
    geschmack: ["Wärmend", "Würzig", "Angenehm süß"]
}, {
    image: "resources/images/cupcake_combos/Verzauberter_Garten.png",
    name: "Verzauberter Garten",
    price: "15€",
    background: "linear-gradient(180deg, #5F6A7E 0%, #303547 100%)",
    buttonId: "Verzauberter-Garten",
    zusaten: ["Heidelbeeren", "Zitronenschale", "Dinkelmehl"],
    design: ["Blau-lila Marmorierung durch frische Beeren"],
    geschmack: ["Frisch", "Fruchtig", "Leicht säuerlich"]
}, {
    image: "resources/images/cupcake_combos/Zuckrige_Himmel.png",
    name: "Zuckrige Himmel",
    price: "17,5€",
    background: "linear-gradient(180deg, #BC2A65 0%, #56132E 100%)",
    buttonId: "Zuckrige-Himmel",
    zusaten: ["Kokosraspeln", "Mandelmilch", "Ahornsirup"],
    design: ["Heller", "Fluffiger Teig mit Kokosstückchen"],
    geschmack: ["Tropisch", "Süß und luftig"]
}];

const designerCupcakes = [{
    image: "resources/images/designer_cupcakes/Geheime_Liebe.png",
    name: "Geheime Liebe",
    price: "4,5€",
    background: "linear-gradient(180deg, #A73D64 0%, #411827 100%)",
    buttonId: "Geheime-Liebe",
    zusaten: ["Frische Himbeeren", "Mandelmehl", "Agavensirup"],
    design: ["Mit saftigen Himbeerflecken durchzogen"],
    geschmack: ["Perfekte Balance aus süß und fruchtig"]
}, {
    image: "resources/images/designer_cupcakes/Magie_des_Honigs.png",
    name: "Magie des Honigs",
    price: "6,5€",
    background: "linear-gradient(180deg, #F1F9EA 0%, #8E938A 100%)",
    buttonId: "Magie-des-Honigs",
    zusaten: ["Waldhonig", "Walnüsse", "Hafermilch"],
    design: ["Goldene Kruste ", "Mit karamellisierter Honignote"],
    geschmack: ["Natürliche Süße", "Zart", "Nussig"]
}, {
    image: "resources/images/designer_cupcakes/Nachtrose.png",
    name: "Nachtrose",
    price: "5€",
    background: "linear-gradient(180deg, #B16E7A 0%, #4B2F34 100%)",
    buttonId: "Nachtrose",
    zusaten: ["Rosenwasser", "Pistazien", "Dinkelmehl"],
    design: ["Mit Pistazienstücken bestreut", "Sanfter Rosenduft"],
    geschmack: ["Exotisch", "Blumig", "Leicht nussig"]
}, {
    image: "resources/images/designer_cupcakes/Natürlicher_Rausch.png",
    name: "Natürlicher Rausch",
    price: "4,5€",
    background: "linear-gradient(180deg, #D0B0A9 0%, #281713 100%)",
    buttonId: "Natürlicher-Rausch",
    zusaten: ["Vollkornmehl", "Mandeln", "Ahornsirup"],
    design: ["Rustikaler Look ", "Mit Mandelstückchen"],
    geschmack: ["Angenehm nussig", "Leicht süß", "Sättigend"]
}, {
    image: "resources/images/designer_cupcakes/Schokoladenumarmung.png",
    name: "Schokoladenumarmung",
    price: "5€",
    background: "linear-gradient(180deg, #582D27 0%, #BE6154 100%)",
    buttonId: "Schokoladenumarmung",
    zusaten: ["Dunkle Schokolade", "Kakaonibs", "Haselnüsse"],
    design: ["Tiefe braune Farbe", "Mit knackiger Schokoschicht"],
    geschmack: ["Intensiv schokoladig", "Cremig und edel"]

}, {
    image: "resources/images/designer_cupcakes/Seele_der_Zimt.png",
    name: "Seele der Zimt",
    price: "5€",
    background: "linear-gradient(180deg, #853254 0%, #1F0C14 100%)",
    buttonId: "Seele-der-Zimt",
    zusaten: ["Hafermehl", "Zimt", "Muskatnuss"],
    design: ["Zart gebräunt mit leichter Gewürznote"],
    geschmack: ["Warm", "Würzig", "Perfekt für kalte Tage"]
}, {
    image: "resources/images/designer_cupcakes/Sternennacht.png",
    name: "Sternennacht",
    price: "6,5€",
    background: "linear-gradient(180deg, #DA6465 0%, #743536 100%)",
    buttonId: "Sternennacht",
    zusaten: ["Kirschen", "Zartbitterschokolade", "Dinkelmehl"],
    design: ["Dunkle Schokolade", "Mit glänzendem Kirsch-Topping"],
    geschmack: ["Reichhaltig", "süß-säuerlich", "Intensiv"]
}, {
    image: "resources/images/designer_cupcakes/Süße_Verführung.png",
    name: "Süße Verführung",
    price: "5€",
    background: "linear-gradient(180deg, #E34F69 0%, #37010B 100%)",
    buttonId: "Süße-Verführung",
    zusaten: ["Bio-Dinkelmehl ", "Vanilleextrakt", "Kokosblütenzucker"],
    design: ["Goldbraun gebacken", "Mit feinem Vanilleduft"],
    geschmack: ["Weich", "Luftig", "Natürlich süß"] 
}, {
    image: "resources/images/designer_cupcakes/Süße_Vollkommenheit.png",
    name: "Süße Vollkommenheit",
    price: "5€",
    background: "linear-gradient(180deg, #005A87 0%, #001621 100%)",
    buttonId: "Süße-Vollkommenheit",
    zusaten: ["Orangenabrieb", "Bio-Vanille", "Reismehl"],
    design: ["Leuchtend goldgelb mit feinem Orangenaroma"],
    geschmack: ["Fruchtig", "Frisch", "Unwiderstehlich"]
}, {
    image: "resources/images/designer_cupcakes/Vegane_Versuchung.png",
    name: "Vegane Versuchung",
    price: "6,5€",
    background: "linear-gradient(180deg, #AB8093 0%, #45343B 100%)",
    buttonId: "Vegane-Versuchung",
    zusaten: ["Banane", "Kakaopulver", "Kokosöl"],
    design: ["Dunkle Schokolade trifft auf weiche Bananentextur"],
    geschmack: ["Saftig", "Schokoladig", "Rein pflanzlich"]
}, {
    image: "resources/images/designer_cupcakes/Zitronenmysterium.png",
    name: "Zitronenmysterium",
    price: "5€",
    background: "linear-gradient(180deg, #690012 0%, #CF0023 100%)",
    buttonId: "Zitronenmysterium",
    zusaten: ["Zitronenschale", "Vanille", "Mandelmilch"],
    design: ["Frische Kräuter treffen auf helle Zitrusnoten"],
    geschmack: ["Frisch", "Fruchtig", "Leicht säuerlich"] 
}, {
    image: "resources/images/designer_cupcakes/Zuckertraum.png",
    name: "Zuckertraum",
    price: "5€",
    background: "linear-gradient(180deg, #007E9F 0%, #002D39 100%)",
    buttonId: "Zuckertraum",
    zusaten: ["Kakaopulver", "Dattelsüße", "Vegane Schokostückchen"],
    design: ["Dunkel schimmernd mit geschmolzenen Schokosplittern"],
    geschmack: ["Intensiv schokoladig", "Saftig", "Verführerisch"]
}];

const weddingCakes = [{
    image: "resources/images/wedding_cakes/Himbeerwind.png",
    name: "Himbeerwind",
    price: "52€",
    background: "linear-gradient(180deg, #F2CFDB 0%, #DB6681 100%)",
    buttonId: "Himbeerwind",
    zusaten: ["Himbeeren", "Kokosjoghurt", "Mandelboden"],
    design: ["Leuchtend pinke Füllung", "Edel dekoriert"],
    geschmack: ["Fruchtig", "leicht", "cremig"] 
}, {
    image: "resources/images/wedding_cakes/Kakao_Ritual.png",
    name: "Kakao Ritual",
    price: "50€",
    background: "linear-gradient(180deg, #E3C0C4 0%, #7E7879 100%)",
    buttonId: "Kakao Ritual",
    zusaten: ["Dunkle Schokolade", "Haselnusscreme", "Dattelzucker"],
    design: ["Intensive Schokoladenschichten mit Nuss-Topping"],
    geschmack: ["Kräftig", "Samtig", "Luxuriös"] 
}, {
    image: "resources/images/wedding_cakes/Kokosentzauber.png",
    name: "Kokosentzaucher",
    price: "70€",
    background: "linear-gradient(180deg, #D86A74 0%, #520107 100%)",
    buttonId: "Kokosentzaucher",
    zusaten: ["Kokosmilch", "Kardamom", "Nüsse"],
    design: ["Cremige Füllung ", "Mit feiner Kardamom-Note"],
    geschmack: ["Exotisch", "Süß-würzig", "Samtig"]
}, {
    image: "resources/images/wedding_cakes/Lavendelgeheimnis.png",
    name: "Lavendelgeheimnis",
    price: "50€",
    background: "linear-gradient(180deg, #F1CDD1 0%, #8B7679 100%)",
    buttonId: "Lavendelgeheimnis",
    zusaten: ["Lavendel", "Honig", "Hafermehl"],
    design: ["Zart violette Farbtöne", "Mit Lavendelblüten dekoriert"],
    geschmack: ["Beruhigend", "Blumig", "Fein süß"]
}, {
    image: "resources/images/wedding_cakes/Magischer_Hauch.png",
    name: "Magischer Hauch",
    price: "65€",
    background: "linear-gradient(180deg, #D3ABA3 0%, #6D5854 100%)",
    buttonId: "Magischer-Hauch",
    zusaten: ["Schokolade", "Orange", "Dinkelmehl"],
    design: ["Edle", "Dunkle Schicht mit Orangenzesten"],
    geschmack: ["Zartbitter", "Fruchtig", "Intensiv"] 
}, {
    image: "resources/images/wedding_cakes/Mandelzartheit.png",
    name: "Mandelzartheit",
    price: "50€",
    background: "linear-gradient(180deg, #BDB39C 0%, #575248 100%)",
    buttonId: "Mandelzartheit",
    zusaten: ["Mandeln", "Ahornsirup", "Vanille"],
    design: ["Schlicht", "Mit gerösteten Mandelblättchen"],
    geschmack: ["Nussig", "Saftig", "fein süß"]
}, {
    image: "resources/images/wedding_cakes/Nektar_der_Erde.png",
    name: "Nektar der Erde",
    price: "42€",
    background: "linear-gradient(180deg, #B6878D 0%, #A8627F 100%)",
    buttonId: "Nektar-der-Erde",
    zusaten: ["Feigen", "Walnüsse", "Zimt"],
    design: ["Rustikale Optik", "Mit karamellisierten Feigen"],
    geschmack: ["Herbstlich", "Tief aromatisch", "Nussig"]
}, {
    image: "resources/images/wedding_cakes/Seelenreflexion.png",
    name: "Seelenreflexion",
    price: "35€",
    background: "linear-gradient(180deg, #D2E6EC 0%, #7CBAA9 100%)",
    buttonId: "Seelenreflexion",
    zusaten: ["Orangen", "Kurkuma", "Mandelmehl"],
    design: ["Goldene Farbe", "Mit feinen Orangenscheiben"],
    geschmack: ["Würzig", "Fruchtig", "Vollmundig"]
}, {
    image: "resources/images/wedding_cakes/Strahlender_Himmel.png",
    name: "Strahlender Himmel",
    price: "42€",
    background: "linear-gradient(180deg, #98AFC3 0%, #49535E 100%)",
    buttonId: "Strahlender-Himmel",
    zusaten: ["Zitrone", "Basilikum", "Dinkelmehl"],
    design: ["Frische Kräuter treffen auf helle Zitrusnoten"],
    geschmack: ["Erfrischend", "Aromatisch", "Einzigartig"]
}, {
    image: "resources/images/wedding_cakes/Süßer_Eclipse.png",
    name: "Süßer Eclipse",
    price: "54€",
    background: "linear-gradient(180deg, #C8B2D2 0%, #675C6C 100%)",
    buttonId: "Süßer Eclipse",
    zusaten: ["Kirschen", "Zartbitterschokolade", "Dinkelmehl"],
    design: ["Dunkle Schokolade", "Mit glänzendem Kirsch-Topping"],
    geschmack: ["Reichhaltig", "süß-säuerlich", "Intensiv"] 
}, {
    image: "resources/images/wedding_cakes/Tropische_Fantasie.png",
    name: "Tropische Fantasie",
    price: "40€",
    background: "linear-gradient(180deg, #E2E1E0 0%, #7C7B7B 100%)",
    buttonId: "Tropische-Fantasie",
    zusaten: ["Kokos", "Mango", "Dattelbasis"],
    design: ["Strahlend gelbe Mangoschicht", "Mit Kokosraspeln"],
    geschmack: ["Exotisch", "Fruchtig", "Cremig"]
}, {
    image: "resources/images/wedding_cakes/Vanilleseufzer.png",
    name: "Vanilleseufzer",
    price: "45€",
    background: "linear-gradient(180deg, #F3DCC1 0%, #8D8070 100%)",
    buttonId: "Vanilleseufzer",
    zusaten: ["Vanille", "Mandelmilch", "Dattelsüße"],
    design: ["Cremige", "Goldene Oberfläche mit Vanilleschoten-Deko"],
    geschmack: ["Weich", "Samtig", "Dezent süß"]
}, {
    image: "resources/images/wedding_cakes/Wärmende_Himmel.png",
    name: "Wärmende Himmel",
    price: "75€",
    background: "linear-gradient(180deg, #E5B6C7 0%, #773F53 100%)",
    buttonId: "Wärmende-Himmel",
    zusaten: ["Karotten", "Walnüsse", "Zimt"],
    design: ["Goldbraune Kruste", "Mit Walnuss-Topping"],
    geschmack: ["Saftig", "Würzig", "Angenehm süß"]
}];

function showNavMenu () {
    let navMenu = document.getElementById("nav-links");
    let navDiv = document.getElementById("nav");
    if (navMenu.style.display == "flex"){
        navMenu.style.display = "none";
        navDiv.style.background = "transparent";
    } else {
        let viewportWidth = window.innerWidth;
        if (viewportWidth < 768){
            navMenu.style.display = "flex";
            navDiv.style.background = "linear-gradient(180deg, rgba(42, 36, 56, 0.80) 0%, rgba(42, 36, 56, 0.60) 100%)"
        }
    }
    
}

function loadCards (buttonId, cardSource) {
    const buttons = ["designer-cupcakes", "cupcake-combos", "wedding-cakes"];

    buttons.forEach(button => {
        var currentButton = document.getElementById(button)
        if (button == buttonId) {
            currentButton.classList.remove("unselected-button");
            currentButton.classList.add("selected-button");
        } else {
            if (currentButton.classList.contains("selected-button")) {
                currentButton.classList.remove("selected-button");
                currentButton.classList.add("unselected-button");
            }
        }
    });

    let cupcakeList = document.getElementById("cupcake-list");
    cupcakeList.innerHTML = ""
    cardSource.map(cupcake => {
        var cardDiv = document.createElement('div');
        cardDiv.classList.add("cupcake-card");
        cardDiv.style.background = cupcake.background;
        cardDiv.innerHTML = `
            <button id="${cupcake.buttonId}" class="cupcake-button" onclick="popUp(this.id)">
                    <p class="cupcake-title">${cupcake.name}</p>
                    <p class="cupcake-price">${cupcake.price}</p>
            </button> 
            <img class="cupcake-img" src="${cupcake.image}" />
                
        `
        document.getElementById("cupcake-list").appendChild(cardDiv);

    })
};



function popUp(id) {
    console.log(id);
    const allRecords = [cupcakeCombos, designerCupcakes, weddingCakes];
    let selectedCupcake
    allRecords.forEach((record) => {
        for(i=0; i<record.length; i++){
            if (id == record[i].buttonId){
                console.log(record[i]);
                selectedCupcake = record[i];
            }
        }
    });
    popUpDiv.innerHTML = `
            <div  id= "pop-up-card" class="pop-up-card">
            </div>
        
    `
    if(popUpDiv.style.display == "none") {
        popUpDiv.style.display = "flex"
    }

    let cupcakeWrapper = document.getElementById("cupcake-wrapper");
    cupcakeWrapper.insertBefore(popUpDiv, cupcakeWrapper.children[0])

    let popUpCard = document.getElementById("pop-up-card");
    

    setTimeout(function(){
        
        popUpCard.innerHTML = `
        <h2 class="change-margin">${selectedCupcake.name}</h2>
            <div id="inner-card" class="pop-up-inner-card">
                <img id="pop-up-img" class="pop-up-img cupcake-img" src="${selectedCupcake.image}"/>
                <div class= "bin-pop-up-text">
                    <div>
                        <p>Zutaten: </p>
                        <ul id="zusaten">
                        </ul>
                    </div>
                    <div>
                        <p>Design: </p>
                        <ul id="design">
                        </ul>
                    </div>
                    <div>
                        <p>Geschmack & Qualität: </p>
                        <ul id="geschmack">
                        </ul>
                    </div>
                </div>
            </div>
            <button class="pop-up-card-button" onclick="closePopUp()">Close</button>`

            let cupcakeImg = document.getElementById("pop-up-img");
            cupcakeImg.style.background = selectedCupcake.background;

            let viewportWidth = window.innerWidth;
            if (viewportWidth < 768) {
                popUpCard.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
            } else {
                popUpCard.scrollIntoView({behavior: "smooth", block: "center", inline: "center" })
            }
            
    
    function createListItems (listGroup, list) {
        listGroup.forEach((listItem) => {
            var newNode = document.createElement('li');
            var listNode = document.createTextNode(listItem);
            console.log(listNode);
            newNode.appendChild(listNode);
            document.getElementById(list).appendChild(newNode);
        })
    }

    createListItems(selectedCupcake.zusaten, "zusaten");
    createListItems(selectedCupcake.design, "design");
    createListItems(selectedCupcake.geschmack, "geschmack");
    }, 390)
}

function closePopUp(){
    popUpDiv.style.display = "none";
    popUpDiv.style.Zindex = "-1000";
    popUpDiv.innerHTML = ``;
}
