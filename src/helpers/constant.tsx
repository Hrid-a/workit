import { FeatureCardProps } from "@/components/Cards";

export const features: FeatureCardProps[] = [
  {
    emoji: "📈",

    title: "Insights & Analytics",
    paragraph:
      "Indulged in the art of procrastination all week? Brace yourself for the truth: zero accomplishments. Prepare to be awestruck.",
  },
  {
    emoji: "⚡",
    title: "Powerful Note Taking",
    paragraph:
      "Brace yourself! Experience note-taking that defies gravity. Get ready to be smitten by its remarkable charm, leaving those pen-and-paper users in lectures questioning their existence.",
  },
  {
    emoji: "🗃",
    title: "Flashcards",
    paragraph:
      " Guess what? Workit doesn't do ordinary flashcards. No, no, we've revolutionized game. <br /> <br /> Say goodbye to thetedious task of creating your own flashcards. With Workit, as you jotdown your notes, like magic, we'll conjure up customized flashcardsfor you. <br /> <br /> But here's the thing, don't you eventhink about slacking off on your flashcard homework. Our AI takes itpersonally, and trust me, you don't want to face the wrath of apeeved AI.",
    useHtml: true,
  },
  {
    emoji: "🧠",
    title: "AI this & Automations that",
    paragraph:
      "Embrace the brilliance of our wonderfully mediocre AI! It's here tosave the day, helping you fix mistakes and put information in the right place. Because, you know, we get it—you're not the sharpest tool in the shed.",
  },
  {
    emoji: "👨‍💻",
    title: "Open Source",
    paragraph:
      "  Apart from the glamour of being open source, Workit's codebase is actually open for contributions I mean if you even dare!",
  },
];

export const allPdfs = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000", // Use a UUID generator for real applications
    name: "File 1",
    url: "http://example.com/file1",
    key: "key1",
    createdAt: new Date("2013-04-28T05:48:00Z"), // ISO 8601 date format
    updatedAt: new Date(),
    messages: [], // Assuming Message[] is an empty array for simplicity
    User: null, // Assuming no related User for simplicity
    userId: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001", // Use a UUID generator for real applications
    name: "File 2",
    url: "http://example.com/file2",
    key: "key2",
    createdAt: new Date("2015-06-15T12:34:00Z"), // ISO 8601 date format
    updatedAt: new Date(),
    messages: [], // Assuming Message[] is an empty array for simplicity
    User: null, // Assuming no related User for simplicity
    userId: null,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002", // Use a UUID generator for real applications
    name: "File 3",
    url: "http://example.com/file3",
    key: "key3",
    createdAt: new Date("2018-09-21T23:56:00Z"), // ISO 8601 date format
    updatedAt: new Date(),
    messages: [], // Assuming Message[] is an empty array for simplicity
    User: null, // Assuming no related User for simplicity
    userId: null,
  },
];
