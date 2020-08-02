import React from "react"

import Header from '../components/Header';
import RecordList from "../components/RecordList";

export default function Home() {
  return (
    <div>
        <Header title="Dave's Record List" page="homepage"/>
        <main>
            <RecordList type="image"/>
        </main>
    </div>
  );
}
