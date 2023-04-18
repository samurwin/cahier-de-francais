// Types
export interface rule {
  definition: string;
  examples?: string[];
}

export interface tipCard {
  heading: string;
  text: string[];
}

export interface subSection {
  heading: string;
  text: string[];
  examples?: string[];
  table?: string;
  tipCards?: tipCard[]
}

export interface typeOfWord {
  heading: string,
  definition: {
    text: string;
    examples?: string[];
  };
  typesOf?: subSection[];
  rules?: rule[];
}

export interface sentence {
  heading: string;
  definition: string;
  parts: subSection[];
}

export interface page {
  pageTitle: string;
  path: string;
  content?: typeOfWord[];
  sentence?: sentence;
}

export interface section {
  title: string;
  path: string;
  img: string;
  description: string[];
  pages: page[];
}

export interface course {
  title: string;
  sections: section[];
}

// 
// Website Content
// 

// Vocabulary Pages

const nounsAndArticles: page = {
  pageTitle: "Nouns and Articles",
  path: 'nouns-and-articles',
  content: [
     {
      heading: "Nouns",
      definition: {
        text: "A noun is a word which names something, including people, places, or things.",
      },
      typesOf: [
        {
          heading: "Proper Noun",
          text: ["A proper noun is a specific name of a person, place, or thing."],
          examples: [
            "Renee - Person",
            "Paris - Place",
            "Monalisa - Thing"
          ],
        },
        {
          heading: "Common Noun",
          text: ["A common noun is the generic name of an item in a class or group."],
          examples: [
            "Un chien - A dog",
            "Un appartement - An apartment"
          ],
        }
      ]
    },
    {
      heading: "Articles",
      definition: {
        text: "An article is a word that comes before a noun to show if it's specific or general."
      },
      typesOf: [
        {
          heading: "Indefinite Articles",
          text: ["Indefinite articles identify a single, non-specific, person or thing."],
          examples: [
            "Un, Une, Des"
          ]
        },
        {
          heading: "Definite Articles",
          text: ["Definite articles are used to refer to identified or specified people or things."],
          examples: [
            "Le, L’, La, Les"
          ]
        },
        {
          heading: "Partitive Articles",
          text: ["Partitive articles are used to express quantities that cannot be counted."],
          examples: [
            "Du, De La, Des"
          ]
        }
      ],
      rules: [
        {
          definition: "Nouns have a gender and are either masculine or feminine.",
          examples: [
            "Un table - is a masculine noun",
            "Une chaise - is a feminine noun"
          ]
        },
        {
          definition: "Nouns almost always need an article in front of them.",
          examples: [
            "“la tasse” or “une tasse” but never “tasse”"
          ]
        },
        {
          definition: "Nouns and articles agree in gender. The initial spelling determines how the word will change when changed into feminine.",
          examples: [
            "Le directeur, la directrice - The diretor",
            "Un danseur, une danseuse - A dancer"
          ]
        },
        {
          definition: "Nouns and articles agree in number. There are certain changes made to both the noun and article depending on whether it is singular or plural.",
          examples: [
            "un chat, des chats – A cat, some cats",
            "Un bateau, des bateaux - A boat, some boats",
            "La orange, les oranges - The orange, the oranges"
          ]
        }
      ]
    }
  ]
}

const adjectives : page = {
  pageTitle: "Adjectives",
  path: 'adjectives',
  content: [
    {
      heading: "Adjectives",
      definition: {
        text: "Adjectives are words used to describe a noun."
      },
      typesOf: [
        {
          heading: "Possessive",
          text: ["Possessive adjectives are words which define whom the noun belongs to."],
          examples: [
            "Ma, Mon, Mes, Ton, Sa, Ses, Leur"
          ]
        },
        {
          heading: "Demonstrative",
          text: ["Demonstrative adjectives are words used to point at something or emphasize its importance."],
          examples: [
            "Ce, Cet, Cette, Ces"
          ]
        }
      ],
      rules: [
        {
          definition: "The placement of adjectives in a sentence varies. Some of the most common adjectives come before the noun they’re describing. But most French adjectives are placed AFTER the noun they’re describing.",
          examples: [
            "La petite fille - The small girl",
            "Un pantalon bleu - A blue pant"
          ]
        },
        {
          definition: "Adjectives agree with the noun in gender and they must agree with the noun that they are describing. Most adjectives have a masculine and feminine form which are different but some are invariable.",
          examples: [
            "Elle est amusante - She is funny",
            "Il est amusant - He is funny",
            "Une voiture rapide - A fast car",
            "Un train rapide - A fast train"
          ]
        },
        {
          definition: "Adjectives will reflect whether the noun that they are describing is singular or plural. Most end with a -s when plural. Adjectives ending with -s or -x are invariable.",
          examples: [
            "Le livre rouge - The red book",
            "Les tables rouges - The red tables"
          ]
        }
      ]
    }
  ]
}

