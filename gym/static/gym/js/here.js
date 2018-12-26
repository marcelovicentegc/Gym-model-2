var platform = new H.service.Platform({
    'app_id': '16XUxA45ecnL8eTSuyEa',
    'app_code': 'Bso1RPFdyIuW5DoDuJoI1w'
});

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(
    document.getElementById('find-us'),
    defaultLayers.normal.map,
    {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
});