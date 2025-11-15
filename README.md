# 📊 Backend-Service (MongoDB + Node.js)

This project implements a high-performance backend system for website analytics.  
It consists of three components:

1. **Ingestion API** – accepts events extremely fast  
2. **Queue Processor** – processes events asynchronously  
3. **Reporting API** – returns aggregated analytics data  

This system does **not** use Redis.  
Instead, a lightweight queue is implemented using **MongoDB**.

---

## 🚀 Features

✔ Ultra-fast ingestion (no waiting for DB writes)  
✔ MongoDB-based async queue  
✔ Background processing worker  
✔ Aggregated analytics API  
✔ Clean architecture  
✔ Easy to run & extend  

---


