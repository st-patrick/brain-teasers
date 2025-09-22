
window.RC_TOPICS = [
  {
    topic: 'Space probes',
    text: "Pioneer 10 launched before Voyager 2, but only Voyager carried the Golden Record. Both probes flew past giant planets; Voyager took the famous portrait of the Solar System.",
    q: "Which probe launched first?",
    choices: ["Voyager 2", "Pioneer 10", "Both together"], answer: 1
  },
  {
    topic: 'Rivers & cities',
    text: "The Arlen River flows north into the Calder. City X lies upstream of City Y on the Arlen, yet south of the Calder delta.",
    q: "Relative to City Y, where is City X on the Arlen?",
    choices: ["Downstream", "Upstream", "Same location"], answer: 1
  },
  {
    topic: 'History note',
    text: "In 1867, Country A ceded its northern territory to Country B. Decades later, A imported timber from B while exporting coal to C.",
    q: "Who ceded territory to whom?",
    choices: ["B → A", "A → B", "C → A"], answer: 1
  },

  /* ---- new factual/lesson topics ---- */
  {
    topic: 'Plate boundaries',
    text: "California’s San Andreas Fault marks where the Pacific and North American plates slide past each other horizontally. This sideways motion is a classic transform boundary.",
    q: "What type of plate boundary is the San Andreas Fault?",
    choices: ["Divergent", "Transform", "Convergent"], answer: 1
  },
  {
    topic: 'mRNA vaccines',
    text: "mRNA vaccines deliver genetic instructions so cells make a harmless piece of a pathogen (like a spike protein). The immune system learns to recognize it without using live virus.",
    q: "What do mRNA vaccines deliver?",
    choices: ["Genetic instructions (mRNA)", "Live weakened virus", "Antibiotics"], answer: 0
  },
  {
    topic: 'Moon rotation',
    text: "The Moon keeps the same face toward Earth because it’s tidally locked. Its rotation period equals its orbital period, a state called synchronous rotation.",
    q: "Why do we see the same lunar face from Earth?",
    choices: ["Synchronous rotation", "No rotation at all", "Earth’s rotation stops it"], answer: 0
  },
  {
    topic: 'Inflation & rates',
    text: "Inflation erodes purchasing power. Central banks can raise interest rates to cool demand and slow price growth.",
    q: "Why might a central bank raise interest rates?",
    choices: ["To reduce demand and inflation", "To increase government taxes", "To boost imports"], answer: 0
  },
  {
    topic: 'Algorithmic complexity',
    text: "A loop inside a loop that each runs N times typically does O(N²) work. This grows faster than linear time as N increases.",
    q: "What’s the time complexity of two nested loops over N?",
    choices: ["O(N)", "O(N²)", "O(log N)"], answer: 1
  },
  {
    topic: 'Database indexes',
    text: "Indexes speed up lookups by keeping organized references to data, trading extra storage and slower writes for faster reads.",
    q: "What’s the main purpose of a database index?",
    choices: ["Speed up queries", "Compress tables", "Encrypt data"], answer: 0
  },
  {
    topic: 'Git basics',
    text: "A commit records a snapshot. ‘git push’ sends your commits to a remote, while ‘git pull’ fetches and integrates remote changes.",
    q: "Which command sends your local commits to the remote?",
    choices: ["git pull", "git push", "git status"], answer: 1
  },
  {
    topic: 'Right triangles',
    text: "The Pythagorean theorem (a² + b² = c²) applies only to right triangles, relating legs to the hypotenuse.",
    q: "Which triangle type does the Pythagorean theorem apply to?",
    choices: ["Equilateral", "Isosceles", "Right"], answer: 2
  },
  {
    topic: 'Mean vs median',
    text: "Outliers can pull the mean strongly, while the median is more robust to extreme values in skewed data.",
    q: "Which measure is less affected by outliers?",
    choices: ["Mean", "Median", "Both equally"], answer: 1
  },
  {
    topic: 'Central dogma',
    text: "Information flows DNA → RNA → protein. mRNA carries codons that specify the amino acid sequence during translation.",
    q: "Which molecule directly encodes the amino acid sequence?",
    choices: ["mRNA", "tRNA", "DNA (as the final template at the ribosome)"], answer: 0
  },
  {
    topic: 'Nile direction',
    text: "The Nile River flows generally northward and empties into the Mediterranean Sea.",
    q: "In which general direction does the Nile flow?",
    choices: ["North", "South", "East"], answer: 0
  },
  {
    topic: 'Ionic bonds',
    text: "Table salt (NaCl) consists of sodium and chloride ions held together by electrostatic attraction—an ionic bond.",
    q: "What kind of bond holds Na⁺ and Cl⁻ in table salt?",
    choices: ["Covalent", "Ionic", "Metallic"], answer: 1
  },
  {
    topic: 'Sound in space',
    text: "Sound waves need a medium. In the vacuum of space, there’s no air to carry ordinary sound.",
    q: "Why can’t you hear someone across open space?",
    choices: ["Too cold", "No medium for sound to travel", "Light is faster"], answer: 1
  },
  {
    topic: 'Leap years',
    text: "Earth’s orbit is about 365.25 days. Leap years keep the calendar aligned with the actual orbital period.",
    q: "What’s the main reason leap years exist?",
    choices: ["Axial tilt changes", "Orbit ≈ 365.25 days", "Weather cycles"], answer: 1
  },
  {
    topic: 'Bits & values',
    text: "Binary digits (bits) have two states: 0 or 1. Combining bits grows possibilities exponentially.",
    q: "How many distinct values can one bit represent?",
    choices: ["2", "8", "16"], answer: 0
  },
  {
    topic: 'Hippocampus',
    text: "The hippocampus is crucial for forming new episodic memories and spatial navigation.",
    q: "What is a primary function of the hippocampus?",
    choices: ["Heart rate control", "Episodic memory formation", "Hormone secretion"], answer: 1
  },
  {
    topic: 'Modus ponens',
    text: "If P then Q; P; therefore Q. This deductive rule is called modus ponens.",
    q: "Name the rule: If P→Q and P, then Q.",
    choices: ["Modus ponens", "Modus tollens", "Ad hominem"], answer: 0
  },
  {
    topic: 'Compound interest',
    text: "Compound interest accrues on both principal and accumulated interest, outpacing simple interest over time.",
    q: "Which grows faster over long periods?",
    choices: ["Simple interest", "Compound interest", "Neither"], answer: 1
  },
  {
    topic: 'Language families',
    text: "Hungarian belongs to the Uralic language family, not the Indo-European family of most European languages.",
    q: "Hungarian is part of which language family?",
    choices: ["Indo-European", "Uralic", "Afro-Asiatic"], answer: 1
  },
  {
    topic: 'Prime numbers',
    text: "Primes have exactly two positive divisors: 1 and themselves. The number 1 is not prime.",
    q: "Is the number 1 a prime?",
    choices: ["Yes", "No", "Only on some definitions"], answer: 1
  },
  {
    topic: 'Antibiotics & viruses',
    text: "Antibiotics target bacteria, not viruses. Viral illnesses like influenza don’t respond to antibiotics.",
    q: "Do antibiotics cure the flu?",
    choices: ["Yes", "No", "Only strong doses"], answer: 1
  },
  {
    topic: 'Two-factor auth',
    text: "Two-factor authentication adds something you have or are to your password, like a code from an app or a hardware key.",
    q: "Which is an example of 2FA?",
    choices: ["Password only", "Password + authenticator code", "Security question only"], answer: 1
  },
  {
    topic: 'Equator',
    text: "The Equator crosses South America, Africa, and Asia. Ecuador is one country it passes through.",
    q: "Which country lies on the Equator?",
    choices: ["Spain", "Italy", "Ecuador"], answer: 2
  },
  {
    topic: 'ISS orbit',
    text: "The International Space Station circles Earth about every 90 minutes, giving astronauts many sunrises per day.",
    q: "Roughly how many orbits does the ISS make per day?",
    choices: ["~16", "~8", "~2"], answer: 0
  },
  {
    topic: 'Newton’s third law',
    text: "For every action, there’s an equal and opposite reaction. Rockets move forward by expelling exhaust backward.",
    q: "Why does a rocket accelerate forward?",
    choices: ["Gravity push", "Exhaust pushed backward", "Airflow over wings"], answer: 1
  },
  {
    topic: 'pH scale',
    text: "On the pH scale, 7 is neutral. Values below 7 are acidic; above 7 are basic (alkaline).",
    q: "A solution with pH 3 is…",
    choices: ["Neutral", "Acidic", "Basic"], answer: 1
  },
  {
    topic: 'HTTPS',
    text: "HTTPS adds encryption (TLS) on top of HTTP, protecting data in transit from eavesdropping.",
    q: "In HTTPS, what does the ‘S’ stand for?",
    choices: ["Secure", "Server", "Socket"], answer: 0
  },
  {
    topic: 'Working memory',
    text: "Working memory temporarily holds and manipulates information for tasks like reasoning and comprehension.",
    q: "Working memory is primarily used for…",
    choices: ["Long-term storage", "Short-term active processing", "Muscle control"], answer: 1
  },
  {
    topic: 'First Roman emperor',
    text: "After the Roman Republic, Octavian took the title Augustus in 27 BCE, becoming the first Roman emperor.",
    q: "Who was the first Roman emperor?",
    choices: ["Julius Caesar", "Augustus", "Nero"], answer: 1
  },
  {
    topic: 'Hemoglobin',
    text: "Hemoglobin in red blood cells binds oxygen in the lungs and releases it in tissues.",
    q: "What primarily carries oxygen in the blood?",
    choices: ["Plasma", "Hemoglobin", "Platelets"], answer: 1
  },
  {
    topic: 'Moore’s law',
    text: "Moore’s law observed that transistor counts on integrated circuits roughly doubled every two years for decades.",
    q: "What trend does Moore’s law describe?",
    choices: ["Doubling of transistor counts", "Battery life doubling yearly", "CPU clock speeds doubling monthly"], answer: 0
  },
  {
    topic: 'Parity rules',
    text: "Even + even = even, even + odd = odd, odd + odd = even.",
    q: "What is 24 + 17 (parity)?",
    choices: ["Even", "Odd", "Undefined"], answer: 1
  },
  {
    topic: 'Amazon rainforest',
    text: "The Amazon rainforest is the largest tropical forest on Earth; most of it lies within Brazil.",
    q: "The majority of the Amazon rainforest is in…",
    choices: ["Brazil", "Peru", "Colombia"], answer: 0
  },
  {
    topic: 'Mona Lisa',
    text: "The Mona Lisa, famous for its enigmatic smile, was painted by Leonardo da Vinci.",
    q: "Who painted the Mona Lisa?",
    choices: ["Michelangelo", "Leonardo da Vinci", "Raphael"], answer: 1
  },
  {
    topic: 'GDP meaning',
    text: "Gross Domestic Product measures the monetary value of final goods and services produced within a country’s borders.",
    q: "What does GDP stand for?",
    choices: ["Global Demand Price", "Gross Domestic Product", "General Domestic Production"], answer: 1
  },
  {
    topic: 'Greenhouse gases',
    text: "Greenhouse gases like carbon dioxide trap heat in Earth’s atmosphere, warming the planet.",
    q: "Which gas is a major greenhouse gas?",
    choices: ["Nitrogen (N₂)", "Argon (Ar)", "Carbon dioxide (CO₂)"], answer: 2
  },
  {
    topic: 'The Web’s origin',
    text: "Tim Berners-Lee proposed the World Wide Web while at CERN, linking hypertext to the internet.",
    q: "Where was Berners-Lee working when proposing the Web?",
    choices: ["NASA", "MIT", "CERN"], answer: 2
  },
  {
    topic: 'Baltic states',
    text: "The Baltic states are Estonia, Latvia, and Lithuania on the eastern shore of the Baltic Sea.",
    q: "Which of the following is a Baltic state?",
    choices: ["Estonia", "Belarus", "Finland"], answer: 0
  },
  {
    topic: 'Blood pressure',
    text: "Blood pressure is given as systolic over diastolic. Systolic is the pressure when the heart contracts.",
    q: "What does the systolic number represent?",
    choices: ["Pressure between beats", "Pressure during heartbeat", "Lung pressure"], answer: 1
  },
  {
    topic: 'Correlation vs causation',
    text: "A strong correlation between two variables doesn’t prove that one causes the other.",
    q: "Correlation does not imply…",
    choices: ["Association", "Causation", "Measurement"], answer: 1
  },
  {
    topic: 'Moons of Mars',
    text: "Mars has two small moons, Phobos and Deimos, likely captured asteroids.",
    q: "How many moons does Mars have?",
    choices: ["1", "2", "4"], answer: 1
  },
  {
    topic: 'Fall of the Berlin Wall',
    text: "The Berlin Wall, which divided the city during the Cold War, fell in 1989 after mass protests and political change.",
    q: "In what year did the Berlin Wall fall?",
    choices: ["1979", "1989", "1999"], answer: 1
  },
  {
    topic: 'Dystopian authors',
    text: "George Orwell wrote the novel ‘1984’, depicting a surveillance state and thought control.",
    q: "Who wrote ‘1984’?",
    choices: ["Aldous Huxley", "George Orwell", "Ray Bradbury"], answer: 1
  },
  {
    topic: 'Seasons cause',
    text: "Earth’s seasons are caused by its axial tilt (~23.5°), not by large changes in distance from the Sun.",
    q: "What mainly causes the seasons?",
    choices: ["Axial tilt", "Distance from Sun", "Solar flares"], answer: 0
  },
  {
    topic: 'SWOT “O”',
    text: "In SWOT analysis, the letters stand for Strengths, Weaknesses, Opportunities, and Threats.",
    q: "In SWOT, the ‘O’ stands for…",
    choices: ["Operations", "Opportunities", "Obstacles"], answer: 1
  },
  {
    topic: 'Continents & plates',
    text: "Continents ride on tectonic plates that move centimeters per year. Collisions raise mountain ranges over millions of years.",
    q: "What do continents ride on?",
    choices: ["Tectonic plates", "Ocean currents", "Jet streams"], answer: 0
  },
  {
    topic: 'Energy units',
    text: "In physics, the joule (J) is the SI unit of energy. One joule equals one newton-meter.",
    q: "Which is the SI unit of energy?",
    choices: ["Joule", "Watt", "Volt"], answer: 0
  },
  {
    topic: 'Oceans',
    text: "The Pacific Ocean is the largest and deepest of Earth’s oceans, spanning more than 160 million square kilometers.",
    q: "Which is Earth’s largest ocean?",
    choices: ["Atlantic", "Indian", "Pacific"], answer: 2
  },
  {
    topic: 'Vaccination effect',
    text: "Herd immunity occurs when enough people are immune that disease spread is hindered, protecting vulnerable individuals.",
    q: "What’s a community-level benefit of high vaccination rates?",
    choices: ["Herd immunity", "Antibiotic resistance", "More mutations"], answer: 0
  },

  /* --- Science (Bio/Chem/Physics) --- */
  {
    topic: 'Photosynthesis',
    text: "Plants use sunlight to convert carbon dioxide and water into sugars, releasing oxygen as a by-product. The reactions occur in chloroplasts.",
    q: "Which gas is consumed during photosynthesis?",
    choices: ["Oxygen", "Carbon dioxide", "Nitrogen"], answer: 1
  },
  {
    topic: 'Central dogma',
    text: "Genetic information typically flows from DNA to RNA to protein. DNA is transcribed; RNA is translated by ribosomes.",
    q: "What molecule is produced directly from DNA during transcription?",
    choices: ["RNA", "Protein", "Lipid"], answer: 0
  },
  {
    topic: 'Cell energy',
    text: "Mitochondria generate ATP through cellular respiration, supplying energy for many cellular processes.",
    q: "What is the main product mitochondria supply?",
    choices: ["ATP (energy)", "Glucose", "DNA"], answer: 0
  },
  {
    topic: 'Vaccines',
    text: "Vaccines prime the adaptive immune system so it recognizes specific pathogens more quickly upon exposure.",
    q: "What is the primary effect of vaccination?",
    choices: ["Prime immunity to a pathogen", "Kill viruses directly", "Raise body temperature"], answer: 0
  },
  {
    topic: 'Antibiotics',
    text: "Antibiotics target bacteria, not viruses. Misuse promotes antimicrobial resistance.",
    q: "Antibiotics are effective against…",
    choices: ["Bacterial infections", "Viral infections", "Both equally"], answer: 0
  },
  {
    topic: 'Blood sugar hormones',
    text: "Insulin from pancreatic β-cells lowers blood glucose; glucagon raises it by promoting glucose release.",
    q: "Which hormone lowers blood glucose?",
    choices: ["Insulin", "Glucagon", "Adrenaline"], answer: 0
  },
  {
    topic: 'Acids and pH',
    text: "The pH scale measures acidity; values below 7 are acidic, above 7 are basic.",
    q: "A solution with pH 3 is…",
    choices: ["Acidic", "Neutral", "Basic"], answer: 0
  },
  {
    topic: 'Ohm’s law',
    text: "Ohm’s law states V = I·R. For fixed voltage, increasing resistance reduces current.",
    q: "If voltage is constant and resistance increases, current…",
    choices: ["Decreases", "Increases", "Stays the same"], answer: 0
  },
  {
    topic: 'Seasons',
    text: "Earth’s seasons are caused by its axial tilt, which changes sunlight angle and day length during its orbit.",
    q: "What primarily causes the seasons?",
    choices: ["Axial tilt", "Distance to the Sun", "Moon’s phase"], answer: 0
  },
  {
    topic: 'Ocean tides',
    text: "Tides are driven mainly by the Moon’s gravity, with the Sun providing a secondary effect.",
    q: "What is the main driver of tides?",
    choices: ["Moon’s gravity", "Earth’s rotation alone", "Jet streams"], answer: 0
  },
  {
    topic: 'Plate tectonics',
    text: "At convergent boundaries, plates collide and can form mountains or subduction zones.",
    q: "Which boundary involves plates colliding?",
    choices: ["Convergent", "Divergent", "Transform"], answer: 0
  },
  {
    topic: 'Energy vs power',
    text: "Energy is measured in joules; power (rate of energy transfer) is measured in watts.",
    q: "Which unit measures power?",
    choices: ["Joule", "Watt", "Pascal"], answer: 1
  },
  {
    topic: 'Momentum',
    text: "In a closed system, total momentum is conserved. Two skaters pushing apart move in opposite directions with equal and opposite momentum change.",
    q: "What quantity is conserved when two skaters push apart (neglect friction)?",
    choices: ["Total momentum", "Total mass", "Temperature"], answer: 0
  },
  {
    topic: 'Speed of light',
    text: "In vacuum, the speed of light is constant and is the cosmic speed limit in relativity.",
    q: "In vacuum, which speed is constant?",
    choices: ["Light", "Sound", "Wind"], answer: 0
  },

  /* --- Space/Tech --- */
  {
    topic: 'Hubble vs JWST',
    text: "Hubble observes mainly visible and ultraviolet light; JWST is optimized for infrared and operates near the Sun–Earth L2 point.",
    q: "Which telescope is optimized for infrared?",
    choices: ["Hubble", "JWST", "Both equally"], answer: 1
  },
  {
    topic: 'JPEG & PNG',
    text: "JPEG uses lossy compression suited for photos; PNG uses lossless compression and preserves sharp edges and transparency.",
    q: "Which format is lossless by default?",
    choices: ["JPEG", "PNG", "Neither"], answer: 1
  },
  {
    topic: 'Unicode vs ASCII',
    text: "ASCII defines 128 basic characters; Unicode (e.g., UTF-8) encodes characters for many languages and symbols.",
    q: "Which standard supports the widest character set?",
    choices: ["ASCII", "Unicode", "Morse code"], answer: 1
  },
  {
    topic: 'HTTPS',
    text: "HTTPS wraps HTTP in TLS encryption, protecting data in transit and authenticating servers.",
    q: "What does HTTPS add to HTTP?",
    choices: ["Encryption and authentication", "Faster downloads only", "New HTML tags"], answer: 0
  },
  {
    topic: 'DNS',
    text: "The Domain Name System translates human-readable names (like example.com) into IP addresses used for routing.",
    q: "What does DNS primarily provide?",
    choices: ["Name-to-IP resolution", "File storage", "Email forwarding"], answer: 0
  },
  {
    topic: 'Public-key crypto',
    text: "To send a secret, you encrypt with the recipient’s public key; only their private key can decrypt. For signatures, you sign with your private key.",
    q: "To keep a message secret for someone, you encrypt with…",
    choices: ["Your private key", "Recipient’s public key", "Recipient’s private key"], answer: 1
  },

  /* --- CS/Math --- */
  {
    topic: 'Binary search',
    text: "Binary search halves the search interval each step, assuming a sorted list, yielding logarithmic time.",
    q: "What is the time complexity of binary search (n items)?",
    choices: ["O(n)", "O(log n)", "O(1)"], answer: 1
  },
  {
    topic: 'Sorting stability',
    text: "A stable sort preserves the relative order of equal keys. Merge sort is stable; quicksort typically is not by default.",
    q: "Which is stable by default?",
    choices: ["Merge sort", "Quicksort", "Heap sort"], answer: 0
  },
  {
    topic: 'Hash maps',
    text: "Hash tables provide average O(1) lookup with good hashing; worst-case can degrade if many collisions occur.",
    q: "Average-case lookup in a hash map is…",
    choices: ["O(1)", "O(log n)", "O(n)"], answer: 0
  },
  {
    topic: 'SQL joins',
    text: "An INNER JOIN returns only matching rows; a LEFT JOIN keeps all left rows and fills non-matches on the right with NULL.",
    q: "Which join keeps all left-table rows?",
    choices: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN"], answer: 0
  },

  /* --- Econ/History/Geo --- */
  {
    topic: 'Inflation',
    text: "Inflation is a sustained rise in the general price level, which erodes the purchasing power of money.",
    q: "What happens to purchasing power during inflation?",
    choices: ["It decreases", "It increases", "It is unchanged"], answer: 0
  },
  {
    topic: 'Comparative advantage',
    text: "Countries can gain from trade when each specializes in goods with lower opportunity cost, even if one is absolutely better at everything.",
    q: "Gains from trade arise when countries…",
    choices: ["Specialize by opportunity cost", "Avoid specialization", "Fix prices together"], answer: 0
  },
  {
    topic: 'GDP',
    text: "Gross Domestic Product measures the market value of all final goods and services produced within a country in a period.",
    q: "GDP measures the value of…",
    choices: ["Final goods/services", "Intermediate goods only", "Household chores"], answer: 0
  },
  {
    topic: 'Price ceilings',
    text: "A binding price ceiling set below equilibrium leads to shortages because quantity demanded exceeds quantity supplied.",
    q: "A binding price ceiling typically causes…",
    choices: ["Shortages", "Surpluses", "No change"], answer: 0
  },
  {
    topic: 'Compound interest',
    text: "With compounding, interest earns interest over time, accelerating growth compared to simple interest.",
    q: "Compared to simple interest, compound interest…",
    choices: ["Grows faster over time", "Grows slower", "Stops after one period"], answer: 0
  },
  {
    topic: 'Magna Carta',
    text: "The Magna Carta (1215) limited the English king’s power and influenced later constitutional traditions.",
    q: "The Magna Carta primarily…",
    choices: ["Limited royal power", "Expanded royal power", "Abolished parliament"], answer: 0
  },
  {
    topic: 'Printing press',
    text: "Johannes Gutenberg’s movable-type printing press emerged in the 15th century, vastly lowering the cost of books.",
    q: "In which century did Gutenberg’s press appear?",
    choices: ["15th", "12th", "18th"], answer: 0
  },
  {
    topic: 'Apollo 11',
    text: "Apollo 11 achieved the first crewed Moon landing, with Armstrong and Aldrin walking on the Moon.",
    q: "In which year did Apollo 11 land on the Moon?",
    choices: ["1969", "1972", "1959"], answer: 0
  },
  {
    topic: 'Berlin Wall',
    text: "The fall of the Berlin Wall symbolized the end of Cold War divisions in Europe.",
    q: "In which year did the Berlin Wall fall?",
    choices: ["1989", "1991", "1979"], answer: 0
  },
  {
    topic: 'Amazon River',
    text: "The Amazon River carries more water to the ocean than any other river on Earth.",
    q: "Which river has the greatest discharge?",
    choices: ["Amazon", "Nile", "Yangtze"], answer: 0
  },
  {
    topic: 'Largest desert',
    text: "Deserts are defined by dryness, not temperature; Antarctica is Earth’s largest desert by area.",
    q: "What is the largest desert on Earth?",
    choices: ["Antarctica", "Sahara", "Gobi"], answer: 0
  },

  /* --- Health/Learning --- */
  {
    topic: 'Vitamin C',
    text: "A deficiency of vitamin C leads to scurvy, characterized by fatigue and poor wound healing.",
    q: "Severe vitamin C deficiency causes…",
    choices: ["Scurvy", "Rickets", "Goiter"], answer: 0
  },
  {
    topic: 'Pasteurization',
    text: "Pasteurization gently heats liquids like milk to reduce harmful microbes and extend shelf life.",
    q: "The main goal of pasteurization is to…",
    choices: ["Reduce pathogens", "Increase protein content", "Carbonate beverages"], answer: 0
  },
  {
    topic: 'Herd immunity',
    text: "When enough people are immune, chains of transmission are disrupted and outbreaks are less likely.",
    q: "When herd immunity is reached, disease spread tends to…",
    choices: ["Slow down", "Speed up", "Become more severe"], answer: 0
  },
  {
    topic: 'REM sleep',
    text: "REM sleep is strongly associated with vivid dreaming and rapid eye movements.",
    q: "Which stage is most associated with vivid dreams?",
    choices: ["REM sleep", "Deep non-REM", "Quiet wakefulness"], answer: 0
  },
  {
    topic: 'Spacing effect',
    text: "Spacing study sessions over time and using retrieval practice improve long-term retention compared to cramming.",
    q: "Which strategy improves long-term learning?",
    choices: ["Spaced practice", "Single cram session", "Only re-reading"], answer: 0
  },

  /* --- Environment/Energy --- */
  {
    topic: 'Renewables',
    text: "Renewable energy sources replenish naturally on human timescales; wind and solar are examples.",
    q: "Which is a renewable energy source?",
    choices: ["Coal", "Wind", "Diesel"], answer: 1
  },
  {
    topic: 'Greenhouse gases',
    text: "Greenhouse gases like CO₂ and methane trap heat in the atmosphere and contribute to warming.",
    q: "What do greenhouse gases do?",
    choices: ["Trap heat", "Cool the surface", "Block all sunlight"], answer: 0
  }
];
