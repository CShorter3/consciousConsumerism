/*  Jennifer Echavarria And Calid Shorter
     May 5,2019
     Conscious Consumerism in Sewanee
*/

 
  var map2;
      var viewportMarkers = []; 
      var viewportMarkers2=[]; 
      var viewportMarkers3=[]; 
       var viewportMarkers4=[]; 
       var viewportMarkers5=[]; 
      var viewportMarkers6=[]; 
      var lineSymbol;    
      var polyline, line, line2, line3,line4, line5; 
 function initialize(){ 
    map2 = new google.maps.Map(document.getElementById('map2'),{
           center: {lat:38.226830, lng:1.886884},
             zoom: 1
              , streetViewControl: false
              , zoomControl:false
              ,mapTypeControl:false 
           });

    lineSymbol = {
	      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
	}
     polyline= new google.maps.Polyline({ 
                 path:loc,
                 strokeColor: '#006400',
                 strokeOpacity: 1.0,
                 strokeWeight: 2,
                 geodesic:true,
                 icons:[{icon:lineSymbol, offset:'100%',repeat: "100px"}]
               });  
      line= new google.maps.Polyline({ 
                 path:gra,
                 strokeColor: '#8B4513',
                 strokeOpacity: 1.0,
                 strokeWeight: 2,
                 geodesic:true,
                 icons:[{icon:lineSymbol, offset:'100%',repeat: "100px"}]
               });
      line2= new google.maps.Polyline({ 
                 path:cof,
                 strokeColor: '#CD853F',
                 strokeOpacity: 1.0,
                 strokeWeight: 2,
                 geodesic:true,
                 icons:[{icon:lineSymbol, offset:'100%',repeat: "100px"}]
               });

      line3= new google.maps.Polyline({ 
                 path:pot,
                 strokeColor: '#DAA520',
                 strokeOpacity: 1.0,
                 strokeWeight: 2,
                 geodesic:true,
                 icons:[{icon:lineSymbol, offset:'100%',repeat: "100px"}]
               });
      line4= new google.maps.Polyline({ 
                 path:water,
                 strokeColor: '#FF0000',
                 strokeOpacity: 1.0,
                 strokeWeight: 2,
                 geodesic:true,
                 icons:[{icon:lineSymbol, offset:'100%',repeat: "100px"}]
               });
      line5= new google.maps.Polyline({ 
                 path:lem,
                 strokeColor: ' #a569bd ',
                 strokeOpacity: 1.0,
                 strokeWeight: 2,
                 geodesic:true,
                 icons:[{icon:lineSymbol, offset:'100%',repeat: "100px"}]
               });
  }//end of initialize 
