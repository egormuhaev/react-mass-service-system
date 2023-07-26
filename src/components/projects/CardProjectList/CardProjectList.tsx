import styles from './CardProjectList.module.css';
import { CardProjectListProps } from './CardProjectList.props';
import CardProject from '../CardProject/CardProject';

const CardProjectList: React.FC<CardProjectListProps> = ({
  projects = [],
  theme,
}) => {
  const cards = projects.map((e) => (
    <CardProject key={e.id} theme={theme} {...e} />
  ));
  return <div className={styles.list}>{cards}</div>;
};

export default CardProjectList;
