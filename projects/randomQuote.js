const genrateBtn = document.querySelector(".js-genrate-Btn");
const display = document.querySelector(".display");

const quotes = [
  "Believe you can and you're halfway there.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream it. Believe it. Build it.",
  "Action is the foundational key to all success.",
  "Your only limit is your mind.",
  "If it doesn’t challenge you, it won’t change you.",
  "Be stronger than your excuses.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "Don’t watch the clock; do what it does. Keep going.",
  "A goal without a plan is just a wish.",
  "Believe in yourself and all that you are.",
  "It always seems impossible until it’s done.",
  "Success is not for the lazy.",
  "Work hard in silence. Let success make the noise.",
  "Focus on your goal. Don’t look in any direction but ahead.",
  "Your dreams don’t work unless you do.",
  "You don’t find willpower, you create it.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "Start where you are. Use what you have. Do what you can.",
  "The best way to get started is to quit talking and begin doing.",
  "Don’t limit your challenges. Challenge your limits.",
  "There is no substitute for hard work.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "You miss 100% of the shots you don’t take.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The only way to do great work is to love what you do.",
  "Stay positive. Work hard. Make it happen.",
  "Don’t be afraid to give up the good to go for the great.",
  "You are capable of more than you know.",
  "You are never too old to set another goal or to dream a new dream.",
  "Hard work beats talent when talent doesn’t work hard.",
  "If you can dream it, you can do it.",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
  "If you're going through hell, keep going.",
  "Act as if what you do makes a difference. It does.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Opportunities don't happen. You create them.",
  "Try not to become a man of success. Rather become a man of value.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Work until your idols become your rivals.",
  "The secret of getting ahead is getting started.",
  "Success is what comes after you stop making excuses.",
  "Be so good they can’t ignore you.",
  "Chase your passion, not your pension.",
  "Don’t count the days. Make the days count.",
  "Do it with passion or not at all.",
  "You can if you think you can.",
  "Big journeys begin with small steps.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Start each day with a positive thought and a grateful heart.",
  "Never give up. Great things take time.",
  "You only fail when you stop trying.",
  "Don't dream about success. Work for it.",
  "Push through the pain. One day it will be worth it.",
  "Difficult roads often lead to beautiful destinations.",
  "Make each day your masterpiece.",
  "Success is the sum of small efforts repeated day in and day out.",
  "A little progress each day adds up to big results.",
  "Strive for progress, not perfection.",
  "Don't stop until you're proud.",
  "The future depends on what you do today.",
  "Focus on being productive instead of busy.",
  "Work hard. Stay humble.",
  "Do what you have to do until you can do what you want to do.",
  "Go the extra mile. It's never crowded.",
  "Don’t decrease the goal. Increase the effort.",
  "You didn’t come this far to only come this far.",
  "Success is not in what you have, but who you are.",
  "Be a warrior, not a worrier.",
  "Don’t tell people your plans. Show them your results.",
  "Let your dreams be bigger than your fears.",
  "Winners are not afraid of losing. But losers are.",
  "Stay hungry. Stay foolish.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Nothing will work unless you do.",
  "You’ve got what it takes, but it will take everything you’ve got.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "Don’t raise your voice, improve your argument.",
  "Consistency is what transforms average into excellence.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Motivation gets you going, but discipline keeps you growing.",
  "Success is not for the chosen few but for the few who choose it.",
  "Effort is the currency of success.",
  "The best view comes after the hardest climb.",
  "Action cures fear.",
  "Turn your wounds into wisdom.",
  "Stay focused and never give up.",
  "If You want you can win",
  "Nothing is impossible to him who will try",
  "The magic you are looking for is in the work you are avoiding",
  "I Tried so hard to be able to say whatever i want",
  "I Think i am out of quotes lolll"
];



genrateBtn.addEventListener("click", () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    display.textContent = quotes[randomQuote]
});