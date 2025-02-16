# Project Name  Quizo

## Description
A brief description of the project goes here.

## Project Setup

### Prerequisites
Make sure you have the following installed:
- Node.js (Latest LTS version recommended)
- PostgreSQL Database
- react with vite

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the required environment variables:
   ```env
   DATABASE_URL=postgresql://quiz_db_b5yp_user:gSIxJV9IX9Cj4pDP71Gkv6typvrF7SuJ@dpg-cuoosnhopnds738u3v90-a/quiz_db_b5yp
   PORT=5000
   ```

## API Documentation

### Base URL
```
https://quizz-management-5dws.onrender.com/
```

### Endpoints

#### 1. Create Quiz
```http
POST api/quizzes
```
**Request Body:**
```json
{
  "title": "JavaScript Basics",
  "description": "A quiz on JavaScript fundamentals",
  "teacher_Id": 1
}
```
**Response:**
```json
{
  "id": 1,
  "title": "JavaScript Basics",
  "description": "A quiz on JavaScript fundamentals",
  "teacher_Id": 1
}
```

#### 2. Get All Quizzes
```http
GET api/quizzes
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "JavaScript Basics",
    "description": "A quiz on JavaScript fundamentals",
    "teacher_Id": 1
  }
]
```

#### 3. Get Quiz by ID
```http
GET api/quizzes/:id
```
**Response:**
```json
{
  "id": 1,
  "title": "JavaScript Basics",
  "description": "A quiz on JavaScript fundamentals",
  "teacher_Id": 1
}
```

#### 4. Update Quiz
```http
PUT api/quizzes/:id
```
**Request Body:**
```json
{
  "title": "Advanced JavaScript",
  "description": "A quiz on advanced JS topics"
}
```
**Response:**
```json
{
  "id": 1,
  "title": "Advanced JavaScript",
  "description": "A quiz on advanced JS topics",
  "teacher_Id": 1
}
```

#### 5. Delete Quiz
```http
DELETE api/quizzes/:id
```
**Response:**
```json
{
  "message": "Quiz deleted successfully"
}
```

## Database Schema

**Quiz Table**
| Column | Type | Constraints |
|--------|------|-------------|
| id | Integer | Primary Key, Auto Increment |
| title | String | Not Null |
| description | String | Not Null |
| categoryId | Integer | Foreign Key References Category Table |

## Troubleshooting
- If you get a foreign key constraint error, ensure that the referenced `teacher_Id` exists in the `teacher` table before inserting a quiz.
- Check the logs for any database connection issues.

## License
This project is licensed under the MIT License.

