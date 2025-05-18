// Periodic Table Data
        const elements = [
            {
                "atomicNumber": 1,
                "symbol": "H",
                "name": "Hydrogen",
                "atomicMass": "1.008",
                "category": "nonmetal",
                "latinName": "Hydrogenium",
                "yearDiscovered": 1766,
                "discoveredBy": "Henry Cavendish",
                "discoveryLocation": "England",
                "description": "Hydrogen is the lightest and most abundant chemical element in the universe. It's primarily used in oil refining, ammonia production for fertilizers, and as a potential clean fuel source.",
                "image":"data:image/jpeg;base64,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",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-259.16",
                "boilingPoint": "-252.879",
                "density": "0.00008988",
                "electronConfiguration": "1s¹",
                "electronegativity": "2.20",
                "ionizationEnergy": "13.598",
                "atomicRadius": "53",
                "group": 1,
                "period": 1
            },
            {
                "atomicNumber": 2,
                "symbol": "He",
                "name": "Helium",
                "atomicMass": "4.0026",
                "category": "noble-gas",
                "latinName": "Helium",
                "yearDiscovered": 1868,
                "discoveredBy": "Pierre Janssen",
                "discoveryLocation": "France",
                "description": "Helium is a colorless, odorless noble gas that is the second most abundant element in the observable universe. It's used in balloons, as a coolant for superconducting magnets, in MRI scanners, and as a pressurizing gas for rockets.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-272.2 (at high pressure)",
                "boilingPoint": "-268.9",
                "density": "0.0001785",
                "electronConfiguration": "1s²",
                "electronegativity": "Unknown",
                "ionizationEnergy": "24.587",
                "atomicRadius": "31",
                "group": 18,
                "period": 1
            },
            {
                "atomicNumber": 3,
                "symbol": "Li",
                "name": "Lithium",
                "atomicMass": "6.94",
                "category": "alkali-metal",
                "latinName": "Lithium",
                "yearDiscovered": 1817,
                "discoveredBy": "Johan August Arfwedson",
                "discoveryLocation": "Sweden",
                "description": "Lithium is a soft, silvery-white alkali metal. It's primarily used in rechargeable batteries, particularly for electric vehicles, laptops, and smartphones. It's also used in psychiatric medications and aerospace applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "180.54",
                "boilingPoint": "1342",
                "density": "0.534",
                "electronConfiguration": "[He] 2s¹",
                "electronegativity": "0.98",
                "ionizationEnergy": "5.392",
                "atomicRadius": "167",
                "group": 1,
                "period": 2
            },
            {
                "atomicNumber": 4,
                "symbol": "Be",
                "name": "Beryllium",
                "atomicMass": "9.0122",
                "category": "alkaline-earth-metal",
                "latinName": "Beryllium",
                "yearDiscovered": 1798,
                "discoveredBy": "Louis-Nicolas Vauquelin",
                "discoveryLocation": "France",
                "description": "Beryllium is a relatively rare element in the universe. It's a steel-gray, strong, lightweight and brittle alkaline earth metal. It's used in aerospace, nuclear reactors, and X-ray equipment.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1287",
                "boilingPoint": "2469",
                "density": "1.85",
                "electronConfiguration": "[He] 2s²",
                "electronegativity": "1.57",
                "ionizationEnergy": "9.323",
                "atomicRadius": "112",
                "group": 2,
                "period": 2
            },
            {
                "atomicNumber": 5,
                "symbol": "B",
                "name": "Boron",
                "atomicMass": "10.81",
                "category": "metalloid",
                "latinName": "Borum",
                "yearDiscovered": 1808,
                "discoveredBy": "Joseph Louis Gay-Lussac and Louis Jacques Thénard",
                "discoveryLocation": "France",
                "description": "Boron is a semiconductor with properties between metals and non-metals. It's used in detergents, glass production, agriculture as a plant nutrient, and in compounds for structural materials.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2076",
                "boilingPoint": "3927",
                "density": "2.34",
                "electronConfiguration": "[He] 2s² 2p¹",
                "electronegativity": "2.04",
                "ionizationEnergy": "8.298",
                "atomicRadius": "87",
                "group": 13,
                "period": 2
            },
            {
                "atomicNumber": 6,
                "symbol": "C",
                "name": "Carbon",
                "atomicMass": "12.011",
                "category": "nonmetal",
                "latinName": "Carbonium",
                "yearDiscovered": "Ancient times",
                "discoveredBy": "Known to ancients",
                "discoveryLocation": "Multiple civilizations",
                "description": "Carbon is the 15th most abundant element in the Earth's crust and the fourth most abundant element in the universe by mass. It's the basis for organic chemistry and life on Earth, capable of forming many different compounds and allotropes like diamond and graphite.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "3550 (graphite)",
                "boilingPoint": "4027",
                "density": "2.267 (graphite), 3.51 (diamond)",
                "electronConfiguration": "[He] 2s² 2p²",
                "electronegativity": "2.55",
                "ionizationEnergy": "11.260",
                "atomicRadius": "67",
                "group": 14,
                "period": 2
            },
            {
                "atomicNumber": 7,
                "symbol": "N",
                "name": "Nitrogen",
                "atomicMass": "14.007",
                "category": "nonmetal",
                "latinName": "Nitrogenium",
                "yearDiscovered": 1772,
                "discoveredBy": "Daniel Rutherford",
                "discoveryLocation": "Scotland",
                "description": "Nitrogen is a colorless, odorless, tasteless gas that makes up about 78% of Earth's atmosphere. It's crucial for plant growth and is used in fertilizers, refrigerants, and various industrial processes.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-210.1",
                "boilingPoint": "-195.8",
                "density": "0.001251",
                "electronConfiguration": "[He] 2s² 2p³",
                "electronegativity": "3.04",
                "ionizationEnergy": "14.534",
                "atomicRadius": "56",
                "group": 15,
                "period": 2
            },
            {
                "atomicNumber": 8,
                "symbol": "O",
                "name": "Oxygen",
                "atomicMass": "15.999",
                "category": "nonmetal",
                "latinName": "Oxygenium",
                "yearDiscovered": 1774,
                "discoveredBy": "Joseph Priestley",
                "discoveryLocation": "England",
                "description": "Oxygen is a highly reactive nonmetal that forms compounds with nearly all other elements. It makes up 21% of Earth's atmosphere and is essential for respiration in most living organisms.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-218.79",
                "boilingPoint": "-182.95",
                "density": "0.001429",
                "electronConfiguration": "[He] 2s² 2p⁴",
                "electronegativity": "3.44",
                "ionizationEnergy": "13.618",
                "atomicRadius": "48",
                "group": 16,
                "period": 2
            },
            {
                "atomicNumber": 9,
                "symbol": "F",
                "name": "Fluorine",
                "atomicMass": "18.998",
                "category": "halogen",
                "latinName": "Fluorum",
                "yearDiscovered": 1886,
                "discoveredBy": "Henri Moissan",
                "discoveryLocation": "France",
                "description": "Fluorine is the most electronegative and reactive of all elements. It's used in uranium enrichment, refrigerants, toothpaste, and non-stick coatings like Teflon.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-219.67",
                "boilingPoint": "-188.11",
                "density": "0.001696",
                "electronConfiguration": "[He] 2s² 2p⁵",
                "electronegativity": "3.98",
                "ionizationEnergy": "17.423",
                "atomicRadius": "42",
                "group": 17,
                "period": 2
            },
            {
                "atomicNumber": 10,
                "symbol": "Ne",
                "name": "Neon",
                "atomicMass": "20.180",
                "category": "noble-gas",
                "latinName": "Neon",
                "yearDiscovered": 1898,
                "discoveredBy": "William Ramsay and Morris Travers",
                "discoveryLocation": "United Kingdom",
                "description": "Neon is a colorless, odorless, inert gas that glows reddish-orange in vacuum discharge tubes. It's primarily used in neon signs, lasers, and high-voltage indicators.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-248.59",
                "boilingPoint": "-246.046",
                "density": "0.0009002",
                "electronConfiguration": "[He] 2s² 2p⁶",
                "electronegativity": "Unknown",
                "ionizationEnergy": "21.565",
                "atomicRadius": "38",
                "group": 18,
                "period": 2
            },
            {
                "atomicNumber": 11,
                "symbol": "Na",
                "name": "Sodium",
                "atomicMass": "22.990",
                "category": "alkali-metal",
                "latinName": "Natrium",
                "yearDiscovered": 1807,
                "discoveredBy": "Humphry Davy",
                "discoveryLocation": "United Kingdom",
                "description": "Sodium is a soft, silvery-white, highly reactive metal. It's an essential element for life and is commonly used in table salt (NaCl), street lights, and chemical manufacturing.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "97.794",
                "boilingPoint": "882.940",
                "density": "0.968",
                "electronConfiguration": "[Ne] 3s¹",
                "electronegativity": "0.93",
                "ionizationEnergy": "5.139",
                "atomicRadius": "190",
                "group": 1,
                "period": 3
            },
            {
                "atomicNumber": 12,
                "symbol": "Mg",
                "name": "Magnesium",
                "atomicMass": "24.305",
                "category": "alkaline-earth-metal",
                "latinName": "Magnesium",
                "yearDiscovered": 1808,
                "discoveredBy": "Humphry Davy",
                "discoveryLocation": "United Kingdom",
                "description": "Magnesium is a shiny, silvery metal that is essential for plant and animal life. It's used in lightweight alloys, flash photography, and various compounds for medicines and fireworks.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "650",
                "boilingPoint": "1090",
                "density": "1.738",
                "electronConfiguration": "[Ne] 3s²",
                "electronegativity": "1.31",
                "ionizationEnergy": "7.646",
                "atomicRadius": "145",
                "group": 2,
                "period": 3
            },
            {
                "atomicNumber": 13,
                "symbol": "Al",
                "name": "Aluminum",
                "atomicMass": "26.982",
                "category": "post-transition-metal",
                "latinName": "Aluminium",
                "yearDiscovered": 1825,
                "discoveredBy": "Hans Christian Ørsted",
                "discoveryLocation": "Denmark",
                "description": "Aluminum is a lightweight, silvery-white metal. It's the most abundant metal in Earth's crust and is used in transportation, packaging, construction, and electrical applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "660.32",
                "boilingPoint": "2519",
                "density": "2.7",
                "electronConfiguration": "[Ne] 3s² 3p¹",
                "electronegativity": "1.61",
                "ionizationEnergy": "5.986",
                "atomicRadius": "118",
                "group": 13,
                "period": 3
            },
            {
                "atomicNumber": 14,
                "symbol": "Si",
                "name": "Silicon",
                "atomicMass": "28.085",
                "category": "metalloid",
                "latinName": "Silicium",
                "yearDiscovered": 1824,
                "discoveredBy": "Jöns Jacob Berzelius",
                "discoveryLocation": "Sweden",
                "description": "Silicon is a hard, brittle crystalline solid with a blue-grey metallic luster. It's the second most abundant element in Earth's crust and is fundamental to modern electronics and semiconductor technology.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1414",
                "boilingPoint": "3265",
                "density": "2.33",
                "electronConfiguration": "[Ne] 3s² 3p²",
                "electronegativity": "1.90",
                "ionizationEnergy": "8.152",
                "atomicRadius": "111",
                "group": 14,
                "period": 3
            },
            {
                "atomicNumber": 15,
                "symbol": "P",
                "name": "Phosphorus",
                "atomicMass": "30.974",
                "category": "nonmetal",
                "latinName": "Phosphorus",
                "yearDiscovered": 1669,
                "discoveredBy": "Hennig Brand",
                "discoveryLocation": "Germany",
                "description": "Phosphorus is essential for life and is a component of DNA and RNA. It's used in fertilizers, detergents, matches, and various industrial processes.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "44.15 (white phosphorus)",
                "boilingPoint": "280.5 (white phosphorus)",
                "density": "1.82 (white phosphorus)",
                "electronConfiguration": "[Ne] 3s² 3p³",
                "electronegativity": "2.19",
                "ionizationEnergy": "10.487",
                "atomicRadius": "98",
                "group": 15,
                "period": 3
            },
            {
                "atomicNumber": 16,
                "symbol": "S",
                "name": "Sulfur",
                "atomicMass": "32.06",
                "category": "nonmetal",
                "latinName": "Sulphur",
                "yearDiscovered": "Ancient times",
                "discoveredBy": "Known to the ancients",
                "discoveryLocation": "Multiple civilizations",
                "description": "Sulfur is a bright yellow crystalline solid. It's used in gunpowder, matches, insecticides, fungicides, and in the vulcanization of rubber.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "115.21",
                "boilingPoint": "444.72",
                "density": "2.07",
                "electronConfiguration": "[Ne] 3s² 3p⁴",
                "electronegativity": "2.58",
                "ionizationEnergy": "10.360",
                "atomicRadius": "88",
                "group": 16,
                "period": 3
            },
            {
                "atomicNumber": 17,
                "symbol": "Cl",
                "name": "Chlorine",
                "atomicMass": "35.45",
                "category": "halogen",
                "latinName": "Chlorum",
                "yearDiscovered": 1774,
                "discoveredBy": "Carl Wilhelm Scheele",
                "discoveryLocation": "Sweden",
                "description": "Chlorine is a yellow-green gas that is highly reactive. It's primarily used for water purification, in bleaching agents, and in the production of various chemicals.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-101.5",
                "boilingPoint": "-34.04",
                "density": "0.003214",
                "electronConfiguration": "[Ne] 3s² 3p⁵",
                "electronegativity": "3.16",
                "ionizationEnergy": "12.968",
                "atomicRadius": "79",
                "group": 17,
                "period": 3
            },
            {
                "atomicNumber": 18,
                "symbol": "Ar",
                "name": "Argon",
                "atomicMass": "39.948",
                "category": "noble-gas",
                "latinName": "Argon",
                "yearDiscovered": 1894,
                "discoveredBy": "Lord Rayleigh and Sir William Ramsay",
                "discoveryLocation": "United Kingdom",
                "description": "Argon is a colorless, odorless, inert gas that makes up about 1% of Earth's atmosphere. It's used in light bulbs, as an inert atmosphere for welding, and in lasers.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-189.34",
                "boilingPoint": "-185.85",
                "density": "0.001784",
                "electronConfiguration": "[Ne] 3s² 3p⁶",
                "electronegativity": "Unknown",
                "ionizationEnergy": "15.760",
                "atomicRadius": "71",
                "group": 18,
                "period": 3
            },
            {
                "atomicNumber": 19,
                "symbol": "K",
                "name": "Potassium",
                "atomicMass": "39.098",
                "category": "alkali-metal",
                "latinName": "Kalium",
                "yearDiscovered": 1807,
                "discoveredBy": "Humphry Davy",
                "discoveryLocation": "United Kingdom",
                "description": "Potassium is a soft, silvery-white, highly reactive metal. It's an essential nutrient for plants and animals, and it's used in fertilizers, soaps, and medical applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "63.38",
                "boilingPoint": "759",
                "density": "0.89",
                "electronConfiguration": "[Ar] 4s¹",
                "electronegativity": "0.82",
                "ionizationEnergy": "4.341",
                "atomicRadius": "243",
                "group": 1,
                "period": 4
            },
            {
                "atomicNumber": 20,
                "symbol": "Ca",
                "name": "Calcium",
                "atomicMass": "40.078",
                "category": "alkaline-earth-metal",
                "latinName": "Calcium",
                "yearDiscovered": 1808,
                "discoveredBy": "Humphry Davy",
                "discoveryLocation": "United Kingdom",
                "description": "Calcium is a soft, grey alkaline earth metal. It's essential for living organisms, particularly for bone formation, and is used in cement, plaster, and various industrial processes.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "842",
                "boilingPoint": "1484",
                "density": "1.55",
                "electronConfiguration": "[Ar] 4s²",
                "electronegativity": "1.00",
                "ionizationEnergy": "6.113",
                "atomicRadius": "194",
                "group": 2,
                "period": 4
            },
            {
                "atomicNumber": 21,
                "symbol": "Sc",
                "name": "Scandium",
                "atomicMass": "44.956",
                "category": "transition-metal",
                "latinName": "Scandium",
                "yearDiscovered": 1879,
                "discoveredBy": "Lars Fredrik Nilson",
                "discoveryLocation": "Sweden",
                "description": "Scandium is a silvery-white metallic element. It's used in aerospace components, sports equipment, and lighting applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1541",
                "boilingPoint": "2836",
                "density": "2.99",
                "electronConfiguration": "[Ar] 3d¹ 4s²",
                "electronegativity": "1.36",
                "ionizationEnergy": "6.561",
                "atomicRadius": "184",
                "group": 3,
                "period": 4
            },
            {
                "atomicNumber": 22,
                "symbol": "Ti",
                "name": "Titanium",
                "atomicMass": "47.867",
                "category": "transition-metal",
                "latinName": "Titanium",
                "yearDiscovered": 1791,
                "discoveredBy": "William Gregor",
                "discoveryLocation": "United Kingdom",
                "description": "Titanium is a strong, lightweight, corrosion-resistant metal. It's used in aerospace, medical implants, and sports equipment due to its excellent strength-to-weight ratio.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1668",
                "boilingPoint": "3287",
                "density": "4.54",
                "electronConfiguration": "[Ar] 3d² 4s²",
                "electronegativity": "1.54",
                "ionizationEnergy": "6.828",
                "atomicRadius": "176",
                "group": 4,
                "period": 4
            },
            {
                "atomicNumber": 23,
                "symbol": "V",
                "name": "Vanadium",
                "atomicMass": "50.942",
                "category": "transition-metal",
                "latinName": "Vanadium",
                "yearDiscovered": 1801,
                "discoveredBy": "Andrés Manuel del Río",
                "discoveryLocation": "Mexico",
                "description": "Vanadium is a hard, silvery-gray, ductile, and malleable transition metal. It's primarily used in steel alloys for tools, construction, and machinery.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1910",
                "boilingPoint": "3407",
                "density": "6.11",
                "electronConfiguration": "[Ar] 3d³ 4s²",
                "electronegativity": "1.63",
                "ionizationEnergy": "6.746",
                "atomicRadius": "171",
                "group": 5,
                "period": 4
            },
            {
                "atomicNumber": 24,
                "symbol": "Cr",
                "name": "Chromium",
                "atomicMass": "51.996",
                "category": "transition-metal",
                "latinName": "Chromium",
                "yearDiscovered": 1797,
                "discoveredBy": "Louis Nicolas Vauquelin",
                "discoveryLocation": "France",
                "description": "Chromium is a steely-grey, lustrous, hard, and brittle metal. It's used in stainless steel production, chrome plating, and various alloys for increased hardness and corrosion resistance.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1907",
                "boilingPoint": "2671",
                "density": "7.15",
                "electronConfiguration": "[Ar] 3d⁵ 4s¹",
                "electronegativity": "1.66",
                "ionizationEnergy": "6.767",
                "atomicRadius": "166",
                "group": 6,
                "period": 4
            },
            {
                "atomicNumber": 25,
                "symbol": "Mn",
                "name": "Manganese",
                "atomicMass": "54.938",
                "category": "transition-metal",
                "latinName": "Manganum",
                "yearDiscovered": 1774,
                "discoveredBy": "Johan Gottlieb Gahn",
                "discoveryLocation": "Sweden",
                "description": "Manganese is a silvery-grey metal that is essential for human nutrition. It's primarily used in steel production and in batteries.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1246",
                "boilingPoint": "2061",
                "density": "7.44",
                "electronConfiguration": "[Ar] 3d⁵ 4s²",
                "electronegativity": "1.55",
                "ionizationEnergy": "7.434",
                "atomicRadius": "161",
                "group": 7,
                "period": 4
            },
            {
                "atomicNumber": 26,
                "symbol": "Fe",
                "name": "Iron",
                "atomicMass": "55.845",
                "category": "transition-metal",
                "latinName": "Ferrum",
                "yearDiscovered": "Ancient times",
                "discoveredBy": "Known to the ancients",
                "discoveryLocation": "Multiple civilizations",
                "description": "Iron is the most common element on Earth by mass. It's used in numerous applications from construction to machinery, and it's essential for many biological processes including oxygen transport in blood.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1538",
                "boilingPoint": "2861",
                "density": "7.874",
                "electronConfiguration": "[Ar] 3d⁶ 4s²",
                "electronegativity": "1.83",
                "ionizationEnergy": "7.902",
                "atomicRadius": "156",
                "group": 8,
                "period": 4
            },
            {
                "atomicNumber": 27,
                "symbol": "Co",
                "name": "Cobalt",
                "atomicMass": "58.933",
                "category": "transition-metal",
                "latinName": "Cobaltum",
                "yearDiscovered": 1735,
                "discoveredBy": "Georg Brandt",
                "discoveryLocation": "Sweden",
                "description": "Cobalt is a hard, lustrous, silver-grey metal. It's used in magnets, high-strength alloys, and batteries, and it's essential for vitamin B12.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1495",
                "boilingPoint": "2900",
                "density": "8.90",
                "electronConfiguration": "[Ar] 3d⁷ 4s²",
                "electronegativity": "1.88",
                "ionizationEnergy": "7.881",
                "atomicRadius": "152",
                "group": 9,
                "period": 4
            },
            {
                "atomicNumber": 28,
                "symbol": "Ni",
                "name": "Nickel",
                "atomicMass": "58.693",
                "category": "transition-metal",
                "latinName": "Niccolum",
                "yearDiscovered": 1751,
                "discoveredBy": "Axel Fredrik Cronstedt",
                "discoveryLocation": "Sweden",
                "description": "Nickel is a silvery-white lustrous metal with a slight golden tinge. It's used in stainless steel, rechargeable batteries, and various alloys for coins and jewelry.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1455",
                "boilingPoint": "2913",
                "density": "8.908",
                "electronConfiguration": "[Ar] 3d⁸ 4s²",
                "electronegativity": "1.91",
                "ionizationEnergy": "7.640",
                "atomicRadius": "149",
                "group": 10,
                "period": 4
            },
            {
                "atomicNumber": 29,
                "symbol": "Cu",
                "name": "Copper",
                "atomicMass": "63.546",
                "category": "transition-metal",
                "latinName": "Cuprum",
                "yearDiscovered": "Ancient times",
                "discoveredBy": "Known to the ancients",
                "discoveryLocation": "Multiple civilizations",
                "description": "Copper is a ductile metal with very high thermal and electrical conductivity. It's used in electrical wiring, plumbing, and various alloys like brass and bronze.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1084.62",
                "boilingPoint": "2562",
                "density": "8.96",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s¹",
                "electronegativity": "1.90",
                "ionizationEnergy": "7.726",
                "atomicRadius": "145",
                "group": 11,
                "period": 4
            },
            {
                "atomicNumber": 30,
                "symbol": "Zn",
                "name": "Zinc",
                "atomicMass": "65.38",
                "category": "transition-metal",
                "latinName": "Zincum",
                "yearDiscovered": "Ancient times (as compound), 1746 (isolated)",
                "discoveredBy": "Andreas Sigismund Marggraf (isolation)",
                "discoveryLocation": "Germany",
                "description": "Zinc is a bluish-white, lustrous metal. It's primarily used in anti-corrosion coatings for iron and steel (galvanization), batteries, and various alloys like brass.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "419.53",
                "boilingPoint": "907",
                "density": "7.14",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s²",
                "electronegativity": "1.65",
                "ionizationEnergy": "9.394",
                "atomicRadius": "142",
                "group": 12,
                "period": 4
            },
            {
                "atomicNumber": 31,
                "symbol": "Ga",
                "name": "Gallium",
                "atomicMass": "69.723",
                "category": "post-transition-metal",
                "latinName": "Gallium",
                "yearDiscovered": 1875,
                "discoveredBy": "Paul Emile Lecoq de Boisbaudran",
                "discoveryLocation": "France",
                "description": "Gallium is a soft, silvery metal with a low melting point (it can melt in your hand). It's used in semiconductors, LEDs, and high-temperature thermometers.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "29.76",
                "boilingPoint": "2204",
                "density": "5.91",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p¹",
                "electronegativity": "1.81",
                "ionizationEnergy": "5.999",
                "atomicRadius": "136",
                "group": 13,
                "period": 4
            },
            {
                "atomicNumber": 32,
                "symbol": "Ge",
                "name": "Germanium",
                "atomicMass": "72.63",
                "category": "metalloid",
                "latinName": "Germanium",
                "yearDiscovered": 1886,
                "discoveredBy": "Clemens Winkler",
                "discoveryLocation": "Germany",
                "description": "Germanium is a lustrous, hard, grayish-white metalloid. It's primarily used in fiber-optic systems, infrared optics, and as a semiconductor in electronics.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "938.25",
                "boilingPoint": "2833",
                "density": "5.323",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p²",
                "electronegativity": "2.01",
                "ionizationEnergy": "7.900",
                "atomicRadius": "125",
                "group": 14,
                "period": 4
            },
            {
                "atomicNumber": 33,
                "symbol": "As",
                "name": "Arsenic",
                "atomicMass": "74.922",
                "category": "metalloid",
                "latinName": "Arsenicum",
                "yearDiscovered": "Ancient times",
                "discoveredBy": "Known to the ancients",
                "discoveryLocation": "Multiple civilizations",
                "description": "Arsenic is a metalloid that can exist in multiple allotropes. It's used in semiconductors, wood preservatives, and various alloys. It's also highly toxic.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "817 (at high pressure)",
                "boilingPoint": "614 (sublimes)",
                "density": "5.727",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p³",
                "electronegativity": "2.18",
                "ionizationEnergy": "9.815",
                "atomicRadius": "114",
                "group": 15,
                "period": 4
            },
            {
                "atomicNumber": 34,
                "symbol": "Se",
                "name": "Selenium",
                "atomicMass": "78.971",
                "category": "nonmetal",
                "latinName": "Selenium",
                "yearDiscovered": 1817,
                "discoveredBy": "Jöns Jakob Berzelius",
                "discoveryLocation": "Sweden",
                "description": "Selenium is a nonmetal with properties similar to sulfur and tellurium. It's used in electronics, glass production, and as a dietary supplement.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "221",
                "boilingPoint": "685",
                "density": "4.81",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁴",
                "electronegativity": "2.55",
                "ionizationEnergy": "9.752",
                "atomicRadius": "103",
                "group": 16,
                "period": 4
            },
            {
                "atomicNumber": 35,
                "symbol": "Br",
                "name": "Bromine",
                "atomicMass": "79.904",
                "category": "halogen",
                "latinName": "Bromum",
                "yearDiscovered": 1826,
                "discoveredBy": "Antoine Jérôme Balard",
                "discoveryLocation": "France",
                "description": "Bromine is a reddish-brown liquid that evaporates readily to form a similarly colored gas. It's used in flame retardants, water purification, and photography.",
                "stateAtRoomTemp": "Liquid",
                "meltingPoint": "-7.3",
                "boilingPoint": "58.8",
                "density": "3.1028",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁵",
                "electronegativity": "2.96",
                "ionizationEnergy": "11.814",
                "atomicRadius": "94",
                "group": 17,
                "period": 4
            },
            {
                "atomicNumber": 36,
                "symbol": "Kr",
                "name": "Krypton",
                "atomicMass": "83.798",
                "category": "noble-gas",
                "latinName": "Krypton",
                "yearDiscovered": 1898,
                "discoveredBy": "William Ramsay and Morris Travers",
                "discoveryLocation": "United Kingdom",
                "description": "Krypton is a colorless, odorless, tasteless noble gas. It's used in certain types of photographic flashes, high-powered lightning, and as a filling gas for energy-saving fluorescent lights.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-157.36",
                "boilingPoint": "-153.22",
                "density": "0.003733",
                "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁶",
                "electronegativity": "3.00",
                "ionizationEnergy": "14.000",
                "atomicRadius": "88",
                "group": 18,
                "period": 4
            },
            {
                "atomicNumber": 37,
                "symbol": "Rb",
                "name": "Rubidium",
                "atomicMass": "85.468",
                "category": "alkali-metal",
                "latinName": "Rubidium",
                "yearDiscovered": 1861,
                "discoveredBy": "Robert Bunsen and Gustav Kirchhoff",
                "discoveryLocation": "Germany",
                "description": "Rubidium is a very soft, silvery-white metal that can be liquid at room temperature. It's used in photocells, as a getter in vacuum tubes, and atomic clocks.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "39.31",
                "boilingPoint": "688",
                "density": "1.53",
                "electronConfiguration": "[Kr] 5s¹",
                "electronegativity": "0.82",
                "ionizationEnergy": "4.177",
                "atomicRadius": "265",
                "group": 1,
                "period": 5
            },
            {
                "atomicNumber": 38,
                "symbol": "Sr",
                "name": "Strontium",
                "atomicMass": "87.62",
                "category": "alkaline-earth-metal",
                "latinName": "Strontium",
                "yearDiscovered": 1790,
                "discoveredBy": "Adair Crawford",
                "discoveryLocation": "Scotland",
                "description": "Strontium is a soft, silvery, alkaline earth metal. It's primarily used in fireworks to create red colors, in glow-in-the-dark products, and in certain medical applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "777",
                "boilingPoint": "1377",
                "density": "2.64",
                "electronConfiguration": "[Kr] 5s²",
                "electronegativity": "0.95",
                "ionizationEnergy": "5.695",
                "atomicRadius": "219",
                "group": 2,
                "period": 5
            },
            {
                "atomicNumber": 39,
                "symbol": "Y",
                "name": "Yttrium",
                "atomicMass": "88.906",
                "category": "transition-metal",
                "latinName": "Yttrium",
                "yearDiscovered": 1794,
                "discoveredBy": "Johan Gadolin",
                "discoveryLocation": "Finland",
                "description": "Yttrium is a silvery-metallic transition metal. It's used in LED lights, phosphors for TV screens, and strengthening alloys.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1526",
                "boilingPoint": "3336",
                "density": "4.47",
                "electronConfiguration": "[Kr] 4d¹ 5s²",
                "electronegativity": "1.22",
                "ionizationEnergy": "6.217",
                "atomicRadius": "212",
                "group": 3,
                "period": 5
            },
            {
                "atomicNumber": 40,
                "symbol": "Zr",
                "name": "Zirconium",
                "atomicMass": "91.224",
                "category": "transition-metal",
                "latinName": "Zirconium",
                "yearDiscovered": 1789,
                "discoveredBy": "Martin Heinrich Klaproth",
                "discoveryLocation": "Germany",
                "description": "Zirconium is a lustrous, gray-white, strong transition metal. It's mainly used in nuclear reactors, ceramics, and as an alloying agent in steel.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1855",
                "boilingPoint": "4409",
                "density": "6.52",
                "electronConfiguration": "[Kr] 4d² 5s²",
                "electronegativity": "1.33",
                "ionizationEnergy": "6.634",
                "atomicRadius": "206",
                "group": 4,
                "period": 5
            },
            {
                "atomicNumber": 41,
                "symbol": "Nb",
                "name": "Niobium",
                "atomicMass": "92.906",
                "category": "transition-metal",
                "latinName": "Niobium",
                "yearDiscovered": 1801,
                "discoveredBy": "Charles Hatchett",
                "discoveryLocation": "United Kingdom",
                "description": "Niobium is a soft, grey, ductile transition metal. It's used in special steel alloys for gas pipelines, superconducting magnets, and jewelry.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2477",
                "boilingPoint": "4744",
                "density": "8.57",
                "electronConfiguration": "[Kr] 4d⁴ 5s¹",
                "electronegativity": "1.6",
                "ionizationEnergy": "6.759",
                "atomicRadius": "198",
                "group": 5,
                "period": 5
            },
            {
                "atomicNumber": 42,
                "symbol": "Mo",
                "name": "Molybdenum",
                "atomicMass": "95.95",
                "category": "transition-metal",
                "latinName": "Molybdaenum",
                "yearDiscovered": 1778,
                "discoveredBy": "Carl Wilhelm Scheele",
                "discoveryLocation": "Sweden",
                "description": "Molybdenum is a silvery metal with a high melting point. It's commonly used in high-strength steel alloys and electrodes for electrically heated glass furnaces.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2623",
                "boilingPoint": "4639",
                "density": "10.22",
                "electronConfiguration": "[Kr] 4d⁵ 5s¹",
                "electronegativity": "2.16",
                "ionizationEnergy": "7.092",
                "atomicRadius": "190",
                "group": 6,
                "period": 5
            },
            {
                "atomicNumber": 43,
                "symbol": "Tc",
                "name": "Technetium",
                "atomicMass": "(98)",
                "category": "transition-metal",
                "latinName": "Technetium",
                "yearDiscovered": 1937,
                "discoveredBy": "Carlo Perrier, Emilio Segrè",
                "discoveryLocation": "Italy",
                "description": "Technetium was the first artificially produced element. It's radioactive and used mainly in nuclear medicine for diagnostic tests.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2157",
                "boilingPoint": "4265",
                "density": "11.5",
                "electronConfiguration": "[Kr] 4d⁵ 5s²",
                "electronegativity": "1.9",
                "ionizationEnergy": "7.28",
                "atomicRadius": "183",
                "group": 7,
                "period": 5
            },
            {
                "atomicNumber": 44,
                "symbol": "Ru",
                "name": "Ruthenium",
                "atomicMass": "101.07",
                "category": "transition-metal",
                "latinName": "Ruthenium",
                "yearDiscovered": 1844,
                "discoveredBy": "Karl Ernst Claus",
                "discoveryLocation": "Russia",
                "description": "Ruthenium is a rare transition metal that is hard, brittle, and has four crystal modifications. It's used in electrical contacts and as a catalyst in various chemical reactions.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2334",
                "boilingPoint": "4150",
                "density": "12.37",
                "electronConfiguration": "[Kr] 4d⁷ 5s¹",
                "electronegativity": "2.2",
                "ionizationEnergy": "7.36",
                "atomicRadius": "178",
                "group": 8,
                "period": 5
            },
            {
                "atomicNumber": 45,
                "symbol": "Rh",
                "name": "Rhodium",
                "atomicMass": "102.91",
                "category": "transition-metal",
                "latinName": "Rhodium",
                "yearDiscovered": 1803,
                "discoveredBy": "William Hyde Wollaston",
                "discoveryLocation": "United Kingdom",
                "description": "Rhodium is a rare, silvery-white, hard transition metal that is highly reflective. It's primarily used in catalytic converters to reduce harmful emissions from automobiles.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1964",
                "boilingPoint": "3695",
                "density": "12.41",
                "electronConfiguration": "[Kr] 4d⁸ 5s¹",
                "electronegativity": "2.28",
                "ionizationEnergy": "7.46",
                "atomicRadius": "173",
                "group": 9,
                "period": 5
            },
            {
                "atomicNumber": 46,
                "symbol": "Pd",
                "name": "Palladium",
                "atomicMass": "106.42",
                "category": "transition-metal",
                "latinName": "Palladium",
                "yearDiscovered": 1803,
                "discoveredBy": "William Hyde Wollaston",
                "discoveryLocation": "United Kingdom",
                "description": "Palladium is a rare and lustrous silvery-white metal. It's used in catalytic converters, electronics, dentistry, medicine, hydrogen purification, and jewelry.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1555",
                "boilingPoint": "2963",
                "density": "12.02",
                "electronConfiguration": "[Kr] 4d¹⁰",
                "electronegativity": "2.2",
                "ionizationEnergy": "8.34",
                "atomicRadius": "169",
                "group": 10,
                "period": 5
            },
            {
                "atomicNumber": 47,
                "symbol": "Ag",
                "name": "Silver",
                "atomicMass": "107.87",
                "category": "transition-metal",
                "latinName": "Argentum",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Known since ancient times",
                "discoveryLocation": "Middle East",
                "description": "Silver is a soft, white, lustrous transition metal with the highest electrical conductivity of any element. It's used in jewelry, electronics, photography, and as an antimicrobial agent.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "961.78",
                "boilingPoint": "2162",
                "density": "10.49",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s¹",
                "electronegativity": "1.93",
                "ionizationEnergy": "7.576",
                "atomicRadius": "165",
                "group": 11,
                "period": 5
            },
            {
                "atomicNumber": 48,
                "symbol": "Cd",
                "name": "Cadmium",
                "atomicMass": "112.41",
                "category": "transition-metal",
                "latinName": "Cadmium",
                "yearDiscovered": 1817,
                "discoveredBy": "Friedrich Stromeyer",
                "discoveryLocation": "Germany",
                "description": "Cadmium is a soft, bluish-white metal that is highly toxic. It's primarily used in rechargeable nickel-cadmium batteries and for electroplating.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "321.07",
                "boilingPoint": "767",
                "density": "8.65",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s²",
                "electronegativity": "1.69",
                "ionizationEnergy": "8.993",
                "atomicRadius": "161",
                "group": 12,
                "period": 5
            },
            {
                "atomicNumber": 49,
                "symbol": "In",
                "name": "Indium",
                "atomicMass": "114.82",
                "category": "post-transition-metal",
                "latinName": "Indium",
                "yearDiscovered": 1863,
                "discoveredBy": "Ferdinand Reich, Hieronymous Theodor Richter",
                "discoveryLocation": "Germany",
                "description": "Indium is a soft, malleable post-transition metal. It's mainly used to form transparent electrodes from indium tin oxide in LCDs and touchscreens.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "156.6",
                "boilingPoint": "2072",
                "density": "7.31",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p¹",
                "electronegativity": "1.78",
                "ionizationEnergy": "5.786",
                "atomicRadius": "156",
                "group": 13,
                "period": 5
            },
            {
                "atomicNumber": 50,
                "symbol": "Sn",
                "name": "Tin",
                "atomicMass": "118.71",
                "category": "post-transition-metal",
                "latinName": "Stannum",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Known since ancient times",
                "discoveryLocation": "Middle East",
                "description": "Tin is a silvery-white post-transition metal that is malleable, ductile, and highly crystalline. It's used in solder, tinplate, and alloys such as bronze.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "231.93",
                "boilingPoint": "2602",
                "density": "7.29",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p²",
                "electronegativity": "1.96",
                "ionizationEnergy": "7.344",
                "atomicRadius": "145",
                "group": 14,
                "period": 5
            },
            {
                "atomicNumber": 51,
                "symbol": "Sb",
                "name": "Antimony",
                "atomicMass": "121.76",
                "category": "metalloid",
                "latinName": "Stibium",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Known since ancient times",
                "discoveryLocation": "Middle East",
                "description": "Antimony is a lustrous gray metalloid that is used in flame-proofing compounds, batteries, ceramics, and glass.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "630.63",
                "boilingPoint": "1587",
                "density": "6.69",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p³",
                "electronegativity": "2.05",
                "ionizationEnergy": "8.64",
                "atomicRadius": "133",
                "group": 15,
                "period": 5
            },
            {
                "atomicNumber": 52,
                "symbol": "Te",
                "name": "Tellurium",
                "atomicMass": "127.6",
                "category": "metalloid",
                "latinName": "Tellurium",
                "yearDiscovered": 1782,
                "discoveredBy": "Franz-Joseph Müller von Reichenstein",
                "discoveryLocation": "Romania",
                "description": "Tellurium is a brittle, mildly toxic, rare, silver-white metalloid. It's primarily used in alloys and as a semiconductor in thermoelectric devices.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "449.51",
                "boilingPoint": "988",
                "density": "6.24",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁴",
                "electronegativity": "2.1",
                "ionizationEnergy": "9.01",
                "atomicRadius": "123",
                "group": 16,
                "period": 5
            },
            {
                "atomicNumber": 53,
                "symbol": "I",
                "name": "Iodine",
                "atomicMass": "126.90",
                "category": "halogen",
                "latinName": "Iodium",
                "yearDiscovered": 1811,
                "discoveredBy": "Bernard Courtois",
                "discoveryLocation": "France",
                "description": "Iodine is a dark purple-black solid that sublimes to a purple-pink gas. It's essential for human health and is used in medicine, photography, and as a disinfectant.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "113.7",
                "boilingPoint": "184.3",
                "density": "4.93",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁵",
                "electronegativity": "2.66",
                "ionizationEnergy": "10.45",
                "atomicRadius": "115",
                "group": 17,
                "period": 5
            },
            {
                "atomicNumber": 54,
                "symbol": "Xe",
                "name": "Xenon",
                "atomicMass": "131.29",
                "category": "noble-gas",
                "latinName": "Xenon",
                "yearDiscovered": 1898,
                "discoveredBy": "William Ramsay, Morris Travers",
                "discoveryLocation": "United Kingdom",
                "description": "Xenon is a colorless, dense, odorless noble gas. It's used in flash lamps, arc lamps, and as an anesthetic.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-111.7",
                "boilingPoint": "-108.0",
                "density": "0.005887",
                "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁶",
                "electronegativity": "2.6",
                "ionizationEnergy": "12.13",
                "atomicRadius": "108",
                "group": 18,
                "period": 5
            },
            {
                "atomicNumber": 55,
                "symbol": "Cs",
                "name": "Cesium",
                "atomicMass": "132.91",
                "category": "alkali-metal",
                "latinName": "Caesium",
                "yearDiscovered": 1860,
                "discoveredBy": "Robert Bunsen, Gustav Kirchhoff",
                "discoveryLocation": "Germany",
                "description": "Cesium is a soft, silvery-golden alkali metal that is highly reactive. It's used in atomic clocks, as a catalyst, and in photoelectric cells.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "28.44",
                "boilingPoint": "671",
                "density": "1.93",
                "electronConfiguration": "[Xe] 6s¹",
                "electronegativity": "0.79",
                "ionizationEnergy": "3.894",
                "atomicRadius": "298",
                "group": 1,
                "period": 6
            },
            {
                "atomicNumber": 56,
                "symbol": "Ba",
                "name": "Barium",
                "atomicMass": "137.33",
                "category": "alkaline-earth-metal",
                "latinName": "Barium",
                "yearDiscovered": 1808,
                "discoveredBy": "Humphry Davy",
                "discoveryLocation": "United Kingdom",
                "description": "Barium is a soft, silvery alkaline earth metal. It's used in drilling fluids, paints, and as a contrast medium in X-ray imaging.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "727",
                "boilingPoint": "1897",
                "density": "3.51",
                "electronConfiguration": "[Xe] 6s²",
                "electronegativity": "0.89",
                "ionizationEnergy": "5.212",
                "atomicRadius": "253",
                "group": 2,
                "period": 6
            },
            {
                "atomicNumber": 57,
                "symbol": "La",
                "name": "Lanthanum",
                "atomicMass": "138.91",
                "category": "lanthanide",
                "latinName": "Lanthanum",
                "yearDiscovered": 1839,
                "discoveredBy": "Carl Gustav Mosander",
                "discoveryLocation": "Sweden",
                "description": "Lanthanum is a soft, ductile, silvery-white metal that tarnishes rapidly when exposed to air. It's used in high-refractive-index glass, hydrogen storage, and catalysts.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "920",
                "boilingPoint": "3464",
                "density": "6.15",
                "electronConfiguration": "[Xe] 5d¹ 6s²",
                "electronegativity": "1.1",
                "ionizationEnergy": "5.577",
                "atomicRadius": "240",
                "group": 3,
                "period": 6
            },
            {
                "atomicNumber": 58,
                "symbol": "Ce",
                "name": "Cerium",
                "atomicMass": "140.12",
                "category": "lanthanide",
                "latinName": "Cerium",
                "yearDiscovered": 1803,
                "discoveredBy": "Jöns Jakob Berzelius, Wilhelm Hisinger, Martin Heinrich Klaproth",
                "discoveryLocation": "Sweden, Germany",
                "description": "Cerium is a soft, ductile, silvery-white metal that oxidizes readily in air. It's used in catalytic converters, as a polishing agent, and in alloys.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "798",
                "boilingPoint": "3443",
                "density": "6.77",
                "electronConfiguration": "[Xe] 4f¹ 5d¹ 6s²",
                "electronegativity": "1.12",
                "ionizationEnergy": "5.539",
                "atomicRadius": "235",
                "group": 3,
                "period": 6
            },
            {
                "atomicNumber": 59,
                "symbol": "Pr",
                "name": "Praseodymium",
                "atomicMass": "140.91",
                "category": "lanthanide",
                "latinName": "Praseodymium",
                "yearDiscovered": 1885,
                "discoveredBy": "Carl Auer von Welsbach",
                "discoveryLocation": "Austria",
                "description": "Praseodymium is a soft, silvery, malleable and ductile metal. It's used in creating strong metals for aircraft engines, as a catalyst, and in certain types of glass.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "931",
                "boilingPoint": "3520",
                "density": "6.77",
                "electronConfiguration": "[Xe] 4f³ 6s²",
                "electronegativity": "1.13",
                "ionizationEnergy": "5.473",
                "atomicRadius": "239",
                "group": 3,
                "period": 6
            },
            {
                "atomicNumber": 60,
                "symbol": "Nd",
                "name": "Neodymium",
                "atomicMass": "144.24",
                "category": "lanthanide",
                "latinName": "Neodymium",
                "yearDiscovered": 1885,
                "discoveredBy": "Carl Auer von Welsbach",
                "discoveryLocation": "Austria",
                "description": "Neodymium is a soft silvery metal that oxidizes in air. It's used in powerful permanent magnets, lasers, and colored glass.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1016",
                "boilingPoint": "3074",
                "density": "7.01",
                "electronConfiguration": "[Xe] 4f⁴ 6s²",
                "electronegativity": "1.14",
                "ionizationEnergy": "5.525",
                "atomicRadius": "229",
                "group": 3,
                "period": 6
            },
            {
                "atomicNumber": 61,
                "symbol": "Pm",
                "name": "Promethium",
                "atomicMass": "145",
                "category": "lanthanide",
                "latinName": "Promethium",
                "yearDiscovered": 1945,
                "discoveredBy": "Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell",
                "discoveryLocation": "United States",
                "description": "Promethium is a radioactive metal and the only rare earth metal that is radioactive. It has no stable isotopes and is used in luminous paint, nuclear batteries, and scientific research.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1315",
                "boilingPoint": "3273",
                "density": "7.26",
                "electronConfiguration": "[Xe] 4f5 6s2",
                "electronegativity": "1.13",
                "ionizationEnergy": "5.582",
                "atomicRadius": "236",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 62,
                "symbol": "Sm",
                "name": "Samarium",
                "atomicMass": "150.36",
                "category": "lanthanide",
                "latinName": "Samarium",
                "yearDiscovered": 1879,
                "discoveredBy": "Lecoq de Boisbaudran",
                "discoveryLocation": "France",
                "description": "Samarium is a moderately hard silvery metal that oxidizes in air. It is used in magnets, lasers, and as a neutron absorber in nuclear reactors.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1345",
                "boilingPoint": "2067",
                "density": "7.52",
                "electronConfiguration": "[Xe] 4f6 6s2",
                "electronegativity": "1.17",
                "ionizationEnergy": "5.644",
                "atomicRadius": "229",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 63,
                "symbol": "Eu",
                "name": "Europium",
                "atomicMass": "151.964",
                "category": "lanthanide",
                "latinName": "Europium",
                "yearDiscovered": 1901,
                "discoveredBy": "Eugène-Anatole Demarçay",
                "discoveryLocation": "France",
                "description": "Europium is a soft, silvery metal that is quite reactive. It is used in phosphorescent applications, such as in television screens and fluorescent lamps.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1099",
                "boilingPoint": "1802",
                "density": "5.24",
                "electronConfiguration": "[Xe] 4f7 6s2",
                "electronegativity": "1.2",
                "ionizationEnergy": "5.670",
                "atomicRadius": "233",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 64,
                "symbol": "Gd",
                "name": "Gadolinium",
                "atomicMass": "157.25",
                "category": "lanthanide",
                "latinName": "Gadolinium",
                "yearDiscovered": 1880,
                "discoveredBy": "Jean Charles Galissard de Marignac",
                "discoveryLocation": "Switzerland",
                "description": "Gadolinium is a silvery-white, malleable, and ductile rare-earth metal. It is used in MRI contrast agents and as a neutron absorber in nuclear reactors.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1585",
                "boilingPoint": "3273",
                "density": "7.90",
                "electronConfiguration": "[Xe] 4f7 5d1 6s2",
                "electronegativity": "1.20",
                "ionizationEnergy": "6.150",
                "atomicRadius": "237",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 65,
                "symbol": "Tb",
                "name": "Terbium",
                "atomicMass": "158.92535",
                "category": "lanthanide",
                "latinName": "Terbium",
                "yearDiscovered": 1843,
                "discoveredBy": "Carl Gustaf Mosander",
                "discoveryLocation": "Sweden",
                "description": "Terbium is a silvery-white rare earth metal that is malleable and ductile. It is used in solid-state devices, green phosphors in color displays, and as a dopant in various materials.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1629",
                "boilingPoint": "3396",
                "density": "8.23",
                "electronConfiguration": "[Xe] 4f9 6s2",
                "electronegativity": "1.1",
                "ionizationEnergy": "5.863",
                "atomicRadius": "221",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 66,
                "symbol": "Dy",
                "name": "Dysprosium",
                "atomicMass": "162.500",
                "category": "lanthanide",
                "latinName": "Dysprosium",
                "yearDiscovered": 1886,
                "discoveredBy": "Paul Émile Lecoq de Boisbaudran",
                "discoveryLocation": "France",
                "description": "Dysprosium is a bright silver rare earth metal with high magnetic susceptibility. It is used in magnets, lasers, and nuclear reactors.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1680",
                "boilingPoint": "2840",
                "density": "8.54",
                "electronConfiguration": "[Xe] 4f10 6s2",
                "electronegativity": "1.22",
                "ionizationEnergy": "5.938",
                "atomicRadius": "229",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 67,
                "symbol": "Ho",
                "name": "Holmium",
                "atomicMass": "164.93033",
                "category": "lanthanide",
                "latinName": "Holmium",
                "yearDiscovered": 1878,
                "discoveredBy": "Per Teodor Cleve",
                "discoveryLocation": "Sweden",
                "description": "Holmium is a soft and malleable silvery-white rare earth metal. It has the highest magnetic strength of any element and is used in magnets and nuclear reactors.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1734",
                "boilingPoint": "2993",
                "density": "8.79",
                "electronConfiguration": "[Xe] 4f11 6s2",
                "electronegativity": "1.23",
                "ionizationEnergy": "6.021",
                "atomicRadius": "226",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 68,
                "symbol": "Er",
                "name": "Erbium",
                "atomicMass": "167.259",
                "category": "lanthanide",
                "latinName": "Erbium",
                "yearDiscovered": 1843,
                "discoveredBy": "Carl Gustaf Mosander",
                "discoveryLocation": "Sweden",
                "description": "Erbium is a silvery-white solid metal when artificially isolated. It is used in optical fibers, lasers, and as a photographic filter.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1802",
                "boilingPoint": "3141",
                "density": "9.07",
                "electronConfiguration": "[Xe] 4f12 6s2",
                "electronegativity": "1.24",
                "ionizationEnergy": "6.108",
                "atomicRadius": "226",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 69,
                "symbol": "Tm",
                "name": "Thulium",
                "atomicMass": "168.93422",
                "category": "lanthanide",
                "latinName": "Thulium",
                "yearDiscovered": 1879,
                "discoveredBy": "Per Teodor Cleve",
                "discoveryLocation": "Sweden",
                "description": "Thulium is a bright, silvery-gray metal that is soft and malleable. It is used in portable X-ray machines and as a radiation source in cancer treatment.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1818",
                "boilingPoint": "2223",
                "density": "9.32",
                "electronConfiguration": "[Xe] 4f13 6s2",
                "electronegativity": "1.25",
                "ionizationEnergy": "6.184",
                "atomicRadius": "222",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 70,
                "symbol": "Yb",
                "name": "Ytterbium",
                "atomicMass": "173.045",
                "category": "lanthanide",
                "latinName": "Ytterbium",
                "yearDiscovered": 1878,
                "discoveredBy": "Jean Charles Galissard de Marignac",
                "discoveryLocation": "Switzerland",
                "description": "Ytterbium is a soft, malleable, and ductile rare earth metal. It is used in certain steels and as a doping agent in fiber optic cables.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1097",
                "boilingPoint": "1469",
                "density": "6.90",
                "electronConfiguration": "[Xe] 4f14 6s2",
                "electronegativity": "1.25",
                "ionizationEnergy": "6.184",
                "atomicRadius": "222",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 71,
                "symbol": "Lu",
                "name": "Lutetium",
                "atomicMass": "174.9668",
                "category": "lanthanide",
                "latinName": "Lutetium",
                "yearDiscovered": 1907,
                "discoveredBy": "Georges Urbain, Carl Auer von Welsbach, and Charles James",
                "discoveryLocation": "France, Austria, and USA",
                "description": "Lutetium is a silvery-white metal, the last element in the lanthanide series. It is used in catalysts in petroleum refining and in certain medical applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1663",
                "boilingPoint": "3402",
                "density": "9.841",
                "electronConfiguration": "[Xe] 4f14 5d1 6s2",
                "electronegativity": "1.27",
                "ionizationEnergy": "5.4259",
                "atomicRadius": "175",
                "group": 3,
                "period": 6
                },
                {
                "atomicNumber": 72,
                "symbol": "Hf",
                "name": "Hafnium",
                "atomicMass": "178.49",
                "category": "transition metal",
                "latinName": "Hafnium",
                "yearDiscovered": 1923,
                "discoveredBy": "Dirk Coster and George de Hevesy",
                "discoveryLocation": "Denmark",
                "description": "Hafnium is a lustrous, silvery-gray metal known for its high resistance to corrosion. It is used in control rods for nuclear reactors and in semiconductor devices.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2233",
                "boilingPoint": "4603",
                "density": "13.31",
                "electronConfiguration": "[Xe] 4f14 5d2 6s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.8251",
                "atomicRadius": "159",
                "group": 4,
                "period": 6
                },
                {
                "atomicNumber": 73,
                "symbol": "Ta",
                "name": "Tantalum",
                "atomicMass": "180.94788",
                "category": "transition metal",
                "latinName": "Tantalum",
                "yearDiscovered": 1802,
                "discoveredBy": "Anders Gustaf Ekeberg",
                "discoveryLocation": "Sweden",
                "description": "Tantalum is a hard, blue-gray metal highly resistant to corrosion. It is used in electronic components, especially capacitors and high-power resistors.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "3017",
                "boilingPoint": "5458",
                "density": "16.69",
                "electronConfiguration": "[Xe] 4f14 5d3 6s2",
                "electronegativity": "1.5",
                "ionizationEnergy": "7.89",
                "atomicRadius": "146",
                "group": 5,
                "period": 6
                },
                {
                "atomicNumber": 74,
                "symbol": "W",
                "name": "Tungsten",
                "atomicMass": "183.84",
                "category": "transition metal",
                "latinName": "Wolframium",
                "yearDiscovered": 1783,
                "discoveredBy": "José and Fausto Elhuyar",
                "discoveryLocation": "Spain",
                "description": "Tungsten is a grayish-white metal known for having the highest melting point of all elements. It is used in light bulb filaments, cutting tools, and military applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "3422",
                "boilingPoint": "5555",
                "density": "19.25",
                "electronConfiguration": "[Xe] 4f14 5d4 6s2",
                "electronegativity": "2.36",
                "ionizationEnergy": "7.98",
                "atomicRadius": "139",
                "group": 6,
                "period": 6
                },
                {
                "atomicNumber": 75,
                "symbol": "Re",
                "name": "Rhenium",
                "atomicMass": "186.207",
                "category": "transition metal",
                "latinName": "Rhenium",
                "yearDiscovered": 1925,
                "discoveredBy": "Walter Noddack, Ida Noddack, and Otto Berg",
                "discoveryLocation": "Germany",
                "description": "Rhenium is a rare, silvery-white metal with one of the highest melting points. It is used in high-temperature superalloys and catalysts.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "3186",
                "boilingPoint": "5596",
                "density": "21.02",
                "electronConfiguration": "[Xe] 4f14 5d5 6s2",
                "electronegativity": "1.9",
                "ionizationEnergy": "7.88",
                "atomicRadius": "137",
                "group": 7,
                "period": 6
                },
                {
                "atomicNumber": 76,
                "symbol": "Os",
                "name": "Osmium",
                "atomicMass": "190.23",
                "category": "transition metal",
                "latinName": "Osmium",
                "yearDiscovered": 1803,
                "discoveredBy": "Smithson Tennant",
                "discoveryLocation": "England",
                "description": "Osmium is a hard, brittle, bluish-white transition metal in the platinum group, known for being the densest naturally occurring element. It is used in fountain pen nibs, electrical contacts, and other applications requiring extreme durability.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "3033",
                "boilingPoint": "5012",
                "density": "22.59",
                "electronConfiguration": "[Xe] 4f14 5d6 6s2",
                "electronegativity": "2.2",
                "ionizationEnergy": "8.7",
                "atomicRadius": "135",
                "group": 8,
                "period": 6
                },
                {
                "atomicNumber": 77,
                "symbol": "Ir",
                "name": "Iridium",
                "atomicMass": "192.217",
                "category": "transition metal",
                "latinName": "Iridium",
                "yearDiscovered": 1803,
                "discoveredBy": "Smithson Tennant",
                "discoveryLocation": "England",
                "description": "Iridium is a very hard, brittle, silvery-white transition metal of the platinum group, notable for its high density and corrosion resistance. It is used in high-temperature apparatus, electrical contacts, and as a hardening agent for platinum.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2719",
                "boilingPoint": "4701",
                "density": "22.56",
                "electronConfiguration": "[Xe] 4f14 5d7 6s2",
                "electronegativity": "2.2",
                "ionizationEnergy": "8.967",
                "atomicRadius": "136",
                "group": 9,
                "period": 6
                },
                {
                "atomicNumber": 78,
                "symbol": "Pt",
                "name": "Platinum",
                "atomicMass": "195.084",
                "category": "transition metal",
                "latinName": "Platinum",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Pre-Columbian civilizations",
                "discoveryLocation": "South America",
                "description": "Platinum is a dense, malleable, ductile, and highly unreactive precious metal. It is used in catalytic converters, laboratory equipment, electrical contacts, and jewelry.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "2041.4",
                "boilingPoint": "4098",
                "density": "21.45",
                "electronConfiguration": "[Xe] 4f14 5d9 6s1",
                "electronegativity": "2.28",
                "ionizationEnergy": "8.958",
                "atomicRadius": "139",
                "group": 10,
                "period": 6
                },
                {
                "atomicNumber": 79,
                "symbol": "Au",
                "name": "Gold",
                "atomicMass": "196.966569",
                "category": "transition metal",
                "latinName": "Aurum",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Unknown",
                "discoveryLocation": "Various",
                "description": "Gold is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal. It is one of the least reactive chemical elements and is used in jewelry, electronics, and as a monetary standard.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1337.33",
                "boilingPoint": "3129",
                "density": "19.32",
                "electronConfiguration": "[Xe] 4f14 5d10 6s1",
                "electronegativity": "2.54",
                "ionizationEnergy": "9.225",
                "atomicRadius": "144",
                "group": 11,
                "period": 6
                },
                {
                "atomicNumber": 80,
                "symbol": "Hg",
                "name": "Mercury",
                "atomicMass": "200.59",
                "category": "transition metal",
                "latinName": "Hydrargyrum",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Unknown",
                "discoveryLocation": "Various",
                "description": "Mercury is a heavy, silvery d-block element, the only metallic element that is liquid at standard conditions for temperature and pressure. It is used in thermometers, barometers, and other scientific apparatus.",
                "stateAtRoomTemp": "Liquid",
                "meltingPoint": "234.32",
                "boilingPoint": "629.88",
                "density": "13.534",
                "electronConfiguration": "[Xe] 4f14 5d10 6s2",
                "electronegativity": "2.00",
                "ionizationEnergy": "10.437",
                "atomicRadius": "151",
                "group": 12,
                "period": 6
                },
                {
                "atomicNumber": 81,
                "symbol": "Tl",
                "name": "Thallium",
                "atomicMass": "204.38",
                "category": "post-transition metal",
                "latinName": "Thallium",
                "yearDiscovered": 1861,
                "discoveredBy": "William Crookes and Claude-Auguste Lamy",
                "discoveryLocation": "England and France",
                "description": "Thallium is a soft, gray post-transition metal that discolors when exposed to air. It is highly toxic and was historically used in rat poisons and insecticides.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "304",
                "boilingPoint": "1473",
                "density": "11.8",
                "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p1",
                "electronegativity": "1.62",
                "ionizationEnergy": "6.108",
                "atomicRadius": "170",
                "group": 13,
                "period": 6
                },
                {
                "atomicNumber": 82,
                "symbol": "Pb",
                "name": "Lead",
                "atomicMass": "207.2",
                "category": "post-transition metal",
                "latinName": "Plumbum",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Unknown",
                "discoveryLocation": "Various",
                "description": "Lead is a heavy metal known for its malleability and low melting point. It has been used in pipes, paints, and batteries, but its toxicity has led to decreased usage.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "327.5",
                "boilingPoint": "1749",
                "density": "11.34",
                "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p2",
                "electronegativity": "1.87",
                "ionizationEnergy": "7.4167",
                "atomicRadius": "175",
                "group": 14,
                "period": 6
                },
                {
                "atomicNumber": 83,
                "symbol": "Bi",
                "name": "Bismuth",
                "atomicMass": "208.980",
                "category": "post-transition metal",
                "latinName": "Bismuthum",
                "yearDiscovered": "Ancient",
                "discoveredBy": "Unknown",
                "discoveryLocation": "Various",
                "description": "Bismuth is a brittle metal with a silvery-white color and a pinkish hue. It is the most diamagnetic element and has low thermal conductivity.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "271.4",
                "boilingPoint": "1564",
                "density": "9.79",
                "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p3",
                "electronegativity": "2.02",
                "ionizationEnergy": "7.2856",
                "atomicRadius": "160",
                "group": 15,
                "period": 6
                },
                {
                "atomicNumber": 84,
                "symbol": "Po",
                "name": "Polonium",
                "atomicMass": "209",
                "category": "metalloid",
                "latinName": "Polonium",
                "yearDiscovered": 1898,
                "discoveredBy": "Marie and Pierre Curie",
                "discoveryLocation": "France",
                "description": "Polonium is a rare and highly radioactive metalloid. It was discovered by the Curies and named after Marie Curie's homeland, Poland.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "254",
                "boilingPoint": "962",
                "density": "9.196",
                "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p4",
                "electronegativity": "2.0",
                "ionizationEnergy": "8.417",
                "atomicRadius": "168",
                "group": 16,
                "period": 6
                },
                {
                "atomicNumber": 85,
                "symbol": "At",
                "name": "Astatine",
                "atomicMass": "[210]",
                "category": "metalloid",
                "latinName": "Astatinum",
                "yearDiscovered": 1940,
                "discoveredBy": "Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè",
                "discoveryLocation": "USA",
                "description": "Astatine is a rare and radioactive element, the heaviest halogen. Its properties are not well known due to its scarcity and radioactivity.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "302",
                "boilingPoint": "337",
                "density": "Unknown",
                "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p5",
                "electronegativity": "2.2",
                "ionizationEnergy": "9.3",
                "atomicRadius": "150",
                "group": 17,
                "period": 6
                },
                {
                "atomicNumber": 86,
                "symbol": "Rn",
                "name": "Radon",
                "atomicMass": "[222]",
                "category": "noble-gas",
                "latinName": "Radonium",
                "yearDiscovered": 1900,
                "discoveredBy": "Friedrich Ernst Dorn",
                "discoveryLocation": "Germany",
                "description": "Radon is a colorless, odorless, radioactive noble gas. It is formed by the radioactive decay of radium and is considered a health hazard due to its radioactivity.",
                "stateAtRoomTemp": "Gas",
                "meltingPoint": "-71",
                "boilingPoint": "-61.7",
                "density": "9.73 g/L",
                "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p6",
                "electronegativity": "2.2",
                "ionizationEnergy": "10.748",
                "atomicRadius": "120",
                "group": 18,
                "period": 6
                },
                {
                "atomicNumber": 87,
                "symbol": "Fr",
                "name": "Francium",
                "atomicMass": "[223]",
                "category": "alkali-metal",
                "latinName": "Francium",
                "yearDiscovered": 1939,
                "discoveredBy": "Marguerite Perey",
                "discoveryLocation": "France",
                "description": "Francium is an extremely rare, highly radioactive metal that decays quickly. It is the second-rarest naturally occurring element after astatine.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "27",
                "boilingPoint": "677",
                "density": "Unknown",
                "electronConfiguration": "[Rn] 7s1",
                "electronegativity": "0.7",
                "ionizationEnergy": "4.0",
                "atomicRadius": "260",
                "group": 1,
                "period": 7
                },
                {
                "atomicNumber": 88,
                "symbol": "Ra",
                "name": "Radium",
                "atomicMass": "[226]",
                "category": "alkaline-earth-metal",
                "latinName": "Radium",
                "yearDiscovered": 1898,
                "discoveredBy": "Marie and Pierre Curie",
                "discoveryLocation": "France",
                "description": "Radium is a silvery-white, luminescent, highly radioactive metal. It was discovered in pitchblende (uranium oxide) and used in early cancer treatments.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "700",
                "boilingPoint": "1737",
                "density": "5.5 g/cm³",
                "electronConfiguration": "[Rn] 7s2",
                "electronegativity": "0.9",
                "ionizationEnergy": "5.279",
                "atomicRadius": "215",
                "group": 2,
                "period": 7
                },
                {
                "atomicNumber": 89,
                "symbol": "Ac",
                "name": "Actinium",
                "atomicMass": "[227]",
                "category": "actinide",
                "latinName": "Actinium",
                "yearDiscovered": 1899,
                "discoveredBy": "André-Louis Debierne",
                "discoveryLocation": "France",
                "description": "Actinium is a soft, silvery-white radioactive metal. It glows blue in the dark due to its intense radioactivity and is about 150 times more radioactive than radium.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1050",
                "boilingPoint": "3200",
                "density": "10.07 g/cm³",
                "electronConfiguration": "[Rn] 6d1 7s2",
                "electronegativity": "1.1",
                "ionizationEnergy": "5.17",
                "atomicRadius": "195",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 90,
                "symbol": "Th",
                "name": "Thorium",
                "atomicMass": "232.0377",
                "category": "actinide",
                "latinName": "Thorium",
                "yearDiscovered": 1829,
                "discoveredBy": "Jöns Jakob Berzelius",
                "discoveryLocation": "Sweden",
                "description": "Thorium is a weakly radioactive metallic element with a silvery luster. It has potential use as a nuclear fuel in breeder reactors.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1750",
                "boilingPoint": "4788",
                "density": "11.7 g/cm³",
                "electronConfiguration": "[Rn] 6d2 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.08",
                "atomicRadius": "180",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 91,
                "symbol": "Pa",
                "name": "Protactinium",
                "atomicMass": "231.03588",
                "category": "actinide",
                "latinName": "Protactinium",
                "yearDiscovered": 1913,
                "discoveredBy": "Kasimir Fajans and Oswald Helmuth Göhring",
                "discoveryLocation": "Germany",
                "description": "Protactinium is a dense, silvery-gray radioactive actinide metal. It is one of the rarest and most expensive naturally occurring elements.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1568",
                "boilingPoint": "4027",
                "density": "15.37 g/cm³",
                "electronConfiguration": "[Rn] 5f2 6d1 7s2",
                "electronegativity": "1.5",
                "ionizationEnergy": "5.89",
                "atomicRadius": "180",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 92,
                "symbol": "U",
                "name": "Uranium",
                "atomicMass": "238.02891",
                "category": "actinide",
                "latinName": "Uranium",
                "yearDiscovered": 1789,
                "discoveredBy": "Martin Heinrich Klaproth",
                "discoveryLocation": "Germany",
                "description": "Uranium is a silvery-white metal with weak radioactivity. It is primarily used as fuel in nuclear power plants and in nuclear weapons.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1132.2",
                "boilingPoint": "4131",
                "density": "19.1 g/cm³",
                "electronConfiguration": "[Rn] 5f3 6d1 7s2",
                "electronegativity": "1.38",
                "ionizationEnergy": "6.194",
                "atomicRadius": "175",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 93,
                "symbol": "Np",
                "name": "Neptunium",
                "atomicMass": "[237]",
                "category": "actinide",
                "latinName": "Neptunium",
                "yearDiscovered": 1940,
                "discoveredBy": "Edwin McMillan and Philip H. Abelson",
                "discoveryLocation": "USA",
                "description": "Neptunium is a silvery radioactive metal and the first synthetic transuranium element. It is named after the planet Neptune.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "644",
                "boilingPoint": "3902",
                "density": "20.45 g/cm³",
                "electronConfiguration": "[Rn] 5f4 6d1 7s2",
                "electronegativity": "1.36",
                "ionizationEnergy": "6.266",
                "atomicRadius": "175",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 94,
                "symbol": "Pu",
                "name": "Plutonium",
                "atomicMass": "[244]",
                "category": "actinide",
                "latinName": "Plutonium",
                "yearDiscovered": 1940,
                "discoveredBy": "Glenn T. Seaborg, Arthur C. Wahl, Joseph W. Kennedy, and Edwin McMillan",
                "discoveryLocation": "USA",
                "description": "Plutonium is a radioactive, silvery-white metal that tarnishes in air. It is used in nuclear weapons and as fuel in nuclear power plants.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "640",
                "boilingPoint": "3228",
                "density": "19.84 g/cm³",
                "electronConfiguration": "[Rn] 5f6 7s2",
                "electronegativity": "1.28",
                "ionizationEnergy": "6.026",
                "atomicRadius": "175",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 95,
                "symbol": "Am",
                "name": "Americium",
                "atomicMass": "[243]",
                "category": "actinide",
                "latinName": "Americium",
                "yearDiscovered": 1944,
                "discoveredBy": "Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso",
                "discoveryLocation": "USA",
                "description": "Americium is a synthetic radioactive metal. It is used in smoke detectors and as a portable source of gamma rays and alpha particles.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1176",
                "boilingPoint": "2607",
                "density": "13.67 g/cm³",
                "electronConfiguration": "[Rn] 5f7 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "5.993",
                "atomicRadius": "175",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 96,
                "symbol": "Cm",
                "name": "Curium",
                "atomicMass": "[247]",
                "category": "actinide",
                "latinName": "Curium",
                "yearDiscovered": 1944,
                "discoveredBy": "Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso",
                "discoveryLocation": "USA",
                "description": "Curium is a hard, dense, silvery radioactive metal. It is named after Marie and Pierre Curie and is used in scientific research and as a power source for space missions.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1345",
                "boilingPoint": "3110",
                "density": "13.51 g/cm³",
                "electronConfiguration": "[Rn] 5f7 6d1 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "5.991",
                "atomicRadius": "176",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 97,
                "symbol": "Bk",
                "name": "Berkelium",
                "atomicMass": "[247]",
                "category": "actinide",
                "latinName": "Berkelium",
                "yearDiscovered": 1949,
                "discoveredBy": "Glenn T. Seaborg, Albert Ghiorso, and Stanley G. Thompson",
                "discoveryLocation": "USA",
                "description": "Berkelium is a synthetic, radioactive, silvery-white metal. It is named after Berkeley, California, and has no significant commercial applications.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1050",
                "boilingPoint": "Unknown",
                "density": "14.78 g/cm³",
                "electronConfiguration": "[Rn] 5f9 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.23",
                "atomicRadius": "175",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 98,
                "symbol": "Cf",
                "name": "Californium",
                "atomicMass": "[251]",
                "category": "actinide",
                "latinName": "Californium",
                "yearDiscovered": 1950,
                "discoveredBy": "Glenn T. Seaborg, Stanley G. Thompson, Albert Ghiorso, and Kenneth Street, Jr.",
                "discoveryLocation": "USA",
                "description": "Californium is a radioactive metal with no stable isotopes. It is used in neutron moisture gauges, in neutron radiography, and as a neutron source for the discovery of new elements.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "900",
                "boilingPoint": "Unknown",
                "density": "15.1 g/cm³",
                "electronConfiguration": "[Rn] 5f10 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.30",
                "atomicRadius": "186",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 99,
                "symbol": "Es",
                "name": "Einsteinium",
                "atomicMass": "[252]",
                "category": "actinide",
                "latinName": "Einsteinium",
                "yearDiscovered": 1952,
                "discoveredBy": "Albert Ghiorso and team",
                "discoveryLocation": "USA",
                "description": "Einsteinium is a synthetic element named after Albert Einstein. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "860",
                "boilingPoint": "Unknown",
                "density": "8.84 g/cm³",
                "electronConfiguration": "[Rn] 5f11 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.42",
                "atomicRadius": "186",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 100,
                "symbol": "Fm",
                "name": "Fermium",
                "atomicMass": "[257]",
                "category": "actinide",
                "latinName": "Fermium",
                "yearDiscovered": 1952,
                "discoveredBy": "Albert Ghiorso and team",
                "discoveryLocation": "USA",
                "description": "Fermium is a synthetic element named after Enrico Fermi. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1527",
                "boilingPoint": "Unknown",
                "density": "Unknown",
                "electronConfiguration": "[Rn] 5f12 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.50",
                "atomicRadius": "Unknown",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 101,
                "symbol": "Md",
                "name": "Mendelevium",
                "atomicMass": "[258]",
                "category": "actinide",
                "latinName": "Mendelevium",
                "yearDiscovered": 1955,
                "discoveredBy": "Albert Ghiorso, Glenn T. Seaborg, Gregory R. Choppin, Bernard G. Harvey, and Stanley G. Thompson",
                "discoveryLocation": "USA",
                "description": "Mendelevium is a synthetic element named after Dmitri Mendeleev. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "827",
                "boilingPoint": "Unknown",
                "density": "Unknown",
                "electronConfiguration": "[Rn] 5f13 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.58",
                "atomicRadius": "Unknown",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 102,
                "symbol": "No",
                "name": "Nobelium",
                "atomicMass": "[259]",
                "category": "actinide",
                "latinName": "Nobelium",
                "yearDiscovered": 1958,
                "discoveredBy": "Albert Ghiorso, Glenn T. Seaborg, Torbørn Sikkeland, and John R. Walton",
                "discoveryLocation": "USA",
                "description": "Nobelium is a synthetic element named after Alfred Nobel. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "827",
                "boilingPoint": "Unknown",
                "density": "Unknown",
                "electronConfiguration": "[Rn] 5f14 7s2",
                "electronegativity": "1.3",
                "ionizationEnergy": "6.65",
                "atomicRadius": "Unknown",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 103,
                "symbol": "Lr",
                "name": "Lawrencium",
                "atomicMass": "[266]",
                "category": "actinide",
                "latinName": "Lawrencium",
                "yearDiscovered": 1961,
                "discoveredBy": "Albert Ghiorso, Torbjørn Sikkeland, Almon E. Larsh, and Robert M. Latimer",
                "discoveryLocation": "USA",
                "description": "Lawrencium is a synthetic element named after Ernest Lawrence. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid",
                "meltingPoint": "1627",
                "boilingPoint": "Unknown",
                "density": "Unknown",
                "electronConfiguration": "[Rn] 5f14 7s2 7p1",
                "electronegativity": "Unknown",
                "ionizationEnergy": "4.9",
                "atomicRadius": "Unknown",
                "group": 3,
                "period": 7
                },
                {
                "atomicNumber": 104,
                "symbol": "Rf",
                "name": "Rutherfordium",
                "atomicMass": "[267]",
                "category": "transition-metal",
                "latinName": "Rutherfordium",
                "yearDiscovered": 1964,
                "discoveredBy": "Joint Institute for Nuclear Research (USSR) and Lawrence Berkeley National Laboratory (USA)",
                "discoveryLocation": "Russia/USA",
                "description": "Rutherfordium is a synthetic element named after Ernest Rutherford. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "2400",
                "boilingPoint": "5800",
                "density": "23 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d2 7s2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "6.0",
                "atomicRadius": "Unknown",
                "group": 4,
                "period": 7
                },
                {
                "atomicNumber": 105,
                "symbol": "Db",
                "name": "Dubnium",
                "atomicMass": "[268]",
                "category": "transition-metal",
                "latinName": "Dubnium",
                "yearDiscovered": 1967,
                "discoveredBy": "Joint Institute for Nuclear Research (USSR) and Lawrence Berkeley National Laboratory (USA)",
                "discoveryLocation": "Russia/USA",
                "description": "Dubnium is a synthetic element named after the city of Dubna in Russia. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "Unknown",
                "density": "29 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d3 7s2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 5,
                "period": 7
                },
                {
                "atomicNumber": 106,
                "symbol": "Sg",
                "name": "Seaborgium",
                "atomicMass": "[269]",
                "category": "transition-metal",
                "latinName": "Seaborgium",
                "yearDiscovered": 1974,
                "discoveredBy": "Lawrence Berkeley National Laboratory",
                "discoveryLocation": "USA",
                "description": "Seaborgium is a synthetic element named after Glenn T. Seaborg. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "Unknown",
                "density": "35 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d4 7s2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 6,
                "period": 7
                },
                {
                "atomicNumber": 107,
                "symbol": "Bh",
                "name": "Bohrium",
                "atomicMass": "[270]",
                "category": "transition-metal",
                "latinName": "Bohrium",
                "yearDiscovered": 1981,
                "discoveredBy": "Gesellschaft für Schwerionenforschung (GSI)",
                "discoveryLocation": "Germany",
                "description": "Bohrium is a synthetic element named after Niels Bohr. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "Unknown",
                "density": "37 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d5 7s2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 7,
                "period": 7
                },
                {
                "atomicNumber": 108,
                "symbol": "Hs",
                "name": "Hassium",
                "atomicMass": "[270]",
                "category": "transition-metal",
                "latinName": "Hassium",
                "yearDiscovered": 1984,
                "discoveredBy": "Gesellschaft für Schwerionenforschung (GSI)",
                "discoveryLocation": "Germany",
                "description": "Hassium is a synthetic element named after the German state of Hesse. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "Unknown",
                "density": "41 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d6 7s2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 8,
                "period": 7
                },
                {
                "atomicNumber": 109,
                "symbol": "Mt",
                "name": "Meitnerium",
                "atomicMass": "[278]",
                "category": "transition-metal",
                "latinName": "Meitnerium",
                "yearDiscovered": 1982,
                "discoveredBy": "Gesellschaft für Schwerionenforschung (GSI)",
                "discoveryLocation": "Germany",
                "description": "Meitnerium is a synthetic element named after Lise Meitner. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "Unknown",
                "density": "37.4 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d7 7s2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 9,
                "period": 7
                },
                {
                "atomicNumber": 110,
                "symbol": "Ds",
                "name": "Darmstadtium",
                "atomicMass": "[281]",
                "category": "transition-metal",
                "latinName": "Darmstadtium",
                "yearDiscovered": 1994,
                "discoveredBy": "Gesellschaft für Schwerionenforschung (GSI)",
                "discoveryLocation": "Germany",
                "description": "Darmstadtium is a synthetic element named after Darmstadt, Germany. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "Unknown",
                "density": "34.8 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d9 7s1",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 10,
                "period": 7
                },
                {
                "atomicNumber": 111,
                "symbol": "Rg",
                "name": "Roentgenium",
                "atomicMass": "[282]",
                "category": "transition-metal",
                "latinName": "Roentgenium",
                "yearDiscovered": 1994,
                "discoveredBy": "Gesellschaft für Schwerionenforschung (GSI)",
                "discoveryLocation": "Germany",
                "description": "Roentgenium is a synthetic element named after Wilhelm Conrad Röntgen. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "Unknown",
                "density": "28.7 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s1",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 11,
                "period": 7
                },
                {
                "atomicNumber": 112,
                "symbol": "Cn",
                "name": "Copernicium",
                "atomicMass": "[285]",
                "category": "transition-metal",
                "latinName": "Copernicium",
                "yearDiscovered": 1996,
                "discoveredBy": "Gesellschaft für Schwerionenforschung (GSI)",
                "discoveryLocation": "Germany",
                "description": "Copernicium is a synthetic element named after Nicolaus Copernicus. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Liquid (predicted)",
                "meltingPoint": "Unknown",
                "boilingPoint": "357",
                "density": "23.7 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 12,
                "period": 7
                },
                {
                "atomicNumber": 113,
                "symbol": "Nh",
                "name": "Nihonium",
                "atomicMass": "[286]",
                "category": "post-transition-metal",
                "latinName": "Nihonium",
                "yearDiscovered": 2004,
                "discoveredBy": "RIKEN",
                "discoveryLocation": "Japan",
                "description": "Nihonium is a synthetic element named after Japan (Nihon in Japanese). It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "700",
                "boilingPoint": "1400",
                "density": "16 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p1",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 13,
                "period": 7
                },
                {
                "atomicNumber": 114,
                "symbol": "Fl",
                "name": "Flerovium",
                "atomicMass": "[289]",
                "category": "post-transition-metal",
                "latinName": "Flerovium",
                "yearDiscovered": 1999,
                "discoveredBy": "Joint Institute for Nuclear Research (JINR)",
                "discoveryLocation": "Russia",
                "description": "Flerovium is a synthetic element named after the Flerov Laboratory of Nuclear Reactions. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "200",
                "boilingPoint": "380",
                "density": "14 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p2",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 14,
                "period": 7
                },
                {
                "atomicNumber": 115,
                "symbol": "Mc",
                "name": "Moscovium",
                "atomicMass": "[290]",
                "category": "post-transition-metal",
                "latinName": "Moscovium",
                "yearDiscovered": 2004,
                "discoveredBy": "Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory",
                "discoveryLocation": "Russia/USA",
                "description": "Moscovium is a synthetic element named after Moscow Oblast, Russia. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "670",
                "boilingPoint": "1400",
                "density": "13.5 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p3",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 15,
                "period": 7
                },
                {
                "atomicNumber": 116,
                "symbol": "Lv",
                "name": "Livermorium",
                "atomicMass": "[293]",
                "category": "post-transition-metal",
                "latinName": "Livermorium",
                "yearDiscovered": 2000,
                "discoveredBy": "Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory",
                "discoveryLocation": "Russia/USA",
                "description": "Livermorium is a synthetic element named after Lawrence Livermore National Laboratory. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "709",
                "boilingPoint": "1085",
                "density": "12.9 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p4",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 16,
                "period": 7
                },
                {
                "atomicNumber": 117,
                "symbol": "Ts",
                "name": "Tennessine",
                "atomicMass": "[294]",
                "category": "halogen",
                "latinName": "Tennessine",
                "yearDiscovered": 2010,
                "discoveredBy": "Joint Institute for Nuclear Research (JINR), Vanderbilt University, and Oak Ridge National Laboratory",
                "discoveryLocation": "Russia/USA",
                "description": "Tennessine is a synthetic element named after the state of Tennessee. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "723",
                "boilingPoint": "883",
                "density": "7.2 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p5",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 17,
                "period": 7
                },
                {
                "atomicNumber": 118,
                "symbol": "Og",
                "name": "Oganesson",
                "atomicMass": "[294]",
                "category": "noble-gas",
                "latinName": "Oganesson",
                "yearDiscovered": 2006,
                "discoveredBy": "Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory",
                "discoveryLocation": "Russia/USA",
                "description": "Oganesson is a synthetic element named after Yuri Oganessian. Unlike other noble gases, it may be a solid at room temperature. It has no known uses outside of basic scientific research due to its high radioactivity and scarcity.",
                "stateAtRoomTemp": "Solid (predicted)",
                "meltingPoint": "325",
                "boilingPoint": "450",
                "density": "13.6 g/cm³ (predicted)",
                "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p6",
                "electronegativity": "Unknown",
                "ionizationEnergy": "Unknown",
                "atomicRadius": "Unknown",
                "group": 18,
                "period": 7
                }


        ]


