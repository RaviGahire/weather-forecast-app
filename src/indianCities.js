const indianCities = [
    // Major Metro Cities
    { city: "Mumbai", state: "Maharashtra", lat: 19.0760, lon: 72.8777 },
    { city: "Delhi", state: "Delhi", lat: 28.7041, lon: 77.1025 },
    { city: "Bangalore", state: "Karnataka", lat: 12.9716, lon: 77.5946 },
    { city: "Kolkata", state: "West Bengal", lat: 22.5726, lon: 88.3639 },
    { city: "Chennai", state: "Tamil Nadu", lat: 13.0827, lon: 80.2707 },
    { city: "Hyderabad", state: "Telangana", lat: 17.3850, lon: 78.4867 },
    { city: "Pune", state: "Maharashtra", lat: 18.5204, lon: 73.8567 },
    { city: "Ahmedabad", state: "Gujarat", lat: 23.0225, lon: 72.5714 },

    // Tier 1 Cities
    { city: "Surat", state: "Gujarat", lat: 21.1702, lon: 72.8311 },
    { city: "Jaipur", state: "Rajasthan", lat: 26.9124, lon: 75.7873 },
    { city: "Lucknow", state: "Uttar Pradesh", lat: 26.8467, lon: 80.9462 },
    { city: "Kanpur", state: "Uttar Pradesh", lat: 26.4499, lon: 80.3319 },
    { city: "Nagpur", state: "Maharashtra", lat: 21.1458, lon: 79.0882 },
    { city: "Indore", state: "Madhya Pradesh", lat: 22.7196, lon: 75.8577 },
    { city: "Thane", state: "Maharashtra", lat: 19.2183, lon: 72.9781 },
    { city: "Bhopal", state: "Madhya Pradesh", lat: 23.2599, lon: 77.4126 },
    { city: "Visakhapatnam", state: "Andhra Pradesh", lat: 17.6868, lon: 83.2185 },
    { city: "Vadodara", state: "Gujarat", lat: 22.3072, lon: 73.1812 },

    // Tier 2 Cities
    { city: "Patna", state: "Bihar", lat: 25.5941, lon: 85.1376 },
    { city: "Agra", state: "Uttar Pradesh", lat: 27.1767, lon: 78.0081 },
    { city: "Nashik", state: "Maharashtra", lat: 19.9975, lon: 73.7898 },
    { city: "Faridabad", state: "Haryana", lat: 28.4089, lon: 77.3178 },
    { city: "Meerut", state: "Uttar Pradesh", lat: 28.9845, lon: 77.7064 },
    { city: "Rajkot", state: "Gujarat", lat: 22.3039, lon: 70.8022 },
    { city: "Kalyan", state: "Maharashtra", lat: 19.2437, lon: 73.1355 },
    { city: "Vasai", state: "Maharashtra", lat: 19.4883, lon: 72.8054 },
    { city: "Varanasi", state: "Uttar Pradesh", lat: 25.3176, lon: 82.9739 },
    { city: "Srinagar", state: "Jammu & Kashmir", lat: 34.0837, lon: 74.7973 },

    // Capital Cities
    { city: "Chandigarh", state: "Chandigarh", lat: 30.7333, lon: 76.7794 },
    { city: "Thiruvananthapuram", state: "Kerala", lat: 8.5241, lon: 76.9366 },
    { city: "Bhubaneswar", state: "Odisha", lat: 20.2961, lon: 85.8245 },
    { city: "Guwahati", state: "Assam", lat: 26.1445, lon: 91.7362 },
    { city: "Dehradun", state: "Uttarakhand", lat: 30.3165, lon: 78.0322 },
    { city: "Gandhinagar", state: "Gujarat", lat: 23.2156, lon: 72.6369 },
    { city: "Panaji", state: "Goa", lat: 15.4909, lon: 73.8278 },
    { city: "Raipur", state: "Chhattisgarh", lat: 21.2514, lon: 81.6296 },
    { city: "Ranchi", state: "Jharkhand", lat: 23.3441, lon: 85.3096 },
    { city: "Shimla", state: "Himachal Pradesh", lat: 31.1048, lon: 77.1734 },

    // Other Important Cities
    { city: "Kochi", state: "Kerala", lat: 9.9312, lon: 76.2673 },
    { city: "Coimbatore", state: "Tamil Nadu", lat: 11.0168, lon: 76.9558 },
    { city: "Madurai", state: "Tamil Nadu", lat: 9.9252, lon: 78.1198 },
    { city: "Jabalpur", state: "Madhya Pradesh", lat: 23.1815, lon: 79.9864 },
    { city: "Gwalior", state: "Madhya Pradesh", lat: 26.2183, lon: 78.1828 },
    { city: "Vijayawada", state: "Andhra Pradesh", lat: 16.5062, lon: 80.6480 },
    { city: "Jodhpur", state: "Rajasthan", lat: 26.2389, lon: 73.0243 },
    { city: "Raigarh", state: "Maharashtra", lat: 18.2636, lon: 73.0127 },
    { city: "Kota", state: "Rajasthan", lat: 25.2138, lon: 75.8648 },
    { city: "Gurgaon", state: "Haryana", lat: 28.4595, lon: 77.0266 },

    // Northeast Cities
    { city: "Imphal", state: "Manipur", lat: 24.8170, lon: 93.9368 },
    { city: "Shillong", state: "Meghalaya", lat: 25.5788, lon: 91.8933 },
    { city: "Aizawl", state: "Mizoram", lat: 23.1645, lon: 92.9376 },
    { city: "Agartala", state: "Tripura", lat: 23.8315, lon: 91.2868 },
    { city: "Kohima", state: "Nagaland", lat: 25.6751, lon: 94.1086 },
    { city: "Itanagar", state: "Arunachal Pradesh", lat: 27.0844, lon: 93.6053 },

    // Coastal Cities
    { city: "Mangalore", state: "Karnataka", lat: 12.9141, lon: 74.8560 },
    { city: "Calicut", state: "Kerala", lat: 11.2588, lon: 75.7804 },
    { city: "Puducherry", state: "Puducherry", lat: 11.9416, lon: 79.8083 },
    { city: "Daman", state: "Daman & Diu", lat: 20.3974, lon: 72.8328 },

    // Hill Stations
    { city: "Darjeeling", state: "West Bengal", lat: 27.0410, lon: 88.2663 },
    { city: "Ooty", state: "Tamil Nadu", lat: 11.4064, lon: 76.6932 },
    { city: "Manali", state: "Himachal Pradesh", lat: 32.2432, lon: 77.1892 },
    { city: "Mussoorie", state: "Uttarakhand", lat: 30.4598, lon: 78.0664 }
];