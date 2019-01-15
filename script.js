function initMap(map) {
    
    /* Loading GeoJson Files */
    w = map.data.loadGeoJson('UK-Adresses/W.geojson');
    map.data.addGeoJson(w);
    e = map.data.loadGeoJson('UK-Adresses/E.geojson');
    map.data.addGeoJson(e);
    ec = map.data.loadGeoJson('UK-Adresses/EC.geojson');
    map.data.addGeoJson(e);
    b = map.data.loadGeoJson('UK-Adresses/B.geojson');
    map.data.addGeoJson(b);
    tr = map.data.loadGeoJson('UK-Adresses/TR.geojson');
    map.data.addGeoJson(tr);
    sw = map.data.loadGeoJson('UK-Adresses/SW.geojson');
    map.data.addGeoJson(sw);
    nw = map.data.loadGeoJson('UK-Adresses/NW.geojson');
    map.data.addGeoJson(sw);
    ox = map.data.loadGeoJson('UK-Adresses/OX.geojson');
    map.data.addGeoJson(ox);
    wc = map.data.loadGeoJson('UK-Adresses/WC.geojson')

    // map.data.addListener('click', function(event) {
    // map.data.overrideStyle(event.feature, {fillColor: 'black'});
    // });
    // map.data.setStyle({fillColor: 'yellow', strokeWeight: 1});

    map.data.setStyle(function(feature) {
    var number = Math.random() * 10;
    var color = 'red';
    if(number > 2.5){
      color = 'blue';
    }
    if(number > 5){
      color = 'yellow';
    }
    if(number > 7.5){
      color = 'green';
    }
    return {
      fillColor: color,
      strokeWeight: 1.2
     };

    })};

      // This example uses the Google Maps JavaScript API's Data layer
      // to create a rectangular polygon with 2 holes in it.
        
        // const testFolder = './UK-Adresses';
        // const fs = require('fs');
        // fs.readdir(testFolder, (err, files) => {
        //   files.forEach(file => {
        //      console.log(file); // use those file and return it as a REST API
        //     });
        // });    