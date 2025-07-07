import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const keywordQuotes = {
  'success': [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The secret of success is to do the common thing uncommonly well."
  ],
  'motivation': [
    "Motivation is what gets you started. Habit is what keeps you going.",
    "People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily.",
    "The only limit to our realization of tomorrow is our doubts of today."
  ],
  'dream': [
    "All our dreams can come true, if we have the courage to pursue them.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Dream big and dare to fail."
  ],
  'goal': [
    "Setting goals is the first step in turning the invisible into the visible.",
    "A goal properly set is halfway reached.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals."
  ],
  'happiness': [
    "Happiness is not something ready made. It comes from your own actions.",
    "The happiest people don't have the best of everything, they make the best of everything.",
    "Happiness is when what you think, what you say, and what you do are in harmony."
  ],
  'life': [
    "Life is what happens when you're busy making other plans.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Life is either a daring adventure or nothing at all."
  ],
  'work': [
    "Choose a job you love, and you will never have to work a day in your life.",
    "Work hard in silence, let your success be your noise.",
    "The only way to do great work is to love what you do."
  ],
  'time': [
    "Lost time is never found again.",
    "The key is in not spending time, but in investing it.",
    "Time you enjoy wasting is not wasted time."
  ],
  'change': [
    "Change your thoughts and you change your world.",
    "Progress is impossible without change.",
    "Be the change that you wish to see in the world."
  ],
  'confidence': [
    "With confidence, you have won before you have started.",
    "Confidence comes not from always being right but from not fearing to be wrong.",
    "Believe you can and you're halfway there."
  ],
  'fear': [
    "The only thing we have to fear is fear itself.",
    "Do the thing you fear and the death of fear is certain.",
    "Fear is only as deep as the mind allows."
  ],
  'failure': [
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Failure is the condiment that gives success its flavor."
  ],
  'friendship': [
    "A real friend is one who walks in when the rest of the world walks out.",
    "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    "True friendship comes when the silence between two people is comfortable."
  ],
  'learning': [
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Learning is a treasure that will follow its owner everywhere."
  ],
  'love': [
    "Where there is love there is life.",
    "The best thing to hold onto in life is each other.",
    "Love is composed of a single soul inhabiting two bodies."
  ],
  'money': [
    "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    "It's not how much money you make, but how much money you keep.",
    "Formal education will make you a living; self-education will make you a fortune."
  ],
  'opportunity': [
    "Opportunities don't happen. You create them.",
    "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.",
    "In the middle of difficulty lies opportunity."
  ],
  'passion': [
    "Passion is energy. Feel the power that comes from focusing on what excites you.",
    "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.",
    "Follow your passion, be prepared to work hard and sacrifice, and, above all, don't let anyone limit your dreams."
  ],
  'persistence': [
    "Energy and persistence conquer all things.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Persistence can change failure into extraordinary achievement."
  ],
  'positive': [
    "Keep your face always toward the sunshine - and shadows will fall behind you.",
    "Positive anything is better than negative nothing.",
    "The only time you fail is when you fall down and stay down."
  ]
};

app.post('/api/quote', async (req, res) => {
  try {
    const { keyword } = req.body;
    if (!keyword) {
      return res.status(400).json({ error: "Keyword is required" });
    }

    const lowerKeyword = keyword.toLowerCase();
    const quotes = keywordQuotes[lowerKeyword] || [
      "No quotes found for this topic. Try another keyword!",
      "The universe is still composing quotes for this topic.",
      "Even the wisest sages need time to ponder this topic."
    ];
    
    res.json({ quotes });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ 
      error: "Failed to generate quotes",
      details: process.env.NODE_ENV === 'development' ? err.message : null
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));