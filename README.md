
# Rule Engine with AST

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
   git clone https://github.com/Nadeemkkhan/Rule-Engine-with-AST.git
   cd Rule-Engine-with-AST
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application Locally

1. **Start the server**:
   ```bash
   node server.js
   ```

2. **Open your web browser** and go to [http://localhost:3000](http://localhost:3000).

### Running the Application Using Docker

1. **Build the Docker image**:
   ```bash
   docker build -t rule-engine-app .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -d -p 3000:3000 --name rule-engine-container rule-engine-app
   ```

3. **Access the application** at [http://localhost:3000](http://localhost:3000).

## Usage

- You can create, combine, and evaluate rules using the provided web interface.

## Troubleshooting

- If you encounter issues, ensure all dependencies are installed and that the server is running.


## Acknowledgements

Thanks to the open-source community for providing resources and libraries that made this project possible.
```