const adverbs : page = {
  pageTitle: "Adverbs",
  path: 'adverbs',
  content: [
    {
      heading: "Adverbs",
      definition: {
        text: "Adverbs are a word used to describe a verb, an adjective, or another adverb. They change its meaning to be more precise. ",
        examples: [
          "Lentement - Slowly",
          "Rapidement - Quickly"
        ]
      },
      rules: [
        {
          definition: "Adverbs don’t agree in gender or number; they’re invariable.",
          examples: [
            "Elle mange lentement. - She is eating slowly",
            "Il mange lentement. - He is eating slowly"
          ]
        },
        {
          definition: "Placement varies based on what the adverb is modifying. When adverbs are modifying verbs, they usually come after the verb. When adverbs are modifying adjectives or adverbs they come after the verb and before the adjective/adverb.",
          examples: [
            "Je arrive bientot - I am arriving soon",
            "Il est vraiment beau. - He is really beautiful"
          ]
        }
      ]
    }
  ]
}

const verbs : page = {
  pageTitle: "Verbs",
  path: 'verbs',
  content: [
    {
      heading: "Verbs",
      definition: {
        text: "Verbs are words that represent actions."
      },
      typesOf: [
        {
          heading: "ER Verbs",
          text: ["These verbs end in “er”."],
          examples: [
            "Parler - To talk",
            "Aller - To go",
            "Penser - To think"
          ]
        },
        {
          heading: "IR Verbs",
          text: ["These verbs end in “ir”"],
          examples: [
            "Courir - To run",
            "Ouvrir - To open",
            "Venir - To come"
          ]
        },
        {
          heading: "RE Verbs",
          text: ["These verbs end in “re”"],
          examples: [
            "Prendre - To take",
            "Apprendre - To learn",
            "Comprendre - To understand"
          ]
        },
        {
          heading: "Reflexive",
          text: ["Reflexive verbs are used to describe things you do regularly or changes of state that have an effect on oneself."],
          examples: [
            "Se réveiller - To get up",
            "Se coucher - To sleep"
          ]
        }
      ],
      rules: [
        {
          definition: "French verbs are split between three groups, depending on the spelling of their infinitive form and their behavior. ER, IR, RE",
          examples: [
            "Regarder - To look",
            "Venir - To Come",
            "Faire - To do"
          ]  
        },
        {
          definition: "French conjugation defines how verbs change with every different “person” (1st person, 2nd person etc.), the attitude of the speaker toward the action of the verb, whether it is passive or active, and the tense."
        },
        {
          definition: "The way that verbs are conjugated is based on what verb group their infinitive form falls into. That being said there are many exceptions. These are irregular verbs. The most useful and common French verbs are also irregular. Verbs like être (“to be”), avoir (“to have”), or faire (“to do”) are highly irregular."
        }
      ]
    }
  ]
}

const conjunctions : page = {
  pageTitle: "Conjunctions",
  path: 'conjunctions',
  content: [
    {
      heading: "Conjunctions",
      definition: {
        text: "Conjunctions are words we use to connect things in a sentence. They can be used to list things, set conditions, express causality, objection, or for expressing purpose.",
        examples: [
          "Listing things: Des fruits et des légumes. - Some fruit and some vegetables",
          "Setting conditions: Je ne bois pas de café, sinon je ne peux pas dormir - I don't drink coffee otherwise I cannot sleep",
          "Expressing causality: Je mange car j’ai faim - I eat because I am hungry",
          "Objecting: Je mange du fromage mais pas de camembert. - I am eating some cheese but no camambert",
          "Expressing purpose: Je médite pour me relaxer - I meditate to relax"
        ]
      }
    }
  ]
}

