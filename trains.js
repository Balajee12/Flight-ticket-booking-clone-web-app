const trains = [
  { id: "rajdhani_1", from: "Delhi", to: "Mumbai", date: "09/11/2025", time: "4:00 PM", price: "₹1200" },
  { id: "shatabdi_2", from: "Delhi", to: "Chandigarh", date: "10/11/2025", time: "7:00 AM", price: "₹800" },
  { id: "duronto_3", from: "Bangalore", to: "Chennai", date: "11/11/2025", time: "6:30 PM", price: "₹600" },
  { id: "garibrath_4", from: "Kolkata", to: "Delhi", date: "12/11/2025", time: "9:00 PM", price: "₹950" },
  { id: "express_5", from: "Mumbai", to: "Goa", date: "13/11/2025", time: "11:00 AM", price: "₹450" },
  { id: "rajdhani_6", from: "Chennai", to: "Bangalore", date: "14/11/2025", time: "5:30 AM", price: "₹550" },
  { id: "shatabdi_7", from: "Hyderabad", to: "Pune", date: "15/11/2025", time: "8:00 AM", price: "₹700" },
  { id: "duronto_8", from: "Ahmedabad", to: "Mumbai", date: "16/11/2025", time: "3:00 PM", price: "₹500" },
  { id: "express_9", from: "Jaipur", to: "Delhi", date: "17/11/2025", time: "10:00 PM", price: "₹400" },
  { id: "garibrath_10", from: "Lucknow", to: "Kolkata", date: "18/11/2025", time: "7:30 PM", price: "₹850" },
  { id: "rajdhani_11", from: "Delhi", to: "Kolkata", date: "19/11/2025", time: "5:00 PM", price: "₹1100" },
  { id: "shatabdi_12", from: "Mumbai", to: "Pune", date: "20/11/2025", time: "6:00 AM", price: "₹350" },
  { id: "duronto_13", from: "Chennai", to: "Hyderabad", date: "21/11/2025", time: "9:30 PM", price: "₹650" },
  { id: "express_14", from: "Bangalore", to: "Mumbai", date: "22/11/2025", time: "11:00 PM", price: "₹900" },
  { id: "garibrath_15", from: "Delhi", to: "Jaipur", date: "23/11/2025", time: "8:30 AM", price: "₹380" },
  { id: "rajdhani_16", from: "Kolkata", to: "Chennai", date: "24/11/2025", time: "2:00 PM", price: "₹1050" },
  { id: "shatabdi_17", from: "Pune", to: "Mumbai", date: "25/11/2025", time: "7:00 AM", price: "₹320" },
  { id: "duronto_18", from: "Hyderabad", to: "Bangalore", date: "26/11/2025", time: "10:00 AM", price: "₹580" },
  { id: "express_19", from: "Goa", to: "Mumbai", date: "27/11/2025", time: "4:30 PM", price: "₹480" },
  { id: "garibrath_20", from: "Chandigarh", to: "Delhi", date: "28/11/2025", time: "6:00 PM", price: "₹750" },
  { id: "rajdhani_21", from: "Mumbai", to: "Delhi", date: "29/11/2025", time: "4:00 PM", price: "₹1200" },
  { id: "shatabdi_22", from: "Bangalore", to: "Mysore", date: "30/11/2025", time: "7:00 AM", price: "₹300" },
  { id: "duronto_23", from: "Delhi", to: "Lucknow", date: "01/12/2025", time: "6:30 PM", price: "₹650" },
  { id: "express_24", from: "Chennai", to: "Coimbatore", date: "02/12/2025", time: "9:00 PM", price: "₹500" },
  { id: "garibrath_25", from: "Kolkata", to: "Patna", date: "03/12/2025", time: "11:00 AM", price: "₹550" },
  { id: "rajdhani_26", from: "Hyderabad", to: "Delhi", date: "04/12/2025", time: "5:30 AM", price: "₹1150" },
  { id: "shatabdi_27", from: "Mumbai", to: "Ahmedabad", date: "05/12/2025", time: "8:00 AM", price: "₹600" },
  { id: "duronto_28", from: "Bangalore", to: "Goa", date: "06/12/2025", time: "3:00 PM", price: "₹700" },
  { id: "express_29", from: "Delhi", to: "Amritsar", date: "07/12/2025", time: "10:00 PM", price: "₹550" },
  { id: "garibrath_30", from: "Chennai", to: "Bangalore", date: "08/12/2025", time: "7:30 PM", price: "₹550" },
  { id: "rajdhani_31", from: "Kolkata", to: "Mumbai", date: "09/12/2025", time: "5:00 PM", price: "₹1250" },
  { id: "shatabdi_32", from: "Pune", to: "Goa", date: "10/12/2025", time: "6:00 AM", price: "₹450" },
  { id: "duronto_33", from: "Hyderabad", to: "Chennai", date: "11/12/2025", time: "9:30 PM", price: "₹650" },
  { id: "express_34", from: "Mumbai", to: "Bangalore", date: "12/12/2025", time: "11:00 PM", price: "₹900" },
  { id: "garibrath_35", from: "Jaipur", to: "Delhi", date: "13/12/2025", time: "8:30 AM", price: "₹380" },
  { id: "rajdhani_36", from: "Delhi", to: "Bangalore", date: "14/12/2025", time: "2:00 PM", price: "₹1300" },
  { id: "shatabdi_37", from: "Mumbai", to: "Pune", date: "15/12/2025", time: "7:00 AM", price: "₹320" },
  { id: "duronto_38", from: "Bangalore", to: "Hyderabad", date: "16/12/2025", time: "10:00 AM", price: "₹580" },
  { id: "express_39", from: "Chennai", to: "Mumbai", date: "17/12/2025", time: "4:30 PM", price: "₹950" },
  { id: "garibrath_40", from: "Delhi", to: "Chandigarh", date: "18/12/2025", time: "6:00 PM", price: "₹750" },
  { id: "rajdhani_41", from: "Kolkata", to: "Delhi", date: "19/12/2025", time: "4:00 PM", price: "₹1100" },
  { id: "shatabdi_42", from: "Ahmedabad", to: "Mumbai", date: "20/12/2025", time: "7:00 AM", price: "₹600" },
  { id: "duronto_43", from: "Delhi", to: "Jaipur", date: "21/12/2025", time: "6:30 PM", price: "₹400" },
  { id: "express_44", from: "Bangalore", to: "Chennai", date: "22/12/2025", time: "9:00 PM", price: "₹600" },
  { id: "garibrath_45", from: "Mumbai", to: "Goa", date: "23/12/2025", time: "11:00 AM", price: "₹450" },
  { id: "rajdhani_46", from: "Chennai", to: "Delhi", date: "24/12/2025", time: "5:30 AM", price: "₹1350" },
  { id: "shatabdi_47", from: "Pune", to: "Hyderabad", date: "25/12/2025", time: "8:00 AM", price: "₹700" },
  { id: "duronto_48", from: "Mumbai", to: "Ahmedabad", date: "26/12/2025", time: "3:00 PM", price: "₹500" },
  { id: "express_49", from: "Delhi", to: "Jaipur", date: "27/12/2025", time: "10:00 PM", price: "₹400" },
  { id: "garibrath_50", from: "Kolkata", to: "Lucknow", date: "28/12/2025", time: "7:30 PM", price: "₹850" },
  { id: "rajdhani_51", from: "Mumbai", to: "Kolkata", date: "29/12/2025", time: "5:00 PM", price: "₹1250" },
  { id: "shatabdi_52", from: "Bangalore", to: "Mysore", date: "30/12/2025", time: "6:00 AM", price: "₹300" },
  { id: "duronto_53", from: "Hyderabad", to: "Chennai", date: "31/12/2025", time: "9:30 PM", price: "₹650" },
  { id: "express_54", from: "Chennai", to: "Bangalore", date: "01/01/2026", time: "11:00 PM", price: "₹600" },
  { id: "garibrath_55", from: "Delhi", to: "Lucknow", date: "02/01/2026", time: "8:30 AM", price: "₹650" },
  { id: "rajdhani_56", from: "Bangalore", to: "Delhi", date: "03/01/2026", time: "2:00 PM", price: "₹1300" },
  { id: "shatabdi_57", from: "Mumbai", to: "Pune", date: "04/01/2026", time: "7:00 AM", price: "₹320" },
  { id: "duronto_58", from: "Delhi", to: "Bangalore", date: "05/01/2026", time: "10:00 AM", price: "₹1300" },
  { id: "express_59", from: "Kolkata", to: "Goa", date: "06/01/2026", time: "4:30 PM", price: "₹1100" },
  { id: "garibrath_60", from: "Chandigarh", to: "Delhi", date: "07/01/2026", time: "6:00 PM", price: "₹750" },
  { id: "rajdhani_61", from: "Delhi", to: "Mumbai", date: "08/01/2026", time: "4:00 PM", price: "₹1200" },
  { id: "shatabdi_62", from: "Chennai", to: "Coimbatore", date: "09/01/2026", time: "7:00 AM", price: "₹500" },
  { id: "duronto_63", from: "Mumbai", to: "Chennai", date: "10/01/2026", time: "6:30 PM", price: "₹950" },
  { id: "express_64", from: "Bangalore", to: "Goa", date: "11/01/2026", time: "9:00 PM", price: "₹700" },
  { id: "garibrath_65", from: "Jaipur", to: "Mumbai", date: "12/01/2026", time: "11:00 AM", price: "₹900" },
  { id: "rajdhani_66", from: "Kolkata", to: "Bangalore", date: "13/01/2026", time: "5:30 AM", price: "₹1200" },
  { id: "shatabdi_67", from: "Pune", to: "Mumbai", date: "14/01/2026", time: "8:00 AM", price: "₹320" },
  { id: "duronto_68", from: "Hyderabad", to: "Mumbai", date: "15/01/2026", time: "3:00 PM", price: "₹850" },
  { id: "express_69", from: "Delhi", to: "Amritsar", date: "16/01/2026", time: "10:00 PM", price: "₹550" },
  { id: "garibrath_70", from: "Chennai", to: "Hyderabad", date: "17/01/2026", time: "7:30 PM", price: "₹650" },
  { id: "rajdhani_71", from: "Mumbai", to: "Delhi", date: "18/01/2026", time: "5:00 PM", price: "₹1200" },
  { id: "shatabdi_72", from: "Bangalore", to: "Chennai", date: "19/01/2026", time: "6:00 AM", price: "₹600" },
  { id: "duronto_73", from: "Delhi", to: "Kolkata", date: "20/01/2026", time: "9:30 PM", price: "₹1100" },
  { id: "express_74", from: "Ahmedabad", to: "Mumbai", date: "21/01/2026", time: "11:00 PM", price: "₹500" },
  { id: "garibrath_75", from: "Kolkata", to: "Patna", date: "22/01/2026", time: "8:30 AM", price: "₹550" },
  { id: "rajdhani_76", from: "Chennai", to: "Mumbai", date: "23/01/2026", time: "2:00 PM", price: "₹950" },
  { id: "shatabdi_77", from: "Delhi", to: "Chandigarh", date: "24/01/2026", time: "7:00 AM", price: "₹800" },
  { id: "duronto_78", from: "Bangalore", to: "Hyderabad", date: "25/01/2026", time: "10:00 AM", price: "₹580" },
  { id: "express_79", from: "Mumbai", to: "Goa", date: "26/01/2026", time: "4:30 PM", price: "₹450" },
  { id: "garibrath_80", from: "Jaipur", to: "Delhi", date: "27/01/2026", time: "6:00 PM", price: "₹380" },
  { id: "rajdhani_81", from: "Delhi", to: "Chennai", date: "28/01/2026", time: "4:00 PM", price: "₹1350" },
  { id: "shatabdi_82", from: "Pune", to: "Goa", date: "29/01/2026", time: "7:00 AM", price: "₹450" },
  { id: "duronto_83", from: "Hyderabad", to: "Delhi", date: "30/01/2026", time: "6:30 PM", price: "₹1150" },
  { id: "express_84", from: "Chennai", to: "Bangalore", date: "31/01/2026", time: "9:00 PM", price: "₹600" },
  { id: "garibrath_85", from: "Mumbai", to: "Pune", date: "01/02/2026", time: "11:00 AM", price: "₹350" },
  { id: "rajdhani_86", from: "Kolkata", to: "Delhi", date: "02/02/2026", time: "5:30 AM", price: "₹1100" },
  { id: "shatabdi_87", from: "Bangalore", to: "Mysore", date: "03/02/2026", time: "8:00 AM", price: "₹300" },
  { id: "duronto_88", from: "Delhi", to: "Mumbai", date: "04/02/2026", time: "3:00 PM", price: "₹1200" },
  { id: "express_89", from: "Ahmedabad", to: "Jaipur", date: "05/02/2026", time: "10:00 PM", price: "₹700" },
  { id: "garibrath_90", from: "Chennai", to: "Coimbatore", date: "06/02/2026", time: "7:30 PM", price: "₹500" },
  { id: "rajdhani_91", from: "Mumbai", to: "Bangalore", date: "07/02/2026", time: "5:00 PM", price: "₹900" },
  { id: "shatabdi_92", from: "Delhi", to: "Jaipur", date: "08/02/2026", time: "6:00 AM", price: "₹400" },
  { id: "duronto_93", from: "Bangalore", to: "Chennai", date: "09/02/2026", time: "9:30 PM", price: "₹600" },
  { id: "express_94", from: "Kolkata", to: "Mumbai", date: "10/02/2026", time: "11:00 PM", price: "₹1250" },
  { id: "garibrath_95", from: "Hyderabad", to: "Pune", date: "11/02/2026", time: "8:30 AM", price: "₹700" },
  { id: "rajdhani_96", from: "Delhi", to: "Kolkata", date: "12/02/2026", time: "2:00 PM", price: "₹1100" },
  { id: "shatabdi_97", from: "Mumbai", to: "Ahmedabad", date: "13/02/2026", time: "7:00 AM", price: "₹600" },
  { id: "duronto_98", from: "Chennai", to: "Hyderabad", date: "14/02/2026", time: "10:00 AM", price: "₹650" },
  { id: "express_99", from: "Bangalore", to: "Goa", date: "15/02/2026", time: "4:30 PM", price: "₹700" },
  { id: "garibrath_100", from: "Pune", to: "Mumbai", date: "16/02/2026", time: "6:00 PM", price: "₹320" }
];

function searchTrains() {
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value.trim();
  const trainList = document.getElementById("train-list");
  trainList.innerHTML = "";

  if (!from || !to || !date) {
    alert("Please fill all fields (From, To, and Date)!");
    return;
  }

  const results = trains.filter(t => 
    t.from.toLowerCase().includes(from.toLowerCase()) &&
    t.to.toLowerCase().includes(to.toLowerCase())
  );

  if (results.length === 0) {
    trainList.innerHTML = "<li>No trains found!</li>";
    return;
  }

  results.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `Train ${t.id}: ${t.from} → ${t.to} | ${t.date} | ${t.time} | ${t.price} 
    <button onclick="bookTrain('${t.id}')">Book Now</button>`;
    trainList.appendChild(li);
  });
}

function bookTrain(id) {
  const train = trains.find(t => t.id === id);
  localStorage.setItem("selectedTrain", JSON.stringify(train));
  window.location.href = "train-booking.html";
}
