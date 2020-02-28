/*  Jennifer Echavarria And Calid Shorter
     April 30,2019
     Conscious Consumerism in Sewanee
     Generates Markers for the second Map
*/
  
function showMarkersInViewport7() {
    if (map2.getBounds() == null) return;
 
    var locationsInViewport = getLocations(map2.getBounds());
    if (viewportMarkers != null) {
      for (i = 0; i < viewportMarkers.length; i++) {
        viewportMarkers[i].setMap(null);
      }
      viewportMarkers = [];
    }//end of if

    var bounds = new google.maps.LatLngBounds();
    var labels='123456789';
    var labelIndex = 0;

    for (i = 0; i < locationsInViewport.length; i++) {

      latLng = new google.maps.LatLng(locationsInViewport[i].Location.Latitude
                                     ,locationsInViewport[i].Location.Longitude);
      
      var marker = new google.maps.Marker({
              position: latLng,
              title: 'INT: ' + locationsInViewport[i].Name, 
              animation: google.maps.Animation.DROP,
              label:
          { text:  labels[labelIndex++ % labels.length]
           ,color: "white"
          }
      });
 

   
      marker.setMap(map2);
      viewportMarkers.push(marker);
      removeAll()
    }//endfor
   
     polyline.setMap(map2); 
     animateArrow(polyline); 
  }//end of Function
  function getLocations(B) {
    var selected = [];
    for (i = 0; i < locations.length; i++) {
      if (B.contains(new google.maps.LatLng(locations[i].Location.Latitude, locations[i].Location.Longitude))) {
        selected.push(locations[i]);
      }
    }
    return selected;
  }

  
  function highlightMarker(index) {
    if (infoWindow != null) infoWindow.setMap(null);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(viewportMarkers[index].objInfo);
    infoWindow.open(map2, viewportMarkers[index]);
  }
   function animateArrow(polyline) {
    var count = 0;
    window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = polyline.get('icons');
    icons[0].offset = (count / 2) + '%';
    polyline.set('icons', icons);
    }, 100);
 }

//----------------------------------------------------------------------
//GRANOLA MARKERS   
    function showMarkersInViewport2() {
    if (map2.getBounds() == null) return;
    console.log("hello i am atleast being TRIGGERED ARENT I???");
    var granolaInViewport = getGranola(map2.getBounds());
    if (viewportMarkers2 != null) {
      for (i = 0; i < viewportMarkers2.length; i++) {
        viewportMarkers2[i].setMap(null);
      }
      viewportMarkers2 = [];
    }//end of if

    var bound = new google.maps.LatLngBounds();
     var labels='123456789';
    var labelIndex = 0;

    for (i = 0; i < granolaInViewport.length; i++) {

      latLngs = new google.maps.LatLng(granolaInViewport[i].Location.Latitude
                                     ,granolaInViewport[i].Location.Longitude);
      
      var marker = new google.maps.Marker({
              position: latLngs,
              title: 'INT: ' + granolaInViewport[i].Name, 
              animation: google.maps.Animation.DROP,
                 label:
          { text:  labels[labelIndex++ % labels.length]
           ,color: "white"
          }
      });
 

   
      marker.setMap(map2);
      viewportMarkers2.push(marker);
      removeAll(); 

    }//endfor
    
     
     line.setMap(map2); 
     animateArrow(line); 
    
  }//end of Function
  function getGranola(B) {
    var selected = [];
    for (i = 0; i < granola.length; i++) {
      if (B.contains(new google.maps.LatLng(granola[i].Location.Latitude, granola[i].Location.Longitude))) {
        selected.push(granola[i]);
      }
    }
    return selected;
  }

  
  function highlightMarker(index) {
    if (infoWindow != null) infoWindow.setMap(null);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(viewportMarkers2[index].objInfo);
    infoWindow.open(map2, viewportMarkers2[index]);
  }
    function animateArrow(line) {
    var count = 0;
    window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line.get('icons');
    icons[0].offset = (count / 2) + '%';
    line.set('icons', icons);
    }, 100);
  }

