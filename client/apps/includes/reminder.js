/**
 * Reminder template helpers and event handlers.
 */

// reminder is a closure we call to generate a random reminder.
var reminder = (function(){

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
  }

  function pickReminder(array) {
    return array[getRandomInt(array.length)];
  }

  var reminders = [
    "Process – Work as slow as possible. Focus on the process, not the result. Don't rush, there is no where to get to. There is only the present moment.",
    "Presence – The quality of having one's entire mind and awareness in the present: not letting one's energy go into the unknowable future or the dead past. The goal is to stay in the present, every moment you do so, you are successful.",
    "Action is everything. There is no tomorrow, only now. What will you do now? Keep moving forward. If you are moving, you are succeeding. Just do something. Do more than plan.",
    "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender that is strength.",
    "So! → It is transient. Everything is transient. This too will pass.",
    "Acceptance and non-resistance → Don't look for peace. Don't look for any other state than the one you are in now, otherwise you set up inner conflict and unconscious resistance. Forgive yourself for not being at peace. Accept your current state. Be at peace with whatever you are feeling. The moment you completely accept your non-peace, your non-peace becomes transmuted into peace.",
    "Be still and know that you are god.",
    "Don't seek the truth. Just cease to cherish opinions.",
    "Lean into the struggle.",
    "Wherever you are, whatever you are doing, that is your purpose.",
    "Don't wait for ideal circumstances → You will be waiting forever.",
    "Faith → Faith is the act of letting go.",
    "Feelings follow actions → Act like you want to feel. If you want to feel focused and energetic, act like it. Start working.",
    "There are no problems here and now. There is no regret and remorse, that is the past. There is no worry or anxiety, that is the future.",
    "Don't seek to become free of desire or achieve enlightenment. Become present. Be there as the observer of the mind. Instead of quoting the Buddha, be the Buddha.",
    "Create no more pain in the present → Pain still occurs from past thoughts/actions, that is unavoidable, but you can avoid creating more.",
    "\"You will be civilized on the day you can spend a long period doing nothing, learning nothing, and improving nothing, without feeling the slightest amount of guilt.\" - Nassim Nicholas Taleb",
    "You are not your thoughts → Try to imagine your mind as a sky, and your thoughts as clouds passing by. Just as new clouds are always floating through the sky, different thoughts float through your mind. Like clouds, our thoughts are never static. They come into view, they change shape, they leave our view.",
    "View Stress response as helpful → That pounding heart is upping blood flow and fast breathing is upping oxygen to prepare you for action.",
    "\"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.\"",
    "Breathe",
    "Every event that befalls me is the best possible event that could occur.",
    "There is nothing good or bad, but thinking makes it so.",
    "Focus on the positive, for what you focus on increases.",
    "This too will pass.",
    "It hurts less when you laugh.",
    "When there is nothing to do, do nothing.",
    "You can find peace anywhere, don't go looking for the tortoise with a moustache.",
    "Pushing the wheelbarrow is easy, thinking about pushing the wheelbarrow is hard.",
    "What is the most important Time? Who is the most important Person? What is the most important thing to do?",
    "Let your ears hear what they want to hear, let your mind think what it wants to think, let your feet walk where they want to walk.",
    "Don't rush, there is no where to get to.",
    "Presence - the quality of having one’s entire mind and awareness in the present: being with someone, completely, not letting one’s energy go into the unknowable future or the dead past.",
    "Peace – you can find peace anywhere. You don't go searching for peace, you stop moving, and it finds you. Let go of the past, forgive, don't worry about the future. Make peace with what you have to do and put fun in it.",
    "Eight Worldly Winds – pleasure and pain, praise and blame, gain and loss, fame and ill repute. The greater your equanimity, the less the effect these winds have on your mind. Your happiness becomes increasingly unconditional, not based on catching a good breeze instead of a bad one.",
    "Acceptance and non-resistance → Don't look for peace. Don't look for any other state than the one you are in now, otherwise you set up inner conflict and unconscious resistance. Forgive yourself for not being at peace. Accept your current state. The moment you completely accept your non-peace, your non-peace becomes transmuted into peace.",
    "See things as they are → Much suffering comes from seeing things as you think they should be instead of how they are.",
    "Accept everything just the way it is.",
    "Think lightly of yourself and deeply of the world.",
    "In all things have no preferences.",
    "Don't long for a life free from hardship-such a life leads only to haughtiness and self-pampering. Make worries and hardships a way of life.",
    "Don't hope for a lack of impediments in your study. Release is hiding right behind obstructions.",
    "Don’t hope for a lack of temptations in your training. A lack of temptations will only serve to soften your resolve. Treat temptations as friends who are helping you along the path",
    "Don’t hope for easy success. Easy accomplishment leads only to increased rashness. Accomplish through difficulties",
    "Don’t expect rewards for your kindnesses. This leads only to a scheming mind. Throw out expectation of rewards like you’d thrown out old shoes",
    "Don’t complain about vexations. This leads only to resentment and poison in the heart. Consider vexations as the first door on the path",
    "Agility - 1. Find out where you are. 2. Take a small step towards your goal. 3. Adjust based on what you learned. 4. Repeat",
    "Practice breathing. Tai Chi is about oxygenation.",
    "Anything worth doing is worth doing well.",
    "Lean into the struggle. (enjoy it)",
    "Get comfortable with discomfort",
    "On emotions - You can't control the waves, but you can learn how to surf",
    "Use your emotions. Channel them. Don't suppress them. You can't rely on an ideal state of mind in each moment, you will feel stress, pain, anger at times. You can funnel those feelings.",
    "Those things that make you uncomfortable, that is where you can grow.",
    "Learn to swim.",
    "Trade your expectations for appreciation and the world changes instantly.",


  ];

  return function create () {
    return pickReminder(reminders);
  };
})();


Template.reminder.helpers({
  reminder: reminder()
});

Template.reminder.events({
  'click .reminder' : function(e) {
    $(e.target).text(reminder());
  }
});