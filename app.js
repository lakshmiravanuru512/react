import React from "react";

import ReactDOM from "react-dom/client";

const Title=()=>(
    <a href="/">
        <img
    className="logo"
     alt="logo"
     src="https://th.bing.com/th/id/R.af5a39ced19e54077c1a274b7fbb148a?rik=AzowjuDH8gZAsw&riu=http%3a%2f%2fvillafood.it%2fsites%2fall%2fthemes%2fvillafood%2fimages%2flogo-villa-food.png&ehk=kgJImOzze%2bJNfc21PbTzzP5cF5%2bwaXDHIvQJnSYd6so%3d&risl=&pid=ImgRaw&r=0"/>
     </a>
);

const  Header=()=>{
    return(
        
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                </div>
        </div>
    );
};

const restaurentList=
      [
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "345400",
                  "name": "Avocado cafe",
                  "uuid": "412a1eb0-31b1-4b51-b75c-61ef93c53264",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "bc2lmmqtyg6dze8f4beu",
                  "cuisines": [
                    "Continental",
                    "Snacks"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "slaString": "32 MINS",
                  "lastMileTravel": 3.799999952316284,
                  "slugs": {
                    "restaurant": "avocado-cafe-indiranagar-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "1083",
                  "locality": "HAL 2nd Stage",
                  "parentId": 38041,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5988138~p=1~eid=00000186-7db5-9484-27bf-8464008b014a",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.7 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "345400",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 3.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.5",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "271",
                  "name": "Meghana Foods",
                  "uuid": "6769453d-609b-4798-a846-f25ee329049b",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "sotxv0gury7f7vrfvb2r",
                  "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "North Indian",
                    "Chinese",
                    "Seafood"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 4.800000190734863,
                  "slugs": {
                    "restaurant": "meghana-foods-cmh-road-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "544, First Floor, NearIndiranagar Metro Station, CMH Road, Indiranagar, Bangalore",
                  "locality": "CMH Road",
                  "parentId": 635,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FREE DELIVERY",
                    "shortDescriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "",
                    "shortDescriptionList": [
                      {
                        "meta": "Free Delivery",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "271",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 4.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.4",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "1286",
                  "name": "Leon's - Burgers & Wings (Leon Grill)",
                  "uuid": "521b57d6-7ce7-42d1-ae21-989f3a4328e7",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "qdn07nftnqzlxnv9a9o6",
                  "cuisines": [
                    "American",
                    "Snacks",
                    "Turkish",
                    "Portuguese",
                    "Continental"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 3,
                  "slugs": {
                    "restaurant": "leon-grill-hal-3rd-stage-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "1671, 9th Main, 4th Cross, HAL 3rd Stage, Indiranagar",
                  "locality": "HAL 3rd Stage",
                  "parentId": 371281,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                      {
                        "meta": "30% off | Use STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "30% off up to ₹75 | Use code STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "30% off up to ₹75 | Use code STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5976305~p=4~eid=00000186-7db5-9484-27bf-8465008b040c",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "1286",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "5937",
                  "name": "Burger King",
                  "uuid": "41b91124-2ff4-45a8-a11c-4d40171bcbe2",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "apvqwmyzowbwet17ep1l",
                  "cuisines": [
                    "Burgers",
                    "American"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 35000,
                  "costForTwoString": "₹350 FOR TWO",
                  "deliveryTime": 33,
                  "minDeliveryTime": 33,
                  "maxDeliveryTime": 33,
                  "slaString": "33 MINS",
                  "lastMileTravel": 4.800000190734863,
                  "slugs": {
                    "restaurant": "burger-king-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Salarpuria Plaza, No. 543, CMH Road, Nr Indira Nagar Metro station  Bangalore 560 038",
                  "locality": "CMH Road",
                  "parentId": 166,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "Get every item under 129",
                    "shortDescriptionList": [
                      {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "",
                    "shortDescriptionList": [
                      {
                        "meta": "",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "5937",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "lastMileTravel": 4.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.1",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "184132",
                  "name": "Little Black Choux",
                  "uuid": "37e57267-d488-411f-bb76-3732d6f08de9",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "io6o8vllpuou8zgu5stf",
                  "cuisines": [
                    "Italian",
                    "Continental",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 33,
                  "minDeliveryTime": 33,
                  "maxDeliveryTime": 33,
                  "slaString": "33 MINS",
                  "lastMileTravel": 3.799999952316284,
                  "slugs": {
                    "restaurant": "little-black-choux-indiranagar-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "971, (First Floor)12th A Main, 5th Cross, HAL 2nd Stage, Indiranagar, Bangalore.",
                  "locality": "HAL 2nd Stage",
                  "parentId": 125425,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FREE DELIVERY",
                    "shortDescriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "Free Choux- Chocolate on orders above ₹399",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "Free Choux- Chocolate on orders above ₹399",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "",
                    "shortDescriptionList": [
                      {
                        "meta": "Free Delivery",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "Free Choux- Chocolate on orders above ₹399",
                        "discountType": "Freebie",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5988389~p=7~eid=00000186-7db5-9484-27bf-8466008b0760",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.7 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "184132",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "lastMileTravel": 3.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "427",
                  "name": "Hotel Empire",
                  "uuid": "ade1100f-32c4-4653-8fae-157081d74aa6",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "vumnivx75awxz9eo1czq",
                  "cuisines": [
                    "North Indian",
                    "Kebabs",
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 45000,
                  "costForTwoString": "₹450 FOR TWO",
                  "deliveryTime": 33,
                  "minDeliveryTime": 33,
                  "maxDeliveryTime": 33,
                  "slaString": "33 MINS",
                  "lastMileTravel": 3.9000000953674316,
                  "slugs": {
                    "restaurant": "hotel-empire-80-feet-road-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "80ft Road, HAL 2nd Stage, Next to BSNL, Indiranagar,, Bengaluru, Karnataka 560008",
                  "locality": "Indiranagar",
                  "parentId": 475,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "10% off",
                    "shortDescriptionList": [
                      {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "10% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.9 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "427",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "lastMileTravel": 3.9000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "586790",
                  "name": "DONNE BIRIYANI MANE",
                  "uuid": "423296af-1ab7-4c08-9929-ad3b0105c7ed",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "nt7tzwwxup1pzmpbzxer",
                  "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "North Indian",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 15,
                  "minDeliveryTime": 15,
                  "maxDeliveryTime": 15,
                  "slaString": "15 MINS",
                  "lastMileTravel": 0.800000011920929,
                  "slugs": {
                    "restaurant": "donne-biriyani-mane-indiranagar-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "#124/2 GROUND FLOOR NAL WIND TUNNEL ROAD OPP TOP IN TOWN MURUGESH PALYA BANGALORE , Mahadevapura , B.B.M.P East, Karnataka, 560017",
                  "locality": "Murgeshpalya",
                  "parentId": 5628,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FLAT100 off",
                    "shortDescriptionList": [
                      {
                        "meta": "FLAT100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹100 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "586790",
                    "deliveryTime": 15,
                    "minDeliveryTime": 15,
                    "maxDeliveryTime": 15,
                    "lastMileTravel": 0.800000011920929,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "410684",
                  "name": "Soul Rasa",
                  "uuid": "816a3196-233a-4346-a8bc-0ad8109a506f",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "vt9jevkq2ddvjodkuhq3",
                  "cuisines": [
                    "Indian",
                    "Healthy Food",
                    "Home Food",
                    "South Indian",
                    "North Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 1.100000023841858,
                  "slugs": {
                    "restaurant": "hb-indiranagar-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Skylark Palazzo, Bearing No 98, Airport Corporation Ward, Airport Road,Murugeshpalya , Bangalore 560098 Shivajinagara, B.B.M.P East,Karnataka-560098",
                  "locality": "Murugeshpalya",
                  "parentId": 239281,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FLAT150 off",
                    "shortDescriptionList": [
                      {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹150 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT150 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5991969~p=10~eid=00000186-7db5-9484-27bf-8467008b0a47",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "410684",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 1.100000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.4",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "34301",
                  "name": "Sri Udupi Park (100ft Road)",
                  "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
                  "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Chaat",
                    "Beverages",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "slaString": "32 MINS",
                  "lastMileTravel": 4.599999904632568,
                  "slugs": {
                    "restaurant": "sri-udupi-park-indiranagar-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
                  "locality": "Defence Colony",
                  "parentId": 194697,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FREE DELIVERY",
                    "shortDescriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "",
                    "shortDescriptionList": [
                      {
                        "meta": "Free Delivery",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "34301",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 4.599999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.4",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "1221",
                  "name": "Biryani Day",
                  "uuid": "1dec917e-3f4b-479b-b4db-f7095248bbd8",
                  "city": "1",
                  "area": "Marathahalli",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "ucpbuzrvhg0ire3h9hwu",
                  "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Andhra",
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 33,
                  "minDeliveryTime": 33,
                  "maxDeliveryTime": 33,
                  "slaString": "33 MINS",
                  "lastMileTravel": 5,
                  "slugs": {
                    "restaurant": "biryani-day-thulsi-theater-road-marathahalli",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "No 389/2, 7th Cross, Thulsi Theater Road, Marathalli",
                  "locality": "Thulsi Theater Road",
                  "parentId": 2635,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "1221",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "lastMileTravel": 5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "1531",
                  "name": "A2B - Adyar Ananda Bhavan",
                  "uuid": "4fce8b57-4699-44d7-a107-235ee5bb9bac",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "jaeutqjn5liojalu4us6",
                  "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Sweets",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "slaString": "32 MINS",
                  "lastMileTravel": 4.599999904632568,
                  "slugs": {
                    "restaurant": "a2b-veg-cmh-road-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "#12, CMH Road, Indra Nagar, Bangalore - 560038",
                  "locality": "CMH Road",
                  "parentId": 22,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5958693~p=13~eid=00000186-7db5-9484-27bf-8468008b0d6e",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "1531",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 4.599999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.4",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "4747",
                  "name": "Phulke Ghar Ke",
                  "uuid": "56825c89-4929-470b-952b-7f82541bf80a",
                  "city": "1",
                  "area": "Bellandur",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "r08nbmwgi1pmj01hr9yh",
                  "cuisines": [
                    "North Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 39,
                  "minDeliveryTime": 39,
                  "maxDeliveryTime": 39,
                  "slaString": "39 MINS",
                  "lastMileTravel": 8.199999809265137,
                  "slugs": {
                    "restaurant": "phulke-ghar-ke-bellandursarjapur",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "#18/1, HMR Complex, Near Ganesh Temple, Bellandur, Bangalore",
                  "locality": "HMR Complex",
                  "parentId": 20953,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FREE DELIVERY",
                    "shortDescriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "",
                    "shortDescriptionList": [
                      {
                        "meta": "Free Delivery",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 1,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "8.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "4747",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 8.199999809265137,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "IT_IS_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "391071",
                  "name": "Tawakkal mubarak hotel",
                  "uuid": "3c6e8944-817a-4846-bb04-3d958ee0b855",
                  "city": "1",
                  "area": "CV Raman Nagar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "dg9q5qsjldskbjokz4di",
                  "cuisines": [
                    "Indian",
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 2,
                  "slugs": {
                    "restaurant": "tawakkal-mubarak-hotel-cv-raman-nagar-cv-raman-nagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "26/1 GUJRI LANE ISLAMPUR VIMANAPURA H A L",
                  "locality": "Vimanapura",
                  "parentId": 256917,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FREE DELIVERY",
                    "shortDescriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "",
                    "shortDescriptionList": [
                      {
                        "meta": "Free Delivery",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FREE DELIVERY",
                        "discountType": "FREE_DELIVERY",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "391071",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 2,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.9",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "640763",
                  "name": "ITC Aashirvaad Soul Creations",
                  "uuid": "b4c64307-88df-4380-9bcf-630ac15810b9",
                  "city": "1",
                  "area": "Indiranagar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "l8pfmljlq5dz9bwo1zri",
                  "cuisines": [
                    "Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "slaString": "29 MINS",
                  "lastMileTravel": 3.9000000953674316,
                  "slugs": {
                    "restaurant": "itc-aashirvaad-soul-creations-jeevan-bima-nagar-main-rd-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "1st Floor, Sri Avenue.23, 3rd B Cross, 60 feet, 12th Cross Rd, 2nd Stage, Domlur, Bengaluru, 560008",
                  "locality": "HAL 3rd Stage",
                  "parentId": 346141,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "40% off",
                    "shortDescriptionList": [
                      {
                        "meta": "40% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "40% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5892397~p=16~eid=00000186-7db5-9484-27bf-8469008b1060",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.9 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "640763",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 3.9000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.7",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "15898",
                  "name": "Mani's Dum Biryani",
                  "uuid": "77154368-123d-4e99-abe2-7273d4b0b216",
                  "city": "1",
                  "area": "Jeevan Bhima Nagar",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "lufqwcvjqllfw24ab82x",
                  "cuisines": [
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 22,
                  "minDeliveryTime": 22,
                  "maxDeliveryTime": 22,
                  "slaString": "22 MINS",
                  "lastMileTravel": 2.799999952316284,
                  "slugs": {
                    "restaurant": "manis-dum-biryani-jeevan-bhima-nagar-indiranagar",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "#474, Ground Floor, 10th Main, Jeevan Bima Nagar Main Road, HAL 3rd Stage, Indiranagar, Bangalore-45.",
                  "locality": "Jeevan Bhima Nagar",
                  "parentId": 623,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      
                    ],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.7 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "15898",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 2.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              }
            ]
           
       
      

   

const RestaurentCard=({name, cloudinaryImageId,cuisines,lastMileTravel})=>{
   
    return (
        <div className="cart">
           <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
           + cloudinaryImageId }/> 
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{lastMileTravel} minutes</h5> 
        </div>
    )
}

const Body=()=>{
     return <div className="resto-list">
        {
            restaurentList.map((restaurant)=>{
               return <RestaurentCard  {...restaurant.data } key={restaurant.data.id}/>  
            })
        }
        
       </div>
    
     }

const Footer=()=>{
  return <h4>Footer</h4>
    
}

const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root= ReactDOM.createRoot (document.getElementById("root"));

root.render(<AppLayout />);