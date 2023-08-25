

 const BarIcon = document.getElementById("bars");
  const Sitebar = document.getElementById("siteAndNavbar");
const SitebarArea = document.getElementById("leftSidebar");
const mainContent = document.getElementById("MainContent")
 BarIcon.addEventListener("click", function(){
    if (Sitebar) {
      Sitebar.classList.remove("siteAndNavbar");
        Sitebar.style.width="0%";
      SitebarArea.style.display="none";
      mainContent.style.width="100%"
    }else{
      Sitebar.style.width="15%";
      Sitebar.classList.add("siteAndNavbar");
      SitebarArea.style.display="block";
      mainContent.style.width="80%"
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