/**
 * Define SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * Create the map
 */
var map = AmCharts.makeChart("mapamundi-chart", {
    "type": "map",
    "projection": "eckert3",
    "theme": "light",
    "imagesSettings": {
        "rollOverColor": "#089282",
        "rollOverScale": 3,
        "selectedScale": 3,
        "selectedColor": "#089282",
        "color": "#13564e"
    },

    "areasSettings": {
        "unlistedAreasColor": "#15A892",
        "outlineThickness": 0.1
    },

    "dataProvider": {
        "map": "worldLow",
        "images": [{
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Vienna",
                "latitude": 48.2092,
                "longitude": 16.3728
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Minsk",
                "latitude": 53.9678,
                "longitude": 27.5766
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Brussels",
                "latitude": 50.8371,
                "longitude": 4.3676
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Copenhagen",
                "latitude": 55.6763,
                "longitude": 12.5681
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Paris",
                "latitude": 48.8567,
                "longitude": 2.3510
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Berlin",
                "latitude": 52.5235,
                "longitude": 13.4115
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Rome",
                "latitude": 41.8955,
                "longitude": 12.4823
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Luxembourg",
                "latitude": 49.6100,
                "longitude": 6.1296
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Amsterdam",
                "latitude": 52.3738,
                "longitude": 4.8910
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Oslo",
                "latitude": 59.9138,
                "longitude": 10.7387
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Lisbon",
                "latitude": 38.7072,
                "longitude": -9.1355
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Madrid",
                "latitude": 40.4167,
                "longitude": -3.7033
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Stockholm",
                "latitude": 59.3328,
                "longitude": 18.0645
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "London",
                "latitude": 51.5002,
                "longitude": -0.1262
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Tokyo",
                "latitude": 35.6785,
                "longitude": 139.6823
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Kuwait",
                "latitude": 29.3721,
                "longitude": 47.9824
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Seoul",
                "latitude": 37.5139,
                "longitude": 126.9828
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Bangkok",
                "latitude": 13.7573,
                "longitude": 100.5020
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Abu Dhabi",
                "latitude": 24.4764,
                "longitude": 54.3705
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Panama",
                "latitude": 8.9943,
                "longitude": -79.5188
            }, {
                "svgPath": targetSVG,
                "zoomLevel": 5,
                "scale": 0.5,
                "title": "Washington",
                "latitude": 38.8921,
                "longitude": -77.0241
            }]
    },
    "export": {
        "enabled": true
    }
});