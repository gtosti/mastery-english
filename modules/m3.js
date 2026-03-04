/**
 * EDTECH ARCHITECTURE: MODULE M3 (LEVEL B1 - THRESHOLD)
 * CORRECTED VERSION - 33 Lessons
 * Fixes: Replaced duplicate Wish/If Only with Verb Patterns (L14)
 *        Replaced duplicate Future-in-Past with Linking Words (L19)
 * Additions: Prepositional Phrases (L31), Permission/Prohibition (L32), PP Simple vs Continuous (L33)
 */

const m3Data = [
    {
        id: 1,
        title: "01. Present Perfect Continuous",
        explanation: "Ações que começaram no passado e continuam. Foco na duração. <br><b>Structure:</b> Have/Has + been + Verb-ING.",
        exercises: [
        { question: "I ___ (work) here for 3 hours.", answer: "have been working", tip: "Duration focus." }
        ],
        llmPrompt: "Tell me about a project you've been working on recently. Focus on the duration."
    },
    {
        id: 2,
        title: "02. Past Perfect Simple",
        explanation: "O passado do passado. Uma ação que ocorreu antes de outra. <br><b>Structure:</b> Had + Participle.",
        exercises: [
        { question: "The bus ___ (leave) when I arrived.", answer: "had left", tip: "Action happened first." }
        ],
        llmPrompt: "Tell a story about arriving late. What had already happened?"
    },
    {
        id: 3,
        title: "03. Passive Voice (All Tenses)",
        explanation: "Foco no objeto da ação, não em quem a faz.",
        exercises: [
        { question: "The car ___ (repair) yesterday.", answer: "was repaired", tip: "Past Passive." }
        ],
        llmPrompt: "Explain how coffee is produced using the passive voice."
    },
    {
        id: 4,
        title: "04. Second Conditional",
        explanation: "Hipóteses irreais ou improváveis no presente. <br><b>Structure:</b> If + Past, Would + Verb.",
        exercises: [
        { question: "If I ___ (be) rich, I'd travel.", answer: "were", tip: "Use 'were' for all subjects." }
        ],
        llmPrompt: "If you won the lottery, what would you do first?"
    },
    {
        id: 5,
        title: "05. Modals of Deduction (Present)",
        explanation: "Especular sobre fatos (Must, Might, Can't).",
        exercises: [
        { question: "He has a Ferrari. He ___ be rich.", answer: "must", tip: "High certainty." }
        ],
        llmPrompt: "Speculate why your neighbor is shouting."
    },
    {
        id: 6,
        title: "06. Modals of Deduction (Past)",
        explanation: "Especular sobre o passado (Should have / Must have).",
        exercises: [
        { question: "I failed. I ___ (study) more.", answer: "should have studied", tip: "Regret." }
        ],
        llmPrompt: "A crime happened last night. Speculate about the thief."
    },
    {
        id: 7,
        title: "07. Reported Questions & Commands",
        explanation: "Relatar perguntas e ordens de terceiros.",
        exercises: [
        { question: "He asked where I ___ (live).", answer: "lived", tip: "Backshift the tense." }
        ],
        llmPrompt: "Report 3 questions your boss asked you today."
    },
    {
        id: 8,
        title: "08. Relative Clauses (Extra Info)",
        explanation: "Defining vs Non-defining (uso de vírgulas).",
        exercises: [
        { question: "My car, ___ is blue, is old.", answer: "which", tip: "Extra info." }
        ],
        llmPrompt: "Describe your city using relative clauses."
    },
    {
        id: 9,
        title: "09. Less than / (Not) as...as",
        explanation: "Comparações de inferioridade e igualdade.",
        exercises: [
        { question: "It's not ___ (good) as the old one.", answer: "as good", tip: "Equality comparison." }
        ],
        llmPrompt: "Compare your current job with your dream job."
    },
    {
        id: 10,
        title: "10. Used to / Would / Get used to",
        explanation: "Hábitos passados vs Processo de adaptação.",
        exercises: [
        { question: "I'm ___ (se acostumando) to the cold.", answer: "getting used", tip: "Process." }
        ],
        llmPrompt: "What was hard before but you are used to now?"
    },
    {
        id: 11,
        title: "11. Complex Question Tags",
        explanation: "Tags com tempos perfeitos e modais.",
        exercises: [
        { question: "You've been there, ___?", answer: "haven't you", tip: "Match auxiliary." }
        ],
        llmPrompt: "Confirm 5 facts about me using tags."
    },
    {
        id: 12,
        title: "12. Separable Phrasal Verbs",
        explanation: "Verbos onde o objeto pode ir no meio.",
        exercises: [
        { question: "Turn ___ (it) off.", answer: "it", tip: "Pronoun in middle." }
        ],
        llmPrompt: "Give me 5 instructions to clean a room."
    },
    {
        id: 13,
        title: "13. Gerund & Infinitive (Meaning Change)",
        explanation: "Stop smoking (parar o hábito) vs Stop to smoke (parar para fumar).",
        exercises: [
        { question: "I forgot ___ (lock) the door.", answer: "to lock", tip: "Duty not done." }
        ],
        llmPrompt: "Talk about childhood memories vs duties today."
    },
    {
        id: 14,
        title: "14. Verb Patterns: Object + Infinitive",
        explanation: "Estrutura essencial para B1: verbo + objeto + infinitivo. <br><b>Ex:</b> 'I want <b>him to go</b>', 'She asked <b>me to stay</b>'. <br><b>Common verbs:</b> Want, Ask, Tell, Expect, Advise, Encourage, Allow.",
        exercises: [
        { question: "She asked me ___ (help) her.", answer: "to help", tip: "Ask + object + to-infinitive." },
        { question: "I want ___ (she) to be happy.", answer: "her", tip: "Object pronoun before to-infinitive." }
        ],
        llmPrompt: "Context: Giving instructions. Tell me 3 things your manager 'told you to do' and 3 things a friend 'asked you to bring' to a party. Use the pattern: verb + object + to-infinitive."
    },
    {
        id: 15,
        title: "15. Future Continuous & Perfect",
        explanation: "Ações em progresso ou concluídas no futuro.",
        exercises: [
        { question: "By 2030, I ___ (finish) college.", answer: "will have finished", tip: "Completed." }
        ],
        llmPrompt: "Where will you be in 5 years?"
    },
    {
        id: 16,
        title: "16. Causative: Have/Get something done",
        explanation: "Quando outra pessoa faz o serviço por você.",
        exercises: [
        { question: "I need to have my car ___ (fix).", answer: "fixed", tip: "Participle." }
        ],
        llmPrompt: "List 3 things you pay others to do."
    },
    {
        id: 17,
        title: "17. Connectors: Contrast & Purpose",
        explanation: "Although, Despite, So that, In order to.",
        exercises: [
        { question: "___ the rain, we went out.", answer: "Despite", tip: "Followed by noun." }
        ],
        llmPrompt: "Explain a difficult goal you achieved."
    },
    {
        id: 18,
        title: "18. Reported: Suggesting & Offering",
        explanation: "Relatar 'He suggested going...'.",
        exercises: [
        { question: "He suggested ___ (go) out.", answer: "going", tip: "Suggest + ING." }
        ],
        llmPrompt: "Report a meeting's suggestions."
    },
    {
        id: 19,
        title: "19. Linking Words: However, Moreover, Therefore",
        explanation: "Conectores essenciais para escrita e fala estruturada no B1. <br><b>Contrast:</b> However, Nevertheless. <br><b>Addition:</b> Moreover, Furthermore. <br><b>Result:</b> Therefore, As a result.",
        exercises: [
        { question: "___ (Portanto), I decided to leave.", answer: "Therefore", tip: "Use to introduce a result or conclusion." },
        { question: "I was tired. ___ (No entanto), I finished the task.", answer: "However", tip: "Use to introduce a contrast." }
        ],
        llmPrompt: "Task: Write a short persuasive argument (5 sentences) about why English is important. Use 'Moreover', 'However', and 'Therefore' to connect your ideas. I will give you feedback."
    },
    {
        id: 20,
        title: "20. Adjectives + Infinitives",
        explanation: "It's difficult to learn / Happy to help.",
        exercises: [
        { question: "It's easy ___ (learn).", answer: "to learn", tip: "Adjective structure." }
        ],
        llmPrompt: "Give travel tips using 'It's worth it to...'"
    },
    {
        id: 21,
        title: "21. Both, Either, Neither",
        explanation: "Comparando duas opções específicas.",
        exercises: [
        { question: "___ (Nenhum) of them is here.", answer: "Neither", tip: "Negative choice." }
        ],
        llmPrompt: "Compare two holiday destinations."
    },
    {
        id: 22,
        title: "22. Adverbs of Certainty",
        explanation: "Definitely, Probably, Maybe.",
        exercises: [
        { question: "I'll ___ (provavelmente) stay.", answer: "probably", tip: "After will." }
        ],
        llmPrompt: "Predict 5 things about future technology."
    },
    {
        id: 23,
        title: "23. Discourse Markers",
        explanation: "Anyway, In fact, First of all.",
        exercises: [
        { question: "___, let's start.", answer: "First of all", tip: "Ordering." }
        ],
        llmPrompt: "Give a 1-minute speech using markers."
    },
    {
        id: 24,
        title: "24. Indirect Questions",
        explanation: "Estruturas educadas: Do you know where...?",
        exercises: [
        { question: "Do you know where it ___ (be)?", answer: "is", tip: "No inversion." }
        ],
        llmPrompt: "Ask me 5 polite questions about a hotel."
    },
    {
        id: 25,
        title: "25. Advanced Frequency",
        explanation: "Hardly ever, Seldom, Frequently.",
        exercises: [
        { question: "I ___ (raramente) eat meat.", answer: "hardly ever", tip: "Natural B1." }
        ],
        llmPrompt: "Describe your work routine in detail."
    },
    {
        id: 26,
        title: "26. Third Conditional (Regrets)",
        explanation: "If + Past Perfect, would have + Participle.",
        exercises: [
        { question: "If I ___ (study), I'd have passed.", answer: "had studied", tip: "Past regret." }
        ],
        llmPrompt: "What would have happened if you never learned English?"
    },
    {
        id: 27,
        title: "27. Could vs Was able to",
        explanation: "Capacidade geral vs Conquista específica.",
        exercises: [
        { question: "I ___ (consegui) escape.", answer: "was able to", tip: "Specific event." }
        ],
        llmPrompt: "Tell me about a hard problem you solved."
    },
    {
        id: 28,
        title: "28. Reflexive Pronouns",
        explanation: "Myself, Yourself, Each other.",
        exercises: [
        { question: "They love ___ (um ao outro).", answer: "each other", tip: "Mutual action." }
        ],
        llmPrompt: "Describe teamwork in your office."
    },
    {
        id: 29,
        title: "29. Verbs of Speculation",
        explanation: "Seem, Appear, Look like.",
        exercises: [
        { question: "It ___ (parece) broken.", answer: "seems", tip: "Impression." }
        ],
        llmPrompt: "Look at an abstract painting and describe it."
    },
    {
        id: 30,
        title: "30. So vs Such (Emphasis)",
        explanation: "Intensificadores: So fast / Such a fast car.",
        exercises: [
        { question: "It was ___ a long day!", answer: "such", tip: "Such + adj + noun." }
        ],
        llmPrompt: "Compliment 3 things using so/such."
    },
    {
        id: 31,
        title: "xx. Prepositional Phrases: In spite of, Due to, As a result of",
        explanation: "Frases preposicionais que conectam ideias de forma sofisticada. <br><b>In spite of / Despite:</b> Contraste (+ noun/gerund). <br><b>Due to / Because of:</b> Causa (+ noun). <br><b>As a result of:</b> Consequência.",
        exercises: [
        { question: "___ ___ the bad weather, the event was a success.", answer: "In spite of", tip: "Contrast + noun phrase." },
        { question: "___ ___ his hard work, he got promoted.", answer: "As a result of", tip: "Consequence + noun phrase." }
        ],
        llmPrompt: "Context: Writing a report on a failed project. Explain what happened using 'Due to', 'As a result of', and 'In spite of'. Make it sound professional."
    },
    {
        id: 32,
        title: "xx. Permission & Prohibition: Allowed to, Supposed to",
        explanation: "Formas mais naturais de expressar regras no B1. <br><b>Be allowed to:</b> Ter permissão. <br><b>Not allowed to:</b> Proibição. <br><b>Be supposed to:</b> Expectativa/obrigação social.",
        exercises: [
        { question: "You ___ ___ ___ (não pode) park here.", answer: "are not allowed to", tip: "Prohibition structure." },
        { question: "You ___ ___ ___ (deveria) arrive on time.", answer: "are supposed to", tip: "Social expectation." }
        ],
        llmPrompt: "Roleplay: School Rules. You are a strict teacher on the first day. Tell me 5 things students 'are not allowed to do' and 3 things they 'are supposed to do' in your class."
    },
    {
        id: 33,
        title: "xx. Present Perfect: Simple vs Continuous (Contrast)",
        explanation: "O contraste mais importante do B1. <br><b>Simple (have done):</b> Resultado, quantidade, conclusão. <br><b>Continuous (have been doing):</b> Duração, processo em andamento.",
        exercises: [
        { question: "I ___ (read) 3 chapters so far. (resultado)", answer: "have read", tip: "Completed quantity → Simple." },
        { question: "I ___ (read) all afternoon. (duração)", answer: "have been reading", tip: "Duration/process → Continuous." }
        ],
        llmPrompt: "Context: Progress report with your boss. Tell me what you 'have done' today (results) and what you 'have been doing' this week (ongoing tasks). I'll ask follow-up questions."
    }
];
