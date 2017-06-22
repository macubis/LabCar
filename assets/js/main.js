
    var inputPartida =(document.getElementById(“punto-partida”));    
    var autocompleteOrigen = new google.maps.places.Autocomplete(inputPartida);
    autocompleteOrigen.bindTo(‘bounds’, map);
    
    var inputLlegada = document.getElementById(“punto-llegada”);
    var autocompleteDestino = new google.maps.places.Autocomplete(inputLlegada);
    autocompleteDestino.bindTo(‘bounds’, map);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true}); 
    directionsDisplay.setMap(map);
