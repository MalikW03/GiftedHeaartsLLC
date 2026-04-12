function initMap() {
    const center = { lat: 36, lng: -80 }; // Charlotte, NC
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: center,
    });
    const triadCoords = [
        { lat: 36.15, lng: -80.30 },   // NW Winston
        { lat: 36.15, lng: -79.70 },   // NE Greensboro
        { lat: 35.95, lng: -79.65 },   // SE High Point
        { lat: 35.90, lng: -80.10 },   // SW High Point
        { lat: 36.00, lng: -80.35 },   // Back to Winston
      ];
      
      const triadArea = new google.maps.Polygon({
        paths: triadCoords,
        strokeColor: "#28a745",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#28a745",
        fillOpacity: 0.3,
        map: map,
      });
      
      
    const serviceAreas = [
      { name: "Greensboro", lat: 36.044659, lng: -79.766235 },
      { name: "Winston-Salem", lat: 36.099861, lng:-80.244217 },
      { name: "High Point", lat: 35.970554, lng: -79.997498},
    ];
  
    serviceAreas.forEach(area => {
      new google.maps.Marker({
        position: { lat: area.lat, lng: area.lng },
        map: map,
        title: area.name,
      });
    });
  }
  