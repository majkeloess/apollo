const playlists = [
  {
    name: "i like the way you kiss me",
    link: "https://open.spotify.com/playlist/1V1XPfYGdI3wHtQPaqwroR?si=ecd64525554b40dd",
    genre: "Mixed",
  },
  {
    name: "planet rave",
    link: "https://open.spotify.com/playlist/37i9dQZF1DWW1XLSH8Oafp?si=3878a0d406a84dff",
    genre: "Rave",
  },
  {
    name: "Locked in",
    link: "https://open.spotify.com/playlist/37i9dQZF1DWTl4y3vgJOXW?si=2faeb6064c224e98",
    genre: "Rap",
  },
  {
    name: "Coding mode",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j?si=0d309c3d4e1144f2",
    genre: "Mixed",
  },
  {
    name: "Stress relief",
    link: "https://open.spotify.com/playlist/37i9dQZF1DWXe9gFZP0gtP?si=81c85f5aecae4502",
    genre: "Calm",
  },
  {
    name: "UwU",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX4EUmSCYymOa?si=4b806b2f47044e45",
    genre: "Mixed",
  },
  {
    name: "TECHNO/GYM HARDSTYLE EXCLUSIVE",
    link: "https://open.spotify.com/playlist/5bDWvpCz617gW8hL2Zhs9V?si=d77c75faa8844ac8",
    genre: "Hardstyle",
  },
];

const articles = [
  {
    name: "How to be successful?",
    link: "https://easique.com/how-to-be-successful#!",
    note: "25 Key Habits of Successful & Rich People",
  },
  {
    name: "Ways to Build Self Confidence",
    link: "https://easique.com/build-self-confidence",
    note: "Nobody can beat a confident man. He is admired by everyone and has the power to conquer the world. Here are actionable ways to build self-confidence.",
  },
  {
    name: "How To Be More Masculine?",
    link: "https://www.knowledgeformen.com/how-to-be-more-masculine/",
    note: "We live in a world caught between two extremes. In one breath, we eschew and vilify masculinity and traditionally “manly” virtues, labeling them as “toxic” and detrimental to society",
  },
  {
    name: "How to Be Less Socially Awkward?",
    link: "https://www.knowledgeformen.com/how-to-be-less-socially-awkward/",
    note: "Unleash the Social Genius Within",
  },
  {
    name: "How to Be a Man?",
    link: "https://www.knowledgeformen.com/what-makes-a-man/",
    note: "What Makes a Man a “Real Man”?",
  },
  {
    name: "100+ Manly Movies",
    link: "https://www.knowledgeformen.com/movies-every-man-must-watch/",
    note: "that Will Help You Become Your Best Self",
  },
  {
    name: "Sleep Tips",
    link: "https://easique.com/sleep-better",
    note: "10 Quick Steps to Sleep Better Tonight",
  },
]





