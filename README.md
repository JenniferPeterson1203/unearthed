# UnEarthed - Week 1 Lab

UnEarthed is a crowdsourced repository of gift ideas. This project is a Minimum Viable Product (MVP) built as a full-stack web application using Node.js and Express on the backend, and Vanilla JavaScript on the frontend.

## 🎯 Features
- **Express Server:** Handles API requests and serves static files.
- **RESTful API:** Provides gift data via the `/gifts` and `/gifts/:giftId` endpoints.
- **Dynamic Frontend:** Uses DOM manipulation and the Fetch API to display data without a frontend framework.
- **Custom Detail Views:** Dynamically generates pages for individual items.
- **404 Handling:** Custom error page for undefined routes.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express
- **Frontend:** HTML5, CSS3, JavaScript (ES Modules)
- **Development Tools:** Vite, Nodemon, Git/GitHub

## 📁 Project Structure
- `/client`: Frontend source code, including HTML, CSS, and scripts.
- `/server`: Backend source code, Express routes, and JSON data.
- `/server/public`: The "Build" folder where Vite outputs the production frontend.

## 🚀 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/unearthed.git](https://github.com/YOUR_USERNAME/unearthed.git)
   cd unearthed
   ```

2. **Setup the Server:**
```bash
cd server
npm install
```

3. **Setup the Client:**
```bash
cd ../client
npm install
```

4. **Build and Run:**
```bash
- In the client folder, run npm run build.

- In the server folder, run npm start.

- Open your browser to http://localhost:3001.
```

## 📝 Lab Requirements Completed
* [x] Create a server using Node and Express.

* [x] Create routes and request handlers.

* [x] Respond to GET requests by serving static HTML.

* [x] Organize server files appropriately.

* [x] Serve an appropriate 404 page.

