let form = document.getElementById("calc");
form.addEventListener("submit", (e) => {
  const est1 = document.getElementById("est1").value;
  if (est1 < 800) {
    alert("EST 1: Minimum accepted score is 800.");
  }
  // IF CONDITIONS

  if (est1 >= 1090) {
    var subject1 = parseInt(document.getElementById("s1").value)
    var subject2 = parseInt(document.getElementById("s2").value)
    var subject3 = parseInt(document.getElementById("s3").value)
    var subject4 = parseInt(document.getElementById("s4").value)
    var subject5 = parseInt(document.getElementById("s5").value)
    var subject6 = parseInt(document.getElementById("s6").value)
    var subject7 = parseInt(document.getElementById("s7").value)
    var subject8 = parseInt(document.getElementById("s8").value)
    var subjectstotal = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7 + subject8;
    const gpa = (subjectstotal/800)*4;
    const gpa_percent = (Number(gpa) / 4) * 40;
    const est1 = document.getElementById("est1").value;
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
    var subject1 = parseInt(document.getElementById("s1").value)
    var subject2 = parseInt(document.getElementById("s2").value)
    var subject3 = parseInt(document.getElementById("s3").value)
    var subject4 = parseInt(document.getElementById("s4").value)
    var subject5 = parseInt(document.getElementById("s5").value)
    var subject6 = parseInt(document.getElementById("s6").value)
    var subject7 = parseInt(document.getElementById("s7").value)
    var subject8 = parseInt(document.getElementById("s8").value)
    var subjectstotal = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7 + subject8;
    const gpa = (subjectstotal/800)*4;
    const gpa_percent = (Number(gpa) / 4) * 40;
    const est1 = document.getElementById("est1").value;
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
