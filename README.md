<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0c1220,100:0891b2&height=170&section=header&text=KNN%20Playground&fontColor=ecfeff&fontSize=42" width="100%" alt="KNN Playground banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=67E8F9&center=true&vCenter=true&width=620&lines=Explore+k-nearest+neighbors;Classify+points+with+distance+and+votes" alt="Animated tagline"/>
<p><strong>An interactive 2D KNN classifier for machine-learning fundamentals.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/knn-playground?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/knn-playground?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/knn-playground?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/knn-playground?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="KNN scatter plot illustration"/>
</div>

## 🧭 Overview
KNN Playground demonstrates k-nearest-neighbors classification in two dimensions. Add labeled training points, move a query point, and inspect the closest samples and majority vote.

## ✨ Features
- 📍 Add class A and class B training samples by clicking.
- 🎯 Move a query point and update its predicted class.
- 🔢 Adjust k to change the number of neighbors.
- 📏 Inspect Euclidean distances and vote counts.
- 🔒 Keep all points in browser memory.

## 🎬 Demo
Start the app; a small two-cluster dataset is loaded. Change k, move the query point, or add new training samples to explore decision changes.

## 🚀 Quick Start
Requires Node.js 20 or newer.

```bash
npm start
```

Open http://127.0.0.1:4181. Run checks with npm test.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 Browser JavaScript and Canvas
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       KNN classifier and interactive plot
test/         Classification tests
assets/       Original SVG artwork
.github/      CI workflow
server.js     Dependency-free static server
```

## 🛣️ Roadmap
- [ ] Add more than two classes.
- [ ] Compare Euclidean and Manhattan distance.
- [ ] Export and import training points as JSON.

## 🤝 Contributing
Contributions are welcome. Keep distance calculations deterministic, document tie-breaking behavior, and add tests for class imbalance and boundary cases.

## 📄 License
MIT. See LICENSE.

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0891b2,100:0c1220&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
