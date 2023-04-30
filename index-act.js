function actToPercentile(actScore) {
  // Define percentile values for each ACT score
  const percentileTable = {
    36: 99.8435,
    35: 99.2244,
    34: 98.1491,
    33: 96.8252,
    32: 95.2892,
    31: 93.5489,
    30: 91.5619,
    29: 89.3408,
    28: 86.9025,
    27: 84.1217,
    26: 80.9471,
    25: 77.3474,
    24: 73.2698,
    23: 68.737,
    22: 63.7906,
    21: 58.4691,
    20: 52.8388,
    19: 46.9981,
    18: 41,
    17: 36,
    16: 31,
    15: 26,
    14: 22,
    13: 18,
    12: 14,
    11: 11,
    10: 8,
    9: 6,
    8: 4,
    7: 2,
    6: 1,
    5: 1,
    4: 1,
    3: 1,
    2: 1,
    1: 1,
  };

  // Look up percentile for the given ACT score
  let percentile = percentileTable[actScore];

  // Adjust percentile according to rules
  if (actScore >= 22) {
    percentile *= 0.75;
  } else {
    percentile *= 0.6;
  }

  // Round percentile to two decimal places
  percentile = Math.round(percentile * 100) / 100;

  // Return adjusted percentile
  return percentile;
}

function act2ToPercentile(actScore) {
  // Define percentile values for each ACT score
  const percentileTable = {
    36: 99.8435,
    35: 99.2244,
    34: 98.1491,
    33: 96.8252,
    32: 95.2892,
    31: 93.5489,
    30: 91.5619,
    29: 89.3408,
    28: 86.9025,
    27: 84.1217,
    26: 80.9471,
    25: 77.3474,
    24: 73.2698,
    23: 68.737,
    22: 63.7906,
    21: 58.4691,
    20: 52.8388,
    19: 46.9981,
    18: 41,
    17: 36,
    16: 31,
    15: 26,
    14: 22,
    13: 18,
    12: 14,
    11: 11,
    10: 8,
    9: 6,
    8: 4,
    7: 2,
    6: 1,
    5: 1,
    4: 1,
    3: 1,
    2: 1,
    1: 1,
  };

  // Look up percentile for the given ACT score
  let percentile = percentileTable[actScore];

  // Adjust percentile according to rules
  if (actScore >= 22) {
    percentile *= 0.15;
  } else {
    percentile *= 0.15;
  }

  // Round percentile to two decimal places
  percentile = Math.round(percentile * 100) / 100;

  // Return adjusted percentile
  return percentile;
}

console.log(actToPercentile(22));

let form = document.getElementById("calc");
form.addEventListener("submit", (e) => {
  const act1 = document.getElementById("act1").value;
  if (act1 < 20) {
    alert("ACT 1: Minimum accepted score is 20.");
  }
  // IF CONDITIONS
  const gpa = document.getElementById("gpa").value;
  const gpa_percent = (Number(gpa) / 4) * 40;
  document.getElementById("gpa_percent").innerHTML = Number(gpa_percent);
  let act1_percent = actToPercentile(act1);
  document.getElementById("act1_percent").innerHTML = Number(act1_percent);

  const act2 = document.getElementById("act2").value;
  if (act2 < 20) {
    alert("ACT 2: Minimum accepted score is 20.");
  }
  const act2_percent = act2ToPercentile(act2);
  document.getElementById("act2_percent").innerHTML = Number(act2_percent);

  e.preventDefault();

  const total_score = act1_percent + act2_percent + gpa_percent;
  document.getElementById("gpa_score").innerHTML = Number(gpa);
  document.getElementById("act1_score").innerHTML = Number(act1);
  document.getElementById("act2_score").innerHTML = Number(act2);
  document.getElementById("total_mark").innerHTML =
    Number(total_score).toFixed(6);
  document.getElementById("gpa_percent").innerHTML = Number(gpa_percent);
});
