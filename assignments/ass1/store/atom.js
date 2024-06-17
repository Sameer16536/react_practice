import { atom,selector} from "recoil";
import axios from "axios";

export  const profileAtom = atom({
    key: 'profileAtom',
    default:{
        name:'Sameer',
        age:'21',
        place:'Mumbai',
        follwers:'100',
        likes:'100',
        photos:4

    }
})

export const profilePicAtom = atom({
    key: "profilePicAtom",
    default: selector({
        key:"profilePicAtomSelector",
        get: async ()=>{
            const res = await axios.get("https://picsum.photos/200")
            return res.request.responseURL
        }
    })
});