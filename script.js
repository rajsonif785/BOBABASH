
const scenes = {
  bedroom: {
    icon: "⏰",
    title: "YOU'RE LATE.",
    time: "08:00 AM",
    text: "Your alarm didn't ring. School starts in 15 minutes, and you're still in your pajamas. Your bag is somewhere under a pile of clothes.",
    choices: [
      { text: "🏃 Rush out immediately", next: "street" },
      { text: "🥪 Eat breakfast first", next: "breakfast" },
      { text: "😴 Sleep for five more minutes", next: "sleep" }
    ]
  },

  street: {
    icon: "🏃",
    title: "THE GREAT ESCAPE",
    time: "08:04 AM",
    text: "You're running down the street with one shoe untied. A dog starts chasing you. It seems more committed to this morning than you are.",
    choices: [
      { text: "🐕 Befriend the dog", next: "dog" },
      { text: "🚌 Catch the school bus", next: "bus" },
      { text: "🚲 Steal your sibling's bicycle", next: "bike" }
    ]
  },

  breakfast: {
    icon: "🍞",
    title: "JUST ONE BITE...",
    time: "08:06 AM",
    text: "You make toast. Then another toast. Then somehow you're making an entire sandwich. Your stomach is happy. Your attendance record isn't.",
    choices: [
      { text: "🏃 Abandon the sandwich and run", next: "street" },
      { text: "📱 Ask Dad for a ride", next: "ride" },
      { text: "📝 Accept your fate and skip school", next: "skip" }
    ]
  },

  sleep: {
    icon: "💤",
    title: "FIVE MORE MINUTES.",
    time: "09:30 AM",
    text: "You wake up. It is not five minutes later. It is ninety minutes later. Your alarm clock has become your greatest enemy.",
    choices: [
      { text: "🏃 Run to school anyway", next: "street" },
      { text: "📱 Call your friend for notes", next: "notes" },
      { text: "🛌 Go back to sleep", next: "dream" }
    ]
  },

  dog: {
    icon: "🐕",
    title: "NEW BEST FRIEND",
    time: "08:08 AM",
    text: "The dog stops chasing you because you offer it your sandwich. It follows you all the way to school. Congratulations. You have acquired a dog but lost your breakfast.",
    choices: [
      { text: "🏫 Enter school with the dog", next: "dogEnding" },
      { text: "🚌 Leave the dog and catch the bus", next: "bus" }
    ]
  },

  bus: {
    icon: "🚌",
    title: "THE BUS IS HERE!",
    time: "08:10 AM",
    text: "You make it to the bus stop. The bus driver opens the door, looks at your untied shoes and asks the most terrifying question: 'Where is your school ID?'",
    choices: [
      { text: "🎒 Show your ID proudly", next: "school" },
      { text: "🤥 Pretend you forgot it at home", next: "principal" }
    ]
  },

  bike: {
    icon: "🚲",
    title: "TO THE RESCUE!",
    time: "08:09 AM",
    text: "You grab the bicycle. Unfortunately, it has a flat tyre. Your sibling is watching from the window, laughing. Family support is a myth.",
    choices: [
      { text: "🚌 Abandon the bike and catch the bus", next: "bus" },
      { text: "🚶 Walk the rest of the way", next: "walk" }
    ]
  },

  ride: {
    icon: "🚗",
    title: "DAD TO THE RESCUE",
    time: "08:12 AM",
    text: "Dad agrees to drive you. You jump into the car, feeling victorious. Then he remembers he needs petrol.",
    choices: [
      { text: "⛽ Wait at the petrol pump", next: "late" },
      { text: "🏃 Run the remaining distance", next: "school" }
    ]
  },

  notes: {
    icon: "📱",
    title: "THE GROUP CHAT",
    time: "09:35 AM",
    text: "Your friend sends you 48 messages, 12 memes and exactly zero useful notes. One message simply says, 'Bro, we're having a test.'",
    choices: [
      { text: "📚 Rush to school for the test", next: "late" },
      { text: "😎 Claim you are studying remotely", next: "skip" }
    ]
  },

  dream: {
    icon: "☁️",
    title: "THE DREAM",
    time: "12:00 PM",
    text: "You dream that you arrive at school on a flying elephant. Your teacher gives you full marks. Then you wake up and realize none of that happened.",
    choices: [
      { text: "🔄 Try to rescue the day", next: "street" },
      { text: "🛌 Accept your new life as a sleeper", next: "sleepEnding" }
    ]
  },

  walk: {
    icon: "🚶",
    title: "THE LONG WALK",
    time: "08:35 AM",
    text: "You arrive at the school gate, exhausted. The guard looks at the clock, looks at you, and silently points toward the principal's office.",
    choices: [
      { text: "🚪 Face the principal", next: "principal" },
      { text: "🏃 Make one last dash to class", next: "school" }
    ]
  },

  school: {
    icon: "🏫",
    title: "YOU MADE IT!",
    time: "08:25 AM",
    text: "You somehow reach school. The teacher is already taking attendance. You sneak into class and sit down. Then you remember: today was a holiday.",
    choices: [
      { text: "🎉 Celebrate your accidental adventure", next: "heroEnding" },
      { text: "😶 Quietly walk back home", next: "homeEnding" }
    ]
  },

  principal: {
    icon: "🧑‍🏫",
    title: "THE PRINCIPAL",
    time: "08:40 AM",
    text: "The principal asks why you're late. You explain everything, including the dog, the sandwich and the bicycle. He takes off his glasses.",
    choices: [
      { text: "🤝 Promise to be on time tomorrow", next: "promiseEnding" },
      { text: "🤥 Blame the alarm clock", next: "blameEnding" }
    ]
  },

  late: {
    icon: "⌛",
    title: "TOO LITTLE, TOO LATE",
    time: "09:00 AM",
    text: "You arrive just as the test ends. Your teacher smiles in a way that makes you wish you had stayed in bed.",
    choices: [
      { text: "📄 Ask for a second chance", next: "promiseEnding" },
      { text: "🏠 Go home and rethink everything", next: "homeEnding" }
    ]
  },

  skip: {
    icon: "🎮",
    title: "THE LEGENDARY ABSENCE",
    time: "08:30 AM",
    text: "You stay home. You open a game, grab some snacks and feel like a genius. Then the school sends your parents an attendance notification.",
    choices: [
      { text: "📚 Open your books immediately", next: "studyEnding" },
      { text: "🎮 One more game...", next: "gameEnding" }
    ]
  },

  heroEnding: {
    icon: "🏆",
    title: "THE UNEXPECTED HERO",
    time: "08:26 AM",
    text: "You ran across half the city for a school holiday. At least you got your cardio in. Your friends will tell this story for years.",
    ending: "You win at life. Technically.",
    final: true
  },

  homeEnding: {
    icon: "🏡",
    title: "THE WALK OF SHAME",
    time: "08:45 AM",
    text: "You walk home slowly, wondering why nobody told you it was a holiday. Your sibling is still laughing about the bicycle.",
    ending: "Tomorrow might be better. Probably not.",
    final: true
  },

  dogEnding: {
    icon: "🐶",
    title: "THE DOG WHISPERER",
    time: "08:20 AM",
    text: "The dog walks into school with you. Your teacher loves dogs and lets it stay in class. Somehow, you become the most popular person in school.",
    ending: "You came for attendance. You left with a best friend.",
    final: true
  },

  promiseEnding: {
    icon: "🤝",
    title: "A PROMISE IS A PROMISE",
    time: "08:45 AM",
    text: "The principal lets you go with a warning. You promise to wake up earlier tomorrow. Your alarm is already nervous.",
    ending: "Character development unlocked.",
    final: true
  },

  blameEnding: {
    icon: "🫠",
    title: "THE ALARM DID IT",
    time: "08:45 AM",
    text: "The principal points out that your alarm clock cannot defend itself. You receive a warning and a lecture about responsibility.",
    ending: "Your lawyer has advised you to stop blaming appliances.",
    final: true
  },

  studyEnding: {
    icon: "📚",
    title: "THE REDEMPTION ARC",
    time: "10:00 AM",
    text: "You open your books and actually study. It turns out the chapter wasn't that difficult. You might survive the next test after all.",
    ending: "Rare academic comeback.",
    final: true
  },

  gameEnding: {
    icon: "🎮",
    title: "ONE MORE GAME",
    time: "01:00 PM",
    text: "One game becomes five. Five become twenty. Suddenly it is lunchtime, your parents are home, and your books are still closed.",
    ending: "Achievement unlocked: Professional Procrastinator.",
    final: true
  },

  sleepEnding: {
    icon: "😴",
    title: "SLEEP CHAMPION",
    time: "04:00 PM",
    text: "You sleep through the entire day. Your alarm has officially resigned. Somewhere, your homework is waiting patiently.",
    ending: "You have achieved maximum comfort and minimum productivity.",
    final: true
  }
};

