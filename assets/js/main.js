
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftServices(profileData) {
    const softServices = document.getElementById('profile.skills.softSkills')
    softServices.innerHTML = profileData.services.softServices.map(services => `<li>${services}</li>`).join('')
}

//function updateHardSkills(profileData) {
//    const hardSkills = document.getElementById('profile.skills.hardSkills')
//    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
//}

function updateSocialMedia(profileData) {
    const socials = document.getElementById('profile.socialMedia');
    if (!profileData.socialMedia || !Array.isArray(profileData.socialMedia)) {
        console.error('profileData.socialMedia não é um array válido.');
        return;
    }
    socials.innerHTML = profileData.socialMedia.map(social => 
        `<li> <img src="${social.logo}" alt="${social.name}" title="${social.name}"> <a href="${social.url}" target="_blank">${social.name}</a></li>`
    ).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftServices(profileData)
    updateSocialMedia(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()