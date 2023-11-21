function changeThemeColor() {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const colors = [
        { r: 255, g: 255, b: 255 }, // Blanco
        { r: 255, g: 0, b: 0 },     // Rojo
        { r: 0, g: 0, b: 0 }         // Negro
    ];

    let currentIndex = 0;
    let currentColor = colors[currentIndex];
    let targetColor = colors[(currentIndex + 1) % colors.length];
    let steps = 50; // Número de pasos para la transición
    let currentStep = 0;

    function updateColor() {
        const newColor = {
            r: Math.round(
                currentColor.r + (targetColor.r - currentColor.r) * (currentStep / steps)
            ),
            g: Math.round(
                currentColor.g + (targetColor.g - currentColor.g) * (currentStep / steps)
            ),
            b: Math.round(
                currentColor.b + (targetColor.b - currentColor.b) * (currentStep / steps)
            )
        };

        themeColorMeta.setAttribute('content', `rgb(${newColor.r},${newColor.g},${newColor.b})`);

        currentStep++;

        if (currentStep > steps) {
            currentStep = 0;
            currentIndex = (currentIndex + 1) % colors.length;
            currentColor = colors[currentIndex];
            targetColor = colors[(currentIndex + 1) % colors.length];
        }
    }

    setInterval(updateColor, 20); // Cambia gradualmente el color cada 20 ms (ajusta el intervalo según lo desees)
}

changeThemeColor();
