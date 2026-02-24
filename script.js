// JOB DATA
let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "Remote $130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles,CA",
    type: "part-time",
    salary: "$$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston,MA",
    type: "Full-time",
    salary: " $125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking",
    status: "all"
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all"
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "all"
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
     type: "Full-time",
    salary:  "$130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "all"
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "High quality UI development",
    status: "all"
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco,",
    type: "Full-time",
    salary: "$130,00-$175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "all"
  }
];

// STATE
let activeTab = "all";
let jobContainer = document.getElementById("jobContainer");

// TAB SWITCH
function setTab(tab) {
  activeTab = tab;

  document.getElementById("allTab").className = "px-4 py-2 rounded bg-gray-200";
  document.getElementById("interviewTab").className = "px-4 py-2 rounded bg-gray-200";
  document.getElementById("rejectedTab").className = "px-4 py-2 rounded bg-gray-200";

  document.getElementById(tab + "Tab").className =
    "px-4 py-2 rounded bg-black text-white";

  render();
}

// FILTER JOBS
function getJobsByTab(tab) {
  if (tab === "all") return jobs;
  return jobs.filter(job => job.status === tab);
}

// UPDATE COUNTS
function updateCounts() {
  document.getElementById("allCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

// EMPTY STATE
function renderEmptyState() {
  return `
    <div class="col-span-full text-center py-16">
      <div class="text-5xl mb-3"> </div>
      <h3 class="text-lg font-semibold">No jobs available</h3>
      <p class="text-gray-500 text-sm">
        You haven’t marked any jobs yet
      </p>
    </div>
  `;
}

// BUTTON ACTIONS
function markInterview(id) {
  jobs = jobs.map(job =>
    job.id === id ? { ...job, status: "interview" } : job
  );
  activeTab = "interview";
  render();
}

function markRejected(id) {
  jobs = jobs.map(job =>
    job.id === id ? { ...job, status: "rejected" } : job
  );
  activeTab = "rejected";
  render();
}

// RENDER UI
function render() {
  updateCounts();

  let filteredJobs = getJobsByTab(activeTab);

  if (filteredJobs.length === 0) {
    jobContainer.innerHTML = renderEmptyState();
    return;
  }

  jobContainer.innerHTML = filteredJobs
    .map(job => `
      <div class="border p-4 rounded-lg bg-white">
        <h3 class="font-bold">${job.position}</h3>
        <p class="text-sm">${job.companyName}</p>
        <p class="text-sm">${job.location} • ${job.type}</p>
        <p class="font-semibold">${job.salary}</p>
        <p class="text-sm text-gray-600">${job.description}</p>

        <div class="flex gap-2 mt-3">
          <button onclick="markInterview(${job.id})"
            class="px-3 py-1 rounded bg-green-500 text-white">
            Interview
          </button>

          <button onclick="markRejected(${job.id})"
            class="px-3 py-1 rounded bg-red-500 text-white">
            Rejected
          </button>
        </div>
      </div>
    `)
    .join("");
}

// INITIAL LOAD
render();