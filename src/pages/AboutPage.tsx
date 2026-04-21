import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>关于我 | 我的技术博客</title>
        <meta name="description" content="全栈工程师张三，分享前端工程化与性能优化心得。" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>关于我</h1>
        <div className={styles.aboutContent}>
        <p>
    ⚡ 你好，我是 陈序，一名专注于前端领域的全栈开发者。
  </p>
  <p>
    🛠️ 拥有多年一线大厂经验，目前专注于前端工程化、性能优化和React生态。
  </p>
  <p>
    📝 这个博客是我的技术沉淀地，记录实战心得与踩坑笔记，希望能和你一起把技术学扎实、用明白。
  </p>
  <p>
    📬 联系我：chenxu.dev@example.com
  </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;