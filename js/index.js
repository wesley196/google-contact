// Selects all elements
const burgerMenu = document.querySelector("#burger-menu");
const sideBarMenu = document.querySelector("#side-bar");
const mainSection = document.querySelector("#main-section");
const btnCreateContact = document.querySelector("#btnCreateContact");
const btnCreateContact2 = document.querySelector("#btnCreateContact2");
const btnCreateContact3 = document.querySelector("#btnCreateContact3");
const btnPop = document.getElementById("btnPop");
const ajouter = document.getElementById("ajouter");
const btnAfficherContact = document.getElementById("btnAfficherContact");
const tableauContact = document.getElementById("tableauContact");
const tbody = document.getElementById("tbody");
const listContacts = document.getElementById("listContacts")

const contactContainer = document.querySelector("#contactContainer")
const ajoutContact = document.getElementById("ajoutContact")
const contactTitle = document.getElementById("contactTitle")


const prenom = document.getElementById("prenom")
const nom = document.getElementById("nom")
const entreprise = document.getElementById("entreprise")
const fonction = document.getElementById("fonction")
const email = document.getElementById("email")
const numero = document.getElementById("numero")
const profile = document.getElementById("inputLabel")

let afficheNbreContact = document.getElementById("mesContacts");
let Contacts = document.getElementById("Contacts");




//  Fonctions

//  Fonction afficher libellé
function afficheLibelle(libelle){
  const listLibele = document.querySelector(".listLibele");
  const selectLibelle = document.getElementById("selectLibelle");
  let option = document.createElement("option");

  let paragraphe = document.createElement("p");
  // let btnSupprimer = document.createElement("button");
  paragraphe.innerText = libelle
  option.innerText = libelle
  option.value= libelle.toLowerCase();

  // btnSupprimer.classList.add("button")
  // btnSupprimer.innerText = "Supprimer"
  listLibele.appendChild(paragraphe)
  selectLibelle.appendChild(option)

  // paragraphe.appendChild(btnSupprimer)

}


    

// Callback functions
const handleAddStyle = (element, style) => {
  element.classList.add(style);
};

const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

// Add events

burgerMenu.addEventListener("click", (event) => {
  if (sideBarMenu.classList.contains("md-display-none")) {
    handleRemoveStyle(sideBarMenu, "md-display-none");
    handleRemoveStyle(mainSection, "w-100");
  } else {
    handleAddStyle(sideBarMenu, "md-display-none");
    handleAddStyle(mainSection, "w-100");
  }
});

//................................................................
//................................................................

    // Bouton pour afficher le champ de creer contact
btnCreateContact.addEventListener("click",() =>{
  if(ajoutContact.classList.contains("md-display-none")) {
    handleRemoveStyle(ajoutContact, "md-display-none");
    handleAddStyle(contactTitle, "md-display-none")
    handleAddStyle(contactContainer, "md-display-none")
  }
    if(!listContacts.classList.contains("md-display-none")){
      handleAddStyle(listContacts, "md-display-none")
    }
  else {
    // handleAddStyle(ajoutContact ,"md-display-none");
  }


});

btnCreateContact2.addEventListener("click",() =>{
  if(ajoutContact.classList.contains("md-display-none")) {
    handleRemoveStyle(ajoutContact, "md-display-none");
    handleAddStyle(contactTitle, "md-display-none")
    handleAddStyle(contactContainer, "md-display-none")
  }
    if(!listContacts.classList.contains("md-display-none")){
      handleAddStyle(listContacts, "md-display-none")
    }
  else {
    // handleAddStyle(ajoutContact ,"md-display-none");
  }
});

btnCreateContact3.addEventListener("click",() =>{
  if(ajoutContact.classList.contains("md-display-none")) {
    handleRemoveStyle(ajoutContact, "md-display-none");
    handleAddStyle(contactTitle, "md-display-none")
    handleAddStyle(contactContainer, "md-display-none")
  }
    if(!listContacts.classList.contains("md-display-none")){
      handleAddStyle(listContacts, "md-display-none")
    }
  else {
    // handleAddStyle(ajoutContact ,"md-display-none");
  }
});
      // End Menu creer contact

//  liste contact
btnAfficherContact.addEventListener("click", () =>{

  if (listContacts.classList.contains("md-display-none")) {
      handleRemoveStyle(listContacts, "md-display-none")
      handleAddStyle(contactTitle, "md-display-none")
      handleAddStyle(contactContainer, "md-display-none")


  
  } if (!ajoutContact.classList.contains("md-display-none")) {
       handleAddStyle(ajoutContact, "md-display-none")
        
  }

    if (contactTitle.classList.contains("md-display-none")) {
     handleRemoveStyle(contactTitle, "md-display-none")
      
    }
  
    else {
    
  }


})


      //  Ouvrir le Popup
btnPop.addEventListener("click", (event) =>{
  
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  const closePopup = document.getElementById("closePopup");
  const inputPop = document.querySelector("#inputLibele");
  const addlibelle = document.getElementById("addLibelle");

  popup.classList.remove("hidden");

      //  Ajouter Libelle
  addlibelle.addEventListener("click", () =>{
    if(inputPop.value != ''){

    // console.log(inputPop.value)
    afficheLibelle(inputPop.value)

    }
    inputPop.value = ''
  })
  

      // Fermer le Popup
closePopup.addEventListener("click", (event) => {
  popup.classList.add("hidden");
      });

})


 //  Bouton enregistrer nouveau contact
 ajouter.addEventListener("click", () => {
  // Récupération de l'option sélectionnée
  const selectLibelle = document.getElementById("selectLibelle");
  const option = selectLibelle.options[selectLibelle.selectedIndex];
  // let divProfile = `<div>
  //                         <span class="divProfile"> ${prenom.value.trim().charAt(0).toUpperCase()}</span>

  //                         </div>`

                          

  const newContact = [
      `<span class="divProfile"> ${prenom.value.trim().charAt(0).toUpperCase()}</span> ${prenom.value} ${nom.value}`,
      email.value,
      numero.value,
      `${fonction.value}, ${entreprise.value}`,
      option ? option.value : '-' // Ajoute un fallback si aucune option n'est sélectionnée
  ];

  // Ajouter le contact dans une table HTML
  const trContact = document.createElement("tr");
  newContact.forEach(value => {
      const td = document.createElement("td");
      td.innerHTML = value;
      trContact.appendChild(td);
  });

  tbody.appendChild(trContact);

  const nbreContact = document.querySelectorAll("tbody tr").length;
  afficheNbreContact.innerText = `(${nbreContact})`;
  Contacts.innerText = `${nbreContact}`;

  // Réinitialisation des champs
  prenom.value = "";
  nom.value = "";
  entreprise.value = "";
  fonction.value = "";
  email.value = "";
  numero.value = "";
});


  

 