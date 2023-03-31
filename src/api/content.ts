// Types
export interface rule {
  definition: string;
  examples?: string[];
}

export interface typeOf {
  name: string;
  definition: string;
  examples?: string[];
  table?: string;
}

export interface typeOfWord {
  name: string,
  definition: {
    text: string;
    examples?: string[];
  };
  typesOf?: typeOf[];
  rules?: rule[]
}

export interface page {
  pageTitle: string;
  path: string;
  content: typeOfWord[]
}

export interface section {
  title: string;
  path: string;
  img: string;
  description: string[];
  pages: page[]
}

export interface course {
  title: string;
  sections: section[]
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
      name: "Nouns",
      definition: {
        text: "A noun is a word which names something, including people, places, or things.",
      },
      typesOf: [
        {
          name: "Proper Noun",
          definition: "A proper noun is a specific name of a person, place, or thing.",
          examples: [
            "Renee - Person",
            "Paris - Place",
            "Monalisa - Thing"
          ],
        },
        {
          name: "Common Noun",
          definition: "A common noun is the generic name of an item in a class or group.",
          examples: [
            "Un chien - A dog",
            "Un appartement - An apartment"
          ],
        }
      ]
    },
    {
      name: "Articles",
      definition: {
        text: "An article is a word that comes before a noun to show if it's specific or general."
      },
      typesOf: [
        {
          name: "Indefinite Articles",
          definition: "Indefinite articles identify a single, non-specific, person or thing.",
          examples: [
            "Un, Une, Des"
          ]
        },
        {
          name: "Definite Articles",
          definition: "Definite articles are used to refer to identified or specified people or things.",
          examples: [
            "Le, L’, La, Les"
          ]
        },
        {
          name: "Partitive Articles",
          definition: "Partitive articles are used to express quantities that cannot be counted.",
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
      name: "Adjectives",
      definition: {
        text: "Adjectives are words used to describe a noun."
      },
      typesOf: [
        {
          name: "Possessive",
          definition: "Possessive adjectives are words which define whom the noun belongs to.",
          examples: [
            "Ma, Mon, Mes, Ton, Sa, Ses, Leur"
          ]
        },
        {
          name: "Demonstrative",
          definition: "Demonstrative adjectives are words used to point at something or emphasize its importance.",
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
      name: "Adverbs",
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
      name: "Verbs",
      definition: {
        text: "Verbs are words that represent actions."
      },
      typesOf: [
        {
          name: "ER Verbs",
          definition: "These verbs end in “er”.",
          examples: [
            "Parler - To talk",
            "Aller - To go",
            "Penser - To think"
          ]
        },
        {
          name: "IR Verbs",
          definition: "These verbs end in “ir”",
          examples: [
            "Courir - To run",
            "Ouvrir - To open",
            "Venir - To come"
          ]
        },
        {
          name: "RE Verbs",
          definition: "These verbs end in “re”",
          examples: [
            "Prendre - To take",
            "Apprendre - To learn",
            "Comprendre - To understand"
          ]
        },
        {
          name: "Reflexive",
          definition: "Reflexive verbs are used to describe things you do regularly or changes of state that have an effect on oneself.",
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
      name: "Conjunctions",
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
      name: "Prepositions",
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
      name: "Pronouns",
      definition: {
        text: "Pronouns are words that are used as a substitute for other nouns when it is already known what nouns you’re referring to."
      }
    },
    {
      name: "Personal Pronouns",
      definition: {
        text: "Personal pronouns are pronouns that refer to specific individuals and groups."
      },
      typesOf: [
        {
          name: "Personal Subject Pronouns",
          definition: "Personal subject pronouns replace the subject of a sentence.",
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>First person</p></td><td><p>Je&nbsp;</p></td></tr><tr><td><p>Second person</p></td><td><p>Tu&nbsp;</p></td></tr><tr><td><p>Third Person<br></p></td><td><p>Il / Elle / On&nbsp;</p></td></tr><tr><td><p>First person plural</p></td><td><p>Nous&nbsp;s</p></td></tr><tr><td><p>Second person plural</p></td><td><p>Vous&nbsp;</p></td></tr><tr><td><p>Third person plural</p></td><td><p>Ils&nbsp;/ Elles</p></td></tr></tbody></table></div>"
        },
        {
          name: "Personal Stressed Pronouns",
          definition: "Personal stressed pronouns can be used on their own, after prepositions, for emphasis, or after à to show belonging. They can also be used in comparisons or with même to mean self",
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p>moi</p></td></tr><tr><td><p>2nd person [s]</p></td><td><p>toi</p></td></tr><tr><td><p>3rd person [s]</p></td><td><p>lui; elle; soi</p></td></tr><tr><td><p>2nd person [p]</p></td><td><p>vous</p></td></tr><tr><td><p>3rd person [p]</p></td><td><p>eux; elles</p></td></tr></tbody></table></div>"
        },
        {
          name: "Direct Object",
          definition: "COD (Complément d’Objet Direct) is used for verbs which aren’t followed by prepositions.",
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p>me</p></td></tr><tr><td><p>2nd person [s]</p></td><td><p>te</p></td></tr><tr><td><p>3rd person [s]</p></td><td><p>le; la</p></td></tr><tr><td><p>1st person [p]</p></td><td><p>nous</p></td></tr><tr><td><p>2nd person [p]</p></td><td><p>vous</p></td></tr><tr><td><p>3rd person [p]</p></td><td><p>les</p></td></tr></tbody></table></div>"
        },
        {
          name: "Indirect Object",
          definition: "COI (Complément d’Objet Indirect) replaces nouns for verbs following by the preposition à",
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p>me</p></td></tr><tr><td><p>2nd person [s]</p></td><td><p>te</p></td></tr><tr><td><p>3rd person [s]</p></td><td><p>lui</p></td></tr><tr><td><p>1st person [p]</p></td><td><p>nous</p></td></tr><tr><td><p>2nd person [p]</p></td><td><p>vous</p></td></tr><tr><td><p>3rd person [p]</p></td><td><p>leur</p></td></tr></tbody></table></div>"
        },
        {
          name: "Personal Reflexive Pronouns",
          definition: "Used with reflexive verbs - verbs that imply an action on yourself are reflexive, and can usually be translated using an additional “oneself.”",
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>1st person [s]</p></td><td><p><em>me</em></p></td></tr><tr><td><p>2nd person [s]</p></td><td><p><em>te</em></p></td></tr><tr><td><p>3rd person [s]</p></td><td><p><em>se</em></p></td></tr><tr><td><p>1st person [p]</p></td><td><p><em>nous</em></p></td></tr><tr><td><p>2nd person [p]</p></td><td><p><em>vous</em></p></td></tr><tr><td><p>3rd person [p]</p></td><td><p><em>se</em></p></td></tr></tbody></table></div>"
        }
      ]
    },
    {
      name: "Impersonal Pronouns",
      definition: {
        text: "Impersonal pronouns are pronouns that do not refer to a person or thing or to any other part of the sentence. Instead refer to objects/ideas.",
      },
      typesOf: [
        {
          name: "Impersonal Subject Pronouns",
          definition: "Impersonal subject pronouns replace the subject of a sentence.",
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>Ce</p></td></tr><tr><td><p>C'</p></td></tr><tr><td><p>Ca</p></td></tr><tr><td><p>Il</p></td></tr></tbody></table></div>"
        },
        {
          name: "Adverbial Pronouns",
          definition: "Adverbial pronouns are pronouns in the sense that they replace nouns, and at the same time they are adverbs representing a place, a quantity, or the object of a preposition.",
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>Y</p><p><em>To[something]</em></p></td></tr><tr><td><p>En&nbsp;<em><br></em><em>About[something]</em></p></td></tr></tbody></table></div>"
        },
        {
          name: "Relative Prounouns",
          definition: "Relative pronouns are a word that introduces a dependant clause and connects it to an independent clause.",
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>que&nbsp;<em><br>that</em></p></td></tr><tr><td><p>qui&nbsp;<em><br>who</em></p></td></tr><tr><td><p>où&nbsp;<em><br>where; when</em></p></td></tr><tr><td><p>dont&nbsp;<em><br>whose; that</em></p></td></tr><tr><td><p>lequel(s)<em>&nbsp;</em><em><br></em>laquelle(s)<em><br>which; that</em></p></td></tr></tbody></table></div>"
        },
        {
          name: "Demonstrative Pronouns",
          definition: "Demonstrative pronouns replace something that was mentioned earlier.",
          table: "<div><table><colgroup><col><col></colgroup><tbody><tr><td><p>Masc. [s]</p></td><td><p>celui<br>The / This / That one</p></td></tr><tr><td><p>Masc. [p]</p></td><td><p>ceux<br>These / Those</p></td></tr><tr><td><p>Fem. [s]</p></td><td><p>celle<br>The / This / That one</p></td></tr><tr><td><p>Fem. [p]</p></td><td><p>celles<br>These / Those</p></td></tr></tbody></table></div>"
        },
        {
          name: "Interrogative Pronouns",
          definition: "Interrogative pronouns are function words used to ask a question.",
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>qui&nbsp;<em><br>who</em></p></td></tr><tr><td><p>où&nbsp;<em><br>where</em></p></td></tr><tr><td><p>quand&nbsp;<em><br>when</em></p></td></tr><tr><td><p>quoi&nbsp;<em><br>what</em></p></td></tr><tr><td><p>lequel<br><br>lesquels<br><br>laquelle<br><br>lesquelles<br><em>which one</em></p></td></tr></tbody></table></div>"
        },
        {
          name: "Indefinite Pronouns",
          definition: "Indefinite pronouns are not specifically identifying what they are referring to.",
          table: "<div><table><colgroup><col></colgroup><tbody><tr><td><p>tout&nbsp;<em><br>everything; anything; all</em></p></td></tr><tr><td><p>rien&nbsp;<em><br>nothing</em></p></td></tr><tr><td><p>personne&nbsp;<em><br>nobody</em></p></td></tr><tr><td><p>chacun&nbsp;<em><br>everyone; every man</em></p></td></tr><tr><td><p>tout le monde&nbsp;<em><br>everybody</em></p></td></tr><tr><td><p>quelqu'un&nbsp;<br>someone</p></td></tr><tr><td><p>quelque chose&nbsp;<br>something</p></td></tr><tr><td><p>certains&nbsp;<br>some [people]</p></td></tr></tbody></table></div>"
        }
      ]
    }
  ]
}

// Vocabulary Section

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

// Course

export const courseOne: course = {
  title: "Course One",
  sections: [
    vocabulary
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