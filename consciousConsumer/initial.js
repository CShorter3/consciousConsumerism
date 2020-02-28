/*  Jennifer Echavarria And Calid Shorter
     May 5,2019
     Conscious Consumerism in Sewanee
*/

  var map;
  var infoWindow;
  var radiusShape; 
  var Data = [];                
  var viewportMarkers = [];  
  var rotation = 0;
  var polyLine;
  var polyOptions;    
   
  
  function init() {

    var DG={lat:35.202788, lng:-85.920863};            

    var mapOptions = { zoom: 15
                     , center: DG
                     ,panControl: true
                     , zoomControl:true
                     ,scaleControl: false
                     , streetViewControl: false, 
                      overviewMapControl: true,
                    gestureHandling: 'greedy',                 
                    mapTypeControl:false,
                    styles:[
                      {elementType: 'geometry', stylers: [{color: 'fed7fe'}]},
                      {elementType: 'labels.text.stroke', stylers: [{color: ' #fdfefe '}]},
                      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                      {
                       featureType: 'administrative.locality',
                       elementType: 'labels.text.fill',
                       stylers: [{color: '#d59563'}]
                      },
                      {
                         featureType: 'poi',
                         elementType: 'labels.text.fill',
                         stylers: [{color: '#d59563'}]
                       },
                       {
                          featureType: 'poi.park',
                          elementType: 'geometry',
                          stylers: [{color: ' #85929e '}]
                        },
                        {
                          featureType: 'poi.park',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#6b9a76'}]
                        },
                        {
                           featureType: 'road',
                           elementType: 'geometry',
                               stylers: [{color: ' #bfc9ca '}]
                         },
                         {
                             featureType: 'road',
                             elementType: 'geometry.stroke',
                                 stylers: [{color: '#212a37'}]
                         },
                         {
                            featureType: 'road',
                            elementType: 'labels.text.fill',
                             stylers: [{color: '#9ca5b3'}]
                          },
                          {
                             featureType: 'road.highway',
                             elementType: 'geometry',
                             stylers: [{color: '#bfc9ca'}]
                          },
                           {
                              featureType: 'road.highway',
                              elementType: 'geometry.stroke',
                              stylers: [{color: '#1f2835'}]
                           },
                            {
                              featureType: 'road.highway',
                              elementType: 'labels.text.fill',
                               stylers: [{color: '#f3d19c'}]
                           },
                            {
                               featureType: 'transit',
                               elementType: 'geometry',
                               stylers: [{color: '#2f3948'}]
                           },
                           {
                               featureType: 'transit.station',
                                elementType: 'labels.text.fill',
                                stylers: [{color: '#d59563'}]
                            },
                             {
                                 featureType: 'water',
                                 elementType: 'geometry',
                                 stylers: [{color: ' #ccd1d1'}]
                           },
                            {
                                 featureType: 'water',
                                 elementType: 'labels.text.fill',
                                   stylers: [{color: '#515c6d'}]
                           },
                             {
                                 featureType: 'water',
                                 elementType: 'labels.text.stroke',
                                   stylers: [{color: '#17263c'}]
                            }
                          ]

                    
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    google.maps.event.addListener(map, 'bounds_changed', function() {showMarkersInViewport()});

    showMarkersInViewport();
    // SvG Grabbed from http://jsfiddle.net/upsidown/eLcNq/
    var iconCar = {
        
      path: 'M -53.582954,-415.35856 C -67.309015,-415.84417 -79.137232,-411.40275 -86.431515,-395.45159 L -112.76807,-329.50717 C -131.95714,-324.21675 -140.31066,-310.27864 -140.75323,-298.84302 L -140.75323,-212.49705 L -115.44706,-212.49705 L -115.44706,-183.44029 C -116.67339,-155.74786 -71.290042,-154.67757 -70.275134,-183.7288 L -69.739335,-212.24976 L 94.421043,-212.24976 L 94.956841,-183.7288 C 95.971739,-154.67759 141.39631,-155.74786 140.16998,-183.44029 L 140.16998,-212.49705 L 165.43493,-212.49705 L 165.43493,-298.84302 C 164.99236,-310.27864 156.63886,-324.21677 137.44977,-329.50717 L 111.11322,-395.45159 C 103.81894,-411.40272 91.990714,-415.84414 78.264661,-415.35856 L -53.582954,-415.35856 z M -50.57424,-392.48409 C -49.426163,-392.49037 -48.215854,-392.45144 -46.988512,-392.40166 L 72.082372,-392.03072 C 82.980293,-392.28497 87.602258,-392.03039 92.236634,-381.7269 L 111.19565,-330.61998 L -86.30787,-330.86727 L -67.554927,-380.61409 C -64.630656,-390.57231 -58.610776,-392.44013 -50.57424,-392.48409 z M -92.036791,-305.02531 C -80.233147,-305.02529 -70.646071,-295.47944 -70.646071,-283.6758 C -70.646071,-271.87217 -80.233147,-262.28508 -92.036791,-262.28508 C -103.84043,-262.28508 -113.42751,-271.87216 -113.42751,-283.6758 C -113.42751,-295.47946 -103.84043,-305.02531 -92.036791,-305.02531 z M 117.91374,-305.02531 C 129.71738,-305.02533 139.26324,-295.47944 139.26324,-283.6758 C 139.26324,-271.87216 129.71738,-262.28508 117.91374,-262.28508 C 106.1101,-262.28507 96.523021,-271.87216 96.523021,-283.6758 C 96.523021,-295.47944 106.1101,-305.02531 117.91374,-305.02531 z M 103.2216,-333.14394 L 103.2216,-333.14394 z M 103.2216,-333.14394 C 103.11577,-333.93673 102.96963,-334.55679 102.80176,-335.21316 C 101.69663,-339.53416 100.2179,-342.16153 97.043938,-345.3793 C 93.958208,-348.50762 90.488134,-350.42644 86.42796,-351.28706 C 82.4419,-352.13197 45.472822,-352.13422 41.474993,-351.28706 C 33.885682,-349.67886 27.380491,-343.34759 25.371094,-335.633 C 25.286417,-335.3079 25.200722,-334.40363 25.131185,-333.2339 L 103.2216,-333.14394 z M 64.176391,-389.01277 C 58.091423,-389.00227 52.013792,-385.83757 48.882186,-379.47638 C 47.628229,-376.92924 47.532697,-376.52293 47.532697,-372.24912 C 47.532697,-368.02543 47.619523,-367.53023 48.822209,-364.99187 C 50.995125,-360.40581 54.081354,-357.67937 59.048334,-355.90531 C 60.598733,-355.35157 62.040853,-355.17797 64.86613,-355.27555 C 68.233081,-355.39187 68.925861,-355.58211 71.703539,-356.95492 C 75.281118,-358.72306 77.90719,-361.35074 79.680517,-364.96188 C 80.736152,-367.11156 80.820083,-367.68829 80.820085,-372.0392 C 80.820081,-376.56329 80.765213,-376.87662 79.470596,-379.50637 C 76.3443,-385.85678 70.261355,-389.02327 64.176391,-389.01277 z',
      fillColor: '#FF0000',
      fillOpacity: .6,
      anchor: new google.maps.Point(12,-290),
      strokeWeight: 0,
      scale: .05,
      rotation: 180
   }
    //our polylines on the map
    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4
    };
    var Arugula= new google.maps.Polyline({
      path: [{lat:35.210813     ,lng: -85.925716    }
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      , map:map
      ,strokeColor:'#069b47' 
    });
    var Granola= new google.maps.Polyline({ 
      path: [{lat:35.686160     ,lng: -85.776952    }
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:'#069b47' 
     
    });
    var Fish= new google.maps.Polyline({ 
      path: [{lat:33.419883     ,lng:-82.033546   }
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:' #f3e103  ' 
    });
    var SyscoN= new google.maps.Polyline({ 
      path: [{lat:35.985985     ,lng:-83.944527   }
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:'#069b47' 
     
    });
   var Foodhub= new google.maps.Polyline({ 
       path:[{lat:35.260539    ,lng:-85.735806   }
             ,{lat:35.244017     ,lng:-85.844876     }  
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:'#069b47'
    });
    var CoveFarm= new google.maps.Polyline({ 
       path:[{lat:35.151231   ,lng:-85.603597   } 
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:'#069b47'
    });
    var Dairy= new google.maps.Polyline({ 
       path:[{lat:36.145464   ,lng:-86.751807  } 
            ,{lat:35.367621     ,lng:-86.212071    }
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:' #f3e103 '
    });
    var Dixie= new google.maps.Polyline({ 
       path:[{lat:35.038779   ,lng:-85.298980  } 
            ,{lat:35.009307     ,lng:-85.704315    }
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:'#f3e103'
    });
    var Coke= new google.maps.Polyline({ 
       path:[{lat:33.561256   ,lng:-86.768592  } 
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:'#069b47'
    });
    var Coffee= new google.maps.Polyline({ 
       path:[{lat:33.624965   ,lng:-86.741042 }
             ,{lat:33.769146    ,lng:-86.632059     }
             ,{lat:33.948823    ,lng:-86.475814    }  
             ,{lat:34.669684   ,lng:-86.013564   }  
            ,{lat:35.203163     ,lng:-85.920039     }]
      ,icons:[{icon:iconCar, offset:'100%'}]
      ,map:map
      ,strokeColor:'#069b47'
    });
    animateCar(Coke);
    animateCar(Dixie); 
    animateCar(Dairy);
    animateCar(CoveFarm);
    animateCar(Foodhub);
    animateCar(Arugula);
    animateCar(Granola);
    animateCar(Fish);
    animateCar(SyscoN);
    animateCar(Coffee); 
 
  }//end of init()
  //animation for cars following polylines
  function animateCar(line2) {
    var count = 0;
    window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line2.get('icons');
    icons[0].offset = (count / 2) + '%';
    line2.set('icons', icons);
    }, 100);
  }

  function showMarkersInViewport() {
    if (map.getBounds() == null) return;
 
    var placesInViewport = getplaces(map.getBounds());
    if (viewportMarkers != null) {
      for (i = 0; i < viewportMarkers.length; i++) {
        viewportMarkers[i].setMap(null);
      }
      viewportMarkers = [];
    }//end of if

    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < placesInViewport.length; i++) {

      latLng = new google.maps.LatLng(placesInViewport[i].Location.Latitude
                                     ,placesInViewport[i].Location.Longitude);
      
      var marker = new google.maps.Marker({
              position: latLng,
              title: 'LOCAL: ' + placesInViewport[i].Name + ' in ' 
                               + placesInViewport[i].City + ', ' 
                               + placesInViewport[i].State, 
              animation: google.maps.Animation.DROP,
              icon: placesInViewport[i].Product
      });
      marker.objInfo= '<span style="font-family:Trebuchet MS; font-size:10pt; color: maroon">'
                   + '<img src=" '
                   + placesInViewport[i].image 
                   +'" style="width:50%; height:50%;">' 
                   + '<style="width:70px; height:70px"><br><b>' 
                   + placesInViewport[i].Name
                   + '</b> <br> <p><i>' 
                   +  placesInViewport[i].Description 
                   + '</i></p>'; 
      (function(index, selectedMarker){
        google.maps.event.addListener(selectedMarker, 'click', function() {
          if (infoWindow != null) infoWindow.setMap(null); 
            infoWindow = new google.maps.InfoWindow(); 
            infoWindow.setContent(selectedMarker.objInfo); 
            infoWindow.open(map, selectedMarker); 
        });
      })(i, marker)
     // Grabbed Online... https://stackoverflow.com/questions/37456627/how-to-change-the-infowindow-background-color 
      google.maps.event.addListenerOnce(map, 'idle', function(){
          jQuery('.gm-style-iw').prev('div').remove();
      }); 

      marker.setMap(map);
      viewportMarkers.push(marker);

    }//endfor
  }//end of Function


  
  function getplaces(B) {
    var selected = [];
    for (i = 0; i < places.length; i++) {
      if (B.contains(new google.maps.LatLng(places[i].Location.Latitude, places[i].Location.Longitude))) {
        selected.push(places[i]);
      }
    }
    return selected;
  }

  
  function highlightMarker(index) {
    if (infoWindow != null) infoWindow.setMap(null);
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(viewportMarkers[index].objInfo);
    infoWindow.open(map, viewportMarkers[index]);
  }
  // every company defines their own measurment of local products
  // companies that buy product from a different company that is not 
  // located directly within its radius can still be consider local
  // local food at is based on the measurement defined at the source 
  // not based on where consumed at
  var localRadius = {
      mcClurg: {
          center: {lat: 35.203163, lng:-85.920039},
          mileR: 125
      },
      Sysco: {
          center: {lat: 35.985985, lng: -83.944527},
          mileR: 250
      },
      farm: {
          center: {lat: 35.210813, lng: -85.925716},
          mileR: 1
      },
      dairy: {
          center: {lat: 36.145464,lng: -86.751807},
          mileR: 250
      },
      dixie: {
          center: {lat: 35.038779, lng:-85.298980},
          mileR: 200
      },
      bm: {
          center: {lat: 35.686160, lng :-85.776952},
          mileR: 125
      },
      inlandSeafood: {
          center: {lat:33.419821,lng:-82.0356901},
          mileR: 300
      },
      sCoveFarm: {
          center: {lat: 35.151231,lng: -85.603597},
          mileR: 150
      },
      cocaCola: {
          center: {lat: 33.561256,lng:-86.768592},
          mileR: 1000 //"regional" radius
      },
      royalCup: {
          center: {lat: 33.624965,lng: -86.741042},
          mileR: 150
      },
      sCumbFoodHub: {
          center: {lat: 35.260539,lng: -85.735806},
          mileR: 600
      }
 };  

  function mapRadii(){  
  for (var company in localRadius) {
            var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 0.5,
            fillColor: '#FF0000',
            fillOpacity: 0.25,
            map: map,
            center: localRadius[company].center,
            radius: Math.sqrt(localRadius[company].mileR) * 1609.34  // 1 mile= 1609.34 meters
          });
        map.setCenter(new google.maps.LatLng(35.203163,-85.920039));
        map.setZoom(8.5);
        } 
  }

