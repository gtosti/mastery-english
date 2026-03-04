/**
 * EDTECH ARCHITECTURE: MODULE M2 (LEVEL A2 - PRE-INTERMEDIATE)
 * CORRECTED VERSION - 32 Lessons
 * Additions: Have Got (lesson 05), Can/Could for Requests (lesson 08)
 */

const m2Data = [
    {
        id: 1,
        title: "01. Past Simple: Narrative Foundation",
        explanation: "O Past Simple foca em ações terminadas. Verbos regulares terminam em **-ed**, enquanto os irregulares mudam drasticamente (buy/bought, think/thought). <br><b>Key:</b> O auxiliar 'Did' é o 'coringa' para perguntas e negativas.",
        exercises: [
        { question: "I ___ (see) a great movie last night.", answer: "saw", tip: "Irregular past of 'see'." },
        { question: "They ___ (not/arrive) on time.", answer: "did not arrive", tip: "Use 'did not' + base form." }
        ],
        llmPrompt: "Roleplay: You are a suspicious customs officer. I am a traveler returning from a trip. Ask me 5 detailed questions about what I did, where I stayed, and what I bought yesterday. Challenge my answers."
    },
    {
        id: 2,
        title: "02. Past Continuous: Setting the Scene",
        explanation: "Usado para ações em progresso no passado. Estrutura: **Was/Were + Verb-ING**. <br><b>Interaction:</b> Frequentemente usado com 'When' e 'While' para contrastar com o Past Simple.",
        exercises: [
        { question: "I ___ (study) when the phone rang.", answer: "was studying", tip: "Action in progress (Past Continuous)." },
        { question: "What ___ they ___ (do) at 10 PM?", answer: "were / doing", tip: "Question form for they." }
        ],
        llmPrompt: "Context: An alibi. A crime happened at 8 PM yesterday. You are my lawyer. Ask me what I was doing, who I was talking to, and where I was going to build my alibi."
    },
    {
        id: 3,
        title: "03. Comparatives & Superlatives (Complex)",
        explanation: "A2 exige o domínio de adjetivos curtos (fast/faster), longos (beautiful/more beautiful) e as exceções: **Good/Better/Best** e **Bad/Worse/Worst**. Também incluímos 'as...as' (igualdade).",
        exercises: [
        { question: "This car is ___ (bad) than my old one.", answer: "worse", tip: "Irregular comparative of 'bad'." },
        { question: "She is as ___ (tall) as her brother.", answer: "tall", tip: "Use base form between 'as...as'." }
        ],
        llmPrompt: "Task: Review three popular cities. Compare them using 'better than', 'the most expensive', and 'as crowded as'. Explain which one is the best for a digital nomad."
    },
    {
        id: 4,
        title: "04. Future Logic: Will, Going To & Continuous",
        explanation: "A distinção tripla do A2: <br>1. **Will**: Decisões súbitas/previsões. <br>2. **Going to**: Planos/Intenções. <br>3. **Present Continuous**: Compromissos agendados (fixed arrangements).",
        exercises: [
        { question: "I ___ (meet) the CEO at 3 PM (scheduled).", answer: "am meeting", tip: "Use Present Continuous for fixed appointments." },
        { question: "Look at the clouds! It ___ (rain).", answer: "is going to rain", tip: "Prediction based on evidence." }
        ],
        llmPrompt: "Roleplay: You are my busy executive assistant. We are looking at my calendar for next week. Tell me my schedule using Present Continuous for meetings and 'Going to' for my goals."
    },
    {
        id: 5,
        title: "xx. Have Got: Possession (British English)",
        explanation: "Estrutura muito comum no inglês britânico e conversacional. Equivale a <b>Have</b>, mas mais natural na fala. <br><b>Affirmative:</b> I have got = I've got. <br><b>Question:</b> Have you got...? <br><b>Negative:</b> I haven't got.",
        exercises: [
        { question: "___ you got a pen I can borrow?", answer: "Have", tip: "Question form: Have + subject + got?" },
        { question: "She ___ got any brothers or sisters.", answer: "hasn't", tip: "Negative: hasn't got (not has not got in speech)." }
        ],
        llmPrompt: "Context: Packing for a trip. Ask me 'Have you got your...?' for 5 essential travel items. I will answer 'Yes, I've got it' or 'No, I haven't got one'."
    },
    {
        id: 6,
        title: "06. Present Perfect: Life & Unfinished Time",
        explanation: "O 'divisor de águas' do A2. Usa-se **Have/Has + Participle**. Foco em experiências (Ever/Never) e resultados recentes (Just/Already/Yet).",
        exercises: [
        { question: "___ you ___ (finish) the report yet?", answer: "Have / finished", tip: "Question with 'yet' in Present Perfect." },
        { question: "He ___ (never/be) to Italy.", answer: "has never been", tip: "3rd person singular + never." }
        ],
        llmPrompt: "Task: Interview me for a 'World Traveler' magazine. Ask me about countries I've visited and things I've done using 'Have you ever...'. If I say yes, ask 'When did you go?' to switch to Past Simple."
    },
    {
        id: 7,
        title: "07. Modals: Obligation, Necessity & Advice",
        explanation: "Diferenciamos **Must** (obrigação interna/forte), **Have to** (necessidade externa/regra) e **Should** (conselho/sugestão).",
        exercises: [
        { question: "You ___ (deve) wear a seatbelt. It's the law.", answer: "have to", tip: "External rule/law." },
        { question: "You ___ (deveria) try this cake. It's great!", answer: "should", tip: "Friendly advice." }
        ],
        llmPrompt: "Context: New employee orientation. You are the HR Manager. Tell me the rules of the office using 'must' and 'have to', and give me some personal tips using 'should'."
    },
    {
        id: 8,
        title: "xx. Can / Could for Requests & Permission",
        explanation: "Diferente de <b>Can</b> para habilidade (A1), aqui usamos para <b>pedir</b> algo ou <b>pedir permissão</b>. <br><b>Can I...?</b> Informal. <br><b>Could I...?</b> Mais educado. <br><b>Could you...?</b> Pedir favor a alguém.",
        exercises: [
        { question: "___ I use your phone, please?", answer: "Could", tip: "More polite than Can for requests." },
        { question: "___ you open the window? It's hot.", answer: "Could", tip: "Asking someone else to do something." }
        ],
        llmPrompt: "Roleplay: You are a hotel receptionist. I am a guest making requests. Respond to my 'Could I...?' and 'Can you...?' questions politely. Include things like extra towels, a wake-up call, and a taxi."
    },
    {
        id: 9,
        title: "09. Zero & First Conditional",
        explanation: "Lógica de causa e efeito. <br><b>Zero:</b> Fatos (If you heat ice, it melts). <br><b>First:</b> Possibilidades reais (If it rains, I will stay home).",
        exercises: [
        { question: "If I ___ (study) hard, I will pass.", answer: "study", tip: "First conditional: If + Present, Will + Verb." },
        { question: "If you ___ (touch) fire, you get burned.", answer: "touch", tip: "Zero conditional for general truths." }
        ],
        llmPrompt: "Task: Negotiation. You are a car salesman. I am a difficult client. Use the First Conditional to make me offers (e.g., 'If you buy today, I will give you a discount')."
    },
    {
        id: 10,
        title: "10. Gerunds vs Infinitives",
        explanation: "Saber quando usar **-ING** ou **TO + Verb**. <br><b>Gerund:</b> Após 'Enjoy', 'Finish', 'Mind'. <br><b>Infinitive:</b> Após 'Want', 'Need', 'Hope', 'Decide'.",
        exercises: [
        { question: "I enjoy ___ (read) before bed.", answer: "reading", tip: "'Enjoy' is followed by a gerund." },
        { question: "She decided ___ (buy) a new house.", answer: "to buy", tip: "'Decide' is followed by an infinitive." }
        ],
        llmPrompt: "Context: Talking about hobbies and future dreams. Tell me what you love doing and what you hope to achieve next year. Use verbs like 'suggest', 'plan', 'avoid', and 'expect'."
    },
    {
        id: 11,
        title: "11. Relative Pronouns: Who, Which, Where",
        explanation: "Usados para definir ou dar informações extras sem repetir o sujeito. <br><b>Who:</b> Pessoas. <br><b>Which:</b> Coisas. <br><b>Where:</b> Lugares.",
        exercises: [
        { question: "This is the man ___ lives next door.", answer: "who", tip: "Relative pronoun for people." },
        { question: "I love the city ___ I was born.", answer: "where", tip: "Relative pronoun for places." }
        ],
        llmPrompt: "Task: I am an alien visiting Earth. Explain 5 common objects and people to me using relative clauses (e.g., 'A teacher is a person who helps you learn')."
    },
    {
        id: 12,
        title: "12. Phrasal Verbs & Expressions of Movement",
        explanation: "No A2, o aluno começa a lidar com verbos compostos essenciais. <br><b>Common:</b> Get up, Wake up, Go out, Look for, Turn on/off. <br><b>Movement:</b> Along, Across, Through, Into.",
        exercises: [
        { question: "I need to ___ (procurar) my keys.", answer: "look for", tip: "Phrasal verb for searching." },
        { question: "Walk ___ (através de) the tunnel.", answer: "through", tip: "Preposition of movement." }
        ],
        llmPrompt: "Roleplay: You are giving me directions in a large office. Use 'turn on', 'go through', 'look for' and 'walk along'. I am lost and need to find the exit."
    },
    {
        id: 13,
        title: "13. Reported Speech: Basic Say & Tell",
        explanation: "A capacidade de reportar o que outros disseram. No A2, focamos no presente para passado simples. <br><b>Ex:</b> 'I am tired' -> He said he was tired.",
        exercises: [
        { question: "Direct: 'I like cake'. Reported: He said he ___ cake.", answer: "liked", tip: "Move one tense back (Present -> Past)." },
        { question: "She ___ (me contou) a secret.", answer: "told me", tip: "Use 'tell' when there is a direct object (me)." }
        ],
        llmPrompt: "Task: You are a gossip columnist. I will tell you 3 things about my life. You must report them to your 'readers' using 'He said that...' or 'He told me that...'"
    },
    {
        id: 14,
        title: "14. Adverbs of Manner & Degree",
        explanation: "Como as coisas são feitas. <br><b>Manner:</b> Quickly, Slowly, Happily, Well (Irregular). <br><b>Degree:</b> Too (excessivo), Enough (suficiente), Quite, Very.",
        exercises: [
        { question: "He drives very ___ (careful).", answer: "carefully", tip: "Adjective + ly = Adverb." },
        { question: "This soup is ___ hot (excessivamente).", answer: "too", tip: "Use 'too' for negative excess." }
        ],
        llmPrompt: "Context: Sports commentary. Narrate a race between two athletes. Describe how they are running (fast, slowly, bravely) and if they are 'tired enough' or 'too fast'."
    },
    {
        id: 15,
        title: "15. Present Perfect with Since and For",
        explanation: "No A2, precisamos conectar o passado ao presente para falar de **duração**. <br><b>FOR:</b> Período de tempo (for 3 years). <br><b>SINCE:</b> Ponto de início (since 2010, since I was a child).",
        exercises: [
        { question: "I have lived here ___ 2015.", answer: "since", tip: "Use for a specific starting point." },
        { question: "She has been a teacher ___ ten years.", answer: "for", tip: "Use for a duration/period of time." }
        ],
        llmPrompt: "Roleplay: You are an old friend I haven't seen in years. Ask me 'How long have you...?' about my job, my house, and my hobbies. I must answer using 'Since' and 'For' correctly."
    },
    {
        id: 16,
        title: "16. Used To: Past Habits vs. Present",
        explanation: "Estrutura essencial para descrever mudanças de vida. **Used to** descreve algo que era verdade no passado, mas não é mais. <br><b>Ex:</b> 'I used to smoke, but now I don't'.",
        exercises: [
        { question: "I ___ (costumava) play video games every day.", answer: "used to", tip: "Structure for past habits." },
        { question: "Did you ___ (costumava) live in London?", answer: "use to", tip: "In questions with 'Did', remove the 'd' from 'used'." }
        ],
        llmPrompt: "Task: 'The Time Traveler'. I am from the year 1920. Tell me about how life was different back then using 'People used to...' and 'They didn't use to...'. Compare it with today."
    },
    {
        id: 17,
        title: "17. Basic Passive Voice (Present & Past)",
        explanation: "O aluno A2 deve reconhecer quando o foco está na ação, não em quem a fez. <br><b>Structure:</b> Subject + Be + Past Participle. <br><b>Ex:</b> 'The bridge was built in 1890'.",
        exercises: [
        { question: "English ___ (speak) all over the world.", answer: "is spoken", tip: "Present passive: am/is/are + participle." },
        { question: "The window ___ (break) by the wind yesterday.", answer: "was broken", tip: "Past passive: was/were + participle." }
        ],
        llmPrompt: "Context: You are a museum curator. Describe 3 famous artifacts using the passive voice (e.g., 'This painting was made by...', 'These coins are kept in...')."
    },
    {
        id: 18,
        title: "18. Modals of Possibility: May, Might, Could",
        explanation: "Diferente de 'Can' (habilidade), usamos estes para **especular**. <br><b>May/Might:</b> Possibilidade futura ou incerta. <br><b>Could:</b> Possibilidade teórica.",
        exercises: [
        { question: "It ___ (talvez) rain later. The sky is grey.", answer: "might", tip: "Use for a possibility." },
        { question: "Take an umbrella. It ___ (pode) be useful.", answer: "could", tip: "Theoretical possibility." }
        ],
        llmPrompt: "Context: Weather and Plans. I have an outdoor party tomorrow. Tell me what 'might' happen if it rains and give me 3 possibilities using 'could'."
    },
    {
        id: 19,
        title: "19. Indefinite Pronouns: Someone, Anywhere, Nothing",
        explanation: "Usados quando não queremos ou não podemos especificar a pessoa, lugar ou coisa. <br><b>Some-:</b> Afirmativas. <br><b>Any-:</b> Negativas/Perguntas. <br><b>No-:</b> Sentido negativo com verbo positivo.",
        exercises: [
        { question: "I didn't see ___ (ninguém) there.", answer: "anybody", tip: "Negative sentences use any-." },
        { question: "___ (Alguém) is knocking on the door.", answer: "Someone", tip: "Affirmative for people." }
        ],
        llmPrompt: "Roleplay: A Mystery. You are a witness to a robbery. Tell me if you saw 'anybody' and if 'anything' was taken. Use 'nowhere' to describe the suspect's escape."
    },
    {
        id: 20,
        title: "20. Time Clauses: Before, After, As soon as, Until",
        explanation: "Conectores que estabelecem a ordem dos eventos. <br><b>Rule:</b> Em frases de futuro, a 'time clause' permanece no Present Simple.",
        exercises: [
        { question: "I will call you as soon as I ___ (arrive).", answer: "arrive", tip: "Time clauses for future use Present Simple." },
        { question: "Don't leave ___ (até) I finish.", answer: "until", tip: "Indicates a limit of time." }
        ],
        llmPrompt: "Task: Instructions for a substitute worker. Tell me what to do 'before' you leave, 'after' I arrive, and what to wait for 'until' 5 PM."
    },
    {
        id: 21,
        title: "21. Too and Enough + Adjectives/Nouns",
        explanation: "A2 exige precisão na quantidade e grau. <br><b>Too + Adjective:</b> Mais do que o necessário. <br><b>Adjective + Enough:</b> Suficiente. <br><b>Enough + Noun:</b> Quantidade suficiente.",
        exercises: [
        { question: "This coffee is ___ hot (excessivamente).", answer: "too", tip: "Before adjectives for excess." },
        { question: "I don't have ___ money (suficiente).", answer: "enough", tip: "Before nouns for sufficiency." }
        ],
        llmPrompt: "Context: Shopping for clothes. You are a critic. Tell me if the clothes are 'too small', 'not stylish enough', or if I have 'enough money' to buy them."
    },
    {
        id: 22,
        title: "22. Question Tags (Confirmation)",
        explanation: "Usadas no final das frases para confirmar algo que achamos ser verdade. <br><b>Regra:</b> Se a frase é positiva, a tag é negativa. Se a frase é negativa, a tag é positiva. <br><b>Ex:</b> 'You are American, aren't you?' / 'She doesn't like tea, does she?'.",
        exercises: [
        { question: "He is your brother, ___ (não é)?", answer: "isn't he", tip: "Use the opposite of the verb 'is'." },
        { question: "You can swim, ___ (não pode)?", answer: "can't you", tip: "Opposite of the modal 'can'." }
        ],
        llmPrompt: "Roleplay: You are a detective interviewing a witness. You think you know the facts. Start every sentence with a statement and end with a question tag (e.g., 'You were at the bar, weren't you?')."
    },
    {
        id: 23,
        title: "23. Adverbs of Degree: Really, Quite, Extremely",
        explanation: "Servem para modificar adjetivos ou outros advérbios, dando intensidade. <br><b>Scale:</b> Not very < Quite < Really/Very < Extremely.",
        exercises: [
        { question: "The test was ___ (extremamente) difficult.", answer: "extremely", tip: "Use for maximum intensity." },
        { question: "It's ___ (bastante/razoavelmente) cold today.", answer: "quite", tip: "Use for a moderate degree." }
        ],
        llmPrompt: "Task: Review 3 restaurants you visited. Use different adverbs of degree to describe the food, the service, and the price (e.g., 'The fish was really good, but the service was quite slow')."
    },
    {
        id: 24,
        title: "24. Prepositions of Movement & Direction",
        explanation: "Diferente das preposições de lugar (estáticas), estas indicam **fluxo**. <br><b>Common:</b> Into (entrar), Out of (sair), Over (por cima), Under (por baixo), Through (através), Towards (em direção a).",
        exercises: [
        { question: "The cat jumped ___ (por cima de) the fence.", answer: "over", tip: "Movement from one side to the other above something." },
        { question: "She walked ___ (para dentro de) the room.", answer: "into", tip: "Movement to the inside of a space." }
        ],
        llmPrompt: "Roleplay: Action Movie Director. Give me instructions for a chase scene. Use 'through the window', 'over the car', and 'into the building'. I will describe my movements."
    },
    {
        id: 25,
        title: "25. Verbs of Perception & State (Stative Verbs)",
        explanation: "Verbos que descrevem sentidos e estados mentais que **geralmente não usamos no -ING**. <br><b>Sensory:</b> See, Hear, Smell, Taste, Feel. <br><b>Mental:</b> Believe, Know, Understand, Remember.",
        exercises: [
        { question: "I ___ (entendo) the lesson now.", answer: "understand", tip: "Even if it's 'now', we don't say 'am understanding'." },
        { question: "This cake ___ (tem gosto de) chocolate.", answer: "tastes", tip: "Verbs of perception stay in Simple Present for states." }
        ],
        llmPrompt: "Context: Wine or Food Tasting. Describe a meal to me using sensory verbs. Tell me how it 'smells', 'tastes', and 'feels'. Correct me if I use 'is smelling' instead of 'smells'."
    },
    {
        id: 26,
        title: "26. Reflexive Pronouns: Myself, Yourself, Ourselves",
        explanation: "Usamos quando o sujeito e o objeto da frase são a mesma pessoa. <br><b>Ex:</b> 'I cut <b>myself</b>' (eu me cortei). No A2, focamos em ações solitárias e enfáticas.",
        exercises: [
        { question: "She taught ___ (a si mesma) how to play guitar.", answer: "herself", tip: "Reflexive for 'she'." },
        { question: "We did the project by ___ (nós mesmos).", answer: "ourselves", tip: "Reflexive for 'we'." }
        ],
        llmPrompt: "Context: Self-taught skills. Tell me about 3 things you learned to do by yourself. Ask me if I have ever taught myself something difficult."
    },
    {
        id: 27,
        title: "27. Adjectives ending in -ED vs -ING",
        explanation: "Um erro clássico do A2. <br><b>-ED:</b> Como você se sente (I am bored). <br><b>-ING:</b> A característica da coisa (The movie is boring).",
        exercises: [
        { question: "I am very ___ (interessado) in history.", answer: "interested", tip: "Feelings use -ed." },
        { question: "That roller coaster was ___ (assustadora).", answer: "frightening", tip: "Descriptions use -ing." }
        ],
        llmPrompt: "Task: Movie Review. Describe a movie you watched recently. Tell me if you were 'excited' or 'disappointed' and if the plot was 'interesting' or 'tiring'."
    },
    {
        id: 28,
        title: "28. Passive Voice: Past Simple Focus",
        explanation: "No A2, o aluno deve saber relatar fatos históricos. <br><b>Structure:</b> Object + Was/Were + Past Participle. <br><b>Ex:</b> 'The telephone was invented by Bell'.",
        exercises: [
        { question: "The house ___ (construída) in 1950.", answer: "was built", tip: "Past passive for 'house'." },
        { question: "The thief ___ (foi pego) by the police.", answer: "was caught", tip: "Past participle of catch is 'caught'." }
        ],
        llmPrompt: "Roleplay: History Teacher. Tell me about 3 famous inventions or historical events using the Passive Voice. I will guess what you are describing."
    },
    {
        id: 29,
        title: "29. Quantifiers: A few, A little, Plenty of",
        explanation: "Precisão na contagem. <br><b>A few:</b> Contáveis (A few friends). <br><b>A little:</b> Incontáveis (A little sugar). <br><b>Plenty of:</b> Mais que o suficiente.",
        exercises: [
        { question: "I have ___ (poucos) friends in London.", answer: "a few", tip: "Use for countable nouns." },
        { question: "Can I have ___ (um pouco) water?", answer: "a little", tip: "Use for uncountable nouns." }
        ],
        llmPrompt: "Context: Cooking Show. Tell me the ingredients for your favorite recipe using 'a few', 'a little', and 'plenty of'. I will check if you used them correctly with counts/uncounts."
    },
    {
        id: 30,
        title: "30. Make vs Do: Collocations",
        explanation: "No A2, paramos de traduzir e começamos a aprender combinações. <br><b>DO:</b> Atividades, tarefas, trabalho. <br><b>MAKE:</b> Criação, construção, som, comida.",
        exercises: [
        { question: "I need to ___ (fazer) my homework.", answer: "do", tip: "Use 'do' for academic tasks." },
        { question: "She ___ (fez) a delicious cake.", answer: "made", tip: "Use 'make' for cooking/creation." }
        ],
        llmPrompt: "Task: Daily Routine. Describe your day. Tell me 3 things you 'do' (tasks) and 3 things you 'make' (decisions, coffee, noise)."
    },
    {
        id: 31,
        title: "31. Future Possibility: Probably, Definitely",
        explanation: "Advérbios que modificam o 'Will'. <br><b>Position:</b> Após o 'Will' na afirmativa (I will probably go). Antes do 'Won't' na negativa (I probably won't go).",
        exercises: [
        { question: "I will ___ (definitivamente) be there.", answer: "definitely", tip: "Strong certainty." },
        { question: "He ___ (provavelmente) won't come.", answer: "probably", tip: "Probability before a negative auxiliary." }
        ],
        llmPrompt: "Roleplay: Fortune Teller. Tell me my future for next year using 'definitely', 'probably', and 'maybe'. Be creative!"
    },
    {
        id: 32,
        title: "32. Review: The Waystage Graduation",
        explanation: "Consolidação final do nível A2. Mistura de tempos narrativos (Past Simple) e planos futuros (Going to).",
        exercises: [
        { question: "Last year I ___ (be) a student, now I am a manager.", answer: "was", tip: "Past state." },
        { question: "Next year, I ___ (travel) to Japan.", answer: "am going to travel", tip: "Future plan." }
        ],
        llmPrompt: "Final Interview: Summarize your journey so far. Tell me what you 'used to' do, what you 'have done' recently, and what you 'will' do when you finish this course."
    }
];
