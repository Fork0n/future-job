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
    },
    {
        question: "Ce fel de mediu de lucru preferi?",
        answers: [
            { text: "Un mediu dinamic și mereu în schimbare", value: "Manager de Proiect" },
            { text: "Un spațiu liniștit, concentrat pe cercetare", value: "Cercetător" },
            { text: "În natură, lucrând la proiecte sustenabile", value: "Ecolog Urban" },
            { text: "Într-un studio creativ, alături de artiști", value: "Designer Grafic" },
            { text: "Într-un birou, analizând date și strategii", value: "Analist Business" }
        ]
    },
    {
        question: "Cum te simți în fața noilor provocări tehnologice?",
        answers: [
            { text: "Entuziasmat și dornic să învăț", value: "Tehnician IT" },
            { text: "Curios, îmi place să testez și să experimentez", value: "Inginer Software" },
            { text: "Caut soluții creative și inovatoare", value: "Inventator" },
            { text: "Prefer să mă documentez bine înainte de a acționa", value: "Analist Business" },
            { text: "Sunt precaut, dar mă adaptez rapid", value: "Expert în securitate cibernetică" }
        ]
    },
    {
        question: "Ce rol îți place să joci într-o echipă?",
        answers: [
            { text: "Lider, coordonez și organizez activitățile", value: "Manager de Proiect" },
            { text: "Soluționator, găsesc rapid rezolvări la probleme", value: "Consultant" },
            { text: "Creator, vin cu idei și concepte noi", value: "Designer Grafic" },
            { text: "Executor, îmi place să pun în practică ideile", value: "Programator" },
            { text: "Analist, studiez situația și ofer perspective noi", value: "Analist Business" }
        ]
    },
    {
        question: "Ce îți place să faci în timpul liber?",
        answers: [
            { text: "Să călătoresc și să explorez locuri noi", value: "Ghid turistic" },
            { text: "Să creez conținut digital", value: "Producător de Conținut Virtual" },
            { text: "Să joc jocuri video", value: "Web Developer" },
            { text: "Să citesc despre noi descoperiri tehnologice", value: "Cercetător" },
            { text: "Să organizez evenimente pentru prieteni și familie", value: "Manager Evenimente" }
        ]
    },
    {
        question: "Ce te face să te simți împlinit profesional?",
        answers: [
            { text: "Să văd rezultatele concrete ale muncii mele", value: "Inginer" },
            { text: "Să contribui la dezvoltarea altor oameni", value: "Antrenor personal" },
            { text: "Să fiu parte din proiecte care aduc schimbări pozitive", value: "Consultant" },
            { text: "Să îmi folosesc creativitatea în fiecare zi", value: "Designer Grafic" },
            { text: "Să rezolv probleme complexe și provocatoare", value: "Analist Business" }
        ]
    },
    {
        question: "Ce tip de proiecte îți captează atenția?",
        answers: [
            { text: "Proiecte educaționale", value: "Profesor" },
            { text: "Proiecte tehnice și complexe", value: "Inginer Software" },
            { text: "Proiecte artistice și creative", value: "Fotograf" },
            { text: "Proiecte de cercetare medicală", value: "Medic" },
            { text: "Proiecte antreprenoriale", value: "Antreprenor" }
        ]
    },
    {
        question: "Ce aptitudine te reprezintă cel mai bine?",
        answers: [
            { text: "Abilități organizatorice", value: "Manager de Proiect" },
            { text: "Gândirea logică și analitică", value: "Analist financiar" },
            { text: "Comunicarea eficientă", value: "Consultant" },
            { text: "Creativitatea artistică", value: "Designer Grafic" },
            { text: "Înclinația spre inovație", value: "Inventator" }
        ]
    },
    {
        question: "Ce domeniu îți trezește cel mai mult interesul?",
        answers: [
            { text: "Tehnologie și programare", value: "Programator" },
            { text: "Arte vizuale și design", value: "Designer UI/UX" },
            { text: "Medicină și sănătate", value: "Medic" },
            { text: "Finanțe și economie", value: "Economist" },
            { text: "Educație și dezvoltare personală", value: "Profesor" }
        ]
    },
    {
        question: "Cum preferi să abordezi o sarcină dificilă?",
        answers: [
            { text: "Cu o abordare strategică", value: "Manager de Proiect" },
            { text: "Prin analiză detaliată", value: "Analist de Date" },
            { text: "Cu creativitate și originalitate", value: "Designer Grafic" },
            { text: "Prin experimentare și prototipare", value: "Inventator" },
            { text: "Căutând ajutorul unui specialist", value: "Consultant" }
        ]
    },
    {
        question: "Ce îți aduce cea mai mare satisfacție în muncă?",
        answers: [
            { text: "Să ajut oamenii", value: "Psiholog" },
            { text: "Să inovez în domeniul meu", value: "Inventator" },
            { text: "Să mă dezvolt profesional continuu", value: "Programator" },
            { text: "Să creez lucruri frumoase", value: "Designer Grafic" },
            { text: "Să îmbunătățesc procesele existente", value: "Analist Business" }
        ]
    },
    {
        question: "Ce activități te relaxează?",
        answers: [
            { text: "Cititul și învățarea", value: "Profesor" },
            { text: "Sportul și activitatea fizică", value: "Antrenor personal" },
            { text: "Creativitatea în bucătărie", value: "Chef" },
            { text: "Jocurile video și tehnologia", value: "Web Developer" },
            { text: "Explorarea naturii", value: "Ghid turistic" }
        ]
    }
];


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
