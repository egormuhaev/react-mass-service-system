import { withLayout } from '../../layouts/Layout/Layout';
import { useEffect, useState } from 'react';
import { CreacteProjectModal, CardProjectList } from '../../components';
import styles from './Projects.module.css';
import {
  fetchGetAllProjectByUser,
  fetchInsertNewProjectByUser,
} from '../../api';
import { ProjectsTable } from '../../interfaces/Supabase.interface';
import { CardProjectProps } from '../../components/projects/CardProject/CardProject.props';
import { useMessage, useSettings } from '../../hooks';
import { useSearchParams } from 'react-router-dom';

const Projects: React.FC = () => {
  const { settings } = useSettings();

  const [searchParams] = useSearchParams();

  const userID = searchParams.get('id');

  const { message, sendLoading, sendMessage, removeLoading } = useMessage(
    settings.theme
  );

  const [value, setValue] = useState('');
  const [data, setData] = useState<ProjectsTable[] | null>([]);
  const [projects, setProjects] = useState<CardProjectProps[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    selectAllProjects();
  }, [reload]);

  useEffect(() => {
    if (data) {
      const list = data.map((p) => {
        return {
          title: p.name ?? '',
          subTitle: p.created_at ?? '',
          id: p.id,
          route: p.id,
        };
      });
      setProjects(list);
    }
  }, [data]);

  const selectAllProjects = async () => {
    if (userID) {
      const id = sendLoading({ text: 'Обновление' });
      const { data, error } = await fetchGetAllProjectByUser(userID);
      removeLoading(id);
      if (error) {
        sendMessage({ type: 'error', text: 'Ошибка' });
      } else {
        setData(data);
      }
    }
  };

  const onCreate = async () => {
    if (userID) {
      const id = sendLoading({ text: 'Создание' });
      const { data, error } = await fetchInsertNewProjectByUser({
        user_id: userID,
        name: value,
      });
      removeLoading(id);
      if (error) {
        sendMessage({ type: 'error', text: 'Ошибка' });
      } else {
        sendMessage({ type: 'success', text: 'Создание' });
        setReload(!reload);
      }
    }
  };

  return (
    <>
      <div className={styles.header}>
        <CreacteProjectModal
          value={value}
          setValue={setValue}
          theme={settings.theme}
          onCreate={onCreate}
        />
      </div>
      <CardProjectList projects={projects} theme={settings.theme} />
      {message}
    </>
  );
};

export default withLayout(Projects);
