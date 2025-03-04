import { useIntl } from '@umijs/max';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'By 郑州鼓点软件科技有限公司',
  });

  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        fontSize: '14px',
        lineHeight: '28px',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.88)',
        background: '#F4F6FB',
      }}
    >
      {`CopyRight © 2016- ${currentYear} ${defaultMessage}`}
    </div>
  );
};

export default Footer;
