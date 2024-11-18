// Google Map Integration
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.9249, lng: 18.4241 }, // Cape Town
    zoom: 12,
  });
}

// Chart.js - Revenue Graph
const ctx = document.getElementById("revenue-chart").getContext("2d");
const revenueChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue",
      data: [3000, 3500, 4000, 5000, 6500, 7000],
      borderColor: "#FF4C00",
      fill: false,
    }]
  }
});

// Chart.js - Skill Level Graph
const skillCtx = document.getElementById("skills-chart").getContext("2d");
const skillsChart = new Chart(skillCtx, {
  type: "bar",
  data: {
    labels: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    datasets: [{
      label: "Skill Level",
      data: [90, 85, 80, 70, 75],
      backgroundColor: "#FF4C00",
      borderRadius: 8,
    }]
  }
});

// SweetAlert - Service Details
function openServiceDetails(service) {
  let title = "";
  let message = "";

  switch(service) {
    case "web-dev":
      title = "Web Development";
      message = "We offer custom web development using the latest technologies.";
      break;
    case "app-dev":
      title = "App Development";
      message = "High-quality iOS & Android apps built to meet your business needs.";
      break;
    case "ui-ux":
      title = "UI/UX Design";
      message = "User-centered design that engages and delights your audience.";
      break;
    case "seo-marketing":
      title = "SEO & Marketing";
      message = "Optimize your site for search engines and increase your digital presence.";
      break;
  }

  Swal.fire({
    title: title,
    text: message,
    icon: "info",
    confirmButtonText: "Close",
  });
}
