const knockKnockJokes = {
  setup: [
    "Boo.",
    "Cash.",
    "Spell.",
    "Double.",
    "Lettuce.",
    "Cow says.",
    "To.",
    "Tank.",
    "Adore.",
    "Figs.",
    "Interrupting sloth.",
    "Interrupting pirate.",
    "Annie.",
    "Stopwatch.",
    "Says.",
    "Dishes.",
    "Woo.",
    "Tennis.",
    "Banana.",
    "Watts.",
    "Who.",
    "Ketchup.",
    "Dozen.",
    "Lena.",
    "Needle.",
    "Goat.",
    "Beets.",
    "You.",
    "Weekend.",
    "Butter.",
    "Roach.",
    "Abby.",
    "Leash.",
    "Radio.",
    "Zoom.",
    "Witches.",
    "Adam.",
    "Venice.",
    "Sue.",
    "Wendy.",
    "Bless.",
    "Noah.",
    "Water.",
    "Shore.",
    "Candice.",
    "Theodore.",
    "An interrupting cow",
    "Orange.",
    "Alpaca.",
    "Nobel.",
    "Weirdo.",
    "Ice cream.",
    "Anita.",
    "Canoe.",
    "Dozen.",
    "Alec.",
    "Olive.",
    "Honeydew.",
    "Yukon",
    "Ears.",
    "Cook.",
    "Luke.",
    "Kanga.",
    "Howl.",
    "Mikey.",
    "Ya.",
    "Snow.",
    "Honey bee.",
    "Icy.",
    "A herd.",
    "Alex.",
    "CD.",
    "Isabel.",
    "Ben.",
    "Scold.",
    "Cargo.",
    "Nana.",
    "A little old lady.",
    "Hatch.",
    "Alice.",
    "Snow.",
    "Leaf.",
    "Euripides.",
    "Amos.",
    "Dwayne.",
    "Razor.",
    "Thermos.",
    "Amarillo.",
    "Voodoo.",
    "Hawaii.",
    "Cher.",
    "Mustache.",
  ],
  punchline: [
    "Don’t cry, it’s just a joke.",
    "No thanks, I prefer peanuts.",
    "W. H. O.",
    "W!",
    "Lettuce in, it’s cold out here!",
    "No, a cow says mooooo!",
    "No, it’s to whom!",
    "You’re welcome.",
    "Adore is between you and me, so please open up!",
    "Figs the doorbell. I’ve been knocking forever!",
    "(20 seconds of silence)\nSloooooooooth.",
    "ARGHHHHHHHH",
    "Annie thing you can do, I can do better!",
    "Stopwatch you’re doing and let me in!",
    "Says me!",
    "Dishes the police, open up!",
    "Glad you’re excited, too!",
    "Tennis five plus five.",
    "Orange you glad I didn’t say banana?",
    "Watts for dinner? I’m hungry.",
    "I didn’t know you were an owl!",
    "Ketchup with me and I’ll tell you!",
    "Dozen anybody want to let me in?",
    "Lena a little closer, and I’ll tell you another joke!",
    "Needle little help opening the door!",
    "Goat to the door and find out!",
    "Beets me!",
    "Yoo-hoo! Anybody home?",
    "Weekend do anything we want!",
    "Butter let me in or I’ll freeze!",
    "Roach you a letter, and I’m putting it in your mailbox!",
    "Abby birthday to you!",
    "Leash you could do is answer the doorbell!",
    "Radio not, here I come!",
    "Zoom did you think it was?",
    "Witches the best way out of this neighborhood!?",
    "Adam my way, I’m coming in!",
    "Venice your dad coming home?",
    "Sue-prize! Happy birthday!",
    "Wendy bell gonna start working again?",
    "But I didn’t sneeze!",
    "Know a place I can spend the night?",
    "Water you asking so many questions for, just open up!",
    "Shore hope you like bad jokes!",
    "Candice joke get any worse?",
    "Theodore wasn’t opened so I knocked.",
    "(20 seconds of silence)\nMOO!",
    "Orange you going to let me in?",
    "Alpaca the trunk, you pack the suitcase.",
    "Nobel … that’s why I knocked!",
    "Weirdo you think you’re going?",
    "ICE CREAM SO YOU CAN HEAR ME!",
    "Anita use the bathroom, please open the door!",
    "Canoe come out now?",
    "Dozen anyone want to let me in?",
    "Alectricity. BUZZ!",
    "Olive you sooooo much!",
    "Honeydew you wanna dance?",
    "Yukon say that again!",
    "’Ears another knock-knock joke for ya!",
    "Yeah, you do sound cuckoo!",
    "Luke through the peephole and find out.",
    "Actually, it’s kangaroo!",
    "Howl you know unless you open the door?",
    "Mikey doesn’t work, can you let me in?",
    "Yippee!",
    "It’s snow use—this joke will never be funny.",
    "Honey bee a dear and get the door for me.",
    "Icy you in there!",
    "A herd you were home, so I came over!",
    "Alex-plain later, just open up!",
    "CD person knocking on the door?",
    "Isabel not working?",
    "Ben knocking for 10 minutes!",
    "Scold outside, let me in!",
    "Car go “Toot toot, vroom, vroom!”",
    "Nana your business!",
    "Hey, I didn’t know you could yodel!",
    "Bless you!",
    "Alice fair in love and war.",
    "Snow use. The joke is over.",
    "Leaf me alone!",
    "Euripides clothes, you pay for them!",
    "Amos a mosquito. Look, right there!",
    "Dwayne the sink. I need to use it!",
    "Razor hands, this is a stickup!",
    "Thermos be a better way to get to you.",
    "Amarillo nice person.",
    "Voodoo you think you are?",
    "I’m good. Hawaii you?",
    "Cher would be nice if you opened the door!",
    "I mustache you a question.",
  ],
};

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomJoke() {
  const messageComponents = [];

  // Adding "Knock, knock. Who’s there?" to the overall list of components
  messageComponents.push("- Knock, knock.");
  messageComponents.push("Who’s there?");

  // Iterating through the setup and punchline components
  const index = getRandomIndex(knockKnockJokes.setup.length);
  const setup = knockKnockJokes.setup[index];
  const punchline = knockKnockJokes.punchline[index];

  // Remove the trailing period from the setup if present
  const formattedSetup = setup.endsWith(".") ? setup.slice(0, -1) : setup;

  // Adding formatted setup and punchline components to the overall list
  messageComponents.push(setup);
  messageComponents.push(`${formattedSetup} who?`);
  messageComponents.push(punchline);

  // Displaying the concatenated message
  console.log(messageComponents.join("\n- "));
}

// Calling the function to generate and display a random joke
console.log("Knock-Knock Joke :D\n");
generateRandomJoke();

function generateNonsensicalJoke() {
  const messageComponents = [];

  // Adding "Knock, knock. Who’s there?" to the overall list of components
  messageComponents.push("- Knock, knock.");
  messageComponents.push("Who’s there?");

  // Iterating through the setup and punchline components
  const setupIndex = getRandomIndex(knockKnockJokes.setup.length);
  const punchlineIndex = getRandomIndex(knockKnockJokes.punchline.length);

  const setup = knockKnockJokes.setup[setupIndex];
  const punchline = knockKnockJokes.punchline[punchlineIndex];

  // Remove the trailing period from the setup if present
  const formattedSetup = setup.endsWith(".") ? setup.slice(0, -1) : setup;

  // Adding formatted setup and punchline components to the overall list
  messageComponents.push(setup);
  messageComponents.push(`${formattedSetup} who?`);
  messageComponents.push(punchline);

  // Displaying the concatenated message
  console.log(messageComponents.join("\n- "));
}

// Calling the function to generate and display a random nonsensical joke
console.log("\nNonsensial Joke :D\n");
generateNonsensicalJoke();