const prepositions : page = {
  pageTitle: "Prepositions",
  path: 'prepositions',
  content: [
    {
      heading: "Prepositions",
      definition: {
        text: "Prepositions are words which tell us where or when something is in relation to something else. They describe direction, time, location, and spatial relationships, as well as other abstract types of relationships.",
        examples: [
          "Dans - In",
          "Devant - In front",
          "Avec - With"
        ]
      },
      rules: [
        {
          definition: "Prepositions can be followed by a noun.",
          examples: [
            "Le chat est dans le jardin. - The cat is in the garden",
            "Elle t’attendre devant la maison. - She is waiting for you in front of the house"
          ]
        },
        {
          definition: "Prepositions can be followed by an infinitive verb.",
          examples: [
            "Je me prépare à partir. - I am getting ready to leave"
          ]
        },
        {
          definition: "Prepositions can be followed by a stress pronoun.",
          examples: [
            "On va chez moi? - Are you coming to my place?",
            "Elle vient avec moi. - She is coming with me"
          ]
        }
      ]
    }
  ]
}

const pronouns : page = {
  pageTitle: "Pronouns",
  path: 'pronouns',
  content: [
    {
      heading: "Pronouns",
      definition: {
        text: "Pronouns are words that are used as a substitute for other nouns when it is already known what nouns you’re referring to."
      }
    },
    {
      heading: "Personal Pronouns",
      definition: {
        text: "Personal pronouns are pronouns that refer to specific individuals and groups."
      },
      typesOf: [
        {
          heading: "Personal Subject Pronouns",
          text: ["Personal subject pronouns replace the subject of a sentence."],
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>First person</p></td><td><p>Je&nbsp;</p></td></tr><tr><td><p>Second person</p></td><td><p>Tu&nbsp;</p></td></tr><tr><td><p>Third Person<br></p></td><td><p>Il / Elle / On&nbsp;</p></td></tr><tr><td><p>First person plural</p></td><td><p>Nous&nbsp;s</p></td></tr><tr><td><p>Second person plural</p></td><td><p>Vous&nbsp;</p></td></tr><tr><td><p>Third person plural</p></td><td><p>Ils&nbsp;/ Elles</p></td></tr></tbody></table></div>"
        },
        {
          heading: "Personal Stressed Pronouns",
          text: ["Personal stressed pronouns can be used on their own, after prepositions, for emphasis, or after à to show belonging. They can also be used in comparisons or with même to mean self"],
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p>moi</p></td></tr><tr><td><p>2nd person [s]</p></td><td><p>toi</p></td></tr><tr><td><p>3rd person [s]</p></td><td><p>lui; elle; soi</p></td></tr><tr><td><p>2nd person [p]</p></td><td><p>vous</p></td></tr><tr><td><p>3rd person [p]</p></td><td><p>eux; elles</p></td></tr></tbody></table></div>"
        },
        {
          heading: "Direct Object",
          text: ["COD (Complément d’Objet Direct) is used for verbs which aren’t followed by prepositions."],
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p>me</p></td></tr><tr><td><p>2nd person [s]</p></td><td><p>te</p></td></tr><tr><td><p>3rd person [s]</p></td><td><p>le; la</p></td></tr><tr><td><p>1st person [p]</p></td><td><p>nous</p></td></tr><tr><td><p>2nd person [p]</p></td><td><p>vous</p></td></tr><tr><td><p>3rd person [p]</p></td><td><p>les</p></td></tr></tbody></table></div>"
        },
        {
          heading: "Indirect Object",
          text: ["COI (Complément d’Objet Indirect) replaces nouns for verbs following by the preposition à"],
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p>me</p></td></tr><tr><td><p>2nd person [s]</p></td><td><p>te</p></td></tr><tr><td><p>3rd person [s]</p></td><td><p>lui</p></td></tr><tr><td><p>1st person [p]</p></td><td><p>nous</p></td></tr><tr><td><p>2nd person [p]</p></td><td><p>vous</p></td></tr><tr><td><p>3rd person [p]</p></td><td><p>leur</p></td></tr></tbody></table></div>"
        },
        {
          heading: "Personal Reflexive Pronouns",
          text: ["Used with reflexive verbs - verbs that imply an action on yourself are reflexive, and can usually be translated using an additional “oneself.”"],
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p><em>me</em></p></td></tr><tr><td><p>2nd person [s]</p></td><td><p><em>te</em></p></td></tr><tr><td><p>3rd person [s]</p></td><td><p><em>se</em></p></td></tr><tr><td><p>1st person [p]</p></td><td><p><em>nous</em></p></td></tr><tr><td><p>2nd person [p]</p></td><td><p><em>vous</em></p></td></tr><tr><td><p>3rd person [p]</p></td><td><p><em>se</em></p></td></tr></tbody></table></div>"
        }
      ]
    },
    {
      heading: "Impersonal Pronouns",
      definition: {
        text: "Impersonal pronouns are pronouns that do not refer to a person or thing or to any other part of the sentence. Instead refer to objects/ideas.",
      },
      typesOf: [
        {
          heading: "Impersonal Subject Pronouns",
          text: ["Impersonal subject pronouns replace the subject of a sentence."],
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>Ce</p></td></tr><tr><td><p>C'</p></td></tr><tr><td><p>Ca</p></td></tr><tr><td><p>Il</p></td></tr></tbody></table></div>"
        },
        {
          heading: "Adverbial Pronouns",
          text: ["Adverbial pronouns are pronouns in the sense that they replace nouns, and at the same time they are adverbs representing a place, a quantity, or the object of a preposition."],
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>Y</p><p><em>To[something]</em></p></td></tr><tr><td><p>En&nbsp;<em><br></em><em>About[something]</em></p></td></tr></tbody></table></div>"
        },
        {
          heading: "Relative Prounouns",
          text: ["Relative pronouns are a word that introduces a dependant clause and connects it to an independent clause."],
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>que&nbsp;<em><br>that</em></p></td></tr><tr><td><p>qui&nbsp;<em><br>who</em></p></td></tr><tr><td><p>où&nbsp;<em><br>where; when</em></p></td></tr><tr><td><p>dont&nbsp;<em><br>whose; that</em></p></td></tr><tr><td><p>lequel(s)<em>&nbsp;</em><em><br></em>laquelle(s)<em><br>which; that</em></p></td></tr></tbody></table></div>"
        },
        {
          heading: "Demonstrative Pronouns",
          text: ["Demonstrative pronouns replace something that was mentioned earlier."],
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>Masc. [s]</p></td><td><p>celui<br>The / This / That one</p></td></tr><tr><td><p>Masc. [p]</p></td><td><p>ceux<br>These / Those</p></td></tr><tr><td><p>Fem. [s]</p></td><td><p>celle<br>The / This / That one</p></td></tr><tr><td><p>Fem. [p]</p></td><td><p>celles<br>These / Those</p></td></tr></tbody></table></div>"
        },
        {
          heading: "Interrogative Pronouns",
          text: ["Interrogative pronouns are function words used to ask a question."],
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>qui&nbsp;<em><br>who</em></p></td></tr><tr><td><p>où&nbsp;<em><br>where</em></p></td></tr><tr><td><p>quand&nbsp;<em><br>when</em></p></td></tr><tr><td><p>quoi&nbsp;<em><br>what</em></p></td></tr><tr><td><p>lequel<br><br>lesquels<br><br>laquelle<br><br>lesquelles<br><em>which one</em></p></td></tr></tbody></table></div>"
        },
        {
          heading: "Indefinite Pronouns",
          text: ["Indefinite pronouns are not specifically identifying what they are referring to."],
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>tout&nbsp;<em><br>everything; anything; all</em></p></td></tr><tr><td><p>rien&nbsp;<em><br>nothing</em></p></td></tr><tr><td><p>personne&nbsp;<em><br>nobody</em></p></td></tr><tr><td><p>chacun&nbsp;<em><br>everyone; every man</em></p></td></tr><tr><td><p>tout le monde&nbsp;<em><br>everybody</em></p></td></tr><tr><td><p>quelqu'un&nbsp;<br>someone</p></td></tr><tr><td><p>quelque chose&nbsp;<br>something</p></td></tr><tr><td><p>certains&nbsp;<br>some [people]</p></td></tr></tbody></table></div>"
        }
      ]
    }
  ]
}

