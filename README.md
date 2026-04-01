# Odoo Custom Sales Dashboard (Demo)

A custom interactive sales dashboard module built with Odoo, demonstrating advanced frontend-backend integration using OWL and Chart.js.

## 🚀 Overview

This project showcases the development of a dynamic enterprise dashboard within Odoo, combining backend data processing with an interactive user interface.

The dashboard provides real-time insights into sales performance through KPIs, charts, and drill-down actions, enabling users to explore business data efficiently.

---

## ✨ Key Features

### 📊 Interactive Charts
- Built using **Chart.js**
- Supports multiple chart types:
  - Doughnut (Top Products)
  - Pie (Top Sales People)
  - Bar (Monthly Sales)
  - Line (Partner Orders)
- Clickable charts with **drill-down actions** into Odoo views

### 📈 KPI Cards
- Dynamic KPI components built with **OWL**
- Displays:
  - Quotations
  - Orders
  - Revenues
  - Average Order Value
- Includes percentage comparison with previous periods

### ⏱️ Time-Based Filtering
- Filter data dynamically:
  - Last 7 days
  - Last 30 days
  - Last 90 days
  - Last 365 days

### 🔄 Backend Integration
- Uses Odoo ORM:
  - `readGroup` for aggregation
  - `searchCount` for KPIs
- Dynamic domain generation based on user interaction

### 🔍 Drill-Down Navigation
- Click on KPIs or charts to open:
  - List views
  - Pivot views
  - Form views
- Context-aware filtering based on selected data

---

## 🛠️ Technologies Used

- **Python** (Odoo backend logic)
- **JavaScript (OWL)** – component-based frontend
- **Chart.js** – data visualization
- **XML** – UI templates
- **PostgreSQL** – data storage

---

## 🧠 Technical Highlights

- Component-based UI using OWL (KpiCard, ChartRenderer)
- Dynamic chart rendering with lifecycle hooks
- Real-time data aggregation using `readGroup`
- Custom event handling for interactive navigation
- State management using OWL hooks
- Separation of concerns between UI and business logic

---

## 📸 Screenshots

![Dashboard 1](screenshots/dashboard1.png)
![Dashboard 2](screenshots/dashboard2.png)
![Dashboard 3](screenshots/dashboard3.png)

---

## 🎯 Purpose

This project was developed as a **demonstration module** to showcase:

- Building interactive dashboards in Odoo
- Integrating frontend components with backend data
- Designing scalable and modular enterprise features
- Applying real-world business logic in ERP systems

---

## ⚠️ Disclaimer

This is a demonstration project.  
All data is simulated, and no real client or company data is included.

---

## 📌 Notes

- The module integrates with the `sale` module (`sale.report`, `sale.order`)
- Designed to run within Odoo's web client as a custom action
- Focused on demonstrating architecture and interaction rather than production deployment

