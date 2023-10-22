import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm'


async function main() {
    let input = document.getElementById('inputvalue').value
    const docs = document.getElementById('new_avatar')
    docs.innerHTML = ''
    const docs2 = document.getElementById('login')
    docs2.innerHTML = ''
    const docs3 = document.getElementById('bio')
    docs3.innerHTML = ''
    const docs4 = document.getElementById('location')
    docs4.innerHTML = ''
    const docs5 = document.getElementById('followers')
    docs5.innerHTML = ''
    try {
        const response = await axios.get(`https://api.github.com/users/${input}`)
        const status = response.status;
        if (status === 200) {
            console.log(response.data)
            const avatar = response.data['avatar_url']
            const new_data = document.getElementById('new_avatar')
            const profile_avatar = document.createElement('img')
            profile_avatar.src=avatar
            profile_avatar.className = 'new_avatar'
            new_data.appendChild(profile_avatar)
            const login = response.data['login']
            console.log("login", login)
            const new_login = document.getElementById('login')
            const new_login_response = document.createElement('p')
            new_login_response.textContent = `Username - ${login}`
            new_login_response.className = 'p-text'
            new_login.appendChild(new_login_response)
            const bio = document.getElementById('bio')
            const new_bio = document.createElement('p')
            new_bio.textContent = `Bio - ${response.data['bio']}`
            new_bio.className = 'p-text'
            bio.appendChild(new_bio)
            const location = document.getElementById('location')
            const new_location = document.createElement('p')
            new_location.textContent = `Location - ${response.data['location']}`
            new_location.className = 'p-text'
            location.appendChild(new_location)

            const followers = document.getElementById('followers')
            const new_followers = document.createElement('p')
            new_followers.textContent = `Followers - ${response.data['followers']}`
            new_followers.className = 'p-text'
            followers.appendChild(new_followers)
        } else {
            
        }
    } catch(err) {
        alert(`Can't get data from current user, status : ${err.response.status}`)
    }
}



document.getElementById('sendbtn').addEventListener(
    'click',
    function() {
        main()
    }
)
