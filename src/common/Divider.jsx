import './Divider.less';

const Divider = props => {
  const { text = '我也是有底线的' } = props;
  return (
    <div className="divider">
      <div className="divider-text">{text}</div>
    </div>
  );
};

export default Divider;
