import { withLayout } from '../../layouts/Layout/Layout';
import { useSettings } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import { MenuTags } from '../../components';
import { useEffect, useState } from 'react';
import { queryParams } from '../../routes/config.routes';
import styles from './Menu.module.css';
import { fetchInsertTags, fetchSelectTags, fetchDeleteTags } from '../../api';

export interface Tags {
  id: string;
  tag: string;
}

const Menu = () => {
  const [searchParams] = useSearchParams();
  const { settings } = useSettings();
  const [tags, setTags] = useState<Tags[]>([]);
  const [newTags, setNewTags] = useState<string[]>([]);

  const projectId = searchParams.get(queryParams.PROJECT_ID);

  useEffect(() => {
    getTagsQuery();
  });

  const getTagsQuery = async () => {
    if (projectId) {
      const { data, error } = await fetchSelectTags(projectId);
      if (error) console.log(error);
      else if (data) {
        const res = data.map((res, index) => ({
          id: res.id,
          tag: res.tag ?? `tag ${index}`,
        }));
        setTags(res);
      }
    }
  };

  const deleteTagQuery = async (tagId: string) => {
    const { data, error } = await fetchDeleteTags(tagId);
    if (error) console.log(error);
  };

  const saveTagsQuery = async (newTags: string[]) => {
    if (projectId) {
      const req = newTags.map((tag) => {
        return {
          project_id: projectId,
          tag,
        };
      });
      const { data, error } = await fetchInsertTags(req);
      if (error) console.log(error);
      else if (data) {
        const res = data.map((res, index) => ({
          id: res.id,
          tag: res.tag ?? `tag ${index}`,
        }));
        setTags([...tags, ...res]);
      }
    }
  };

  return (
    <div className={styles.page}>
      <MenuTags
        deleteQuery={deleteTagQuery}
        saveTagsQuery={saveTagsQuery}
        newTags={newTags}
        tags={tags}
        theme={settings.theme}
        setNewTags={setNewTags}
      />
    </div>
  );
};

export default withLayout(Menu);
