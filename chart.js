let myChart = document.getElementById("myChart").getContext("2d");
      let departmentWiseChart = new Chart(myChart, {
        type: "bar",
        data: {
          labels: ["AI&DS", "CMPN", "INFT", "ETRX", "EXTC"],
          datasets: [
            {
              label: "departmentWiseCount",
              data: [1, 14, 19, 11, 30],
              backgroundColor: ["red", "blue", "green", "yellow", "orange"],
              borderWidth: 2,
              borderColor: "gray",
              hoverBorderWidth: 4,
              hoverBorderColor: "black",
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Department Wise Count for ChartJS Workshop",
              color: "black",
              font: {
                size: 20,
              },
            },
            legend: {
              display: true,
              position: "top",
            },
          },
        },
      });