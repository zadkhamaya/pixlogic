"use client";

import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/apiUrl.js";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const CreateEvent = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    authorId: "",
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
    toast.success(`${data.message}. Redirect to dashboard...`);
    router.push("/dashboard")
  };

  const isFormValid = () => {
    return (
      eventData.name.trim() !== "" &&
      eventData.description.trim() !== "" &&
      eventData.location.trim() !== "" &&
      eventData.date.trim() !== ""
    );
  };

  useEffect(() => {
    const user = JSON.parse(Cookies.get("user"));
    setUser(user);
    setEventData({ ...eventData, ["authorId"]: user.id });
  }, []);

  return (
    <div className="space-y-12 max-w-2xl m-auto">
      <div className="text-center">
        <h3>Create New Event</h3>
        <p>Fill your event's details</p>
      </div>
      <div className="space-y-4">
        <Input
          isRequired
          type="text"
          name="name"
          label="Event name"
          onChange={handleEventChange}
        />
        <Textarea
          isRequired
          className="block w-full textarea textarea-bordered"
          name="description"
          label="Description"
          onChange={handleEventChange}
        />
        <Input
          isRequired
          type="text"
          name="location"
          label="Location"
          onChange={handleEventChange}
        />
        <Input
          isRequired
          type="date"
          name="date"
          onChange={handleEventChange}
        />
        <section className="flex gap-2">
          <Button
            isDisabled={loading || !isFormValid()}
            isLoading={loading}
            className="bg-blue-600 rounded-xl p-2 text-white"
            onClick={handleSubmitCreateEvent}
          >
            Create
          </Button>
          <Link href="/dashboard">
            <Button isDisabled={loading} color="warning">
              Back
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};
