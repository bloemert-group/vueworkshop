const fakeResponse = [
    {
      id: 1,
      date: new Date("2020-03-12 18:00"),
      description: "Tech Event Dinner!",
      important: true
    },
    {
      id: 2,
      date: new Date("2020-03-12 19:00"),
      description: "Workshops Session I",
      important: false
    },
    {
      id: 3,
      date: new Date("2020-03-12 20:00"),
      description: "Workshops Session II",
      important: false
    },
    {
      id: 4,
      date: new Date("2020-11-19 19:00"),
      description: "Workshop Vue.js (Via MS Teams)",
      important: true
    },
    {
      id: 5,
      date: new Date("2020-11-19 21:00"),
      description: "After Workshop Party (Via MS Teams)",
      important: false
    },
    {
      id: 6,
      date: new Date("2020-12-05 19:00"),
      description: "Verjaardag Sinterklaas!",
      important: false
    },    
    {
      id: 7,
      date: new Date("2020-12-09 19:00"),
      description: "Workshop C#",
      important: false
    },

    {
      id: 10,
      date: new Date("2020-10-30 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 11,
      date: new Date("2020-11-06 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 12,
      date: new Date("2020-11-13 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 13,
      date: new Date("2020-11-20 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },
    {
      id: 14,
      date: new Date("2020-11-27 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },        
    {
      id: 15,
      date: new Date("2020-12-04 17:00"),
      description: "Vrijdagmiddag Borrel (Via MS Teams!)",
      important: false
    },        
  ];

  export default {
      async list() {
          return fakeResponse;
      }
  };
  