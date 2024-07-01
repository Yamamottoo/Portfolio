"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "2323232",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "asdfasdfsda@gamt",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "code Cornet, sdfadsf",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [vk, setVk] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ fullname, telegram, vk, email, message }),
    });
    const { msg } = res.json();
    setError(msg);
    console.log(error);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* from */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let`s work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                voluptate aliquam? Tenetur, rerum ab.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="fullname"
                  placeholder="FullName"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullname}
                />
                <Input
                  type="telegram"
                  placeholder="Telegram"
                  onChange={(e) => setTelegram(e.target.value)}
                  value={telegram}
                />
                <Input
                  type="vk"
                  placeholder="Vk"
                  onChange={(e) => setVk(e.target.value)}
                  value={vk}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Logo Design</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Напиши тут свое сообщение"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                Send
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;