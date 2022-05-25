import styles from './profile.module.scss'

import { AlertIcon, SettingIcon, UserIcon } from 'assets/svgs/index'

const Profile = () => {
  return (
    <header className={styles.wrap}>
      <ul>
        <li>
          <button type='button' className={styles.alertWrap}>
            <AlertIcon className={styles.alertIcon} />
          </button>
        </li>
        <li>
          <button type='button'>
            <SettingIcon className={styles.settingIcon} />
          </button>
        </li>
        <li>
          <button type='button' className={styles.userWrap}>
            <div className={styles.userIconWrap}>
              <UserIcon className={styles.userIcon} />
            </div>
            <span>2B님</span>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Profile
