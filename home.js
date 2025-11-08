// Dummy flight data
const flights = [
  { id: "airasiaindia_1", from: "Goa", to: "Lucknow", date: "09/11/2025", time: "10:30 PM", price: "5279" },
  { id: "airindia_2", from: "Delhi", to: "Goa", date: "10/11/2025", time: "3:45 PM", price: "3456" },
  { id: "airasiaindia_3", "from": "Delhi", to: "Goa", date: "11/11/2025", time: "9:00 PM", price: "3726" },
  { id: "starair_4", from: "Mangalore", to: "Jamshedpur", date: "12/11/2025", time: "5:00 PM", price: "5139" },
  { id: "spicejet_5", from: "Jaipur", to: "Surat", date: "13/11/2025", time: "2:30 PM", price: "7371" },
  { id: "akasanair_6", from: "Ranchi", to: "Trivandrum", date: "14/11/2025", time: "7:00 AM", price: "3283" },
  { id: "indigo_7", from: "Goa", to: "Lucknow", date: "15/11/2025", time: "6:15 PM", price: "5823" },
  { id: "starair_8", from: "Kolkata", to: "Ahmedabad", date: "16/11/2025", time: "6:15 PM", price: "4447" },
  { id: "starair_9", from: "Indore", to: "Coimbatore", date: "17/11/2025", time: "8:30 PM", price: "5596" },
  { id: "airasiaindia_10", from: "Ranchi", to: "Trivandrum", date: "18/11/2025", time: "1:00 PM", price: "6900" },
  { id: "indigo_100", from: "Chennai", to: "Patna", date: "19/11/2025", time: "8:30 PM", price: "3314" },
  { id: "trujet_101", from: "Visakhapatnam", to: "Guwahati", date: "20/11/2025", time: "2:30 PM", price: "7371" },
  { id: "indigo_102", from: "Chennai", to: "Vishakhapatnam", date: "21/11/2025", time: "4:30 PM", price: "6900" },
  { id: "airasiaindia_103", from: "Mangalore", to: "Jamshedpur", date: "22/11/2025", time: "7:45 PM", price: "5352" },
  { id: "vistara_104", from: "Visakhapatnam", to: "Guwahati", date: "23/11/2025", time: "3:45 PM", price: "3563" },
  { id: "allianceair_105", from: "Kolkata", to: "Ahmedabad", date: "24/11/2025", time: "8:00 AM", price: "5739" },
  { id: "trujet_106", from: "Mumbai", to: "Delhi", date: "25/11/2025", time: "4:30 PM", price: "5405" },
  { id: "spicejet_107", from: "Visakhapatnam", to: "Guwahati", date: "26/11/2025", time: "9:00 PM", price: "5421" },
  { id: "starair_108", from: "Hyderabad", to: "Chandigarh", date: "27/11/2025", time: "12:15 PM", price: "7771" },
  { id: "spicejet_109", from: "Bangalore", to: "Chennai", date: "28/11/2025", time: "8:30 PM", price: "4088" },
  { id: "trujet_110", from: "Chennai", to: "Patna", date: "29/11/2025", time: "4:30 PM", price: "7830" },
  { id: "vistara_190", from: "Hyderabad", to: "Chandigarh", date: "30/11/2025", time: "11:30 AM", price: "7429" },
  { id: "trujet_2", from: "Kolkata", to: "Ahmedabad", date: "01/12/2025", time: "1:30 PM", price: "₹6757" },
  { id: "allianceair_3", from: "Nagpur", to: "Delhi", date: "02/12/2025", time: "9:00 PM", price: "₹7919" },
  { id: "spicejet_4", from: "Visakhapatnam", to: "Chennai", date: "03/12/2025", time: "10:30 PM", price: "₹7541" },
  { id: "goair_5", from: "Bhopal", to: "Bangalore", date: "04/12/2025", time: "7:45 PM", price: "₹5006" },
  { id: "indigo_6", from: "Bangalore", to: "Chennai", date: "05/12/2025", time: "10:00 AM", price: "₹6790" },
  { id: "vistara_7", from: "Visakhapatnam", to: "Guwahati", date: "06/12/2025", time: "10:00 AM", price: "₹3936" },
  { id: "spicejet_8", from: "Hyderabad", to: "Chandigarh", date: "07/12/2025", time: "7:45 PM", price: "₹7672" },
  { id: "airasiaindia_9", from: "Coimbatore", to: "Nagpur", date: "08/12/2025", time: "11:30 AM", price: "₹8057" },
  { id: "trujet_10", from: "Chennai", to: "Patna", date: "09/12/2025", time: "10:30 PM", price: "₹7646" },
  { id: "vistara_11", from: "Mumbai", to: "Nagpur", date: "10/12/2025", time: "8:00 AM", price: "₹8247" },
  { id: "vistara_12", from: "Coimbatore", to: "Chandigarh", date: "11/12/2025", time: "6:00 PM", price: "₹3933" },
  { id: "vistara_13", from: "Bangalore", to: "Guwahati", date: "12/12/2025", time: "10:00 AM", price: "₹5633" },
  { id: "trujet_14", from: "Surat", to: "Kolkata", date: "13/12/2025", time: "1:30 PM", price: "₹7736" },
  { id: "trujet_15", from: "Bhopal", to: "Pune", date: "14/12/2025", time: "8:00 AM", price: "₹7594" },
  { id: "airindia_16", from: "Chennai", to: "Coimbatore", date: "15/12/2025", time: "9:30 AM", price: "₹8048" },
  { id: "airasiaindia_17", from: "Mumbai", to: "Delhi", date: "16/12/2025", time: "7:45 PM", price: "₹4279" },
  { id: "vistara_18", from: "Nagpur", to: "Bangalore", date: "17/12/2025", time: "7:45 PM", price: "₹5638" },
  { id: "indigo_19", from: "Chennai", to: "Bhopal", date: "18/12/2025", time: "6:00 PM", price: "₹7499" },
  { id: "airasiaindia_20", from: "Delhi", to: "Lucknow", date: "19/12/2025", time: "8:00 AM", price: "₹3598" },
  { id: "vistara_21", from: "Kochi", to: "Ahmedabad", date: "20/12/2025", time: "7:45 PM", price: "₹8096" },
  { id: "akasaair_22", from: "Kolkata", to: "Guwahati", date: "21/12/2025", time: "11:30 AM", price: "₹5301" },
  { id: "airindia_23", from: "Visakhapatnam", to: "Patna", date: "22/12/2025", time: "9:00 PM", price: "₹6296" },
  { id: "starair_24", from: "Indore", to: "Coimbatore", date: "23/12/2025", time: "7:45 PM", price: "₹7990" },
  { id: "akasaair_25", from: "Hyderabad", to: "Bangalore", date: "24/12/2025", time: "4:30 PM", price: "₹4816" },
  { id: "spicejet_26", from: "Chennai", to: "Surat", date: "25/12/2025", time: "9:30 AM", price: "₹7054" },
  { id: "trujet_27", from: "Jaipur", to: "Ahmedabad", date: "26/12/2025", time: "1:30 PM", price: "₹3205" },
  { id: "spicejet_1", from: "Chennai", to: "Visakhapatnam", date: "27/12/2025", time: "8:00 AM", price: "₹3639" },
  { id: "spicejet_28", from: "Bangalore", to: "Kolkata", date: "28/12/2025", time: "12:00 PM", price: "₹6378" },
  { id: "airindia_29", from: "Chandigarh", to: "Kochi", date: "29/12/2025", time: "8:00 AM", price: "₹3331" },
  { id: "airasiaindia_30", from: "Hyderabad", to: "Indore", date: "30/12/2025", time: "9:00 PM", price: "₹3827" }
];

function searchFlights() {
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value.trim();
  const flightList = document.getElementById("flight-list");
  flightList.innerHTML = "";

  if (!from || !to || !date) {
    alert("Please fill all fields (From, To, and Date)!");
    return;
  }

  const results = flights.filter(f => 
    f.from.toLowerCase().includes(from.toLowerCase()) &&
    f.to.toLowerCase().includes(to.toLowerCase())
  );

  if (results.length === 0) {
    flightList.innerHTML = "<li>No flights found!</li>";
    return;
  }

  results.forEach(f => {
    const li = document.createElement("li");
    li.innerHTML = `Flight ${f.id}: ${f.from} → ${f.to} | ${f.date}| ${f.time} | ${f.price} 
    <button onclick="bookFlight('${f.id}')">Book Now</button>`;
    flightList.appendChild(li);
  });
}


function bookFlight(id) {
  const flight = flights.find(f => f.id === id);
  localStorage.setItem("selectedFlight", JSON.stringify(flight));
  window.location.href = "flight-booking.html";
}
