function changeThemeColor() {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const colors = ['#87CEEB', '#6A5ACD', '#00BFFF', '#1E90FF', '#4682B4', '#87CEFA']; // Colores del arco iris
    let currentIndex = 0;
  
    function updateColor() {
      themeColorMeta.setAttribute('content', colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    }
  
    setInterval(updateColor, 500); // Cambia el color cada 500 ms (ajusta el intervalo según lo desees)
  }
  
  changeThemeColor();
