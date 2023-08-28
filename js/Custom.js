

 const BarIcon = document.getElementById("bars");
  const Sitebar = document.getElementById("siteAndNavbar");
const SitebarArea = document.getElementById("leftSidebar");
const mainContent = document.getElementById("right-content");


 BarIcon.addEventListener("click", function(){
    if (Sitebar.classList.contains("siteAndNavbar")) {
        Sitebar.style.width="0%";
        Sitebar.style.transition=".6s";
      SitebarArea.style.display="none";
      mainContent.style.width="100%";
      Sitebar.classList.remove("siteAndNavbar");
    }else{
      Sitebar.classList.add("siteAndNavbar")
      Sitebar.style.width="15%";
      Sitebar.style.display="block";
        Sitebar.style.transition=".6s";
      mainContent.style.transition=".6s";
      mainContent.style.width="84%";
      SitebarArea.style.display="block";
      SitebarArea.style.transition=".8s";
    }
     
 })


  const ctx = document.getElementById('myChart1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   chart 2
  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   chart 3
  const ctx3 = document.getElementById('myChart3');

  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   chart 2
  const ctx4 = document.getElementById('myChart4');

  new Chart(ctx4, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   chart 3
  const ctx5 = document.getElementById('myChart5');

  new Chart(ctx5, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });