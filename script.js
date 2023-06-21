(function(){
    'use strict';

    const detailsForm = document.querySelector('#destination_details_forms');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault(); 
    //1. extract the value from each form field
    //2. clear out the form fields
    //3.  run a function that creates the new card
    //4. if needed,change the header at the top of the destination list 
    //5. add the card

    //1. extract the value from each form field
    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;

     //2. clear out the form fields
     for (let i = 0 ; i<detailsForm.length; i++){
        detailsForm.elements[i].value= "";
     }

      //3.  run a function that creates the new card
      var destCard = createDestinationCard(destName,destLocation,destPhoto, destDesc);
      

    //4. if needed,change the header at the top of the destination list 
    var wishListContainer = document.getElementById('destinations_container');

    if(wishListContainer.children.length == 0){
     document.getElementById('title').innerHTML = "My Wish List";
    }

    //add the card
    document.querySelector('#destinations_container').appendChild(destCard);
}



function createDestinationCard(name,location,photoURL,description){
    const card = document.createElement("div");
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt',name);
    /*Then images really should have an alt attribute, so I'm going to say img.setAttribute alt. I'm just going 
    to set it to name. Whatever gets passed in as the name of this location is going to get set as the attribute
    for the alt tag. */

    const constantPhotoUrl = "images/signpost.jpg";

    if(photoURL.length === 0){
        img.setAttribute('src',constantPhotoUrl);
    }
    else{
        img.setAttribute('src',photoURL);
    }

    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if(description.length !== 0){
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description ;
        cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click",removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card ;

}

function removeDestination(event){
    const card = event.target.parentElement.parentElement ;
    card.remove();
}
}());

