/*  Jennifer Echavarria And Calid Shorter
     May 5,2019
     Conscious Consumerism in Sewanee
*/

var places = [
  { 'Name': 'McClurg Dinning Hall','City': 'Sewanee'
   , 'State':'TN'
   ,'Location': { 'Latitude': 35.203163
                 ,'Longitude':-85.920039}
   ,'image': 'McClurg.jpg'
   , 'Description': 'This is the University dinning hall and a source in which students recieve a source of food.'
   , 'Product': 'face.jpg'},

  { 'Name': 'Sysco', 'City': 'Knoxville'
   ,'State':'TN'
   ,'Location': { 'Latitude': 35.985985
                 ,'Longitude' :-83.944527}
   ,'image': 'sysco.jpeg'
   ,'Description': ' The University is invested with the sysco company in which recieves 70% of its food source.' 
   ,'Product': 'snacks.jpg'},

  { 'Name': 'The University Farm','City': 'Sewanee'
   ,'State':'TN'
   ,'Location': {'Latitude': 35.210813
                ,'Longitude' :-85.925716}
   ,'image': 'farm.jpg'
   ,'Description': 'The university farm provide fresh veggies such as Arugula, lettuce, kale, micro green, etc.'
   ,'Product': 'Arugula.jpg'},

  { 'Name': 'Purity Dairy','City': 'Mufreesboro'
    ,'State':'TN'
    ,'Location': { 'Latitude': 36.145464,'Longitude' :-86.751807}
    ,'image':'dairy.jpeg'
    ,'Description': 'The University recieve dairy products from this location.'
    ,'Product': 'Milk.jpg'},

  { 'Name': 'Dixie Produce', 'City': 'Chattanooga'
    ,'State':'TN'
    ,'Location': { 'Latitude': 35.038779
                 ,'Longitude':-85.298980}
    ,'image': 'Dixie.jpeg'
    ,'Description': 'The University recieve some vegetables from this location.'
    ,'Product': 'Vegetable.jpg'},

  { 'Name': 'Blue Monarch', 'City': 'McMinville'
    ,'State':'TN'
    ,'Location': { 'Latitude': 35.686160
                  ,'Longitude':-85.776952}
    ,'image':  'bm.jpeg' 
    ,'Description':'The University recieve some granola from this location.'
    ,'Product': 'granola.jpg'},

  { 'Name': 'Inland Seafood','City': 'Augusta'
    ,'State':'GA'
    ,'Location': { 'Latitude': 33.419883
                  ,'Longitude':-82.033546}
    ,'image': 'seafood.jpg'
    ,'Description': 'The University recieve seafood products from this location.'
    ,'Product': 'Fish.jpg'},

  { 'Name': 'Sequatchi Cove Farm','City': 'Sequatchi'
    ,'State':'TN'
    ,'Location': {'Latitude': 35.151231
                 ,'Longitude' :-85.603597}
    ,'image': 'scf.jpg'
    ,'Description':'The University recieve pork, beef, and some fruit products from this location.'
    ,'Product': 'Meat.jpg'},

  { 'Name': 'South Cumberland Food Hub','City': 'Tracy City'
    ,'State':'TN'
    ,'Location': { 'Latitude': 35.260539
                 ,'Longitude' :-85.735806}
    ,'image': 'SCFH.jpg'
    ,'Description':'The University recieve aan abundance of perishable foods from an abundance of farms around Tracy City.'
    ,'Product': 'farm.png'},

  { 'Name': 'Coca-Cola','City': 'Birmigham'
    ,'State':'AL'
    ,'Location': { 'Latitude': 33.561256
                  ,'Longitude' :-86.768592}
    ,'image': 'cocacola.jpeg'
    ,'Description':'The University recieve any and all cocacola product used as soft drinks in McClurg.'
    ,'Product': 'Coke.png'},

  {'Name': 'Royal Cup','City': 'Birmingham'
    ,'State':'AL'
    ,'Location': { 'Latitude': 33.624965
                  ,'Longitude' :-86.741042}
    ,'image': 'Royalcup.png'
    ,'Description':'The University recieves coffee and tea products here.'
    ,'Product': 'coffee.png'}
];