// COFFEE ---------------------------------------------------------------------------

 function showMarkersInViewport3() {
    if (map2.getBounds() == null) return;
    console.log("hello i am atleast being TRIGGERED ARENT I???");
    var coffeeInViewport = getCoffee(map2.getBounds());
    if (viewportMarkers3 != null) {
      for (i = 0; i < viewportMarkers3.length; i++) {
        viewportMarkers3[i].setMap(null);
      }
      viewportMarkers3 = [];
    }//end of if

    var bound = new google.maps.LatLngBounds();
     var labels='123456789';
    var labelIndex = 0;

    for (i = 0; i < coffeeInViewport.length; i++) {

      latLngs = new google.maps.LatLng(coffeeInViewport[i].Location.Latitude
                                     ,coffeeInViewport[i].Location.Longitude);
      
      var marker = new google.maps.Marker({
              position: latLngs,
              title: 'INT: ' + coffeeInViewport[i].Name, 
              animation: google.maps.Animation.DROP,
                 label:
          { text:  labels[labelIndex++ % labels.length]
           ,color: "white"
          }
      });
 

   
     marker.setMap(map2);
      viewportMarkers3.push(marker);
      removeAll(); 

    }//endfor
    
    
     line2.setMap(map2); 
     animateArrow(line2); 
    
  }//end of Function
  function getCoffee(B) {
    var selected = [];
    for (i = 0; i < coffee.length; i++) {
      if (B.contains(new google.maps.LatLng(coffee[i].Location.Latitude, coffee[i].Location.Longitude))) {
        selected.push(coffee[i]);
      }
    }
    return selected;
  }

  
  function highlightMarker(index) {
    if (infoWindow != null) infoWindow.setMap(null);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(viewportMarkers3[index].objInfo);
    infoWindow.open(map2, viewportMarkers3[index]);
  }
    function animateArrow(line2) {
    var count = 0;
    window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line2.get('icons');
    icons[0].offset = (count / 2) + '%';
    line2.set('icons', icons);
    }, 100);
  }
  
// POTATOES -------------------------------------------------------------------------


   function showMarkersInViewport4() {
    if (map2.getBounds() == null) return;
    console.log("hello i am atleast being TRIGGERED ARENT I???");
    var potatoesInViewport = getPotatoes(map2.getBounds());
    if (viewportMarkers3 != null) {
      for (i = 0; i < viewportMarkers4.length; i++) {
        viewportMarkers4[i].setMap(null);
      }
      viewportMarkers4 = [];
    }//end of if

    var bound = new google.maps.LatLngBounds();
     var labels='123456789';
    var labelIndex = 0;

    for (i = 0; i < potatoesInViewport.length; i++) {

      latLngs = new google.maps.LatLng(potatoesInViewport[i].Location.Latitude
                                     ,potatoesInViewport[i].Location.Longitude);
      
      var marker = new google.maps.Marker({
              position: latLngs,
              title: 'INT: ' + potatoesInViewport[i].Name, 
              animation: google.maps.Animation.DROP,
                 label:
          { text:  labels[labelIndex++ % labels.length]
           ,color: "white"
          }
      });
 

   
      marker.setMap(map2);
      viewportMarkers4.push(marker);
      removeAll(); 

    }//endfor
    
    
     line3.setMap(map2); 
     animateArrow(line3); 
    
  }//end of Function
  function getPotatoes(B) {
    var selected = [];
    for (i = 0; i < potatoes.length; i++) {
      if (B.contains(new google.maps.LatLng(potatoes[i].Location.Latitude, potatoes[i].Location.Longitude))) {
        selected.push(potatoes[i]);
      }
    }
    return selected;
  }

  
  function highlightMarker(index) {
    if (infoWindow != null) infoWindow.setMap(null);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(viewportMarkers4[index].objInfo);
    infoWindow.open(map2, viewportMarkers4[index]);
  }
    function animateArrow(line3) {
    var count = 0;
    window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line3.get('icons');
    icons[0].offset = (count / 2) + '%';
    line3.set('icons', icons);
    }, 100);
  }
 
   
//WATERMELON --------------------------------------------------------------------------
  function showMarkersInViewport5() {
    if (map2.getBounds() == null) return;
    console.log("hello i am atleast being TRIGGERED ARENT I???");
    var watermelonInViewport = getWatermelon(map2.getBounds());
    if (viewportMarkers5 != null) {
      for (i = 0; i < viewportMarkers5.length; i++) {
        viewportMarkers5[i].setMap(null);
      }
      viewportMarkers5 = [];
    }//end of if

    var bound = new google.maps.LatLngBounds();
     var labels='123456789';
    var labelIndex = 0;

    for (i = 0; i < watermelonInViewport.length; i++) {

      latLngs = new google.maps.LatLng(watermelonInViewport[i].Location.Latitude
                                     ,watermelonInViewport[i].Location.Longitude);
      
      var marker = new google.maps.Marker({
              position: latLngs,
              title: 'INT: ' + watermelonInViewport[i].Name, 
              animation: google.maps.Animation.DROP,
                 label:
          { text:  labels[labelIndex++ % labels.length]
           ,color: "white"
          }
      });
 

   
      marker.setMap(map2);
      viewportMarkers5.push(marker);
      removeAll(); 

    }//endfor
    
     
     line4.setMap(map2); 
     animateArrow(line4); 
    
  }//end of Function
  function getWatermelon(B) {
    var selected = [];
    for (i = 0; i < watermelon.length; i++) {
      if (B.contains(new google.maps.LatLng(watermelon[i].Location.Latitude, watermelon[i].Location.Longitude))) {
        selected.push(watermelon[i]);
      }
    }
    return selected;
  }

  
  function highlightMarker(index) {
    if (infoWindow != null) infoWindow.setMap(null);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(viewportMarkers5[index].objInfo);
    infoWindow.open(map2, viewportMarkers5[index]);
  }
    function animateArrow(line4) {
    var count = 0;
    window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line4.get('icons');
    icons[0].offset = (count / 2) + '%';
    line4.set('icons', icons);
    }, 100);
  }
