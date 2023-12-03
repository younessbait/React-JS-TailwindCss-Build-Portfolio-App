import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
  const [user_name, setname] = useState("");
  const [user_email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setemail("");
    setname("");
    setmessage("");
    emailjs
      .sendForm(
        "service_z44n67i",
        "template_erq4dtm",
        form.current,
        "RQ4643Y8jr0NyOBLt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg send");
        },
        (error) => {
          console.log(error.text);
          console.log("msg not send");
        }
      );
  };

  return (
    <div name="contact" className="flex flex-col   bg-gray-800 w-full justify-center h-screen text-white  items-center">
      <h1 className=" my-[45px] text-3xl font-bold border-b-[6px] border-b-lime-300 ">
        Contact
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col h-[60%] md:w-[40%]  justify-center  w-[80%]"
      >
        <label className=" font-bold text-xl">Name :</label>
        <input
          required
          className=" outline-none p-2 text-black md:p-2 bg-blue-200 rounded-md my-4"
          type="text"
          name="user_name"
          value={user_name}
          onChange={(e) => setname(e.target.value)}
        />
        <label className=" font-bold text-xl">Email :</label>
        <input
          required
          className="outline-none p-2 text-black md:p-2 bg-blue-200 rounded-md  my-4"
          type="email"
          name="user_email"
          value={user_email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label className=" font-bold text-xl">Message :</label>
        <textarea
          required
          className="outline-none p-6 md:p-2 text-black rounded-md  md:h-[150px]  bg-blue-200 my-4"
          name="message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <input
          className=" bg-lime-500 rounded-md p-2 cursor-pointer font-bold"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
