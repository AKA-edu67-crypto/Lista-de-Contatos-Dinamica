# 👥 Dynamic Contact List

A JavaScript project created to practice consuming APIs and dynamically rendering data into the user interface.

## Goal

Build a contact list that fetches user information from an external API and displays it as contact cards on the page.

Each card contains:

- Name
- Email
- Company

The main purpose of this project was to learn how to transform raw JSON data into visual HTML elements dynamically.

---

## Concepts Practiced

- Async/Await
- Fetch API
- REST API Consumption
- Arrays
- Loops
- Objects
- DOM Manipulation
- Dynamic Rendering
- Template Strings

---

## 📂 Project Structure

### HTML

```html
<h1>Dynamic Contact List</h1>

<div class="users"></div>
```

---

## 🔄 Application Flow

```txt
Page loads
↓
Fetch users from API
↓
Convert response to JSON
↓
Loop through users
↓
Generate HTML cards
↓
Display user information
```

---

## 🔗 API Used

JSONPlaceholder

Endpoint:

```txt
https://jsonplaceholder.typicode.com/users
```

---

## Example API Response

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "company": {
    "name": "Romaguera-Crona"
  }
}
```

---

## Example Rendering

Each user is rendered dynamically as:

```html
<div>
    <h3>Name: Leanne Graham</h3>
    <p>Email: Sincere@april.biz</p>
    <p>Company: Romaguera-Crona</p>
</div>
```

---

## What I Learned

This project helped reinforce several important concepts:

### API Requests

```javascript
fetch(...)
```

Used to retrieve user data from an external API.

---

### Asynchronous Programming

```javascript
async/await
```

Used to handle API responses in a clean and readable way.

---

### Loops

```javascript
for (...) { }
```

Used to iterate through all users returned by the API.

---

### Object Access

```javascript
user.name
user.email
user.company.name
```

Used to access nested information inside JSON objects.

---

### Dynamic HTML Generation

```javascript
innerHTML +=
```

Used to create contact cards dynamically from API data.

---

## Final Result

Users can view a complete list of contacts loaded directly from an API, without manually creating HTML for each contact.

The interface updates automatically based on the data received.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- JSONPlaceholder

---

## 📈 Learning Goals

This project was created during my JavaScript learning journey to practice:

- Fetching data from APIs
- Working with JSON objects
- Dynamic DOM manipulation
- Rendering lists of data
- Understanding the relationship between APIs and user interfaces

The focus was not visual design, but understanding how data flows from an API to the screen.

---

## 👨‍💻 Author

Created as part of my JavaScript learning journey, focused on API consumption and dynamic user interface development.