// LEMONS ----------------------------------------------------------------------------

 function showMarkersInViewport6() {
    if (map2.getBounds() == null) return;
    console.log("hello i am atleast being TRIGGERED ARENT I???");
    var lemonInViewport = getLemon(map2.getBounds());
    if (viewportMarkers6 != null) {
      for (i = 0; i < viewportMarkers6.length; i++) {
        viewportMarkers6[i].setMap(null);
      }
      viewportMarkers6 = [];
    }//end of if

    var bound = new google.maps.LatLngBounds();
     var labels='123456789';
    var labelIndex = 0;

    for (i = 0; i < lemonInViewport.length; i++) {

      latLngs = new google.maps.LatLng(lemonInViewport[i].Location.Latitude
                                     ,lemonInViewport[i].Location.Longitude);
      
      var marker = new google.maps.Marker({
              position: latLngs,
              title: 'INT: ' + lemonInViewport[i].Name, 
              animation: google.maps.Animation.DROP,
                 label:
          { text:  labels[labelIndex++ % labels.length]
           ,color: "white"
          }
      });
 

   
      marker.setMap(map2);
      viewportMarkers6.push(marker);
      removeAll(); 

    }//endfor
    
     
     line5.setMap(map2); 
     animateArrow(line5); 
    
  }//end of Function
  function getLemon(B) {
    var selected = [];
    for (i = 0; i < lemon.length; i++) {
      if (B.contains(new google.maps.LatLng(lemon[i].Location.Latitude, lemon[i].Location.Longitude))) {
        selected.push(lemon[i]);
      }
    }
    return selected;
  }

  
  function highlightMarker(index) {
    if (infoWindow != null) infoWindow.setMap(null);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(viewportMarkers6[index].objInfo);
    infoWindow.open(map2, viewportMarkers6[index]);
  }
    function animateArrow(line5) {
    var count = 0;
    window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line5.get('icons');
    icons[0].offset = (count / 2) + '%';
    line5.set('icons', icons);
    }, 100);
  }






function removeAll(){ 

    for (var i= 0; i<viewportMarkers4.length; i++){ 
      viewportMarkers4[i].setMap(null); 
    }

    for (var i= 0; i<viewportMarkers3.length; i++){ 
      viewportMarkers3[i].setMap(null);  
    }
    for (var i= 0; i<viewportMarkers.length; i++){ 
      viewportMarkers[i].setMap(null);   
    }
    for (var i= 0; i<viewportMarkers2.length; i++){ 
      viewportMarkers2[i].setMap(null);   
    }
    for (var i= 0; i<viewportMarkers5.length; i++){ 
      viewportMarkers5[i].setMap(null);   
    }
    for (var i= 0; i<viewportMarkers6.length; i++){ 
      viewportMarkers6[i].setMap(null);   
    }
   
   polyline.setMap(null);
   line.setMap(null);
   line2.setMap(null); 
   line3.setMap(null);
   line4.setMap(null); 
   line5.setMap(null); 
  }

function hideButtons(){
   document.getElementById('A').style.visibility="hidden";
   document.getElementById('G').style.visibility="hidden";
   document.getElementById('C').style.visibility="hidden";
   document.getElementById('P').style.visibility="hidden";
   document.getElementById('W').style.visibility="hidden";
   document.getElementById('L').style.visibility="hidden";
}
function spawnButtons(){  
   document.getElementById('A').style.visibility="visible";
   document.getElementById('G').style.visibility="visible";
   document.getElementById('C').style.visibility="visible";
   document.getElementById('P').style.visibility="visible";
   document.getElementById('W').style.visibility="visible";
   document.getElementById('L').style.visibility="visible";
} 
count=0; 
function buttonWork(){ 
  if (count==0){
    spawnButtons(); 
    count=1;
  }else{ 
    removeAll();
    hideButtons();
    count=0; 
  }
} 
function showButtons(){  
   document.getElementById('Spring').style.visibility="visible";
   document.getElementById('Summer').style.visibility="visible";
   document.getElementById('Fall').style.visibility="visible";
   document.getElementById('Winter').style.visibility="visible";
   
} 
scnt=0; 
function seasonButton(){ 
  if (scnt==0){
    showButtons();
    scnt=1;
    map2.setCenter(new google.maps.LatLng(40,-98));
    map2.setZoom(4);
    map2.setMapTypeId('satellite');
   }else{
    scnt=0;
    map2.setCenter(new google.maps.LatLng(38.226830,1.886884));
    map2.setZoom(1); 
    map2.setMapTypeId('terrain');
   }

}


