interface Profession {
  title: string;
  displacementDate: string; // ISO date string
  likelihood: number;
  skills: string[];
  aiImpact: string;
  futureCareers: string[];
  memePhrase: string;
}

export const professions: Record<string, Profession> = {
  "software-developer": {
    title: "Software Developer",
    displacementDate: "2039-01-01T00:00:00Z",
    likelihood: 0.4,
    skills: ["Problem Solving", "Creativity", "System Design", "Communication"],
    aiImpact: "AI will likely augment rather than replace, focusing on code generation and debugging",
    futureCareers: ["AI Prompt Engineer", "Robot Psychologist", "Digital Ethics Officer"],
    memePhrase: "Even the code monkeys aren't safe anymore!"
  },
  "doctor": {
    title: "Medical Doctor",
    displacementDate: "2049-01-01T00:00:00Z",
    likelihood: 0.3,
    skills: ["Clinical Judgment", "Empathy", "Decision Making", "Patient Care"],
    aiImpact: "AI will enhance diagnostics but human touch remains crucial",
    futureCareers: ["AI Medical Supervisor", "Human-Robot Healthcare Coordinator", "Biotech Ethics Consultant"],
    memePhrase: "Time to update your prescription... to a new career!"
  },
  "teacher": {
    title: "Teacher",
    displacementDate: "2044-01-01T00:00:00Z",
    likelihood: 0.35,
    skills: ["Communication", "Adaptability", "Emotional Intelligence", "Leadership"],
    aiImpact: "AI will provide personalized learning support while teachers focus on mentorship",
    futureCareers: ["AI-Human Learning Bridge", "Virtual Reality Education Designer", "Student Emotional Support Specialist"],
    memePhrase: "Looks like AI is about to give you a lesson!"
  },
  "accountant": {
    title: "Accountant",
    displacementDate: "2032-01-01T00:00:00Z",
    likelihood: 0.75,
    skills: ["Analysis", "Attention to Detail", "Problem Solving", "Regulatory Knowledge"],
    aiImpact: "High risk of automation for routine tasks, advisory roles will persist",
    futureCareers: ["AI Financial Interpreter", "Cryptocurrency Specialist", "Digital Transaction Ethicist"],
    memePhrase: "Time to balance your career books!"
  },
  "designer": {
    title: "Designer",
    displacementDate: "2036-01-01T00:00:00Z",
    likelihood: 0.45,
    skills: ["Creativity", "Visual Thinking", "User Empathy", "Technical Skills"],
    aiImpact: "AI will become a powerful design tool but human creativity remains essential",
    futureCareers: ["AI-Human Design Collaborator", "Neural Art Director", "Experience Emotion Designer"],
    memePhrase: "Even Picasso would be sweating now!"
  },
  "truck_driver": {
    title: "Truck Driver",
    displacementDate: "2026-07-01T00:00:00Z",
    likelihood: 0.85,
    skills: ["Navigation", "Vehicle Maintenance", "Logistics", "Spatial Awareness", "Time Management"],
    aiImpact: "Autonomous vehicles will largely displace long-haul trucking, short-haul and specialized transport may persist longer.",
    futureCareers: ["Autonomous Fleet Manager", "Drone Delivery Coordinator", "Remote Vehicle Technician"],
    memePhrase: "Keep on truckin'... to a new job, that is!"
  },
  "data_entry_clerk": {
    title: "Data Entry Clerk",
    displacementDate: "2025-01-01T00:00:00Z",
    likelihood: 0.98,
    skills: ["Typing Speed", "Accuracy", "Data Management", "Attention to Detail", "Basic Computer Skills"],
    aiImpact: "Highly susceptible to automation through OCR and AI-powered data processing.",
    futureCareers: ["Data Quality Assurance Specialist", "AI Training Data Curator", "Information Governance Officer"],
    memePhrase: "CTRL+ALT+DEL your career!"
  },
  "customer_service_representative": {
    title: "Customer Service Representative",
    displacementDate: "2027-03-15T00:00:00Z",
    likelihood: 0.70,
    skills: ["Communication", "Problem Solving", "Empathy", "Patience", "Product Knowledge"],
    aiImpact: "AI-powered chatbots will handle routine inquiries, complex issues will require human agents.",
    futureCareers: ["AI Chatbot Trainer", "Customer Experience Strategist", "Human-AI Support Liaison"],
    memePhrase: "The customer is always right... even if it's a robot!"
  },
    "chef": {
    title: "Chef",
    displacementDate: "2030-01-15T00:00:00Z",
    likelihood: 0.4,
    skills: ["Creativity","Culinary Expertise", "Taste and Smell Sensory", "Team Leadership", "Menu Planning" ],
    aiImpact: "AI may help with recipe generation, kitchen management and automated cooking devices.  The Art of high end cousine will be safe for now.",
    futureCareers: ["Personalized Nutrition Planner", "Food AI interface specialist", "AI-Assisted Culinary Educator"],
    memePhrase: "Things are really heating up in the job market!"
  },
  "radiologist": {
    title: "Radiologist",
    displacementDate: "2028-05-01T00:00:00Z",
    likelihood: 0.8,
    skills: ["Image Interpretation", "Medical Knowledge", "Attention to Detail", "Diagnostic Reasoning", "Communication with Physicians"],
    aiImpact: "AI-powered image analysis will significantly improve speed and accuracy of diagnosis, reducing demand for human radiologists.",
    futureCareers: ["AI Radiology Algorithm Validator", "Medical Imaging AI Trainer", "Advanced Diagnostics Consultant"],
    memePhrase: "Looks like your career just got X-rayed... and it's not looking good!"
  },
  "construction_worker": {
    title: "Construction Worker",
    displacementDate: "2029-11-01T00:00:00Z",
    likelihood: 0.55,
    skills: ["Physical Strength", "Manual Dexterity", "Tool Operation", "Teamwork", "Blueprint Reading"],
    aiImpact: "Robotics and automation will impact various construction tasks, but skilled trades and complex projects will still require human workers.",
    futureCareers: ["Robot Construction Supervisor", "3D-Printed Building Specialist", "Construction Technology Integrator"],
    memePhrase: "Looks like the robots are laying the foundation... for your unemployment!"
  },
  "financial_analyst": {
    title: "Financial Analyst",
    displacementDate: "2027-09-01T00:00:00Z",
    likelihood: 0.65,
    skills: ["Financial Modeling", "Data Analysis", "Market Research", "Investment Strategy", "Risk Assessment"],
    aiImpact: "AI will automate data analysis and reporting, but high-level strategic decision-making and client interaction will remain.",
    futureCareers: ["AI-Driven Investment Strategist", "Algorithmic Trading Oversight", "Financial AI Ethics Advisor"],
    memePhrase: "Your career forecast: cloudy with a chance of automation."
  },
    "lawyer": {
    title: "Lawyer",
    displacementDate: "2029-03-15T00:00:00Z",
    likelihood: 0.6,
    skills: ["Legal Research", "Critical Thinking", "Negotiation", "Advocacy", "Communication"],
    aiImpact: "AI can handle document review, legal research, and contract analysis. Human lawyers will concentrate on strategy, litigation, and client relationships.",
    futureCareers: ["AI Legal Research Specialist","AI-Assisted Litigation Strategist", "Legal Technology Consultant"],
    memePhrase: "Objection! AI is taking over the courtroom!"
  },
    "paralegal":{
    title: "Paralegal",
    displacementDate: "2026-11-15T00:00:00Z",
    likelihood: 0.9,
    skills: ["Legal Document Preparation","Filing Documents with Courts", "Legal Research", "Fact Checking"],
    aiImpact: "Due to AI taking over large parts of legal research and document preperation, paralegal work will be largely automated.",
    futureCareers: ["Legal AI Prompt Engineer", "Court System AI Liason", "AI Legal Tool Trainer"],
    memePhrase: "Your assistance is no longer required."
    },
  "retail_salesperson": {
    title: "Retail Salesperson",
    displacementDate: "2026-03-01T00:00:00Z",
    likelihood: 0.75,
    skills: ["Customer Service", "Product Knowledge", "Sales Techniques", "Communication", "Cash Handling"],
    aiImpact: "Self-checkout kiosks, online shopping, and AI-powered recommendation systems will reduce the need for in-store sales staff.",
    futureCareers: ["Virtual Shopping Assistant", "Personalized Retail Experience Designer", "E-commerce Customer Support Specialist"],
    memePhrase: "Looks like your career is on sale... for 100% off!"
  },
  "cashier": {
    title: "Cashier",
    displacementDate: "2025-09-01T00:00:00Z",
    likelihood: 0.90,
    skills: ["Cash Handling", "Customer Service", "Basic Math", "POS System Operation", "Speed and Accuracy"],
    aiImpact: "Self-checkout and automated payment systems are rapidly replacing traditional cashier roles.",
    futureCareers: ["Checkout Technology Support Technician", "Customer Self-Service Facilitator", "Retail Automation Specialist"],
    memePhrase: "Change is coming... and it's not in your favor!"
  },
  "food_service_worker": {
    title: "Food Service Worker",
    displacementDate: "2027-01-01T00:00:00Z",
    likelihood: 0.60,
    skills: ["Food Preparation", "Customer Service", "Speed and Efficiency", "Teamwork", "Basic Cooking Skills"],
    aiImpact: "Automated food preparation, ordering kiosks, and delivery robots will impact fast food and casual dining.",
    futureCareers: ["Robotic Kitchen Technician", "Automated Food Service Manager", "Food Delivery Optimization Specialist"],
    memePhrase: "Order up! A new career, that is."
  },
  "office_administrator": {
    title: "Office Administrator",
    displacementDate: "2026-11-01T00:00:00Z",
    likelihood: 0.70,
    skills: ["Organization", "Communication", "Scheduling", "Record Keeping", "Customer Service"],
    aiImpact: "AI-powered scheduling, communication tools, and data management systems will automate many administrative tasks.",
    futureCareers: ["Virtual Office Manager", "AI-Assisted Administrative Specialist", "Workplace Technology Coordinator"],
    memePhrase: "Your office duties are being... outsourced to the cloud."
  },
  "janitor_cleaner": {
    title: "Janitor/Cleaner",
    displacementDate: "2028-08-01T00:00:00Z",
    likelihood: 0.45,
    skills: ["Cleaning Techniques", "Physical Stamina", "Time Management", "Attention to Detail", "Use of Cleaning Equipment"],
    aiImpact: "Cleaning robots will handle routine tasks, but specialized cleaning and human oversight will still be needed.",
    futureCareers: ["Robotic Cleaning Supervisor", "Hygiene Technology Specialist", "Sanitation Optimization Consultant"],
    memePhrase: "Time to clean up your resume!"
  },
   "nurse": {
    title: "Registered Nurse",
    displacementDate: "2032-05-15T00:00:00Z",
    likelihood: 0.30,
    skills: ["Patient Care", "Medical Knowledge", "Critical Thinking", "Communication", "Empathy"],
    aiImpact: "AI will assist with diagnostics, monitoring, and medication dispensing, but the human element of care remains crucial.",
    futureCareers: ["AI-Assisted Nursing Specialist", "Remote Patient Monitoring Coordinator", "Human-Robot Healthcare Team Leader"],
    memePhrase: "The prognosis for your career? A healthy dose of adaptation!"
  },
  "teacher_assistant": {
    title: "Teacher's Assistant",
    displacementDate: "2028-01-01T00:00:00Z",
    likelihood: 0.5,
    skills: ["Classroom Support", "Student Supervision", "Instructional Assistance", "Communication", "Patience"],
    aiImpact: "AI-powered learning tools may reduce the need for some support staff, but personalized attention will still be valued.",
    futureCareers: ["AI-Integrated Learning Facilitator", "Student Well-being Coach", "Personalized Learning Support Specialist"],
    memePhrase: "Looks like you're getting a lesson in career change."
  },
  "hair_stylist_barber": {
    title: "Hair Stylist/Barber",
    displacementDate: "2035-07-01T00:00:00Z",
    likelihood: 0.20,
    skills: ["Hair Cutting and Styling", "Customer Service", "Creativity", "Communication", "Manual Dexterity"],
    aiImpact: "While AI and robotics might assist with basic tasks, the artistry and personal interaction of hairstyling are difficult to replicate.",
    futureCareers: ["Personalized Style Consultant", "Virtual Hair Design Advisor", "Advanced Hair Technology Specialist"],
    memePhrase: "Time for a career makeover!"
  },
  "social_media_influencer": {
    title: "Social Media Influencer",
    displacementDate: "2027-06-01T00:00:00Z",
    likelihood: 0.55,
    skills: ["Content Creation", "Audience Engagement", "Marketing", "Trend Awareness", "Communication"],
    aiImpact: "AI-generated content and virtual influencers will increase competition, but authentic connection and niche expertise will remain valuable.",
    futureCareers: ["AI-Human Collaboration Influencer", "Virtual Influencer Manager", "Authenticity Consultant"],
    memePhrase: "Your follower count might be going down... along with your job prospects."
  },
  "garbage_collector": {
    title: "Garbage Collector",
    displacementDate: "2029-04-01T00:00:00Z",
    likelihood: 0.40,
    skills: ["Physical Strength", "Route Navigation", "Equipment Operation", "Teamwork", "Safety Awareness"],
    aiImpact: "Automated waste collection systems and robotic sorting will impact some roles, but specialized waste handling and route optimization will still be needed.",
    futureCareers: ["Waste Management Robotics Technician", "Sustainable Waste Solutions Specialist", "Recycling Optimization Engineer"],
    memePhrase: "Your career is about to be... taken out with the trash."
  },
    "athlete":{
      title: "Professional Athlete",
      displacementDate: "2038-05-15T00:00:00Z",
      likelihood: 0.25,
      skills: ["Physical Prowess","Strategy", "Teamwork","Mental Fortitude", "Hand-Eye Coordination"],
      aiImpact: "AI will be able to enhance training, strategy and find ways to improve physical performance, the actual game will still require a human element.",
      futureCareers: ["AI-Assisted Coaching", "Sports Data Analyst", "eSports Athlete"],
      memePhrase: "AI is playing the long game, and winning."
    },
    "musician":{
      title:"Musician",
      displacementDate: "2031-06-01T00:00:00Z",
      likelihood: 0.45,
      skills: ["Musical Talent", "Creativity", "Performance Skills", "Discipline", "Collaboration"],
      aiImpact: "AI can now compose, produce and even perform music, but human element and live performances will hold value, particularly in niche areas",
      futureCareers: ["AI Music Collaboration", "AI-Assisted Music Teacher", "Music Algorithim Designer"],
      memePhrase: "Looks like AI is singing your swan song."
    },
      "therapist":{
        title: "Therapist/Psychologist",
        displacementDate: "2040-01-15T00:00:00Z",
        likelihood: 0.15,
        skills: ["Empathy", "Active Listening", "Communication", "Problem-Solving", "Psychological Knowledge"],
        aiImpact: "AI therapy bots can provide basic support and mental exercises, the human connection will remain, with the possibility of oversight roles",
        futureCareers: ["AI-Therapy Hybrid Practicioner", "AI Mental Health Consultant", "Emotional AI Designer"],
        memePhrase: "How does AI make you feel? ...Unemployed?"
      },
	"writer_journalist": {
		title: "Writer/Journalist",
		displacementDate: "2027-04-15T00:00:00Z",
		likelihood: 0.6,
		skills: ["Writing", "Research", "Interviewing", "Storytelling", "Communication"],
		aiImpact: "AI can generate news reports, articles, and creative content, but investigative journalism, nuanced writing, and editorial judgment still need humans.",
		futureCareers: ["AI-Assisted Content Creator", "Fact-Checker/AI Content Verifier", "Investigative Journalist (AI-resistant niche)"],
		memePhrase: "Your career is being... rewritten by AI."
  }
};