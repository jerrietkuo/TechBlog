
# Tech Blog

## Overview

Tech Blog is a full-stack web application designed to enable users to create, read, update, and delete blog posts. Users can sign up, log in, and interact with the platform to share their thoughts on various tech topics. The application is built using Node.js, Express.js, Sequelize ORM, Handlebars.js, and PostgreSQL.

## Features

- User authentication (sign up, log in, log out)
- Create, read, update, and delete blog posts
- Add and view comments on blog posts
- Responsive user interface

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

Ensure you have the following software installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [PostgreSQL](https://www.postgresql.org/) (version 12.x or higher)

### Steps

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/jerrietkuo/TechBlog.git
   cd TechBlog
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add the following:
   \`\`\`plaintext
   DB_NAME='your_database_name'
   DB_USER='your_database_user'
   DB_PASSWORD='your_database_password'
   DB_HOST='localhost'
   DB_PORT='5432'
   \`\`\`

4. **Set up the database:**

   Create the database in PostgreSQL:
   \`\`\`sql
   CREATE DATABASE your_database_name;
   \`\`\`

5. **Run database migrations:**
   \`\`\`bash
   npx sequelize-cli db:migrate
   \`\`\`

6. **Start the application:**
   \`\`\`bash
   npm start
   \`\`\`

   The application should now be running on [http://localhost:3001](http://localhost:3001).

## Usage

### Accessing the Application

- Visit [http://localhost:3001](http://localhost:3001) in your web browser.
- Sign up for a new account or log in with an existing account.
- Create, read, update, and delete blog posts.
- Add comments to blog posts and view comments from other users.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes and commit them (\`git commit -m 'Add new feature'\`).
4. Push to the branch (\`git push origin feature-branch\`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or inquiries, please contact:

- **Your Name**
- **GitHub:** [Jerrietkuo](https://github.com/jerrietkuo)
- **Email:** [jerrietkuo@gmail.com](mailto:jerrietkuo@gmail.com)

Thank you for using Tech Blog!
