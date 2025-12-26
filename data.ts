
import { Exercise } from './types';

export const EXERCISES: Exercise[] = [
  {
    id: 'ex1',
    title: 'Exercise 1: Dative Case',
    description: 'Mastering indirect objects and verbs that take the Dative case.',
    sentences: [
      { 
        id: 'ex1-1', 
        russian: 'Скажите мне, пожалуйста, что это.', 
        phonetic: 'Ska-zhí-tye mnye, po-zhá-luysta, shto e-to',
        meaning: 'Tell me, please, what this is.',
        grammarNote: 'The pronoun "мне" (to me) is the Dative form of "я" (I). The verb "скажите" (tell/say) requires the Dative for the person being spoken to.'
      },
      { 
        id: 'ex1-2', 
        russian: 'Я часто звоню маме.', 
        phonetic: 'Ya chás-to zvo-nyú má-mye',
        meaning: 'I often call mom.',
        grammarNote: 'In Russian, the verb "звонить" (to call) always takes the Dative case. "Маме" is the Dative form of "мама" (feminine nouns ending in -а change to -е).'
      },
      { 
        id: 'ex1-3', 
        russian: 'Тебе нравится Москва?', 
        phonetic: 'Tye-byé nrá-vit-sya Mos-kvá?',
        meaning: 'Do you like Moscow?',
        grammarNote: 'Literally "Is Moscow pleasing to you?". The person who likes something is in the Dative case ("тебе" - to you), and the object liked is the subject.'
      },
      { 
        id: 'ex1-4', 
        russian: 'Нам нравится русская музыка.', 
        phonetic: 'Nam nrá-vit-sya rús-ska-ya mú-zy-ka',
        meaning: 'We like Russian music.',
        grammarNote: '"Нам" is the Dative form of "мы" (we). Like the previous example, "music" is the subject that is "pleasing to us".'
      },
      { 
        id: 'ex1-5', 
        russian: 'Иван говорит другу о Корее.', 
        phonetic: 'I-ván go-vo-rít drú-gu o Ko-ré-ye',
        meaning: 'Ivan is talking to a friend about Korea.',
        grammarNote: '"Другу" is the Dative form of "друг" (friend). Masculine nouns ending in a consonant typically take "-у" in the Dative case.'
      }
    ]
  },
  {
    id: 'ex2',
    title: 'Exercise 2: Exclamatory Sentences',
    description: 'Using "Какой" to express admiration and emphasis.',
    sentences: [
      { 
        id: 'ex2-1', 
        russian: 'Какой это красивый город!', 
        phonetic: 'Ka-kóy e-to kra-sí-vyy gó-rod!',
        meaning: 'What a beautiful city this is!',
        grammarNote: '"Какой" (What/Which) must agree in gender with the noun. "Город" (city) is masculine, so we use the masculine form "какой".'
      },
      { 
        id: 'ex2-2', 
        russian: 'Какая это интересная книга!', 
        phonetic: 'Ka-ká-ya e-to in-tye-ryés-na-ya kní-ga!',
        meaning: 'What an interesting book this is!',
        grammarNote: '"Книга" (book) is feminine, so the pronoun changes to "какая" and the adjective to "интересная".'
      },
      { 
        id: 'ex2-3', 
        russian: 'Какое это высокое здание!', 
        phonetic: 'Ka-kó-ye e-to vy-só-ko-ye zdá-ni-ye!',
        meaning: 'What a tall building this is!',
        grammarNote: '"Здание" (building) is neuter (ending in -е), so we use the neuter form "какое" and the adjective "высокое".'
      },
      { 
        id: 'ex2-4', 
        russian: 'Какой это хороший студент!', 
        phonetic: 'Ka-kóy e-to ho-ró-shiy stu-dyént!',
        meaning: 'What a good student this is!',
        grammarNote: '"Студент" is masculine. Note the "ий" ending on the adjective "хороший", which is the standard masculine ending after the letter "ш".'
      }
    ]
  },
  {
    id: 'ex3',
    title: 'Exercise 3: Interrogative Pronouns',
    description: 'Asking "Who", "What", and "Which".',
    sentences: [
      { 
        id: 'ex3-1', 
        russian: 'Что это? Это Кремль.', 
        phonetic: 'Shto e-to? E-to Kryeml',
        meaning: 'What is this? This is the Kremlin.',
        grammarNote: '"Что" (What) is used for inanimate objects. "Кремль" is a masculine noun ending in a soft sign (ь).'
      },
      { 
        id: 'ex3-2', 
        russian: 'Кто это? Это наш учитель.', 
        phonetic: 'Kto e-to? E-to nash u-chí-tyel',
        meaning: 'Who is this? This is our teacher.',
        grammarNote: '"Кто" (Who) is used for animate beings (people/animals). "Наш" is the masculine possessive pronoun "our".'
      },
      { 
        id: 'ex3-3', 
        russian: 'Какой город вам нравится?', 
        phonetic: 'Ka-kóy gó-rod vam nrá-vit-sya?',
        meaning: 'Which city do you like?',
        grammarNote: '"Какой" asks "which" or "what kind of". It agrees with "город" (masculine). "Вам" is the polite/plural Dative of "вы".'
      },
      { 
        id: 'ex3-4', 
        russian: 'Какая музыка тебе нравится?', 
        phonetic: 'Ka-ká-ya mú-zy-ka tye-byé nrá-vit-sya?',
        meaning: 'What music do you like?',
        grammarNote: '"Какая" agrees with the feminine noun "музыка". "Тебе" is the informal singular Dative of "ты".'
      }
    ]
  },
  {
    id: 'ex4',
    title: 'Exercise 4: Liking Questions',
    description: 'Deep dive into the grammar of preferences.',
    sentences: [
      { 
        id: 'ex4-1', 
        russian: 'Вам нравится Россия?', 
        phonetic: 'Vam nrá-vit-sya Ros-sí-ya?',
        meaning: 'Do you like Russia?',
        grammarNote: 'Using the verb "нравится" with the Dative "вам". "Россия" is the subject in the Nominative case.'
      },
      { 
        id: 'ex4-2', 
        russian: 'Вам нравится Москва?', 
        phonetic: 'Vam nrá-vit-sya Mos-kvá?',
        meaning: 'Do you like Moscow?',
        grammarNote: 'Similar structure to above. Note the word order: Dative Pronoun + Verb + Subject.'
      },
      { 
        id: 'ex4-3', 
        russian: 'Тебе нравится русская кухня?', 
        phonetic: 'Tye-byé nrá-vit-sya rús-ska-ya kúh-nya?',
        meaning: 'Do you like Russian cuisine?',
        grammarNote: '"Русская кухня" (Russian cuisine) is the subject. Adjectives in the Nominative feminine end in -ая.'
      },
      { 
        id: 'ex4-4', 
        russian: 'Им нравится корейская музыка?', 
        phonetic: 'Im nrá-vit-sya ko-réy-ska-ya mú-zy-ka?',
        meaning: 'Do they like Korean music?',
        grammarNote: '"Им" is the Dative form of "они" (they). "Корейская" is the feminine adjective for "Korean".'
      }
    ]
  },
  {
    id: 'ex5',
    title: 'Exercise 5: Translation Practice',
    description: 'General review of various grammar points.',
    sentences: [
      { 
        id: 'ex5-2', 
        russian: 'Это Большой театр.', 
        phonetic: 'E-to Bol-shóy tye-átr',
        meaning: 'This is the Bolshoi Theatre.',
        grammarNote: '"Большой" means "big/grand". In Russian, the verb "to be" is omitted in the present tense.'
      },
      { 
        id: 'ex5-3', 
        russian: 'Тебе нравится русская музыка?', 
        phonetic: 'Tye-byé nrá-vit-sya rús-ska-ya mú-zy-ka?',
        meaning: 'Do you like Russian music?',
        grammarNote: 'Review: Dative "тебе" + singular verb "нравится" + feminine subject "музыка".'
      },
      { 
        id: 'ex5-4', 
        russian: 'Вам нравится этот фильм?', 
        phonetic: 'Vam nrá-vit-sya e-tot fil\'m?',
        meaning: 'Do you like this movie?',
        grammarNote: '"Этот" is the masculine demonstrative pronoun "this", agreeing with "фильм".'
      },
      { 
        id: 'ex5-5', 
        russian: 'Какой это красивый город!', 
        phonetic: 'Ka-kóy e-to kra-sí-vyy gó-rod!',
        meaning: 'What a beautiful city this is!',
        grammarNote: 'Review: Exclamatory "Какой" agreeing with masculine "город".'
      }
    ]
  }
];
