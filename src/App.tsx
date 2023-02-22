import { useState } from "react";
import { CypherEditor } from "@neo4j-cypher/react-codemirror";
import "@neo4j-cypher/codemirror/css/cypher-codemirror.css";

function App() {
  const [cypher, setCypher] = useState("MATCH (n) return n;");

  return (
    <div className="App">
      <CypherEditor value={cypher} theme="dark" onValueChanged={setCypher} />
    </div>
  );
}

export default App;
