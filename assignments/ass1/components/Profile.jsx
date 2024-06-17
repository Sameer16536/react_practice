import React from 'react'
import { profileAtom ,profilePicAtom} from '../store/atom'
import { useRecoilValue } from 'recoil'
import '../components/Profile.css'


const Profile = () => {
    const profile = useRecoilValue(profileAtom)
    const profilePic = useRecoilValue(profilePicAtom)
  return (
    <div className="profile-card">
            <div className="profile-header">
                <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
            <div className="profile-body">
                <h2>{profile.name} <span>{profile.age}</span></h2>
                <p>{profile.place}</p>
                <div className="profile-stats">
                    <div className="stat">
                        <h3>{profile.follwers}K</h3>
                        <p>Followers</p>
                    </div>
                    <div className="stat">
                        <h3>{profile.likes}K</h3>
                        <p>Likes</p>
                    </div>
                    <div className="stat">
                        <h3>{profile.photos}K</h3>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
        </div>
        


   
  )
}

export default Profile