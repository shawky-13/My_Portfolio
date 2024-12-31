import Form from "./Form";
import Gradient from "./Gradient";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" relative z-10 flex items-center justify-center rounded-lg bg-n-8/50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Contact Me
          </h2>
        </div>
        <Form />
      </div>
      <Gradient
        className={"top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"}
      />
    </section>
  );
};

export default Contact;
