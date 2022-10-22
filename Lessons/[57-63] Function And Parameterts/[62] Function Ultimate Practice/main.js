document.write(`<hr/>`);

document.write(`<h1>Usign If Condition</h1>`);

function showInfo(un = "Un", ag = "Un", hr = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${un}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $ ${hr}</p>`);
  if (show === "Yes") {
    document.write(`<p>Skills ${sk.join(" | ")}</p>`);
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "Yes", "Html", "Css", "Js"); // Change Show Argument "Yes" You Will Notice The Difference
document.write(`<hr/>`);
/* ---------------------------------------------------------- */

document.write(`<h1>Usign For Loop</h1>`);

function showInfo1(un1 = "Un", ag1 = "Un", hr1 = 0, show1 = "Yes", ...sk1) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${un1}</h2>`);
  document.write(`<p>Age: ${ag1}</p>`);
  document.write(`<p>Hour Rate: $ ${hr1}</p>`);
  if (show1 === "Yes") {
    // document.write(`<p>Skills ${sk.join("|")}</p>`);
    document.write(`Skils: `);
    for (let i = 0; i < sk1.length; i++) {
      document.write(`${sk1[i].join(" | ")}`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo1("Osama", 38, 20, "Yes", ["Html", "Css", "Js"]); // Change show Argument "Yes" You Will See The Difference

document.write(`<hr/>`);

/* ---------------------------------------------------------- */
document.write(`<h1>Usign If Condition And Nested If 1</h1>`);

function showInfo2(un2 = "Un", ag2 = "Un", hr2 = 0, show2 = "Yes", ...sk2) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${un2}</h2>`);
  document.write(`<p>Age: ${ag2}</p>`);
  document.write(`<p>Hour Rate: $ ${hr2}</p>`);
  if (show2 === "Yes") {
    if (sk2.length > 0) {
      document.write(`<p>Skills ${sk2.join(" | ")}</p>`);
    } else {
      document.write(`Skills: No Skills`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo2("Osama", 38, 20, "Yes", "Html", "Css", "Js"); // Change show Argument "Yes" Or sk Arguments "Html", "Css", "Js" You Will See The

document.write(`-----------------------------------`);

document.write(`<h1>Usign If Condition And Nested If 2</h1>`);

function showInfo22(un2 = "Un", ag2 = "Un", hr2 = 0, show2 = "Yes", ...sk2) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${un2}</h2>`);
  document.write(`<p>Age: ${ag2}</p>`);
  document.write(`<p>Hour Rate: $ ${hr2}</p>`);
  if (show2 === "Yes") {
    if (sk2.length > 0) {
      document.write(`<p>Skills ${sk2.join(" | ")}</p>`);
    } else {
      document.write(`Skills: No Skills`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo22("Osama", 38, 20, "Yes"); // Focus Here We Deleted sk2 Argument And It Outputted 'Skills: No Skill'

document.write(`-----------------------------------`);

document.write(`<h1>Usign If Condition And Nested If 3</h1>`);

function showInfo222(un2 = "Un", ag2 = "Un", hr2 = 0, show2 = "Yes", ...sk2) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${un2}</h2>`);
  document.write(`<p>Age: ${ag2}</p>`);
  document.write(`<p>Hour Rate: $ ${hr2}</p>`);
  if (show2 === "Yes") {
    if (sk2.length > 0) {
      document.write(`<p>Skills ${sk2.join(" | ")}</p>`);
    } else {
      document.write(`Skills: No Skills`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo222("Osama", 38, 20, "no", "Html", "Css", "Js"); // Focus Here We Changed show222 Argument And It Outputted 'Skills Is Hidden' Even We Wrote sk222 Argument

document.write(`-----------------------------------`);

document.write(`<h1>Usign If Condition And Nested If 4</h1>`);

function showInfo2222(un2 = "Un", ag2 = "Un", hr2 = 0, show2 = "Yes", ...sk2) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${un2}</h2>`);
  document.write(`<p>Age: ${ag2}</p>`);
  document.write(`<p>Hour Rate: $ ${hr2}</p>`);
  if (show2 === "Yes") {
    if (sk2.length > 0) {
      document.write(`<p>Skills ${sk2.join(" | ")}</p>`);
    } else {
      document.write(`Skills: No Skills`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }

  document.write(`</div>`);
}

showInfo2222("Osama", 38, 20, "No"); // Focus Here We Changed show2222 Argument And It Outputted 'Skills Is Hidden'
// To Be Honest The Lesson Need To Watch Not To Read
