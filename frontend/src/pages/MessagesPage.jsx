import React from "react";
import Messaging from "../components/Messaging";

export default function MessagesPage() {
  return (
    <div className="p-4">
      <div className="h-[calc(100vh-5rem)]">
        <Messaging />
      </div>
    </div>
  );
}
