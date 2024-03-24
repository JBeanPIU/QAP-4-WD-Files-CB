// Desc - A Javascript program dedicated towards storing customer data to the motel
// By   - Cameron Beanland
// Date - March 22nd, 2024

document.addEventListener("DOMContentLoaded", function () {
  // Start of javascript program
  const motelCustomer = {
    /// Customer information, or attributes
    firstName: "Mr.",
    lastName: "Larpus",
    gender: "Male",
    birthDate: "1999-01-19",
    phoneNum: "(310) 767-5800",

    // Payment details
    payMethod: "Credit Card",

    // Motel benefits/services
    memberType: "Basic",
    roomPref: [
      "Single",
      "Double",
      "King",
      "Executive",
      "Godlike",
      "Inconcievable",
    ],
    // Create array

    // Sub-objects below
    mailAddress: {
      streetAdd: "150 Higgins Line",
      city: "St. John's",
      postCode: "A1B-2Y6",
      province: "Newfoundland",
    },

    checkInDate: {
      date: "2024-03-22",
    },

    checkOutDate: {
      date: "2024-03-25",
    },
    // End of sub-objects

    /// Moving onto functions (methods) to calculate age of guest, and check-in/check-out date's
    calcAge: function () {
      const today = new Date();
      const birthDate = new Date(this.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear(); // Used to determine age
      const monthDiff = today.getDate() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate())) {
        age--; // Used to reduce age by one if customer's birthday hasn't come up yet during the year
      }
      return age;
    },

    calcStayLength: function () {
      const checkInDate = new Date(this.checkInDate.date);
      const checkOutDate = new Date(this.checkOutDate.date);

      if (isNaN(checkInDate) || isNaN(checkOutDate)) {
        return "Error - Invalid Date";
      }

      const millisecondsPerDay = 1000 * 60 * 60 * 24; // Math to convert milliseconds to days
      const stayLength = Math.round(
        (checkOutDate - checkInDate) / millisecondsPerDay
      );
      return stayLength;
    },
  };

  // Literal string template
  const custInfo = ` Customer information:

  <ul>     
  <li>First name: ${motelCustomer.firstName}</li>
  <li>Last name: ${motelCustomer.lastName}</li>
  <li>Gender: ${motelCustomer.gender}</li>
  <li>Date of birth: ${motelCustomer.birthDate}</li>
  <li>Phone number: ${motelCustomer.phoneNum}</li>
  
  <li>Address: ${motelCustomer.mailAddress.streetAdd},</li> 
              ${motelCustomer.mailAddress.city}</li>
              ${motelCustomer.mailAddress.postCode}</li> 
              ${motelCustomer.mailAddress.province}</li>
  
  <li>Pay select: ${motelCustomer.payMethod}</li>
  
  <li>Check-In date: ${motelCustomer.checkInDate.date}</li>
  <li>Check-Out date: ${motelCustomer.checkOutDate.date}</li> 
  <li>Stay duration: ${motelCustomer.calcStayLength()}</li> 
  </ul>
  `;

  console.log(custInfo);
  document.body.innerHTML = custInfo;
});