// Sentence Pages

const simpleDeclarative : page = {
  pageTitle: "Simple Declarative Sentences",
  path: "simple-declarative",
  sentence: {
    heading: "Simple Declarative Sentences",
    definition: "Declarative sentences are simple expressions which make a statement. We do not use these sentences to ask questions or make demands. These are the most common sentences in both French and English. Declarative sentences are the base from which many other complex sentences are built from. ",
    parts: [
      {
        heading: "SVO",
        text: ["The common word order in French sentences is SVO - Subject + Verb + Object. The subject (the one doing the action) comes at the beginning of the sentence and will not be dropped – even if it is a pronoun. Next comes the verb (the action). Verbs are conjugated and the ending of the verb depends on the subject (More on this in later sections). After the verb comes the direct object, completing the sentence."],
        examples: [
          "Il ècoute la musique. – He listens to music.",
          "Je mange une pomme. – I’m eating an apple.",
          "Tu apprends le français. – You are learning French."
        ]
      },
      {
        heading: "Adding Indirect Objects",
        text: [
          "Let’s expand on the sentences we can build using the SVO method by adding an indirect object. In these cases, our subject is doing something with the direct object for, to, or with the indirect object. Now our sentence structure is as follows:",
          "Subject + Verb + Direct Object + Indirect Object."
        ],
        examples: [
          "Jean apporte les lunnettes au parc. – Jean brings the sunglasses to the parc.",
          "Je donne mon livre à ma mère. – I’m giving my book to my mom.",
          "Vous envoyez des messages à vos collègues. – You are sending some messages to your colleagues."
        ],
        tipCards: [
          {
            heading: "Pay attention to gender and number agreement.",
            text: [
              "When constructing sentences, you will need to pay close attention to gender and number agreement. If you remember from the last section, nouns have a gender and there are several words that change based on the gender and number that the associated noun. For example:",
              "If you want to say “I love the dog” you would say “J’adore le chien” (not “la chien”).",
              "If you wanted to say “I love the dogs” you would say “J’adore les chiens” (not “le chiens”)."
            ]
          }
        ]
      }
    ]
  }
}