var locations = [
  { 'Name': 'England', 'Location': { 'Latitude': 52.669366,'Longitude' :-1.399347}},
  { 'Name': 'Germany', 'Location': { 'Latitude': 51.390863,'Longitude' :10.462415}},
  { 'Name': 'italy', 'Location': { 'Latitude':42.454265 ,'Longitude' :12.452142}}, 
  { 'Name': 'turkey', 'Location': { 'Latitude': 36.629128,'Longitude' :33.153906}},
  { 'Name': 'morocco', 'Location': { 'Latitude': 31.539395,'Longitude' :-6.851058}},
  { 'Name': 'portugal', 'Location': { 'Latitude':40.367157,'Longitude' :-7.977596}},
  { 'Name': 'England', 'Location': { 'Latitude': 52.669366,'Longitude' :-1.399347}},
  { 'Name': 'New york', 'Location': { 'Latitude': 40.684637,'Longitude' :-73.988828}}
];

// struggled for hours to figueout how to do a polyline with the markers
// array, but couldnt find it so i went ahead and did this...:/
var loc= [ 
  { lat: 52.669366,lng :-1.399347},
  { lat: 51.390863,lng :10.462415},
  { lat:42.454265 ,lng :12.452142},
  { lat: 36.629128,lng :33.153906},
  { lat: 31.539395,lng :-6.851058},
  { lat:40.367157, lng :-7.977596},
  { lat: 52.669366,lng :-1.399347},
  { lat: 40.684637,lng :-73.988828}
];
   

var granola= [ 
  { 'Name': 'Switzerland', 'Location': { 'Latitude': 46.947662,'Longitude' :8.297225}},
  { 'Name': 'new york', 'Location': { 'Latitude': 40.684637,'Longitude' :-73.988828}},
  { 'Name': 'australia', 'Location': { 'Latitude':-23.172821,'Longitude' :135.186433}},
  { 'Name': 'new zealand', 'Location': { 'Latitude': -42.495371,'Longitude' :172.696818}},
  { 'Name': 'England', 'Location': { 'Latitude': 52.669366,'Longitude' :-1.399347}},
];
//Polyline for Granola 
var gra=[ 
  {lat: 46.947662,lng :8.297225},
  {lat: 40.684637,lng:-73.988828},
  {lat:-23.172821,lng:135.186433},
  {lat: -42.495371,lng:172.696818},
  {lat: 52.669366,lng :-1.399347},
];

var coffee=[ 
  { 'Name': 'Ethiopia', 'Location': { 'Latitude': 10.241986,'Longitude' :38.003903}},
  { 'Name': 'Yemen', 'Location': { 'Latitude': 14.945012,'Longitude' :47.669173}},
  { 'Name': 'italy', 'Location': { 'Latitude':42.454265 ,'Longitude' :12.452142}},
  { 'Name': 'France', 'Location': { 'Latitude': 46.635047,'Longitude' :3.419332}},
  { 'Name': 'Spain', 'Location': { 'Latitude': 41.071450,'Longitude' :-3.424866}},
  { 'Name': 'England', 'Location': { 'Latitude': 52.669366,'Longitude' :-1.399347}},
  { 'Name': 'United States', 'Location': { 'Latitude': 39.846012,'Longitude' :-101.316892}},
];
//PL for Coffee
var cof=[
  { lat: 10.241986,lng:38.003903},
  { lat: 14.945012,lng :47.669173},
  { lat: 42.454265,lng :12.452142},
  { lat: 46.635047,lng:3.419332},
  { lat: 41.071450,lng:-3.424866},
  { lat: 52.669366,lng :-1.399347},
  { lat: 39.846012,lng:-101.316892},
];

var potatoes=[
  { 'Name': 'Peru', 'Location': { 'Latitude': -10.780786,'Longitude' :-75.697794}},
  { 'Name': 'italy', 'Location': { 'Latitude':42.454265 ,'Longitude' :12.452142}},
  { 'Name': 'France', 'Location': { 'Latitude': 46.635047,'Longitude' :3.419332}},
  { 'Name': 'Spain', 'Location': { 'Latitude': 41.071450,'Longitude' :-3.424866}},
  { 'Name': 'England', 'Location': { 'Latitude': 52.669366,'Longitude' :-1.399347}},
  { 'Name': 'United States', 'Location': { 'Latitude': 39.846012,'Longitude' :-101.316892}},
];
//PL for potatoes
var pot=[
  { lat: -10.780786,lng:-75.697794},
  { lat: 42.454265,lng :12.452142},
  { lat: 46.635047,lng:3.419332},
  { lat: 41.071450,lng:-3.424866},
  { lat: 52.669366,lng :-1.399347},
  { lat: 39.846012,lng:-101.316892},
];

