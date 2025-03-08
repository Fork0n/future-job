const questions = [
    {
        question: "Ce tip de activitate îți aduce cea mai mare satisfacție?",
        answers: [
            { text: "Să programez și să automatizez lucruri", value: "Specialist în Inteligență Artificială" },
            { text: "Să rezolv probleme complexe", value: "Inginer de Robotică" },
            { text: "Să creez lumi virtuale", value: "Dezvoltator de Realitate Virtuală" },
            { text: "Să reduc impactul asupra mediului", value: "Consultant în Sustenabilitate" },
            { text: "Să lucrez cu date și statistici", value: "Analist de Date" }
        ]
    },
    {
        question: "Ce tehnologie te fascinează cel mai mult?",
        answers: [
            { text: "Inteligența Artificială și Machine Learning", value: "Cercetător în AI" },
            { text: "Robotica și automatizările", value: "Inginer Mecatronic" },
            { text: "Realitatea Augmentată", value: "Designer de Experiențe AR" },
            { text: "Biotehnologiile", value: "Geneticist de Precizie" },
            { text: "Securitatea digitală", value: "Specialist în Securitate Cibernetică" }
        ]
    },
    {
        question: "Cum preferi să lucrezi?",
        answers: [
            { text: "Într-un laborator high-tech", value: "Cercetător în Nanotehnologie" },
            { text: "De acasă, remote", value: "Antrenor de Productivitate Digitală" },
            { text: "În echipe internaționale", value: "Consultant de Transformare Digitală" },
            { text: "Pe teren, cu dispozitive inteligente", value: "Pilot de Drone Autonome" },
            { text: "În spațiul digital, construind lumi virtuale", value: "Designer Metaverse" }
        ]
    },
    {
        question: "Ce te motivează cel mai mult într-o carieră?",
        answers: [
            { text: "Să contribui la un viitor mai bun", value: "Consultant în Energie Regenerabilă" },
            { text: "Să creez produse inovative", value: "Inginer de Produse IoT" },
            { text: "Să analizez și să prezic tendințe", value: "Specialist în Analiza Predictivă" },
            { text: "Să transform idei în realitate", value: "Inovator în Tehnologii Creative" },
            { text: "Să îmbunătățesc sănătatea oamenilor", value: "Biomedic" }
        ]
    },
    {
        question: "Cum îți petreci timpul liber?",
        answers: [
            { text: "Experimentând cu noile tehnologii", value: "Early Adopter de Tehnologie" },
            { text: "Citind despre viitorul planetei", value: "Cercetător în Ecotehnologii" },
            { text: "Creând conținut digital", value: "Producător de Conținut Virtual" },
            { text: "Explorând jocuri video", value: "Dezvoltator de Jocuri în VR" },
            { text: "Învățând despre automatizare și AI", value: "Programator de Algoritmi" }
        ]
    },
    {
        question: "Ce abilități crezi că te caracterizează?",
        answers: [
            { text: "Gândirea analitică", value: "Analist de Date" },
            { text: "Creativitatea digitală", value: "Designer de Experiențe în Metaverse" },
            { text: "Abilitatea de a lucra cu tehnologii noi", value: "Specialist în Automatizare" },
            { text: "Empatia și comunicarea", value: "Antrenor de Productivitate Digitală" },
            { text: "Cunoașterea mediului și sustenabilitate", value: "Consultant în Economia Circulară" }
        ]
    },
    {
        question: "Ce te atrage mai mult la un loc de muncă?",
        answers: [
            { text: "Inovația și dinamismul", value: "Dezvoltator de Soluții Smart City" },
            { text: "Impactul social", value: "Consultant în Tehnologie pentru Educație" },
            { text: "Explorarea de noi tehnologii", value: "Arhitect de Soluții Blockchain" },
            { text: "Să îmbunătățesc procesele existente", value: "Optimizator de Procese Automatizate" },
            { text: "Să colaborez cu experți globali", value: "Specialist în Tehnologii de Colaborare Virtuală" }
        ]
    },
    {
        question: "Care dintre aceste activități ți-ar plăcea cel mai mult?",
        answers: [
            { text: "Să dezvolt roboți umanoizi", value: "Inginer de Robotică Avansată" },
            { text: "Să construiesc soluții de energie verde", value: "Specialist în Tehnologii Verzi" },
            { text: "Să creez realități digitale imersive", value: "Creator de Experiențe XR" },
            { text: "Să folosesc date pentru a prezice viitorul", value: "Specialist în Analiză Predictivă" },
            { text: "Să programez inteligențe artificiale", value: "Dezvoltator de AI" }
        ]
    },
    {
        question: "Ce fel de proiecte te entuziasmează?",
        answers: [
            { text: "Proiecte futuriste", value: "Vizionar în Inovație Tehnologică" },
            { text: "Proiecte ecologice și sustenabile", value: "Ecolog Urban" },
            { text: "Proiecte educaționale digitale", value: "Dezvoltator de Platforme EdTech" },
            { text: "Proiecte de automatizare", value: "Specialist în Automatizare Industrială" },
            { text: "Proiecte de divertisment virtual", value: "Designer de Experiențe în Metaverse" }
        ]
    },
    {
        question: "Cum abordezi o problemă nouă?",
        answers: [
            { text: "Cu o minte deschisă și creativă", value: "Inovator în Tehnologii Creative" },
            { text: "Analizând toate datele disponibile", value: "Analist de Date" },
            { text: "Testând diferite soluții tehnologice", value: "Inginer de Prototipuri Digitale" },
            { text: "Găsind soluții care să aducă beneficii pe termen lung", value: "Consultant în Sustenabilitate" },
            { text: "Experimentând în realitatea virtuală", value: "Dezvoltator de Conținut VR" }
        ]
    }
];


// Add more job options as needed (totaling at least 50 potential job results)
const possibleJobs = [
    'Designer Grafic', 'Data Scientist', 'Inginer', 
    'Freelancer', 'Manager de Proiect', 'Consultant', 
    'Psiholog', 'Programator', 'Inventator',
    'Medic', 'Arhitect', 'Avocat', 'Profesor',
    'Jurnalist', 'Antreprenor', 'Chef', 'Fotograf',
    'Actor', 'Muzician', 'Antrenor personal', 'Cercetător',
    'Analist financiar', 'Administrator de sistem', 'Web Developer',
    'Specialist în marketing', 'Copywriter', 'Traducător', 
    'Specialist HR', 'Designer UI/UX', 'Administrator de rețea',
    'Consultant financiar', 'Agent imobiliar', 'Vânzător',
    'Economist', 'Psihiatru', 'Kinetoterapeut', 'Inginer software',
    'Bioinginer', 'Tehnician IT', 'Expert în securitate cibernetică',
    'Designer interior', 'Consultant turism', 'Pilot', 
    'Steward/Stewardesă', 'Manager restaurant', 'Tehnician audio-video',
    'Ghid turistic', 'Analist business', 'Administrator de proiect'
];