const imperative : page = {
  pageTitle: "Imperative Sentences",
  path: "imperative",
  sentence: {
    heading: "Imperative Sentences",
    definition: "When making a request or command, or giving advice or instruction you are using what’s called the imperative mood. Expressions using imperative mood are known as imperative sentences.",
    parts: [
      {
        heading: "V+O",
        text: ["Here lies the main exception to the SVO method in the French language. When making imperative sentences we leave out the subject and the structure is V+O: Verb + Object."],
        examples: [
          "Parlez français! – Speak French!",
          "Restez ici. – Stay here.",
          "Appelez moi. – Call me.",
          "Mange des legumes. – Eat some vegetables."
        ]
      }
    ]
  }
}

const complex : page = {
  pageTitle: "Complex Sentences",
  path: "complex",
  sentence: {
    heading: "Complex Sentences",
    definition: "As we mentioned earlier, the SVO method is a base which we can use to build more complex sentences. Using our base, we can begin to understand the rules around why different types of words are placed where they are, and how to build more complex sentences.",
    parts: [
      {
        heading: "Getting Descriptive – Adjectives",
        text: ["In French word order, the adjective often comes after the verb in the sentence – S + V + O + Adj. Adjectives following this rule express state. While most adjectives will come after the verb in a sentence there are some which come BEFORE the noun in a sentence – S + Adj + V + O. These adjectives fall into what’s called the BAGS group. BAGS stands for Beauty, Age, Goodness and Size."],
        examples: [
          "La maison rouge. – The red house.",
          "Un garçon rapide. – A fast boy.",
          "L’homme français. – The French man.",
          "B: Une belle chanson. -  A pretty song.",
          "A: Le vieux chien. – The old dog.",
          "G: Un bon livre. – A good book.",
          "S: Une petite fille. – A small girl."
        ]
      },
      {
        heading: "Getting Specific - Adverbs",
        text: [
          "The placement of an adverb is dependent on what the adverb is modifying. Adverbs that are modifying a verb come after the verb and object if we have one - S + V + O + Adv.",
          "Adverbs that are modifying an adverb or adjective generally come after the verb and before the adverb/adjective – S + V + Adv + Adj/Adv."
        ],
        examples: [
          "S + V + O + Adv: Nous mangeons le repas lentement. – We eat the meal slowly.",
          "S + V + Adv + Adv: Tu marches très rapide. – You walk very fast.",
          "S + V + Adv + Adj: Elle est très belle. – She is very beautiful."
        ],
        tipCards: [
          {
            heading: "At this level of complexity, the rules can become more flexible.",
            text: ["This includes the placement of adverbs in a sentence. For example, both of these sentences are correct: Je mange toujours des lègumes. Je mange des lègumes toujours. (I always eat vegetables.)"]
          }
        ]
      },
      {
        heading: "Adverbial Phrases - Complément Circonstanciel",
        text: ["The adverbial phrase, also called complément circonstanciel, can come at the beginning, middle or end of the sentence. When placed at the beginning of a sentence it shows emphasis. These phrases act as an adverb in a sentence and can be used to denote time, a place, manner, or purpose."],
        examples: [
          "Je mange le petit dèjeuner chaque matin. – I eat breakfast every morning.",
          "Chaque matin, je mange le petit déjeuner. – Every morning, I eat breakfast.",
          "Tu apprends le français à l’école. – You learn French at school.",
          "À l’école, tu apprends le français. – At school, you learn French."
        ]
      },
      {
        heading: "Answers we’ve been looking for - Prepositions",
        text: ["Prepositions express the relationship between elements in a sentence and usually precede a noun or pronoun. They can be placed before or after the verb, sometimes you have the option, and other times there is one clear choice. For example, “With my mother I go shopping” doesn’t sound as good as “I go shopping with my mom.” "],
        examples: [
          "Après dîner, je mange un dessert. – After diner I eat a dessert.",
          "Je mange un dessert après diner. – I eat a dessert after dinner.",
          "Je rentre à la maison. – I’m going back home.",
          "Je mange avec elles. – I am eating with them."
        ]
      },
      {
        heading: "Let’s get personal – Pronouns",
        text: [
          "As we saw in the vocabulary section there are a lot of different pronouns, all with their own use cases. We will go over some of the major changes they make to sentence structure, but you can refer back to the pronouns page in section one to learn more about pronouns and their rules.",
          "Subject pronouns, used in place of the subject, stay at the beginning of the sentence. In French, the object in a sentence can also be replaced by a pronoun. Object pronouns come before the verb but after the subject. If there are multiple object pronouns being used than their order is depending on the hierarchy of those used. You can see this hierarchy below:",
          "Subject + 'me', 'te', 'se', 'nous', 'vous' + 'le', 'la', 'les' + 'lui', 'leur' + (adverbial pronoun “y”) + 'en' + Verb."
        ]
      },
      {
        heading: "Adverbial Pronouns",
        text: ["There are two adverbial pronouns: “en” (some) and “y” (there). Y can replace à + [thing/object/location]. If the listener already knows where you are headed you can use “y” to say “there” instead of the specific location. If the listener already knows what you item you are talking about, you can use “en” to mean “some of” that thing."],
        examples: [
          "Je vais au travaille. – I’m going to work.",
          "J’y vais. – I go there. ",
          "J’ai deux chien. – I have two dogs.",
          "J’en ai deux. – I have two of them."
        ]
      }
    ]
  }
}

