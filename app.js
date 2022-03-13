const devsContainer = document.querySelector(".developer__item__container");
const studentContainer = document.querySelector(".student__data__item");
const familyMemberContainer = document.querySelector(".familyNumber__item__container");


// For Developers

function incomeSort(income) {

    if (income >= 999) {

        income = (income.toString().split(""));
        income.splice(1, 0, ".");
        income = Number(income.join("")).toFixed(1);

        return income;

    } else {
        console.log("Income Less Than 999");
    }
}

devs.map(data => {

    devsContainer.innerHTML += (`

    <div class="developer__item">
    <img src="${data.Picture}" alt="developer__image" />
    <h2 class="developer__name">${data.Name}</h2>
    <div class="developer__desc">
      <div>
        <p class="developer__desc__item title">${data.Skill}</p>
        <p class="developer__desc__item age">${data.Age} Year Old</p>
      </div>
      <div>

        <p class="developer__desc__item location">${data.Location}</p>
        <p class="developer__desc__item income">${incomeSort(data.Income)}k$/Year</p>
      </div>

    </div>
  </div>

    `);
});

// For Student

students.map(data => {
    studentContainer.innerHTML += `
    <tr>
    <td>${data.Roll}</td>
    <td>${data.Name}</td>
    <td>${data.FatherName}</td>
    <td>${data.MotherName}</td>
    <td>${data.Location}</td>
    <td>${data.Bangla}</td>
    <td>${data.English}</td>
    <td>${data.Math}</td>
    <td>${data.Science}</td>
    <td>${data.socialScience}</td>
    <td>${data.Religion}</td>
    </tr>

    `;
});

// For Family Members

familyMembers.map(data => {
    familyMemberContainer.innerHTML += `

    <div class="familyNumber__item">
    <img src="${data.Picture}" class="familyNumber__image" alt="">
    <div class="familyNumber__item__desc">
      <h2 class="familyNumber__item__desc__heading">${data.Name} ( ${data.Relation} )</h2>
      <p>Home - ${data.Number}</p>
      <p>Work - ${data.Number}</p>
      <p>Sim Company - ${data.SimCompany}</p>
    </div>
    </div>

    `;
})