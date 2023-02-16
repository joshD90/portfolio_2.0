import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import HomeIcon from "@mui/icons-material/Home";

function Contact() {
  const [state, handleSubmit] = useForm("mgebwqjv");

  if (state.succeeded)
    return (
      <div
        className="w-full h-screen flex flex-col items-center justify-center text-stone-800"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(209 250 229) 0 50%,rgb(236 253 245)50% 100%)",
        }}
      >
        <p className="pb-5 font-bold">Thanks for Getting In Touch</p>
        <Link to="/">
          <HomeIcon
            style={{ fontSize: "4rem" }}
            className="cursor-pointer hover:text-stone-900"
          />
        </Link>
      </div>
    );

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(209 250 229) 0 50%,rgb(236 253 245)50% 100%)",
      }}
    >
      <h1 className="text-2xl text-stone-700 mb-5">Get In Touch!</h1>
      <div className=" bg-opacity-60 p-5 rounded-md border-2 border-emerald-100 w-full sm:w-2/3 md:w:2/5 lg:w-1/3 bg-stone-600">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-stone-700">Name</label>
            <input
              //   onChange={handleChange}
              id="name"
              name="name"
              placeholder="Your name here"
              required={true}
              className="h-8 rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-stone-700">Contact</label>
            <input
              //   onChange={handleChange}
              id="email"
              name="email"
              placeholder="The Best Way to Contact You"
              required={true}
              className="h-8 rounded-sm p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-stone-700">Your Message Here</label>
            <textarea
              id="message"
              name="message"
              required={true}
              //   onChange={handleChange}
              className="h-52 rounded-sm p-2 max-h-80"
            />
            <div className="self-end mt-5 p-2 bg-emerald-600 text-white text-xl rounded-md px-4 hover:bg-emerald-500 hover:shadow-lg">
              <button type="submit" disabled={state.submitting}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
