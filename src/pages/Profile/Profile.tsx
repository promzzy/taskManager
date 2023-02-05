import { FC } from "react";
import classes from './Profile.module.css'
import waveImage from '../../assets/svg/wave.svg'
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import useProfile from "./hooks/useProfile";

const Profile: FC = () => {

  const {state, dispatch} = useProfile()

    const {
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
   } = state;

  return(
        <div className={classes.pageRoot}>
       <div className={classes.loginBody}>
        <form className={classes.form}>
                 <div className={classes.inputWrap}>
      <div className={classes.inputRow}>
        <InputField
          className={classes.taskTitleInput}
          value={firstName}
          onChange={({target}) => dispatch({firstName: target.value})}
          placeholder="First Name"
          name="firstName"
           />
        <InputField
          className={classes.taskTitleInput}
          value={lastName}
          onChange={({target}) => dispatch({lastName: target.value})}
          name="lastName"
          placeholder="Last Name"
           />
      </div>
          <div className={classes.inputRow}>
        <InputField
          className={classes.taskTitleInput}
          value={email}
          onChange={({target}) => dispatch({email: target.value })}
          name="email"
          placeholder="Email Address"
           />
          <InputField
          className={classes.taskTitleInput}
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={({target}) => dispatch({phoneNumber: target.value})}
          name="phoneNumber"
           />
           </div>
          <TextArea
          className={classes.textarea}
          placeholder="Address"
          value={address}
          onChange={({target}) => dispatch({address: target.value})}
          name="address"
          />
          </div>
        </form>
       </div>
       <img src={waveImage} className={classes.imageBg} alt="" />
    </div>
  )
}

export default Profile;