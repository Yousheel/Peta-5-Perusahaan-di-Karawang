ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11934614.309711, -715718.722481, 11955829.230127, -704750.722481]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DataPoint_1 = new ol.format.GeoJSON();
var features_DataPoint_1 = format_DataPoint_1.readFeatures(json_DataPoint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataPoint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataPoint_1.addFeatures(features_DataPoint_1);
var lyr_DataPoint_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataPoint_1, 
                style: style_DataPoint_1,
                popuplayertitle: 'Data Point ',
                interactive: true,
    title: 'Data Point <br />\
    <img src="styles/legend/DataPoint_1_0.png" /> PT. YAMAHA<br />\
    <img src="styles/legend/DataPoint_1_1.png" /> PT.AUTOPLASTIK<br />\
    <img src="styles/legend/DataPoint_1_2.png" /> PT.NESTLE<br />\
    <img src="styles/legend/DataPoint_1_3.png" /> PT.PINDO DELI<br />\
    <img src="styles/legend/DataPoint_1_4.png" /> PT.TOYOTA MOTOR<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_DataPoint_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DataPoint_1];
lyr_DataPoint_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_DataPoint_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_DataPoint_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X-Coord': 'inline label - visible with data', 'Y-Coord': 'inline label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'inline label - visible with data', });
lyr_DataPoint_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});