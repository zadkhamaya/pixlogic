"use client";

import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/apiUrl.js";

export const CreateEvent = () => {
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    authorId: "9bbb966c-e315-4aad-812b-f52f5a9ee80f",
  });

  const handleEventChange = (event) => {
    const { name, value } = event.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmitCreateEvent = async () => {
    setLoading(true);
    const { name, description, location, date, authorId } = eventData;
    const res = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, location, date, authorId }),
    });
    const data = await res.json();
    console.log(data)
  };

  return (
    <div className="space-y-12 max-w-2xl m-auto">
      <div>
        <h3>Create New Event</h3>
        <p>Fill your event's details</p>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Event name"
          onChange={handleEventChange}
        />
        <textarea
          name="description"
          placeholder="description"
          onChange={handleEventChange}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={handleEventChange}
        />
        <input type="date" name="date" onChange={handleEventChange} />
        <button className="bg-blue-600 rounded-xl p-2 text-white" onClick={handleSubmitCreateEvent}>Create</button>
      </div>
    </div>
  );
};