const clock = document.getElementById("clock");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const sceneIcon = document.getElementById("scene-icon");
const sceneTitle = document.getElementById("scene-title");
const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");
const restartButton = document.getElementById("restart");

let scenesVisited = 0;

function showScene(sceneName) {
  const scene = scenes[sceneName];

  if (!scene) {
    storyText.textContent = "Something went wrong. Try restarting the game.";
    choices.innerHTML = "";
    return;
  }

  scenesVisited++;

  sceneIcon.textContent = scene.icon;
  sceneTitle.textContent = scene.title;
  clock.textContent = scene.time;
  storyText.textContent = scene.text;

  progress.textContent = scene.final
    ? "THE END"
    : `Scene ${scenesVisited}`;

  progressBar.style.width = scene.final
    ? "100%"
    : `${Math.min(90, scenesVisited * 12)}%`;

  choices.innerHTML = "";

  if (scene.final) {
    const ending = document.createElement("p");
    ending.className = "ending-message";
    ending.textContent = scene.ending;
    choices.appendChild(ending);

    const replayButton = document.createElement("button");
    replayButton.className = "choice-button";
    replayButton.textContent = "🔄 Try a different story";
    replayButton.addEventListener("click", restartGame);
    choices.appendChild(replayButton);

    return;
  }

  scene.choices.forEach(function(choice) {
    const button = document.createElement("button");

    button.className = "choice-button";
    button.textContent = choice.text;

    button.addEventListener("click", function() {
      showScene(choice.next);
    });

    choices.appendChild(button);
  });
}

function restartGame() {
  scenesVisited = 0;
  showScene("bedroom");
}

restartButton.addEventListener("click", restartGame);

showScene("bedroom");
