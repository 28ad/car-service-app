export type CarsData = {
  make: string
  models: string[]
  logo: string
}

export const cars: CarsData[] = [
    {
        make: "alfa",
        models: ["giulia", "stelvio", "tonale", "giulietta", "mito"],
        logo: '/images/car-logos/alfa.png'
    },
    {
        make: "audi",
        models: ["a3", "a4", "a5", "a6", "a7", "q3", "q5", "q7", "q8", "e-tron"],
        logo: '/images/car-logos/audi.webp' 
    },
    {
        make: "BMW",
        models: ["series 1", "series 2", "series 3", "series 4", "series 5", "series 6", "series 7", "x1", "x3", "x5", "x7", "i3", "i4", "iX"],
        logo: '/images/car-logos/bmw.png'
    },
    {
        make: "dacia",
        models: ["duster", "logan", "sandero", "go", "solenza"],
        logo: '/images/car-logos/dacia.png'
    },
    {
        make: "fiat",
        models: ["500", "panda", "tipo", "doblo", "punto"],
        logo: '/images/car-logos/fiat.png'
    },
    {
        make: "ford",
        models: ["focus", "fiesta", "mustang", "explorer", "escape"],
        logo: '/images/car-logos/ford.png'
    },
    {
        make: "honda",
        models: ["civic", "accord", "cr-v", "hr-v", "pilot"],
        logo: '/images/car-logos/honda.png'
    },
    {
        make: "hyundai",    
        models: ["i10", "i20", "i30", "santa fe", "tucson"],
        logo: '/images/car-logos/hyundai.png'
    },
    {
        make: "jeep",   
        models: ["wrangler", "grand cherokee", "compass", "renegade", "gladiator"],
        logo: '/images/car-logos/jeep.png'
    },
    {
        make: "kia",    
        models: ["rio", "ceed", "sportage", "sorento", "stinger"],
        logo: '/images/car-logos/kia.png'
    },
    {
        make: "mercedes",    
        models: ["a-class", "c-class", "e-class", "s-class", "gle", "glc", "eqc"],
        logo: '/images/car-logos/mercedes.webp'
    },
    {
        make: "mg",    
        models: ["zs", "hs", "5", "6", "e-motion"],
        logo: '/images/car-logos/mg.webp'
    },
    {
        make: "mitsubishi",
        models: ["lancer", "outlander", "eclipse", "pajero", "montero"],
        logo: '/images/car-logos/mitsubishi.webp'
    },
    {
        make: "nissan",    
        models: ["micra", "juke", "qashqai", "x-trail", "leaf"],
        logo: '/images/car-logos/nissan.webp'
    },
    {
        make: "opel",    
        models: ["corsa", "astra", "insignia", "grandland", "mokka"],
        logo: '/images/car-logos/opel.webp'
    },
    {
        make: "porsche",    
        models: ["911", "cayenne", "macan", "panamera", "taycan"],
        logo: '/images/car-logos/porsche.webp'
    },
    {
        make: "skoda",    
        models: ["fabia", "octavia", "superb", "kodiaq", "kamiq"],
        logo: '/images/car-logos/skoda.webp'
    },
    {
        make: "toyota",    
        models: ["yaris", "corolla", "rav4", "camry", "highlander", "supra", "prius"],
        logo: '/images/car-logos/toyota.webp'
    },
    {
        make: "volkswagen",    
        models: ["golf", "scirocco", "passat", "tiguan", "touareg", "id.3", "id.4"],
        logo: '/images/car-logos/vw.webp'
    }
]