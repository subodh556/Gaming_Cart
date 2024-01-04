import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="/Xbox.jpg" name="Xbox" />
        <CategoryCard image="/ps5.jpg" name="PS5" />
        <CategoryCard image="/switch.jpg" name="Switch" />
        
        <CategoryCard image="/pc.jpg" name="PC" />
        <CategoryCard image="/acce.jpg" name="Accessories"/>
      
      
      </div>
    </main>
  );
};

export default HomePage;