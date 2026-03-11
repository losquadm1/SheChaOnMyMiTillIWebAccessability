export const brandSettings = {
    logo: {
        src: "/images/LogoLogo.png", // Add logo image URL here (e.g., "/assets/logo.png")
        alt: "Chami",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "/images/PurpleLogo.png", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "/images/PurpleLogo.png", // Add image path
                bg: "#333333", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "/images/BlackLogo.png", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "/images/WhiteLogo.png", // Add image path
                bg: "#000000", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "/favicon.svg", // Add favicon URL here
    typography: {
        primaryFont: "Satoshi",  // this will automatically get set as the page font
        secondaryFont: "Archivo Black", // dont be a bum, go find some google/adobe fonts you like. just make sure to load them in the stylesheet or Layout astro file 
        baseSize: "16px",
        lineHeight: "1.5",
        paragraphSpacing: "2"
    },
    palette: [ // these will load automatically into your page into the color section
        { name: "White", hex: "#ffffff" },
        { name: "Dark Purple", hex: "#0d0024" },
        { name: "Accent Purple", hex: "#1c0b35" },
        { name: "Chami Purple", hex: "#7653a2" },
        { name: "Read/Unselected Off-White", hex: "#A19FAD" },
        { name: "Link Pink", hex: "#e2c8e1" },
        { name: "Notification Red", hex: "#ed1f24" } 
    ]
};