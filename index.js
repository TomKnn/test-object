

const mockData = require('./mockData.js').data;
// console.log(mockData);

while (true) {
  let matchObject = [];
  let i = 0;
  let myProfile = {
    first_name: "Tom",
    last_name: "Koenen",
    age: 44,
    gender: "M",
    gender_interest: ["M","F"],
    location: "city",
    min_age_interest: 17,
    max_age_interest: 104
  }
  for (let i = 0; i < mockData.length; i++) {

    if (
      (((myProfile.age >= mockData[i].min_age_interest) && (myProfile.age <= mockData[i].max_age_interest))
      && ((mockData[i].age >= myProfile.min_age_interest) && (myProfile.age <= mockData[i].max_age_interest)))
      && (((myProfile.gender_interest[0] == mockData[i].gender) || (myProfile.gender_interest[1] == mockData[i].gender))
      && ((mockData[i].gender_interest == myProfile.gender_interest[0]) || (mockData[i].gender_interest == myProfile.gender_interest[1])))
      && (
      myProfile.location === mockData[i].location))
     {
      console.log(`You've got a match named ${mockData[i].first_name} ${mockData[i].last_name} (${mockData[i].gender}) `);
      matchObject.push(mockData[i]);
      // i++
    }

    // else {
    //   mockData[i++];
    }
    console.log(`You've got ${matchObject.length} matches!`);
    console.table(matchObject);
  break;
  }

