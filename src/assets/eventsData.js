import webathon from "./Events/web.jpeg"
import techexpo from "./Events/techexpo.jpeg"
import techhead  from "./Events/techhead.jpeg"
import memebuzz from "./Events/meme.jpeg"

export const eventsData = [
  {
    id: 1,
    image: webathon,
    name: "WEB-A-THON",
    description:
      "A web dev based 5 hrs event. Individual Participation. Build Frontend and Backend based on the Problem Statement Given to you.",
    rules: [
      " ---GENERAL RULES--- ",
      "Eligibility: Individual participation; prior registration required.",
      "Code of Conduct: Ethical practices mandatory; cheating or plagiarism leads to disqualification.",
      "Allowed Tools: Use Codeium, Cursor, Google, and StackOverflow. Direct Al code generation is prohibited.",
      "Submission: Round 2 projects must be uploaded to GitHub with a shared repository link.",
      "Originality: Projects must be created from scratch during the event. Pre-existing work is disallowed.",
       " ",
      " ---Round 1: Quiz Round---",
      "Format: Three web development questions; all must be answered correctly to advance.",
      "Topics: HTML, CSS, JavaScript fundamentals, frameworks, and problem-solving.",
      "Prohibited: Sharing answers and using Al-generated responses.",
      " ",
      " ---Round 2: Development Round---",
      "Format: Build a website based on a provided problem statement within [time limit].",
      "Submission: Upload to GitHub with a README.md including project description and setup instructions.",
      "Evaluation: Judged on functionality, design, code quality, innovation, and timely submission.",
      "Prohibited: Al-generated code, collaboration, or using pre-existing templates.",
    ],
    prizes: ["Certificate for winners","E-Certificate of Participation"],
    team: "Individuals",
    contactInfo: [
      "Sachinkumar Nishad : 7738205133",
    ],
    location: "Computer-Lab",
    date: "17th Jan 2025",
    note: [
      "Individual participation; prior registration required.",
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf4IBy-err3q23gso80J2rst6_3uAjSwSiIZvxzRCgMSfcgOg/viewform",
  },
  {
    id: 2,
    image: techexpo,
    name: "TechExpo",
    description:[
      "Project Exhibition . Project should be based on Hardware or Software. Team size 2-5 members."
    ],
    rules: [
      " ---General Rules---",
      " Objective: Showcase and explain innovative IT/CS projects to an audience and judges.",
      " Team Size: 2-4 students per team; cross-class collaboration not allowed.",
      " Unique Projects: Projects must be original and not previously showcased.",
      " ",
      " ---Registration Rules---",
      " Deadline: Register by the given deadline; late registrations are not accepted.",
      " Details: Submit project title, abstract (100-200 words), team member list, and roles.",
      " Prototype: Submit a functional prototype for validation one week before the event.",
      " Approval: Only approved prototypes can participate.",
      " ",
      " ---Exhibition Rules---",
      " Setup: Teams get a booth/stall; additional hardware/software arrangements are the team's responsibility.",
      " Presentation: Prepare a 5-minute oral presentation and Q&A session. Visual aids like posters or demo videos encouraged.",
      " Professionalism: Teams must remain at their booths and interact professionally.",
      " ",
      " ---Project Guidelines---",
      " Originality: Projects must be original; plagiarism or prebuilt solutions lead to disqualification.",
      " Technology: Any programming language, framework, or technology is allowed.",
      " Innovation: Projects should showcase creativity and real-world applicability.",
      " Functionality: Prototypes must demonstrate core features, even if incomplete.",
      " ",
      " ---Submission and Approval---",
      " Prototype: Submit a functional prototype with documentation (overview, tech stack, features, and roadmap).",
      " Deadline: Prototypes must be submitted by the deadline; late submissions lead to disqualification.",
      " Validation: Projects are reviewed for alignment with event objectives.",
      " ",
      " ---Judging Criteria---",
      "1. Innovation & Creativity: 30%",
      "2. Real-World Applicability: 25%",
      "3. Prototype Functionality: 20%",
      "4. Presentation Quality: 15%",
      "5. Team Collaboration: 10%",
      " ",
      " ---Disqualification---",
      " Plagiarized or prebuilt projects.",
      " Late or incomplete prototype submissions.",
      " Repeated projects or unprofessional behavior.",
      " ",
      " ---Event Day Guidelines---",
      " Booths: Assigned on a first-come, first-served basis.",
      " Timing: Arrive 30 minutes early for setup.",
      " Cleanliness: Maintain booth cleanliness.",
      " Power Backup: Ensure backup plans for hardware requiring power."

    ],
    prizes: ["Certificate for winners","E-Certificate of Participation"],
    team: "4-5 members",
    contactInfo: [
      "Ragini Kanojiya : 8356880936",
    ],
    location: "Coridor (1st floor)",
    date: "17th Jan 2025",
    note: [
      "Project Changes: Allowed only until the prototype submission deadline.",
      "Incomplete Prototypes: Acceptable if core ideas are demonstrated.",
      "External Guidance: Allowed, but the majority of work must be team-led.",
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfu8g1QaiBaLzgeInDKQ2P3XscREgzQnR-k869TWhSJaiiZ4w/viewform",
  },
  {
    id: 3,
    image: techhead,
    name: "TECH HEAD",
    description:
    "Quiz Competition. Team Size 4-5 Members",
    rules: [
      " ---General Rules---",
      "Objective: A technical quiz to test knowledge in IT/CS and related fields.",
      "Team Size: 4-5 students; cross-department teams are not allowed.",
      "Format: Two rounds:",
      "    1. Round 1: Academic quiz (easy to medium difficulty).",
      "    2. Round 2: Competitive quiz (medium to hard difficulty).",
      " ",
      " ---Round 1: Academic Quiz---",
      "Questions: 5 questions per team, covering IT/CS, mathematics, and logic.",
      "Turn System: Teams take turns answering; unanswered questions are passed to the next team.",
      "Scoring:",
      "     Correct answer: +10 points.",
      "     Bonus: +5 points for correctly answering a passed question.",
      "Advancement: Top-scoring teams move to Round 2; ties resolved via sudden-death questions.",
      " ",
      " ---Round 2: Competitive Quiz---",
      "Format: Knockout matches between teams, with 5 questions per match.",
      "Rules:",
      "     Both teams answer the same questions.",
      "     Team captain submits final answers.",
      "Scoring:",
      "     Correct answer: +10 points.",
      "     Team with the most correct answers in the least time wins.",
      "Tiebreaker: A single high-difficulty question with a 15-second limit.",
      " ",
      " ---Rules for Both Rounds---",
      "Conduct: Maintain silence and avoid cheating; violations lead to disqualification.",
      "Time Limits:",
      "     Round 1: 20 seconds per question.",
      "     Round 2: Total time for all questions recorded.",
      "Question Types: Multiple-choice, short answers, or problem-solving.",
      "Authority: The quizmaster's decisions are final.",
      " ",
      " ---Tiebreaker Rules---",
      "Round 1: Sudden-death format; first correct answer wins.",
      "Round 2: A high-difficulty question determines the winner.",
      " ",
      " ---Additional Guidelines---",
      "Registration: Teams must register with a unique name before the deadline.",
      "Preparation: Focus on IT/CS syllabus and core topics.",
      "Equipment: Provided by organizers; no electronic devices allowed.",
    ],
    prizes: ["Certificate for winners","E-Certificate of Participation"],
    team: "4-5 members",
    contactInfo: [
      "Yash Verma : 8104881046",
    ],
    location: "Classroom ",
    date: "17th Jan 2025",
    note: [
      "Unanswered Questions in Round 1: Skipped, no points awarded.",
      "Team Member Replacement: Not allowed mid-competition.",
      "Time Tracking in Round 2: Stopwatch used from question distribution to submission.",
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd_pAReVBotGhmAu46oq7GwtSmJpsxkDp8HsCo_ynrkI0acEQ/viewform",
  },
  {
    id: 4,
    image: memebuzz,
    name: "Meme-Buzz",
    description:
      " A thrilling battle of wit and creativity where tech-savvy minds craft hilarious IT/CS-themed memes to win hearts, laughs, and ultimate glory!",
    rules: [
      " ---General Rules---",
      "1. Participation: Individual event; each participant submits their own original meme.",
      "2. Theme: Memes must focus on IT/CS topics (e.g., programming, debugging, tech culture).",
      "3. Submission Deadline: Memes must be submitted 30 minutes before the event starts. Late submissions will not be accepted.",
      "4. Voting Platform: Memes will be posted in the SDV College Students' WhatsApp group for voting.",
      " ",
      " ---Meme Guidelines---",
      "1. Originality: Memes must be original; plagiarism results in disqualification.",
      "2. Content Ethics:",
      "     No offensive, discriminatory, or inappropriate content.",
      "     Must be humorous and in good taste.",
      "3. Format: Submit memes in JPEG/PNG format with legible captions, if applicable.",
      "4. Language: Memes must be in English.",
      " ",
      " ---Voting and Judging---",
      "1. WhatsApp Voting:",
      "      Memes are posted in the WhatsApp group.",
      "      Reactions (likes, loves, laughs) count as votes.",
      "2. Voting Duration: Open for a specified time (e.g., 1 hour); duration announced before the event.",
      "3. Winner Selection:",
      "      Meme with the most reactions wins.",
      "      Ties are resolved by coordinators based on creativity and theme relevance.",
      " ",
      " ---Disqualification Criteria---",
      "1. Submitting plagiarized or offensive content.",
      "2. Missing the submission deadline.",
      "3. Unethical voting practices (e.g., using bots or external groups).",
    ],
    prizes: ["Certificate for winners","E-Certificate of Participation"],
    team: "Individuals",
    contactInfo: [
      "Pavan Das : 7900167374",
    ],
    location: "Online : College Whatsapp Group",
    date: "17th Jan 2025",
    note: [
      "1. Promotion: Self-promotion for votes is allowed but must remain ethical (no spamming or coercion).",
      "2. Organizer’s Rights: Coordinators can disqualify participants for unethical behavior or rule violations.",
      "3. Queries: Contact the event coordinator for clarifications before the deadline.",
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf3BiPdvYligJWQ_IvZoToEoM5kjHvo5n2TARO_f49VjpzDKQ/viewform",
  },
];
