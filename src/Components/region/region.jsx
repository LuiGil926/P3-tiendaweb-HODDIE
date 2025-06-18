import styles from "./region.module.css";

import { useState, useEffect } from "react";
import getregion from "../../hooks/region";

function Region() {
  const [region, setRegion] = useState("");

  useEffect(() => {
    getregion().then((res) => setRegion(res));
  }, []);

 

  return (
    <div className={styles.region_container}>
      <p>Region: {region || "desconocida..."}</p>
    </div>
  );
}

export default Region;