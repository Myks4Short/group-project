document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit'); //index submit id
    const learnerArray = JSON.parse(localStorage.getItem("storage1")) || [];
    const disabilityTypeSelect = document.getElementById('disabilityType');
    const disabilityCauseSelect = document.getElementById('disabilityCause');
    const ncaeSelect = document.getElementById('takenNCAE');
    // add html list id

    const renderList = (param1) => {
        info = param1.map((data) => {
            return `
            
            `
        }).join("");
        /*html List Id*/.innerHTML = info;
    }

    const inputData = () => {
        let picture = document.getElementById('').value;
        // unique learner identifier
        let uli = document.getElementById('learnerId').value;
        // name
        let firstName = document.getElementById('').value;
        let middleName = document.getElementById('').value;
        let lastName = document.getElementById('').value;
        // learner profile
        let street = document.getElementById('').value;
        let barangay = document.getElementById('').value;
        let district = document.getElementById('').value;
        let city = document.getElementById('').value;
        let province = document.getElementById('').value;
        let region = document.getElementById('').value;

        let email = document.getElementById('email').value;
        let contact = document.getElementById('contactNumber').value;
        let nationality = document.getElementById('nationality').value;
        // personal information
        let sex = document.getElementById('').value;
        let civilStatus = document.getElementById('').value;
        let employmentStatus = document.getElementById('').value;
        // birthdate
        let month = document.getElementById('').value;
        let day = document.getElementById('').value;
        let year = document.getElementById('').value;
        let age = document.getElementById('').value;
        // birthplace
        let birthCity = document.getElementById('').value;
        let birthProvince = document.getElementById('').value;
        let birthRegion = document.getElementById('').value;
        // education Attainment
        let education  = document.getElementById('').value;
        // guardian
        let guardianName = document.getElementById('').value;
        let guardianMailAddress = document.getElementById('').value;

        let studentClassification = document.getElementById('learnerClassification').value;
        let typeOfDisability = disabilityTypeSelect.value;
        let causeOfDisability = disabilityCauseSelect.value;

        let ncae = ncaeSelect.value;
        let ncaeWhere = document.getElementById('').value;
        let ncaeWhen = document.getElementById('').value;
        let nameOfCourse = document.getElementById('courseQualification').value;
        let scholarPackage = document.getElementById('').value;
        let privacyDisclaimer = document.getElementById('').value;
    }
    
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        inputData();
        learnerArray.push({
            picture,
            uli,
            firstName,
            middleName,
            lastName,
            street,
            barangay,
            district,
            city,
            province,
            region,
            email,
            contact,
            nationality,
            sex,
            civilStatus,
            employmentStatus,
            month,
            day,
            year,
            age,
            birthCity,
            birthProvince,
            birthRegion,
            education,
            guardianName,
            guardianMailAddress,
            studentClassification,
            typeOfDisability,
            causeOfDisability,
            ncae,
            ncaeWhere,
            ncaeWhen,
            nameOfCourse,
            scholarPackage,
            privacyDisclaimer
        })
        localStorage.setItem("storagelist", JSON.stringify(learnerArray));
    })
})
