import { useParams } from 'react-router-dom';
import style from './ProfilePage.module.scss';
import users from './user-content';

const ProfilePage = () => {
  return (
    <></>
    /*  <div className={style.mainCotainer}>
      <main className={style.main}>
        <h1>Cars</h1>
        <div className={style.container}>
          {users.map((user) => (
            <div className={style.card}>
              <h3>{user.gender}</h3>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
              <img
                src={user.avatar}
                alt={user.username}
                style={{ width: '200px' }}
              />
            </div>
          ))}
        </div>
      </main>
    </div> */
  );
};

export default ProfilePage;
