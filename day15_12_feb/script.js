const button = document.getElementById("submit");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const sname = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const math = parseInt(document.getElementById('math').value);
    const science = parseInt(document.getElementById('science').value);
    const english = parseInt(document.getElementById('english').value)

    
    const student = {
        sname,
        age,
        math,
        marks: {
            math: math,
            science: science,
            english: english,
        }
    }
    const total= student.marks.math + student.marks.science + student.marks.english;
    const  average = total / 3;

let result, color;
    if (student.age < 18) {
        result = "You must be 18+ to pass";
        color = "gray";
    } else if (average >= 75) {
        result = "Distinction";
        color = "green";
    } else if (average >= 40) {
        result = "Pass";
        color = "orange";
    } else {
        result = "Fail";
        color = "red";
    }

    document.getElementById("sname").textContent = student.sname;
    document.getElementById("sage").textContent = student.age;
    document.getElementById("saverage").textContent = average.toFixed(2);
    document.getElementById("sresult").textContent = result;

    document.body.style.backgroundColor = color;

      try {
        student = {};
      } catch (error) {
        console.error("Error:", error.message);
        alert("Reassigning a const object like 'student = {}' is not allowed. " +
              "Const prevents reassignment, but you can still change properties inside the object.");
      }


})