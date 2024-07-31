
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/aldrim-visionpro/cartaodigitalaldrim/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}