// More elements would be listed here...

        // Initialize the periodic table
        document.addEventListener('DOMContentLoaded', function() {
            
            createPeriodicTable();
            setupEventListeners();
            animateElements();
        });

        // Create the periodic table elements
        function createPeriodicTable() {
            const periodicTable = document.getElementById('periodicTable');
            
            // Clear any existing content
            periodicTable.innerHTML = '';
            
            // Create spacer elements for the layout
            for (let period = 1; period <= 7; period++) {
                for (let group = 1; group <= 18; group++) {
                    // Find the element that belongs in this position
                    const element = elements.find(el => el.group === group && el.period === period);
                    
                    if (element) {
                        // Create element div
                        const elementDiv = document.createElement('div');
                        elementDiv.className = `element ${element.category}`;
                        elementDiv.dataset.category = element.category;
                        elementDiv.dataset.atomicNumber = element.atomicNumber;
                        
                        // Add element content
                        elementDiv.innerHTML = `
                            <div class="atomic-number">${element.atomicNumber}</div>
                            <div class="symbol">${element.symbol}</div>
                            <div class="name">${element.name}</div>
                            <div class="atomic-mass">${element.atomicMass}</div>
                        `;
                        
                        periodicTable.appendChild(elementDiv);
                    } else {
                        // Check if this is where lanthanides and actinides would be
                        if (period === 6 && group === 3) {
                            const spacer = document.createElement('div');
                            spacer.className = 'element spacer';
                            spacer.textContent = 'La-Lu';
                            periodicTable.appendChild(spacer);
                        } else if (period === 7 && group === 3) {
                            const spacer = document.createElement('div');
                            spacer.className = 'element spacer';
                            spacer.textContent = 'Ac-Lr';
                            periodicTable.appendChild(spacer);
                        } else {
                            // Add an empty spacer
                            const spacer = document.createElement('div');
                            spacer.className = 'element spacer';
                            periodicTable.appendChild(spacer);
                        }
                    }
                }
            }
            
            // Add lanthanides row (period 8, represents period 6 elements)
            for (let group = 1; group <= 15; group++) {
                if (group === 1 || group === 2) {
                    const spacer = document.createElement('div');
                    spacer.className = 'element spacer';
                    periodicTable.appendChild(spacer);
                } else if (group === 3) {
                    // Label for lanthanides
                    const label = document.createElement('div');
                    label.className = 'element spacer';
                    label.innerHTML = '* Lanthanides';
                    periodicTable.appendChild(label);
                } else {
                    // Find the lanthanide element (57-71)
                    const lanthanum = 57;
                    const atomicNumber = lanthanum + (group - 4);
                    const element = elements.find(el => el.atomicNumber === atomicNumber);
                    
                    if (element) {
                        const elementDiv = document.createElement('div');
                        elementDiv.className = `element ${element.category}`;
                        elementDiv.dataset.category = element.category;
                        elementDiv.dataset.atomicNumber = element.atomicNumber;
                        
                        elementDiv.innerHTML = `
                            <div class="atomic-number">${element.atomicNumber}</div>
                            <div class="symbol">${element.symbol}</div>
                            <div class="name">${element.name}</div>
                            <div class="atomic-mass">${element.atomicMass}</div>
                        `;
                        
                        periodicTable.appendChild(elementDiv);
                    }
                }
            }
            
            // Add actinides row (period 9, represents period 7 elements)
            for (let group = 1; group <= 15; group++) {
                if (group === 1 || group === 2) {
                    const spacer = document.createElement('div');
                    spacer.className = 'element spacer';
                    periodicTable.appendChild(spacer);
                } else if (group === 3) {
                    // Label for actinides
                    const label = document.createElement('div');
                    label.className = 'element spacer';
                    label.innerHTML = '** Actinides';
                    periodicTable.appendChild(label);
                } else {
                    // Find the actinide element (89-103)
                    const actinium = 89;
                    const atomicNumber = actinium + (group - 4);
                    const element = elements.find(el => el.atomicNumber === atomicNumber);
                    
                    if (element) {
                        const elementDiv = document.createElement('div');
                        elementDiv.className = `element ${element.category}`;
                        elementDiv.dataset.category = element.category;
                        elementDiv.dataset.atomicNumber = element.atomicNumber;
                        
                        elementDiv.innerHTML = `
                            <div class="atomic-number">${element.atomicNumber}</div>
                            <div class="symbol">${element.symbol}</div>
                            <div class="name">${element.name}</div>
                            <div class="atomic-mass">${element.atomicMass}</div>
                        `;
                        
                        periodicTable.appendChild(elementDiv);
                    }
                }
            }
        }

        // Set up event listeners
        function setupEventListeners() {
            // Filter buttons
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Filter elements
                    const filter = this.dataset.filter;
                    filterElements(filter);
                });
            });
            
            // Element hover effect
            const elements = document.querySelectorAll('.element:not(.spacer)');
            const hoverInfo = document.getElementById('elementHoverInfo');
            
            elements.forEach(element => {
                
                
                element.addEventListener('mouseout', function() {
                    hoverInfo.style.display = 'none';
                });
                
                // Element click for detailed view
                element.addEventListener('click', function() {
                    const atomicNumber = this.dataset.atomicNumber;
                    showElementDetails(atomicNumber);
                });
            });
            
            // Close modal
            document.getElementById('closeModal').addEventListener('click', function() {
                document.getElementById('elementModal').classList.remove('active');
            });
            
            // Close modal when clicking outside content
            document.getElementById('elementModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
            
            // Mobile menu toggle
            document.querySelector('.mobile-menu').addEventListener('click', function() {
                document.querySelector('nav ul').classList.toggle('show');
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.addEventListener('click', function() {
                    document.querySelector('nav ul').classList.remove('show');
                });
            });
        }

        // Filter elements based on category
        function filterElements(filter) {
            const elementDivs = document.querySelectorAll('.element:not(.spacer)');
            
            elementDivs.forEach(element => {
                if (filter === 'all') {
                    element.style.display = 'flex';
                } else if (filter === 'metal') {
                    if (element.dataset.category.includes('metal') || element.dataset.category === 'lanthanide' || element.dataset.category === 'actinide') {
                        element.style.display = 'flex';
                    } else {
                        element.style.display = 'none';
                    }
                } else if (filter === 'nonmetal') {
                    if (element.dataset.category === 'nonmetal' || element.dataset.category === 'halogen' || element.dataset.category === 'noble-gas') {
                        element.style.display = 'flex';
                    } else {
                        element.style.display = 'none';
                    }
                } else {
                    if (element.dataset.category === filter) {
                        element.style.display = 'flex';
                    } else {
                        element.style.display = 'none';
                    }
                }
            });
        }

        // Get element data by atomic number
        function getElementByAtomicNumber(atomicNumber) {
            return elements.find(element => element.atomicNumber == atomicNumber);
        }

        // Format category name for display
        function formatCategory(category) {
            return category
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        // Show element details in modal
        function showElementDetails(atomicNumber) {
            const element = getElementByAtomicNumber(atomicNumber);
            
            if (!element) return;
            
            const elementDetails = document.getElementById('elementDetails');
            
            // Update modal content
            elementDetails.innerHTML = `
                <div class="element-details">
                    <div class="element-main-info">
                        <div class="element-symbol-large" style="color: var(--${element.category});">${element.symbol}</div>
                        <div class="element-name-large">${element.name}</div>
                        <div class="element-latin">${element.latinName}</div>
                        
                        <div class="element-discovery">
                            <p><strong>Discovered in:</strong> ${element.yearDiscovered}</p>
                            <p><strong>Discovered by:</strong> ${element.discoveredBy}</p>
                            <p><strong>Discovery location:</strong> ${element.discoveryLocation}</p>
                        </div>
                        
                        <p>${element.description}</p>
                    </div>
                    
                    <div class="element-properties">
                        <div class="property-group">
                            <h3>Basic Properties</h3>
                            <div class="property-item">
                                <span class="property-name">Atomic Number</span>
                                <span class="property-value">${element.atomicNumber}</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Atomic Mass</span>
                                <span class="property-value">${element.atomicMass} u</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Category</span>
                                <span class="property-value">${formatCategory(element.category)}</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Group</span>
                                <span class="property-value">${element.group}</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Period</span>
                                <span class="property-value">${element.period}</span>
                            </div>
                        </div>
                        
                        <div class="property-group">
                            <h3>Physical Properties</h3>
                            <div class="property-item">
                                <span class="property-name">State at Room Temp</span>
                                <span class="property-value">${element.stateAtRoomTemp}</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Melting Point</span>
                                <span class="property-value">${element.meltingPoint} °C</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Boiling Point</span>
                                <span class="property-value">${element.boilingPoint} °C</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Density</span>
                                <span class="property-value">${element.density} g/cm³</span>
                            </div>
                        </div>
                        
                        <div class="property-group">
                            <h3>Atomic Properties</h3>
                            <div class="property-item">
                                <span class="property-name">Electron Configuration</span>
                                <span class="property-value">${element.electronConfiguration}</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Electronegativity</span>
                                <span class="property-value">${element.electronegativity}</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Ionization Energy</span>
                                <span class="property-value">${element.ionizationEnergy} eV</span>
                            </div>
                            <div class="property-item">
                                <span class="property-name">Atomic Radius</span>
                                <span class="property-value">${element.atomicRadius} pm</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="atom-animation">
                    <div class="nucleus"></div>
                    <div class="electron-orbit">
                        <div class="electron"></div>
                    </div>
                    <div class="electron-orbit">
                        <div class="electron"></div>
                    </div>
                    <div class="electron-orbit">
                        <div class="electron"></div>
                    </div>
                </div>
            `;
            
            // Show modal
            document.getElementById('elementModal').classList.add('active');
        }

        // Animate elements with GSAP
        function animateElements() {
            const t1 = gsap.timeline()
            t1.from('.atom-animation',{
                scale:0,
                stager:0.5,
                duration:2.5
            })
            t1.to('.loading',{
                top:"-100%",
                stager:0.5,
                duration:0.5
            })
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    