const exercises = [
  {
    name: "3/4 sit-up",
    group: "Abdominals"
  },
  {
    name: "Ab Roller",
    group: "Abdominals"
  },
  {
    name: "Ab bicycle",
    group: "Abdominals"
  },
  {
    name: "Alternate Hammer Curl",
    group: "Biceps"
  },
  {
    name: "Alternate Incline Dumbbell Curl",
    group: "Biceps"
  },
  {
    name: "Alternating Deltoid Raise",
    group: "Shoulders"
  },
  {
    name: "Alternating Kettlebell Press",
    group: "Shoulders"
  },
  {
    name: "Alternating dumbbell front raise",
    group: "Shoulders"
  },
  {
    name: "Alternating dumbbell front raise",
    group: "Shoulders"
  },
  {
    name: "Alternating incline dumbbell biceps curl",
    group: "Biceps"
  },
  {
    name: "Alternating sit-through with crunch",
    group: "Middle Back"
  },
  {
    name: "Alternating standing shoulder press",
    group: "Shoulders"
  },
  {
    name: "Arms-crossed jump squat",
    group: "Quadriceps"
  },
  {
    name: "Arnold press",
    group: "Shoulders"
  },
  {
    name: "Atlas Stones",
    group: "Lower Back"
  },
  {
    name: "Axle Deadlift",
    group: "Lower Back"
  },
  {
    name: "Back extension",
    group: "Lower Back"
  },
  {
    name: "Back extension",
    group: "Lower Back"
  },
  {
    name: "Band Good Morning (Pull Through)",
    group: "Hamstrings"
  },
  {
    name: "Band Hip Adductions",
    group: "Adductors"
  },
  {
    name: "Band Skull Crusher",
    group: "Triceps"
  },
  {
    name: "Barbell Ab Rollout - On Knees",
    group: "Abdominals"
  },
  {
    name: "Barbell Bench Press - Medium Grip",
    group: "Chest"
  },
  {
    name: "Barbell Bulgarian split squat",
    group: "Quadriceps"
  },
  {
    name: "Barbell Curl",
    group: "Biceps"
  },
  {
    name: "Barbell Curls Lying Against An Incline",
    group: "Biceps"
  },
  {
    name: "Barbell Deadlift",
    group: "Hamstrings"
  },
  {
    name: "Barbell Full Squat",
    group: "Quadriceps"
  },
  {
    name: "Barbell Hip Thrust",
    group: "Glutes"
  },
  {
    name: "Barbell Incline Bench Press Medium-Grip",
    group: "Chest"
  },
  {
    name: "Barbell Shoulder Press",
    group: "Shoulders"
  },
  {
    name: "Barbell Squat",
    group: "Quadriceps"
  },
  {
    name: "Barbell back squat to box",
    group: "Quadriceps"
  },
  {
    name: "Barbell deficit deadlift",
    group: "Lower Back"
  },
  {
    name: "Barbell forward lunge",
    group: "Quadriceps"
  },
  {
    name: "Barbell front squat",
    group: "Quadriceps"
  },
  {
    name: "Barbell glute bridge",
    group: "Glutes"
  },
  {
    name: "Barbell hack squat",
    group: "Quadriceps"
  },
  {
    name: "Barbell rear delt bent-over row",
    group: "Shoulders"
  },
  {
    name: "Barbell roll-out",
    group: "Abdominals"
  },
  {
    name: "Barbell shrug",
    group: "Traps"
  },
  {
    name: "Barbell shrug",
    group: "Traps"
  },
  {
    name: "Barbell step-up",
    group: "Quadriceps"
  },
  {
    name: "Barbell stiff-legged deadlift",
    group: "Hamstrings"
  },
  {
    name: "Barbell thruster",
    group: "Quadriceps"
  },
  {
    name: "Barbell upright row",
    group: "Shoulders"
  },
  {
    name: "Barbell walking lunge",
    group: "Quadriceps"
  },
  {
    name: "Battle ropes",
    group: "Shoulders"
  },
  {
    name: "Bear crawl sled drag",
    group: "Quadriceps"
  },
  {
    name: "Bear crawl sled drag",
    group: "Quadriceps"
  },
  {
    name: "Behind-the-head skullcrusher",
    group: "Triceps"
  },
  {
    name: "Bench Press - Powerlifting",
    group: "Triceps"
  },
  {
    name: "Bent Over Barbell Row",
    group: "Middle Back"
  },
  {
    name: "Bent Over Two-Arm Long Bar Row",
    group: "Middle Back"
  },
  {
    name: "Bent Over Two-Dumbbell Row With Palms In",
    group: "Middle Back"
  },
  {
    name: "Bent-over dumbbell rear delt row",
    group: "Shoulders"
  },
  {
    name: "Biceps curl to shoulder press",
    group: "Biceps"
  },
  {
    name: "Bicycling",
    group: "Quadriceps"
  },
  {
    name: "Bodyweight Flyes",
    group: "Chest"
  },
  {
    name: "Bodyweight Reverse Lunge",
    group: "Quadriceps"
  },
  {
    name: "Bodyweight squat",
    group: "Quadriceps"
  },
  {
    name: "Bosu Ball Cable Crunch With Side Bends",
    group: "Abdominals"
  },
  {
    name: "Bottoms Up",
    group: "Abdominals"
  },
  {
    name: "Box Squat with Bands",
    group: "Quadriceps"
  },
  {
    name: "Box Squat with Bands",
    group: "Quadriceps"
  },
  {
    name: "Box jump",
    group: "Hamstrings"
  },
  {
    name: "Box jump",
    group: "Hamstrings"
  },
  {
    name: "Broad jump",
    group: "Quadriceps"
  },
  {
    name: "Burpee",
    group: "Quadriceps"
  },
  {
    name: "Butt-Ups",
    group: "Abdominals"
  },
  {
    name: "Butterfly",
    group: "Chest"
  },
  {
    name: "Butterfly",
    group: "Chest"
  },
  {
    name: "Cable Chest Press",
    group: "Chest"
  },
  {
    name: "Cable Crossover",
    group: "Chest"
  },
  {
    name: "Cable Internal Rotation",
    group: "Shoulders"
  },
  {
    name: "Cable V-bar push-down",
    group: "Triceps"
  },
  {
    name: "Cable cross-over",
    group: "Chest"
  },
  {
    name: "Calf Press",
    group: "Calves"
  },
  {
    name: "Calf Press On The Leg Press Machine",
    group: "Calves"
  },
  {
    name: "Calf-Machine Shoulder Shrug",
    group: "Traps"
  },
  {
    name: "Captain's chair knee raise",
    group: "Abdominals"
  },
  {
    name: "Car driver",
    group: "Shoulders"
  },
  {
    name: "Chain Handle Extension",
    group: "Triceps"
  },
  {
    name: "Chest dip",
    group: "Chest"
  },
  {
    name: "Clam",
    group: "Abductors"
  },
  {
    name: "Clean",
    group: "Hamstrings"
  },
  {
    name: "Clean Deadlift",
    group: "Hamstrings"
  },
  {
    name: "Clean and jerk",
    group: "Shoulders"
  },
  {
    name: "Clean and press",
    group: "Shoulders"
  },
  {
    name: "Clean from Blocks",
    group: "Quadriceps"
  },
  {
    name: "Clock push-up",
    group: "Chest"
  },
  {
    name: "Close push-up to wide push-up",
    group: "Chest"
  },
  {
    name: "Close push-up to wide push-up",
    group: "Chest"
  },
  {
    name: "Close-Grip Front Lat Pulldown",
    group: "Lats"
  },
  {
    name: "Close-grip EZ-bar bench press",
    group: "Chest"
  },
  {
    name: "Close-grip EZ-bar curl",
    group: "Biceps"
  },
  {
    name: "Close-grip barbell curl",
    group: "Biceps"
  },
  {
    name: "Close-grip bench press",
    group: "Chest"
  },
  {
    name: "Close-grip bench press",
    group: "Chest"
  },
  {
    name: "Close-grip pull-down",
    group: "Lats"
  },
  {
    name: "Cocoons",
    group: "Abdominals"
  },
  {
    name: "Cocoons",
    group: "Abdominals"
  },
  {
    name: "Concentration curl",
    group: "Biceps"
  },
  {
    name: "Cross-Body Crunch",
    group: "Abdominals"
  },
  {
    name: "Cross-Body Crunch",
    group: "Abdominals"
  },
  {
    name: "Cross-body hammer curl",
    group: "Biceps"
  },
  {
    name: "Crunch - Hands Overhead",
    group: "Abdominals"
  },
  {
    name: "Crunches",
    group: "Abdominals"
  },
  {
    name: "Dead bug reach",
    group: "Abdominals"
  },
  {
    name: "Deadlift with Bands",
    group: "Lower Back"
  },
  {
    name: "Deadlift with Chains",
    group: "Lower Back"
  },
  {
    name: "Decline Close-Grip Bench To Skull Crusher",
    group: "Triceps"
  },
  {
    name: "Decline Crunch",
    group: "Abdominals"
  },
  {
    name: "Decline Dumbbell Flyes",
    group: "Chest"
  },
  {
    name: "Decline Dumbbell Triceps Extension",
    group: "Triceps"
  },
  {
    name: "Decline EZ-bar skullcrusher",
    group: "Triceps"
  },
  {
    name: "Decline Push-Up",
    group: "Chest"
  },
  {
    name: "Decline Smith Press",
    group: "Chest"
  },
  {
    name: "Decline bar press sit-up",
    group: "Abdominals"
  },
  {
    name: "Decline barbell bench press",
    group: "Chest"
  },
  {
    name: "Decline dumbbell bench press",
    group: "Chest"
  },
  {
    name: "Decline oblique crunch",
    group: "Abdominals"
  },
  {
    name: "Decline reverse crunch",
    group: "Abdominals"
  },
  {
    name: "Dip Machine",
    group: "Triceps"
  },
  {
    name: "Double Leg Butt Kick",
    group: "Quadriceps"
  },
  {
    name: "Double-arm triceps kick-back",
    group: "Triceps"
  },
  {
    name: "Drag curl",
    group: "Biceps"
  },
  {
    name: "Drag curl",
    group: "Biceps"
  },
  {
    name: "Drop Push",
    group: "Chest"
  },
  {
    name: "Dumbbell Alternate Bicep Curl",
    group: "Biceps"
  },
  {
    name: "Dumbbell Bench Press",
    group: "Chest"
  },
  {
    name: "Dumbbell Bicep Curl",
    group: "Biceps"
  },
  {
    name: "Dumbbell Flyes",
    group: "Chest"
  },
  {
    name: "Dumbbell Flyes",
    group: "Chest"
  },
  {
    name: "Dumbbell Goblet Squat",
    group: "Quadriceps"
  },
  {
    name: "Dumbbell Lunges",
    group: "Quadriceps"
  },
  {
    name: "Dumbbell Lying Pronation",
    group: "Forearms"
  },
  {
    name: "Dumbbell Lying Rear Lateral Raise",
    group: "Shoulders"
  },
  {
    name: "Dumbbell Lying Supination",
    group: "Forearms"
  },
  {
    name: "Dumbbell Raise",
    group: "Shoulders"
  },
  {
    name: "Dumbbell Raise",
    group: "Shoulders"
  },
  {
    name: "Dumbbell V-Sit Cross Jab",
    group: "Abdominals"
  },
  {
    name: "Dumbbell bent-over row",
    group: "Middle Back"
  },
  {
    name: "Dumbbell external shoulder rotation",
    group: "Shoulders"
  },
  {
    name: "Dumbbell farmer's walk",
    group: "Forearms"
  },
  {
    name: "Dumbbell floor press",
    group: "Triceps"
  },
  {
    name: "Dumbbell front raise",
    group: "Shoulders"
  },
  {
    name: "Dumbbell front raise to lateral raise",
    group: "Shoulders"
  },
  {
    name: "Dumbbell preacher curl",
    group: "Biceps"
  },
  {
    name: "Dumbbell reverse lunge",
    group: "Quadriceps"
  },
  {
    name: "Dumbbell seated box jump",
    group: "Quadriceps"
  },
  {
    name: "Dumbbell side bend",
    group: "Abdominals"
  },
  {
    name: "Dumbbell skullcrusher",
    group: "Triceps"
  },
  {
    name: "Dumbbell spell caster",
    group: "Abdominals"
  },
  {
    name: "Dumbbell squat",
    group: "Quadriceps"
  },
  {
    name: "Dumbbell suitcase crunch",
    group: "Abdominals"
  },
  {
    name: "Dumbbell sumo squat",
    group: "Quadriceps"
  },
  {
    name: "EZ-Bar Curl",
    group: "Biceps"
  },
  {
    name: "EZ-Bar Skullcrusher",
    group: "Triceps"
  },
  {
    name: "EZ-bar spider curl",
    group: "Biceps"
  },
  {
    name: "Elbow plank",
    group: "Abdominals"
  },
  {
    name: "Elbow-to-knee crunch",
    group: "Abdominals"
  },
  {
    name: "Elliptical trainer",
    group: "Quadriceps"
  },
  {
    name: "Exercise Ball Pull-In",
    group: "Abdominals"
  },
  {
    name: "Exercise ball crunch",
    group: "Abdominals"
  },
  {
    name: "Exercise ball leg curl",
    group: "Hamstrings"
  },
  {
    name: "External Rotation with Cable",
    group: "Shoulders"
  },
  {
    name: "Feet-elevated bench dip",
    group: "Triceps"
  },
  {
    name: "Feet-elevated push-up",
    group: "Chest"
  },
  {
    name: "Flat Bench Lying Leg Raise",
    group: "Abdominals"
  },
  {
    name: "Flexor Incline Dumbbell Curls",
    group: "Biceps"
  },
  {
    name: "Flexor Incline Dumbbell Curls",
    group: "Biceps"
  },
  {
    name: "Flutter Kicks",
    group: "Glutes"
  },
  {
    name: "Forward lunge",
    group: "Quadriceps"
  },
  {
    name: "Front Plate Raise",
    group: "Shoulders"
  },
  {
    name: "Front Raise And Pullover",
    group: "Chest"
  },
  {
    name: "Front Squats With Two Kettlebells",
    group: "Quadriceps"
  },
  {
    name: "Gironda Sternum Chins",
    group: "Lats"
  },
  {
    name: "Glute Ham Raise",
    group: "Hamstrings"
  },
  {
    name: "Glute Kickback",
    group: "Glutes"
  },
  {
    name: "Glute bridge",
    group: "Glutes"
  },
  {
    name: "Glute ham raise-",
    group: "Hamstrings"
  },
  {
    name: "Goblet Squat",
    group: "Quadriceps"
  },
  {
    name: "Good Morning",
    group: "Hamstrings"
  },
  {
    name: "Gorilla Chin/Crunch",
    group: "Abdominals"
  },
  {
    name: "Groiners",
    group: "Adductors"
  },
  {
    name: "Hack Squat",
    group: "Quadriceps"
  },
  {
    name: "Hammer Curls",
    group: "Biceps"
  },
  {
    name: "Hammer Curls",
    group: "Biceps"
  },
  {
    name: "Hammer Grip Incline DB Bench Press",
    group: "Chest"
  },
  {
    name: "Hands-elevated push-up",
    group: "Chest"
  },
  {
    name: "Handstand push-up",
    group: "Shoulders"
  },
  {
    name: "Hang Clean",
    group: "Quadriceps"
  },
  {
    name: "Hang Clean - Below the Knees",
    group: "Quadriceps"
  },
  {
    name: "Hang Snatch",
    group: "Hamstrings"
  },
  {
    name: "Hanging Oblique Knee Raise",
    group: "Abdominals"
  },
  {
    name: "Hanging leg raise",
    group: "Abdominals"
  },
  {
    name: "Hanging toes-to-bar",
    group: "Abdominals"
  },
  {
    name: "Hanging toes-to-bar",
    group: "Abdominals"
  },
  {
    name: "Hex-bar deadlift",
    group: "Quadriceps"
  },
  {
    name: "Hip Circles (Prone)",
    group: "Abductors"
  },
  {
    name: "Hip Circles (Prone)",
    group: "Abductors"
  },
  {
    name: "Hyperextensions With No Hyperextension Bench",
    group: "Lower Back"
  },
  {
    name: "Incline Dumbbell Bench With Palms Facing In",
    group: "Chest"
  },
  {
    name: "Incline Dumbbell Flyes",
    group: "Chest"
  },
  {
    name: "Incline EZ-bar skullcrusher",
    group: "Triceps"
  },
  {
    name: "Incline Hammer Curls",
    group: "Biceps"
  },
  {
    name: "Incline Push-Up",
    group: "Chest"
  },
  {
    name: "Incline cable chest fly",
    group: "Chest"
  },
  {
    name: "Incline cable chest press",
    group: "Chest"
  },
  {
    name: "Incline dumbbell bench press",
    group: "Chest"
  },
  {
    name: "Incline dumbbell bench press",
    group: "Chest"
  },
  {
    name: "Incline dumbbell front raise",
    group: "Shoulders"
  },
  {
    name: "Incline dumbbell front raise",
    group: "Shoulders"
  },
  {
    name: "Incline dumbbell reverse fly",
    group: "Shoulders"
  },
  {
    name: "Incline dumbbell row",
    group: "Middle Back"
  },
  {
    name: "Incline face-down bar front raise",
    group: "Shoulders"
  },
  {
    name: "Isometric Wipers",
    group: "Chest"
  },
  {
    name: "Jog In Place",
    group: "Quadriceps"
  },
  {
    name: "Jog In Place",
    group: "Quadriceps"
  },
  {
    name: "Jumping jack-",
    group: "Quadriceps"
  },
  {
    name: "Jumping rope",
    group: "Quadriceps"
  },
  {
    name: "Kettlebell One-Legged Deadlift",
    group: "Hamstrings"
  },
  {
    name: "Kettlebell Pistol Squat",
    group: "Quadriceps"
  },
  {
    name: "Kettlebell Turkish Get-Up (Squat style)",
    group: "Shoulders"
  },
  {
    name: "Kettlebell alternating renegade row",
    group: "Middle Back"
  },
  {
    name: "Kettlebell pass-through lunge",
    group: "Hamstrings"
  },
  {
    name: "Kettlebell sumo deadlift high pull",
    group: "Traps"
  },
  {
    name: "Kettlebell thruster",
    group: "Glutes"
  },
  {
    name: "Kneeling Cable Crunch With Alternating Oblique Twists",
    group: "Abdominals"
  },
  {
    name: "Kneeling Squat",
    group: "Glutes"
  },
  {
    name: "Kneeling cable crunch",
    group: "Abdominals"
  },
  {
    name: "Kneeling cable oblique crunch",
    group: "Abdominals"
  },
  {
    name: "Kneeling cable oblique crunch",
    group: "Abdominals"
  },
  {
    name: "Kneeling cable triceps extension",
    group: "Triceps"
  },
  {
    name: "Knees tucked crunch",
    group: "Abdominals"
  },
  {
    name: "Landmine twist",
    group: "Abdominals"
  },
  {
    name: "Lat pull-down",
    group: "Lats"
  },
  {
    name: "Leg Extensions",
    group: "Quadriceps"
  },
  {
    name: "Leg Press",
    group: "Quadriceps"
  },
  {
    name: "Leverage Chest Press",
    group: "Chest"
  },
  {
    name: "Leverage Decline Chest Press",
    group: "Chest"
  },
  {
    name: "Leverage Incline Chest Press",
    group: "Chest"
  },
  {
    name: "Leverage Shrug",
    group: "Traps"
  },
  {
    name: "Linear Acceleration Wall Drill",
    group: "Hamstrings"
  },
  {
    name: "Low cable overhead triceps extension",
    group: "Triceps"
  },
  {
    name: "Low-cable cross-over",
    group: "Chest"
  },
  {
    name: "Lying Face Down Plate Neck Resistance",
    group: "Neck"
  },
  {
    name: "Lying Face Up Plate Neck Resistance",
    group: "Neck"
  },
  {
    name: "Lying Leg Curls",
    group: "Hamstrings"
  },
  {
    name: "Lying cable triceps extension",
    group: "Triceps"
  },
  {
    name: "Lying cable triceps extension",
    group: "Triceps"
  },
  {
    name: "Machine Bicep Curl",
    group: "Biceps"
  },
  {
    name: "Machine Bicep Curl",
    group: "Biceps"
  },
  {
    name: "Machine Squat",
    group: "Quadriceps"
  },
  {
    name: "Machine seated row",
    group: "Lats"
  },
  {
    name: "Machine shoulder press",
    group: "Shoulders"
  },
  {
    name: "Man-maker",
    group: "Middle Back"
  },
  {
    name: "Middle Back Shrug",
    group: "Middle Back"
  },
  {
    name: "Military press",
    group: "Shoulders"
  },
  {
    name: "Mountain climber",
    group: "Abdominals"
  },
  {
    name: "Muscle Up",
    group: "Lats"
  },
  {
    name: "Narrow Stance Hack Squats",
    group: "Quadriceps"
  },
  {
    name: "Narrow-stance leg press",
    group: "Quadriceps"
  },
  {
    name: "Narrow-stance squat",
    group: "Quadriceps"
  },
  {
    name: "Narrow-stance squat",
    group: "Quadriceps"
  },
  {
    name: "Natural Glute Ham Raise",
    group: "Hamstrings"
  },
  {
    name: "Neck Press",
    group: "Chest"
  },
  {
    name: "Neutral-grip dumbbell bench press",
    group: "Chest"
  },
  {
    name: "Olympic Squat",
    group: "Quadriceps"
  },
  {
    name: "One Arm Pronated Dumbbell Triceps Extension",
    group: "Triceps"
  },
  {
    name: "One Arm Supinated Dumbbell Triceps Extension",
    group: "Triceps"
  },
  {
    name: "One Arm Supinated Dumbbell Triceps Extension",
    group: "Triceps"
  },
  {
    name: "One-Arm Dumbbell Row",
    group: "Middle Back"
  },
  {
    name: "One-Arm Long Bar Row",
    group: "Middle Back"
  },
  {
    name: "Otis-Up",
    group: "Abdominals"
  },
  {
    name: "Overhead cable curl",
    group: "Biceps"
  },
  {
    name: "Overhead dumbbell front raise",
    group: "Shoulders"
  },
  {
    name: "Pallof press",
    group: "Abdominals"
  },
  {
    name: "Palms-Down Dumbbell Wrist Curl Over A Bench",
    group: "Forearms"
  },
  {
    name: "Palms-Down Dumbbell Wrist Curl Over A Bench",
    group: "Forearms"
  },
  {
    name: "Palms-Up Dumbbell Wrist Curl Over A Bench",
    group: "Forearms"
  },
  {
    name: "Palms-down wrist curl over bench",
    group: "Forearms"
  },
  {
    name: "Palms-up wrist curl over bench",
    group: "Forearms"
  },
  {
    name: "Parallel Bar Dip",
    group: "Triceps"
  },
  {
    name: "Plate Pinch",
    group: "Forearms"
  },
  {
    name: "Plate Twist",
    group: "Abdominals"
  },
  {
    name: "Power Clean from Blocks",
    group: "Hamstrings"
  },
  {
    name: "Power Partials",
    group: "Shoulders"
  },
  {
    name: "Power Snatch",
    group: "Hamstrings"
  },
  {
    name: "Power clean",
    group: "Hamstrings"
  },
  {
    name: "Power snatch-",
    group: "Quadriceps"
  },
  {
    name: "Preacher Curl",
    group: "Biceps"
  },
  {
    name: "Preacher Hammer Dumbbell Curl",
    group: "Biceps"
  },
  {
    name: "Pull-up",
    group: "Lats"
  },
  {
    name: "Pullups",
    group: "Lats"
  },
  {
    name: "Push-Ups - Close Triceps Position",
    group: "Triceps"
  },
  {
    name: "Push-Ups With Feet On An Exercise Ball",
    group: "Chest"
  },
  {
    name: "Push-press",
    group: "Quadriceps"
  },
  {
    name: "Pushups",
    group: "Chest"
  },
  {
    name: "Rack Pull with Bands",
    group: "Lower Back"
  },
  {
    name: "Rack Pull with Bands",
    group: "Lower Back"
  },
  {
    name: "Reverse Band Box Squat",
    group: "Quadriceps"
  },
  {
    name: "Reverse Barbell Preacher Curls",
    group: "Biceps"
  },
  {
    name: "Reverse Cable Curl",
    group: "Biceps"
  },
  {
    name: "Reverse Grip Triceps Pushdown",
    group: "Triceps"
  },
  {
    name: "Reverse Grip Triceps Pushdown",
    group: "Triceps"
  },
  {
    name: "Reverse crunch",
    group: "Abdominals"
  },
  {
    name: "Reverse-grip bench press",
    group: "Triceps"
  },
  {
    name: "Reverse-grip bent-over row",
    group: "Middle Back"
  },
  {
    name: "Reverse-grip bent-over row",
    group: "Middle Back"
  },
  {
    name: "Reverse-grip incline dumbbell bench press",
    group: "Chest"
  },
  {
    name: "Reverse-grip lat pull-down",
    group: "Lats"
  },
  {
    name: "Rickshaw Carry",
    group: "Forearms"
  },
  {
    name: "Ring dip",
    group: "Triceps"
  },
  {
    name: "Rocking Standing Calf Raise",
    group: "Calves"
  },
  {
    name: "Rocky Pull-Ups/Pulldowns",
    group: "Lats"
  },
  {
    name: "Rocky Pull-Ups/Pulldowns",
    group: "Lats"
  },
  {
    name: "Romanian Deadlift With Dumbbells",
    group: "Hamstrings"
  },
  {
    name: "Romanian Deadlift from Deficit",
    group: "Hamstrings"
  },
  {
    name: "Rope Crunch",
    group: "Abdominals"
  },
  {
    name: "Rope climb",
    group: "Lats"
  },
  {
    name: "Rope climb",
    group: "Lats"
  },
  {
    name: "Rower",
    group: "Middle Back"
  },
  {
    name: "Russian twist",
    group: "Abdominals"
  },
  {
    name: "Scissors Jump",
    group: "Quadriceps"
  },
  {
    name: "Seated Cable Rows",
    group: "Middle Back"
  },
  {
    name: "Seated Calf Raise",
    group: "Calves"
  },
  {
    name: "Seated Close-Grip Concentration Barbell Curl",
    group: "Biceps"
  },
  {
    name: "Seated Dumbbell Press",
    group: "Shoulders"
  },
  {
    name: "Seated Dumbbell Press",
    group: "Shoulders"
  },
  {
    name: "Seated Flat Bench Leg Pull-In",
    group: "Abdominals"
  },
  {
    name: "Seated Flat Bench Leg Pull-In",
    group: "Abdominals"
  },
  {
    name: "Seated One-Arm Dumbbell Palms-Down Wrist Curl",
    group: "Forearms"
  },
  {
    name: "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
    group: "Forearms"
  },
  {
    name: "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
    group: "Forearms"
  },
  {
    name: "Seated Palms-Down Barbell Wrist Curl",
    group: "Forearms"
  },
  {
    name: "Seated Palms-Down Barbell Wrist Curl",
    group: "Forearms"
  },
  {
    name: "Seated Side Lateral Raise",
    group: "Shoulders"
  },
  {
    name: "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
    group: "Forearms"
  },
  {
    name: "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
    group: "Forearms"
  },
  {
    name: "Seated barbell shoulder press",
    group: "Shoulders"
  },
  {
    name: "Seated cable shoulder press",
    group: "Shoulders"
  },
  {
    name: "Seated dumbbell biceps curl",
    group: "Biceps"
  },
  {
    name: "Seated dumbbell shoulder press",
    group: "Shoulders"
  },
  {
    name: "Seated face pull",
    group: "Shoulders"
  },
  {
    name: "Seated face pull",
    group: "Shoulders"
  },
  {
    name: "Seated finger curl",
    group: "Forearms"
  },
  {
    name: "Seated palms-down wrist curl",
    group: "Forearms"
  },
  {
    name: "Seated palms-up wrist curl",
    group: "Forearms"
  },
  {
    name: "Seated rear delt fly",
    group: "Shoulders"
  },
  {
    name: "Seated triceps press",
    group: "Triceps"
  },
  {
    name: "Shotgun row",
    group: "Lats"
  },
  {
    name: "Side Lateral Raise",
    group: "Shoulders"
  },
  {
    name: "Side To Side Chins",
    group: "Lats"
  },
  {
    name: "Side Wrist Pull",
    group: "Shoulders"
  },
  {
    name: "Side-to-side box skip",
    group: "Quadriceps"
  },
  {
    name: "Single Leg Push-off",
    group: "Quadriceps"
  },
  {
    name: "Single Leg Push-off",
    group: "Quadriceps"
  },
  {
    name: "Single-Arm Push-Up",
    group: "Chest"
  },
  {
    name: "Single-Leg Press",
    group: "Quadriceps"
  },
  {
    name: "Single-arm bent-over cable rear delt fly",
    group: "Shoulders"
  },
  {
    name: "Single-arm cable cross-over",
    group: "Chest"
  },
  {
    name: "Single-arm cable front raise",
    group: "Shoulders"
  },
  {
    name: "Single-arm cable seated row",
    group: "Middle Back"
  },
  {
    name: "Single-arm cable triceps extension",
    group: "Triceps"
  },
  {
    name: "Single-arm dumbbell preacher curl",
    group: "Biceps"
  },
  {
    name: "Single-arm dumbbell preacher curl",
    group: "Biceps"
  },
  {
    name: "Single-arm dumbbell triceps extension",
    group: "Triceps"
  },
  {
    name: "Single-arm dumbbell triceps extension",
    group: "Triceps"
  },
  {
    name: "Single-arm high-cable side bend",
    group: "Abdominals"
  },
  {
    name: "Single-arm incline lateral raise",
    group: "Shoulders"
  },
  {
    name: "Single-arm incline rear delt raise",
    group: "Shoulders"
  },
  {
    name: "Single-arm incline rear delt raise",
    group: "Shoulders"
  },
  {
    name: "Single-arm kettlebell clean",
    group: "Hamstrings"
  },
  {
    name: "Single-arm kettlebell clean and jerk",
    group: "Shoulders"
  },
  {
    name: "Single-arm kettlebell push-press",
    group: "Shoulders"
  },
  {
    name: "Single-arm kettlebell row",
    group: "Chest"
  },
  {
    name: "Single-arm kettlebell snatch",
    group: "Shoulders"
  },
  {
    name: "Single-arm kettlebell snatch",
    group: "Shoulders"
  },
  {
    name: "Single-arm lateral raise",
    group: "Shoulders"
  },
  {
    name: "Single-arm palm-in dumbbell shoulder press",
    group: "Shoulders"
  },
  {
    name: "Single-arm standing shoulder press",
    group: "Shoulders"
  },
  {
    name: "Single-dumbbell front raise",
    group: "Shoulders"
  },
  {
    name: "Single-leg cable hip extension",
    group: "Glutes"
  },
  {
    name: "Single-leg depth squat",
    group: "Quadriceps"
  },
  {
    name: "Single-leg glute bridge",
    group: "Glutes"
  },
  {
    name: "Skating",
    group: "Quadriceps"
  },
  {
    name: "Sledgehammer swing",
    group: "Abdominals"
  },
  {
    name: "Sledgehammer swing",
    group: "Abdominals"
  },
  {
    name: "Smith Machine Calf Raise",
    group: "Calves"
  },
  {
    name: "Smith machine back squat",
    group: "Quadriceps"
  },
  {
    name: "Smith machine bench press",
    group: "Chest"
  },
  {
    name: "Smith machine box squat",
    group: "Quadriceps"
  },
  {
    name: "Smith machine shoulder press",
    group: "Shoulders"
  },
  {
    name: "Smith machine shrug",
    group: "Traps"
  },
  {
    name: "Snatch Deadlift",
    group: "Hamstrings"
  },
  {
    name: "Snatch-Grip Behind-The-Neck Overhead Press",
    group: "Shoulders"
  },
  {
    name: "Snatch-Grip Behind-The-Neck Overhead Press",
    group: "Shoulders"
  },
  {
    name: "Spider crawl",
    group: "Abdominals"
  },
  {
    name: "Split Squat with Dumbbells",
    group: "Quadriceps"
  },
  {
    name: "Squat with Chains",
    group: "Quadriceps"
  },
  {
    name: "Stair climber",
    group: "Quadriceps"
  },
  {
    name: "Stairmaster",
    group: "Quadriceps"
  },
  {
    name: "Standing Biceps Cable Curl",
    group: "Biceps"
  },
  {
    name: "Standing Bradford press",
    group: "Shoulders"
  },
  {
    name: "Standing Calf Raises",
    group: "Calves"
  },
  {
    name: "Standing Dumbbell Triceps Extension",
    group: "Triceps"
  },
  {
    name: "Standing Hip Circles",
    group: "Abductors"
  },
  {
    name: "Standing Olympic Plate Hand Squeeze",
    group: "Forearms"
  },
  {
    name: "Standing Olympic Plate Hand Squeeze",
    group: "Forearms"
  },
  {
    name: "Standing One-Arm Cable Curl",
    group: "Biceps"
  },
  {
    name: "Standing One-Arm Dumbbell Curl Over Incline Bench",
    group: "Biceps"
  },
  {
    name: "Standing One-Arm Dumbbell Curl Over Incline Bench",
    group: "Biceps"
  },
  {
    name: "Standing One-Arm Dumbbell Triceps Extension",
    group: "Triceps"
  },
  {
    name: "Standing barbell overhead triceps extension",
    group: "Triceps"
  },
  {
    name: "Standing barbell overhead triceps extension",
    group: "Triceps"
  },
  {
    name: "Standing behind-the-back wrist curl",
    group: "Forearms"
  },
  {
    name: "Standing cable crunch",
    group: "Abdominals"
  },
  {
    name: "Standing cable crunch",
    group: "Abdominals"
  },
  {
    name: "Standing cable low-to-high twist",
    group: "Abdominals"
  },
  {
    name: "Standing cable rear delt row",
    group: "Shoulders"
  },
  {
    name: "Standing concentration curl",
    group: "Biceps"
  },
  {
    name: "Standing dumbbell shoulder press",
    group: "Shoulders"
  },
  {
    name: "Standing dumbbell shoulder press",
    group: "Shoulders"
  },
  {
    name: "Standing dumbbell shrug",
    group: "Traps"
  },
  {
    name: "Standing dumbbell upright row",
    group: "Traps"
  },
  {
    name: "Standing face pull",
    group: "Shoulders"
  },
  {
    name: "Standing leg swing",
    group: "Hamstrings"
  },
  {
    name: "Standing palms-in shoulder press",
    group: "Shoulders"
  },
  {
    name: "Stationary bike",
    group: "Quadriceps"
  },
  {
    name: "Step-up with knee raise",
    group: "Glutes"
  },
  {
    name: "Step-up with knee raise",
    group: "Glutes"
  },
  {
    name: "Stiff-Legged Dumbbell Deadlift",
    group: "Hamstrings"
  },
  {
    name: "Stomach Vacuum",
    group: "Abdominals"
  },
  {
    name: "Straight-Arm Pulldown",
    group: "Lats"
  },
  {
    name: "Straight-arm dumbbell pull-over",
    group: "Chest"
  },
  {
    name: "Straight-arm rope pull-down",
    group: "Lats"
  },
  {
    name: "Straight-bar wrist roll-up",
    group: "Forearms"
  },
  {
    name: "Sumo deadlift",
    group: "Hamstrings"
  },
  {
    name: "Superman",
    group: "Lower Back"
  },
  {
    name: "Suspended ab fall-out",
    group: "Abdominals"
  },
  {
    name: "T-Bar Row",
    group: "Middle Back"
  },
  {
    name: "T-Bar Row with Handle",
    group: "Middle Back"
  },
  {
    name: "Thigh adductor",
    group: "Adductors"
  },
  {
    name: "Tire flip",
    group: "Quadriceps"
  },
  {
    name: "Trail Running/Walking",
    group: "Quadriceps"
  },
  {
    name: "Treadmill jogging",
    group: "Quadriceps"
  },
  {
    name: "Treadmill running",
    group: "Quadriceps"
  },
  {
    name: "Tricep Dumbbell Kickback",
    group: "Triceps"
  },
  {
    name: "Triceps Pushdown",
    group: "Triceps"
  },
  {
    name: "Triceps Pushdown - Rope Attachment",
    group: "Triceps"
  },
  {
    name: "Triceps dip",
    group: "Triceps"
  },
  {
    name: "Two-Arm Kettlebell Military Press",
    group: "Shoulders"
  },
  {
    name: "Upside-down pull-up",
    group: "Middle Back"
  },
  {
    name: "V-bar pull-up",
    group: "Lats"
  },
  {
    name: "V-up",
    group: "Abdominals"
  },
  {
    name: "Weighted Crunches",
    group: "Abdominals"
  },
  {
    name: "Weighted Jump Squat",
    group: "Quadriceps"
  },
  {
    name: "Weighted bench dip",
    group: "Triceps"
  },
  {
    name: "Weighted pull-up",
    group: "Lats"
  },
  {
    name: "Weighted sissy squat",
    group: "Quadriceps"
  },
  {
    name: "Wide Stance Stiff Legs",
    group: "Hamstrings"
  },
  {
    name: "Wide-Grip Decline Barbell Bench Press",
    group: "Chest"
  },
  {
    name: "Wide-Grip Rear Pull-Up",
    group: "Lats"
  },
  {
    name: "Wide-grip barbell curl",
    group: "Biceps"
  },
  {
    name: "Wide-grip bench press",
    group: "Chest"
  },
  {
    name: "Wide-grip hands-elevated push-up",
    group: "Chest"
  },
  {
    name: "Wrist Roller",
    group: "Forearms"
  },
  {
    name: "Yates Row Reverse Grip",
    group: "Middle Back"
  },
  {
    name: "Zottman Curl",
    group: "Biceps"
  }
]
module.exports = { exercises, articles, playlists };