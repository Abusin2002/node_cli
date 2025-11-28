#  Node CLI – Automated Node.js Project Generator

![Node CLI Banner](https://dummyimage.com/1200x300/1a1a1a/ffffff&text=Node+Project+CLI+Generator)

### **Hello Techies! 👋**

Every time we start a new Node.js backend project, we repeat the same tasks:
- Creating project folder structure
- Creating controller, model, service & repository files manually
- Installing dependencies
- Setting up MongoDB configuration

This is time-consuming and boring when done again and again.  
So to make development faster and simpler, I created a **CLI tool** that sets up everything automatically with just a command.

---

## 🎯 Features

✔ Generate scalable folder structure  
✔ Auto-create files with boilerplate code  
✔ MongoDB configuration ready  
✔ Built for clean architecture & maintainability  
✔ Saves time, increases productivity  

---

## 📦 Create New Project

Run the below command to generate project structure:

```bash
abu create <folderType>
```
#📂 Folder Types Available

| Folder Type | Description                                          |
| ----------- | ---------------------------------------------------- |
| `basic`     | Minimal starter project                              |
| `adapter`   | Advanced project structure with adapter architecture |

#🛠 Generate Files Automatically
```bash
abu make <fileType> <name>
```
# Example
```bash
abu make controller user
abu make service user
abu make model user
abu make repo user
```

# 📌 File Type Descriptions

| File Type  | Description                |
| ---------- | -------------------------- |
| controller | Request / Response handler |
| service    | Business logic             |
| model      | MongoDB / Mongoose model   |
| repo       | Database operations layer  |

# 📁 Example Generated Folder Structure
```bash
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── models/
 ├── config/
 ├── utils/
 ├── routes/
 ├── app.js
 └── index.js
```
---
# 🧾 NPM Setup Commands
Install Dependencies
```bash
npm install
```
Link CLI globally
```bash
npm link
```
After linking, you can use:
```bash
abu create basic
```
# 🧠 CLI Command Summary
| Command                      | Description                   |
| ---------------------------- | ----------------------------- |
| `abu create <type>`          | Create node project structure |
| `abu make controller <name>` | Generate new controller       |
| `abu make service <name>`    | Generate new service          |
| `abu make model <name>`      | Generate model                |
| `abu make repo <name>`       | Generate repository           |

# 🎬 Demo Preview (Coming Soon)
A command execution demo GIF/video will be added soon to showcase the tool in action.

# 🤝 Contributing

Want to improve or add new features?
Pull requests and suggestions are welcome!

# ⭐ Support

If you found this helpful, please star the GitHub repository and support the project 🌟

# Built With ❤️ by
Mohamed Abusin (Abu)
Full-Stack Developer | MERN & Spring Boot & AI | Passionate About Automation