var watermelon=[ 

  { 'Name': 'Kalahari Desert', 'Location': { 'Latitude': -31.019219,'Longitude' :23.695904}},
  { 'Name': 'Egypt', 'Location': { 'Latitude':30.896546 ,'Longitude' :31.385840}},
  { 'Name': 'Libya', 'Location': { 'Latitude': 32.371241,'Longitude' :13.539960}},
  { 'Name': 'Tunisia', 'Location': { 'Latitude': 36.745140,'Longitude' :10.287596}},
  { 'Name': 'China', 'Location': { 'Latitude': 34.640903,'Longitude' :104.461786}},
  { 'Name': 'Spain', 'Location': { 'Latitude': 39.671042,'Longitude' :-3.165609}},
  { 'Name': 'United States', 'Location': { 'Latitude': 39.846012,'Longitude' :-101.316892}},
];
// PL for Waterlemon
var water=[ 
  { lat: -31.019219,lng:23.695904},
  { lat:30.896546 ,lng :31.385840},
  { lat: 32.371241,lng :13.539960},
  { lat: 36.745140,lng :10.287596},
  { lat: 34.640903,lng :104.461786},
  { lat: 39.671042,lng :-3.165609},
  { lat: 39.846012,lng :-101.316892},
];

var lemon=[ 
  { 'Name': 'China', 'Location': { 'Latitude': 34.640903,'Longitude' :104.461786}},
  { 'Name': 'India', 'Location': { 'Latitude':22.847268 ,'Longitude' :79.264581}},
  { 'Name': 'Spain', 'Location': { 'Latitude': 39.671042,'Longitude' :-3.165609}},
  { 'Name': 'Northern Africa', 'Location': { 'Latitude': 23.217546,'Longitude' :12.259745}},
  { 'Name': 'Palestine', 'Location': { 'Latitude': 31.758006,'Longitude' :35.162417}},
  { 'Name': 'England', 'Location': { 'Latitude': 52.669366,'Longitude' :-1.399347}},
  { 'Name': 'Florida', 'Location': { 'Latitude': 27.289616,'Longitude' :-81.124023}},
  { 'Name': 'California', 'Location': { 'Latitude': 36.761092,'Longitude' :-120.143368}},
];

//PL for Lemon
var lem=[
  {lat: 34.640903,lng :104.461786},
  { lat:22.847268 ,lng:79.264581},
  { lat: 39.671042,lng:-3.165609},
  { lat: 23.217546,lng :12.259745},
  { lat: 31.758006,lng:35.162417},
  { lat: 52.669366,lng:-1.399347},
  { lat: 27.289616,lng :-81.124023},
  { lat: 36.761092,lng:-120.143368},
];

var InfoBox=[
{'Description':'Arugula has travelled through different countries. In the 1800s Arugula has started to be use for culinary in England. From England, it has travelled through out Europe. So it hads travelled through Germany, Italy, Turkey, Morrocco, Portugal, back to England and into the U.S, Specifically New York.'}, 

{'Description':'The original granola is similar to the European muesli which was invented by the Swiss physician Max Bircher-Benner,The first granola was developed in 1863 by James Caleb Jackson. The name is now a trademark only in Australia and New Zealand.Granola was invented in Dansville, New York, by Dr. James Caleb Jackson at the Jackson Sanitarium in 1863. It has travelled from Switzeland to New York to Austrailia to New zealand and then to England'},

{'Description':'Coffee has begun as an Ethiopian coffee plant and then Grown in yemen arabia for the drink. Then taken to europe. Then the US '}, 

{'Description':'The Inca Indians in Peru were the first to cultivate potatoes around 8,000 BC to 5,000 B.C. In 1536 Spanish Conquistadors conquered Peru, discovered the flavors of the potato, and carried them to Europe.'}, 

{'Description':'Watermelon originated in the Kalahari Desert of Africa.Watermelon harvest occurred nearly 5,000 years ago in Egypt. The 10th century, watermelon found its way to China, which is now the worlds number one producer. So Watermelon has travelled from kahlahari Desert, to Egypt, then libya, then tunisa, then china, then spain and then to the U.S.'},

{'Description':'Lemons were originally developed as a cross between the lime and the citron and are thought to have originated in China or India, having been cultivated in these regions for about 2,500 years. Their first introduction to Europe was by Arabs who brought them to Spain in the 11th century around the same time that they were introduced into Northern Africa. The Crusaders, who found the fruit growing in Palestine, are credited with bringing the lemon to other countries across Europe. Like many other fruits and vegetables, lemons were brought to the Americas by Christopher Columbus in his second voyage to the New World in 1493, and have been grown in Florida since the 16th century. Lemons have travelled from China to India to spain to Northern Africa to palestine to England to Florida to California'}];

function getInfo(infonum){ 
       
 document.getElementById('infoBox').innerHTML = InfoBox[infonum].Description;

}