const question : page = {
  pageTitle: "Questions",
  path: "questions",
  sentence: {
    heading: "Questions",
    definition: "Now let’s get interrogative with questions. In French there are a few different ways you can structure a question. The way you choose to structure your question will depend on whether you are speaking to someone vs writing to someone, as well as how formal you want to be.",
    parts: [
      {
        heading: "SVO vs VSO",
        text: [
          "The easiest way to form a question in French is to add inflection in your voice, or a question mark at the end of the sentence if you are writing. In this method we keep the SVO structure and simply change the tone to create a question.",
          "A more elegant or formal way to ask a question is to reverse the subject and the verb in the sentence, changing the structure to VSO. When we do this, we also hyphenate the subject-verb group - V-S O."
        ],
        examples: [
          "On sort ce soir? – Should we go out tonight?",
          "Tu manges une pizza? – Do you eat a pizza?",
          "Manges-tu une pizze? – Do you eat a pizza? (formal)",
          "Vous voulez une orange? – Would you like an orange?",
          "Voulez-vous une orange? – Would you like an orange? (formal)"
        ]
      },
      {
        heading: "Est-ce que",
        text: ["One of the easiest ways to form a question in French is to add “Est-ce Que” to the beginning of the sentence, with the usual SVO structure following it."],
        examples: [
          "Est-ce que tu mange une pizza? – Do you eat a pizza?",
          "Est-ce que vous voulez une orange? – Would you like an orange?"
        ]
      },
      {
        heading: "Question Words",
        text: ["If you are looking for more than a yes or no answer, it’s more than likely that you will need to use a question word. In French, question words typically come at the beginning of the sentence, and are followed by the inverted subject-verb group. They can also come at the end of a basic sentence."],
        table: ""
      }
    ]
  }
}

