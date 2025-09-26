# Crypto Dashboard

A simple and responsive dashboard that displays the **Top 10 market tokens** using live data from the [CoinGecko API](https://www.coingecko.com/).  
This project was built as part of a **Front-End Developer technical interview task**.

---

## ✨ Features

- **Top 10 Tokens**: Displays the top 10 trending tokens by market cap.
- **Real-time Data**: Fetches live data from the CoinGecko API.
- **Component-Based**: Modular and reusable React components.
- **Advanced State Management**: Uses **TanStack Query (React Query)** to handle loading, error, and success states.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)

---

## 🚀 Getting Started

Follow the instructions below to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) **v20+**
- npm installed

### Installation

Clone the repository:
```bash
git clone https://github.com/hamidKhoshnasib/crypto-dashboard.git
```

Navigate to the project folder:
```bash
cd crypto-dashboard
```

Install dependencies:
```bash
npm install
```

### Run Development Server
Start the local development server:
```bash
npm run dev
```

Then open 👉 [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Folder Structure

```bash
/src
├── /app                # Next.js App Router (pages and layouts)
├── /assets             # Static assets like images and fonts
├── /components         # Reusable UI and layout components
│   ├── /layout         # Major layout components (Header, Footer)
│   └── /ui             # Small, generic UI elements (Button, Table)
├── /hooks              # Custom React hooks (e.g., useGetData)
├── /types              # TypeScript type definitions
└── /views              # Components that compose an entire page view
    └── /homepage       # Sections specific to the homepage
```