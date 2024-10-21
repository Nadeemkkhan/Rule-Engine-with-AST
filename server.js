const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize file-based database
const db = new sqlite3.Database('./database/rules.db'); // Correct path to use file-based SQLite DB

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS rules (id INTEGER PRIMARY KEY AUTOINCREMENT, rule TEXT)");
});

class Node {
  constructor(type, left = null, right = null, value = null) {
    this.type = type;
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

app.post('/create_rule', (req, res) => {
  const { ruleString } = req.body;
  const ruleNode = parseRule(ruleString);
  const stmt = db.prepare("INSERT INTO rules (rule) VALUES (?)");
  stmt.run(ruleString, function (err) {
    if (err) {
      res.status(500).send('Server error');
    } else {
      res.json({ id: this.lastID, rule: ruleNode });
    }
  });
  stmt.finalize();
});

app.post('/combine_rules', (req, res) => {
  const { rules } = req.body;
  const combinedRule = combine(rules);
  res.json(combinedRule);
});

app.post('/evaluate_rule', (req, res) => {
  const { rule, data } = req.body;
  const evaluationResult = evaluate(rule, data);
  res.json(evaluationResult);
});

function parseRule(ruleString) {
    // Simplified parsing logic for demonstration
    return new Node("AND", new Node("operand", null, null, "age > 30"), new Node("operand", null, null, "department = 'Sales'"));
  }
  

function combine(rules) {
  return new Node("OR", parseRule(rules[0]), parseRule(rules[1]));
}

function evaluate(rule, data) {
  if (rule.type === "AND") {
    return evaluate(rule.left, data) && evaluate(rule.right, data);
  } else if (rule.type === "OR") {
    return evaluate(rule.left, data) || evaluate(rule.right, data);
  } else if (rule.type === "operand") {
    if (rule.value.includes(">")) {
      const [key, value] = rule.value.split(">");
      return data[key.trim()] > parseFloat(value.trim());
    } else if (rule.value.includes("=")) {
      const [key, value] = rule.value.split("=");
      return data[key.trim()] === value.trim().replace(/['"]+/g, '');
    }
  }
  return false;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
