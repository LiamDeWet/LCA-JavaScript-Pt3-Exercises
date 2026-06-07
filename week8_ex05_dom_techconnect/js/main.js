let developers = [
  {
    id: 1,
    name: "Amahle Dlamini",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    avatar: "https://placehold.co/100x100/4F81BD/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 2,
    name: "Sipho Nkosi",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
    avatar: "https://placehold.co/100x100/9BBB59/ffffff",
    availableForHire: false,
    location: "Johannesburg",
  },
  {
    id: 3,
    name: "Lerato Mokoena",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL", "Docker", "Git"],
    avatar: "https://placehold.co/100x100/C0504D/ffffff",
    availableForHire: true,
    location: "Pretoria",
  },
  {
    id: 4,
    name: "Thabo Sithole",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    avatar: "https://placehold.co/100x100/F79646/ffffff",
    availableForHire: false,
    location: "Durban",
  },
  {
    id: 5,
    name: "Nomvula Zulu",
    role: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux"],
    avatar: "https://placehold.co/100x100/8064A2/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 6,
    name: "Kagiso Motsepe",
    role: "Frontend Developer",
    skills: ["Vue.js", "CSS", "TypeScript", "Tailwind CSS"],
    avatar: "https://placehold.co/100x100/17375E/ffffff",
    availableForHire: true,
    location: "Johannesburg",
  },
  {
    id: 7,
    name: "Zanele Mthembu",
    role: "Backend Developer",
    skills: ["Python", "Django", "REST APIs", "MySQL", "Redis"],
    avatar: "https://placehold.co/100x100/538135/ffffff",
    availableForHire: false,
    location: "Port Elizabeth",
  },
  {
    id: 8,
    name: "Bongani Cele",
    role: "Full Stack Developer",
    skills: ["Angular", "Java", "Spring Boot", "MongoDB"],
    avatar: "https://placehold.co/100x100/833C00/ffffff",
    availableForHire: true,
    location: "Durban",
  },
  {
    id: 9,
    name: "Precious Khumalo",
    role: "UI/UX Designer",
    skills: ["Sketch", "Figma", "Wireframing", "Accessibility", "CSS"],
    avatar: "https://placehold.co/100x100/31849B/ffffff",
    availableForHire: false,
    location: "Pretoria",
  },
  {
    id: 10,
    name: "Mandla Ntuli",
    role: "DevOps Engineer",
    skills: ["Terraform", "Azure", "Bash", "Ansible"],
    avatar: "https://placehold.co/100x100/7F7F7F/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 11,
    name: "Ayanda Mkhize",
    role: "Frontend Developer",
    skills: ["React", "Redux", "JavaScript", "SASS"],
    avatar: "https://placehold.co/100x100/1F3864/ffffff",
    availableForHire: false,
    location: "Bloemfontein",
  },
  {
    id: 12,
    name: "Thandeka Ndlovu",
    role: "Backend Developer",
    skills: ["Go", "gRPC", "PostgreSQL", "Docker", "Kafka"],
    avatar: "https://placehold.co/100x100/375623/ffffff",
    availableForHire: true,
    location: "Johannesburg",
  },
  {
    id: 13,
    name: "Lwazi Hadebe",
    role: "Full Stack Developer",
    skills: ["Next.js", "GraphQL", "Prisma", "TypeScript", "Vercel"],
    avatar: "https://placehold.co/100x100/632523/ffffff",
    availableForHire: true,
    location: "Cape Town",
  },
  {
    id: 14,
    name: "Nandi Shabalala",
    role: "UI/UX Designer",
    skills: ["User Testing", "Figma", "InVision", "Design Systems"],
    avatar: "https://placehold.co/100x100/984807/ffffff",
    availableForHire: false,
    location: "Durban",
  },
  {
    id: 15,
    name: "Sibusiso Mahlangu",
    role: "DevOps Engineer",
    skills: ["Jenkins", "GitHub Actions", "GCP", "Prometheus", "Grafana"],
    avatar: "https://placehold.co/100x100/3F3151/ffffff",
    availableForHire: true,
    location: "Pretoria",
  },
];

const toggleViewBtn = document.getElementById("toggleViewBtn");

const cardView = document.getElementById("cardView");
const tableBody = document.getElementById("tableBody");
const countDisplay = document.getElementById("developerCount");

function renderDevelopers(data) {
  cardView.innerHTML = "";
  tableBody.innerHTML = "";

  data.forEach((dev) => {
    // CARD

    cardView.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">

                    <div class="card-body text-center">

                        <img
                            src="${dev.avatar}"
                            class="rounded-circle mb-2"
                        >

                        <h5>${dev.name}</h5>

                        <p>${dev.role}</p>

                        <p>
                            ${dev.skills.join(", ")}
                        </p>

                        <span
                            class="badge-toggle badge
                            ${
                              dev.availableForHire
                                ? "bg-success"
                                : "bg-secondary"
                            }"
                            onclick="toggleHire(${dev.id})"
                        >
                            ${
                              dev.availableForHire ? "Available" : "Unavailable"
                            }
                        </span>

                    </div>
                </div>
            </div>
        `;

    // TABLE

    tableBody.innerHTML += `
            <tr>
                <td>${dev.name}</td>
                <td>${dev.role}</td>
                <td>${dev.skills.join(", ")}</td>

                <td>
                    <span
                        class="badge-toggle badge
                        ${dev.availableForHire ? "bg-success" : "bg-secondary"}"
                        onclick="toggleHire(${dev.id})"
                    >
                        ${dev.availableForHire ? "Available" : "Unavailable"}
                    </span>
                </td>
            </tr>
        `;
  });

  countDisplay.textContent = data.length;
}

function toggleHire(id) {
  const dev = developers.find((d) => d.id === id);

  if (!dev) return;

  dev.availableForHire = !dev.availableForHire;

  renderDevelopers(filteredDevelopers);
}

let filteredDevelopers = [...developers];

document.getElementById("searchInput").addEventListener("input", function () {
  const search = this.value.toLowerCase();

  filteredDevelopers = developers.filter(
    (dev) =>
      dev.name.toLowerCase().includes(search) ||
      dev.role.toLowerCase().includes(search) ||
      dev.skills.join(" ").toLowerCase().includes(search),
  );

  renderDevelopers(filteredDevelopers);
});

document
  .getElementById("developerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const role = document.getElementById("role").value.trim();

    const skills = document.getElementById("skills").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (!name || !role || !skills) {
      formMessage.innerHTML = "Please complete all fields.";

      formMessage.className = "text-danger";

      return;
    }

    developers.push({
      id: developers.length + 1,

      name,

      role,

      skills: skills.split(",").map((skill) => skill.trim()),

      avatar: "https://placehold.co/100x100",

      availableForHire: true,

      location: "Unknown",
    });

    filteredDevelopers = [...developers];

    renderDevelopers(filteredDevelopers);

    formMessage.innerHTML = "Developer added successfully!";

    formMessage.className = "text-success";

    this.reset();
  });

document.getElementById("toggleViewBtn").addEventListener("click", () => {
  const cardView = document.getElementById("cardView");

  const tableView = document.getElementById("tableView");

  if (cardView.classList.contains("d-none")) {
    cardView.classList.remove("d-none");
    tableView.classList.add("d-none");

    toggleViewBtn.textContent = "Table View";
  } else {
    cardView.classList.add("d-none");
    tableView.classList.remove("d-none");

    toggleViewBtn.textContent = "Card View";
  }
});

renderDevelopers(developers);
