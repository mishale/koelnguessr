#  KoelnGuessr

KoelnGuessr is a web-based game inspired by GeoGuessr – but set entirely in **Cologne (Köln), Germany**.  
Players are shown a random image from somewhere in Cologne and must **guess the location on an interactive map**.  
After placing a marker, the app calculates the **distance between the guess and the real location**, awards points, and updates the **highscore**.

---

##  Features
-  Random images from different spots in Cologne
-  Interactive map for making location guesses
-  Distance calculation between guess and actual location
-  Highscore tracking to keep the competition alive
-  Additional geography quiz from API with 5 questions
-  Built as a **frontend-only project**

---

## 🛠️ Tech Stack
- **React** – Component-based UI
- **JavaScript (ES6)** – Game logic
- **HTML5 & CSS3** – Structure and styling
- **Bootstrap** – Responsive layout and styling helpers

---

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/koelnguessr.git
cd koelnguessr
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm start
```
Now open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure
```
/public          → Static assets, images
/src
  /components   → React components (Map, Scoreboard, ImageViewer, etc.)
  /styles       → CSS and Bootstrap overrides
  App.js        → Main game logic
  index.js      → Entry point
```

