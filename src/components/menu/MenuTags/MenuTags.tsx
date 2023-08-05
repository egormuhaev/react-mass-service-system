import styles from './MenuTags.module.css';
import { MenuTagsProps } from './MenuTags.props';
import cn from 'classnames';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { AiFillTags, AiFillSave, AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import Htag from '../../ui/Htag/Htag';

const MenuTags: React.FC<MenuTagsProps> = ({
  tags = [],
  theme,
  setNewTags,
  newTags,
  saveTagsQuery,
  deleteQuery,
}) => {
  const [newTag, setNewTag] = useState<string>('');

  const handleDeleteNewTagClick = (tag: string) => {
    return () => {
      const newTagList = newTags.filter((t) => t !== tag);
      setNewTags(newTagList);
    };
  };

  const handleDeleteTagClick = (tagId: string) => {
    return () => {
      deleteQuery(tagId);
    };
  };

  const handleSaveClick = async () => {
    saveTagsQuery(newTags);
    setNewTags([]);
  };

  const handleAddClick = () => {
    let isInclude = true;
    for (const tag of tags) {
      if (tag.tag === newTag) {
        isInclude = false;
      }
    }
    if (!newTags.includes(newTag) && newTag !== '' && isInclude) {
      setNewTags([...newTags, newTag]);
      setNewTag('');
    }
  };

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTag = e.target.value;
    setNewTag(newTag);
  };

  const tagsList = tags.map((tag, index) => (
    <div className={styles.tag} key={index}>
      {tag.tag}
      <Button
        className={styles.deleteBtn}
        onClick={handleDeleteTagClick(tag.id)}
        size="s"
        appearence="error"
        icon={<AiFillDelete />}
      />
    </div>
  ));

  const newTagsList = newTags.map((tag, index) => (
    <div className={cn(styles.tag, styles.new)} key={index}>
      {tag}
      <Button
        onClick={handleDeleteNewTagClick(tag)}
        size="s"
        appearence="error"
        icon={<AiFillDelete />}
      />
    </div>
  ));

  return (
    <div className={cn(styles.form, { [styles.dark]: theme === 'dark' })}>
      {newTags.length > 0 && (
        <Button
          size="m"
          appearence="success"
          icon={<AiFillSave />}
          text="Сохранить"
          style={{ width: '100%' }}
          onClick={handleSaveClick}
        />
      )}
      <Htag theme={theme} size="s">
        Tags:
      </Htag>
      {tagsList}
      {newTagsList}
      <div className={styles.add}>
        <Input
          sizeof="m"
          theme={theme}
          value={newTag}
          onInput={handleTagInput}
          postFix={{
            content: (
              <Button
                onClick={handleAddClick}
                size="s"
                appearence="primary"
                icon={<AiFillTags />}
                style={{ height: '100%', width: '100%', borderRadius: 0 }}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};

export default MenuTags;
