import { useState } from "react";
import { CypherEditor } from "@neo4j-cypher/react-codemirror";

function App() {
  const [cypher, setCypher] = useState("MATCH (n) return n;");

  return (
    <div className="App">
      <CypherEditor value={cypher} onValueChanged={setCypher} />
    </div>
  );
}

export default App;
