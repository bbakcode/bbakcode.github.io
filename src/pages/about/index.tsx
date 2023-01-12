import { Image } from "@components/image";
import { Page } from "@components/page";
import { Seo } from "@components/seo";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./about.module.scss";

interface AboutPageProps extends Omit<PageProps, ""> {}
//let cx = classNames.bind(styles);
const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <Page nav={[{ name: "🧑‍💻  빡코드", path: "/about" }]}>
      <div className={styles.header}>
        <p>안녕하세요.</p>
        <p>프론트엔드 개발자 장진석입니다. </p>
      </div>
      <div className={styles.history}>
        <div className={styles.logo}>
          <StaticImage src={"../../images/squadx.png"} alt="squadx_logo" />
        </div>
        <div className={styles.main}>
          <div className={styles.title}>
            스쿼드 엑스
            <span className={styles.date}>2022.03 ~ </span>
          </div>
          <ul className={styles.list}>
            <li>
              <span>BrixCloud (B2B 라이브 커머스)</span>
            </li>
            <ul>
              <li>
                <span>라이브 커머스 플레이어 리드개발 </span>
              </li>
              <li>
                <span>방송모아보기페이지 리드개발</span>
              </li>
            </ul>
            <li>
              <span>BrixHub (커머스 숏폼)</span>
            </li>
            <ul>
              <li>
                <span>플레이어 개발참여</span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.history}>
        <div className={styles.logo}>
          <div className={styles.ratio}></div>
          <StaticImage src={"../../images/sauce.png"} alt="sauce_logo" />
        </div>
        <div className={styles.main}>
          <div className={styles.title}>
            모비두
            <span className={styles.date}>2020.09 ~ 2022.03</span>
          </div>
          <ul className={styles.list}>
            <li>
              <span>SauceFlex (B2B 라이브커머스)</span>
            </li>
            <ul>
              <li>
                <span>라이브 커머스 플레이어 리드개발 </span>
              </li>
              <li>
                <span>방송모아보기페이지 리드개발</span>
              </li>
            </ul>
            <li>
              <span>SauceLive (B2C 라이브커머스)</span>
            </li>
            <ul>
              <li>
                <span>
                  라이브 커머스 플레이어 / 모아보기 / 관리자 CMS 개발참여
                </span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.history}>
        <div className={styles.logo}>
          <div className={styles.ratio}></div>
          <StaticImage src={"../../images/cyclogic.png"} alt="cyclogic_logo" />
        </div>
        <div className={styles.main}>
          <div className={styles.title}>
            사이클로직
            <span className={styles.date}>2017.01 ~ 2019.12</span>
          </div>
          <ul className={styles.list}>
            <li>
              <span>CoolinCloud (B2B 에너지관리)</span>
            </li>
            <ul>
              <li>
                <span>빌딩에너지 관리 시스템 (BEMS) 플랫폼 개발참여</span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.icon}>
          <a href="https://github.com/bbakcode" target="_blank">
            <svg height="25px" width="25px" viewBox="0 0 16 16" fill="#404040">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </Page>
  );
};

export const Head: HeadFC = () => <Seo />;

export default AboutPage;
