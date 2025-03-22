import SectionTitle from "../../../Components/SectionTitle";
import btnIcon from "./../../../assets/Contact/paper-plane.svg"

const ContactForm = () => {
  return (
    <div className="my-10">
      <SectionTitle
        subTitle="---Send Us a Message---"
        sectionTitle="Contact Form"
      ></SectionTitle>
      <form>
        <div className="bg-base-200 p-10 lg:p-20">
          <div className="fieldset grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:space-y-3">
            <fieldset className="fieldset">
              <label className="fieldset-label text-xl py-2">Name</label>
              <input
                type="text"
                className="input w-full text-base px-3 py-6 border-none"
                placeholder="Enter your name"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="fieldset-label text-xl py-2">Email</label>
              <input
                type="email"
                className="input w-full text-base px-3 py-6 border-none"
                placeholder="Enter your email"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <label className="fieldset-label text-xl py-2">Message</label>
            <textarea
              type="text"
              className="input w-full text-base py-5 min-h-24 lg:min-h-80 border-none"
              placeholder="Write your message here"
            />
          </fieldset>

          <button className="btn btn-neutral mt-4 mx-auto flex justify-center items-center bg-gradient-to-l from-[#b48030] to-[#845e23] border-none text-xl text-white">Send Message <img src={btnIcon}/> </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
