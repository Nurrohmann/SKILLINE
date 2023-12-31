import Padding from '../padding/padding';
import Student from '@/assets/forTeachAndLearn/student.png';
import Image from 'next/image';
import styles from './forTeachAndLearn.module.css';

export default function ForTeachAndLearn() {
  return (
    <div className={styles.mainContainer}>
      <div
        className=' min-[500px]:w-[30rem] 
         lg:w-[100%] 
         min-[1488px]:w-[70rem]'
      >
        <Padding>
          <div className={styles.childContainer}>
            <div className={styles.descriptionContainer} data-aos='fade-right'>
              <h1 className={styles.titleDescription}>
                <span className={styles.spanText}>Tools</span> For Teachers And
                Learners
              </h1>
              <p className={styles.paragraphDescription}>
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
            <div className={styles.imgContainer} data-aos='fade-left'>
              <Image
                className={styles.studentImg}
                src={Student}
                alt='student-img'
              />
            </div>
          </div>
        </Padding>
      </div>
    </div>
  );
}
