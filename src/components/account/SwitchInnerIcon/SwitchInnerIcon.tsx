export interface SwitchInnerIconProps {
  children: React.ReactNode;
}

const SwitchInnerIcon: React.FC<SwitchInnerIconProps> = ({ children }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default SwitchInnerIcon;
