const myResume = {
    "name": "Nomin G",
    "contact": {
      "email": "nominjw15@gmail.com",
      "phone": "+91 8072735857",
      "address": "NO:36,vignesh garden,PERAMANUR,Maraimalainagar CHENGALPATTU 603209,TAMILNADU."
    },
    "summary": "Experience in material drawing and CNC programming.",
    "education": [
      {
        "degree": "Diploma in mechanical engineering",
        "school": "SRM University",
        "graduation_year": 2018
      }
    ],
    "experience": [
      {
        "position": "FSD Developer",
        "company": "GUVI geeks network pvt ltd",
        "location": "Chennai",
        "start_date": "December 2023",
        "end_date": "Present",
        "responsibilities": [
          "Develop web and enhance frontend and backend.",
          "Javascript.",
          "HTML."
        ]
      },
      {
        "position": "FTT2",
        "company": "Timken",
        "location": "Chennai",
        "start_date": "Feb 2019",
        "end_date": "Oct 2023",
        "responsibilities": [
          "Machine operator.",
          "Participated in kaizen projects.",
          "Got performance of the year certificate."
        ]
      }
    ],
    "skills": [
      "Knowledge in material drawing and CNC programming",
      "Machine Learning",
      "javascript",
      "Good communication in languages",
      "Deep Learning",
      "Team motivation to meet the targets"
    ]
  };
  
  
  
  // Iterating using 'for' loop
  console.log("Using 'for' loop:");
  for (let i = 0; i < myResume.skills.length; i++) {
    console.log(myResume.skills[i]);
  }
  
  // Iterating using 'for-in' loop
  console.log("\nUsing 'for-in' loop:");
  for (let key in myResume.contact) {
    console.log(`${key}: ${myResume.contact[key]}`);
  }
  
  // Iterating using 'for-of' loop
  console.log("\nUsing 'for-of' loop:");
  for (let experience of myResume.experience) {
    console.log(`Position: ${experience.position}, Company: ${experience.company}`);
  }
  
  // Iterating using 'forEach' method
  console.log("\nUsing 'forEach' method:");
  myResume.education.forEach((edu) => {
    console.log(`Degree: ${edu.degree}, School: ${edu.school}`);
  });
  