const negation : page = {
  pageTitle: "Negation",
  path: "negation",
  sentence: {
    heading: "Negation",
    definition: "Now let’s form some negative sentences. When using negative structures, they are placed around the verb and before the preposition or object in the sentence.",
    parts: [
      {
        heading: "Ne Pas",
        text: ["The two main negative words in French are “ne” and “pas”. “Ne” will precede the verb and come after the subject. “Pas” comes immediately after the verb in the sentence -  Ne + Verb + Pas."],
        examples: [
          "Je ne mange pas des champignons. – I don’t eat mushrooms.",
          "Tu ne vas pas au travail aujourd’hui. – You don’t go to work today.",
          "Je n’écoute pas la radio. – I don’t listen to the radio."
        ]
      },
      {
        heading: "Never, Not any, Not anymore",
        text: ["There are several kinds of negative structures, and they all work in a very similar way to “ne… pas”. To say never, we say “ne…jamais”. To say not any, we say “ne…aucun”. To say not any more, we say “ne…plus”."],
        examples: [
          "Je ne mange jamais de viande. – I never eat meat.",
          "Je ne montre aucun dessin à ma mère. – I don’t show any drawing to my mother.",
          "Il n’y a plus de bière. – There isn’t any more beer."
        ],
        table: "",
        tipCards: [
          {
            heading: "Using undefined articles in negative sentences.",
            text: [
              "Using undefined articles in negative sentences.",
              "For example, to say “I drink beer” you would say “Je bois du vin”. But to say “I don’t drink beer” you would say “Je ne bois pas de vin”."
            ]
          }
        ]
      }
    ]
  }
}

// Sections

export const vocabulary: section = {
  title: "Vocabulary",
  path: 'vocabulary',
  img: 'vocabulary-banner.jpg',
  description: [
    "This section is an introduction to French vocabulary. We will go over definitions, examples of and rules for the different types of words. Many of these will be familiar to you as they are the same types of words we use in English.",
    "Concepts learned here will be expanded upon in future sections when you start to learn sentence structure, and tenses."
  ],
  pages: [
    nounsAndArticles,
    adjectives,
    adverbs,
    verbs,
    conjunctions,
    prepositions,
    pronouns
  ]
}

export const sentenceStructure: section = {
  title: "Sentence Structure",
  path: "sentence-structure",
  img: "sentence-structure.jpg",
  description: [
    "In this section we will discuss how to structure French sentences, from simple sentences to complex sentences, questions and negative statements.",
    "The rules we will focus on here will be in the present tense. In the next section we will learn more about how to form sentences in other tenses, and how the rules differ or are the same."
  ],
  pages: [
    simpleDeclarative,
    imperative,
    complex,
    question,
    negation
  ]
}

// Course

export const courseOne: course = {
  title: "Course One",
  sections: [
    vocabulary,
    sentenceStructure
  ]
}

// Methods

export function getSectionData(section:any) {
  const sectionData = courseOne.sections.find(s => {
    return s.path === section;
  })

  if(sectionData !== undefined) {
    return sectionData;
  } else {
    console.log("No Section data found");
    return;
  }

}

export function getPageData(params:any) {
  const sectionData = courseOne.sections.find(s => {
    return s.path === params.section;
  })
  
  if(sectionData !== undefined) {
    const pageData = sectionData.pages.find(p => {
      return p.path === params.page;
    })

    return pageData;
    
  } else {
    console.log("No page found");
  }
}