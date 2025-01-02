import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import VoiceButton from './components/VoiceButton';

const inventory = {
    "Bakery": {
        "bread":{  
            "Fresh Brioche Bread": "Aisle 1",
            "Fresh Brioche Buns": "Aisle 1",
            "Fresh Brioche Dinner rolls": "Aisle 1", 
            "Fresh Brioche Hotdogs":"Aisle 1",
            "Fresh Challah Bread":"Aisle 1",
            "Fresh Italian Bread": "Aisle 1 /By the door",  
            "Fresh Medium 2pk Italian Bread": "Aisle 1 /By the door",   
            "Fresh Wheat Italian Bread": "Aisle 1 /By the door",
            "Fresh Baguette Bread": "Aisle 1 /By the door", 
            "Fresh Wheat Baguette Bread": "Aisle 1 /By the door",
            "Fresh French/ Artisan Baguette Bread": "Aisle 1 /By the door", 
            "Fresh Baguette Bread": "Aisle 1 /By the door", 
            "Fresh Garlic Bread": "Aisle 1 /By the door",
            "Fresh Wheat Garlic Bread": "Aisle 1 /By the door",
    
        },
        "cake": "Aisle 1",
        "store-baked cookies": "Aisle 1", 
        "pies": { 
            "Apple pie": "Aisle 1",
            "Blueberry pie": "Aisle 1", 
            "Pumpkin pie": "Aisle 1", 
            "Cherry pie": "Aisle 1", 
            "Pecan pie": "Aisle 1", 
            "Coconut creme pie": "Aisle 1"
        },
        "fresh muffins": "Aisle 1", 
        "packaged muffins": "Aisle 1", 
        "Brownies": "Aisle 1", 
        "Cinnamon Buns":"Aisle 1", 
        "Chocolate Crossaint":"Aisle 1", 
        "Fresh Bagels":{
            "Fresh Cinnamon-Raisin Bagels": "Aisle 1",
            "Fresh Plain Bagels": "Aisle 1", 
            "Fresh Poppy-seed Bagels": "Aisle 1", 
            "Fresh Everything Bagels": "Aisle 1",
            "Fresh Wheat Bagels": "Aisle 1",
            "Fresh Onion Bagels": "Aisle 1",
            "Fresh Pumpernickle Bagels": "Aisle 1", 
            "Fresh Frenchtoast Bagels": "Aisle 1",
        }, 
    },
    "Produce": { 
        "fruit":{
        "apples": "Aisle 1",
        "bananas": "Aisle 1", 
        "pineapple": "Aisle 1", 
        "Blueberries": "Aisle 1",
        "Raspberry": "Aisle 1",
        "Coconut": "Aisle 1",
        "Mango": "Aisle 1",
        "Strawberry": "Aisle 1",
        "Dragon fruit": "Aisle 1",
        },
        
        "vegetables":{ 
            "carrots": "Aisle 1", 
            "brocolli": "Aisle 1",
            "clintro": "Aisle 1",
            "lettuce": "Aisle 1",
            "beats": "Aisle 1",
            "tomatoes": "Aisle 1", 
            "potatoes": "Aisle 1", 
            "yams":{  
                "purple yams": "Aisle 1", 
                "white yams": "Aisle 1", 
            }, 
            "zucchini": "Aisle 1", 
            "cucumber": "Aisle 1", 
        }
    },
    "Meat/Poultry": {
        "chicken": "Aisle 1",
        "Ground beef": "Aisle 1",
        "pork": "Aisle 1", 
        "ribs": "Aisle 1", 
        "chickhen breast": "Aisle 1",
        "chicken thighs": "Aisle 1",
        "pig feet": "Aisle 1", 
        "Ground turkey": "Aisle 1", 
        "Lamb": "Aisle 1", 
        },    
    "Grace Products": "Aisle 2",  
    "Finest Corn Meal": "Aisle 2", 
    "Wall of Value": "Aisle 2",  
    "Caribbean Food": "Aisle 2",  
    "West Indian food": "Aisle 2", 
    "Interational Foods": "Aisle 3", 
    "Goya Products": "Aisle 3",  
    "Bag Beans": "Aisle 3", 
    "Spices": "Aisle 3", 
    "Soups": "Aisle 3", 
    "Kitchen Gadgets": "Aisle 3", 
    "Ramen Noodle": "Aisle 3",
    "Canned Fish": "Aisle 4",  
    "Dressing": "Aisle 4",  
    "vinegar": "Aisle 4", 
    "canned vegetable": "Aisle 4", 
    "Gravy/Mashpotatoes": "Aisle 4", 
    "Pasta Sauce": "Aisle 4", 
    "Pasta": "Aisle 4", 
    "Aluminum Pans": "Aisle 5", 
    "Canned Fruit":{ 
        "Canned Peaches": "Aisle 5", 
        "Canned Pineapple": "Aisle 5",
        "Canned Mandrines ": "Aisle 5", 
        "Fruit Cocktail": "Aisle 5", 
    }, 
    "Peanut Butter": "Aisle 5", 
    "Jelly": "Aisle 5", 
    "Tea": "Aisle 5", 
    "Canned milk": "Aisle 5", 
    "Pancake mix": "Aisle 5", 
    "Baking Products": "Aisle 5",
    "Cereal": "Aisle 6", 
    "Orangic Cereal": "Aisle 6", 
    "Granola": "Aisle 6",  
    "Oatmeal": "Aisle 6", 
    "Hot Cereal": "Aisle 6", 
    "Seasonal": "Aisle 6", 
    "Cookies":{ 
        "Oreos": "Aisle 6",
        "Nutterbutter": "Aisle 6", 
        "Chip ahoy Choclate chip": "Aisle 6", 
        "Chips ahoy chewy choclate chip": "Aisle 6",
    },
    "Juice": "Aisle 7", 
    "Organic Juice": "Aisle 7", 
    "Iced teas": "Aisle 7", 
    "Gatorade": "Aisle 7", 
    "Choclate": "Aisle 7",
    "Plates/cups": "Aisle 7", 
    "Candy": "Aisle 7",
    "Frozen Dinner": "Aisle 8", 
    "La Fe": "Aisle 8", 
    "Grace": "Aisle 8", 
    "Frozen Vegetables": "Aisle 8", 
    "Frozen Pizza": "Aisle 8", 
    "Frozen Breakfast":"Aisle 8", 
    "Pies and cake": "Aisle 8",
    "Frozen Food": "Aisle 9", 
    "Organic Frozen Food": "Aisle 9", 
    "Ice cream": "Aisle 9", 
    "Paper Towels": "Aisle 9", 
    "Tissue ": "Aisle 9", 
    "Facial Tissue": "Aisle 9", 
    "Tin foil": "Aisle 9", 
    "Food wraps/ bag": "Aisle 9", 
    "Bar soap": "Aisle 10", 
    "Heath and Beauty": "Aisle 10", 
    "Arizona Drinks": "Aisle 10",
    "Dental Products": "Aisle 10", 
    "Diapers": "Aisle 10", 
    "Wipes": "Aisle 10", 
    "Babyfood": "Aisle 10",
    "Detergent": "Aisle 11",
    "Bleach": "Aisle 11", 
    "HouseHoldthings": "Aisle 11", 
    "Dish Detegent": "Aisle 11", 
    "Mop/Brooms": "Aisle 11", 
    "Dog Food": "Aisle 11", 
    "Light Bulbs": "Aisle 11",
    "Cat food": "Aisle 11", 
    "sodas": "Aisle 12", 
    "vitamin water": "Aisle 12", 
    "chips": "Aisle 12",
    "flavored water": "Aisle 12",
    "water": "Aisle 12",

    "Diary": {
        "milk": "Aisle 13",
        "cheese": "Aisle 13",
        "yogurt": "Aisle 13",
    },
    "beer": "Aisle 13", 
    "seltzer": "Aisle 13", 
    "drink mixes": "Aisle 13", 
    "ice": "Aisle 13", 
    "Alcohol": "Aisle 13", 
    "Deli": "Back of the store" 
}; 

const App = () => {
    const [results, setResults] = useState(null);

    const searchInventory = (item) => {
        for (const category in inventory) {
            if (inventory[category][item]) {
                setResults(`${item} is located in ${inventory[category][item]}`);
                return;
            }
        }
        setResults('Item not found.');
    };

    const handleVoiceInput = () => {
        alert('Voice input not implemented yet!');
    };

    return (
        <div>
            <Header />
            <SearchBar onSearch={searchInventory} />
            <VoiceButton onVoiceInput={handleVoiceInput} />
            <Results results={results} />
        </div>
    );
};

export default App;