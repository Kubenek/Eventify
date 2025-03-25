async function loadImports(path) {
    try {
        const response = await fetch(path);

        if (response.ok) {
            const importsHtml = await response.text();

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = importsHtml;

            // Process links (CSS files)
            const links = tempDiv.querySelectorAll('link');
            links.forEach(link => document.head.appendChild(link));

            // Process scripts (JS files)
            const scripts = tempDiv.querySelectorAll('script');
            scripts.forEach(script => {
                // Check if script is inline or external
                if (script.src) {
                    // If it's an external script, ensure it's loaded properly
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    newScript.async = true; // Set async if desired
                    newScript.onload = () => console.log(`Script ${script.src} loaded successfully!`);
                    newScript.onerror = () => console.error(`Failed to load script: ${script.src}`);
                    document.head.appendChild(newScript);
                } else {
                    // Inline script execution
                    const inlineScript = document.createElement('script');
                    inlineScript.textContent = script.innerHTML;
                    document.head.appendChild(inlineScript);
                }
            });

            console.log(`Imports from ${path} loaded successfully!`);
        } else {
            console.error("Failed to import data from " + path);
        }
    } catch (error) {
        console.error("Failed during import: " + error);
    }
}
