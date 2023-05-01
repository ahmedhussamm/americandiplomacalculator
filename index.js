let form = document.getElementById("calc");
form.addEventListener("submit", (e) => {
  const est1 = document.getElementById("est1").value;
  if (est1 < 800) {
    alert("EST 1: Minimum accepted score is 800.");
  }
  // IF CONDITIONS
  if (est1 >= 1090) {
    const gpa = document.getElementById("gpa").value;
    const gpa_percent = (Number(gpa) / 4) * 40;
    document.getElementById("gpa_percent").innerHTML = Number(gpa_percent);
    let est1_percent = (est1 / 1600) * 60;
    document.getElementById("est1_percent").innerHTML = Number(est1_percent);

    const est2 = document.getElementById("est2").value;
    const est2_percent = (Number(est2) / 1600) * 15;
    document.getElementById("est2_percent").innerHTML = Number(est2_percent);

    e.preventDefault();

    const total_score = est1_percent + est2_percent + gpa_percent;
    document.getElementById("gpa_score").innerHTML = Number(gpa);
    document.getElementById("est1_score").innerHTML = Number(est1);
    document.getElementById("est2_score").innerHTML = Number(est2);
    document.getElementById("total_mark").innerHTML =
      Number(total_score).toFixed(6);
    document.getElementById("gpa_percent").innerHTML = Number(gpa_percent);
  }

  if (est1 < 1090) {
    const gpa = document.getElementById("gpa").value;
    const est1 = document.getElementById("est1").value;
    const gpa_percent = (Number(gpa) / 4) * 40;
    document.getElementById("gpa_percent").innerHTML = Number(gpa_percent);
    let est1_percent = (est1 / 1600) * 60;
    document.getElementById("est1_percent").innerHTML = Number(est1_percent);

    const est2 = document.getElementById("est2").value;
    const est2_percent = (Number(est2) / 1600) * 15;
    document.getElementById("est2_percent").innerHTML = Number(est2_percent);

    e.preventDefault();

    const total_score = est1_percent + est2_percent + gpa_percent;
    document.getElementById("gpa_score").innerHTML = Number(gpa);
    document.getElementById("est1_score").innerHTML = Number(est1);
    document.getElementById("est2_score").innerHTML = Number(est2);
    document.getElementById("total_mark").innerHTML =
      Number(total_score).toFixed(6);
    document.getElementById("gpa_percent").innerHTML = Number(gpa_percent);
  }
});
