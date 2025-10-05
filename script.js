document.getElementById("analyzeBtn").addEventListener("click", () => {
  const text = document.getElementById("resumeText").value.toLowerCase();
  const resultDiv = document.getElementById("results");
  const jobList = document.getElementById("jobList");

  if (!text.trim()) {
    alert("Please paste your resume first!");
    return;
  }

  // 🧩 Simple keyword database
  const jobProfiles = {
    "Software Engineer": ["python", "java", "api", "backend", "frontend", "full stack", "react", "django"],
    "Data Scientist": ["python", "machine learning", "pandas", "data", "ai", "statistics", "tensorflow"],
    "Web Developer": ["html", "css", "javascript", "react", "node", "frontend", "design"],
    "UX Designer": ["figma", "user research", "wireframe", "prototype", "ui", "design"],
    "Project Manager": ["management", "planning", "communication", "leadership", "strategy", "agile"],
    "Data Analyst": ["excel", "sql", "power bi", "tableau", "data visualization", "reporting"],
    "Marketing Specialist": ["seo", "social media", "branding", "content", "advertising"],
    "DevOps Engineer": ["aws", "docker", "kubernetes", "ci/cd", "linux", "cloud"],
    "AI Engineer": ["neural networks", "deep learning", "python", "pytorch", "tensorflow"],
    "Cybersecurity Analyst": ["security", "firewall", "network", "penetration testing", "threat", "risk"]
  };

  // 🔍 Score each job based on skill matches
  const scores = {};
  for (const [job, skills] of Object.entries(jobProfiles)) {
    scores[job] = skills.filter(skill => text.includes(skill)).length;
  }

  // 🏆 Sort and get top 10
  const sortedJobs = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 10);

  // ✨ Display results
  jobList.innerHTML = "";
  sortedJobs.forEach(([job, score]) => {
    const li = document.createElement("li");
    li.textContent = `${job} (${score} skill matches)`;
    jobList.appendChild(li);
  });

  resultDiv.classList.remove("hidden");
});
