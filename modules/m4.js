/**
 * EDTECH ARCHITECTURE: MODULE M4 (LEVEL B2 - VANTAGE)
 * CORRECTED VERSION - 30 Lessons
 * Fixes: Replaced duplicate Wish/If Only with Academic Discourse Markers (L07)
 *        Replaced duplicate Future-in-Past with Nominalisation (L28)
 *        Replaced duplicate Gerunds/Infinitives with Advanced Patterns (L14)
 */

const m4Data = [
    {
        id: 1,
        title: "01. Narrative Tenses: The Master Mix",
        explanation: "Combinação de Past Simple, Continuous e **Past Perfect**. <br><b>Ex:</b> 'When I arrived (PS), he had already left (PP)'.",
        exercises: [
        { question: "By the time the meeting started, I ___ (finish) the report.", answer: "had finished", tip: "Action before another past action." }
        ],
        llmPrompt: "Roleplay: Detective. Explain a crime timeline using Past Simple, Continuous, and Perfect."
    },
    {
        id: 2,
        title: "02. Future Perfect & Continuous",
        explanation: "Projeções futuras. <br><b>Future Perfect:</b> Ação concluída (will have finished). <br><b>Future Continuous:</b> Ação em curso (will be working).",
        exercises: [
        { question: "By 2030, I ___ (live) here for ten years.", answer: "will have lived", tip: "Duration up to a point in the future." }
        ],
        llmPrompt: "Context: Career Coaching. Describe your professional milestones for the next 5 years."
    },
    {
        id: 3,
        title: "03. Mixed Conditionals (The Holy Grail)",
        explanation: "Passado hipotético com resultado no presente. <br><b>Ex:</b> 'If I had studied (past), I would be a doctor now (present)'.",
        exercises: [
        { question: "If I ___ (win) the lottery yesterday, I would be rich now.", answer: "had won", tip: "Past condition, present result." }
        ],
        llmPrompt: "Task: Regrets. Talk about 3 life decisions and how they would affect your present if they were different."
    },
    {
        id: 4,
        title: "04. Modals of Deduction: Past",
        explanation: "Especular sobre o passado. <br><b>Must have:</b> Certeza. <br><b>Might/Could have:</b> Possibilidade. <br><b>Can't have:</b> Impossibilidade.",
        exercises: [
        { question: "She looks sad. She ___ (must/have) lost the game.", answer: "must have", tip: "Strong logical deduction." }
        ],
        llmPrompt: "Roleplay: Forensic Investigator. Analyze a messy room and speculate what 'must have happened'."
    },
    {
        id: 5,
        title: "05. Advanced Passive Voice",
        explanation: "Foco no processo. Verbos com dois objetos. <br><b>Ex:</b> 'I was given a warning'.",
        exercises: [
        { question: "Passive of 'They offered him a job': He ___ ___ a job.", answer: "was offered", tip: "Focus on the recipient." }
        ],
        llmPrompt: "Context: Corporate News. Report 5 company changes using the Passive Voice."
    },
    {
        id: 6,
        title: "06. Reported Speech: Advanced Verbs",
        explanation: "Vá além do 'said'. Use: **Refused, Denied, Suggested, Warned.**",
        exercises: [
        { question: "He ___ (sugeriu) going to the cinema.", answer: "suggested", tip: "Suggest + -ing." }
        ],
        llmPrompt: "Task: News Reporter. Summarize a celebrity argument using at least 5 reporting verbs."
    },
    {
        id: 7,
        title: "07. Academic Discourse Markers",
        explanation: "Marcadores formais essenciais para o B2 escrito e oral. <br><b>Contrast:</b> On the contrary, In contrast, Whereas. <br><b>Addition:</b> Furthermore, In addition, What is more. <br><b>Concession:</b> Admittedly, Even so.",
        exercises: [
        { question: "He is rich. ___ (Em contraste), his brother is poor.", answer: "In contrast", tip: "Compare two opposing ideas." },
        { question: "___ (Além disso), the plan saves time and money.", answer: "Furthermore", tip: "Adds a stronger, formal point." }
        ],
        llmPrompt: "Task: Academic Essay. Write a short paragraph arguing for or against social media. Use 'Furthermore', 'In contrast', 'Admittedly', and 'On the contrary' to structure your argument."
    },
    {
        id: 8,
        title: "08. Cleft Sentences for Emphasis",
        explanation: "Focar em informações específicas. <br><b>Ex:</b> 'What I need is...', 'It was John who...'.",
        exercises: [
        { question: "I need a coffee. -> What I need ___ a coffee.", answer: "is", tip: "What-cleft structure." }
        ],
        llmPrompt: "Context: Debate. Use cleft sentences to clarify: 'What you don't understand is...'"
    },
    {
        id: 9,
        title: "09. Inversion after Negative Adverbs",
        explanation: "Ênfase formal. <br><b>Ex:</b> 'Never have I seen...' em vez de 'I have never seen'.",
        exercises: [
        { question: "Rarely ___ (do) he go out.", answer: "does", tip: "Adverb + Aux + Subject." }
        ],
        llmPrompt: "Roleplay: Dramatic Critic. Describe a movie using 'Never', 'Rarely', and 'Seldom' at the start."
    },
    {
        id: 10,
        title: "10. Conditionals: Alternatives to 'IF'",
        explanation: "Use **Provided that, As long as, Unless, Supposing.**",
        exercises: [
        { question: "I'll go ___ (a menos que) it rains.", answer: "unless", tip: "Negative condition." }
        ],
        llmPrompt: "Context: Contract Negotiation. Set 5 conditions for a deal using 'Provided that' and 'Unless'."
    },
    {
        id: 11,
        title: "11. Passive Reporting Verbs",
        explanation: "Estruturas: 'It is said that...' ou 'He is thought to be...'.",
        exercises: [
        { question: "People say he is rich. -> He is said ___ (be) rich.", answer: "to be", tip: "Subject + Passive + To-Infinitive." }
        ],
        llmPrompt: "Task: News Anchor. Report 3 rumors using 'It is believed that'."
    },
    {
        id: 12,
        title: "12. Advanced Relative Clauses",
        explanation: "Uso de **Whom, Whose, whereby, in which.**",
        exercises: [
        { question: "The man to ___ (quem) I spoke was kind.", answer: "whom", tip: "Use after preposition." }
        ],
        llmPrompt: "Task: Presentation. Describe a complex system using 'whereby' and 'in which'."
    },
    {
        id: 13,
        title: "13. Three-part Phrasal Verbs",
        explanation: "Look forward to, Cut down on, Get away with.",
        exercises: [
        { question: "I need to cut ___ ___ sugar.", answer: "down on", tip: "Verb + Adv + Prep." }
        ],
        llmPrompt: "Context: Health. Tell me 3 things you need to 'cut down on'."
    },
    {
        id: 14,
        title: "14. Gerunds & Infinitives: Advanced Patterns",
        explanation: "Aprofundamento além da simples lista de verbos. <br><b>Passive Infinitive:</b> He wants <b>to be promoted</b>. <br><b>Perfect Infinitive:</b> She seems <b>to have known</b>. <br><b>Gerund as subject:</b> <b>Swimming</b> is healthy.",
        exercises: [
        { question: "She seems ___ (have/know) the answer all along.", answer: "to have known", tip: "Perfect Infinitive for past action." },
        { question: "He wants ___ (promote) by the end of the year.", answer: "to be promoted", tip: "Passive Infinitive." }
        ],
        llmPrompt: "Context: Career ambitions. Tell me 3 things you 'want to be given', 'hope to have achieved', and 'enjoy doing' in your professional life. Use passive and perfect infinitives."
    },
    {
        id: 15,
        title: "15. Modal Verbs: Bound to, Likely to",
        explanation: "Dedução sobre o futuro. 'Bound to' = certeza.",
        exercises: [
        { question: "Prices are likely ___ (rise).", answer: "to rise", tip: "Probability." }
        ],
        llmPrompt: "Context: Economy. Predict 3 things 'bound to happen' in your country."
    },
    {
        id: 16,
        title: "16. Participle Clauses (-ing / -ed)",
        explanation: "Reduzir frases para elegância. <br><b>Ex:</b> 'Knowing the truth, she left'.",
        exercises: [
        { question: "___ (Know) the truth, she left him.", answer: "Knowing", tip: "Present participle." }
        ],
        llmPrompt: "Task: Storytelling. Rewrite a story using at least 3 participle clauses."
    },
    {
        id: 17,
        title: "17. Concession: Despite vs Although",
        explanation: "Contrastes. **Despite** (+noun) vs **Although** (+clause).",
        exercises: [
        { question: "___ the rain, we went out.", answer: "Despite", tip: "Use before a noun." }
        ],
        llmPrompt: "Context: Success. Talk about success 'despite' problems. Use 'Even though'."
    },
    {
        id: 18,
        title: "18. Subjunctive Mood (Formal)",
        explanation: "Exigências. <br><b>Ex:</b> 'I suggest that he <b>be</b> careful'.",
        exercises: [
        { question: "It is vital that she ___ (arrive) on time.", answer: "arrive", tip: "Base form." }
        ],
        llmPrompt: "Roleplay: CEO. Use 'I insist that...' and 'It is essential that...'."
    },
    {
        id: 19,
        title: "19. Nominal Clauses (What/Whether)",
        explanation: "Frases que agem como substantivos. <br><b>Ex:</b> 'What you said was true'.",
        exercises: [
        { question: "___ she did was wrong.", answer: "What", tip: "Relative-what." }
        ],
        llmPrompt: "Context: Philosophy. Start sentences with 'What most people think is...'"
    },
    {
        id: 20,
        title: "20. Stative Verbs in Continuous",
        explanation: "Quando verbos de estado (think, have, see) ganham -ing e mudam de sentido.",
        exercises: [
        { question: "I ___ (think) of buying a car.", answer: "am thinking", tip: "Action/Process, not opinion." }
        ],
        llmPrompt: "Explain the difference: 'I have a car' vs 'I am having a party'. Give 3 examples."
    },
    {
        id: 21,
        title: "21. Advanced Quantifiers",
        explanation: "Uso preciso de **Each, Every, Either, Neither, None.**",
        exercises: [
        { question: "___ (Nenhum) of the two plans worked.", answer: "Neither", tip: "One of two options." }
        ],
        llmPrompt: "Context: Dilemmas. Present two choices and use Either/Neither to discuss them."
    },
    {
        id: 22,
        title: "22. Dependent Prepositions: Verbs",
        explanation: "Verbos que exigem preposições fixas. <br><b>Ex:</b> Rely on, Insist on, Apologize for.",
        exercises: [
        { question: "He apologized ___ (por) being late.", answer: "for", tip: "Apologize + for." }
        ],
        llmPrompt: "Context: Office Drama. Describe a situation where you had to 'rely on' someone or 'apologize for' an error."
    },
    {
        id: 23,
        title: "23. Dependent Prepositions: Adjectives",
        explanation: "Adjetivos + preposições. <br><b>Ex:</b> Interested in, Aware of, Satisfied with.",
        exercises: [
        { question: "Are you aware ___ (de) the risks?", answer: "of", tip: "Aware + of." }
        ],
        llmPrompt: "Task: Self-assessment. Tell me 3 things you are 'proud of' and 2 you are 'interested in'."
    },
    {
        id: 24,
        title: "24. Reported Speech: Subjective Reporting",
        explanation: "Reportar intenções: **Claim, Boast, Grumble, Suggest.**",
        exercises: [
        { question: "She ___ (se gabou) about winning.", answer: "boasted", tip: "Reporting with pride." }
        ],
        llmPrompt: "Roleplay: Journalist. Report what a politician said, interpreting their tone (e.g., 'He claimed that...')."
    },
    {
        id: 25,
        title: "25. Adverbs: Focus & Degree",
        explanation: "Uso de **Utterly, Entirely, Virtually, Barely.**",
        exercises: [
        { question: "That is ___ (totalmente) ridiculous.", answer: "utterly", tip: "Strong emphasis." }
        ],
        llmPrompt: "Context: Extreme opinions. Describe a travel experience using 'utterly amazing' or 'virtually impossible'."
    },
    {
        id: 26,
        title: "26. Ellipsis & Substitution",
        explanation: "Evitar repetição. <br><b>Ex:</b> 'I hope so', 'If not', 'I did too'.",
        exercises: [
        { question: "Do you like it? I think ___.", answer: "so", tip: "Substitution for the whole clause." }
        ],
        llmPrompt: "Task: Quick dialogue. Answer my questions using short substitutions like 'I suppose so' or 'Neither do I'."
    },
    {
        id: 27,
        title: "27. Speculation about the Present",
        explanation: "May/Might/Could + Continuous. <br><b>Ex:</b> 'He might be sleeping'.",
        exercises: [
        { question: "He's not answering. He ___ (might/work).", answer: "might be working", tip: "Action in progress now." }
        ],
        llmPrompt: "Context: Mystery. Speculate what 5 people in your building are doing right now."
    },
    {
        id: 28,
        title: "28. Nominalisation: Formal Writing",
        explanation: "Transformar verbos/adjetivos em substantivos para um estilo formal e acadêmico. <br><b>Ex:</b> decide → <b>decision</b>, improve → <b>improvement</b>, fail → <b>failure</b>. <br>Faz a escrita soar mais profissional e menos repetitiva.",
        exercises: [
        { question: "We need to decide. → We need to make a ___.", answer: "decision", tip: "decide → decision." },
        { question: "The company improved. → The company showed great ___.", answer: "improvement", tip: "improve → improvement." }
        ],
        llmPrompt: "Task: Rewrite this informal email as a formal report. Change: 'We decided to improve the process because we failed last year' using nominalisations (decision, improvement, failure). I will give you feedback."
    },
    {
        id: 29,
        title: "29. Complex Phrasal Verbs (Idiomatic)",
        explanation: "Phrasal verbs sem sentido literal: **Bring up, Put off, Look into.**",
        exercises: [
        { question: "Don't ___ (adiar) the meeting.", answer: "put off", tip: "To delay." }
        ],
        llmPrompt: "Context: Management. Explain how you 'look into' problems and why you never 'put off' tasks."
    },
    {
        id: 30,
        title: "30. B2 Mastery: The Final Review",
        explanation: "Consolidação de fluidez, tom e precisão.",
        exercises: [
        { question: "By tomorrow, I will ___ finished B2.", answer: "have", tip: "Future Perfect check." }
        ],
        llmPrompt: "Final Challenge: Academic Debate. Argue for 2 minutes on a topic using Inversion, Cleft Sentences, and Mixed Conditionals."
    }
];
