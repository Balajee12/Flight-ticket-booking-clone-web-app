const buses = [
  { id: "volvo_1", from: "Bangalore", to: "Chennai", date: "09/11/2025", time: "10:00 PM", price: "₹800" },
  { id: "sleeper_2", from: "Mumbai", to: "Pune", date: "10/11/2025", time: "11:30 PM", price: "₹400" },
  { id: "ac_3", from: "Delhi", to: "Jaipur", date: "11/11/2025", time: "6:00 AM", price: "₹600" },
  { id: "volvo_4", from: "Hyderabad", to: "Bangalore", date: "12/11/2025", time: "9:00 PM", price: "₹900" },
  { id: "sleeper_5", from: "Chennai", to: "Bangalore", date: "13/11/2025", time: "10:30 PM", price: "₹750" },
  { id: "ac_6", from: "Pune", to: "Mumbai", date: "14/11/2025", time: "7:00 AM", price: "₹350" },
  { id: "volvo_7", from: "Kolkata", to: "Bhubaneswar", date: "15/11/2025", time: "8:00 PM", price: "₹850" },
  { id: "sleeper_8", from: "Ahmedabad", to: "Surat", date: "16/11/2025", time: "5:00 PM", price: "₹300" },
  { id: "ac_9", from: "Jaipur", to: "Delhi", date: "17/11/2025", time: "11:00 PM", price: "₹550" },
  { id: "volvo_10", from: "Goa", to: "Mumbai", date: "18/11/2025", time: "9:30 PM", price: "₹1000" },
  { id: "sleeper_11", from: "Bangalore", to: "Hyderabad", date: "19/11/2025", time: "10:00 PM", price: "₹850" },
  { id: "ac_12", from: "Chennai", to: "Coimbatore", date: "20/11/2025", time: "11:00 PM", price: "₹650" },
  { id: "volvo_13", from: "Delhi", to: "Chandigarh", date: "21/11/2025", time: "6:30 AM", price: "₹700" },
  { id: "sleeper_14", from: "Mumbai", to: "Goa", date: "22/11/2025", time: "8:00 PM", price: "₹950" },
  { id: "ac_15", from: "Pune", to: "Bangalore", date: "23/11/2025", time: "7:00 PM", price: "₹1100" },
  { id: "volvo_16", from: "Hyderabad", to: "Chennai", date: "24/11/2025", time: "9:00 PM", price: "₹900" },
  { id: "sleeper_17", from: "Kolkata", to: "Patna", date: "25/11/2025", time: "10:00 PM", price: "₹600" },
  { id: "ac_18", from: "Bangalore", to: "Mysore", date: "26/11/2025", time: "7:30 AM", price: "₹400" },
  { id: "volvo_19", from: "Chennai", to: "Pondicherry", date: "27/11/2025", time: "8:00 AM", price: "₹500" },
  { id: "sleeper_20", from: "Delhi", to: "Agra", date: "28/11/2025", time: "6:00 AM", price: "₹450" },
  { id: "volvo_21", from: "Mumbai", to: "Nashik", date: "29/11/2025", time: "9:00 PM", price: "₹550" },
  { id: "ac_22", from: "Bangalore", to: "Coimbatore", date: "30/11/2025", time: "10:30 PM", price: "₹800" },
  { id: "sleeper_23", from: "Delhi", to: "Lucknow", date: "01/12/2025", time: "11:00 PM", price: "₹700" },
  { id: "volvo_24", from: "Chennai", to: "Madurai", date: "02/12/2025", time: "9:30 PM", price: "₹750" },
  { id: "ac_25", from: "Hyderabad", to: "Vijayawada", date: "03/12/2025", time: "8:00 PM", price: "₹600" },
  { id: "sleeper_26", from: "Pune", to: "Goa", date: "04/12/2025", time: "10:00 PM", price: "₹900" },
  { id: "volvo_27", from: "Kolkata", to: "Siliguri", date: "05/12/2025", time: "7:00 PM", price: "₹1100" },
  { id: "ac_28", from: "Ahmedabad", to: "Rajkot", date: "06/12/2025", time: "6:00 AM", price: "₹450" },
  { id: "sleeper_29", from: "Jaipur", to: "Udaipur", date: "07/12/2025", time: "8:30 PM", price: "₹650" },
  { id: "volvo_30", from: "Mumbai", to: "Aurangabad", date: "08/12/2025", time: "9:00 PM", price: "₹700" },
  { id: "ac_31", from: "Bangalore", to: "Mangalore", date: "09/12/2025", time: "10:00 PM", price: "₹850" },
  { id: "sleeper_32", from: "Chennai", to: "Trichy", date: "10/12/2025", time: "11:00 PM", price: "₹550" },
  { id: "volvo_33", from: "Delhi", to: "Dehradun", date: "11/12/2025", time: "6:30 AM", price: "₹800" },
  { id: "ac_34", from: "Hyderabad", to: "Warangal", date: "12/12/2025", time: "7:00 AM", price: "₹400" },
  { id: "sleeper_35", from: "Pune", to: "Kolhapur", date: "13/12/2025", time: "8:00 PM", price: "₹600" },
  { id: "volvo_36", from: "Kolkata", to: "Asansol", date: "14/12/2025", time: "9:00 PM", price: "₹500" },
  { id: "ac_37", from: "Mumbai", to: "Surat", date: "15/12/2025", time: "10:00 PM", price: "₹650" },
  { id: "sleeper_38", from: "Bangalore", to: "Hubli", date: "16/12/2025", time: "11:00 PM", price: "₹750" },
  { id: "volvo_39", from: "Chennai", to: "Salem", date: "17/12/2025", time: "9:30 PM", price: "₹550" },
  { id: "ac_40", from: "Delhi", to: "Amritsar", date: "18/12/2025", time: "8:00 PM", price: "₹900" },
  { id: "sleeper_41", from: "Hyderabad", to: "Tirupati", date: "19/12/2025", time: "10:30 PM", price: "₹700" },
  { id: "volvo_42", from: "Pune", to: "Nashik", date: "20/12/2025", time: "7:00 AM", price: "₹450" },
  { id: "ac_43", from: "Kolkata", to: "Durgapur", date: "21/12/2025", time: "8:00 PM", price: "₹550" },
  { id: "sleeper_44", from: "Ahmedabad", to: "Vadodara", date: "22/12/2025", time: "9:00 PM", price: "₹400" },
  { id: "volvo_45", from: "Jaipur", to: "Jodhpur", date: "23/12/2025", time: "10:00 PM", price: "₹800" },
  { id: "ac_46", from: "Mumbai", to: "Indore", date: "24/12/2025", time: "11:00 PM", price: "₹1000" },
  { id: "sleeper_47", from: "Bangalore", to: "Kochi", date: "25/12/2025", time: "9:00 PM", price: "₹1100" },
  { id: "volvo_48", from: "Chennai", to: "Vellore", date: "26/12/2025", time: "8:00 PM", price: "₹500" },
  { id: "ac_49", from: "Delhi", to: "Haridwar", date: "27/12/2025", time: "6:00 AM", price: "₹650" },
  { id: "sleeper_50", from: "Hyderabad", to: "Nellore", date: "28/12/2025", time: "10:00 PM", price: "₹600" },
  { id: "volvo_51", from: "Pune", to: "Aurangabad", date: "29/12/2025", time: "9:00 PM", price: "₹700" },
  { id: "ac_52", from: "Kolkata", to: "Ranchi", date: "30/12/2025", time: "8:00 PM", price: "₹900" },
  { id: "sleeper_53", from: "Mumbai", to: "Nagpur", date: "31/12/2025", time: "10:00 PM", price: "₹1000" },
  { id: "volvo_54", from: "Bangalore", to: "Pondicherry", date: "01/01/2026", time: "11:00 PM", price: "₹750" },
  { id: "ac_55", from: "Chennai", to: "Bangalore", date: "02/01/2026", time: "10:30 PM", price: "₹800" },
  { id: "sleeper_56", from: "Delhi", to: "Shimla", date: "03/01/2026", time: "7:00 AM", price: "₹850" },
  { id: "volvo_57", from: "Hyderabad", to: "Pune", date: "04/01/2026", time: "9:00 PM", price: "₹950" },
  { id: "ac_58", from: "Ahmedabad", to: "Mumbai", date: "05/01/2026", time: "10:00 PM", price: "₹700" },
  { id: "sleeper_59", from: "Jaipur", to: "Agra", date: "06/01/2026", time: "8:00 PM", price: "₹600" },
  { id: "volvo_60", from: "Kolkata", to: "Guwahati", date: "07/01/2026", time: "7:00 PM", price: "₹1200" },
  { id: "ac_61", from: "Pune", to: "Hyderabad", date: "08/01/2026", time: "9:30 PM", price: "₹900" },
  { id: "sleeper_62", from: "Mumbai", to: "Ahmedabad", date: "09/01/2026", time: "10:00 PM", price: "₹750" },
  { id: "volvo_63", from: "Bangalore", to: "Chennai", date: "10/01/2026", time: "11:00 PM", price: "₹800" },
  { id: "ac_64", from: "Chennai", to: "Coimbatore", date: "11/01/2026", time: "10:00 PM", price: "₹650" },
  { id: "sleeper_65", from: "Delhi", to: "Manali", date: "12/01/2026", time: "6:00 AM", price: "₹1000" },
  { id: "volvo_66", from: "Hyderabad", to: "Bangalore", date: "13/01/2026", time: "9:00 PM", price: "₹900" },
  { id: "ac_67", from: "Kolkata", to: "Patna", date: "14/01/2026", time: "8:00 PM", price: "₹600" },
  { id: "sleeper_68", from: "Ahmedabad", to: "Jaipur", date: "15/01/2026", time: "9:00 PM", price: "₹800" },
  { id: "volvo_69", from: "Pune", to: "Mumbai", date: "16/01/2026", time: "7:00 AM", price: "₹350" },
  { id: "ac_70", from: "Mumbai", to: "Pune", date: "17/01/2026", time: "8:00 AM", price: "₹350" },
  { id: "sleeper_71", from: "Bangalore", to: "Hyderabad", date: "18/01/2026", time: "10:00 PM", price: "₹850" },
  { id: "volvo_72", from: "Chennai", to: "Madurai", date: "19/01/2026", time: "9:30 PM", price: "₹750" },
  { id: "ac_73", from: "Delhi", to: "Jaipur", date: "20/01/2026", time: "6:00 AM", price: "₹600" },
  { id: "sleeper_74", from: "Hyderabad", to: "Chennai", date: "21/01/2026", time: "9:00 PM", price: "₹900" },
  { id: "volvo_75", from: "Kolkata", to: "Bhubaneswar", date: "22/01/2026", time: "8:00 PM", price: "₹850" },
  { id: "ac_76", from: "Ahmedabad", to: "Surat", date: "23/01/2026", time: "5:00 PM", price: "₹300" },
  { id: "sleeper_77", from: "Jaipur", to: "Delhi", date: "24/01/2026", time: "11:00 PM", price: "₹550" },
  { id: "volvo_78", from: "Goa", to: "Mumbai", date: "25/01/2026", time: "9:30 PM", price: "₹1000" },
  { id: "ac_79", from: "Pune", to: "Bangalore", date: "26/01/2026", time: "7:00 PM", price: "₹1100" },
  { id: "sleeper_80", from: "Mumbai", to: "Goa", date: "27/01/2026", time: "8:00 PM", price: "₹950" },
  { id: "volvo_81", from: "Bangalore", to: "Mysore", date: "28/01/2026", time: "7:30 AM", price: "₹400" },
  { id: "ac_82", from: "Chennai", to: "Pondicherry", date: "29/01/2026", time: "8:00 AM", price: "₹500" },
  { id: "sleeper_83", from: "Delhi", to: "Agra", date: "30/01/2026", time: "6:00 AM", price: "₹450" },
  { id: "volvo_84", from: "Hyderabad", to: "Vijayawada", date: "31/01/2026", time: "8:00 PM", price: "₹600" },
  { id: "ac_85", from: "Kolkata", to: "Siliguri", date: "01/02/2026", time: "7:00 PM", price: "₹1100" },
  { id: "sleeper_86", from: "Ahmedabad", to: "Rajkot", date: "02/02/2026", time: "6:00 AM", price: "₹450" },
  { id: "volvo_87", from: "Pune", to: "Goa", date: "03/02/2026", time: "10:00 PM", price: "₹900" },
  { id: "ac_88", from: "Mumbai", to: "Nashik", date: "04/02/2026", time: "9:00 PM", price: "₹550" },
  { id: "sleeper_89", from: "Bangalore", to: "Coimbatore", date: "05/02/2026", time: "10:30 PM", price: "₹800" },
  { id: "volvo_90", from: "Chennai", to: "Trichy", date: "06/02/2026", time: "11:00 PM", price: "₹550" },
  { id: "ac_91", from: "Delhi", to: "Lucknow", date: "07/02/2026", time: "11:00 PM", price: "₹700" },
  { id: "sleeper_92", from: "Hyderabad", to: "Warangal", date: "08/02/2026", time: "7:00 AM", price: "₹400" },
  { id: "volvo_93", from: "Kolkata", to: "Asansol", date: "09/02/2026", time: "9:00 PM", price: "₹500" },
  { id: "ac_94", from: "Jaipur", to: "Udaipur", date: "10/02/2026", time: "8:30 PM", price: "₹650" },
  { id: "sleeper_95", from: "Pune", to: "Kolhapur", date: "11/02/2026", time: "8:00 PM", price: "₹600" },
  { id: "volvo_96", from: "Mumbai", to: "Aurangabad", date: "12/02/2026", time: "9:00 PM", price: "₹700" },
  { id: "ac_97", from: "Bangalore", to: "Mangalore", date: "13/02/2026", time: "10:00 PM", price: "₹850" },
  { id: "sleeper_98", from: "Chennai", to: "Salem", date: "14/02/2026", time: "9:30 PM", price: "₹550" },
  { id: "volvo_99", from: "Delhi", to: "Chandigarh", date: "15/02/2026", time: "6:30 AM", price: "₹700" },
  { id: "ac_100", from: "Hyderabad", to: "Tirupati", date: "16/02/2026", time: "10:30 PM", price: "₹700" }
];

function searchBuses() {
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value.trim();
  const busList = document.getElementById("bus-list");
  busList.innerHTML = "";

  if (!from || !to || !date) {
    alert("Please fill all fields (From, To, and Date)!");
    return;
  }

  const results = buses.filter(b => 
    b.from.toLowerCase().includes(from.toLowerCase()) &&
    b.to.toLowerCase().includes(to.toLowerCase())
  );

  if (results.length === 0) {
    busList.innerHTML = "<li>No buses found!</li>";
    return;
  }

  results.forEach(b => {
    const li = document.createElement("li");
    li.innerHTML = `Bus ${b.id}: ${b.from} → ${b.to} | ${b.date} | ${b.time} | ${b.price} 
    <button onclick="bookBus('${b.id}')">Book Now</button>`;
    busList.appendChild(li);
  });
}

function bookBus(id) {
  const bus = buses.find(b => b.id === id);
  localStorage.setItem("selectedBus", JSON.stringify(bus));
  window.location.href = "bus-booking.html";
}
