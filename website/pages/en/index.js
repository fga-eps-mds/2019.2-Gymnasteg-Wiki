const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            {props.children}
          </div>
        </div>
      </div>
    );

    const Logo = props => (
        <img
          className="splash-logo"
          src={props.img_src}
          alt="Project Logo"
        />
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo.ico`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const FeatureItem = (props) => (
      <div className="feature-block">
        <img
          className="feature-img"
          src={`${baseUrl}img/${props.img}`}
          alt={props.alt}
        />
        <span className="feature-title">
          {props.title}
        </span>
          {props.description}
      </div>
    );

    const Features = () => (
      <div className="features-container">
        <FeatureItem
          alt="manager image"
          img="manager.png"
          title="Gerencie competições!"
          description="O Gymnasteg permite coordenadores a gerenciar todo o fluxo das competições de ginástica de forma prática e fácil!"
        />
         <FeatureItem
          alt="juries image"
          img="juries.png"
          title="Avalie os atletas"
          description="Além da coordenação das competições, o Gymnasteg permite que o corpo de jurados avalie a performance dos atletas."
        />
      </div>
    );

    const TeamItem = (props) => (
      <div className="team-container">
        <img
          src={props.src}
          className="team-img"
        />
        <span className="team-name">
          {props.name}
        </span>
        <span className="team-role">
          {props.role}
        </span>
      </div>
    );

    const teamList = [
      { src: 'https://avatars3.githubusercontent.com/u/22936236?s=400&v=4', name: 'Igor Veloso', role: 'EPS - Scrum Master' },
      { src: 'https://avatars0.githubusercontent.com/u/18502121?s=400&v=4', name: 'Byron Kamal', role: 'EPS - DevOps' },
      { src: 'https://avatars1.githubusercontent.com/u/37158351?s=400&v=4', name: 'João Victor', role: 'EPS - Product Owner' },
      { src: 'https://avatars0.githubusercontent.com/u/44177946?s=400&v=4', name: 'Luiz Pettengill', role: 'MDS - Desenvolvimento' },
      { src: 'https://avatars1.githubusercontent.com/u/43193827?s=460&v=4', name: 'Fabrício Monteiro', role: 'MDS - Desenvolvimento' },
      { src: 'https://avatars2.githubusercontent.com/u/23579166?s=460&v=4', name: 'Felipe Agustini', role: 'MDS - Desenvolvimento' },
      { src: 'https://avatars0.githubusercontent.com/u/35638067?s=400&v=4', name: 'Alan Marques', role: 'MDS - Desenvolvimento' },
      { src: 'https://avatars0.githubusercontent.com/u/5050667?s=400&v=4', name: 'Matheus Felizola', role: 'MDS - Desenvolvimento' },
      { src: 'https://avatars0.githubusercontent.com/u/46676030?s=400&v=4', name: 'Fellipe Araújo', role: 'MDS - Desenvolvimento' },
    ];

    const TeamContainer = () => (
      <div className="team-holder">
        <span className="team-section-title">
          O Time
        </span>
        <hr />
        <div className="team-grid">
          {
            teamList.map((item, index) => (
              <TeamItem
                key={index}
                src={item.src}
                name={item.name}
                role={item.role}
              />
            ))
          }
        </div>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <TeamContainer />
        </div>
      </div>
    );
  }
}

module.exports = Index;
