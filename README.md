# 🎯 DVA-Oriented Portfolio

### A GitHub-Profile-Style Portfolio for Data & Visual Analytics

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-0d1117?style=for-the-badge&logo=vercel&logoColor=white)](https://yashiagarw.github.io/DVA_Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-yashiagarw-181717?style=for-the-badge&logo=github)](https://github.com/yashiagarw)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/yashi-agarwal-710a9a315)

<p align="center">
  <img src="https://github.com/yashiagarw.png" width="120" style="border-radius:50%" alt="Yashi Agarwal"/>
  <br/>
  <strong>Yashi Agarwal</strong> · Data & Visual Analytics @ Newton School of Technology
</p>

---

## ✨ About

A pixel-perfect recreation of the **GitHub profile page** — reimagined as a recruiter-ready portfolio for **Data & Visual Analytics** and **Data Science** roles. Built entirely in React with zero external chart or UI libraries.

> *"Data without visualization is just noise."*

---

## 🖼️ Preview

| Section | Highlights |
|---|---|
| **Sidebar** | Circular avatar with glow animation, bio, social links, stats, skill pill badges |
| **📌 Pinned Projects** | 2-column card grid mirroring GitHub's pinned repos with language dots, stars, forks, live demo badges |
| **📊 Contributions** | SVG contribution heatmap (52×7 grid) with realistic activity distribution across 4 green shades |
| **🛠️ Tech Stack** | Animated horizontal bar chart — pure CSS, no chart libraries |
| **📄 README.md** | Styled markdown-like card with bio, goals, and a blockquote |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite |
| **Styling** | Vanilla CSS (GitHub Dark Theme) |
| **Charts** | Pure CSS bars + Inline SVG heatmap |
| **Icons** | Hand-crafted SVG components |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| **Deployment** | Vercel-ready |

---

## 🎨 Design System

```
Background    #0d1117   ████████
Card          #161b22   ████████
Border        #30363d   ████████
Green Accent  #238636   ████████
Blue Accent   #58a6ff   ████████
Primary Text  #c9d1d9   ████████
Secondary     #8b949e   ████████
```

**Heatmap Shades:** `#161b22` → `#0e4429` → `#006d32` → `#26a641` → `#39d353`

---

## 📂 Project Structure

```
src/
├── App.jsx                # Root component
├── App.css                # All component styles + responsive
├── index.css              # Global reset, CSS vars, keyframes
├── GitHubPortfolio.jsx    # Two-column layout wrapper
├── Sidebar.jsx            # Profile sidebar (avatar, bio, links, skills)
├── PinnedProjects.jsx     # 6 pinned repo cards
├── Heatmap.jsx            # SVG contribution heatmap (52×7)
├── TechStack.jsx          # Animated CSS bar chart
├── ReadmeCard.jsx         # Profile README card
├── Icons.jsx              # SVG icon components
└── heatmapData.js         # Heatmap data generator
```

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/yashiagarw/DVA_Portfolio.git
cd DVA_Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📌 Featured Projects

| Project | Description | Tech |
|---|---|---|
| [**CleanThisData**](https://github.com/DikshantJangra/CleanThisData) | Advanced Excel Data Cleaning & Analytics — Complex transformation & Dashboards | Excel, Dashboards |
| [**PitLane**](https://github.com/Harsh-sh7/Section_E_Group_3_PitLane) | Intelligent agentic system combining solar energy forecasting with a LangGraph multi-node workflow and RAG-based decision-making to optimize grid operations. Deployed on Streamlit. | Python, LangGraph, Streamlit |
| [**StudentHealthAssessment360**](https://github.com/DikshantJangra/StudentHealthAssessment360) | Pandas & NumPy EDA pipeline & data cleaning for Agentic AI | Python, Pandas, NumPy |
| [**Amazon-Sales-Intelligence**](https://public.tableau.com/app/profile/dikshant.jangra) | Tableau Market Intelligence Dashboard - KPI & Trend Analysis | Tableau, Data Storytelling |

---

## 🧠 Skills

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![FAISS](https://img.shields.io/badge/FAISS-0467DF?style=flat-square&logo=meta&logoColor=white)

---

## 📊 Key Highlights

- **Zero external chart libraries** — heatmap and bar charts built with pure SVG + CSS
- **GitHub Dark Theme** — authentic `#0d1117` color palette throughout
- **Smooth animations** — fade-in on load, hover glow transitions, animated bar fills
- **Fully responsive** — sticky sidebar on desktop, single-column on mobile
- **Recruiter-ready** — designed to impress for DVA, Data Science, and BI roles

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/yashiagarw"><strong>Yashi Agarwal</strong></a>
  <br/>
  <em>Data & Visual Analytics @ Newton School of Technology</em>
  <br/><br/>
  <a href="https://github.com/yashiagarw/DVA_Portfolio">
    <img src="https://img.shields.io/github/stars/yashiagarw/DVA_Portfolio?style=social" alt="Stars"/>
  </a>
</p>
# Dva-portfolio
