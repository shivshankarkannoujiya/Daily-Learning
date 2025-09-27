# Database Design

### Tables

- User

  - id
  - username
  - email
  - password
  - phone_number

- Note

  - id
  - title
  - color
  - created_by: user_id

- Subnote
  - id
  - title
  - description
  - content
  - iscompleted: Bool
  - note_id(Parent id: kis note ka subnote hai)
  - created_by: user_id

# Book Management System

### Tables

- Users
  - id
  - username
  - email
  - password
  - Phone_Number
  - Address
  - Role: [admin, user]
- Books
  - id
  - name
  - ISBN_NUMBER
  - price
  - author
- Authors
  - id
  - name
  - social
  - List [Books]
- BookRecords
  - id
  - Book ID
  - User ID
  - Issue Time
  - Return time
  - Is Return

# Teachyst (Next Gen LMS)

Heads Up: Taachyst is white labelled

> Connect your own domain
> Connect your own Payment Provider
> Connects your own Integrations

### Tables

- User
- Courses
- Categories
- Lessions

  - ID
  - Types: Live | Quize

- Transactions

  - ID
  - User Id
  - Courese Id
  - Payment Gateway
  - Amount
  - Date

- Enrollments

- Coupon
  - ID
  - code
  - Discount Type
  - value
  - Exp Time
  - Start Time
  - Is Active

# Tasks

- Library Management System
- Parking Lot System
- Learnyst (White labelled)
- Hospital Management System (with ambulance tracking)
- Food Del App (With Realtime Rider Tracking )
- Amazon (Multiple Seller & Multiple Buyers and warehouses)






