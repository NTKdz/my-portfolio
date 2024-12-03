
const contacts = [
  {
    title: "Email",
    content: "nguyenthekhoi2003@gmail.com",
  },
  {
    title: "Github",
    content: "https://github.com/NTKdz",
  },
  {
    title: "Facebook",
    content: "https://www.facebook.com/khoi.nguyenthe.92/",
  },
  {
    title: "Linkedin",
    content: "https://www.linkedin.com/in/khoi-nguyen-the-19aa6a270/",
  },
];

export default function Contact() {
  return (
    <div className="h-full px-6 relative overflow-hidden">
      <div className="text-2xl font-bold mb-12 mt-12">Reach out to me</div>
      <div className="sm:flex hidden items-center gap-14 ">
        <div className="relative text-nowrap mt-[-10px] font-bold text-lg">
          <span className="absolute top-[-8px] right-2 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          let Contact =
        </div>
        <div className="relative text-nowrap">
          <div
            className="absolute top-0 left-0"
            style={{
              fontSize: "10rem",
              lineHeight: "1",
              marginLeft: "-3.2rem",
              marginTop: "-2.2rem",
              color: "#3b82f6",
            }}
          >
            {"{"}
          </div>
          <div
            className="absolute top-0 right-0"
            style={{
              fontSize: "10rem",
              lineHeight: "1",
              marginRight: "-3.2rem",
              marginTop: "-2.2rem",
              color: "#3b82f6",
            }}
          >
            {"}"}
          </div>
          <div className="">
            {contacts.map((item, index: number) => (
              <div key={index} className="flex gap-2 mb-2">
                <div className="font-bold text-lg">{item.title}:</div>
                <div className="hover:text-blue-500 hover:cursor-pointer">
                  {item.content}
                </div>
                <div className="text-lg">,</div>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:block hidden animate-spin-duration-9 absolute right-12 top-20 w-[200px] h-[200px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-60" />
        <div className="sm:block hidden animate-spin-duration-10 absolute right-32 top-56 w-80 h-80 bg-gradient-to-r from-[#fc00ff] to-blue-500 rounded-full opacity-50" />
      </div>

      <div className="mt-12 flex items-center gap-8 ">
        <img
          src="./assets/github_icon.svg"
          alt="Github"
          className="w-8 h-8 hover:cursor-pointer animate-bounce-1"
          onClick={() => window.open("https://github.com/NTKdz", "_blank")}
        />
        <img
          src="./assets/facebook_icon.svg"
          alt="Facebook"
          className="w-8 h-8 hover:cursor-pointer animate-bounce-2"
          onClick={() =>
            window.open("https://www.facebook.com/khoi.nguyenthe.92/", "_blank")
          }
        />
        <img
          src="./assets/linkedin_icon.png"
          alt="Linkedin"
          className="w-8 h-8 hover:cursor-pointer animate-bounce-3"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/khoi-nguyen-the-19aa6a270/",
              "_blank"
            )
          }
        />
        <img
          src="./assets/gmail_icon.svg"
          alt="Gmail"
          className="w-8 h-8 hover:cursor-pointer animate-bounce-4"
          onClick={() =>
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=nguyenthekhoi2003@gmail.com", "_blank")
          }
        />
      </div>
    </div>
  );
}
