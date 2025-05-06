import pyttsx3
import speech_recognition as sr
import json


with open('inventory.json', 'r') as f:
    inventory = json.load(f)

def speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

def listen():
    recognizer = sr.Recognizer()
    mic = sr.Microphone()
    with mic as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    try:
        print("Processing...")
        user_input = recognizer.recognize_google(audio)
        print(f"User said: {user_input}")
        return user_input.lower()
    except sr.UnknownValueError:
        print("Sorry, I could not understand the audio.")
        speak("Sorry, I could not understand you. Could you repeat that?")
        return None
    except sr.RequestError:
        print("Sorry, my speech service is down.")
        speak("Sorry, my speech service is down.")
        return None

def find_item(item_name):
    found = False
    for category, items in inventory.items():
        if isinstance(items, dict):
            for subcategory, subitems in items.items():
                if isinstance(subitems, dict):
                    for subitem, location in subitems.items():
                        if subitem.lower() == item_name.lower():
                            speak(f"{subitem} is located at: {location}")
                            found = True
                            return
                elif subcategory.lower() == item_name.lower():
                    speak(f"{subcategory} is located at: {items[subcategory]}")
                    found = True
                    return
        elif category.lower() == item_name.lower():
            speak(f"{category} is located at: {items}")
            found = True
            return
    if not found:
        speak("Item not found.")
        print("Item not found.")

def pathbot_interaction():
    speak("Hello, I'm PathBot. What would you like to find?")
    item_name = listen()
    if item_name:
        find_item(item_name)
    else:
        speak("I didn't catch that. Could you say it again?")


pathbot_interaction()
