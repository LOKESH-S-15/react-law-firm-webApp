import React, { useState } from "react";
import styles from "./Client.module.css";
import ClientCard from "./ClientCard";
import data from "../../ClientList/ClientList";
import Carsoul from "./Carsoul";



const Client = () => {
  const [clientData, setClientData] = useState(data);
 

  return (
    <div className={styles.clientSecCon}>
      <div className={styles.clientHeadSecCon}>
        <div className={styles.clientHeadTitleSecCon}>
          <h1>What says our happy Clients</h1>
        </div>
        <div className={styles.clientHeadBtnSecCon}>
          
        </div>
      </div>
      <div className={styles.carsoul}>
      <Carsoul clientData={clientData} renderComp={(item)=>{
        return <ClientCard key={item.id} item={item} />
      }}/>
      </div>
      
    </div>
  );
};

export default Client;
