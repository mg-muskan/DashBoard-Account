const rName = document.getElementById('user-dash-fullname')
const rEmail = document.getElementById('user-dash-email');
const rMobile = document.getElementById('user-dash-mobile');
const rDOB = document.getElementById('user-dash-dob');
const rGender = document.getElementsByName('gender');
const rUniversity = document.getElementById('user-dash-university');
const rCollege = document.getElementById('user-dash-college');
const rCourse = document.getElementById('user-dash-course');
const rBranch = document.getElementById('user-dash-branch');
const rSemester = document.getElementById('user-dash-semester');
const rSubmit = document.getElementById('user-dashboard-form');

rMobile.oninput = () => {
    if (rMobile.value.length > rMobile.maxLength) {
        rMobile.value = rMobile.value.slice(0, rMobile.maxLength);
    }
}

const numberPattern = /^[6-9]\d{9}$/;
const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
const mailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function setError(id) {
    document.getElementById(`dashboard-${id}`).style.display = 'block';
}

function setSuccess(id) {
    document.getElementById(`dashboard-${id}`).style.display = 'none';
}

rSubmit.addEventListener('submit', e => {
    e.preventDefault();
    validate(e);
});

function validate(e) {
    const nameVal = rName.value.trim();
    const emailVal = rEmail.value.trim();
    const numberVal = rMobile.value.trim();
    let success = 0;
    
    if(!namePattern.test(nameVal) || nameVal=="") {
        setError('name');
    }
    else {
        setSuccess('name');
        success++;
    }

    if(emailVal=="" || !mailPattern.test(emailVal)) {
        setError('email')
    }
    else {
        setSuccess('email');
        success++;
    }

    if(numberVal=="" || !numberPattern.test(numberVal)) {
        setError('mobile')
    }
    else {
        setSuccess('mobile');
        success++;
    }

    if(rDOB.value == '') {
        setError('dob');
    }
    else {
        setSuccess('dob');
        success++;
    }

    if(rGender.value == '') setError('gender');
    else {
        setSuccess('gender');
        success++;
    }

    if(rUniversity.value == '') setError('university');
    else if(rUniversity.value == 'other' && uniInput.value == '') setError('university');
    else {
        setSuccess('university');
        success++;
    }

    if(rCollege.value == '') setError('college');
    else {
        setSuccess('college');
        success++;
    }

    if(rCourse.value == '') setError('course');
    else {
        setSuccess('course');
        success++;
    }

    if(rBranch.value == '') setError('branch');
    else if(rBranch.value == 'other' && branchInput.value == '') setError('branch');
    else {
        setSuccess('branch');
        success++;
    }

    if(rSemester.value == '') setError('semester');
    else {
        setSuccess('semester');
        success++;
    }

    // if(pass.value == '') setErrorPass('pass', 'Please enter your password', 'pass-message');
    // else {
    //     setSuccess('pass');
    //     success++;
    // }

    // if(cpass.value == '') setErrorPass('cpass', 'Please confirm your password', 'cpass-message');
    // else {
    //     setSuccess('cpass');
    //     success++;
    // }

    if(success == 10) {
        e.target.submit();
    }

}

function setErrorPass(id, message, msgid) {
    document.getElementById(`dashboard-${id}`).style.display = 'block';
    document.getElementById(`${msgid}`).innerHTML = `${message}`;
}
