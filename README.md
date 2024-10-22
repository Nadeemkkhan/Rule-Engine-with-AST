# Rule-Engine-with-AST


A simple rule engine built with Node.js and SQLite, allowing for rule creation, combination, and evaluation through a web interface. This application serves as a basic demonstration of a rule engine's functionalities and can be expanded for more complex use cases.

## Features

- **Rule Creation**: Define rules using a simple string format.
- **Combine Rules**: Combine multiple rules using logical operators.
- **Evaluate Rules**: Evaluate defined rules against provided data.
- **SQLite Database**: Stores created rules persistently.

## Technologies Used

- Node.js
- Express.js
- SQLite
- HTML

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/get-started)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/rule-engine.git
   cd rule-engine
   
2.**Install dependencies**:
  npm install
  
3.**Running the Application Locally**:
    Start the server: node server.js
    Open your web browser and go to http://localhost:3000.
    Your application will be running in http://localhost:3000

4.**Running the Application Using Docker**:
      Build the Docker image: docker build -t rule-engine-app .
      Run the Docker container:docker run -d -p 3000:3000 --name rule-engine-container rule-engine-app
      
5.**Access the application at http://localhost:3000.**

  
