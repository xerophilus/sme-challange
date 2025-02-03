# 🚀 The One App - Proof of Concept (PoC)

## 📌 Overview
**The One App** is a **modular, dynamically-loaded employee app** designed to **host and load micro-apps** from AWS. This proof of concept (PoC) demonstrates how an **Expo-based Employee App** can dynamically fetch and execute **AWS-hosted micro-apps** to enable seamless updates without full app redeployment.

## 🎯 Goals
- ✅ **Create a central Employee App (`the-one-app`)** that loads micro-apps dynamically.
- ✅ **Host micro-apps in AWS S3 & serve via CloudFront** for performance and scalability.
- ✅ **Support both single-page and multi-page micro-apps**.
- ✅ **Simulate authentication by passing user data** to micro-apps.
- ✅ **Ensure caching and offline functionality** for improved performance.
- ✅ **Expand to multiple micro-apps dynamically**.

---

## 📂 Folder Structure
```
/bpitts-innovation-week
  ├── /the-one-app      # Expo-based Employee App
  ├── /micro-apps       # Contains both single-page & multi-page micro-apps
  ├── README.md         # Project documentation (this file)
```

---

## 🚀 Features Checklist

### **✅ Core App (The One App - Expo)**
- [ ] Create **React Native Expo app** (`the-one-app`).
- [ ] Implement **navigation and basic UI**.
- [ ] Fetch and **dynamically load micro-apps** from AWS.
- [ ] Simulate **authentication context** (pass `username`, `role`).
- [ ] Implement **error handling & fallback UI**.

### **✅ Micro-App Hosting & AWS Setup**
- [ ] **AWS S3 setup** for micro-app storage.
- [ ] **CloudFront distribution** for faster delivery.
- [ ] Ensure **public file access** (or use signed URLs for security).
- [ ] Automate **deployment to AWS** using CLI.

### **✅ Micro-Apps**
- [ ] Create a **single-page micro-app** (`micro-app.js`).
- [ ] Create a **multi-page micro-app** with `react-navigation`.
- [ ] Ensure **micro-apps work independently** in a browser.
- [ ] Test dynamic loading from CloudFront.

### **✅ Additional Enhancements**
- [ ] Implement **caching for micro-apps** (AsyncStorage/local storage).
- [ ] Fetch **micro-app list dynamically from an API**.
- [ ] Enable **secure access** (Pre-signed URLs / Auth Integration).
- [ ] Optimize **bundle size and load times**.

---

## 📖 Setup Instructions

### **1️⃣ Set Up AWS S3 & CloudFront**
1. **Create an S3 Bucket** & upload `micro-app.js`.
2. **Set permissions**: Make files public or use CloudFront OAC.
3. **Create a CloudFront distribution** & copy the distribution URL.

### **2️⃣ Run the Employee App**
```sh
cd the-one-app
npx expo start
```
- Open the app and tap **"Load Micro-App"**.

### **3️⃣ Test Micro-App Loading**
```sh
curl https://your-cloudfront-url.com/micro-app.js
```
- Verify that the file is served correctly.

---

## 🛠️ Debugging Tips
- **Access Denied?** → Check S3 permissions.
- **Micro-app not loading?** → Verify the CloudFront URL.
- **Slow performance?** → Enable CloudFront caching.

---

## 📅 Roadmap
- 🔹 Integrate **MSAL/Azure AD authentication** (future work).
- 🔹 Implement **role-based access for micro-apps**.
- 🔹 Deploy a **CI/CD pipeline for automated updates**.

---

## ✨ Contributors
- **@bpitts** 🚀

This project was built for **Innovation Week** to explore modular architectures for enterprise apps.

---

📢 **Next Steps:** Test dynamic micro-app loading & expand support for multiple micro-apps!
