export type Testimonial = {
  id: string;
  name: string;
  city: string;
  age: number;
  rating: number;
  program: string;
  duration: string;
  quote: string;
  image: string;
};

// NOTE: portrait avatars are randomuser.me placeholders — swap for real
// patient photos once consent is captured.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Marisol R.",
    city: "Miami, FL",
    age: 47,
    rating: 5,
    program: "Weight Loss",
    duration: "4 months in",
    quote:
      "I've tried every diet. The difference here was actually having a doctor who looked at my whole picture — labs, meds, family history — and built me a plan I could keep up with. Down 32 lbs and my A1C is finally normal.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: "t2",
    name: "Carlos D.",
    city: "Hialeah, FL",
    age: 54,
    rating: 5,
    program: "Hormone Optimization",
    duration: "6 months in",
    quote:
      "Energy is back. Sleep is back. Even the gym feels like it did 10 years ago. The provider sat with me on a video call for 25 minutes — no rush, all my questions answered. That's not how my old clinic worked.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: "t3",
    name: "Jen P.",
    city: "Coral Gables, FL",
    age: 38,
    rating: 5,
    program: "Recovery",
    duration: "8 weeks in",
    quote:
      "Tennis elbow that wouldn't quit for almost a year. Within two months on the program I was back on the court. The dashboard makes it ridiculously easy — refills, messaging, everything one tap away.",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: "t4",
    name: "Rafa M.",
    city: "Doral, FL",
    age: 41,
    rating: 5,
    program: "Performance",
    duration: "3 months in",
    quote:
      "What sold me is that this is a real medical group — not some random tele-pharmacy. Same Estrella doctors my parents have seen for years. That trust matters when you're putting something in your body.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: "t5",
    name: "Lourdes G.",
    city: "Kendall, FL",
    age: 52,
    rating: 5,
    program: "Longevity",
    duration: "5 months in",
    quote:
      "They explained everything in Spanish when I needed it, English when I didn't, and never rushed me. The plan was conservative — exactly what I wanted. I feel sharper and more rested than I have in years.",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: "t6",
    name: "Andre T.",
    city: "Aventura, FL",
    age: 36,
    rating: 4,
    program: "Weight Loss",
    duration: "2 months in",
    quote:
      "Honest review: I was skeptical of online clinics. Estrella isn't that. Real provider, real follow-up, no upsells. Down 18 lbs, sleeping better, cravings basically gone.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: "t7",
    name: "Eduardo V.",
    city: "Miami Lakes, FL",
    age: 49,
    rating: 5,
    program: "Recovery",
    duration: "10 weeks in",
    quote:
      "Rotator cuff was wrecking my golf game and my sleep. The provider built a recovery plan around what I could realistically commit to. First month felt incremental — by month three the difference was undeniable.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: "t8",
    name: "Patricia C.",
    city: "Pinecrest, FL",
    age: 44,
    rating: 5,
    program: "Hormone Optimization",
    duration: "4 months in",
    quote:
      "My old clinic dismissed everything as 'just perimenopause.' Estrella ordered the right labs, sat with the numbers, and worked with me on a conservative plan. I finally feel like myself again — and my husband says it too.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "t9",
    name: "Manuel S.",
    city: "Westchester, FL",
    age: 58,
    rating: 5,
    program: "Sexual Health",
    duration: "5 months in",
    quote:
      "Discreet, fast, and the provider treated it like the medical issue it is — not a punchline. The intake felt thorough but never invasive. Marriage is better. Confidence is back.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

export const STATS = [
  { number: "12,000+", label: "Patients across our clinics" },
  { number: "24 hr", label: "Median provider response" },
  { number: "98%", label: "Would recommend Estrella" },
  { number: "30+ yrs", label: "Of medical group history" },
];

export const PRESS = [
  "Univision",
  "Telemundo",
  "Miami Herald",
  "El Nuevo Herald",
  "WPLG Local 10",
  "South Florida Business Journal",
  "NBC 6 South Florida",
];
