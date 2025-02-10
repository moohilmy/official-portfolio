const ProjectList: {
    title: string;
    image: string;
    link?: string;
    gitHubLink: string;
    Teches: { name: string; style: string }[];
  }[] = [
    {
      title: "multi-step-form",
      image: "/projects/projectOne.png",
      link: "https://moo-multi-step-form-main.netlify.app/",
      gitHubLink: "https://github.com/moohilmy/multi-step-form",
      Teches: [
        {
          name: "react",
          style: "bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] text-white",
        },
        {
          name: "redux",
          style:
            "bg-gradient-to-t from-[#5e1f98] to-[#972df7] text-white text-white",
        },
        {
          name: "js",
          style: "bg-gradient-to-t from-[#edeb1a] to-[#fffd0a] text-black",
        },
      ],
    },
    {
      title: "todo-list",
      image: "/projects/projectTwo.png",
      gitHubLink: "https://github.com/moohilmy/todolist",
      Teches: [
        {
          name: "react",
          style: "bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] text-white",
        },
        {
          name: "node.js",
          style: "bg-gradient-to-t from-[#28d028] to-[#3ed53e] text-white",
        },
        {
          name: "express.js",
          style: "bg-gradient-to-t from-[#696969] to-[#000000] text-white",
        },
        {
          name: "redux",
          style:
            "bg-gradient-to-t from-[#5e1f98] to-[#972df7]  text-white text-white",
        },
        {
          name: "Ts",
          style: "bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] text-white",
        },
      ],
    },
    {
      title: "portfolio",
      image: "/projects/projectThree.png",
      link: "https://euphonious-manatee-76dbe7.netlify.app/",
      gitHubLink: "https://github.com/moohilmy/3d-portfolio",
      Teches: [
        {
          name: "react",
          style: "bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] text-white",
        },
        {
          name: "threejs",
          style: "bg-gradient-to-t from-[#d6d6d6] to-[#ffffff] text-black",
        },
        {
          name: "js",
          style: "bg-gradient-to-t from-[#edeb1a] to-[#fffd0a] text-black",
        },
        {
          name: "tailwindcss",
          style: "bg-gradient-to-t from-[#00bcff] to-[#2bc4fa] text-white",
        },
      ],
    },
    {
      title: "where in the world",
      image: "/projects/projectFour.png",
      link: "https://countries-api-moo.netlify.app/",
      gitHubLink: "https://github.com/moohilmy/countries-api",
      Teches: [
        {
          name: "react",
          style: "bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] text-white",
        },
        {
          name: "axios",
          style: "bg-gradient-to-t from-[#d6d6d6] to-[#ffffff] text-black",
        },
        {
          name: "redux",
          style: "bg-gradient-to-t from-[#5e1f98] to-[#972df7]  text-white",
        },
        {
          name: "js",
          style: "bg-gradient-to-t from-[#edeb1a] to-[#fffd0a] text-black",
        },
      ],
    },
  ];

export { ProjectList}