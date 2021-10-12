import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Somthing is going wrond..." />
      </div>
    </div>
  );
};

export default ErrorPage;
